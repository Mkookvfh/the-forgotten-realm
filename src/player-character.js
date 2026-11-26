import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

function makeCapsule(radius, height, material) {
  const mesh = new THREE.Mesh(
    new THREE.CapsuleGeometry(radius, height, 3, 8),
    material
  );
  mesh.castShadow = true;
  mesh.receiveShadow = true;
  return mesh;
}

function createProceduralRig() {
  const rig = new THREE.Group();
  rig.name = 'ProceduralPlayerRig';

  const cloth = new THREE.MeshStandardMaterial({
    color: 0x343348, roughness: .86, metalness: .04
  });
  const armor = new THREE.MeshStandardMaterial({
    color: 0x7d8798, roughness: .58, metalness: .28
  });
  const leather = new THREE.MeshStandardMaterial({
    color: 0x3a2630, roughness: .9
  });
  const skin = new THREE.MeshStandardMaterial({
    color: 0xc18c70, roughness: .92
  });
  const dark = new THREE.MeshStandardMaterial({
    color: 0x171923, roughness: .95
  });
  const capeMat = new THREE.MeshStandardMaterial({
    color: 0x70283d, roughness: .95, side: THREE.DoubleSide
  });
  const trim = new THREE.MeshStandardMaterial({
    color: 0xc19a55, roughness: .55, metalness: .25
  });

  const hips = new THREE.Group();
  hips.name = 'Hips';
  hips.position.y = .92;
  rig.add(hips);

  const pelvis = makeCapsule(.19, .22, leather);
  pelvis.position.y = -.04;
  hips.add(pelvis);

  const torso = new THREE.Group();
  torso.name = 'Spine';
  torso.position.y = .05;
  hips.add(torso);

  const chest = makeCapsule(.26, .42, cloth);
  chest.position.y = .19;
  torso.add(chest);

  const chestPlate = new THREE.Mesh(new THREE.BoxGeometry(.36, .28, .12), armor);
  chestPlate.position.set(0, .22, .17);
  chestPlate.castShadow = true;
  torso.add(chestPlate);

  const belt = new THREE.Mesh(new THREE.BoxGeometry(.38, .07, .22), leather);
  belt.position.y = -.02;
  torso.add(belt);
  const buckle = new THREE.Mesh(new THREE.BoxGeometry(.07, .07, .035), trim);
  buckle.position.set(0, -.02, .29);
  torso.add(buckle);

  const neck = makeCapsule(.09, .08, skin);
  neck.position.y = .48;
  torso.add(neck);

  const head = new THREE.Group();
  head.name = 'Head';
  head.position.y = .61;
  torso.add(head);
  const face = new THREE.Mesh(new THREE.SphereGeometry(.19, 12, 10), skin);
  face.scale.set(.88, 1.08, .9);
  face.position.z = .035;
  face.castShadow = true;
  head.add(face);
  const hood = new THREE.Mesh(new THREE.SphereGeometry(.215, 12, 10, 0, Math.PI * 2, 0, Math.PI * .72), dark);
  hood.position.set(0, .055, -.025);
  hood.castShadow = true;
  head.add(hood);
  const mask = new THREE.Mesh(new THREE.BoxGeometry(.22, .045, .025), dark);
  mask.position.set(0, .035, .19);
  head.add(mask);

  const cape = new THREE.Mesh(new THREE.ConeGeometry(.38, .78, 7), capeMat);
  cape.position.set(0, -.13, -.2);
  cape.rotation.x = -.12;
  cape.castShadow = true;
  torso.add(cape);

  const armPivots = [];
  for (const side of [-1, 1]) {
    const arm = new THREE.Group();
    arm.name = side < 0 ? 'LeftArm' : 'RightArm';
    arm.position.set(side * .31, .37, 0);
    torso.add(arm);
    const shoulder = new THREE.Mesh(new THREE.SphereGeometry(.14, 10, 8), armor);
    shoulder.position.y = -.02;
    shoulder.castShadow = true;
    arm.add(shoulder);
    const upper = makeCapsule(.105, .28, cloth);
    upper.position.y = -.19;
    arm.add(upper);
    const forearm = makeCapsule(.085, .22, leather);
    forearm.position.y = -.42;
    arm.add(forearm);
    const hand = new THREE.Mesh(new THREE.SphereGeometry(.085, 8, 6), skin);
    hand.position.y = -.56;
    hand.castShadow = true;
    arm.add(hand);
    armPivots.push({ side, pivot: arm });
  }

  const legPivots = [];
  for (const side of [-1, 1]) {
    const leg = new THREE.Group();
    leg.name = side < 0 ? 'LeftLeg' : 'RightLeg';
    leg.position.set(side * .13, -.13, 0);
    hips.add(leg);
    const thigh = makeCapsule(.125, .3, cloth);
    thigh.position.y = -.2;
    leg.add(thigh);
    const shin = makeCapsule(.105, .25, leather);
    shin.position.y = -.44;
    leg.add(shin);
    const boot = new THREE.Mesh(new THREE.BoxGeometry(.22, .13, .32), dark);
    boot.position.set(0, -.59, .055);
    boot.castShadow = true;
    leg.add(boot);
    legPivots.push({ side, pivot: leg });
  }

  const glow = new THREE.Mesh(
    new THREE.SphereGeometry(.045, 8, 6),
    new THREE.MeshBasicMaterial({ color: 0x8d7bff })
  );
  glow.position.set(0, .26, .235);
  torso.add(glow);

  return {
    rig, hips, torso, head, armPivots, legPivots,
    cloth, armor, leather, capeMat
  };
}

