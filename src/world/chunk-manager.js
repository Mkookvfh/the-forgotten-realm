import * as THREE from 'three';
import {
  CHUNK_SIZE, WORLD_BOUNDS, LEGACY_GROUND_BOUNDS, ZONES, chunkKey, chunkBounds,
  chunkBoundsOverlap, worldToChunk, getZoneAt, getZoneById
} from './world-config.js';
import { biomeStyle, hash2, surfaceNormalY } from './world-biomes.js';
import { TerrainManager } from './terrain-manager.js';
import { createWorldCollision, createImportedTerrainProbe } from './world-collision.js';
import { ChunkAssetLoader, getStreamingRadius } from './world-streaming.js';

const QUALITY_SCALE = { low: .5, medium: .8, high: 1 };

export class ChunkManager {
  constructor({
    scene,
    isTouch = false,
    quality = 'medium',
    cameraFar = 220,
    ground = null,
    getImportedWorld,
    getImportedBounds,
    raycaster,
    assetLoader = {}
  }) {
    this.scene = scene;
    this.isTouch = isTouch;
    this.quality = quality;
    this.cameraFar = cameraFar;
    this.raycaster = raycaster;
    this.getImportedBounds = getImportedBounds;
    this.terrainManager = new TerrainManager();
    this.assets = new ChunkAssetLoader(assetLoader);
    this.loaded = new Map();
    this.pending = [];
    this.center = null;
    this.timer = 0;
    this.force = true;
    this.radius = getStreamingRadius(quality, isTouch, cameraFar, CHUNK_SIZE);

    this.collision = createWorldCollision({
      worldBounds: WORLD_BOUNDS,
      getImportedWorld,
      getImportedBounds,
      raycaster,
      getChunkAt: (x, z) => this.getChunkAt(x, z)
    });

    this.propGeometries = {
      trunk: new THREE.CylinderGeometry(.2, .36, 3.4, 6),
      crown: new THREE.IcosahedronGeometry(1, 0),
      rock: new THREE.DodecahedronGeometry(1, 0),
      flora: new THREE.ConeGeometry(.4, 1, 3),
      ruin: new THREE.BoxGeometry(1, 1, 1)
    };
    this.propMaterials = new Map();
    this.dummy = new THREE.Object3D();
    this.tint = new THREE.Color();

    if (ground) ground.visible = false;
  }

  getGroundMaterials(biome) {
    let materials = this.propMaterials.get(biome);
    if (!materials) {
      const style = biomeStyle(biome);
      materials = {
        trunk: new THREE.MeshStandardMaterial({ color: 0x62452f, roughness: 1, flatShading: true }),
        crown: new THREE.MeshStandardMaterial({ color: style.foliage, roughness: 1, flatShading: true }),
        rock: new THREE.MeshStandardMaterial({ color: style.rock, roughness: 1, flatShading: true }),
        flora: new THREE.MeshStandardMaterial({ color: style.accent, roughness: 1, flatShading: true, side: THREE.DoubleSide }),
        ruin: new THREE.MeshStandardMaterial({ color: style.rock, roughness: 1, flatShading: true })
      };
      this.propMaterials.set(biome, materials);
    }
    return materials;
  }

  getChunkAt(x, z) {
    const coords = worldToChunk(x, z);
    return this.loaded.get(chunkKey(coords.cx, coords.cz)) || null;
  }

  importedRect() {
    const bounds = this.getImportedBounds();
    if (!bounds) return null;
    return { minX: bounds.min.x, maxX: bounds.max.x, minZ: bounds.min.z, maxZ: bounds.max.z };
  }

  setQuality(quality) {
    if (this.quality === quality) return;
    this.quality = quality;
    this.radius = getStreamingRadius(quality, this.isTouch, this.cameraFar, CHUNK_SIZE);
    this.force = true;
  }

  reloadAll() {
    for (const chunk of this.loaded.values()) this.disposeChunk(chunk);
    this.pending.length = 0;
    this.center = null;
    this.force = true;
  }

