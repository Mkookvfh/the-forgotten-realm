import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { regionAt } from './worldData.js';

const LOAD_RADIUS = 190;
const UNLOAD_RADIUS = 240;

/* The exported world GLB palette was authored with near-black linear base
   colours (0.003-0.03), which is roughly 10x too dark for lit rendering:
   whole districts collapsed into flat silhouettes. These targets re-light
   the same hue identity while keeping a grim, desaturated dark fantasy
   look. Applied per material instance on chunk load. */
const WORLD_PALETTE = {
  Ash_Ground: { color: 0x5c5442, roughness: 1 },
  Dirt_Road: { color: 0x68553e, roughness: 1 },
  Farm_Soil: { color: 0x554030, roughness: 1 },
  Cobblestone: { color: 0x635f59, roughness: .95 },
  Castle_Stone: { color: 0x6e6a6e, roughness: .9 },
  Cliff_Rock: { color: 0x5e5b5c, roughness: 1 },
  Mountain_Rock: { color: 0x53514f, roughness: 1 },
  Dark_Rock: { color: 0x444243, roughness: 1 },
  Grave_Stone: { color: 0x7c7a78, roughness: .88 },
  Dead_Wood: { color: 0x4b3a2a, roughness: 1 },
  Old_Wood: { color: 0x6b4c31, roughness: .95 },
  Timber: { color: 0x4b3725, roughness: 1 },
  Iron: { color: 0x77767f, roughness: .42, metalness: .55 },
  Roof_Slate: { color: 0x3d3d4a, roughness: .78 },
  Roof_Tile: { color: 0x7e3e2d, roughness: .85 },
  Plaster: { color: 0xafa28b, roughness: .95 },
  Market_Cloth: { color: 0x7f3434, roughness: 1 },
  Old_Bone: { color: 0xd5c9a8, roughness: .8 },
  Well_Water: { color: 0x16252e, roughness: .1, metalness: .4 },
  Cursed_Lake: { color: 0x14212a, roughness: .08, metalness: .45 },
  Dark_Window: { color: 0x0b0d15, roughness: .3 },
  Window_Glow: {
    color: 0x241605, emissive: 0xffa63a,
    emissiveIntensity: 1.9, roughness: .5
  },
  Lava: {
    color: 0x3a1105, emissive: 0xff5a1e,
    emissiveIntensity: 2.8, roughness: .55
  },
  Cursed_Crystal: {
    color: 0x2f1148, emissive: 0x8f3ce8,
    emissiveIntensity: 1.1, roughness: .28, metalness: .3
  }
};

/* Everything except these soft surfaces gets faceted normals: the world mesh
   is very low-poly, and smooth shading made rock spires read like tents. */
const KEEP_SMOOTH = new Set([
  'Ash_Ground', 'Dirt_Road', 'Farm_Soil', 'Plaster',
  'Cursed_Lake', 'Well_Water', 'Lava',
  'Window_Glow', 'Dark_Window'
]);

/* Flat surfaces should not cast shadows (they only cause acne and cost). */
const NO_SHADOW_CAST = new Set([
  'Ash_Ground', 'Dirt_Road', 'Farm_Soil', 'Cobblestone',
  'Cursed_Lake', 'Well_Water', 'Lava'
]);

/* The exported "Dark_Rock" props are tall cone spires scattered in even
   rows: from the default camera they read as a village of black tents and
   swallow the silhouette of everything else. They are dropped so the
   low-poly outcrops, dead trees and town read clearly instead. */
const HIDDEN_PROPS = new Set(['Dark_Rock']);

/* The world meshes ship without textures, so large stone/timber/soil
   surfaces read as flat plastic. This injects cheap world-space value noise
   into the diffuse term to fake grain, lichen and weathered stone. */
