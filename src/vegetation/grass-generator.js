import * as THREE from 'three';
import { getBiomeColor } from './vegetation-biomes.js';
import { VEGETATION_CONFIG } from './vegetation-config.js';

function makeRandom(seed) {
  let value = (seed >>> 0) || 1;
  return () => {
    value = (value * 1664525 + 1013904223) >>> 0;
    return value / 4294967296;
  };
}

function makeGrassGeometry() {
  const positions = [];
  const uvs = [];
  const indices = [];
  const bladeCount = 3;
  const segments = 3;
  const height = 1;
  const width = 0.105;

  for (let blade = 0; blade < bladeCount; blade++) {
    const angle = (blade / bladeCount) * Math.PI;
    const dx = Math.cos(angle);
    const dz = Math.sin(angle);
    const start = positions.length / 3;

    for (let segment = 0; segment <= segments; segment++) {
      const t = segment / segments;
      const y = t * height;
      const halfWidth = width * (1 - t) * (0.92 - t * 0.35);
      const bend = t * t * 0.12;
      const centerX = dx * bend;
      const centerZ = dz * bend;

      positions.push(
        centerX - dz * halfWidth, y, centerZ + dx * halfWidth,
        centerX + dz * halfWidth, y, centerZ - dx * halfWidth
      );
      uvs.push(0, t, 1, t);

      if (segment < segments) {
        const a = start + segment * 2;
        const b = a + 1;
        const c = a + 2;
        const d = a + 3;
        indices.push(a, b, c, b, d, c);
      }
    }
  }

  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
  geometry.setAttribute('uv', new THREE.Float32BufferAttribute(uvs, 2));
  geometry.setIndex(indices);
  geometry.computeVertexNormals();
  geometry.computeBoundingSphere();
  return geometry;
}

function makeWindMaterial() {
  const material = new THREE.MeshStandardMaterial({
    color: 0xffffff,
    roughness: 1,
    metalness: 0,
    side: THREE.DoubleSide,
    vertexColors: false
  });

  const windUniforms = {
    uGrassTime: { value: 0 },
    uGrassWindStrength: { value: VEGETATION_CONFIG.wind.strength },
    uGrassWindSpeed: { value: VEGETATION_CONFIG.wind.speed }
  };

  material.onBeforeCompile = (shader) => {
    shader.uniforms.uGrassTime = windUniforms.uGrassTime;
    shader.uniforms.uGrassWindStrength = windUniforms.uGrassWindStrength;
    shader.uniforms.uGrassWindSpeed = windUniforms.uGrassWindSpeed;

    shader.vertexShader = shader.vertexShader.replace(
      '#include <common>',
      `#include <common>
       uniform float uGrassTime;
       uniform float uGrassWindStrength;
       uniform float uGrassWindSpeed;`
    );

    shader.vertexShader = shader.vertexShader.replace(
      '#include <begin_vertex>',
      `#include <begin_vertex>
       float grassTip = clamp(position.y, 0.0, 1.0);
       float grassPhase = uGrassTime * uGrassWindSpeed
         + instanceMatrix[3][0] * 0.071
         + instanceMatrix[3][2] * 0.053;
       float grassSway = sin(grassPhase) * uGrassWindStrength
         * grassTip * grassTip;
       transformed.x += grassSway;
       transformed.z += cos(grassPhase * 0.83) * grassSway * 0.28;`
    );
  };

  material.customProgramCacheKey = () => 'forgotten-realm-grass-wind-v1';
  material.userData.windUniforms = windUniforms;
  return material;
}

export function createGrassTile({
  x,
  z,
  tileSize = VEGETATION_CONFIG.tileSize,
  density,
  seed,
  getHeight,
  getRegion,
  mobile = false
}) {
  const random = makeRandom(seed);
  const geometry = makeGrassGeometry();
  const material = makeWindMaterial();
  const mesh = new THREE.InstancedMesh(geometry, material, density);
  mesh.name = `ProceduralGrass-${x}-${z}`;
  mesh.castShadow = false;
  mesh.receiveShadow = false;
  mesh.frustumCulled = true;

  const dummy = new THREE.Object3D();
  const color = new THREE.Color();
  const terrain = VEGETATION_CONFIG.terrain;
  const profile = mobile ? VEGETATION_CONFIG.mobile : VEGETATION_CONFIG.desktop;
  let placed = 0;

  for (let i = 0; i < density; i++) {
    const worldX = x + (random() - 0.5) * tileSize;
    const worldZ = z + (random() - 0.5) * tileSize;
    const groundY = getHeight(worldX, worldZ);

    if (!Number.isFinite(groundY)) continue;

    const left = getHeight(worldX - terrain.sampleOffset, worldZ);
    const right = getHeight(worldX + terrain.sampleOffset, worldZ);
    const back = getHeight(worldX, worldZ - terrain.sampleOffset);
    const front = getHeight(worldX, worldZ + terrain.sampleOffset);

    if (![left, right, back, front].every(Number.isFinite)) continue;

    const slope = Math.hypot(right - left, front - back);
    if (slope > profile.maxSlope * terrain.slopeHeightLimit) continue;

    const region = getRegion(worldX, worldZ);
    const bladeScale = profile.bladeHeightMin
      + random() * (profile.bladeHeightMax - profile.bladeHeightMin);

    dummy.position.set(
      worldX,
      groundY + terrain.groundOffset,
      worldZ
    );
    dummy.rotation.set(
      (random() - 0.5) * 0.12,
      random() * Math.PI * 2,
      (random() - 0.5) * 0.12
    );
    dummy.scale.set(
      0.72 + random() * 0.55,
      bladeScale,
      0.72 + random() * 0.55
    );
    dummy.updateMatrix();

    mesh.setMatrixAt(placed, dummy.matrix);
    color.copy(getBiomeColor(region, random()));
    mesh.setColorAt(placed, color);
    placed++;
  }

  mesh.count = placed;
  mesh.instanceMatrix.needsUpdate = true;
  if (mesh.instanceColor) mesh.instanceColor.needsUpdate = true;
  mesh.computeBoundingSphere();

  return mesh;
}
