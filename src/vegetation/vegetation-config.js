// THE FORGOTTEN REALM
// Procedural Vegetation Configuration

export const VEGETATION_CONFIG = {
  // ขนาดพื้นที่หญ้าแต่ละ Tile
  tileSize: 32,

  // จำนวน Tile ที่สร้างรอบตัวละคร
  renderRadius: 2,

  // ระยะการแสดงผล
  viewDistance: 80,

  // ความหนาแน่นของหญ้า
  density: {
    mobile: {
      near: 220,
      middle: 120,
      far: 48
    },

    desktop: {
      near: 520,
      middle: 280,
      far: 120
    }
  },

  // การเคลื่อนไหวตามแรงลม
  wind: {
    enabled: true,
    directionX: 0.8,
    directionZ: 0.35,
    strength: 0.18,
    speed: 1.2
  },

  // การกระจายหญ้าบนพื้น
  placement: {
    minHeight: 0.08,
    maxHeight: 1.15,
    minSlope: 0,
    maxSlope: 0.75,
    randomScale: true
  },

  // ประสิทธิภาพ
  performance: {
    castShadow: false,
    receiveShadow: false,
    frustumCulling: true,
    updateInterval: 0.15
  }
};

export function getVegetationDensity(mobile = true) {
  return mobile
    ? VEGETATION_CONFIG.density.mobile
    : VEGETATION_CONFIG.density.desktop;
}
