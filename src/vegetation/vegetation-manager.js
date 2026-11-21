import * as THREE from 'three';
import { createGrassTile } from './grass-generator.js';
import { VEGETATION_CONFIG } from './vegetation-config.js';

export function createVegetationManager({
  scene,
  getHeight,
  getRegion,
  mobile = false
}) {
  if (!scene || typeof getHeight !== 'function' || typeof getRegion !== 'function') {
    throw new TypeError('VegetationManager requires scene, getHeight and getRegion');
  }

  const root = new THREE.Group();
  root.name = 'ProceduralVegetation';
  scene.add(root);

  const tiles = new Map();
  const tileSize = VEGETATION_CONFIG.tileSize;
  const radius = VEGETATION_CONFIG.tileRadius;
  const profile = mobile ? VEGETATION_CONFIG.mobile : VEGETATION_CONFIG.desktop;
  let lastCenterKey = '';
  let elapsed = 0;
  let disposed = false;

  function densityForDistance(distanceInTiles) {
    if (distanceInTiles <= 1.1) return profile.near;
    if (distanceInTiles <= 2.1) return profile.middle;
    return profile.far;
  }

  function tileKey(tx, tz) {
    return `${tx},${tz}`;
  }

  function buildTile(tx, tz, playerX, playerZ) {
    const key = tileKey(tx, tz);
    if (tiles.has(key)) return;

    const centerX = tx * tileSize + tileSize / 2;
    const centerZ = tz * tileSize + tileSize / 2;
    const distance = Math.hypot(centerX - playerX, centerZ - playerZ) / tileSize;
    const density = densityForDistance(distance);

    const tile = createGrassTile({
      x: tx * tileSize + tileSize / 2,
      z: tz * tileSize + tileSize / 2,
      tileSize,
      density,
      seed: ((tx * 73856093) ^ (tz * 19349663) ^ 0x5f3759df) >>> 0,
      getHeight,
      getRegion,
      mobile
    });

    if (tile.count > 0) {
      root.add(tile);
      tiles.set(key, tile);
    } else {
      tile.geometry.dispose();
      tile.material.dispose();
    }
  }

  function rebuildAround(position) {
    const centerTileX = Math.floor(position.x / tileSize);
    const centerTileZ = Math.floor(position.z / tileSize);
    const nextCenterKey = tileKey(centerTileX, centerTileZ);
    if (nextCenterKey === lastCenterKey) return;
    lastCenterKey = nextCenterKey;

    const keep = new Set();

    for (let tz = centerTileZ - radius; tz <= centerTileZ + radius; tz++) {
      for (let tx = centerTileX - radius; tx <= centerTileX + radius; tx++) {
        const centerX = tx * tileSize + tileSize / 2;
        const centerZ = tz * tileSize + tileSize / 2;
        const distance = Math.hypot(
          centerX - position.x,
          centerZ - position.z
        ) / tileSize;

        if (distance > radius + 0.75) continue;

        const key = tileKey(tx, tz);
        keep.add(key);
        buildTile(tx, tz, position.x, position.z);
      }
    }

    for (const [key, tile] of tiles) {
      if (keep.has(key)) continue;
      root.remove(tile);
      tile.geometry.dispose();
      tile.material.dispose();
      tiles.delete(key);
    }
  }

  function update(position, deltaTime = 0) {
    if (disposed || !position || !Number.isFinite(position.x) || !Number.isFinite(position.z)) {
      return;
    }

    const playerGround = getHeight(position.x, position.z);
    if (!Number.isFinite(playerGround)) return;

    elapsed += Math.max(0, Math.min(deltaTime, 0.05));
    rebuildAround(position);

    for (const tile of tiles.values()) {
      const uniforms = tile.material.userData.windUniforms;
      if (uniforms) uniforms.uGrassTime.value = elapsed;
    }
  }

  function dispose() {
    if (disposed) return;
    disposed = true;

    for (const tile of tiles.values()) {
      root.remove(tile);
      tile.geometry.dispose();
      tile.material.dispose();
    }
    tiles.clear();
    scene.remove(root);
  }

  return {
    update,
    dispose,
    root,
    get tileCount() {
      return tiles.size;
    },
    get bladeCount() {
      let total = 0;
      for (const tile of tiles.values()) total += tile.count;
      return total;
    }
  };
}
