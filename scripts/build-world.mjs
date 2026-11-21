import fs from 'node:fs';
import path from 'node:path';
import * as THREE from 'three';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader.js';
import { MTLLoader } from 'three/examples/jsm/loaders/MTLLoader.js';
import { GLTFExporter } from 'three/examples/jsm/exporters/GLTFExporter.js';

class NodeFileReader {
  readAsArrayBuffer(blob) {
    blob.arrayBuffer().then((buffer) => {
      this.result = buffer;
      if (this.onloadend) this.onloadend();
    });
  }

  readAsDataURL(blob) {
    blob.arrayBuffer().then((buffer) => {
      this.result = `data:${blob.type || 'application/octet-stream'};base64,${Buffer.from(buffer).toString('base64')}`;
      if (this.onloadend) this.onloadend();
    });
  }
}

globalThis.FileReader = NodeFileReader;

const sourceDir = process.argv[2] ||
  '/tmp/opencode/world-assets';
const outputDir = process.argv[3] ||
  path.resolve('public/assets/world');

const objPath = path.join(sourceDir, 'open-world-dark-fantasy.obj');
const mtlPath = path.join(sourceDir, 'open-world-dark-fantasy.mtl');
const chunkDir = path.join(outputDir, 'chunks');

fs.mkdirSync(chunkDir, { recursive: true });

const WORLD = 640;
const GRID = 8;
const CHUNK = WORLD / GRID;
const HSTEP = 5;
const HGRID = WORLD / HSTEP;
const terrainPattern = /^(Terrain-|World_Terrain-)/;

const materials = new MTLLoader().parse(fs.readFileSync(mtlPath, 'utf8'));
materials.preload();

const model = new OBJLoader()
  .setMaterials(materials)
  .parse(fs.readFileSync(objPath, 'utf8'));

const cellCount = HGRID * HGRID;
const heightSum = new Float64Array(cellCount);
const heightWeight = new Float64Array(cellCount);
const bucketCounts = new Map();

function cellIndex(x, z) {
  const cx = Math.max(0, Math.min(HGRID - 1, Math.floor((x + WORLD / 2) / HSTEP)));
  const cz = Math.max(0, Math.min(HGRID - 1, Math.floor((z + WORLD / 2) / HSTEP)));
  return cz * HGRID + cx;
}

function chunkIndex(x, z) {
  const cx = Math.max(0, Math.min(GRID - 1, Math.floor((x + WORLD / 2) / CHUNK)));
  const cz = Math.max(0, Math.min(GRID - 1, Math.floor((z + WORLD / 2) / CHUNK)));
  return cz * GRID + cx;
}

for (const mesh of model.children) {
  const position = mesh.geometry.attributes.position;
  if (!position) continue;

  if (terrainPattern.test(mesh.name)) {
    for (let i = 0; i < position.count; i++) {
      const index = cellIndex(position.getX(i), position.getZ(i));
      heightSum[index] += position.getY(i);
      heightWeight[index] += 1;
    }
  }

  for (let i = 0; i < position.count; i += 3) {
    const x = (position.getX(i) + position.getX(i + 1) + position.getX(i + 2)) / 3;
    const z = (position.getZ(i) + position.getZ(i + 1) + position.getZ(i + 2)) / 3;
    const key = `${chunkIndex(x, z)}|${mesh.material.name || 'default'}`;
    bucketCounts.set(key, (bucketCounts.get(key) || 0) + 1);
  }
}

const buckets = new Map();
for (const [key, triangles] of bucketCounts) {
  buckets.set(key, {
    triangles,
    cursor: 0,
    positions: new Float32Array(triangles * 9),
    normals: new Float32Array(triangles * 9)
  });
}

for (const mesh of model.children) {
  const position = mesh.geometry.attributes.position;
  const normal = mesh.geometry.attributes.normal;
  if (!position) continue;

  for (let i = 0; i < position.count; i += 3) {
    const x = (position.getX(i) + position.getX(i + 1) + position.getX(i + 2)) / 3;
    const z = (position.getZ(i) + position.getZ(i + 1) + position.getZ(i + 2)) / 3;
    const key = `${chunkIndex(x, z)}|${mesh.material.name || 'default'}`;
    const bucket = buckets.get(key);
    const offset = bucket.cursor * 9;

    for (let k = 0; k < 3; k++) {
      const source = i + k;
      const target = offset + k * 3;
      bucket.positions[target] = position.getX(source);
      bucket.positions[target + 1] = position.getY(source);
      bucket.positions[target + 2] = position.getZ(source);

      if (normal) {
        bucket.normals[target] = normal.getX(source);
        bucket.normals[target + 1] = normal.getY(source);
        bucket.normals[target + 2] = normal.getZ(source);
      }
    }

    bucket.cursor++;
  }
}

