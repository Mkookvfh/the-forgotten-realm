export const CHUNK_SIZE = 60;
export const CHUNK_SEGMENTS = 20;
export const ZONE_SIZE = 320;
export const START_ZONE_ID = 'ashen-kingdom';

export const LEGACY_BOUNDS = Object.freeze({ minX: -65, maxX: 65, minZ: -160, maxZ: 12 });
export const LEGACY_GROUND_BOUNDS = Object.freeze({ minX: -110, maxX: 110, minZ: -255, maxZ: 125 });

export const ZONES = Object.freeze([
  Object.freeze({
    id: 'ashen-kingdom',
    name: 'อาณาจักรเถ้าถ่าน',
    biome: 'ashen',
    center: Object.freeze({ x: 0, z: -74 }),
    palette: Object.freeze({ ground: 0x7fae4f, water: 0x3d6f82, rock: 0x898778, foliage: 0x68a93e, accent: 0xc9a86a }),
    terrain: Object.freeze({ base: 0, amplitude: 3.2, ridges: 1.5, valleys: 2, waterLevel: -0.6 }),
    features: Object.freeze(['river', 'ruins', 'legacy']),
    spawn: Object.freeze({ x: 0, z: 6 }),
    ambient: 'meadow'
  }),
  Object.freeze({
    id: 'cursed-forest',
    name: 'ป่าต้องสาป',
    biome: 'forest',
    center: Object.freeze({ x: -320, z: -74 }),
    palette: Object.freeze({ ground: 0x4c7a3c, water: 0x254b4a, rock: 0x6d7565, foliage: 0x2f6b3a, accent: 0x9ad6a2 }),
    terrain: Object.freeze({ base: 1.5, amplitude: 7.5, ridges: 3, valleys: 5, waterLevel: -1.1 }),
    features: Object.freeze(['forest', 'valley', 'bog']),
    spawn: Object.freeze({ x: -300, z: -60 }),
    ambient: 'forest'
  }),
  Object.freeze({
    id: 'frostfang',
    name: 'ฟรอสต์แฟงก์',
    biome: 'frost',
    center: Object.freeze({ x: 320, z: -74 }),
    palette: Object.freeze({ ground: 0xa9bcc4, water: 0x4e87a6, rock: 0x7d8fa0, foliage: 0x6f9a8d, accent: 0xd8ecf5 }),
    terrain: Object.freeze({ base: 4, amplitude: 18, ridges: 12, valleys: 4, waterLevel: 0.4 }),
    features: Object.freeze(['mountain', 'glacier', 'ruins']),
    spawn: Object.freeze({ x: 300, z: -60 }),
    ambient: 'meadow'
  }),
  Object.freeze({
    id: 'ember-wastes',
    name: 'ทุ่งเพลิง',
    biome: 'ember',
    center: Object.freeze({ x: 320, z: -394 }),
    palette: Object.freeze({ ground: 0x6e4a3a, water: 0x8a3f28, rock: 0x54433c, foliage: 0x8a5b32, accent: 0xff8a4c }),
    terrain: Object.freeze({ base: 2.5, amplitude: 12, ridges: 14, valleys: 6, waterLevel: -2.2 }),
    features: Object.freeze(['volcano', 'ash', 'ruins']),
    spawn: Object.freeze({ x: 300, z: -380 }),
    ambient: 'meadow'
  }),
  Object.freeze({
    id: 'dreadmoor',
    name: 'หนองพรางมรณะ',
    biome: 'moor',
    center: Object.freeze({ x: -320, z: -394 }),
    palette: Object.freeze({ ground: 0x4a5546, water: 0x2b3f38, rock: 0x626a60, foliage: 0x576b4c, accent: 0xb9c58a }),
    terrain: Object.freeze({ base: -0.5, amplitude: 4.2, ridges: 2, valleys: 7, waterLevel: 0.1 }),
    features: Object.freeze(['swamp', 'bog', 'ruins']),
    spawn: Object.freeze({ x: -300, z: -380 }),
    ambient: 'river'
  }),
  Object.freeze({
    id: 'forgotten-abyss',
    name: 'เหวลืมเลือน',
    biome: 'abyss',
    center: Object.freeze({ x: 0, z: -394 }),
    palette: Object.freeze({ ground: 0x3c3d52, water: 0x1b1736, rock: 0x4a465f, foliage: 0x5b4c79, accent: 0xb57ce8 }),
    terrain: Object.freeze({ base: -2, amplitude: 24, ridges: 20, valleys: 12, waterLevel: -3.4 }),
    features: Object.freeze(['chasm', 'dungeon', 'ruins']),
    spawn: Object.freeze({ x: 0, z: -370 }),
    ambient: 'dungeon'
  })
]);