function addSurfaceDetail(material, octaves) {
  material.onBeforeCompile = (shader) => {
    shader.vertexShader = shader.vertexShader
      .replace(
        '#include <common>',
        '#include <common>\nvarying vec3 vWorldDetailPos;'
      )
      .replace(
        '#include <begin_vertex>',
        '#include <begin_vertex>\n' +
        '  vWorldDetailPos = (modelMatrix * vec4(transformed, 1.0)).xyz;'
      );

    shader.fragmentShader = shader.fragmentShader
      .replace(
        '#include <common>',
        `#include <common>
        varying vec3 vWorldDetailPos;
        float frHash(vec2 p) {
          p = fract(p * vec2(123.34, 456.21));
          p += dot(p, p + 45.32);
          return fract(p.x * p.y);
        }
        float frNoise(vec2 p) {
          vec2 i = floor(p);
          vec2 f = fract(p);
          f = f * f * (3.0 - 2.0 * f);
          float a = frHash(i);
          float b = frHash(i + vec2(1.0, 0.0));
          float c = frHash(i + vec2(0.0, 1.0));
          float d = frHash(i + vec2(1.0, 1.0));
          return mix(mix(a, b, f.x), mix(c, d, f.x), f.y);
        }`
      )
      .replace(
        '#include <color_fragment>',
        `#include <color_fragment>
        float macro = frNoise(vWorldDetailPos.xz * 0.16 + 3.0);
        float dA = frNoise(vWorldDetailPos.xz * 1.1 + vWorldDetailPos.y * 0.6);
        float dB = frNoise(vWorldDetailPos.xz * 5.3 + 11.0);
        ${octaves > 2 ? 'float dC = frNoise(vWorldDetailPos.xz * 19.0 + 41.0);' : ''}
        float detail = macro * 0.34 + dA * 0.34 + dB * 0.22${octaves > 2 ? ' + dC * 0.12' : ''};
        float shade = 0.48 + 1.05 * detail;
        diffuseColor.rgb *= vec3(
          shade,
          shade * (0.96 + 0.06 * detail),
          shade * (0.90 + 0.14 * detail)
        );`
      );

  };
  material.customProgramCacheKey = () => 'world-detail-surface';
}

function styleMaterial(material, detail) {
  if (!material || !material.isMeshStandardMaterial) return;
  const preset = WORLD_PALETTE[material.name];
  if (!preset) return;

  material.color.setHex(preset.color);
  if (preset.roughness !== undefined) material.roughness = preset.roughness;
  if (preset.metalness !== undefined) material.metalness = preset.metalness;
  if (preset.emissive !== undefined) {
    material.emissive.setHex(preset.emissive);
    material.emissiveIntensity = preset.emissiveIntensity ?? 1;
  }
  if (!KEEP_SMOOTH.has(material.name)) {
    material.flatShading = true;
  }
  if (detail && preset.emissive === undefined && preset.metalness === undefined) {
    addSurfaceDetail(material, detail);
  }
  material.needsUpdate = true;
}

