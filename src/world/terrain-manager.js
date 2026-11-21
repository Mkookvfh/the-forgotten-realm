import * as THREE from 'three';
import { CHUNK_SIZE, CHUNK_SEGMENTS } from './world-config.js';
import { biomeStyle, hash2, terrainHeightAt } from './world-biomes.js';

export class TerrainManager {
  constructor() {
    this.materials = new Map();
    this.waterMaterials = new Map();
    this.waterGeometry = new THREE.PlaneGeometry(CHUNK_SIZE, CHUNK_SIZE);
    this.waterGeometry.rotateX(-Math.PI / 2);
    this.chunks = new Map();
  }

  getGroundMaterial(biome) {
    let material = this.materials.get(biome);
    if (!material) {
      material = new THREE.MeshStandardMaterial({
        color: 0xffffff,
        vertexColors: true,
        roughness: biomeStyle(biome).roughness,
        flatShading: true
      });
      this.materials.set(biome, material);
    }
    return material;
  }

  getWaterMaterial(biome) {
    let material = this.waterMaterials.get(biome);
    if (!material) {
      material = new THREE.MeshStandardMaterial({
        color: biomeStyle(biome).water,
        roughness: .22,
        metalness: .12,
        transparent: true,
        opacity: .76,
        depthWrite: false
      });
      this.waterMaterials.set(biome, material);
    }
    return material;
  }

  buildChunk(chunk, zone, skipMesh = false) {
    const geometry = new THREE.PlaneGeometry(CHUNK_SIZE, CHUNK_SIZE, CHUNK_SEGMENTS, CHUNK_SEGMENTS);
    geometry.rotateX(-Math.PI / 2);

    const positions = geometry.attributes.position;
    const colors = new Float32Array(positions.count * 3);
    const heights = new Float32Array(positions.count);
    const baseColor = new THREE.Color(biomeStyle(zone.biome).ground);
    const tint = new THREE.Color();
    const step = CHUNK_SIZE / CHUNK_SEGMENTS;
    const waterLevel = zone.terrain.waterLevel;
    let minHeight = Infinity;
    let maxHeight = -Infinity;

    for (let i = 0; i < positions.count; i++) {
      const x = positions.getX(i) + chunk.centerX;
      const z = positions.getZ(i) + chunk.centerZ;
      const height = terrainHeightAt(x, z, zone);
      heights[i] = height;
      positions.setY(i, height);
      minHeight = Math.min(minHeight, height);
      maxHeight = Math.max(maxHeight, height);

      const variation = (hash2(Math.floor(x / 7), Math.floor(z / 7), 11) - .5) * .12;
      const wetness = height < waterLevel + 1 ? -.07 : 0;
      tint.copy(baseColor).offsetHSL(0, 0, variation + wetness);
      colors[i * 3] = tint.r;
      colors[i * 3 + 1] = tint.g;
      colors[i * 3 + 2] = tint.b;
    }

    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    geometry.computeVertexNormals();
    geometry.translate(chunk.centerX, 0, chunk.centerZ);
    positions.needsUpdate = true;

    const terrain = {
      geometry,
      heights,
      minHeight,
      maxHeight,
      step,
      sampleHeight(x, z) {
        const lx = THREE.MathUtils.clamp((x - chunk.minX) / step, 0, CHUNK_SEGMENTS - .0001);
        const lz = THREE.MathUtils.clamp((z - chunk.minZ) / step, 0, CHUNK_SEGMENTS - .0001);
        const col = Math.floor(lx);
        const row = Math.floor(lz);
        const tx = lx - col;
        const tz = lz - row;
        const rowStride = CHUNK_SEGMENTS + 1;
        const i00 = row * rowStride + col;
        const i10 = i00 + 1;
        const i01 = i00 + rowStride;
        const i11 = i01 + 1;
        const a = heights[i00] * (1 - tx) + heights[i10] * tx;
        const b = heights[i01] * (1 - tx) + heights[i11] * tx;
        return a * (1 - tz) + b * tz;
      }
    };

    if (!skipMesh) {
      const mesh = new THREE.Mesh(geometry, this.getGroundMaterial(zone.biome));
      mesh.receiveShadow = true;
      mesh.castShadow = false;
      terrain.mesh = mesh;
      chunk.group.add(mesh);
    }

    if (!skipMesh && minHeight < waterLevel) {
      const water = new THREE.Mesh(this.waterGeometry, this.getWaterMaterial(zone.biome));
      water.position.set(chunk.centerX, waterLevel, chunk.centerZ);
      water.receiveShadow = true;
      terrain.water = water;
      chunk.group.add(water);
    }

    this.chunks.set(chunk.key, terrain);
    return terrain;
  }

  disposeChunk(chunk) {
    const terrain = this.chunks.get(chunk.key);
    if (!terrain) return;
    if (terrain.mesh) chunk.group.remove(terrain.mesh);
    if (terrain.water) chunk.group.remove(terrain.water);
    terrain.geometry.dispose();
    this.chunks.delete(chunk.key);
  }

  dispose() {
    for (const terrain of this.chunks.values()) terrain.geometry.dispose();
    this.chunks.clear();
    for (const material of this.materials.values()) material.dispose();
    for (const material of this.waterMaterials.values()) material.dispose();
    this.waterGeometry.dispose();
    this.materials.clear();
    this.waterMaterials.clear();
  }
}
