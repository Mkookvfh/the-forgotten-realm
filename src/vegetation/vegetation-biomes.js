// THE FORGOTTEN REALM
// Procedural Vegetation Biomes

export const VEGETATION_BIOMES = {
  wasteland: {
    name: "Wasteland",
    colors: [0x5f5b3c, 0x6f6844, 0x494f31],
    densityMultiplier: 0.65,
    heightMultiplier: 0.75
  },

  ravenhold: {
    name: "Ravenhold",
    colors: [0x4a6338, 0x5e7542, 0x395030],
    densityMultiplier: 1.0,
    heightMultiplier: 1.0
  },

  deadwood: {
    name: "Deadwood",
    colors: [0x40552f, 0x576636, 0x2f4529],
    densityMultiplier: 1.15,
    heightMultiplier: 1.1
  },

  varnhal: {
    name: "Varnhal",
    colors: [0x50633a, 0x6f7a45, 0x3d4e2d],
    densityMultiplier: 0.95,
    heightMultiplier: 0.9
  },

  emberpeak: {
    name: "Emberpeak",
    colors: [0x5f5f47, 0x736b53, 0x4b5140],
    densityMultiplier: 0.55,
    heightMultiplier: 0.65
  },

  mirefall: {
    name: "Mirefall",
    colors: [0x4a5c44, 0x5d6d50, 0x39493c],
    densityMultiplier: 1.05,
    heightMultiplier: 0.85
  }
};

export function getVegetationBiome(region) {
  return VEGETATION_BIOMES[region]
    || VEGETATION_BIOMES.ravenhold;
}