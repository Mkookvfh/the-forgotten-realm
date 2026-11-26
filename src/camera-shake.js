import * as THREE from 'three';

/**
 * Small, decaying camera impulse for combat feedback.
 * It is applied after the follow camera has been positioned, so it never
 * changes the player's movement or the camera's saved follow target.
 */
export function createCameraShake({ mobile = false } = {}) {
  let strength = 0;
  let elapsed = 0;
  const duration = mobile ? .16 : .2;
  const positionOffset = new THREE.Vector3();
  const lookOffset = new THREE.Vector3();

  function trigger(amount = .08) {
    strength = Math.min(mobile ? .16 : .22, Math.max(strength, amount));
    elapsed = 0;
  }

  function apply(camera, target) {
    if (strength <= .001) return;
    const envelope = Math.max(0, 1 - elapsed / duration);
    const amplitude = strength * envelope;
    positionOffset.set(
      (Math.random() - .5) * amplitude,
      (Math.random() - .5) * amplitude * .7,
      (Math.random() - .5) * amplitude * .35
    );
    lookOffset.set(
      (Math.random() - .5) * amplitude * .22,
      (Math.random() - .5) * amplitude * .18,
      0
    );
    camera.position.add(positionOffset);
    camera.lookAt(target.clone().add(lookOffset));
  }

  function update(dt) {
    elapsed += Math.max(0, dt);
    if (elapsed >= duration) {
      strength = 0;
      elapsed = duration;
    }
  }

  return { trigger, apply, update };
}
