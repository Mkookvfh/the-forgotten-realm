import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { regionAt } from './worldData.js';

const LOAD_RADIUS = 190;
const UNLOAD_RADIUS = 240;

/* Vibrant fantasy world palette: warm stone, sunlit earth, colorful roofs
   and clear water. Applied per material instance on chunk load. */
const WORLD_PALETTE = {
  Ash_Ground: { color: 0x88ad5c, roughness: 1 },
  Dirt_Road: { color: 0xb58a58, roughness: 1 },
  Farm_Soil: { color: 0x986b42, roughness: 1 },
  Cobblestone: { color: 0xaaa79b, roughness: .95 },
  Castle_Stone: { color: 0xa6b4c0, roughness: .9 },
  Cliff_Rock: { color: 0x9aa6a8, roughness: 1 },
  Mountain_Rock: { color: 0x9caeb8, roughness: 1 },
  Dark_Rock: { color: 0x6d7f8d, roughness: 1 },
  Grave_Stone: { color: 0xa5b2b9, roughness: .88 },
  Dead_Wood: { color: 0x806047, roughness: 1 },
  Old_Wood: { color: 0x9b7045, roughness: .95 },
  Timber: { color: 0x8c613b, roughness: 1 },
  Iron: { color: 0x77767f, roughness: .42, metalness: .55 },
  Roof_Slate: { color: 0x607ca4, roughness: .78 },
  Roof_Tile: { color: 0xc65d3f, roughness: .85 },
  Plaster: { color: 0xe5d5ae, roughness: .95 },
  Market_Cloth: { color: 0xe16b57, roughness: 1 },
  Old_Bone: { color: 0xd5c9a8, roughness: .8 },
  Well_Water: { color: 0x5fb6d7, roughness: .1, metalness: .25 },
  Cursed_Lake: { color: 0x42a6bd, roughness: .08, metalness: .28 },
  Dark_Window: { color: 0x283b54, roughness: .3 },
  Window_Glow: {
    color: 0x533316, emissive: 0xffc75a,
    emissiveIntensity: 1.9, roughness: .5
  },
  Lava: {
    color: 0x8a2c10, emissive: 0xff7a36,
    emissiveIntensity: 2.8, roughness: .55
  },
  Cursed_Crystal: {
    color: 0x573da0, emissive: 0xb18cff,
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

/* Walkable surfaces. Everything else in a chunk is treated as an obstacle
   when it rises more than STEP_HEIGHT above the local ground. Roofs and
   window trim are excluded because their seams hang outside the wall line
   or sit inside it; the walls themselves are what must block movement. */
const NON_BLOCKING = new Set([
  'Ash_Ground', 'Dirt_Road', 'Farm_Soil', 'Cobblestone',
  'Cliff_Rock', 'Mountain_Rock',
  'Cursed_Lake', 'Well_Water', 'Lava',
  'Window_Glow', 'Dark_Window',
  'Roof_Slate', 'Roof_Tile', 'Market_Cloth',
  'Dark_Rock'
]);

/* A prop must stand this tall above the terrain to stop the player, so
   pebbles, bones lying flat and grass do not create invisible walls. */
const STEP_HEIGHT = .85;
const COLLISION_CELL = 1.0;

/* The streamed chunks ship as merged per-material meshes, so a mesh bounding
   box is the whole district and useless for collision. Instead every solid
   triangle edge is stamped into a 1 m occupancy grid, which turns walls,
   tree trunks, fences and gravestones into a walkable/blocked field. */
function buildCollisionGrid(scene, chunkBounds, groundAt) {
  const cell = COLLISION_CELL;
  const cols = Math.max(1, Math.ceil((chunkBounds.maxX - chunkBounds.minX) / cell));
  const rows = Math.max(1, Math.ceil((chunkBounds.maxZ - chunkBounds.minZ) / cell));
  const blocked = new Uint8Array(cols * rows);
  const ground = new Float32Array(cols * rows).fill(NaN);
  const matrix = new THREE.Matrix4();
  const v = new THREE.Vector3();
  let stamped = 0;

  const groundFor = (cx, cz) => {
    const gx = Math.min(cols - 1, Math.max(0, cx));
    const gz = Math.min(rows - 1, Math.max(0, cz));
    const key = gz * cols + gx;
    let h = ground[key];
    if (!Number.isNaN(h)) return h;
    h = groundAt(
      chunkBounds.minX + (gx + .5) * cell,
      chunkBounds.minZ + (gz + .5) * cell
    );
    ground[key] = Number.isFinite(h) ? h : 0;
    return ground[key];
  };

  const stamp = (x, z, topY) => {
    const cx = Math.floor((x - chunkBounds.minX) / cell);
    const cz = Math.floor((z - chunkBounds.minZ) / cell);
    if (cx < 0 || cz < 0 || cx >= cols || cz >= rows) return;
    const index = cz * cols + cx;
    if (blocked[index]) return;
    if (topY - groundFor(cx, cz) < STEP_HEIGHT) return;
    blocked[index] = 1;
    stamped += 1;
  };

  // Marks the cells a segment passes through, plus the neighbour it grazes so
  // a thin wall one vertex wide cannot slip between two cell centres.
  const stampSegment = (ax, az, bx, bz, topY) => {
    const length = Math.hypot(bx - ax, bz - az);
    const steps = Math.min(240, Math.ceil(length / (cell * .5)) + 1);
    for (let i = 0; i <= steps; i++) {
      const t = i / steps;
      const x = ax + (bx - ax) * t;
      const z = az + (bz - az) * t;
      stamp(x, z, topY);
      const fx = (x - chunkBounds.minX) / cell - Math.floor((x - chunkBounds.minX) / cell);
      const fz = (z - chunkBounds.minZ) / cell - Math.floor((z - chunkBounds.minZ) / cell);
      if (fx < .35) stamp(x - cell * .55, z, topY);
      else if (fx > .65) stamp(x + cell * .55, z, topY);
      if (fz < .35) stamp(x, z - cell * .55, topY);
      else if (fz > .65) stamp(x, z + cell * .55, topY);
    }
  };

  scene.traverse((object) => {
    if (!object.isMesh || !object.visible) return;
    const materials = Array.isArray(object.material)
      ? object.material
      : [object.material];
    if (materials.some((material) => material && NON_BLOCKING.has(material.name))) {
      return;
    }
    const geometry = object.geometry;
    if (!geometry || !geometry.attributes || !geometry.attributes.position) return;

    matrix.copy(object.matrixWorld);
    const position = geometry.attributes.position;
    const index = geometry.index;
    const count = index ? index.count : position.count;

    for (let i = 0; i < count; i += 3) {
      const a = index ? index.getX(i) : i;
      const b = index ? index.getX(i + 1) : i + 1;
      const c = index ? index.getX(i + 2) : i + 2;

      v.fromBufferAttribute(position, a).applyMatrix4(matrix);
      const ax = v.x, ay = v.y, az = v.z;
      v.fromBufferAttribute(position, b).applyMatrix4(matrix);
      const bx = v.x, by = v.y, bz = v.z;
      v.fromBufferAttribute(position, c).applyMatrix4(matrix);
      const cx = v.x, cy = v.y, cz = v.z;

      const topY = Math.max(ay, by, cy);
      const bottomY = Math.min(ay, by, cy);
      const groundY = groundFor(
        Math.floor(((ax + bx + cx) / 3 - chunkBounds.minX) / cell),
        Math.floor(((az + bz + cz) / 3 - chunkBounds.minZ) / cell)
      );
      if (topY - groundY < STEP_HEIGHT) continue;
      // Overhanging geometry (tree branches, arches, balconies) is walked
      // under, so only props that start near the ground become obstacles.
      if (bottomY - groundY > 1.8) continue;

      stampSegment(ax, az, bx, bz, topY);
      stampSegment(bx, bz, cx, cz, topY);
      stampSegment(cx, cz, ax, az, topY);
      if (stamped > cols * rows) break;
    }
  });

  return { minX: chunkBounds.minX, minZ: chunkBounds.minZ, cell, cols, rows, blocked, stamped };
}


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
  const collisionGrids = new Map();

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

        gltf.scene.updateMatrixWorld(true);
        const cx0 = -meta.worldSize / 2 + cx * meta.chunkSize;
        const cz0 = -meta.worldSize / 2 + cz * meta.chunkSize;
        collisionGrids.set(name, buildCollisionGrid(
          gltf.scene,
          {
            minX: cx0,
            maxX: cx0 + meta.chunkSize,
            minZ: cz0,
            maxZ: cz0 + meta.chunkSize
          },
          (x, z) => getHeight(x, z)
        ));
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
          collisionGrids.delete(name);
        }
      }
    }
  }

  /* True when a body of the given radius at (x, z) overlaps an obstacle cell
     in any streamed chunk. The body's centre may not enter a blocked cell and
     is kept a little clear of neighbouring ones, which keeps walls solid
     without turning every tree into a 3 m no-go circle. */
  function blocked(x, z, radius = .55) {
    const reach = 1;
    const margin = radius + COLLISION_CELL * .15;
    for (const grid of collisionGrids.values()) {
      if (
        x < grid.minX - COLLISION_CELL || z < grid.minZ - COLLISION_CELL ||
        x > grid.minX + grid.cols * grid.cell + COLLISION_CELL ||
        z > grid.minZ + grid.rows * grid.cell + COLLISION_CELL
      ) continue;

      const cx = Math.floor((x - grid.minX) / grid.cell);
      const cz = Math.floor((z - grid.minZ) / grid.cell);

      if (
        cx >= 0 && cz >= 0 && cx < grid.cols && cz < grid.rows &&
        grid.blocked[cz * grid.cols + cx]
      ) return true;

      for (let ox = -reach; ox <= reach; ox++) {
        for (let oz = -reach; oz <= reach; oz++) {
          const gx = cx + ox;
          const gz = cz + oz;
          if (gx < 0 || gz < 0 || gx >= grid.cols || gz >= grid.rows) continue;
          if (!grid.blocked[gz * grid.cols + gx]) continue;

          const dx = x - (grid.minX + (gx + .5) * grid.cell);
          const dz = z - (grid.minZ + (gz + .5) * grid.cell);
          if (dx * dx + dz * dz <= margin * margin) return true;
        }
      }
    }
    return false;
  }

  return {
    init,
    update,
    getHeight,
    blocked,
    getRegion: (x, z) => regionAt(x, z),
    get loadedCount() { return loaded.size; },
    get pendingCount() { return requested.size; },
    get collisionCells() {
      let total = 0;
      let solid = 0;
      for (const grid of collisionGrids.values()) {
        total += grid.blocked.length;
        solid += grid.stamped;
      }
      return { chunks: collisionGrids.size, cells: total, solid };
    },
    get ready() { return ready; },
    get failed() { return failed; },
    root
  };
}