model.clear();

function standardMaterial(name) {
  const source = materials.materials[name] || {};
  const color = source.color
    ? source.color.clone()
    : new THREE.Color(0x888888);
  const glowy = /Lava|Window_Glow|Crystal/.test(name);
  const metallic = /Iron|Metal/.test(name);

  return new THREE.MeshStandardMaterial({
    name,
    color,
    roughness: glowy ? .35 : .95,
    metalness: metallic ? .35 : 0,
    emissive: glowy ? color.clone() : new THREE.Color(0x000000),
    emissiveIntensity: glowy ? 1.15 : 0
  });
}

const heightmap = new Float32Array((HGRID + 1) * (HGRID + 1));

for (let gz = 0; gz <= HGRID; gz++) {
  for (let gx = 0; gx <= HGRID; gx++) {
    let sum = 0;
    let weight = 0;
    const wx = -WORLD / 2 + gx * HSTEP;
    const wz = -WORLD / 2 + gz * HSTEP;

    for (let oz = -2; oz <= 2; oz++) {
      for (let ox = -2; ox <= 2; ox++) {
        const cx = gx + ox;
        const cz = gz + oz;
        if (cx < 0 || cz < 0 || cx >= HGRID || cz >= HGRID) continue;

        const index = cz * HGRID + cx;
        if (!heightWeight[index]) continue;

        const dx = -WORLD / 2 + cx * HSTEP - wx;
        const dz = -WORLD / 2 + cz * HSTEP - wz;
        const w = heightWeight[index] / (1 + dx * dx + dz * dz);
        sum += heightSum[index] / heightWeight[index] * w;
        weight += w;
      }
    }

    heightmap[gz * (HGRID + 1) + gx] = weight ? sum / weight : 0;
  }
}

fs.writeFileSync(
  path.join(outputDir, 'heightmap.bin'),
  Buffer.from(heightmap.buffer)
);

const exporter = new GLTFExporter();
const chunkStats = [];

for (let cz = 0; cz < GRID; cz++) {
  for (let cx = 0; cx < GRID; cx++) {
    const index = cz * GRID + cx;
    const group = new THREE.Group();
    group.name = `chunk-${cx}-${cz}`;

    for (const [key, bucket] of buckets) {
      if (Number(key.split('|')[0]) !== index) continue;

      const materialName = key.split('|').slice(1).join('|');
      const geometry = new THREE.BufferGeometry();
      geometry.setAttribute(
        'position',
        new THREE.BufferAttribute(bucket.positions, 3)
      );
      geometry.setAttribute(
        'normal',
        new THREE.BufferAttribute(bucket.normals, 3)
      );
      geometry.computeBoundingSphere();

      const mesh = new THREE.Mesh(geometry, standardMaterial(materialName));
      mesh.name = materialName;
      group.add(mesh);
    }

    if (!group.children.length) {
      chunkStats.push({ x: cx, z: cz, meshes: 0, bytes: 0 });
      continue;
    }

    const glb = await exporter.parseAsync(group, {
      binary: true,
      onlyVisible: true
    });

    const fileName = `chunk-${cx}-${cz}.glb`;
    fs.writeFileSync(path.join(chunkDir, fileName), Buffer.from(glb));

    chunkStats.push({
      x: cx,
      z: cz,
      meshes: group.children.length,
      bytes: glb.byteLength
    });

    for (const mesh of group.children) {
      mesh.geometry.dispose();
      mesh.material.dispose();
    }
  }
}

const meta = {
  version: 1,
  source: 'open-world-dark-fantasy.obj',
  worldSize: WORLD,
  chunkSize: CHUNK,
  grid: GRID,
  heightmap: {
    file: 'heightmap.bin',
    grid: HGRID,
    step: HSTEP,
    min: -WORLD / 2,
    max: WORLD / 2
  },
  chunks: chunkStats
};

fs.writeFileSync(
  path.join(outputDir, 'world-meta.json'),
  JSON.stringify(meta, null, 2)
);

const total = chunkStats.reduce((sum, chunk) => sum + chunk.bytes, 0);
console.log(`chunks: ${chunkStats.length}, total: ${(total / 1048576).toFixed(2)} MB`);
console.log(`heightmap: ${(heightmap.byteLength / 1024).toFixed(1)} KB`);
  

