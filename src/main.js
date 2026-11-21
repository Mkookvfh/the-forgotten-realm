
import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { createSystems, RARITY } from './systems.js';
import './style.css';

// ---------- DOM ----------
const $ = (selector) => document.querySelector(selector);
const mount = $('#game');
if (!mount) throw new Error('Missing #game mount element');

const ui = {
  hp: $('#hp-fill'), hpText: $('#hp-text'),
  stamina: $('#stamina-fill'), staminaText: $('#stamina-text'),
  level: $('#level-text'), crystals: $('#crystal-count'),
  potions: $('#potion-count'), quest: $('#quest-text'),
  clock: $('#clock'), toast: $('#toast'), hint: $('#interaction-hint'),
    settings: $('#settings-panel'),
  inventory: $('#inventory')
};

const isTouch = matchMedia('(pointer: coarse)').matches;
const settings = { quality: 'medium', sensitivity: 5, weather: true };

const weaponStats = {
  sword: { name: 'ดาบ', damage: 1, range: 3.0, cooldown: 0.55, rarity: 'common' },
  greatsword: { name: 'ดาบใหญ่', damage: 2, range: 3.4, cooldown: 0.9, rarity: 'common' },
  staff: { name: 'คทาเวท', damage: 1.5, range: 4.8, cooldown: 0.8, rarity: 'uncommon' },
  voidblade: { name: 'ดาบเงาว่าง', damage: 3.5, range: 3.8, cooldown: .7, rarity: 'epic' }
};

const armorStats = {
  leather: { name: 'เกราะหนัง', reduction: 0, rarity: 'common' },
  iron: { name: 'เกราะเหล็ก', reduction: .25, rarity: 'common' },
  shadow: { name: 'เกราะเงา', reduction: .5, rarity: 'rare' },
  dragonplate: { name: 'เกราะมังกรร้าง', reduction: .65, rarity: 'epic' }
};

const state = {
  hp: 100, stamina: 100, crystals: 0, potions: 2,
  level: 1, xp: 0, questStage: 0,
  weapon: 'sword', armor: 'leather',
  attackBonus: 0, skillPoints: 0,
  maxHp: 100, maxMana: 100,
  skills: { might: 0, vitality: 0, arcana: 0 },
  inventory: { sword: 1, leather: 1 },
  mana: 100, spells: [], activeSpell: null,
  quests: {},
  dayTime: 0.72, weatherTime: 0,
  weatherOn: true, dead: false,
  discoveredRegions: []
};

let toastTimer = 0;

function toast(message) {
  ui.toast.textContent = message;
  ui.toast.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => ui.toast.classList.remove('show'), 2200);
}

function updateHud() {
  ui.hp.style.width = `${Math.max(0, state.hp)}%`;
  ui.hpText.textContent = `${Math.ceil(state.hp)} / ${state.maxHp}`;
  ui.stamina.style.width = `${Math.ceil(state.stamina)}%`;
  ui.staminaText.textContent = `${Math.ceil(state.stamina)} / 100`;
  ui.level.textContent = String(state.level);
  ui.crystals.textContent = String(state.crystals);
  ui.potions.textContent = String(state.potions);

  ui.quest.textContent = state.questStage === 0
    ? 'เดินทางไปยังหอคอยร้าง'
    : state.questStage === 1
      ? 'กำจัดผู้พิทักษ์ที่เฝ้าซากโบราณ'
      : 'สำเร็จ! สำรวจดินแดนต่อไป';
}

function refreshEquipmentUI() {
  const weapon = weaponStats[state.weapon] || weaponStats.sword;
  const armor = armorStats[state.armor] || armorStats.leather;

  const weaponLabel = $('#equipped-weapon');
  const armorLabel = $('#equipped-armor');
  const attackLabel = $('#attack-stat');
  const defenseLabel = $('#defense-stat');
  const skillLabel = $('#skill-points');

  if (weaponLabel) {
    weaponLabel.textContent = `${weapon.name} [${RARITY[weapon.rarity || 'common'].name}]`;
    weaponLabel.style.color = RARITY[weapon.rarity || 'common'].color;
  }
  if (armorLabel) {
    armorLabel.textContent = `${armor.name} [${RARITY[armor.rarity || 'common'].name}]`;
    armorLabel.style.color = RARITY[armor.rarity || 'common'].color;
  }
  if (attackLabel) attackLabel.textContent = String(weapon.damage + state.attackBonus);
  if (defenseLabel) defenseLabel.textContent = `${Math.round(armor.reduction * 100)}%`;
  if (skillLabel) skillLabel.textContent = String(state.skillPoints);

  for (const id of Object.keys(weaponStats)) {
    const button = $(`#weapon-${id}`);
    if (button) {
      button.classList.toggle('selected', state.weapon === id);
      button.disabled = !systems.owns(id);
    }
  }
  for (const id of Object.keys(armorStats)) {
    const button = $(`#armor-${id}`);
    if (button) {
      button.classList.toggle('selected', state.armor === id);
      button.disabled = !systems.owns(id);
    }
  }
}

function selectWeapon(id) {
  if (!weaponStats[id] || !systems.owns(id)) return;
  state.weapon = id;
  refreshEquipmentUI();
  toast(`เปลี่ยนอาวุธ: ${weaponStats[id].name}`);
}

function selectArmor(id) {
  if (!armorStats[id] || !systems.owns(id)) return;
  state.armor = id;
  refreshEquipmentUI();
  toast(`สวมใส่: ${armorStats[id].name}`);
}

const skillDefs = {
  might: { name: 'พลังโจมตี', max: 5, desc: 'เพิ่มพลังโจมตี +0.5 ต่อระดับ' },
  vitality: { name: 'ความทนทาน', max: 3, desc: 'เพิ่ม HP สูงสุด +15 ต่อระดับ' },
  arcana: { name: 'พลังเวท', max: 3, desc: 'เพิ่ม MP สูงสุด +12 และพลังเวท +10% ต่อระดับ' }
};

function upgradeSkill(id) {
  const def = skillDefs[id];
  if (!def) return;

  const rank = state.skills[id] || 0;
  if (rank >= def.max) return toast('อัปเกรดถึงขีดจำกัดแล้ว');
  if (state.skillPoints <= 0) return toast('ไม่มีแต้มทักษะ');

  state.skillPoints--;
  state.skills[id] = rank + 1;

  if (id === 'might') {
    state.attackBonus = Math.min(5, state.skills.might * .5);
  } else if (id === 'vitality') {
    state.maxHp = 100 + state.skills.vitality * 15;
    state.hp = Math.min(state.maxHp, state.hp + 15);
  } else if (id === 'arcana') {
    state.maxMana = 100 + state.skills.arcana * 12;
    state.mana = Math.min(state.maxMana, state.mana + 12);
  }

  refreshSkillUI();
  refreshEquipmentUI();
  updateHud();
  toast(`อัปเกรด ${def.name} เป็นระดับ ${state.skills[id]}`);
}

function refreshSkillUI() {
  const pointsLabel = $('#skill-points');
  if (pointsLabel) pointsLabel.textContent = String(state.skillPoints);

  const treePointsLabel = $('#skill-points-tree');
  if (treePointsLabel) treePointsLabel.textContent = String(state.skillPoints);

  const container = $('#skill-tree');
  if (!container) return;

  container.innerHTML = Object.entries(skillDefs).map(([id, def]) => {
    const rank = state.skills[id] || 0;
    const pips = Array.from({ length: def.max }, (_, index) => (
      `<i class="${index < rank ? 'on' : ''}"></i>`
    )).join('');
    const disabled = rank >= def.max || state.skillPoints <= 0 ? ' disabled' : '';

    return (
      `<div class="skill-node">` +
      `<b>${def.name}</b>` +
      `<div class="pips">${pips}</div>` +
      `<small>${def.desc}</small>` +
      `<button type="button" data-skill="${id}"${disabled}>อัปเกรด</button>` +
      `</div>`
    );
  }).join('');
}

// ---------- Three.js scene ----------
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x080d18);
scene.fog = new THREE.FogExp2(0x202c3b, 0.006);

const camera = new THREE.PerspectiveCamera(
  62, innerWidth / innerHeight, 0.1, 220
);

const renderer = new THREE.WebGLRenderer({
  antialias: true,
  powerPreference: 'high-performance'
});

