import * as THREE from 'three';

/**
 * Procedural 3D frontier content for the four newly charted regions.
 * Uses the existing heightmap as the base, then adds blended biome relief
 * and modular landmarks. No external asset download is required.
 */
const FRONTIER = [
  { id: 'frostwatch', center: [245, -65], size: 116, color: 0x788d98, accent: 0xc7e4ef },
  { id: 'sunken-cathedral', center: [-245, 58], size: 108, color: 0x686d7c, accent: 0x9a8bd0 },
  { id: 'windscar', center: [245, 225], size: 116, color: 0x817866, accent: 0xc5b69a },
  { id: 'starfall-coast', center: [-245, -235], size: 116, color: 0x536e78, accent: 0x8bd5e2 }
];

const mat = (color, roughness = .92, metalness = 0) =>
  new THREE.MeshStandardMaterial({ color, roughness, metalness });
const stone = mat(0x6a6866);
const darkStone = mat(0x41434b);
const paleStone = mat(0x96918a);
const timber = mat(0x59402b);
const timberLight = mat(0x805b37);
const roof = mat(0x343743);
const snow = mat(0xd4e3e9, .78);
const moss = mat(0x35483d);
const water = new THREE.MeshStandardMaterial({
  color: 0x284b5b, roughness: .2, metalness: .18,
  transparent: true, opacity: .72, depthWrite: false
});
const lantern = new THREE.MeshStandardMaterial({
  color: 0xffc56d, emissive: 0xff8a26, emissiveIntensity: 1.8,
  roughness: .45
});

function box(parent, material, x, y, z, sx, sy, sz, rotationY = 0) {
  const mesh = new THREE.Mesh(new THREE.BoxGeometry(sx, sy, sz), material);
  mesh.position.set(x, y, z);
  mesh.rotation.y = rotationY;
  mesh.castShadow = true;
  mesh.receiveShadow = true;
  parent.add(mesh);
  return mesh;
}
function cylinder(parent, material, x, y, z, radiusTop, radiusBottom, height, sides = 8) {
  const mesh = new THREE.Mesh(
    new THREE.CylinderGeometry(radiusTop, radiusBottom, height, sides),
    material
  );
  mesh.position.set(x, y, z);
  mesh.castShadow = true;
  mesh.receiveShadow = true;
  parent.add(mesh);
  return mesh;
}
function beam(parent, material, a, b, thickness = .22) {
  const start = new THREE.Vector3(...a);
  const end = new THREE.Vector3(...b);
  const delta = end.clone().sub(start);
  const mesh = new THREE.Mesh(
    new THREE.BoxGeometry(thickness, delta.length(), thickness),
    material
  );
  mesh.position.copy(start.add(end).multiplyScalar(.5));
  mesh.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), delta.normalize());
  mesh.castShadow = true;
  parent.add(mesh);
  return mesh;
}
function baseAt(getHeight, x, z) {
  const h = getHeight(x, z);
  return Number.isFinite(h) ? h : 0;
}
function buildRelief(parent, region, getHeight) {
  const [cx, cz] = region.center;
  const half = region.size * .5;
  const divisions = 30;
  const positions = [];
  const colors = [];
  const indices = [];
  const baseColor = new THREE.Color(region.color);

  for (let iz = 0; iz <= divisions; iz++) {
    for (let ix = 0; ix <= divisions; ix++) {
      const u = ix / divisions * 2 - 1;
      const v = iz / divisions * 2 - 1;
      const x = cx + u * half;
      const z = cz + v * half;
      const edge = Math.max(Math.abs(u), Math.abs(v));
      const blend = 1 - THREE.MathUtils.smoothstep(edge, .72, 1);
      const wave = Math.sin(x * .075) * Math.cos(z * .061) * 1.25
        + Math.sin((x + z) * .12) * .55;
      let sculpt = wave;
      if (region.id === 'frostwatch') {
        sculpt += Math.max(0, 1 - Math.hypot(u + .18, v - .08)) * 7;
      } else if (region.id === 'sunken-cathedral') {
        sculpt -= Math.max(0, 1 - Math.hypot(u, v)) * 3.5;
      } else if (region.id === 'windscar') {
        sculpt += Math.max(0, 1 - Math.abs(u * .9 + v * .45)) * 5;
      } else if (region.id === 'starfall-coast') {
        sculpt += Math.sin(v * 7 + u * 2) * 2.2;
      }
      const y = baseAt(getHeight, x, z) + sculpt * blend + .12;
      positions.push(x, y, z);
      const shade = .82 + .18 * (1 - edge) + (wave * .025);
      const color = baseColor.clone().multiplyScalar(shade);
      if (region.id === 'frostwatch') color.lerp(new THREE.Color(0xc5dbe5), .18 * blend);
      if (region.id === 'sunken-cathedral') color.lerp(new THREE.Color(0x344b59), .22 * blend);
      if (region.id === 'starfall-coast') color.lerp(new THREE.Color(0x9a8066), .12 * blend);
      colors.push(color.r, color.g, color.b);
    }
  }
  for (let z = 0; z < divisions; z++) {
    for (let x = 0; x < divisions; x++) {
      const a = z * (divisions + 1) + x;
      const b = a + divisions + 1;
      indices.push(a, b, a + 1, b, b + 1, a + 1);
    }
  }
  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
  geometry.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));
  geometry.setIndex(indices);
  geometry.computeVertexNormals();
  const mesh = new THREE.Mesh(geometry, new THREE.MeshStandardMaterial({
    vertexColors: true, roughness: 1, side: THREE.DoubleSide
  }));
  mesh.receiveShadow = true;
  mesh.name = 'FrontierTerrain_' + region.id;
  parent.add(mesh);
}