  update(dt, position) {
    this.timer += dt;
    const coords = worldToChunk(position.x, position.z);
    const centerChanged = !this.center || this.center.cx !== coords.cx || this.center.cz !== coords.cz;
    if (!centerChanged && this.timer < .4 && !this.force) return;

    if (centerChanged || this.force) {
      this.center = coords;
      this.reconcile();
      this.force = false;
    }

    this.timer = 0;
    let budget = this.isTouch ? 1 : 2;
    while (this.pending.length > 0 && budget > 0) {
      const next = this.pending.shift();
      if (!this.loaded.has(next.key)) this.createChunk(next.cx, next.cz);
      budget -= 1;
    }
  }

  reconcile() {
    if (!this.center) return;
    const keepRadius = this.radius + 1;
    for (const chunk of [...this.loaded.values()]) {
      const distance = Math.max(Math.abs(chunk.cx - this.center.cx), Math.abs(chunk.cz - this.center.cz));
      if (distance > keepRadius) this.disposeChunk(chunk);
    }

    const desired = [];
    for (let cx = this.center.cx - this.radius; cx <= this.center.cx + this.radius; cx++) {
      for (let cz = this.center.cz - this.radius; cz <= this.center.cz + this.radius; cz++) {
        const bounds = chunkBounds(cx, cz);
        if (!chunkBoundsOverlap(bounds, WORLD_BOUNDS)) continue;
        const key = chunkKey(cx, cz);
        if (this.loaded.has(key)) continue;
        const distance = Math.hypot(cx - this.center.cx, cz - this.center.cz);
        desired.push({ cx, cz, key, distance });
      }
    }
    desired.sort((a, b) => a.distance - b.distance);
    this.pending = desired;
  }

  createChunk(cx, cz) {
    const key = chunkKey(cx, cz);
    if (this.loaded.has(key)) return this.loaded.get(key);
    const bounds = chunkBounds(cx, cz);
    const zone = getZoneAt(bounds.centerX, bounds.centerZ);
    const chunk = {
      key, cx, cz, bounds, zone,
      group: new THREE.Group(),
      colliders: [],
      assetRoot: null,
      assetProbe: null,
      terrain: null
    };
    chunk.group.name = `Chunk_${zone.id}_${cx}_${cz}`;

    const importedRect = this.importedRect();
    const covered = Boolean(importedRect && chunkBoundsOverlap(bounds, importedRect));
    chunk.terrain = this.terrainManager.buildChunk(chunk, zone, covered);
    if (!covered) this.populateChunk(chunk);

    this.scene.add(chunk.group);
    this.loaded.set(key, chunk);
    this.collision.addColliders(key, chunk.colliders);

    this.assets.load(cx, cz, zone).then(root => {
      if (!root || !this.loaded.has(key) || this.loaded.get(key) !== chunk) return;
      chunk.assetRoot = root;
      chunk.group.add(root);
      if (chunk.terrain.mesh) chunk.terrain.mesh.visible = false;
      if (chunk.terrain.water) chunk.terrain.water.visible = false;
      const assetBounds = new THREE.Box3().setFromObject(root);
      chunk.assetProbe = createImportedTerrainProbe({
        getWorld: () => chunk.assetRoot,
        getBounds: () => assetBounds,
        raycaster: this.raycaster
      });
    });

    return chunk;
  }

