import * as THREE from 'three';

import {
  VEGETATION_CONFIG,
  getVegetationDensity
} from './vegetation-config.js';

import {
  getVegetationBiome
} from './vegetation-biomes.js';

import {
  createGrassTile,
  updateGrassWind
} from './grass-generator.js';

export function createVegetationManager({
  scene,
  getHeight,
  getRegion,
  mobile = true
}) {
  if (!scene || typeof getHeight !== 'function') {
    throw new Error(
      'VegetationManager requires scene and getHeight'
    );
  }

  const root = new THREE.Group();
  root.name = 'ProceduralVegetation';

  scene.add(root);

  const tiles = new Map();
  const config = VEGETATION_CONFIG;
  const density = getVegetationDensity(mobile);

  let elapsedTime = 0;
  let lastUpdateX = NaN;
  let lastUpdateZ = NaN;

  const tileSize = config.tileSize;
  const radius = config.renderRadius;

  function tileKey(x, z) {
    return `${x},${z}`;
  }

  function buildTile(tileX, tileZ) {
    const key = tileKey(tileX, tileZ);

    if (tiles.has(key)) return;

    const centerX = tileX * tileSize + tileSize / 2;
    const centerZ = tileZ * tileSize + tileSize / 2;

    const groundHeight = getHeight(centerX, centerZ);

    // รอจนกว่าระบบภูมิประเทศจะพร้อม
    if (
      groundHeight === null ||
      !Number.isFinite(groundHeight)
    ) {
      return;
    }

    const distance = Math.max(
      Math.abs(tileX - Math.floor(lastUpdateX / tileSize)),
      Math.abs(tileZ - Math.floor(lastUpdateZ / tileSize))
    );

    let count = density.far;

    if (distance <= 1) {
      count = density.near;
    } else if (distance <= 2) {
      count = density.middle;
    }

    const regionData = getRegion
  ? getRegion(centerX, centerZ)
  : null;

const regionId =
  typeof regionData === 'string'
    ? regionData
    : regionData?.id;

const biome = getVegetationBiome(regionId);

    count = Math.max(
      0,
      Math.floor(count * biome.densityMultiplier)
    );

    const mesh = createGrassTile({
      centerX,
      centerZ,
      tileSize,
      count,
      getHeight,
      biome
    });

    mesh.name = `Grass_${key}`;
    mesh.castShadow = false;
    mesh.receiveShadow = false;
    mesh.frustumCulled = true;

    root.add(mesh);
    tiles.set(key, mesh);
  }

  function removeOldTiles(playerTileX, playerTileZ) {
    for (const [key, mesh] of tiles) {
      const [x, z] = key.split(',').map(Number);

      const outside =
        Math.abs(x - playerTileX) > radius ||
        Math.abs(z - playerTileZ) > radius;

      if (outside) {
        root.remove(mesh);

        mesh.geometry.dispose();
        mesh.material.dispose();

        tiles.delete(key);
      }
    }
  }

  function update(position, deltaTime = 0) {
    if (!position) return;

    elapsedTime += Math.max(0, deltaTime);

    const playerTileX = Math.floor(position.x / tileSize);
    const playerTileZ = Math.floor(position.z / tileSize);

    const moved =
      playerTileX !== Math.floor(lastUpdateX / tileSize) ||
      playerTileZ !== Math.floor(lastUpdateZ / tileSize);

    if (moved || tiles.size === 0) {
      lastUpdateX = position.x;
      lastUpdateZ = position.z;

      removeOldTiles(playerTileX, playerTileZ);

      for (let x = -radius; x <= radius; x++) {
        for (let z = -radius; z <= radius; z++) {
          buildTile(
            playerTileX + x,
            playerTileZ + z
          );
        }
      }
    }

    for (const mesh of tiles.values()) {
      updateGrassWind(mesh, elapsedTime);
    }
  }

  function dispose() {
    for (const mesh of tiles.values()) {
      root.remove(mesh);
      mesh.geometry.dispose();
      mesh.material.dispose();
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
    }
  };
}