function buildFrostwatch(group, getHeight, x, z) {
  const y = baseAt(getHeight, x, z) + 5.4;
  // Fort courtyard, thick perimeter walls, corner watch towers and keep.
  box(group, darkStone, x, y + .35, z, 28, .7, 24);
  box(group, stone, x, y + 3.2, z - 11, 28, 5.8, 1.6);
  box(group, stone, x - 13.2, y + 3.2, z, 1.6, 5.8, 24);
  box(group, stone, x + 13.2, y + 3.2, z, 1.6, 5.8, 24);
  box(group, stone, x - 7.5, y + 3.2, z + 11, 11, 5.8, 1.6);
  box(group, stone, x + 7.5, y + 3.2, z + 11, 11, 5.8, 1.6);
  for (const [tx, tz] of [[-13, -11], [13, -11], [-13, 11], [13, 11]]) {
    cylinder(group, paleStone, x + tx, y + 4.5, z + tz, 2.3, 2.8, 9, 8);
    cylinder(group, roof, x + tx, y + 10, z + tz, .2, 2.8, 2.8, 8);
    box(group, snow, x + tx, y + 9.2, z + tz, 5.5, .35, 5.5);
  }
  box(group, darkStone, x, y + 4.2, z - 2, 10, 7.5, 8);
  box(group, roof, x, y + 8.2, z - 2, 12, 1.2, 10);
  for (let i = -4; i <= 4; i += 2) {
    box(group, lantern, x + i, y + 2.2, z + 12.1, .45, .7, .3);
  }
}

function buildCathedral(group, getHeight, x, z) {
  const y = baseAt(getHeight, x, z) - 3.4;
  // Flooded nave: raised stone ring, broken walls, pillars and luminous altar.
  box(group, darkStone, x, y + .2, z, 32, .45, 24);
  box(group, stone, x, y + 2.5, z - 11, 30, 4.5, 1.2);
  box(group, stone, x - 14.5, y + 2.5, z, 1.2, 4.5, 22);
  box(group, stone, x + 14.5, y + 2.5, z, 1.2, 4.5, 22);
  for (const px of [-10, -5, 5, 10]) {
    cylinder(group, paleStone, x + px, y + 3, z - 5, .8, 1.05, 6, 8);
    cylinder(group, paleStone, x + px, y + 3, z + 5, .8, 1.05, 6, 8);
  }
  box(group, water, x, y + .55, z + 1, 23, .12, 14);
  box(group, darkStone, x, y + 1.4, z - 8, 4, 2.5, 2.5);
  box(group, lantern, x, y + 2.8, z - 8, .7, .7, .7);
  // Fallen masonry and fractured buttresses.
  beam(group, stone, [x - 12, y + .8, z + 8], [x - 6, y + 2.5, z + 10], .7);
  beam(group, stone, [x + 8, y + .7, z + 8], [x + 13, y + 3, z + 10], .7);
}

