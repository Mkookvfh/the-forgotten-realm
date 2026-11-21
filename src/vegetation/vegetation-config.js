export const VEGETATION_CONFIG = Object.freeze({
  tileSize: 32,
  tileRadius: 2,
  mobile: Object.freeze({
    near: 220,
    middle: 120,
    far: 48,
    maxSlope: 0.92,
    bladeHeightMin: 0.38,
    bladeHeightMax: 0.92
  }),
  desktop: Object.freeze({
    near: 420,
    middle: 240,
    far: 96,
    maxSlope: 0.92,
    bladeHeightMin: 0.42,
    bladeHeightMax: 1.08
  }),
  wind: Object.freeze({
    speed: 1.35,
    strength: 0.12
  }),
  terrain: Object.freeze({
    sampleOffset: 1.5,
    slopeHeightLimit: 1.35,
    groundOffset: 0.025
  })
});