const HALF_ZONE = ZONE_SIZE / 2;

export const WORLD_BOUNDS = Object.freeze(ZONES.reduce((bounds, zone) => ({
  minX: Math.min(bounds.minX, zone.center.x - HALF_ZONE),
  maxX: Math.max(bounds.maxX, zone.center.x + HALF_ZONE),
  minZ: Math.min(bounds.minZ, zone.center.z - HALF_ZONE),
  maxZ: Math.max(bounds.maxZ, zone.center.z + HALF_ZONE)
}), { minX: Infinity, maxX: -Infinity, minZ: Infinity, maxZ: -Infinity }));

export const WORLD_SIZE = Object.freeze({
  x: WORLD_BOUNDS.maxX - WORLD_BOUNDS.minX,
  z: WORLD_BOUNDS.maxZ - WORLD_BOUNDS.minZ
});

const ZONE_LOOKUP = new Map(ZONES.map(zone => [zone.id, zone]));

export function getZoneById(id) {
  return ZONE_LOOKUP.get(id) || ZONE_LOOKUP.get(START_ZONE_ID);
}

export function getZoneAt(x, z) {
  for (const zone of ZONES) {
    if (x >= zone.center.x - HALF_ZONE && x <= zone.center.x + HALF_ZONE &&
        z >= zone.center.z - HALF_ZONE && z <= zone.center.z + HALF_ZONE) {
      return zone;
    }
  }
  let nearest = ZONES[0];
  let best = Infinity;
  for (const zone of ZONES) {
    const distance = Math.hypot(x - zone.center.x, z - zone.center.z);
    if (distance < best) {
      best = distance;
      nearest = zone;
    }
  }
  return nearest;
}

export function clampToWorld(x, z, margin = 2) {
  return {
    x: Math.min(WORLD_BOUNDS.maxX - margin, Math.max(WORLD_BOUNDS.minX + margin, x)),
    z: Math.min(WORLD_BOUNDS.maxZ - margin, Math.max(WORLD_BOUNDS.minZ + margin, z))
  };
}

export function worldToChunk(x, z) {
  return { cx: Math.floor(x / CHUNK_SIZE), cz: Math.floor(z / CHUNK_SIZE) };
}

export function chunkKey(cx, cz) {
  return `${cx}:${cz}`;
}

export function chunkBounds(cx, cz) {
  const minX = cx * CHUNK_SIZE;
  const minZ = cz * CHUNK_SIZE;
  return {
    minX,
    maxX: minX + CHUNK_SIZE,
    minZ,
    maxZ: minZ + CHUNK_SIZE,
    centerX: minX + CHUNK_SIZE / 2,
    centerZ: minZ + CHUNK_SIZE / 2
  };
}

export function chunkBoundsOverlap(a, b) {
  return a.minX <= b.maxX && a.maxX >= b.minX && a.minZ <= b.maxZ && a.maxZ >= b.minZ;
}

export function isInsideLegacyArea(x, z, bounds = LEGACY_GROUND_BOUNDS) {
  return x >= bounds.minX && x <= bounds.maxX && z >= bounds.minZ && z <= bounds.maxZ;
}

export function getStartSpawn() {
  const zone = getZoneById(START_ZONE_ID);
  return { x: zone.spawn.x, z: zone.spawn.z };
}