renderer.outputColorSpace = THREE.SRGBColorSpace;
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1.12;
renderer.setPixelRatio(Math.min(devicePixelRatio || 1, isTouch ? 1.35 : 1.75));
renderer.setSize(innerWidth, innerHeight);
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
renderer.domElement.style.touchAction = 'none';
renderer.domElement.setAttribute('aria-label', 'Game view');
mount.appendChild(renderer.domElement);

// ---------- Sky ----------
const sky = new THREE.Mesh(
  new THREE.SphereGeometry(180, 32, 24),
  new THREE.ShaderMaterial({
    uniforms: {
      uSun: { value: 0 }
    },
    side: THREE.BackSide,
    depthWrite: false,
    fog: false,
    vertexShader: `
      varying vec3 vDir;
      void main() {
        vDir = normalize(position);
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,
    fragmentShader: `
  uniform float uSun;
  varying vec3 vDir;

  void main() {
    float h = normalize(vDir).y;

    vec3 nightHorizon = vec3(.16,.19,.27);
    vec3 nightZenith = vec3(.008,.014,.04);

    vec3 dayHorizon = vec3(.55,.72,.9);
    vec3 dayZenith = vec3(.12,.42,.78);

    vec3 horizon = mix(nightHorizon, dayHorizon, uSun);
    vec3 zenith = mix(nightZenith, dayZenith, uSun);

    vec3 col = mix(horizon, zenith, smoothstep(-.18,.8,h));

    vec3 moonDir = normalize(vec3(-.4,.65,-.5));
    float glow = pow(max(dot(normalize(vDir),moonDir),0.0),24.0);
    col += vec3(.25,.31,.48) * glow * (1.0-uSun);

    float disc = smoothstep(.9992,.9997,dot(normalize(vDir),moonDir));
    col = mix(col,vec3(.88,.91,1.0),disc * (1.0-uSun));

    gl_FragColor = vec4(col,1.0);
  }
`
  })
);
sky.renderOrder = -1;
scene.add(sky);

// ---------- Lighting ----------
const hemi = new THREE.HemisphereLight(0xc8d8f0, 0x24221d, 1.65);
scene.add(hemi);

const ambient = new THREE.AmbientLight(0xb4c8e8, 0.78);
scene.add(ambient);

const moon = new THREE.DirectionalLight(0xc3d5ff, 1.8);
moon.position.set(-18, 28, 12);
moon.castShadow = true;
moon.shadow.mapSize.set(1024, 1024);
Object.assign(moon.shadow.camera, {
  left: -32, right: 32, top: 32, bottom: -32
});
moon.shadow.normalBias = 0.03;
scene.add(moon);

const sunLight = new THREE.DirectionalLight(0xffe4b5, 2.2);
sunLight.position.set(25, 35, -20);
sunLight.castShadow = true;
sunLight.shadow.mapSize.set(1024, 1024);

Object.assign(sunLight.shadow.camera, {
  left: -45,
  right: 45,
  top: 45,
  bottom: -45,
  near: 0.5,
  far: 120
});

sunLight.shadow.normalBias = 0.03;
scene.add(sunLight);

const moonGlow = new THREE.PointLight(0x9bb5ed, 1.0, 65);
moonGlow.position.set(-16, 12, -18);
scene.add(moonGlow);

// ---------- Ground ----------
const ground = new THREE.Mesh(
  new THREE.PlaneGeometry(180, 180),
  new THREE.MeshStandardMaterial({ color: 0x343a32, roughness: 1 })
);
ground.rotation.x = -Math.PI / 2;
ground.receiveShadow = true;
scene.add(ground);

// ---------- Terrain Height Detection ----------
let importedWorld = null;
let importedWorldBounds = null;
const terrainRaycaster = new THREE.Raycaster();

// ---------- Imported Open World GLB (Safe Test) ----------
const worldLoader = new GLTFLoader();

worldLoader.load(
  `${import.meta.env.BASE_URL}assets/world/open-world-dark-fantasy.glb`,

  (gltf) => {
    importedWorld = gltf.scene;

    importedWorld.name = 'ImportedWorldGLB';
    importedWorld.visible = true;

    importedWorld.updateMatrixWorld(true);

    const bounds = new THREE.Box3().setFromObject(importedWorld);
    importedWorldBounds = bounds;
    const size = bounds.getSize(new THREE.Vector3());

    let meshCount = 0;

    importedWorld.traverse((object) => {
      if (object.isMesh) {
        meshCount++;
      }
    });

    scene.add(importedWorld);
    ground.visible = false;

    console.log('GLB WORLD LOADED', {
      size: size.toArray(),
      meshCount
    });

    toast(
      `ตรวจพบแผนที่ GLB · ${Math.round(size.x)} × ${Math.round(size.z)}`
    );
  },

  undefined,

  (error) => {
    console.error('GLB WORLD LOAD ERROR:', error);
    toast('โหลดไฟล์แผนที่ GLB ไม่สำเร็จ');
  }
);

const groundDayColor = new THREE.Color(0x343a32);
const groundNightColor = new THREE.Color(0x65705d);


const mats = {
  stone: new THREE.MeshStandardMaterial({ color: 0x454747, roughness: 1 }),
  bark: new THREE.MeshStandardMaterial({ color: 0x33251c, roughness: 1 }),
  leaves: new THREE.MeshStandardMaterial({ color: 0x263b2b, roughness: 1 }),
  ruin: new THREE.MeshStandardMaterial({ color: 0x55565a, roughness: 1 })
};

// ---------- Environment ----------
for (let i = 0; i < 24; i++) {
  const slab = new THREE.Mesh(
    new THREE.BoxGeometry(2.2, 0.12, 1.5),
    mats.stone
  );
  slab.position.set(Math.sin(i * 0.32) * 1.4, 0.04, -i * 2.5);
  slab.rotation.y = Math.sin(i) * 0.12;
  slab.receiveShadow = true;
  slab.castShadow = true;
  scene.add(slab);
}
const obstacles = [];
function makeTree(x, z, scale = 1) {
  const tree = new THREE.Group();

  const trunk = new THREE.Mesh(
    new THREE.CylinderGeometry(.18 * scale, .32 * scale, 3.2 * scale, 6),
    mats.bark
  );
  trunk.position.y = 1.6 * scale;
  trunk.castShadow = true;
  tree.add(trunk);

  for (let j = 0; j < 3; j++) {
    const crown = new THREE.Mesh(
      new THREE.ConeGeometry((1.25 - j * .18) * scale, 2.4 * scale, 7),
      mats.leaves
    );
    crown.position.set((j - 1) * .25 * scale, (3.1 + j * .52) * scale, 0);
    crown.castShadow = true;
    tree.add(crown);
  }

  tree.position.set(x, 0, z);
scene.add(tree);

obstacles.push({
  x,
  z,
  radius: 0.85 * scale
});
}

let seed = 417;
function random() {
  seed = (seed * 16807) % 2147483647;
  return (seed - 1) / 2147483646;
}

for (let i = 0; i < 92; i++) {
  const z = 10 - i * 3.2;
  makeTree(-7 - random() * 10, z, .7 + random() * .8);
  makeTree(7 + random() * 10, z - 1, .7 + random() * .8);
}


// ---------- Grass Details ----------
const grassMaterial = new THREE.MeshStandardMaterial({
  color: 0x496b3d,
  roughness: 1,
  side: THREE.DoubleSide
});

const grassBlade = new THREE.PlaneGeometry(0.16, 0.7);
const grassCount = isTouch ? 900 : 1800;
const grass = new THREE.InstancedMesh(
  grassBlade,
  grassMaterial,
  grassCount
);

const grassDummy = new THREE.Object3D();

for (let i = 0; i < grassCount; i++) {
  const x = (random() - 0.5) * 150;
  const z = (random() - 0.5) * 150;

  // เว้นพื้นที่ทางเดินตรงกลาง
  if (Math.abs(x) < 2.5 && z > -65 && z < 12) {
    grassDummy.position.set(x + 5, 0.32, z);
  } else {
    grassDummy.position.set(x, 0.32, z);
  }

  grassDummy.rotation.set(
    0,
    random() * Math.PI,
    (random() - 0.5) * 0.25
  );

  const scale = 0.5 + random() * 1.1;
  grassDummy.scale.set(scale, scale, scale);
  grassDummy.updateMatrix();

  grass.setMatrixAt(i, grassDummy.matrix);
}

grass.instanceMatrix.needsUpdate = true;
grass.frustumCulled = true;
scene.add(grass);

// ---------- Mountains ----------
const mountainMaterial = new THREE.MeshStandardMaterial({
  color: 0x414957,
  roughness: 1
});

for (let i = 0; i < 18; i++) {
  const mountain = new THREE.Mesh(
    new THREE.ConeGeometry(
      7 + random() * 9,
      15 + random() * 18,
      7
    ),
    mountainMaterial
  );

  const side = i % 2 === 0 ? -1 : 1;
  mountain.position.set(
    side * (48 + random() * 28),
    5,
    20 - i * 8
  );

  mountain.rotation.y = random() * Math.PI;
  mountain.castShadow = true;
  mountain.receiveShadow = true;
  scene.add(mountain);
}

// ---------- Ancient River ----------
const riverCurve = new THREE.CatmullRomCurve3([
  new THREE.Vector3(-75, 0.08, -72),
  new THREE.Vector3(-35, 0.08, -68),
  new THREE.Vector3(0, 0.08, -74),
  new THREE.Vector3(35, 0.08, -67),
  new THREE.Vector3(75, 0.08, -73)
]);

const river = new THREE.Mesh(
  new THREE.TubeGeometry(riverCurve, 80, 2.8, 8, false),
  new THREE.MeshStandardMaterial({
    color: 0x263f59,
    roughness: 0.2,
    metalness: 0.25,
    transparent: true,
    opacity: 0.88
  })
);

scene.add(river);

// ---------- Ancient Ruins ----------
const ruinGroup = new THREE.Group();

for (let i = 0; i < 4; i++) {
  const pillar = new THREE.Mesh(
    new THREE.BoxGeometry(1.1, 5, 1.1),
    mats.ruin
  );

  pillar.position.set(
    (i % 2) * 7 - 3.5,
    2.5,
    Math.floor(i / 2) * 7 - 3.5
  );

  pillar.rotation.z = (random() - 0.5) * 0.08;
  pillar.castShadow = true;
  pillar.receiveShadow = true;
  ruinGroup.add(pillar);
}

const ruinFloor = new THREE.Mesh(
  new THREE.BoxGeometry(10, 0.35, 10),
  mats.stone
);

ruinFloor.position.y = 0.15;
ruinFloor.receiveShadow = true;
ruinGroup.add(ruinFloor);

ruinGroup.position.set(13, 0, -48);
scene.add(ruinGroup);

for (let i = 0; i < 4; i++) {
  obstacles.push({
    x: 13 + (i % 2) * 7 - 3.5,
    z: -48 + Math.floor(i / 2) * 7 - 3.5,
    radius: 0.9
  });
}

// ---------- Tower ----------
const tower = new THREE.Group();

const towerBase = new THREE.Mesh(
  new THREE.CylinderGeometry(2.2, 2.7, 8, 8),
  mats.ruin
);
towerBase.position.y = 4;
towerBase.castShadow = true;
tower.add(towerBase);

const towerTop = new THREE.Mesh(
  new THREE.ConeGeometry(2.1, 2.8, 8),
  new THREE.MeshStandardMaterial({ color: 0x242631 })
);
towerTop.position.y = 9.1;
tower.add(towerTop);
tower.position.set(0, 0, -48);
scene.add(tower);
obstacles.push({
  x: 0,
  z: -48,
  radius: 2.7
});

const shrine = new THREE.Mesh(
  new THREE.TorusGeometry(1.0, .12, 8, 20),
  new THREE.MeshStandardMaterial({
    color: 0x8a78bd,
    emissive: 0x48326d,
    emissiveIntensity: 1.2
  })
);
shrine.position.set(0, 2, -43);
scene.add(shrine);


// ---------- Pixel Art Player ----------
const player = new THREE.Group();
const body = new THREE.Group();
player.add(body);

// สร้างภาพ Pixel Art 4 ทิศทาง 4 เฟรม
const spriteCanvas = document.createElement('canvas');
spriteCanvas.width = 128;
spriteCanvas.height = 128;

const spriteCtx = spriteCanvas.getContext('2d');

function drawPixelHero(ctx, ox, oy, direction, frame) {
  const px = (x, y, w, h, color) => {
    ctx.fillStyle = color;
    ctx.fillRect(ox + x, oy + y, w, h);
  };

  const step = frame === 1 ? -1 : frame === 3 ? 1 : 0;
  const side = direction === 1 || direction === 3;

  

  // ผ้าคลุม
  px(7, 14, 5, 12, '#70283d');
  px(9, 20, 4, 9, '#9b3547');
  px(20, 14, 5, 12, '#70283d');

  // ขาและรองเท้า
  px(11, 25, 4, 5, '#25283a');
  px(18, 25, 4, 5, '#25283a');
  px(10 + step, 29, 6, 2, '#171923');
  px(18 - step, 29, 6, 2, '#171923');

  // ลำตัวและเกราะ
  px(10, 14, 13, 12, '#343b50');
  px(12, 15, 9, 8, '#596078');
  px(14, 17, 5, 7, '#252b3c');
  px(15, 21, 3, 3, '#c19a55');

  // แขน
  px(7, 16, 4, 8, '#343b50');
  px(22, 16, 4, 8, '#343b50');
  px(7, 22, 4, 3, '#d5a47e');
  px(22, 22, 4, 3, '#d5a47e');

  // ศีรษะและฮู้ด
  px(9, 3, 14, 4, '#171722');
  px(6, 7, 20, 9, '#282638');
  px(8, 5, 16, 3, '#3c354b');
  px(8, 9, 16, 8, '#e4b18b');

  // ผม
  px(7, 7, 5, 5, '#211e2c');
  px(11, 5, 5, 4, '#211e2c');
  px(17, 6, 6, 4, '#211e2c');
  px(22, 8, 4, 5, '#211e2c');

  if (direction === 0) {
    // ใบหน้าด้านหน้า
    px(11, 11, 3, 2, '#20202b');
    px(19, 11, 3, 2, '#20202b');
    px(15, 14, 3, 1, '#a96e65');
  } else if (side) {
    // ใบหน้าด้านข้าง
    px(19, 11, 3, 2, '#20202b');
    px(23, 13, 2, 2, '#d99b79');
  } else {
    // ด้านหลัง
    px(8, 10, 16, 6, '#292638');
  }

  // ขอบผ้าคลุมสีแดง
  px(8, 25, 3, 4, '#a63d50');

  
}

for (let direction = 0; direction < 4; direction++) {
  for (let frame = 0; frame < 4; frame++) {
    drawPixelHero(
      spriteCtx,
      frame * 32,
      direction * 32,
      direction,
      frame
    );
  }
}

const playerTexture = new THREE.CanvasTexture(spriteCanvas);
playerTexture.magFilter = THREE.NearestFilter;
playerTexture.minFilter = THREE.NearestFilter;
playerTexture.generateMipmaps = false;
playerTexture.colorSpace = THREE.SRGBColorSpace;
playerTexture.repeat.set(0.25, 0.25);
playerTexture.offset.set(0, 0.75);

const playerSprite = new THREE.Sprite(
  new THREE.SpriteMaterial({
    map: playerTexture,
    transparent: true,
    alphaTest: 0.05,
    depthWrite: false
  })
);

playerSprite.scale.set(1.55, 2.05, 1);
playerSprite.position.y = 1.03;
body.add(playerSprite);

// เงาใต้เท้า
const playerShadow = new THREE.Mesh(
  new THREE.CircleGeometry(0.48, 16),
  new THREE.MeshBasicMaterial({
    color: 0x000000,
    transparent: true,
    opacity: 0.28,
    depthWrite: false
  })
);
playerShadow.rotation.x = -Math.PI / 2;
playerShadow.position.y = 0.025;
player.add(playerShadow);

player.position.set(0, 0, 3);
scene.add(player);

// ---------- Terrain Height Query ----------


function getTerrainHeight(x, z, referenceY) {
  if (!importedWorld || !importedWorldBounds) {
    return null;
  }

  const origin = new THREE.Vector3(
    x,
    importedWorldBounds.max.y + 50,
    z
  );

  terrainRaycaster.set(
    origin,
    new THREE.Vector3(0, -1, 0)
  );

  terrainRaycaster.near = 0;
  terrainRaycaster.far =
    importedWorldBounds.max.y -
    importedWorldBounds.min.y + 100;

  const hits = terrainRaycaster.intersectObject(
    importedWorld,
    true
  );

  let bestHeight = null;
  let bestDistance = Infinity;

  for (const hit of hits) {
    if (!hit.face) continue;

    const normal = hit.face.normal.clone();

    normal.applyMatrix3(
      new THREE.Matrix3().getNormalMatrix(
        hit.object.matrixWorld
      )
    ).normalize();

    if (normal.y <= 0.6) continue;

    const distance = Math.abs(
      hit.point.y - referenceY
    );

    if (distance < bestDistance) {
      bestDistance = distance;
      bestHeight = hit.point.y;
    }
  }

  return bestHeight;
}

// ---------- Collectibles ----------
const collectibles = [];
const crystalMat = new THREE.MeshStandardMaterial({
  color: 0x8b7bd1,
  emissive: 0x4d3c9b,
  emissiveIntensity: 1.6,
  roughness: .25
});

for (let i = 0; i < 8; i++) {
  const crystal = new THREE.Mesh(
    new THREE.OctahedronGeometry(.38),
    crystalMat
  );
  crystal.position.set((i % 2 ? 1 : -1) * (3.5 + random() * 2), .8, -8 - i * 6);
  crystal.castShadow = true;
  scene.add(crystal);
  collectibles.push(crystal);
}

// ---------- Enemies ----------
const enemies = [];

const enemyTypes = {
  guardian: {
    name: 'ผู้พิทักษ์', hp: 3, damage: 8, speed: 1.65,
    aggro: 12, reach: 1.5, cooldown: 1.25, xp: 35,
    scale: 1, color: 0x332a36, emissive: 0x230b22, eye: 0xff443e
  },
  wraith: {
    name: 'วิญญาณร้าย', hp: 2, damage: 6, speed: 2.4,
    aggro: 14, reach: 1.4, cooldown: 1.0, xp: 25,
    scale: .85, color: 0x2c3b4a, emissive: 0x12303f, eye: 0x8ce8ff
  },
  brute: {
    name: 'อสูรศิลา', hp: 6, damage: 12, speed: 1.05,
    aggro: 10, reach: 2.0, cooldown: 1.6, xp: 60,
    scale: 1.35, color: 0x4a2f2a, emissive: 0x3a1108, eye: 0xffa24a
  },
  boss: {
    name: 'เจ้าแห่งซากปรัก', hp: 20, damage: 16, speed: 1.25,
    aggro: 18, reach: 2.8, cooldown: 1.5, xp: 300,
    scale: 2.1, color: 0x3a2246, emissive: 0x3d0b52, eye: 0xff4fd8
  }
};

function spawnEnemy(type, x, z) {
  const stats = enemyTypes[type];
  const enemy = new THREE.Group();

  const material = new THREE.MeshStandardMaterial({
    color: stats.color,
    roughness: .8,
    emissive: stats.emissive
  });

  const torso = new THREE.Mesh(
    new THREE.CapsuleGeometry(.48, .65, 4, 7),
    material
  );
  torso.position.y = .95;
  torso.castShadow = true;
  enemy.add(torso);

  const eyes = new THREE.Mesh(
    new THREE.SphereGeometry(.09, 8, 8),
    new THREE.MeshBasicMaterial({ color: stats.eye })
  );
  eyes.position.set(0, 1.55, .36);
  enemy.add(eyes);

  if (type === 'boss') {
    const crown = new THREE.Mesh(
      new THREE.ConeGeometry(.42, .8, 6),
      new THREE.MeshStandardMaterial({
        color: 0xc992f0,
        emissive: 0x8c3ad0,
        emissiveIntensity: 1.4
      })
    );
    crown.position.y = 2.05;
    enemy.add(crown);
  }

  const healthBar = new THREE.Group();
  const healthBack = new THREE.Mesh(
    new THREE.PlaneGeometry(1, .12),
    new THREE.MeshBasicMaterial({
      color: 0x180d14,
      transparent: true,
      opacity: .85,
      depthTest: true
    })
  );
  const healthFill = new THREE.Mesh(
    new THREE.PlaneGeometry(.92, .07),
    new THREE.MeshBasicMaterial({
      color: type === 'boss' ? 0xff4fd8 : 0x42e66b,
      depthTest: true
    })
  );
  healthFill.position.z = .01;
  healthBar.add(healthBack);
  healthBar.add(healthFill);
  healthBar.position.y = 2.05;
  enemy.add(healthBar);

  enemy.position.set(x, 0, z);
  enemy.scale.setScalar(stats.scale);
  enemy.userData = {
    type,
    name: stats.name,
    stats,
    hp: stats.hp,
    maxHp: stats.hp,
    alive: true,
    homeX: x,
    homeZ: z,
    cooldown: 0,
    healthBar,
    healthFill
  };

  scene.add(enemy);
  enemies.push(enemy);
  return enemy;
}

const enemySpawns = [
  ['guardian', -4, -30],
  ['guardian', 0, -36],
  ['guardian', 4, -42],
  ['wraith', -9, -16],
  ['wraith', 9, -24],
  ['wraith', -10, -52],
  ['brute', 10, -50],
  ['brute', 15, -58],
  ['boss', 0, -86]
];

for (const [type, x, z] of enemySpawns) spawnEnemy(type, x, z);

// ---------- Update 0.5 Systems ----------
const systems = createSystems({
  scene,
  player,
  state,
  enemies,
  toast,
  gainXp,
  updateHud,
  refreshEquipmentUI,
  defeatEnemy,
  staticLandmarks: [
    { position: tower.position, color: '#c9a86a', size: 4.5, name: 'หอคอย', region: 'tower' },
    { position: ruinGroup.position, color: '#9d9fb4', size: 4, name: 'ซากวิหาร', region: 'ruins' },
    { position: shrine.position, color: '#d6a8f0', size: 3.5, name: 'ศาลเจ้า', region: 'tower' }
  ],
  regions: [
    { id: 'tower', name: 'หอคอยแห่งผู้สูญหาย', center: tower.position, radius: 10 },
    { id: 'ruins', name: 'วิหารโบราณ', center: ruinGroup.position, radius: 12 },
    { id: 'river', name: 'ริมแม่น้ำโบราณ', center: new THREE.Vector3(0, 0, -72), radius: 18 },
    { id: 'forest', name: 'ป่าต้องสาป', center: new THREE.Vector3(-12, 0, -30), radius: 20 },
    { id: 'wilderness', name: 'ทุ่งรกร้าง', center: new THREE.Vector3(0, 0, 0), radius: 25 }
  ]
});

// ---------- Rain ----------
const rainCount = isTouch ? 180 : 420;
const rainPositions = new Float32Array(rainCount * 3);

for (let i = 0; i < rainCount; i++) {
  rainPositions[i * 3] = (random() - .5) * 70;
  rainPositions[i * 3 + 1] = random() * 24;
  rainPositions[i * 3 + 2] = (random() - .5) * 70;
}

const rainGeometry = new THREE.BufferGeometry();
rainGeometry.setAttribute(
  'position',
  new THREE.BufferAttribute(rainPositions, 3)
);

const rain = new THREE.Points(
  rainGeometry,
  new THREE.PointsMaterial({
    color: 0x9bb8dc,
    size: .055,
    transparent: true,
    opacity: .45
  })
);
scene.add(rain);


// ---------- Fireflies ----------
const fireflyCount = isTouch ? 24 : 55;
const fireflyPositions = new Float32Array(fireflyCount * 3);
const fireflyOffsets = [];

for (let i = 0; i < fireflyCount; i++) {
  fireflyOffsets.push({
    x: (random() - 0.5) * 38,
    y: 1.2 + random() * 5,
    z: (random() - 0.5) * 38,
    phase: random() * Math.PI * 2
  });
}

const fireflyGeometry = new THREE.BufferGeometry();
fireflyGeometry.setAttribute(
  'position',
  new THREE.BufferAttribute(fireflyPositions, 3)
);

const fireflyMaterial = new THREE.PointsMaterial({
  color: 0xbaff91,
  size: isTouch ? 0.13 : 0.16,
  transparent: true,
  opacity: 0,
  depthWrite: false,
  blending: THREE.AdditiveBlending
});

const fireflies = new THREE.Points(
  fireflyGeometry,
  fireflyMaterial
);

fireflies.visible = false;
scene.add(fireflies);
    

// ---------- Controls ----------
const keys = Object.create(null);

// One-shot actions prevent repeated jumping/interacting while holding.
const input = {
  x: 0,
  y: 0,
  run: false,
  jumpPressed: false,
  attackPressed: false,
  interactPressed: false,
  dodgePressed: false
};

function clearInputs() {
  for (const key of Object.keys(keys)) keys[key] = false;

  input.x = 0;
  input.y = 0;
  input.run = false;
  input.jumpPressed = false;
  input.attackPressed = false;
  input.interactPressed = false;
  input.dodgePressed = false;

  const stick = $('#stick');
  if (stick) stick.style.transform = 'translate(0,0)';
}

addEventListener('keydown', (e) => {
  if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'Space'].includes(e.code)) {
    e.preventDefault();
  }

  if (!keys[e.code]) {
    if (e.code === 'Space') input.jumpPressed = true;
    if (e.code === 'KeyF') input.attackPressed = true;
    if (e.code === 'KeyE') input.interactPressed = true;
    if (e.code === 'KeyQ') usePotion();
    if (e.code === 'KeyC') input.dodgePressed = true;
    if (e.code === 'KeyR') systems.castSpell();
    if (e.code === 'KeyM') toggleMapPanel();
  }

  keys[e.code] = true;
});

addEventListener('keyup', (e) => {
  keys[e.code] = false;
});

addEventListener('blur', clearInputs);
document.addEventListener('visibilitychange', () => {
  if (document.hidden) {
    saveGame(false);
    clearInputs();
  }
});

// Mobile joystick
const stickZone = $('#stick-zone');
const stick = $('#stick');
let stickId = null;

function moveStick(e) {
  const r = stickZone.getBoundingClientRect();
  const cx = r.left + r.width / 2;
  const cy = r.top + r.height / 2;

  let dx = e.clientX - cx;
  let dy = e.clientY - cy;
  const max = 34;
  const len = Math.hypot(dx, dy);

  if (len > max) {
    dx = dx / len * max;
    dy = dy / len * max;
  }

  input.x = dx / max;
  input.y = dy / max;
  stick.style.transform = `translate(${dx}px,${dy}px)`;
}

function resetStick(e) {
  if (e && e.pointerId !== stickId) return;
  stickId = null;
  input.x = 0;
  input.y = 0;
  stick.style.transform = 'translate(0,0)';
}

stickZone.addEventListener('pointerdown', (e) => {
  e.preventDefault();
  stickId = e.pointerId;
  stickZone.setPointerCapture(e.pointerId);
  moveStick(e);
});

stickZone.addEventListener('pointermove', (e) => {
  if (e.pointerId === stickId) moveStick(e);
});

stickZone.addEventListener('pointerup', resetStick);
stickZone.addEventListener('pointercancel', resetStick);
stickZone.addEventListener('lostpointercapture', resetStick);

// Hold controls and tap controls
function bindHold(id, start, stop = () => {}) {
  const el = $(id);

  el.addEventListener('pointerdown', (e) => {
    e.preventDefault();
    start();
    el.setPointerCapture(e.pointerId);
  });

  for (const ev of ['pointerup', 'pointercancel', 'lostpointercapture']) {
    el.addEventListener(ev, stop);
  }
}

bindHold('#run', () => input.run = true, () => input.run = false);

bindHold('#jump', () => {
  input.jumpPressed = true;
});

bindHold('#attack', () => {
  input.attackPressed = true;
});

bindHold('#interact', () => {
  input.interactPressed = true;
});

bindHold('#dodge', () => {
  input.dodgePressed = true;
});

bindHold('#cast', () => {
  systems.castSpell();
});

// ---------- Camera ----------
let yaw = 0;
let pitch = .22;
let distance = 9.2;
let sensitivity = .005;

let lookId = null;
let lastX = 0;
let lastY = 0;

const canvas = renderer.domElement;

canvas.addEventListener('pointerdown', (e) => {
  const validMouse = e.pointerType === 'mouse' && e.button === 0;
  const validTouch = e.pointerType === 'touch'
    && e.clientX > innerWidth * .38
    && e.clientY < innerHeight - 125;

  if (!validMouse && !validTouch) return;

  lookId = e.pointerId;
  lastX = e.clientX;
  lastY = e.clientY;
  canvas.setPointerCapture(e.pointerId);
  e.preventDefault();
});

canvas.addEventListener('pointermove', (e) => {
  if (e.pointerId !== lookId) return;

  yaw -= (e.clientX - lastX) * sensitivity;
  pitch = THREE.MathUtils.clamp(
    pitch + (e.clientY - lastY) * sensitivity,
    -.12,
    .82
  );

  lastX = e.clientX;
  lastY = e.clientY;
});

function endLook(e) {
  if (e.pointerId === lookId) lookId = null;
}

canvas.addEventListener('pointerup', endLook);
canvas.addEventListener('pointercancel', endLook);
canvas.addEventListener('lostpointercapture', endLook);
canvas.addEventListener('contextmenu', (e) => e.preventDefault());

canvas.addEventListener('wheel', (e) => {
  distance = THREE.MathUtils.clamp(
    distance + Math.sign(e.deltaY) * .7,
    6,
    14
  );
}, { passive: true });

// ---------- Gameplay ----------
let verticalVelocity = 0;
let playerAnimTime = 0;
let grounded = true;
let attackCooldown = 0;
let dodgeCooldown = 0;
let dodgeTimer = 0;
let invulnerabilityTimer = 0;
const dodgeDirection = new THREE.Vector3();
let autoSaveTimer = 0;

const clock = new THREE.Clock();
const cameraTarget = new THREE.Vector3();
const desiredCamera = new THREE.Vector3();


function saveGame(showMessage = true) {
  const payload = {
    version: 5,
    player: [
      player.position.x,
      player.position.y,
      player.position.z
    ],
    state: { ...state },
    settings: { ...settings },
    systems: systems.serializeWorld(),

    collectibles: collectibles.map(crystal => crystal.visible),

    enemies: enemies.map(enemy => ({
      type: enemy.userData.type,
      position: [
        enemy.position.x,
        enemy.position.y,
        enemy.position.z
      ],
      hp: enemy.userData.hp,
      alive: enemy.userData.alive
    }))
  };

  try {
    localStorage.setItem(
      'forgotten-realm-save-v1',
      JSON.stringify(payload)
    );

    if (showMessage) toast('บันทึกความคืบหน้าโลกแล้ว');
  } catch (error) {
    console.error(error);
    toast('ไม่สามารถบันทึกได้ในอุปกรณ์นี้');
  }
}

function loadGame() {
  try {
    const raw = localStorage.getItem('forgotten-realm-save-v1');
    if (!raw) return toast('ยังไม่มีข้อมูลบันทึก');

    const data = JSON.parse(raw);

    if (
      !Array.isArray(data.player) ||
      data.player.length !== 3 ||
      !data.state ||
      !data.player.every(Number.isFinite)
    ) {
      throw new Error('Invalid save format');
    }

    player.position.set(...data.player);

    const numberFields = [
      'hp', 'stamina', 'crystals', 'potions',
      'level', 'xp', 'questStage', 'dayTime'
    ];

    for (const field of numberFields) {
      if (Number.isFinite(Number(data.state[field]))) {
        state[field] = Number(data.state[field]);
      }
    }

    systems.restoreState();
    systems.deserializeWorld(data.systems);

    state.hp = THREE.MathUtils.clamp(state.hp, 0, state.maxHp);
    state.stamina = THREE.MathUtils.clamp(state.stamina, 0, 100);
    state.weapon = weaponStats[data.state.weapon] ? data.state.weapon : 'sword';
    state.armor = armorStats[data.state.armor] ? data.state.armor : 'leather';
    state.attackBonus = THREE.MathUtils.clamp(
      Number(data.state.attackBonus) || 0, 0, 5
    );
    state.skillPoints = Math.max(0, Number(data.state.skillPoints) || 0);
    state.potions = Math.max(0, state.potions);
    state.crystals = Math.max(0, state.crystals);
    state.level = Math.max(1, state.level);
    state.questStage = THREE.MathUtils.clamp(state.questStage, 0, 2);
    state.discoveredRegions = Array.isArray(data.state.discoveredRegions)
  ? data.state.discoveredRegions.filter(id => typeof id === 'string')
  : [];

    
    // Restore collected crystals
    if (Array.isArray(data.collectibles)) {
      collectibles.forEach((crystal, index) => {
        crystal.visible = data.collectibles[index] !== false;
      });
    }

    // Restore enemy health and positions
    if (Array.isArray(data.enemies)) {
      enemies.forEach((enemy, index) => {
        const saved = data.enemies[index];
        if (!saved) return;
        if (saved.type && saved.type !== enemy.userData.type) return;

        if (
          Array.isArray(saved.position) &&
          saved.position.length === 3 &&
          saved.position.every(Number.isFinite)
        ) {
          enemy.position.set(...saved.position);
        }

        enemy.userData.homeX = enemy.position.x;
enemy.userData.homeZ = enemy.position.z;

        const maxHp = enemy.userData.maxHp;
        enemy.userData.hp = THREE.MathUtils.clamp(
          Number(saved.hp) || 0, 0, maxHp
        );

        enemy.userData.alive =
          saved.alive !== false && enemy.userData.hp > 0;

        enemy.userData.healthFill.scale.x =
          enemy.userData.hp / maxHp;

        enemy.userData.healthFill.position.x =
          -(1 - enemy.userData.hp / maxHp) * 0.46;

        if (enemy.userData.alive) {
          scene.add(enemy);
        } else {
          scene.remove(enemy);
        }

        enemy.userData.cooldown = 0;
      });
    }

    if (data.settings) {
      if (['low', 'medium', 'high'].includes(data.settings.quality)) {
        settings.quality = data.settings.quality;
      }
      if (Number.isFinite(Number(data.settings.sensitivity))) {
        settings.sensitivity = THREE.MathUtils.clamp(
          Number(data.settings.sensitivity), 1, 12
        );
      }
      settings.weather = Boolean(data.settings.weather);
    }

    applySettings();
    updateHud();
    refreshEquipmentUI();
    refreshSkillUI();
    systems.refreshInventoryUI();
    systems.refreshQuestUI();
    toast('โหลดเกมแล้ว');
  } catch (error) {
    console.error(error);
    toast('ข้อมูลบันทึกเสียหายหรือไม่ถูกต้อง');
  }
}

function usePotion() {
  if (state.potions <= 0) return toast('ไม่มียาฟื้นฟู');
  if (state.hp >= state.maxHp) return toast('พลังชีวิตเต็มแล้ว');

  state.potions--;
  state.hp = Math.min(state.maxHp, state.hp + 45);
  updateHud();
  toast('ใช้ยาฟื้นฟู +45 HP');
}

function gainXp(amount) {
  state.xp += amount;

  while (state.xp >= 100) {
    state.xp -= 100;
    state.level++;
    state.skillPoints++;
    refreshEquipmentUI();
    refreshSkillUI();
    toast(`เลเวลเพิ่มเป็น ${state.level} · ได้แต้มทักษะ 1`);
  }
}

function defeatEnemy(enemy) {
  if (!enemy.userData.alive) return;

  enemy.userData.hp = 0;
  enemy.userData.alive = false;
  scene.remove(enemy);

  const crystals = enemy.userData.type === 'boss' ? 5 : 1;
  state.crystals += crystals;
  gainXp(enemy.userData.stats.xp);
  systems.onEnemyKilled(enemy);
  toast(`${enemy.userData.name}พ่ายแพ้ · ได้ผลึก ${crystals} ชิ้น`);
  updateHud();
}

function attack() {
  if (attackCooldown > 0) return;

  const weapon = weaponStats[state.weapon] || weaponStats.sword;
  attackCooldown = weapon.cooldown;
  let hit = false;

  for (const enemy of enemies) {
    if (!enemy.userData.alive) continue;

    const d = player.position.distanceTo(enemy.position);

    if (d < weapon.range) {
      enemy.userData.hp -= weapon.damage + state.attackBonus;
      hit = true;
      enemy.scale.setScalar(.92);

      setTimeout(() => enemy.scale.setScalar(1), 100);

      if (enemy.userData.hp <= 0) {
        defeatEnemy(enemy);
      } else {
        toast(`โจมตีโดนด้วย${weapon.name}`);
      }

      break;
    }
  }

  if (!hit) toast('ไม่มีศัตรูอยู่ในระยะ');
  updateHud();
}

function interact() {
  if (systems.interact()) return;

  if (player.position.distanceTo(shrine.position) < 5) {
    if (state.questStage === 0) {
      state.questStage = 1;
      toast('ภารกิจใหม่: กำจัดผู้พิทักษ์');
    } else if (
      state.questStage === 1 &&
      enemies.every(e => !e.userData.alive)
    ) {
      state.questStage = 2;
      gainXp(100);
      state.potions++;
      toast('ภารกิจสำเร็จ · ได้รับยาฟื้นฟู');
    } else {
      toast('พลังบางอย่างยังปกป้องซากโบราณอยู่');
    }

    updateHud();
    return;
  }

  toast('ไม่มีสิ่งใดให้โต้ตอบใกล้ตัว');
}

// ---------- Day and Night ----------

let dayNightMode = 'auto';

function updateDayNight(dt) {
  if (dayNightMode === 'auto') {
    state.dayTime = (state.dayTime + dt * .0035) % 1;
  }

  let sun;

  if (dayNightMode === 'day') {
    sun = 1;
  } else if (dayNightMode === 'night') {
    sun = 0;
  } else {
    sun = Math.max(0, Math.sin(state.dayTime * Math.PI * 2));
  }

  
moon.intensity = 2.0 * (1 - sun);
sunLight.intensity = 2.2 * sun;
hemi.intensity = 1.05 + 0.9 * sun;
ambient.intensity = 0.62 + 0.23 * sun;
moonGlow.intensity = 0.65 * (1 - sun);
  
  // Use only one directional shadow light at a time
  moon.castShadow = sun < 0.5;
  sunLight.castShadow = sun >= 0.5;

  // Keep ground visible at night
  ground.material.color.copy(groundNightColor)
    .lerp(groundDayColor, sun);
  


  const daylight = new THREE.Color(0x101a2b).lerp(
  new THREE.Color(0x87b8e8),
  sun
);

sky.visible = true;
sky.material.uniforms.uSun.value = sun;
scene.background.copy(daylight);
scene.fog.color.copy(daylight);
fireflies.visible = sun < 0.65;
fireflyMaterial.opacity = 0.75 * (1 - sun);
// Dynamic Dark Fantasy Fog
const nightFog = 1 - sun;
scene.fog.density = THREE.MathUtils.lerp(
  0.0035,
  0.0048,
  nightFog
);

  const label = sun > .58 ? 'DAY' : sun > .2 ? 'DUSK' : 'NIGHT';
  if (ui.clock) ui.clock.textContent = label;

  const timeButton = $('#time-toggle');
  if (timeButton) {
    timeButton.textContent =
      dayNightMode === 'auto' ? '◷ AUTO' :
      dayNightMode === 'day' ? '☀ SUN' : '☾ NIGHT';
  }
}

// ---------- Weather ----------
function updateWeather(dt) {
  if (!settings.weather) {
    rain.visible = false;
    return;
  }

  


  rain.visible = true;
  const p = rainGeometry.attributes.position;

  for (let i = 0; i < rainCount; i++) {
    p.array[i * 3 + 1] -= dt * 15;
    p.array[i * 3] -= dt * 1.8;

    if (p.array[i * 3 + 1] < 0) {
      p.array[i * 3 + 1] = 18 + random() * 8;
      p.array[i * 3] = (random() - .5) * 70;
      p.array[i * 3 + 2] = (random() - .5) * 70;
    }
  }

  p.needsUpdate = true;
}

// ---------- Update Fireflies ----------
function updateFireflies(dt) {
  const p = fireflyGeometry.attributes.position;

  for (let i = 0; i < fireflyCount; i++) {
    const f = fireflyOffsets[i];
    const t = clock.elapsedTime + f.phase;

    p.array[i * 3] =
      player.position.x + f.x + Math.sin(t * 0.7) * 0.7;

    p.array[i * 3 + 1] =
      f.y + Math.sin(t * 1.4) * 0.35;

    p.array[i * 3 + 2] =
      player.position.z + f.z + Math.cos(t * 0.6) * 0.7;
  }

  p.needsUpdate = true;
}

// ---------- World Discovery ----------
const worldRegions = [
  {
    id: 'tower',
    name: 'หอคอยแห่งผู้สูญหาย',
    isInside: () => player.position.distanceTo(tower.position) < 10
  },
  {
    id: 'ruins',
    name: 'วิหารโบราณ',
    isInside: () => player.position.distanceTo(ruinGroup.position) < 12
  },
  {
    id: 'river',
    name: 'ริมแม่น้ำโบราณ',
    isInside: () => player.position.z < -65
  },
  {
    id: 'forest',
    name: 'ป่าต้องสาป',
    isInside: () => Math.abs(player.position.x) > 8
      && player.position.z >= -65
  },
  {
    id: 'wilderness',
    name: 'ทุ่งรกร้าง',
    isInside: () => true
  }
];

function updateRegionDiscovery() {
  const region = worldRegions.find(area => area.isInside());
  if (!region || state.discoveredRegions.includes(region.id)) return;

  state.discoveredRegions.push(region.id);
  toast(`ค้นพบพื้นที่ใหม่: ${region.name}`);
}

// ---------- World Update ----------
function updateWorld(dt) {
  updateRegionDiscovery();
  for (const crystal of collectibles) {
    if (!crystal.visible) continue;

    crystal.rotation.y += dt * .8;
    crystal.position.y = .8 + Math.sin(
      performance.now() * .002 + crystal.position.z
    ) * .12;

    if (player.position.distanceTo(crystal.position) < 1.45) {
      crystal.visible = false;
      state.crystals++;
      gainXp(10);
      toast('เก็บผลึกวิญญาณ +1');
      updateHud();
    }
  }

  
  for (const enemy of enemies) {
    if (!enemy.userData.alive) continue;

    const data = enemy.userData;
    const stats = data.stats;
    const dx = player.position.x - enemy.position.x;
    const dz = player.position.z - enemy.position.z;
    const distance = Math.hypot(dx, dz);

    const hpRatio = Math.max(0, data.hp / data.maxHp);
    data.healthFill.scale.x = hpRatio;
    data.healthFill.position.x = -(1 - hpRatio) * 0.46;

    data.healthBar.quaternion.copy(camera.quaternion);
    data.healthBar.visible = distance < stats.aggro + 2;

    data.cooldown = Math.max(0, data.cooldown - dt);

    if (distance < stats.aggro) {
      const direction = new THREE.Vector3(dx, 0, dz).normalize();
      enemy.rotation.y = Math.atan2(direction.x, direction.z);

      if (distance > stats.reach) {
        enemy.position.addScaledVector(direction, dt * stats.speed);
      } else if (data.cooldown <= 0 && invulnerabilityTimer <= 0) {
        const armor = armorStats[state.armor] || armorStats.leather;
        const incomingDamage = stats.damage * (1 - armor.reduction);
        state.hp = Math.max(0, state.hp - incomingDamage);
        data.cooldown = stats.cooldown;
        toast(`${data.name}โจมตีคุณ`);

        if (state.hp <= 0) {
          state.hp = state.maxHp;
          player.position.set(0, 0, 3);
          toast('คุณกลับมาที่จุดพัก');
        }

        updateHud();
      }
    } else {
      const t = performance.now() * 0.0005 + data.homeZ;
      enemy.position.x = data.homeX + Math.sin(t) * 1.2;
      enemy.position.z = data.homeZ + Math.cos(t * 0.7) * 0.8;
    }
  }
}

// ---------- Graphics Settings ----------
function applySettings() {
  sensitivity = Number(settings.sensitivity) * .001;

  const ratio = settings.quality === 'high'
    ? Math.min(devicePixelRatio || 1, 2)
    : settings.quality === 'low'
      ? 1
      : Math.min(devicePixelRatio || 1, 1.5);

  renderer.setPixelRatio(ratio);
  renderer.shadowMap.enabled = settings.quality !== 'low';
  moon.shadow.mapSize.setScalar(settings.quality === 'high' ? 1536 : 1024);

  settings.weather = Boolean(settings.weather);

  $('#quality').value = settings.quality;
  $('#sensitivity').value = String(settings.sensitivity);
  $('#rain-toggle').checked = settings.weather;
}

// ---------- Main Update ----------
function update(dt) {
    autoSaveTimer += dt;

  if (autoSaveTimer >= 30) {
    saveGame(false);
    autoSaveTimer = 0;
  }
  
  let mx = input.x;
  let my = input.y;

  if (keys.KeyA || keys.ArrowLeft) mx -= 1;
  if (keys.KeyD || keys.ArrowRight) mx += 1;
  if (keys.KeyW || keys.ArrowUp) my -= 1;
  if (keys.KeyS || keys.ArrowDown) my += 1;

  const len = Math.hypot(mx, my);
  const moving = len > .08;

  // Dodge is a short burst and grants brief damage protection.
  dodgeCooldown = Math.max(0, dodgeCooldown - dt);
  dodgeTimer = Math.max(0, dodgeTimer - dt);
  invulnerabilityTimer = Math.max(0, invulnerabilityTimer - dt);

  if (input.dodgePressed) {
    input.dodgePressed = false;

    if (dodgeCooldown <= 0 && state.stamina >= 20) {
      let dodgeX = mx;
      let dodgeY = my;
      const dodgeLength = Math.hypot(dodgeX, dodgeY);

      if (dodgeLength > .08) {
        dodgeX /= dodgeLength;
        dodgeY /= dodgeLength;
        const c = Math.cos(yaw);
        const s = Math.sin(yaw);
        dodgeDirection.set(dodgeX * c + dodgeY * s, 0, -dodgeX * s + dodgeY * c);
      } else {
        dodgeDirection.set(Math.sin(player.rotation.y), 0, Math.cos(player.rotation.y));
      }

      dodgeDirection.normalize();
      dodgeTimer = .24;
      invulnerabilityTimer = .48;
      dodgeCooldown = .85;
      state.stamina = Math.max(0, state.stamina - 20);
    } else if (state.stamina < 20) {
      toast('พละกำลังไม่เพียงพอสำหรับหลบหลีก');
    }
  }

  if (dodgeTimer > 0) {
    const moveX = dodgeDirection.x * 8.5 * dt;
    const moveZ = dodgeDirection.z * 8.5 * dt;
    const canDodgeTo = (x, z) => obstacles.every(obstacle => {
      const dx = x - obstacle.x;
      const dz = z - obstacle.z;
      const minDistance = .55 + obstacle.radius;
      return dx * dx + dz * dz >= minDistance * minDistance;
    });

    const nextX = player.position.x + moveX;
    const nextZ = player.position.z + moveZ;
    if (canDodgeTo(nextX, player.position.z)) player.position.x = nextX;
    if (canDodgeTo(player.position.x, nextZ)) player.position.z = nextZ;
    player.rotation.y = Math.atan2(dodgeDirection.x, dodgeDirection.z);
    body.rotation.z = Math.sin(performance.now() * .04) * .11;
  } else if (moving) {
    mx /= Math.max(len, 1);
    my /= Math.max(len, 1);

    const c = Math.cos(yaw);
    const s = Math.sin(yaw);
    const wx = mx * c + my * s;
    const wz = -mx * s + my * c;

    const wantsRun = input.run || keys.ShiftLeft || keys.ShiftRight;
    const canRun = wantsRun && state.stamina > 1;
    const speed = canRun ? 7.5 : 4.0;
    const moveX = wx * speed * dt;
    const moveZ = wz * speed * dt;
    const playerRadius = 0.55;

    const canMoveTo = (x, z) => obstacles.every(obstacle => {
      const dx = x - obstacle.x;
      const dz = z - obstacle.z;
      const minDistance = playerRadius + obstacle.radius;
      return dx * dx + dz * dz >= minDistance * minDistance;
    });

    const nextX = player.position.x + moveX;
    const nextZ = player.position.z + moveZ;

    if (canMoveTo(nextX, player.position.z)) player.position.x = nextX;
    if (canMoveTo(player.position.x, nextZ)) player.position.z = nextZ;

    player.rotation.y = Math.atan2(wx, wz);
    body.rotation.z = Math.sin(performance.now() * .012) * .045;

    if (canRun) state.stamina = Math.max(0, state.stamina - 24 * dt);
  } else {
    body.rotation.z = 0;
  }

  
// Pixel Art direction and walking animation
playerAnimTime += dt;

const relativeFacing = Math.atan2(
  Math.sin(player.rotation.y - yaw),
  Math.cos(player.rotation.y - yaw)
);

let directionRow = 0;

if (relativeFacing > Math.PI / 4 &&
    relativeFacing < Math.PI * 3 / 4) {
  directionRow = 1;
} else if (
  relativeFacing > -Math.PI * 3 / 4 &&
  relativeFacing < -Math.PI / 4
) {
  directionRow = 3;
} else if (Math.abs(relativeFacing) >= Math.PI * 3 / 4) {
  directionRow = 2;
}


const isDodging = dodgeTimer > 0;
const isRunning = moving &&
  (input.run || keys.ShiftLeft || keys.ShiftRight) &&
  state.stamina > 1;

const isAnimating = moving || isDodging;

const animationSpeed = isDodging
  ? 14
  : isRunning
    ? 11
    : 7;

const frame = isAnimating
  ? Math.floor(playerAnimTime * animationSpeed) % 4
  : 0;

playerTexture.offset.set(
  frame * 0.25,
  (3 - directionRow) * 0.25
);

playerSprite.position.y = 1.03 +
  (isAnimating ? 0 : Math.sin(playerAnimTime * 2) * 0.015);

  if (!moving || !(input.run || keys.ShiftLeft || keys.ShiftRight)) {
    state.stamina = Math.min(100, state.stamina + 15 * dt);
  }

  // Jump is triggered once per press, not continuously while held.
  if (input.jumpPressed && grounded && dodgeTimer <= 0) {
    verticalVelocity = 7;
    grounded = false;
  }
  input.jumpPressed = false;

  
  
  // ---------- Terrain Ground Physics ----------
  const wasGrounded = grounded;

  verticalVelocity -= 18 * dt;
  player.position.y += verticalVelocity * dt;

  const terrainHeight = getTerrainHeight(
    player.position.x,
    player.position.z,
    player.position.y
  );

  if (terrainHeight !== null) {
    const groundDelta =
      terrainHeight - player.position.y;

    const followingGround =
      wasGrounded &&
      verticalVelocity <= 0 &&
      groundDelta >= -0.35 &&
      groundDelta <= 0.35;

    const landing =
      verticalVelocity <= 0 &&
      player.position.y <= terrainHeight + 0.2;

    if (followingGround || landing) {
      player.position.y = terrainHeight;
      verticalVelocity = 0;
      grounded = true;
    } else {
      grounded = false;
    }
  } else if (player.position.y < 0) {
    player.position.y = 0;
    verticalVelocity = 0;
    grounded = true;
  }

  player.position.x = THREE.MathUtils.clamp(player.position.x, -35, 35);
  player.position.z = THREE.MathUtils.clamp(player.position.z, -95, 12);

  if (input.attackPressed || keys.KeyF) {
    attack();
    input.attackPressed = false;
  }

  if (input.interactPressed || keys.KeyE) {
    interact();
    input.interactPressed = false;
  }

  attackCooldown = Math.max(0, attackCooldown - dt);

  cameraTarget.set(
    player.position.x,
    player.position.y + 1.25,
    player.position.z
  );

  const horizontal = Math.cos(pitch) * distance;

  desiredCamera.set(
    cameraTarget.x + Math.sin(yaw) * horizontal,
    cameraTarget.y + Math.sin(pitch) * distance,
    cameraTarget.z + Math.cos(yaw) * horizontal
  );

  camera.position.lerp(desiredCamera, 1 - Math.pow(.001, dt));
  camera.lookAt(cameraTarget);

  sky.position.copy(camera.position);
  moonGlow.position.set(
    player.position.x - 16,
    12,
    player.position.z - 18
  );

  ui.hint.textContent = player.position.distanceTo(shrine.position) < 5
    ? 'กด E / ใช้ เพื่อโต้ตอบ'
    : '';

  updateDayNight(dt);
updateWeather(dt);
  updateFireflies(dt);
  updateWorld(dt);
  systems.update(dt, yaw);
  updateHud();
}

// ---------- Settings UI ----------

$('#time-toggle').addEventListener('click', () => {
  if (dayNightMode === 'auto') {
    dayNightMode = 'day';
    toast('เปลี่ยนเป็นกลางวัน');
  } else if (dayNightMode === 'day') {
    dayNightMode = 'night';
    toast('เปลี่ยนเป็นกลางคืน');
  } else {
    dayNightMode = 'auto';
    toast('เปิดระบบเวลาอัตโนมัติ');
  }
});

const inventoryOpenButton = $('#inventory-open');
const inventoryCloseButton = $('#inventory-close');
const questOpenButton = $('#quest-open');
const questPanel = $('#quest-panel');
const mapOpenButton = $('#map-open');
const mapPanel = $('#map-panel');

function closePanels(except = null) {
  if (except !== 'inventory') {
    ui.inventory.classList.add('hidden');
    inventoryOpenButton.setAttribute('aria-expanded', 'false');
  }
  if (except !== 'quest') {
    questPanel.classList.add('hidden');
    questOpenButton.setAttribute('aria-expanded', 'false');
  }
  if (except !== 'map') {
    mapPanel.classList.add('hidden');
    mapOpenButton.setAttribute('aria-expanded', 'false');
  }
  if (except !== 'settings') ui.settings.classList.add('hidden');
}

inventoryOpenButton.addEventListener('click', () => {
  const willOpen = ui.inventory.classList.contains('hidden');
  closePanels(willOpen ? 'inventory' : null);
  ui.inventory.classList.toggle('hidden', !willOpen);
  inventoryOpenButton.setAttribute('aria-expanded', String(willOpen));
});

inventoryCloseButton.addEventListener('click', () => {
  closePanels();
});

questOpenButton.addEventListener('click', () => {
  const willOpen = questPanel.classList.contains('hidden');
  closePanels(willOpen ? 'quest' : null);
  questPanel.classList.toggle('hidden', !willOpen);
  questOpenButton.setAttribute('aria-expanded', String(willOpen));
  if (willOpen) systems.refreshQuestUI();
});

$('#quest-close').addEventListener('click', () => {
  closePanels();
});

function toggleMapPanel() {
  const willOpen = mapPanel.classList.contains('hidden');
  closePanels(willOpen ? 'map' : null);
  mapPanel.classList.toggle('hidden', !willOpen);
  mapOpenButton.setAttribute('aria-expanded', String(willOpen));
}

mapOpenButton.addEventListener('click', toggleMapPanel);
$('#map-close').addEventListener('click', () => {
  closePanels();
});

$('#settings-open').addEventListener('click', () => {
  closePanels('settings');
  ui.settings.classList.remove('hidden');
});

$('#settings-close').addEventListener('click', () => {
  closePanels();
});

$('#quality').addEventListener('change', (e) => {
  settings.quality = e.target.value;
  applySettings();
});

$('#sensitivity').addEventListener('input', (e) => {
  settings.sensitivity = Number(e.target.value);
  applySettings();
});

$('#rain-toggle').addEventListener('change', (e) => {
  settings.weather = e.target.checked;
  applySettings();
});

$('#save-button').addEventListener('click', saveGame);
$('#load-button').addEventListener('click', loadGame);

for (const id of Object.keys(weaponStats)) {
  const button = $(`#weapon-${id}`);
  if (button) button.addEventListener('click', () => selectWeapon(id));
}
for (const id of Object.keys(armorStats)) {
  const button = $(`#armor-${id}`);
  if (button) button.addEventListener('click', () => selectArmor(id));
}
const skillTree = $('#skill-tree');
if (skillTree) {
  skillTree.addEventListener('click', (event) => {
    const button = event.target.closest('[data-skill]');
    if (button) upgradeSkill(button.dataset.skill);
  });
}

// ---------- Screen Resize / Rotation ----------
function resizeGame() {
  const width = Math.max(1, window.innerWidth);
  const height = Math.max(1, window.innerHeight);

  camera.aspect = width / height;
  camera.updateProjectionMatrix();

  renderer.setSize(width, height);

  const ratio = settings.quality === 'high'
    ? Math.min(devicePixelRatio || 1, 2)
    : settings.quality === 'low'
      ? 1
      : Math.min(devicePixelRatio || 1, 1.5);

  renderer.setPixelRatio(ratio);
}

addEventListener('resize', resizeGame);
addEventListener('orientationchange', () => {
  setTimeout(resizeGame, 150);
});

if (window.visualViewport) {
  window.visualViewport.addEventListener('resize', resizeGame);
}

// ---------- Start ----------
applySettings();
updateHud();
refreshEquipmentUI();
refreshSkillUI();
resizeGame();

function animate() {
  requestAnimationFrame(animate);

  const dt = Math.min(clock.getDelta(), .05);
  update(dt);
  renderer.render(scene, camera);
}

animate();
