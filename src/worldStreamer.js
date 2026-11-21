import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { regionAt } from './worldData.js';

const LOAD_RADIUS = 190;
const UNLOAD_RADIUS = 240;

export function createWorldStreamer({ scene, baseUrl = 'assets/world/' }) {
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
          object.castShadow = false;
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
