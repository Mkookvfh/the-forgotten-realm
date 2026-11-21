import * as THREE from 'three';

const BIOME_PALETTES = {
  wasteland: ['#657344', '#829052', '#a0a36a'],
  ravenhold: ['#536b3d', '#71884a', '#9a9b5c'],
  deadwood: ['#3f5540', '#596d4b', '#7b8060'],
  varnhal: ['#667d3d', '#87964b', '#b0a36a'],
  emberpeak: ['#66583a', '#8b7041', '#ad8950'],
  mirefall: ['#3d6651', '#56816a', '#7a9871']
};

const DEFAULT_PALETTE = ['#526b3d', '#71874a', '#92985b'];

export function getBiomeColor(region, randomValue = 0.5) {
  const palette = BIOME_PALETTES[region?.id] || DEFAULT_PALETTE;
  const index = Math.min(
    palette.length - 1,
    Math.floor(THREE.MathUtils.clamp(randomValue, 0, 0.9999) * palette.length)
  );

  const color = new THREE.Color(palette[index]);
  const variation = (randomValue - 0.5) * 0.08;
  color.offsetHSL(variation * 0.25, variation, variation);
  return color;
}
