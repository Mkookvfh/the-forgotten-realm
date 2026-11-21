import { LEGACY_GROUND_BOUNDS, getZoneAt } from './world-config.js';

export const BIOME_STYLES = Object.freeze({
  ashen: Object.freeze({ ground: 0x7fae4f, rock: 0x898778, foliage: 0x68a93e, accent: 0xc9a86a, water: 0x3d6f82, roughness: 1, vegetation: 26, trees: 12, rocks: 8, ruins: 1 }),
  forest: Object.freeze({ ground: 0x4c7a3c, rock: 0x6d7565, foliage: 0x2f6b3a, accent: 0x9ad6a2, water: 0x254b4a, roughness: 1, vegetation: 44, trees: 22, rocks: 6, ruins: 1 }),
  frost: Object.freeze({ ground: 0xa9bcc4, rock: 0x7d8fa0, foliage: 0x6f9a8d, accent: 0xd8ecf5, water: 0x4e87a6, roughness: .92, vegetation: 12, trees: 9, rocks: 14, ruins: 2 }),
  ember: Object.freeze({ ground: 0x6e4a3a, rock: 0x54433c, foliage: 0x8a5b32, accent: 0xff8a4c, water: 0x8a3f28, roughness: 1, vegetation: 10, trees: 4, rocks: 18, ruins: 2 }),
  moor: Object.freeze({ ground: 0x4a5546, rock: 0x626a60, foliage: 0x576b4c, accent: 0xb9c58a, water: 0x2b3f38, roughness: 1, vegetation: 34, trees: 8, rocks: 7, ruins: 1 }),
  abyss: Object.freeze({ ground: 0x3c3d52, rock: 0x4a465f, foliage: 0x5b4c79, accent: 0xb57ce8, water: 0x1b1736, roughness: .95, vegetation: 18, trees: 6, rocks: 16, ruins: 2 })
});

const FLATTEN_DISKS = [
  [0, -48, 9],
  [13, -48, 12],
  [-27, -27, 12],
  [29, -28, 21],
  [-28, -87, 23],
  [0, -136, 13]
];

export function smoothstep(value, min, max) {
  if (value <= min) return 0;
  if (value >= max) return 1;
  const t = (value - min) / (max - min);
  return t * t * (3 - 2 * t);
}

export function hash2(ix, iz, seed = 0) {
  const value = Math.sin(ix * 127.1 + iz * 311.7 + seed * 74.7) * 43758.5453123;
  return value - Math.floor(value);
}

export function valueNoise(x, z, seed = 0) {
  const ix = Math.floor(x);
  const iz = Math.floor(z);
  const fx = x - ix;
  const fz = z - iz;
  const u = fx * fx * (3 - 2 * fx);
  const v = fz * fz * (3 - 2 * fz);
  const a = hash2(ix, iz, seed);
  const b = hash2(ix + 1, iz, seed);
  const c = hash2(ix, iz + 1, seed);
  const d = hash2(ix + 1, iz + 1, seed);
  return (a * (1 - u) + b * u) * (1 - v) + (c * (1 - u) + d * u) * v;
}

export function fbm(x, z, seed = 0, octaves = 4) {
  let total = 0;
  let amplitude = .5;
  let frequency = 1;
  let norm = 0;
  for (let i = 0; i < octaves; i++) {
    total += valueNoise(x * frequency, z * frequency, seed + i * 17) * amplitude;
    norm += amplitude;
    amplitude *= .5;
    frequency *= 2;
  }
  return norm > 0 ? total / norm : 0;
}

export function legacyTerrainHeight(x, z) {
  let flatten = smoothstep(Math.abs(x), 3, 10);
  flatten *= smoothstep(Math.abs(z + 72), 4, 10);
  for (const [cx, cz, radius] of FLATTEN_DISKS) {
    flatten *= smoothstep(Math.hypot(x - cx, z - cz), radius, radius + 9);
  }
  const rolling = Math.sin(x * .075 + z * .043) * .86 +
    Math.cos(z * .058 - x * .032) * .58 +
    Math.sin((x - z) * .12) * .2;
  return rolling * flatten;
}

function legacyWeight(x, z) {
  const dx = Math.max(LEGACY_GROUND_BOUNDS.minX - x, 0, x - LEGACY_GROUND_BOUNDS.maxX);
  const dz = Math.max(LEGACY_GROUND_BOUNDS.minZ - z, 0, z - LEGACY_GROUND_BOUNDS.maxZ);
  return 1 - smoothstep(Math.hypot(dx, dz), 0, 55);
}

export function terrainHeightAt(x, z, zone = getZoneAt(x, z)) {
  const { base, amplitude, ridges, valleys, terrainScale = 1 } = zone.terrain;
  const seed = zone.center.x * .013 + zone.center.z * .007;
  const rolling = fbm((x * .008 + 40) / terrainScale, (z * .008 - 20) / terrainScale, seed, 4) * 2 - 1;
  const detail = fbm(x * .031 / terrainScale, z * .031 / terrainScale, seed + 91, 3) * 2 - 1;
  const ridge = 1 - Math.abs(fbm((x * .012 - 13) / terrainScale, (z * .012 + 7) / terrainScale, seed + 41, 3) * 2 - 1);
  const valleyAxis = z - (zone.center.z + Math.sin(x * .011 / terrainScale + seed) * 24 * terrainScale);
  const valley = Math.exp(-Math.pow(valleyAxis / (46 * terrainScale), 2));
  let height = base + rolling * amplitude + detail * amplitude * .18 +
    Math.pow(ridge, 2.4) * ridges - valley * valleys;

  if (zone.features.includes('volcano')) {
    const cone = Math.exp(-Math.pow(Math.hypot(x - zone.center.x - 42 * terrainScale, z - zone.center.z + 30 * terrainScale) / (72 * terrainScale), 2));
    height += cone * 28;
  }
  if (zone.features.includes('chasm')) {
    const chasmAxis = x - (zone.center.x + Math.sin(z * .018 / terrainScale) * 34 * terrainScale);
    height -= Math.exp(-Math.pow(chasmAxis / (22 * terrainScale), 2)) * 20;
  }
  if (zone.features.includes('swamp')) {
    height -= Math.max(0, 2.5 - Math.abs(valleyAxis) * .05) * 1.8;
  }

  if (zone.id === 'ashen-kingdom') {
    const weight = legacyWeight(x, z);
    if (weight > 0) height = height * (1 - weight) + legacyTerrainHeight(x, z) * weight;
  }
  return height;
}

export function surfaceNormalY(x, z, zone = getZoneAt(x, z)) {
  const step = 6;
  const dx = terrainHeightAt(x + step, z, zone) - terrainHeightAt(x - step, z, zone);
  const dz = terrainHeightAt(x, z + step, zone) - terrainHeightAt(x, z - step, zone);
  return 1 / Math.sqrt(1 + (dx / (step * 2)) ** 2 + (dz / (step * 2)) ** 2);
}

export function biomeStyle(biome) {
  return BIOME_STYLES[biome] || BIOME_STYLES.ashen;
}

export function getBiomeAt(x, z) {
  return getZoneAt(x, z).biome;
}

export function getWaterLevel(zone = getZoneAt(0, 0)) {
  return zone.terrain.waterLevel;
}