export function createWorldStreamer({ scene, baseUrl = 'assets/world/', detail = 3 }) {
  const loader = new GLTFLoader();
  const root = new THREE.Group();
  root.name = 'StreamedWorld';
  scene.add(root);

  const loaded = new Map();
  const requested = new Set();

  let meta = null;
  let heightmap = null;
  let ready = false;
  let failed = false;
  let lastCenter = -1;

  async function init() {
    try {
      const [metaResponse, heightResponse] = await Promise.all([
        fetch(`${baseUrl}world-meta.json`),
        fetch(`${baseUrl}heightmap.bin`)
      ]);

      if (!metaResponse.ok || !heightResponse.ok) {
        throw new Error('world assets unavailable');
      }

      meta = await metaResponse.json();
      heightmap = new Float32Array(await heightResponse.arrayBuffer());
      ready = true;
      return true;
    } catch (error) {
      failed = true;
      console.error('WORLD STREAM ERROR:', error);
      return false;
    }
  }

  function getHeight(x, z) {
    if (!ready || !heightmap || !meta) return null;

    const map = meta.heightmap;
    if (x < map.min || x > map.max || z < map.min || z > map.max) {
      return null;
    }

    const gx = (x - map.min) / map.step;
    const gz = (z - map.min) / map.step;
    const x0 = Math.floor(gx);
    const z0 = Math.floor(gz);
    const x1 = Math.min(map.grid, x0 + 1);
    const z1 = Math.min(map.grid, z0 + 1);
    const tx = gx - x0;
    const tz = gz - z0;
    const stride = map.grid + 1;

    const h00 = heightmap[z0 * stride + x0];
    const h10 = heightmap[z0 * stride + x1];
    const h01 = heightmap[z1 * stride + x0];
    const h11 = heightmap[z1 * stride + x1];

    const top = h00 + (h10 - h00) * tx;
    const bottom = h01 + (h11 - h01) * tx;
    return top + (bottom - top) * tz;
  }

  function chunkCenter(index) {
    const cx = index % meta.grid;
    const cz = Math.floor(index / meta.grid);
    return {
      x: -meta.worldSize / 2 + (cx + .5) * meta.chunkSize,
      z: -meta.worldSize / 2 + (cz + .5) * meta.chunkSize
    };
  }

  function disposeChunk(group) {
    group.traverse((object) => {
      if (!object.isMesh) return;
      if (object.geometry) object.geometry.dispose();
      if (Array.isArray(object.material)) {
        object.material.forEach((material) => material.dispose());
      } else if (object.material) {
        object.material.dispose();
      }
    });
  }

  function loadChunk(index, cx, cz) {
    const name = `chunk-${cx}-${cz}`;
    requested.add(name);

    loader.load(
      `${baseUrl}chunks/${name}.glb`,
      (gltf) => {
        requested.delete(name);
        if (!ready || loaded.has(name)) return;

        gltf.scene.name = name;
        gltf.scene.traverse((object) => {
          if (!object.isMesh) return;
          object.receiveShadow = true;
          const materials = Array.isArray(object.material)
            ? object.material
            : [object.material];
          materials.forEach((material) => styleMaterial(material, detail));
          if (materials.some(
            (material) => material && HIDDEN_PROPS.has(material.name)
          )) {
            object.visible = false;
            return;
          }
          object.castShadow = !materials.some(
            (material) => material && NO_SHADOW_CAST.has(material.name)
          );
          object.frustumCulled = true;
        });

        root.add(gltf.scene);
        loaded.set(name, gltf.scene);
      },
      undefined,
      () => requested.delete(name)
    );
  }

  function update(position) {
    if (!ready || !meta) return;

    const cx = Math.max(0, Math.min(
      meta.grid - 1,
      Math.floor((position.x + meta.worldSize / 2) / meta.chunkSize)
    ));
    const cz = Math.max(0, Math.min(
      meta.grid - 1,
      Math.floor((position.z + meta.worldSize / 2) / meta.chunkSize)
    ));
    const centerIndex = cz * meta.grid + cx;
    if (centerIndex === lastCenter) return;
    lastCenter = centerIndex;

    for (let iz = 0; iz < meta.grid; iz++) {
      for (let ix = 0; ix < meta.grid; ix++) {
        const index = iz * meta.grid + ix;
        const center = chunkCenter(index);
        const distance = Math.hypot(
          center.x - position.x,
          center.z - position.z
        );
        const name = `chunk-${ix}-${iz}`;

        if (distance <= LOAD_RADIUS && !loaded.has(name) && !requested.has(name)) {
          loadChunk(index, ix, iz);
        } else if (
          distance > UNLOAD_RADIUS &&
          loaded.has(name)
        ) {
          const group = loaded.get(name);
          root.remove(group);
          disposeChunk(group);
          loaded.delete(name);
        }
      }
    }
  }

  return {
    init,
    update,
    getHeight,
    getRegion: (x, z) => regionAt(x, z),
    get loadedCount() { return loaded.size; },
    get pendingCount() { return requested.size; },
    get ready() { return ready; },
    get failed() { return failed; },
    root
  };
}
