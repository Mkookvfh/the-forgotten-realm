import * as THREE from 'three';

export function createCombatFeedback(scene, { mobile = false } = {}) {
  const effects = [];
  const sparkGeometry = new THREE.SphereGeometry(.055, 6, 5);
  const ringGeometry = new THREE.TorusGeometry(.42, .035, 6, 18);
  const maxEffects = mobile ? 36 : 72;

  function removeEffect(effect) {
    scene.remove(effect.mesh);
    if (effect.mesh.material) effect.mesh.material.dispose();
  }

  function impact(enemy, damage, { boss = false } = {}) {
    if (!enemy?.position) return;
    const color = boss ? 0xffb45e : 0x9be7ff;
    const origin = enemy.position.clone();
    origin.y += .75;

    const ring = new THREE.Mesh(
      ringGeometry,
      new THREE.MeshBasicMaterial({
        color,
        transparent: true,
        opacity: .8,
        depthWrite: false,
        blending: THREE.AdditiveBlending
      })
    );
    ring.rotation.x = -Math.PI / 2;
    ring.position.copy(origin);
    ring.scale.setScalar(.45);
    scene.add(ring);
    effects.push({
      mesh: ring,
      kind: 'ring',
      life: 0,
      duration: boss ? .38 : .28,
      origin
    });

    const count = mobile ? (boss ? 6 : 4) : (boss ? 10 : 7);
    for (let i = 0; i < count; i++) {
      const spark = new THREE.Mesh(
        sparkGeometry,
        new THREE.MeshBasicMaterial({
          color: i % 3 === 0 ? 0xffe2a0 : color,
          transparent: true,
          opacity: .95,
          depthWrite: false,
          blending: THREE.AdditiveBlending
        })
      );
      spark.position.copy(origin);
      const angle = Math.random() * Math.PI * 2;
      const speed = .9 + Math.random() * (boss ? 3.1 : 2.2);
      spark.scale.setScalar(.75 + Math.random() * .8);
      scene.add(spark);
      effects.push({
        mesh: spark,
        kind: 'spark',
        life: 0,
        duration: .22 + Math.random() * .22,
        vx: Math.cos(angle) * speed,
        vy: 1.0 + Math.random() * (boss ? 2.8 : 1.8),
        vz: Math.sin(angle) * speed
      });
    }

    while (effects.length > maxEffects) {
      const oldest = effects.shift();
      removeEffect(oldest);
    }
  }

  function update(dt) {
    for (let i = effects.length - 1; i >= 0; i--) {
      const effect = effects[i];
      effect.life += dt;
      const progress = THREE.MathUtils.clamp(effect.life / effect.duration, 0, 1);
      const material = effect.mesh.material;

      if (effect.kind === 'ring') {
        effect.mesh.scale.setScalar(.45 + progress * 2.1);
        material.opacity = .8 * (1 - progress);
      } else {
        effect.mesh.position.x += effect.vx * dt;
        effect.mesh.position.y += effect.vy * dt;
        effect.mesh.position.z += effect.vz * dt;
        effect.vy -= 5.5 * dt;
        effect.mesh.scale.multiplyScalar(Math.max(.01, 1 - dt * 2.8));
        material.opacity = .95 * (1 - progress);
      }

      if (progress >= 1) {
        effects.splice(i, 1);
        removeEffect(effect);
      }
    }
  }

  function dispose() {
    for (const effect of effects) removeEffect(effect);
    effects.length = 0;
    sparkGeometry.dispose();
    ringGeometry.dispose();
  }

  return { impact, update, dispose };
}