  populateChunk(chunk) {
    const zone = chunk.zone;
    const style = biomeStyle(zone.biome);
    const materials = this.getGroundMaterials(zone.biome);
    const density = (QUALITY_SCALE[this.quality] || .8) * (this.isTouch ? .7 : 1);
    const rand = (index, salt = 0) => hash2(chunk.cx * 97 + index * 13, chunk.cz * 131 + index * 7, salt + 31);
    const legacyOverlap = chunkBoundsOverlap(chunk.bounds, LEGACY_GROUND_BOUNDS);
    const treeCount = legacyOverlap ? 0 : Math.max(2, Math.round(style.trees * density));
    const rockCount = legacyOverlap ? 0 : Math.max(2, Math.round(style.rocks * density));
    const floraCount = Math.max(2, Math.round(style.vegetation * density * (legacyOverlap ? .25 : 1)));
    const offset = CHUNK_SIZE / 2 - 3;
    const positionOf = (index, salt) => ({
      x: chunk.bounds.centerX + (rand(index, salt) * 2 - 1) * offset,
      z: chunk.bounds.centerZ + (rand(index, salt + 101) * 2 - 1) * offset
    });
    const walkable = (x, z) => surfaceNormalY(x, z, zone) > .62;

    if (treeCount > 0) {
      const trunks = new THREE.InstancedMesh(this.propGeometries.trunk, materials.trunk, treeCount);
      const crowns = new THREE.InstancedMesh(this.propGeometries.crown, materials.crown, treeCount * 2);
      let placed = 0;
      for (let i = 0; i < treeCount * 3 && placed < treeCount; i++) {
        const spot = positionOf(i, 7);
        if (!walkable(spot.x, spot.z)) continue;
        const height = chunk.terrain.sampleHeight(spot.x, spot.z);
        const scale = .75 + rand(i, 19) * 1.05;
        this.dummy.position.set(spot.x, height + 1.7 * scale, spot.z);
        this.dummy.rotation.set(0, rand(i, 23) * Math.PI * 2, 0);
        this.dummy.scale.setScalar(scale);
        this.dummy.updateMatrix();
        trunks.setMatrixAt(placed, this.dummy.matrix);

        for (let j = 0; j < 2; j++) {
          this.dummy.position.set(
            spot.x + (j ? .45 : -.35) * scale,
            height + (3.15 + j * .95) * scale,
            spot.z + (j ? .25 : -.2) * scale
          );
          this.dummy.rotation.set(0, rand(i, 29 + j) * Math.PI, 0);
          this.dummy.scale.set((1.5 - j * .25) * scale, (1.05 + j * .1) * scale, 1.3 * scale);
          this.dummy.updateMatrix();
          const index = placed * 2 + j;
          crowns.setMatrixAt(index, this.dummy.matrix);
          this.tint.set(style.foliage).offsetHSL((rand(i, 37 + j) - .5) * .05, 0, (rand(i, 43 + j) - .5) * .14);
          crowns.setColorAt(index, this.tint);
        }

        chunk.colliders.push({ x: spot.x, z: spot.z, radius: .75 * scale });
        placed += 1;
      }
      trunks.count = placed;
      crowns.count = placed * 2;
      trunks.instanceMatrix.needsUpdate = true;
      crowns.instanceMatrix.needsUpdate = true;
      if (crowns.instanceColor) crowns.instanceColor.needsUpdate = true;
      trunks.castShadow = true;
      crowns.castShadow = true;
      chunk.group.add(trunks, crowns);
    }

    if (rockCount > 0) {
      const rocks = new THREE.InstancedMesh(this.propGeometries.rock, materials.rock, rockCount);
      let placed = 0;
      for (let i = 0; i < rockCount * 2 && placed < rockCount; i++) {
        const spot = positionOf(i, 311);
        const height = chunk.terrain.sampleHeight(spot.x, spot.z);
        const scale = .5 + rand(i, 317) * 1.5;
        this.dummy.position.set(spot.x, height + scale * .35, spot.z);
        this.dummy.rotation.set(rand(i, 331) * .4, rand(i, 337) * Math.PI * 2, rand(i, 347) * .3);
        this.dummy.scale.set(scale * 1.1, scale * .75, scale);
        this.dummy.updateMatrix();
        rocks.setMatrixAt(placed, this.dummy.matrix);
        if (scale > 1.15) chunk.colliders.push({ x: spot.x, z: spot.z, radius: scale * .7 });
        placed += 1;
      }
      rocks.count = placed;
      rocks.instanceMatrix.needsUpdate = true;
      rocks.castShadow = true;
      rocks.receiveShadow = true;
      chunk.group.add(rocks);
    }

    if (floraCount > 0) {
      const flora = new THREE.InstancedMesh(this.propGeometries.flora, materials.flora, floraCount);
      let placed = 0;
      for (let i = 0; i < floraCount * 2 && placed < floraCount; i++) {
        const spot = positionOf(i, 509);
        const height = chunk.terrain.sampleHeight(spot.x, spot.z);
        if (height < zone.terrain.waterLevel) continue;
        const scale = .5 + rand(i, 521) * .85;
        this.dummy.position.set(spot.x, height + scale * .45, spot.z);
        this.dummy.rotation.set(0, rand(i, 523) * Math.PI * 2, (rand(i, 541) - .5) * .2);
        this.dummy.scale.set(scale, scale, scale);
        this.dummy.updateMatrix();
        flora.setMatrixAt(placed, this.dummy.matrix);
        this.tint.set(style.accent).offsetHSL((rand(i, 547) - .5) * .08, 0, (rand(i, 557) - .5) * .18);
        flora.setColorAt(placed, this.tint);
        placed += 1;
      }
      flora.count = placed;
      flora.instanceMatrix.needsUpdate = true;
      if (flora.instanceColor) flora.instanceColor.needsUpdate = true;
      chunk.group.add(flora);
    }

    if (!legacyOverlap && style.ruins > 0 && rand(0, 719) < .55) {
      const pieces = Math.min(style.ruins, 2);
      for (let i = 0; i < pieces; i++) {
        const spot = positionOf(i, 809);
        if (!walkable(spot.x, spot.z)) continue;
        const height = chunk.terrain.sampleHeight(spot.x, spot.z);
        const width = 2 + rand(i, 811) * 2.5;
        const tall = 2.5 + rand(i, 821) * 3;
        const block = new THREE.Mesh(this.propGeometries.ruin, materials.ruin);
        block.position.set(spot.x, height + tall / 2, spot.z);
        block.scale.set(width, tall, width * .7);
        block.rotation.y = rand(i, 823) * Math.PI;
        block.castShadow = true;
        block.receiveShadow = true;
        chunk.group.add(block);
        chunk.colliders.push({ x: spot.x, z: spot.z, radius: width * .6 });
      }
    }
  }

