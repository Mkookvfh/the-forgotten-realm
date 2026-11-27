import * as THREE from 'three';

/**
 * Compact, procedural scenic starter area.
 * All geometry is generated locally; no external assets are required.
 * Reuses a small set of materials/geometries and InstancedMesh batches to
 * keep draw calls reasonable on mobile GPUs.
 */
export function createStarterScenery({ scene, getHeight = () => 0, mobile = false }) {
  const root = new THREE.Group();
  root.name = 'DawnMeadowScenery';
  scene.add(root);

  const groundY = (x, z) => {
    const h = getHeight(x, z);
    return Number.isFinite(h) ? h : 0;
  };
  const pathMat = new THREE.MeshStandardMaterial({ color: 0xc8a675, roughness: 1 });
  const pathEdgeMat = new THREE.MeshStandardMaterial({ color: 0x9c7a50, roughness: 1 });
  const waterMat = new THREE.MeshStandardMaterial({
    color: 0x4ebfe3, roughness: .12, metalness: .08,
    transparent: true, opacity: .78, depthWrite: false
  });
  const woodMat = new THREE.MeshStandardMaterial({ color: 0x9b673d, roughness: .92 });
  const woodLightMat = new THREE.MeshStandardMaterial({ color: 0xc18b51, roughness: .9 });
  const barkMat = new THREE.MeshStandardMaterial({ color: 0x76503a, roughness: 1 });
  const leafMats = [
    new THREE.MeshStandardMaterial({ color: 0x4e9f49, roughness: .95 }),
    new THREE.MeshStandardMaterial({ color: 0x68b852, roughness: .95 }),
    new THREE.MeshStandardMaterial({ color: 0x82c95c, roughness: .95 })
  ];
  const flowerMats = [
    new THREE.MeshStandardMaterial({ color: 0xffd85c, roughness: .75 }),
    new THREE.MeshStandardMaterial({ color: 0xf18fc2, roughness: .75 }),
    new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: .75 }),
    new THREE.MeshStandardMaterial({ color: 0xa8a0ff, roughness: .75 })
  ];
  const rockMat = new THREE.MeshStandardMaterial({ color: 0x9daeb2, roughness: 1 });

  function surfaceStrip(name, points, width, material, yOffset = .04) {
    const positions = [];
    const indices = [];
    for (let i = 0; i < points.length; i++) {
      const p = points[i];
      const before = points[Math.max(0, i - 1)];
      const after = points[Math.min(points.length - 1, i + 1)];
      const dx = after.x - before.x;
      const dz = after.z - before.z;
      const len = Math.hypot(dx, dz) || 1;
      const nx = -dz / len;
      const nz = dx / len;
      for (const side of [-1, 1]) {
        const x = p.x + nx * width * .5 * side;
        const z = p.z + nz * width * .5 * side;
        positions.push(x, groundY(x, z) + yOffset, z);
      }
      if (i < points.length - 1) {
        const a = i * 2;
        indices.push(a, a + 1, a + 2, a + 1, a + 3, a + 2);
      }
    }
    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
    geometry.setIndex(indices);
    geometry.computeVertexNormals();
    const mesh = new THREE.Mesh(geometry, material);
    mesh.name = name;
    mesh.receiveShadow = true;
    mesh.material.side = THREE.DoubleSide;
    root.add(mesh);
    return mesh;
  }

  // A gentle walking path that bends slightly, rather than a straight runway.
  const pathPoints = [];
  for (let i = 0; i <= 30; i++) {
    const z = -5 - i * 2.25;
    const x = Math.sin(i * .22) * 3.2;
    pathPoints.push({ x, z });
  }
  surfaceStrip('MeadowWalkingTrail', pathPoints, 3.1, pathMat, .055);
  surfaceStrip('TrailEdgeLeft', pathPoints.map(p => ({ x: p.x - 1.72, z: p.z })), .16, pathEdgeMat, .035);
  surfaceStrip('TrailEdgeRight', pathPoints.map(p => ({ x: p.x + 1.72, z: p.z })), .16, pathEdgeMat, .035);

  // A shallow blue stream crosses the trail; the wooden bridge keeps the route walkable.
  const creekPoints = [];
  for (let i = 0; i <= 24; i++) {
    const x = -27 + i * 2.25;
    creekPoints.push({ x, z: -31.5 + Math.sin(i * .32) * .85 });
  }
  surfaceStrip('ClearMeadowCreek', creekPoints, 3.2, waterMat, .12);

  const bridgeY = groundY(0, -31.5) + .22;
  const deck = new THREE.Mesh(new THREE.BoxGeometry(4.6, .34, 7.2), woodMat);
  deck.position.set(0, bridgeY, -31.5);
  deck.castShadow = true;
  deck.receiveShadow = true;
  root.add(deck);
  for (let i = -3; i <= 3; i++) {
    const plank = new THREE.Mesh(new THREE.BoxGeometry(4.55, .08, .12), woodLightMat);
    plank.position.set(0, bridgeY + .2, -31.5 + i * .92);
    root.add(plank);
  }
  for (const side of [-1, 1]) {
    for (let i = -2; i <= 2; i += 2) {
      const post = new THREE.Mesh(new THREE.BoxGeometry(.18, 1.1, .18), woodMat);
      post.position.set(side * 2.05, bridgeY + .72, -31.5 + i);
      post.castShadow = true;
      root.add(post);
    }
    const rail = new THREE.Mesh(new THREE.BoxGeometry(.16, .16, 6.1), woodLightMat);
    rail.position.set(side * 2.05, bridgeY + 1.12, -31.5);
    root.add(rail);
  }

  // Small scenic lookout deck at the end of the path.
  const lookoutZ = -69;
  const lookoutY = groundY(0, lookoutZ) + .18;
  const lookout = new THREE.Mesh(new THREE.BoxGeometry(9, .38, 6.5), woodMat);
  lookout.position.set(0, lookoutY, lookoutZ);
  lookout.castShadow = true;
  lookout.receiveShadow = true;
  root.add(lookout);
  for (const side of [-1, 1]) {
    for (let i = -3.5; i <= 3.5; i += 1.75) {
      const post = new THREE.Mesh(new THREE.BoxGeometry(.2, 1.25, .2), woodMat);
      post.position.set(i, lookoutY + .82, lookoutZ + side * 2.9);
      root.add(post);
    }
    const rail = new THREE.Mesh(new THREE.BoxGeometry(8.4, .16, .16), woodLightMat);
    rail.position.set(0, lookoutY + 1.28, lookoutZ + side * 2.9);
    root.add(rail);
  }

  // Instanced tree groups: three leafy tiers per tree, one draw call per tier.
  const treeSpots = [
    [-13,-11],[-18,-19],[-12,-27],[-20,-36],[-14,-45],[-23,-54],[-17,-64],
    [14,-13],[20,-21],[13,-29],[22,-38],[15,-47],[24,-56],[17,-65],
    [-30,-18],[-32,-32],[-29,-48],[30,-22],[32,-40],[29,-52]
  ];
  const count = treeSpots.length;
  const trunkGeo = new THREE.CylinderGeometry(.22, .34, 3.4, 6);
  const crownGeo = [
    new THREE.ConeGeometry(1.65, 2.65, 7),
    new THREE.ConeGeometry(1.35, 2.45, 7),
    new THREE.ConeGeometry(1.05, 2.15, 7)
  ];
  const trunks = new THREE.InstancedMesh(trunkGeo, barkMat, count);
  const crowns = crownGeo.map((geo, tier) => new THREE.InstancedMesh(geo, leafMats[tier], count));
  const dummy = new THREE.Object3D();
  const colliders = [];
  treeSpots.forEach(([x, z], i) => {
    const y = groundY(x, z);
    dummy.position.set(x, y + 1.7, z);
    dummy.rotation.set(0, (i * 1.73) % Math.PI, 0);
    dummy.scale.setScalar(.82 + (i % 5) * .08);
    dummy.updateMatrix();
    trunks.setMatrixAt(i, dummy.matrix);
    for (let tier = 0; tier < crowns.length; tier++) {
      dummy.position.set(x + (tier - 1) * .12, y + 3.05 + tier * .72, z);
      dummy.scale.setScalar(.82 + (i % 5) * .08);
      dummy.updateMatrix();
      crowns[tier].setMatrixAt(i, dummy.matrix);
    }
    colliders.push({ x, z, radius: .78 + (i % 5) * .07, scenic: true });
  });
  trunks.castShadow = true;
  trunks.receiveShadow = true;
  root.add(trunks);
  crowns.forEach(mesh => { mesh.castShadow = true; mesh.receiveShadow = true; root.add(mesh); });

  // Flower patches are batched and kept away from the middle of the trail.
  const flowerCount = mobile ? 44 : 84;
  const flowerGeo = new THREE.SphereGeometry(.16, 5, 4);
  for (let colorIndex = 0; colorIndex < flowerMats.length; colorIndex++) {
    const batchCount = Math.ceil(flowerCount / flowerMats.length);
    const flowers = new THREE.InstancedMesh(flowerGeo, flowerMats[colorIndex], batchCount);
    let n = 0;
    for (let i = colorIndex; i < flowerCount; i += flowerMats.length) {
      const side = i % 2 ? 1 : -1;
      const x = side * (4.2 + ((i * 7) % 11));
      const z = -8 - ((i * 13) % 61);
      const y = groundY(x, z) + .28;
      dummy.position.set(x, y, z);
      dummy.scale.set(.7 + (i % 3) * .18, 1, .7 + (i % 3) * .18);
      dummy.rotation.set(0, i * .8, 0);
      dummy.updateMatrix();
      flowers.setMatrixAt(n++, dummy.matrix);
    }
    flowers.castShadow = false;
    root.add(flowers);
  }

  // Pale boulders frame the lookout and stream banks as landmarks.
  const rockGeo = new THREE.DodecahedronGeometry(1, 0);
  const rockSpots = [[-7,-28,1.2],[7,-34,1.1],[-8,-40,.9],[8,-43,1.3],[-7,-67,1.5],[7,-70,1.25]];
  const rocks = new THREE.InstancedMesh(rockGeo, rockMat, rockSpots.length);
  rockSpots.forEach(([x,z,s], i) => {
    dummy.position.set(x, groundY(x,z) + s * .55, z);
    dummy.scale.set(s, s * .75, s * .9);
    dummy.rotation.set(i * .4, i * .7, i * .2);
    dummy.updateMatrix();
    rocks.setMatrixAt(i, dummy.matrix);
  });
  rocks.castShadow = true;
  rocks.receiveShadow = true;
  root.add(rocks);

  return {
    root,
    colliders,
    dispose() {
      scene.remove(root);
      root.traverse((object) => {
        if (!object.isMesh) return;
        object.geometry?.dispose();
      });
    }
  };
}