function buildWindscar(group, getHeight, x, z) {
  const y = baseAt(getHeight, x, z) + 4.8;
  // Canyon cliffs and a suspended timber bridge crossing the ravine.
  cylinder(group, darkStone, x - 17, y + 8, z, 9, 12, 18, 6);
  cylinder(group, stone, x + 17, y + 8, z + 1, 9, 12, 18, 6);
  for (let i = -12; i <= 12; i += 2) {
    box(group, timberLight, x + i, y + 5.5, z, 1.8, .35, 5.2);
  }
  for (const side of [-1, 1]) {
    for (let i = -12; i <= 12; i += 6) {
      box(group, timber, x + i, y + 7, z + side * 2.4, .25, 3.2, .25);
    }
    beam(group, timber, [x - 15, y + 8.2, z + side * 2.4], [x + 15, y + 8.2, z + side * 2.4], .18);
  }
  for (let i = -2; i <= 2; i++) {
    box(group, stone, x + i * 2, y + 1.1, z + 14, 2, 2, 2);
  }
}

function buildStarfall(group, getHeight, x, z) {
  const y = baseAt(getHeight, x, z);
  // Weathered wreck with broken hull, tilted masts, ribs and shore boulders.
  box(group, darkStone, x, y + 1, z, 22, 2.2, 6, -.16);
  box(group, timber, x - 4, y + 2.2, z, 13, 1.2, 5, -.22);
  box(group, timberLight, x + 7, y + 2.2, z, 8, 1.2, 5, .16);
  beam(group, timber, [x - 2, y + 2, z], [x - 5, y + 13, z - 1], .55);
  beam(group, timber, [x + 3, y + 2, z], [x + 6, y + 9, z + 1], .45);
  beam(group, timberLight, [x - 8, y + 3, z - 2.5], [x - 8, y + 3, z + 2.5], .3);
  beam(group, timberLight, [x + 8, y + 3, z - 2.5], [x + 8, y + 3, z + 2.5], .3);
  for (const [rx, rz, scale] of [
    [-20, -8, 1.5], [-16, 9, 1.2], [18, -10, 1.7], [22, 6, 1.1],
    [-5, 18, 1.3], [11, 17, 1.4]
  ]) {
    const rock = cylinder(group, stone, x + rx, y + scale, z + rz, scale, scale * 1.2, scale * 2, 6);
    rock.rotation.z = .2;
  }
  box(group, water, x + 26, y + .05, z, 32, .08, 42);
}

function buildRegion(region, getHeight) {
  const group = new THREE.Group();
  group.name = 'Frontier_' + region.id;
  const [x, z] = region.center;
  buildRelief(group, region, getHeight);
  if (region.id === 'frostwatch') buildFrostwatch(group, getHeight, x, z);
  if (region.id === 'sunken-cathedral') buildCathedral(group, getHeight, x, z);
  if (region.id === 'windscar') buildWindscar(group, getHeight, x, z);
  if (region.id === 'starfall-coast') buildStarfall(group, getHeight, x, z);
  group.traverse((object) => {
    if (object.isMesh) {
      object.castShadow = true;
      object.receiveShadow = true;
    }
  });
  return group;
}

export function createFrontierWorld({ scene, getHeight, loadDistance = 300 }) {
  const root = new THREE.Group();
  root.name = 'ProceduralFrontierWorld';
  scene.add(root);
  const entries = FRONTIER.map((region) => {
    const group = buildRegion(region, getHeight);
    root.add(group);
    return { region, group };
  });
  let lastX = Infinity;
  let lastZ = Infinity;
  function update(position) {
    if (Math.hypot(position.x - lastX, position.z - lastZ) < 18) return;
    lastX = position.x;
    lastZ = position.z;
    for (const { region, group } of entries) {
      const [x, z] = region.center;
      group.visible = Math.hypot(position.x - x, position.z - z) <= loadDistance;
    }
  }
  update({ x: 0, z: 0 });
  return { root, update, regions: entries.map(({ region }) => region.id) };
}
