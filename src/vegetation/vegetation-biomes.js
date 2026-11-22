// THE FORGOTTEN REALM
// Procedural Vegetation Biomes

export const VEGETATION_BIOMES = {
  wasteland: {
    name: "Wasteland",
    colors: [0x77734b, 0x9b8954, 0x5f633b],
    densityMultiplier: 0.65,
    heightMultiplier: 0.75
  },

  ravenhold: {
    name: "Ravenhold",
    colors: [0x526b3c, 0x71834a, 0x3e5835],
    densityMultiplier: 1.0,
    heightMultiplier: 1.0
  },

  deadwood: {
    name: "Deadwood",
    colors: [0x465b32, 0x66733c, 0x354b2d],
    densityMultiplier: 1.15,
    heightMultiplier: 1.1
  },

  varnhal: {
    name: "Varnhal",
    colors: [0x596b3d, 0x879052, 0x435532],
    densityMultiplier: 0.95,
    heightMultiplier: 0.9
  },

  emberpeak: {
    name: "Emberpeak",
    colors: [0x77765b, 0x999078, 0x5d624d],
    densityMultiplier: 0.55,
    heightMultiplier: 0.65
  },

  mirefall: {
    name: "Mirefall",
    colors: [0x52634a, 0x71805a, 0x3e5141],
    densityMultiplier: 1.05,
    heightMultiplier: 0.85
  }
};

export function getVegetationBiome(region) {
  return VEGETATION_BIOMES[region]
    || VEGETATION_BIOMES.ravenhold;
}