export function createPlayerCharacter(body, fallbackSprite, options = {}) {
  const modelUrl = options.modelUrl || 'assets/characters/player.glb';
  const parts = createProceduralRig();
  body.add(parts.rig);
  fallbackSprite.visible = false;

  let mixer = null;
  let modelRoot = null;
  let actions = {};
  let activeAction = null;
  let activeState = '';
  let currentArmor = '';

  function setArmor(armorId) {
    if (armorId === currentArmor) return;
    currentArmor = armorId;
    const metal = armorId === 'plate' || armorId === 'dragonplate';
    parts.cloth.color.setHex(metal ? 0x6f7888 : 0x343348);
    parts.armor.color.setHex(metal ? 0xb0b8c4 : 0x7d8798);
    parts.leather.color.setHex(metal ? 0x332c35 : 0x3a2630);
    parts.capeMat.color.setHex(armorId === 'shadow' ? 0x241d38 : 0x70283d);
  }

  function selectAction(stateName) {
    if (!mixer) return;
    const next = actions[stateName] || actions.idle || Object.values(actions)[0];
    if (!next || next === activeAction) return;
    next.reset();
    next.enabled = true;
    next.setEffectiveTimeScale(1);
    next.setEffectiveWeight(1);
    if (activeAction) next.crossFadeFrom(activeAction, .18, true);
    next.play();
    activeAction = next;
    activeState = stateName;
  }

  async function tryLoadRiggedModel() {
    try {
      const url = new URL(modelUrl, document.baseURI).href;
      const response = await fetch(url, { method: 'HEAD', cache: 'no-store' });
      if (!response.ok) return;
      const gltf = await new GLTFLoader().loadAsync(url);
      const model = gltf.scene;
      const bounds = new THREE.Box3().setFromObject(model);
      const size = bounds.getSize(new THREE.Vector3());
      if (!Number.isFinite(size.y) || size.y < .05) return;

      const scale = 2 / size.y;
      model.scale.setScalar(scale);
      model.position.set(
        -(bounds.min.x + bounds.max.x) * .5 * scale,
        -bounds.min.y * scale,
        -(bounds.min.z + bounds.max.z) * .5 * scale
      );
      model.traverse((object) => {
        if (!object.isMesh) return;
        object.castShadow = true;
        object.receiveShadow = true;
        object.frustumCulled = true;
      });

      modelRoot = new THREE.Group();
      modelRoot.name = 'RiggedPlayerModel';
      modelRoot.add(model);
      body.add(modelRoot);
      parts.rig.visible = false;

      if (gltf.animations && gltf.animations.length) {
        mixer = new THREE.AnimationMixer(model);
        for (const clip of gltf.animations) {
          const name = clip.name.toLowerCase();
          let key = 'idle';
          if (/attack|slash|swing|hit/.test(name)) key = 'attack';
          else if (/dodge|roll|evade/.test(name)) key = 'dodge';
          else if (/hurt|damage/.test(name)) key = 'hurt';
          else if (/jump/.test(name)) key = 'jump';
          else if (/run|sprint/.test(name)) key = 'run';
          else if (/walk|move/.test(name)) key = 'walk';
          actions[key] = mixer.clipAction(clip);
        }
        selectAction('idle');
      }
    } catch (error) {
      // Missing or unsupported optional model keeps the procedural character active.
      console.info('[PlayerCharacter] Using built-in 3D rig:', error?.message || error);
    }
  }

  tryLoadRiggedModel();

  return {
    update(dt, state = {}) {
      setArmor(state.armor || 'leather');
      const anim = state.dodging ? 'dodge'
        : state.hurt ? 'hurt'
          : state.attacking ? 'attack'
            : state.moving ? (state.running ? 'run' : 'walk')
              : state.jumping ? 'jump' : 'idle';

      if (mixer) {
        selectAction(anim);
        mixer.update(dt);
      } else {
        const t = state.time || 0;
        const speed = state.running ? 11 : 7;
        const stride = state.moving ? Math.sin(t * speed) : Math.sin(t * 2) * .025;
        parts.legPivots.forEach(({ side, pivot }) => {
          pivot.rotation.x = state.moving ? stride * side : 0;
        });
        parts.armPivots.forEach(({ side, pivot }) => {
          const swing = state.moving ? -stride * side * .72 : 0;
          pivot.rotation.x = state.attacking && side > 0
            ? -1.35 + Math.sin(t * 18) * .25
            : state.dodging ? -.75 : swing;
          pivot.rotation.z = state.dodging ? side * .55 : 0;
        });
        parts.torso.rotation.x = state.attacking ? -.18 : state.dodging ? .28 : 0;
        parts.torso.rotation.z = state.moving ? Math.sin(t * speed) * .035 : 0;
        parts.hips.position.y = .92 + (state.moving ? Math.abs(stride) * .045 : Math.sin(t * 2) * .012);
        parts.head.rotation.x = state.hurt ? -.12 : 0;
      }
    }
  };
}