  disposeChunk(chunk) {
    if (!this.loaded.has(chunk.key)) return;
    this.scene.remove(chunk.group);
    this.collision.removeColliders(chunk.key);
    this.terrainManager.disposeChunk(chunk);
    chunk.group.traverse(object => {
      if (object.isInstancedMesh && object.dispose) object.dispose();
      if (object.isMesh && object.userData.chunkAsset) {
        object.geometry?.dispose?.();
        if (Array.isArray(object.material)) object.material.forEach(material => material.dispose());
        else object.material?.dispose?.();
      }
    });
    this.loaded.delete(chunk.key);
  }

  getTerrainHeight(x, z, referenceY = 0) {
    const chunk = this.getChunkAt(x, z);
    if (chunk && chunk.assetProbe && chunk.assetProbe.contains(x, z)) {
      const height = chunk.assetProbe.heightAt(x, z, referenceY);
      if (height !== null) return height;
    }
    return this.collision.terrainHeightAt(x, z, referenceY);
  }

  blocked(x, z, radius = .55) {
    return this.collision.blocked(x, z, radius);
  }

  clampPosition(position) {
    return this.collision.clampPosition(position);
  }

  getZoneAt(x, z) {
    return getZoneAt(x, z);
  }

  getAudioBiome(position, dungeonActive = false) {
    if (dungeonActive) return 'dungeon';
    if (position.x > 14 && position.x < 43 && position.z > -44 && position.z < -12) return 'village';
    if (Math.abs(position.z + 71) < 9 && Math.abs(position.x) < 90) return 'river';
    if (position.x < -10 && position.z > -58 && position.z < -12) return 'forest';
    return getZoneAt(position.x, position.z).ambient;
  }

  getDiscoveryRegions() {
    return ZONES.map(zone => ({
      id: zone.id,
      name: zone.name,
      isInside: () => getZoneAt(this.playerPosition?.x ?? 0, this.playerPosition?.z ?? 0).id === zone.id
    }));
  }

  setPlayerPosition(position) {
    this.playerPosition = position;
  }

  getMapZones() {
    return ZONES.map(zone => ({
      id: zone.id,
      name: zone.name,
      discoveredId: zone.id,
      center: new THREE.Vector3(zone.center.x, 0, zone.center.z),
      radius: CHUNK_SIZE * 1.7,
      color: `#${new THREE.Color(zone.palette.accent).getHexString()}`,
      bounds: {
        minX: zone.center.x - 160,
        maxX: zone.center.x + 160,
        minZ: zone.center.z - 160,
        maxZ: zone.center.z + 160
      }
    }));
  }

