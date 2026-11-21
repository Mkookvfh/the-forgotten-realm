import * as THREE from 'three';
import { terrainHeightAt } from './world-biomes.js';
import { clampToWorld, getZoneAt, WORLD_BOUNDS } from './world-config.js';

const DOWN = new THREE.Vector3(0, -1, 0);
const NORMAL_MATRIX = new THREE.Matrix3();

export function isPointInBoundsXZ(bounds, x, z) {
  return Boolean(bounds) && x >= bounds.min.x && x <= bounds.max.x && z >= bounds.min.z && z <= bounds.max.z;
}

export class SpatialHash {
  constructor(cellSize = 24) {
    this.cellSize = cellSize;
    this.cells = new Map();
  }

  static key(cx, cz) {
    return `${cx}:${cz}`;
  }

  cellOf(x, z) {
    return { cx: Math.floor(x / this.cellSize), cz: Math.floor(z / this.cellSize) };
  }

  insert(collider) {
    const { cx, cz } = this.cellOf(collider.x, collider.z);
    const key = SpatialHash.key(cx, cz);
    let cell = this.cells.get(key);
    if (!cell) {
      cell = new Set();
      this.cells.set(key, cell);
    }
    cell.add(collider);
    collider._cellKey = key;
  }

  remove(collider) {
    if (!collider._cellKey) return;
    const cell = this.cells.get(collider._cellKey);
    if (cell) {
      cell.delete(collider);
      if (cell.size === 0) this.cells.delete(collider._cellKey);
    }
    delete collider._cellKey;
  }

  query(x, z, radius, out = []) {
    out.length = 0;
    const min = this.cellOf(x - radius, z - radius);
    const max = this.cellOf(x + radius, z + radius);
    for (let cx = min.cx; cx <= max.cx; cx++) {
      for (let cz = min.cz; cz <= max.cz; cz++) {
        const cell = this.cells.get(SpatialHash.key(cx, cz));
        if (!cell) continue;
        for (const collider of cell) out.push(collider);
      }
    }
    return out;
  }

  clear() {
    this.cells.clear();
  }
}

export function createImportedTerrainProbe({ getWorld, getBounds, raycaster }) {
  const origin = new THREE.Vector3();

  return {
    contains(x, z) {
      return isPointInBoundsXZ(getBounds(), x, z);
    },
    heightAt(x, z, referenceY = 0) {
      const world = getWorld();
      const bounds = getBounds();
      if (!world || !bounds) return null;

      origin.set(x, bounds.max.y + 50, z);
      raycaster.set(origin, DOWN);
      raycaster.near = 0;
      raycaster.far = bounds.max.y - bounds.min.y + 100;

      const hits = raycaster.intersectObject(world, true);
      let bestHeight = null;
      let bestDistance = Infinity;

      for (const hit of hits) {
        if (!hit.face) continue;
        NORMAL_MATRIX.getNormalMatrix(hit.object.matrixWorld);
        const normal = hit.face.normal.clone().applyMatrix3(NORMAL_MATRIX).normalize();
        if (normal.y <= 0.6) continue;
        const distance = Math.abs(hit.point.y - referenceY);
        if (distance < bestDistance) {
          bestDistance = distance;
          bestHeight = hit.point.y;
        }
      }
      return bestHeight;
    }
  };
}

export function createWorldCollision({
  worldBounds = WORLD_BOUNDS,
  getImportedWorld,
  getImportedBounds,
  raycaster,
  getChunkAt,
  clampMargin = 2
}) {
  const spatial = new SpatialHash();
  const chunkColliders = new Map();
  const probe = createImportedTerrainProbe({ getWorld: getImportedWorld, getBounds: getImportedBounds, raycaster });
  const nearby = [];

  return {
    probe,
    spatial,
    addColliders(key, colliders) {
      this.removeColliders(key);
      const list = Array.isArray(colliders) ? colliders : [];
      chunkColliders.set(key, list);
      for (const collider of list) spatial.insert(collider);
    },
    removeColliders(key) {
      const list = chunkColliders.get(key);
      if (!list) return;
      for (const collider of list) spatial.remove(collider);
      chunkColliders.delete(key);
    },
    blocked(x, z, radius = .55) {
      if (x < worldBounds.minX + clampMargin || x > worldBounds.maxX - clampMargin ||
          z < worldBounds.minZ + clampMargin || z > worldBounds.maxZ - clampMargin) return true;
      spatial.query(x, z, radius + 4, nearby);
      for (const collider of nearby) {
        const dx = x - collider.x;
        const dz = z - collider.z;
        const minDistance = radius + collider.radius;
        if (dx * dx + dz * dz < minDistance * minDistance) return true;
      }
      return false;
    },
    clampPosition(position) {
      const clamped = clampToWorld(position.x, position.z, clampMargin);
      position.x = clamped.x;
      position.z = clamped.z;
      return position;
    },
    terrainHeightAt(x, z, referenceY = 0) {
      if (probe.contains(x, z)) {
        const height = probe.heightAt(x, z, referenceY);
        if (height !== null) return height;
      }
      const chunk = getChunkAt ? getChunkAt(x, z) : null;
      if (chunk && chunk.terrain && chunk.terrain.sampleHeight) {
        const sampled = chunk.terrain.sampleHeight(x, z);
        if (sampled !== null && sampled !== undefined) return sampled;
      }
      return terrainHeightAt(x, z, getZoneAt(x, z));
    },
    dispose() {
      spatial.clear();
      chunkColliders.clear();
    }
  };
}
