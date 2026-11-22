import * as THREE from 'three';

// สร้างใบหญ้า 1 กอ
function createGrassGeometry() {
  const positions = [];
  const indices = [];

  const bladeCount = 3;
  const segments = 3;

  for (let blade = 0; blade < bladeCount; blade++) {
    const angle = (blade / bladeCount) * Math.PI;
    const width = 0.09;
    const height = 0.65 + Math.random() * 0.45;

    const start = positions.length / 3;

    for (let segment = 0; segment <= segments; segment++) {
      const t = segment / segments;
      const y = height * t;
      const bend = t * t * 0.12;

      const centerX = Math.cos(angle) * bend;
      const centerZ = Math.sin(angle) * bend;

      const halfWidth = width * (1 - t * 0.85);

      positions.push(
        centerX - Math.sin(angle) * halfWidth,
        y,
        centerZ - Math.cos(angle) * halfWidth
      );

      positions.push(
        centerX + Math.sin(angle) * halfWidth,
        y,
        centerZ + Math.cos(angle) * halfWidth
      );
    }

    for (let segment = 0; segment < segments; segment++) {
      const a = start + segment * 2;
      const b = a + 1;
      const c = a + 2;
      const d = a + 3;

      indices.push(a, b, c, b, d, c);
    }
  }

  const geometry = new THREE.BufferGeometry();

  geometry.setAttribute(
    'position',
    new THREE.Float32BufferAttribute(positions, 3)
  );

  geometry.setIndex(indices);
  geometry.computeVertexNormals();

  return geometry;
}

// สร้างวัสดุหญ้าพร้อมระบบลม
function createGrassMaterial() {
  const material = new THREE.MeshStandardMaterial({
    color: 0xffffff,
    roughness: 0.95,
    metalness: 0,
    side: THREE.DoubleSide,
    vertexColors: false
  });

  material.onBeforeCompile = (shader) => {
    shader.uniforms.uGrassTime = {
      value: 0
    };

    shader.vertexShader = shader.vertexShader.replace(
      '#include <common>',
      `#include <common>
       uniform float uGrassTime;`
    );

    shader.vertexShader = shader.vertexShader.replace(
      '#include <begin_vertex>',
      `#include <begin_vertex>

       float grassHeight = position.y;

       float windWave =
         sin(uGrassTime * 1.2 + instanceMatrix[3][0] * 0.15
         + instanceMatrix[3][2] * 0.15);

       transformed.x += windWave * grassHeight * 0.045;
       transformed.z += windWave * grassHeight * 0.025;
      `
    );

    material.userData.shader = shader;
  };

  return material;
}

// สร้างหญ้าในแต่ละพื้นที่
export function createGrassTile({
  centerX,
  centerZ,
  tileSize,
  count,
  getHeight,
  biome
}) {
  const geometry = createGrassGeometry();
  const material = createGrassMaterial();

  const mesh = new THREE.InstancedMesh(
    geometry,
    material,
    count
  );

  const dummy = new THREE.Object3D();

  const colors = biome?.colors || [
    0x526b3c,
    0x71834a,
    0x3e5835
  ];

  for (let i = 0; i < count; i++) {
    const x = centerX + (Math.random() - 0.5) * tileSize;
    const z = centerZ + (Math.random() - 0.5) * tileSize;

    const y = getHeight(x, z);

    if (y === null || !Number.isFinite(y)) {
      dummy.position.set(0, -1000, 0);
      dummy.scale.setScalar(0);
      dummy.updateMatrix();
      mesh.setMatrixAt(i, dummy.matrix);
      continue;
    }

    const scale = 0.65 + Math.random() * 0.7;

    dummy.position.set(x, y, z);
    dummy.rotation.y = Math.random() * Math.PI * 2;
    dummy.scale.setScalar(scale);
    dummy.updateMatrix();

    mesh.setMatrixAt(i, dummy.matrix);

    const color = new THREE.Color(
      colors[Math.floor(Math.random() * colors.length)]
    );

    mesh.setColorAt(i, color);
  }

  mesh.instanceMatrix.needsUpdate = true;

  if (mesh.instanceColor) {
    mesh.instanceColor.needsUpdate = true;
  }

  mesh.computeBoundingSphere();

  return mesh;
}

// อัปเดตแรงลมของหญ้า
export function updateGrassWind(mesh, time) {
  const shader = mesh?.material?.userData?.shader;

  if (shader?.uniforms?.uGrassTime) {
    shader.uniforms.uGrassTime.value = time;
  }
}