  getLandmarks() {
    return ZONES.map(zone => ({
      position: new THREE.Vector3(zone.center.x, 0, zone.center.z),
      color: `#${new THREE.Color(zone.palette.accent).getHexString()}`,
      size: 5,
      name: zone.name,
      region: zone.id
    }));
  }

  getEnemySpawns() {
    return [
      ['wraith', -300, -84], ['wolf', -342, -58],
      ['brute', 298, -88], ['wraith', 344, -56],
      ['brute', 300, -402], ['guardian', 348, -378],
      ['wraith', -298, -404], ['wolf', -344, -376],
      ['wraith', 8, -402], ['guardian', -32, -380], ['brute', 36, -420]
    ];
  }

  getResourceNodes() {
    return {
      herb: [[-306, -70], [-338, -92], [-292, -104], [-350, -40]],
      wood: [[-312, -30], [-348, -76], [-286, -52], [-330, -110]],
      ore: [[308, -96], [344, -70], [292, -110], [352, -42]],
      stoneHeart: [[304, -412], [350, -386], [286, -438], [360, -420]],
      essence: [[-304, -418], [-348, -388], [-288, -444], [-356, -430]],
      darkShard: [[12, -410], [-30, -386], [30, -446], [-52, -424]],
      bone: [[-296, -396], [-340, -356], [312, -360], [-18, -364]]
    };
  }

  getExtraNpcs() {
    return [
      {
        id: 'frost_hermit',
        name: 'ฤๅษีน้ำแข็ง',
        position: [306, 0, -70],
        color: 0xa9d8e8,
        schedule: [
          { from: 0, to: .5, position: [306, 0, -70] },
          { from: .5, to: 1, position: [330, 0, -92] }
        ],
        lines: [
          'น้ำแข็งเก็บความทรงจำไว้ได้นานกว่าหิน จงเดินให้ช้าลงเพื่อฟังมัน',
          'ยอดเขาฟรอสต์แฟงก์มีแร่ที่ยังไม่เคยถูกมือมนุษย์แตะต้อง'
        ],
        choices: [
          { label: 'ถามทางขึ้นยอดเขา', text: 'เดินตามสันเขาทางทิศตะวันออก แล้วหลบเงาที่ตกลงมา', relation: 1 }
        ]
      },
      {
        id: 'abyss_scribe',
        name: 'นักจดบันทึกแห่งเหว',
        position: [8, 0, -392],
        color: 0xb57ce8,
        schedule: [
          { from: 0, to: .6, position: [8, 0, -392] },
          { from: .6, to: 1, position: [-24, 0, -418] }
        ],
        lines: [
          'ฉันจดชื่อทุกคนที่หายไปในเหว แต่อีกไม่นานฉันก็ต้องจดชื่อฉันเอง',
          'เงาในเหวลืมเลือนจะตอบคำถามได้ ถ้าเจ้านำเศษเงามืดมาให้มัน'
        ],
        choices: [
          { label: 'ถามเรื่องเหวลืมเลือน', text: 'ยิ่งเดินลึก ความทรงจำยิ่งเบา จงจำทางกลับไว้ให้ดี', relation: 1 }
        ]
      }
    ];
  }

  getStats() {
    let meshes = 0;
    for (const chunk of this.loaded.values()) chunk.group.traverse(object => { if (object.isMesh) meshes += 1; });
    return {
      loaded: this.loaded.size,
      pending: this.pending.length,
      meshes,
      colliderCells: this.collision.spatial.cells.size,
      radius: this.radius
    };
  }

  dispose() {
    this.reloadAll();
    this.assets.cache.clear();
    this.collision.dispose();
    this.terrainManager.dispose();
    Object.values(this.propGeometries).forEach(geometry => geometry.dispose());
    for (const materials of this.propMaterials.values()) {
      Object.values(materials).forEach(material => material.dispose());
    }
    this.propMaterials.clear();
  }
}

export function createWorld(options) {
  return new ChunkManager(options);
}

export { getZoneById };
