import * as THREE from 'three';

export function createAmbientBirds({ scene, getHeight, mobile = true }) {
  const root = new THREE.Group();
  root.name = 'AmbientBirdFlock';
  scene.add(root);

  const birdCount = mobile ? 3 : 5;
  const bodyGeometry = new THREE.SphereGeometry(.12, 6, 5);
  const bodyMaterial = new THREE.MeshBasicMaterial({ color: 0x273746 });
  const wingGeometry = new THREE.BufferGeometry();
  wingGeometry.setAttribute('position', new THREE.Float32BufferAttribute([
    0, 0, 0, -.42, -.04, -.08, -.12, -.02, .06
  ], 3));
  wingGeometry.setIndex([0, 1, 2]);
  wingGeometry.computeVertexNormals();
  const wingMaterial = new THREE.MeshBasicMaterial({ color: 0x344c5a, side: THREE.DoubleSide });

  const birds = [];
  for (let i = 0; i < birdCount; i++) {
    const bird = new THREE.Group();
    const body = new THREE.Mesh(bodyGeometry, bodyMaterial);
    body.scale.set(1.35, .72, .7);
    bird.add(body);
    const left = new THREE.Mesh(wingGeometry, wingMaterial);
    const right = new THREE.Mesh(wingGeometry, wingMaterial);
    left.position.x = -.08;
    right.position.x = .08;
    right.rotation.y = Math.PI;
    bird.add(left, right);
    root.add(bird);
    birds.push({ mesh: bird, left, right, phase: i * 1.9, flee: 0, vx: 0, vz: 0, initialized: false });
  }

  function placeNear(bird, player) {
    const angle = bird.phase + Math.random() * Math.PI * 2;
    const distance = 7 + Math.random() * 12;
    bird.mesh.position.set(
      player.x + Math.cos(angle) * distance,
      (getHeight(player.x + Math.cos(angle) * distance, player.z + Math.sin(angle) * distance) || 0) + 5 + Math.random() * 4,
      player.z + Math.sin(angle) * distance
    );
    bird.flee = 0;
    bird.vx = 0;
    bird.vz = 0;
  }

  function update(dt, player) {
    if (!player) return;
    for (const bird of birds) {
      if (!bird.initialized) {
        placeNear(bird, player);
        bird.initialized = true;
      }
      const dx = bird.mesh.position.x - player.x;
      const dz = bird.mesh.position.z - player.z;
      const distance = Math.hypot(dx, dz);
      if (distance < 10 && bird.flee <= 0) {
        bird.flee = 2.8;
        const length = Math.max(.001, distance);
        bird.vx = dx / length * (5.5 + Math.random() * 2);
        bird.vz = dz / length * (5.5 + Math.random() * 2);
      }
      bird.flee = Math.max(0, bird.flee - dt);
      if (bird.flee > 0) {
        bird.mesh.position.x += bird.vx * dt;
        bird.mesh.position.z += bird.vz * dt;
        bird.mesh.position.y += dt * 2.4;
      } else {
        bird.phase += dt * .42;
        bird.mesh.position.x += Math.cos(bird.phase) * dt * .65;
        bird.mesh.position.z += Math.sin(bird.phase * .8) * dt * .65;
        const ground = getHeight(bird.mesh.position.x, bird.mesh.position.z);
        if (Number.isFinite(ground)) bird.mesh.position.y += ((ground + 7) - bird.mesh.position.y) * Math.min(1, dt * .8);
      }
      if (Math.hypot(bird.mesh.position.x - player.x, bird.mesh.position.z - player.z) > 48) {
        placeNear(bird, player);
      }
      bird.mesh.rotation.y = Math.atan2(bird.vx || Math.cos(bird.phase), bird.vz || Math.sin(bird.phase));
      const flap = Math.sin(performance.now() * .018 + bird.phase) * .55;
      bird.left.rotation.z = flap;
      bird.right.rotation.z = -flap;
    }
  }

  function dispose() {
    scene.remove(root);
    bodyGeometry.dispose();
    wingGeometry.dispose();
    bodyMaterial.dispose();
    wingMaterial.dispose();
  }

  return { update, dispose };
}
