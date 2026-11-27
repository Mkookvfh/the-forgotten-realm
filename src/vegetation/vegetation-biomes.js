// THE FORGOTTEN REALM
// Vibrant Fantasy Vegetation Biomes

export const VEGETATION_BIOMES = {
  wasteland: {
    name: "Sunlit Plains",
    colors: [0x9dbb55, 0xc4c95b, 0x6f9a42],
    densityMultiplier: 0.9,
    heightMultiplier: 0.82
  },

  ravenhold: {
    name: "Emerald Forest",
    colors: [0x54b94e, 0x82cf58, 0x3b9449],
    densityMultiplier: 1.08,
    heightMultiplier: 1.0
  },

  deadwood: {
    name: "Ancient Greenwood",
    colors: [0x4eaa58, 0x79c85b, 0x36884b],
    densityMultiplier: 1.18,
    heightMultiplier: 1.08
  },

  varnhal: {
    name: "Golden Highlands",
    colors: [0x8fc75a, 0xd0ce67, 0x65a34b],
    densityMultiplier: 1.0,
    heightMultiplier: 0.94
  },

  emberpeak: {
    name: "Sunset Mountains",
    colors: [0x88b9a0, 0xc1d8a0, 0x659b89],
    densityMultiplier: 0.72,
    heightMultiplier: 0.7
  },

  mirefall: {
    name: "Lush Wetlands",
    colors: [0x58b98c, 0x86d5a0, 0x3b9b83],
    densityMultiplier: 1.12,
    heightMultiplier: 0.88
  }
};

export function getVegetationBiome(region) {
  return VEGETATION_BIOMES[region]
    || VEGETATION_BIOMES.ravenhold;
}