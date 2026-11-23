
import * as THREE from 'three';
import { createSystems, RARITY, SIDE_QUESTS } from './systems.js';
import { createAudio } from './audio.js';
import {
  createCharacterAtlas,
  createCharacterSprite,
  updateCharacterAnimation,
  facingRow,
  setSpriteFrame
} from './pixelSprites.js';
import { createWorldStreamer } from './worldStreamer.js';
import { createCinematic } from './cinematic.js';
import { createVegetationManager } from './vegetation/vegetation-manager.js';
import { REGIONS, LANDMARKS, WORLD_BOUNDS, regionAt } from './worldData.js';
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
  settings: $('#settings-panel'), inventory: $('#inventory'),
  shop: $('#shop-panel'), gold: $('#gold-count'),
  sideQuest: $('#side-quest-text')
};

const isTouch = matchMedia('(pointer: coarse)').matches;
const settings = {
  quality: 'medium',
  sensitivity: 5,
  weather: true,
  sound: true,
  music: true,
  postfx: true,
  dayNightMode: 'auto',
  fpsLimit: 'auto',
  mobileLayout: 'right'
};
const audio = createAudio();
let currentSlot = 1;
let dayNightMode = 'auto';

const weaponStats = {
  sword: { name: 'ดาบ', damage: 1, range: 3.0, cooldown: 0.55, rarity: 'common', kind: 'melee' },
  greatsword: { name: 'ดาบใหญ่', damage: 2, range: 3.4, cooldown: 0.9, rarity: 'common', kind: 'melee' },
  axe: { name: 'ขวาน', damage: 1.7, range: 2.9, cooldown: 0.72, rarity: 'uncommon', kind: 'melee' },
  staff: { name: 'คทาเวท', damage: 1.5, range: 4.8, cooldown: 0.8, rarity: 'uncommon', kind: 'melee' },
  bow: { name: 'ธนูพรานป่า', damage: 1.4, range: 18, cooldown: 0.62, rarity: 'uncommon', kind: 'ranged', projectile: 'arrow', stamina: 4 },
  froststaff: { name: 'คทาเหมันต์', damage: 2.1, range: 15, cooldown: 1.0, rarity: 'rare', kind: 'ranged', projectile: 'frost', stamina: 7, slow: 2.5 },
  voidblade: { name: 'ดาบเงาว่าง', damage: 3.5, range: 3.8, cooldown: .7, rarity: 'epic', kind: 'melee' }
};

const armorStats = {
  leather: { name: 'เกราะหนัง', reduction: 0, rarity: 'common' },
  iron: { name: 'เกราะเหล็ก', reduction: .25, rarity: 'common' },
  ranger: { name: 'เกราะพราน', reduction: .32, rarity: 'uncommon' },
  shadow: { name: 'เกราะเงา', reduction: .5, rarity: 'rare' },
  runerobe: { name: 'ผ้าคลุมรูน', reduction: .45, rarity: 'rare' },
  dragonplate: { name: 'เกราะมังกรร้าง', reduction: .65, rarity: 'epic' }
};

const classDefs = {
  warrior: {
    name: 'นักรบ',
    desc: 'โจมตีระยะประชิด +20% · ลดความเสียหาย 10%',
    melee: 1.2,
    damageReduction: .1
  },
  ranger: {
    name: 'พราน',
    desc: 'โจมตีระยะไกล +25% · ฟื้นพละกำลังเร็วขึ้น 60%',
    ranged: 1.25,
    staminaRegen: 1.6
  },
  mage: {
    name: 'จอมเวท',
    desc: 'พลังเวท +25% · ฟื้นมนตราเร็วขึ้น 50%',
    spell: 1.25,
    manaRegen: 1.5
  }
};

const state = {
  hp: 100, stamina: 100,   crystals: 0, potions: 2, gold: 60,
  level: 1, xp: 0, questStage: 0,

  weapon: 'sword', armor: 'leather', classId: null,
  attackBonus: 0, skillPoints: 0,
  maxHp: 100, maxMana: 100,
  skills: { might: 0, vitality: 0, arcana: 0 },
  inventory: { sword: 1, leather: 1 },
  mana: 100, spells: [], activeSpell: null,
  quests: {},
  dayTime: 0.72, weatherTime: 0,
  weatherOn: true, dead: false,
  discoveredRegions: [],
  discoveredSecrets: [],
  dungeonCleared: false,
  respawnPoint: null
};

let toastTimer = 0;

function toast(message) {
  ui.toast.textContent = message;
  ui.toast.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => ui.toast.classList.remove('show'), 2200);
}

function getSaveKey(slot = currentSlot) {
  return `forgotten-realm-save-v1-slot-${slot}`;
}

function updateHud() {
  const hpPercent = state.maxHp > 0
    ? THREE.MathUtils.clamp(state.hp / state.maxHp * 100, 0, 100)
    : 0;
  ui.hp.style.width = `${hpPercent}%`;
  ui.hpText.textContent = `${Math.ceil(state.hp)} / ${state.maxHp}`;
  ui.stamina.style.width = `${Math.ceil(state.stamina)}%`;
  ui.staminaText.textContent = `${Math.ceil(state.stamina)} / 100`;
  ui.level.textContent = String(state.level);
  ui.crystals.textContent = String(state.crystals);
  ui.potions.textContent = String(state.potions);
  if (ui.gold) ui.gold.textContent = String(state.gold);
  if (ui.sideQuest) ui.sideQuest.textContent = activeQuestTrackerText();

  ui.quest.textContent = state.questStage === 0
    ? 'เดินทางไปยังหอคอยร้าง'
    : state.questStage === 1
      ? 'กำจัดผู้พิทักษ์ที่เฝ้าซากโบราณ'
      : 'สำเร็จ! สำรวจดินแดนต่อไป';
}

function activeQuestTrackerText() {
  for (const [id, progress] of Object.entries(state.quests || {})) {
    const quest = SIDE_QUESTS[id];
    if (!quest || !progress || progress.status !== 'active') continue;
    return `${quest.title} · ${Math.min(progress.count || 0, quest.target)}/${quest.target}`;
  }
  return '';
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

function refreshClassUI() {
  for (const id of Object.keys(classDefs)) {
    const button = document.querySelector(`[data-class="${id}"]`);
    if (!button) continue;
    button.classList.toggle('selected', state.classId === id);
    button.title = classDefs[id].desc;
  }
}

function selectClass(id) {
  const def = classDefs[id];
  if (!def) return;
  state.classId = state.classId === id ? null : id;
  refreshClassUI();
  refreshEquipmentUI();
  updateHud();
  toast(state.classId
    ? `สายอาชีพ: ${def.name} — ${def.desc}`
    : 'ยกเลิกสายอาชีพแล้ว');
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
scene.fog = new THREE.FogExp2(0x1b2634, 0.0032);

const camera = new THREE.PerspectiveCamera(
  62, innerWidth / innerHeight, 0.1, 800
);

const renderer = new THREE.WebGLRenderer({
  antialias: true,
  powerPreference: 'high-performance'
});

renderer.outputColorSpace = THREE.SRGBColorSpace;
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1.32;
renderer.setPixelRatio(Math.min(devicePixelRatio || 1, isTouch ? 1.35 : 1.75));
renderer.setSize(innerWidth, innerHeight);
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
renderer.domElement.style.touchAction = 'none';
renderer.domElement.setAttribute('aria-label', 'Game view');
mount.appendChild(renderer.domElement);

const cinematic = createCinematic({ renderer, scene, camera, touch: isTouch });

// ---------- Sky ----------
const SKY_SUN_DIR = new THREE.Vector3(-24, 40, 30).normalize();
const SKY_MOON_DIR = new THREE.Vector3(-18, 28, 12).normalize();

const sky = new THREE.Mesh(
  new THREE.SphereGeometry(520, 40, 28),
  new THREE.ShaderMaterial({
    uniforms: {
      uSun: { value: 0 },
      uSunDir: { value: SKY_SUN_DIR },
      uMoonDir: { value: SKY_MOON_DIR },
      uPost: { value: 1 },
      uExposure: { value: 1.32 }
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
  uniform float uPost;
  uniform float uExposure;
  uniform vec3 uSunDir;
  uniform vec3 uMoonDir;
  varying vec3 vDir;

  float hash3(vec3 p) {
    p = fract(p * 0.3183099 + vec3(0.1, 0.17, 0.13));
    p *= 17.0;
    return fract(p.x * p.y * p.z * (p.x + p.y + p.z));
  }

  void main() {
    vec3 d = normalize(vDir);
    float h = d.y;

    vec3 nightHorizon = vec3(.075,.095,.17);
    vec3 nightZenith  = vec3(.010,.015,.040);
    vec3 dayHorizon   = vec3(.38,.47,.60);
    vec3 dayZenith    = vec3(.06,.145,.34);

    float dusk = max(0.0, 1.0 - abs(uSun - 0.18) * 3.2);

    vec3 horizon = mix(nightHorizon, dayHorizon, uSun);
    vec3 zenith  = mix(nightZenith,  dayZenith,  uSun);
    horizon = mix(horizon, vec3(.78,.40,.22), dusk * .55);

    vec3 col = mix(horizon, zenith, smoothstep(-.05, .78, h));

    // Warm sun halo and disc, anchored to the real light direction
    float sunDot = max(dot(d, normalize(uSunDir)), 0.0);
    float halo = pow(sunDot, 7.0) * .26 + pow(sunDot, 60.0) * .55;
    col += vec3(1.0, .74, .45) * halo * uSun;
    float sunDisc = smoothstep(.9994, .9998, sunDot);
    col = mix(col, vec3(1.0, .95, .82), sunDisc * uSun);

    // Moon halo and disc
    float moonDot = max(dot(d, normalize(uMoonDir)), 0.0);
    col += vec3(.26, .33, .52) * pow(moonDot, 26.0) * (1.0 - uSun);
    float moonDisc = smoothstep(.9992, .9998, moonDot);
    col = mix(col, vec3(.90, .94, 1.0), moonDisc * (1.0 - uSun));

    // Procedural stars twinkling at night
    if (h > 0.02) {
      vec3 cell = floor(d * 240.0);
      float star = step(0.9972, hash3(cell));
      float twinkle = 0.55 + 0.45 * sin(uSun * 40.0 + hash3(cell + 7.0) * 40.0);
      float fade = smoothstep(0.0, 0.28, h);
      col += vec3(.85,.92,1.0) * star * twinkle * (1.0 - uSun) * fade * 1.6;
    }

    // Horizon haze so the sky melts into the fog instead of banding
    col = mix(col, horizon, pow(1.0 - clamp(h, 0.0, 1.0), 6.0) * 0.35);

    // Authored in display space. With the HDR composer the value must be
    // linearised for OutputPass; on the direct path the sky is the only
    // material skipping that pass, so tone map and encode it here instead.
    vec3 linear = pow(max(col, vec3(0.0)), vec3(2.2));
    if (uPost > 0.5) {
      gl_FragColor = vec4(linear, 1.0);
    } else {
      vec3 c = linear * uExposure;
      c = clamp((c * (2.51 * c + 0.03)) / (c * (2.43 * c + 0.59) + 0.14), 0.0, 1.0);
      gl_FragColor = vec4(pow(c, vec3(1.0 / 2.2)), 1.0);
    }
  }
`
  })
);
sky.renderOrder = -1;
scene.add(sky);

// ---------- Lighting ----------
const hemi = new THREE.HemisphereLight(0xa9c0dd, 0x2b251d, 1.2);
scene.add(hemi);

const ambient = new THREE.AmbientLight(0x9fb2cc, 0.55);
scene.add(ambient);

const moon = new THREE.DirectionalLight(0xbfd4ff, 1.8);
moon.position.set(-18, 28, 12);
moon.castShadow = true;
moon.shadow.mapSize.set(isTouch ? 1024 : 2048, isTouch ? 1024 : 2048);
Object.assign(moon.shadow.camera, {
  left: -34, right: 34, top: 34, bottom: -34, near: .5, far: 140
});
moon.shadow.bias = -0.0004;
moon.shadow.normalBias = 0.045;
scene.add(moon);
scene.add(moon.target);

const sunLight = new THREE.DirectionalLight(0xffd9a8, 2.2);
sunLight.position.set(-24, 40, 30);
sunLight.castShadow = true;
sunLight.shadow.mapSize.set(isTouch ? 1024 : 2048, isTouch ? 1024 : 2048);

Object.assign(sunLight.shadow.camera, {
  left: -34,
  right: 34,
  top: 34,
  bottom: -34,
  near: 0.5,
  far: 140
});

sunLight.shadow.bias = -0.0004;
sunLight.shadow.normalBias = 0.045;
scene.add(sunLight);
scene.add(sunLight.target);

const moonGlow = new THREE.PointLight(0x9bb5ed, 1.0, 65);
moonGlow.position.set(-16, 12, -18);
scene.add(moonGlow);

// ---------- Ground and world streaming ----------
const fallbackWorld = new THREE.Group();
fallbackWorld.name = 'FallbackWorld';
scene.add(fallbackWorld);

const ground = new THREE.Mesh(
  new THREE.PlaneGeometry(180, 180),
  new THREE.MeshStandardMaterial({ color: 0x343a32, roughness: 1 })
);
ground.rotation.x = -Math.PI / 2;
ground.receiveShadow = true;
fallbackWorld.add(ground);

const worldStreamer = createWorldStreamer({
  scene,
  baseUrl: `${import.meta.env.BASE_URL}assets/world/`,
  detail: isTouch ? 2 : 3
});
const vegetation = createVegetationManager({
  scene,
  getHeight: (x, z) => worldStreamer.getHeight(x, z),
  getRegion: (x, z) => worldStreamer.getRegion(x, z),
  mobile: isTouch
});
let fallbackHidden = false;

worldStreamer.init().then((ok) => {
  if (!ok) {
    toast('ไม่พบข้อมูลโลกกว้าง ใช้แผนที่ต้นแบบแทน');
  }
});

const groundDayColor = new THREE.Color(0x4c5543);
const groundNightColor = new THREE.Color(0x5d6956);


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
  fallbackWorld.add(slab);
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
fallbackWorld.add(tree);

obstacles.push({
  x,
  z,
  radius: 0.85 * scale,
  fallback: true
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
  side: THREE.DoubleSide,
  emissive: 0x16240f,
  emissiveIntensity: 0.35
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
fallbackWorld.add(grass);

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
  fallbackWorld.add(mountain);
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

fallbackWorld.add(river);

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
fallbackWorld.add(ruinGroup);

for (let i = 0; i < 4; i++) {
  obstacles.push({
    x: 13 + (i % 2) * 7 - 3.5,
    z: -48 + Math.floor(i / 2) * 7 - 3.5,
    radius: 0.9,
    fallback: true
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
fallbackWorld.add(tower);
obstacles.push({
  x: 0,
  z: -48,
  radius: 2.7,
  fallback: true
});

const shrine = new THREE.Mesh(
  new THREE.TorusGeometry(1.0, .12, 8, 20),
  new THREE.MeshStandardMaterial({
    color: 0x6c6191,
    emissive: 0x332a58,
    emissiveIntensity: 0.9,
    roughness: .34
  })
);
shrine.position.set(31, 2, 17);
shrine.rotation.y = -0.5;
scene.add(shrine);

const dungeonArena = new THREE.Group();
const dungeonFloor = new THREE.Mesh(
  new THREE.CylinderGeometry(9, 9.6, .4, 12),
  new THREE.MeshStandardMaterial({ color: 0x252b33, roughness: 1 })
);
dungeonFloor.position.y = .2;
dungeonFloor.receiveShadow = true;
dungeonArena.add(dungeonFloor);

for (let i = 0; i < 8; i++) {
  const angle = i / 8 * Math.PI * 2;
  const pillar = new THREE.Mesh(
    new THREE.CylinderGeometry(.65, .9, 4.5, 6),
    mats.ruin
  );
  pillar.position.set(Math.cos(angle) * 8.2, 2.25, Math.sin(angle) * 8.2);
  pillar.castShadow = true;
  pillar.receiveShadow = true;
  dungeonArena.add(pillar);
  obstacles.push({
    x: -28 + pillar.position.x,
    z: -87 + pillar.position.z,
    radius: .9
  });
}
dungeonArena.position.set(-28, 0, -87);
scene.add(dungeonArena);

const dungeonPortal = new THREE.Group();
const portalRing = new THREE.Mesh(
  new THREE.TorusGeometry(1.8, .22, 10, 28),
  new THREE.MeshStandardMaterial({
    color: 0x9c6ad8,
    emissive: 0x5e2aa0,
    emissiveIntensity: 1.8,
    roughness: .3
  })
);
portalRing.position.y = 2.1;
dungeonPortal.add(portalRing);

const portalCore = new THREE.Mesh(
  new THREE.CircleGeometry(1.62, 28),
  new THREE.MeshBasicMaterial({
    color: 0x1b0d2e,
    transparent: true,
    opacity: .82,
    side: THREE.DoubleSide
  })
);
portalCore.position.y = 2.1;
dungeonPortal.add(portalCore);

for (let i = 0; i < 4; i++) {
  const stone = new THREE.Mesh(
    new THREE.DodecahedronGeometry(.8 + i * .12, 0),
    mats.ruin
  );
  const angle = i / 4 * Math.PI * 2;
  stone.position.set(Math.cos(angle) * 2.6, .45, Math.sin(angle) * 2.6);
  stone.castShadow = true;
  dungeonPortal.add(stone);
}
dungeonPortal.position.set(-24, 0, -77);
scene.add(dungeonPortal);

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

player.position.set(18, 0, 12);
scene.add(player);

// ---------- Terrain Height Query ----------
function getTerrainHeight(x, z, referenceY) {
  return worldStreamer.getHeight(x, z);
}

// ---------- Collectibles ----------
const collectibles = [];
const crystalMat = new THREE.MeshStandardMaterial({
  color: 0x7b68c8,
  emissive: 0x3b2a80,
  emissiveIntensity: 1.5,
  roughness: .25
});
const crystalHaloTexture = (() => {
  const c = document.createElement('canvas');
  c.width = c.height = 64;
  const g = c.getContext('2d');
  const grad = g.createRadialGradient(32, 32, 0, 32, 32, 32);
  grad.addColorStop(0, 'rgba(190,225,255,0.85)');
  grad.addColorStop(0.45, 'rgba(140,180,255,0.28)');
  grad.addColorStop(1, 'rgba(140,180,255,0)');
  g.fillStyle = grad;
  g.fillRect(0, 0, 64, 64);
  return new THREE.CanvasTexture(c);
})();
const crystalHaloMat = new THREE.SpriteMaterial({
  map: crystalHaloTexture, transparent: true, opacity: .55,
  blending: THREE.AdditiveBlending, depthWrite: false, fog: false
});

for (let i = 0; i < 8; i++) {
  const crystal = new THREE.Mesh(
    new THREE.OctahedronGeometry(.38),
    crystalMat
  );
  const halo = new THREE.Sprite(crystalHaloMat);
  halo.scale.set(1.5, 1.5, 1);
  crystal.add(halo);
  const crystalX = (i % 2 ? 1 : -1) * (3.5 + random() * 2);
  const crystalZ = -8 - i * 6;
  const crystalY = getTerrainHeight(crystalX, crystalZ, 0) ?? 0;
  crystal.position.set(crystalX, crystalY + .8, crystalZ);
  crystal.userData.baseY = crystalY;
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
  },
  dungeonBoss: {
    name: 'ผู้คุมถ้ำต้องสาป', hp: 28, damage: 15, speed: 1.45,
    aggro: 22, reach: 3, cooldown: 1.35, xp: 420,
    scale: 2.3, color: 0x263347, emissive: 0x133a4f, eye: 0x8ce8ff
  },
  wolf: {
    name: 'หมาป่ามืด', hp: 3, damage: 5, speed: 2.7,
    aggro: 9, reach: 1.6, cooldown: 1.4, xp: 40,
    scale: .9, color: 0x30343d, emissive: 0x10131c, eye: 0xffb35c
  },
  deer: {
    name: 'กวางวิญญาณ', hp: 2, damage: 0, speed: 3.2,
    aggro: 7, reach: 1, cooldown: 2, xp: 15,
    scale: .7, color: 0x58715c, emissive: 0x1b2c1f, eye: 0xbaff91
  }
};

const enemySpriteStyles = {
  guardian: {
    kind: 'humanoid',
    palette: {
      body: '#332a36', light: '#514052', dark: '#1d1a24',
      accent: '#7d2e40', skin: '#8c6f70', hood: '#241e2b',
      eye: '#ff443e', boot: '#15131b', metal: '#a9906a'
    }
  },
  wraith: {
    kind: 'wraith',
    palette: {
      body: '#2c3b4a', light: '#406075', dark: '#18242f',
      accent: '#6fa8c4', hood: '#23323e', eye: '#8ce8ff'
    }
  },
  brute: {
    kind: 'brute',
    palette: {
      body: '#4a2f2a', light: '#6b4535', dark: '#2a1b19',
      accent: '#a85d34', eye: '#ffa24a'
    }
  },
  boss: {
    kind: 'humanoid', boss: true,
    palette: {
      body: '#3a2246', light: '#6a3a78', dark: '#21132c',
      accent: '#c05ba8', skin: '#8e6c92', hood: '#2c1938',
      eye: '#ff4fd8', boot: '#180f21', metal: '#e2b45c'
    }
  },
  dungeonBoss: {
    kind: 'humanoid', boss: true,
    palette: {
      body: '#263347', light: '#3c5873', dark: '#151e2c',
      accent: '#5aa6c8', skin: '#7d94ad', hood: '#1c2838',
      eye: '#8ce8ff', boot: '#0f1621', metal: '#9fd8e8'
    }
  },
  wolf: {
    kind: 'wolf',
    palette: {
      body: '#30343d', light: '#4a505c', dark: '#1c1f27',
      accent: '#6b6f78', eye: '#ffb35c'
    }
  },
  deer: {
    kind: 'deer',
    palette: {
      body: '#58715c', light: '#7c9a7f', dark: '#314434',
      accent: '#b6d9a2', eye: '#baff91'
    }
  }
};

const enemyTextures = new Map();

function getEnemyTexture(type) {
  if (!enemyTextures.has(type)) {
    enemyTextures.set(
      type,
      createCharacterAtlas(enemySpriteStyles[type] || enemySpriteStyles.guardian)
    );
  }
  return enemyTextures.get(type);
}

function spawnEnemy(type, x, z) {
  const stats = enemyTypes[type];
  const enemy = new THREE.Group();

  const sprite = createCharacterSprite(getEnemyTexture(type));
  enemy.add(sprite);

  const enemyShadow = new THREE.Mesh(
    new THREE.CircleGeometry(.48, 16),
    new THREE.MeshBasicMaterial({
      color: 0x000000,
      transparent: true,
      opacity: 0.28,
      depthWrite: false
    })
  );
  enemyShadow.rotation.x = -Math.PI / 2;
  enemyShadow.position.y = 0.025;
  enemy.add(enemyShadow);

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
  healthBar.position.y = 2.25;
  enemy.add(healthBar);

  const y = getTerrainHeight(x, z, 0) ?? 0;
  enemy.position.set(x, y, z);
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
    baseY: y,
    baseScale: stats.scale,
    cooldown: 0,
    phase: 1,
    phaseMultiplier: 1,
    crown: null,
    healthBar,
    healthFill,
    sprite,
    animTime: 0,
    hurtTimer: 0,
    attackTimer: 0,
    deathTimer: 0,
    deathDuration: .55,
    directionRow: 0,
    moving: false,
    baseTint: 0xffffff,
    kind: ['wolf', 'deer'].includes(type) ? 'animal' : 'enemy',
    dungeon: false
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
  ['boss', 0, -86],
  ['wolf', -14, -22],
  ['wolf', 14, -34],
  ['deer', -19, -9],
  ['deer', 18, -17],
  ['guardian', -42, -48],
  ['guardian', -52, -38],
  ['wraith', -58, -56],
  ['brute', -36, -62],
  ['wolf', -150, -148],
  ['wolf', -178, -168],
  ['wraith', -162, -132],
  ['brute', -188, -180],
  ['deer', -138, -172],
  ['guardian', 150, 48],
  ['guardian', 172, 62],
  ['wraith', 142, 72],
  ['brute', 178, 32],
  ['deer', 128, 40],
  ['brute', 150, -170],
  ['wraith', 174, -188],
  ['guardian', 138, -196],
  ['wolf', 192, -154],
  ['wraith', -170, 152],
  ['brute', -192, 178],
  ['wolf', -146, 188],
  ['deer', -188, 132],
  ['guardian', 20, 10],
  ['deer', -8, 24],
  ['boss', 160, -177],
  ['dungeonBoss', -170, 160]
];

for (const [type, x, z] of enemySpawns) spawnEnemy(type, x, z);

const dungeonSpawns = [
  ['wraith', -32, -83],
  ['wraith', -24, -83],
  ['brute', -28, -92],
  ['dungeonBoss', -28, -88]
];

const dungeonEnemies = dungeonSpawns.map(([type, x, z]) => {
  const enemy = spawnEnemy(type, x, z);
  enemy.userData.dungeon = true;
  enemy.userData.alive = false;
  scene.remove(enemy);
  return enemy;
});

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
  getTerrainHeight,
  audio,
  worldBounds: WORLD_BOUNDS,
  staticLandmarks: [
    ...LANDMARKS.map((landmark) => ({
      ...landmark,
      position: new THREE.Vector3(landmark.position.x, 0, landmark.position.z)
    })),
    { position: shrine.position, color: '#d6a8f0', size: 3.5, name: 'ศาลเจ้าแห่งคำสาป', region: 'wasteland' },
    { position: dungeonPortal.position, color: '#b57ce8', size: 5, name: 'ประตูถ้ำต้องสาป', region: 'deadwood' },
    { position: new THREE.Vector3(-28, 0, -87), color: '#7cd9e8', size: 4, name: 'ถ้ำต้องสาป', region: 'deadwood' }
  ],
  regions: REGIONS
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

// ---------- Daytime pollen motes ----------
const moteCount = isTouch ? 26 : 64;
const motePositions = new Float32Array(moteCount * 3);
const moteOffsets = [];

for (let i = 0; i < moteCount; i++) {
  moteOffsets.push({
    x: (random() - 0.5) * 26,
    y: 0.6 + random() * 4.2,
    z: (random() - 0.5) * 26,
    phase: random() * Math.PI * 2,
    drift: 0.4 + random() * 0.9
  });
}

const moteGeometry = new THREE.BufferGeometry();
moteGeometry.setAttribute(
  'position',
  new THREE.BufferAttribute(motePositions, 3)
);

const moteTexture = (() => {
  const c = document.createElement('canvas');
  c.width = c.height = 32;
  const g = c.getContext('2d');
  const grad = g.createRadialGradient(16, 16, 0, 16, 16, 16);
  grad.addColorStop(0, 'rgba(255,255,255,1)');
  grad.addColorStop(.4, 'rgba(255,240,214,0.55)');
  grad.addColorStop(1, 'rgba(255,240,214,0)');
  g.fillStyle = grad;
  g.fillRect(0, 0, 32, 32);
  const texture = new THREE.CanvasTexture(c);
  texture.colorSpace = THREE.SRGBColorSpace;
  return texture;
})();

const moteMaterial = new THREE.PointsMaterial({
  color: 0xffe6b8,
  size: isTouch ? 0.22 : 0.18,
  map: moteTexture,
  transparent: true,
  opacity: 0,
  depthWrite: false,
  blending: THREE.AdditiveBlending
});

const motes = new THREE.Points(moteGeometry, moteMaterial);
motes.visible = false;
motes.frustumCulled = false;
scene.add(motes);

addEventListener('pointerdown', () => audio.unlock(), { once: true });

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
  audio.unlock();

  if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'Space'].includes(e.code)) {
    e.preventDefault();
  }

  if (!keys[e.code]) {
    if (e.code === 'Escape') {
      closePanels();
      closeCamp();
      systems.closeDialogue();
      keys[e.code] = true;
      return;
    }
    if (e.code === 'KeyG') {
      toggleCamp();
      keys[e.code] = true;
      return;
    }
    if (e.code === 'KeyM') {
      toggleMapPanel();
      keys[e.code] = true;
      return;
    }
    if (e.code === 'KeyB') {
      const willOpen = ui.shop.classList.contains('hidden');
      closePanels(willOpen ? 'shop' : null);
      if (willOpen) systems.openShop();
      keys[e.code] = true;
      return;
    }
    if (isPanelOpen()) {
      keys[e.code] = true;
      return;
    }

    if (e.code === 'Space') input.jumpPressed = true;
    if (e.code === 'KeyF') input.attackPressed = true;
    if (e.code === 'KeyE') input.interactPressed = true;
    if (e.code === 'KeyQ') usePotion();
    if (e.code === 'KeyC') input.dodgePressed = true;
    if (e.code === 'KeyR') systems.castSpell();
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
let attackAnimTimer = 0;
let hurtAnimTimer = 0;
const dodgeDirection = new THREE.Vector3();
let autoSaveTimer = 0;
let dungeonActive = false;
let campOpen = false;
let prevYaw = yaw;
let lastSun = 1;

const cWarmSun = new THREE.Color(0xff9a5c);
const cWhiteSun = new THREE.Color(0xfff1d6);

const clock = new THREE.Clock();
const cameraTarget = new THREE.Vector3();
const desiredCamera = new THREE.Vector3();


function saveGame(showMessage = true, slot = currentSlot) {
  if (typeof showMessage !== 'boolean') showMessage = true;
  currentSlot = slot;

  const payload = {
    version: 7,
    slot,
    dungeonActive,
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
    const serialized = JSON.stringify(payload);
    localStorage.setItem(getSaveKey(slot), serialized);
    if (slot === 1) localStorage.setItem('forgotten-realm-save-v1', serialized);
    if (showMessage) toast(`บันทึกความคืบหน้าช่อง ${slot} แล้ว`);
  } catch (error) {
    console.error(error);
    toast('ไม่สามารถบันทึกได้ในอุปกรณ์นี้');
  }
}

function loadGame(slot = currentSlot) {
  try {
    const raw = localStorage.getItem(getSaveKey(slot)) ||
      (slot === 1 ? localStorage.getItem('forgotten-realm-save-v1') : null);
    if (!raw) return toast(`ยังไม่มีข้อมูลบันทึกช่อง ${slot}`);

    const data = JSON.parse(raw);

    if (
      !Array.isArray(data.player) ||
      data.player.length !== 3 ||
      !data.state ||
      !data.player.every(Number.isFinite)
    ) {
      throw new Error('Invalid save format');
    }

    currentSlot = slot;
    player.position.set(...data.player);
    dungeonActive = Boolean(data.dungeonActive);

    const numberFields = [
      'hp', 'stamina', 'crystals', 'potions', 'gold',
      'level', 'xp', 'questStage', 'dayTime'
    ];

    for (const field of numberFields) {
      if (Number.isFinite(Number(data.state[field]))) {
        state[field] = Number(data.state[field]);
      }
    }

    state.dungeonCleared = Boolean(data.state.dungeonCleared);

    // Carry inventory, skills, spells and quests through the save before
    // restoreState() sanitises them (previously these were silently reset).
    if (data.state.inventory && typeof data.state.inventory === 'object') {
      state.inventory = { ...data.state.inventory };
    }
    if (data.state.skills && typeof data.state.skills === 'object') {
      state.skills = { ...data.state.skills };
    }
    if (Array.isArray(data.state.spells)) {
      state.spells = data.state.spells.slice();
    }
    state.activeSpell = typeof data.state.activeSpell === 'string'
      ? data.state.activeSpell
      : null;
    if (data.state.quests && typeof data.state.quests === 'object') {
      state.quests = { ...data.state.quests };
    }
    if (Number.isFinite(Number(data.state.mana))) {
      state.mana = Number(data.state.mana);
    }

    systems.restoreState();
    systems.deserializeWorld(data.systems);

    state.hp = THREE.MathUtils.clamp(state.hp, 0, state.maxHp);
    state.stamina = THREE.MathUtils.clamp(state.stamina, 0, 100);
    state.gold = Math.max(0, Math.floor(state.gold));
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
    state.discoveredSecrets = Array.isArray(data.state.discoveredSecrets)
      ? data.state.discoveredSecrets.filter(id => typeof id === 'string')
      : [];

    state.classId = classDefs[data.state.classId] ? data.state.classId : null;
    state.respawnPoint =
      Array.isArray(data.state.respawnPoint) &&
      data.state.respawnPoint.length === 2 &&
      data.state.respawnPoint.every(Number.isFinite)
        ? data.state.respawnPoint.slice()
        : null;

    if (state.respawnPoint) {
      const [rx, rz] = state.respawnPoint;
      campFire.position.set(rx, getTerrainHeight(rx, rz, 0) ?? 0, rz);
      campFire.visible = true;
    }

    if (Array.isArray(data.collectibles)) {
      collectibles.forEach((crystal, index) => {
        crystal.visible = data.collectibles[index] !== false;
      });
    }

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

        resetEnemySprite(enemy);

        if (enemy.userData.alive) {
          scene.add(enemy);
        } else {
          scene.remove(enemy);
        }

        enemy.userData.cooldown = 0;
        enemy.userData.phase = 1;
        enemy.userData.phaseMultiplier = 1;
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
      settings.sound = Boolean(data.settings.sound);
      settings.music = data.settings.music !== false;
      if (['auto', '30', '45', '60'].includes(String(data.settings.fpsLimit))) {
        settings.fpsLimit = String(data.settings.fpsLimit);
      }
      if (['left', 'right'].includes(data.settings.mobileLayout)) {
        settings.mobileLayout = data.settings.mobileLayout;
      }
      if (['auto', 'day', 'night'].includes(data.settings.dayNightMode)) {
        settings.dayNightMode = data.settings.dayNightMode;
      }
    }

    dayNightMode = settings.dayNightMode || 'auto';
    const slotSelect = $('#save-slot');
    if (slotSelect) slotSelect.value = String(slot);

    applySettings();
    updateHud();
    refreshEquipmentUI();
    refreshSkillUI();
    refreshClassUI();
    systems.refreshInventoryUI();
    systems.refreshQuestUI();
    systems.renderShop();
    toast(`โหลดเกมช่อง ${slot} แล้ว`);
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
  audio.play('potion');
  updateHud();
  toast('ใช้ยาฟื้นฟู +45 HP');
}

function gainXp(amount) {
  state.xp += amount;

  while (state.xp >= 100) {
    state.xp -= 100;
    state.level++;
    state.skillPoints++;
    audio.play('level');
    refreshEquipmentUI();
    refreshSkillUI();
    toast(`เลเวลเพิ่มเป็น ${state.level} · ได้แต้มทักษะ 1`);
  }
}

function completeDungeonIfReady() {
  if (!dungeonActive) return;
  if (!dungeonEnemies.every(enemy => !enemy.userData.alive)) return;

  dungeonActive = false;
  state.dungeonCleared = true;
  state.crystals += 6;
  state.gold += 180;
  gainXp(250);

  const exitY = getTerrainHeight(-24, -70, 0) ?? 0;
  player.position.set(-24, exitY, -70);
  audio.play('quest');
  toast('ถ้ำต้องสาปสงบแล้ว · ได้ผลึก 6 · ทอง 180');
  updateHud();
}

function defeatEnemy(enemy) {
  if (!enemy.userData.alive) return;

  const type = enemy.userData.type;
  const data = enemy.userData;
  data.hp = 0;
  data.alive = false;
  data.deathTimer = data.deathDuration;
  data.hurtTimer = 0;
  data.attackTimer = 0;
  data.moving = false;
  data.healthBar.visible = false;
  setSpriteFrame(data.sprite, data.directionRow || 0, 0, 'death');

  const crystals = type === 'boss' ? 5
    : type === 'dungeonBoss' ? 6
      : type === 'deer' ? 0 : 1;
  const gold = type === 'deer' ? 8
    : type === 'wolf' ? 14
      : type === 'boss' ? 120
        : type === 'dungeonBoss' ? 200 : 20;

  state.crystals += crystals;
  state.gold += gold;
  gainXp(enemy.userData.stats.xp);
  systems.onEnemyKilled(enemy);
  audio.play(type === 'boss' || type === 'dungeonBoss' ? 'boss' : 'hit');
  toast(
    `${enemy.userData.name}พ่ายแพ้ · ได้ผลึก ${crystals} · ทอง ${gold}`
  );
  completeDungeonIfReady();
  updateHud();
}

const projectiles = [];

function damageEnemy(enemy, amount, options = {}) {
  const data = enemy.userData;
  if (!data.alive) return;

  data.hp -= amount;
  data.hurtTimer = .3;
  if (options.slow) {
    data.slowTimer = Math.max(data.slowTimer || 0, options.slow);
  }

  if (data.hp <= 0) defeatEnemy(enemy);
}

function spawnProjectile(weapon, damage) {
  const forwardX = Math.sin(player.rotation.y);
  const forwardZ = Math.cos(player.rotation.y);
  const frost = weapon.projectile === 'frost';
  const mesh = new THREE.Mesh(
    new THREE.SphereGeometry(frost ? .16 : .1, 8, 6),
    new THREE.MeshBasicMaterial({ color: frost ? 0x9fe8ff : 0xffd27a })
  );
  const glow = new THREE.Sprite(new THREE.SpriteMaterial({
    color: frost ? 0x9fe8ff : 0xffd27a,
    transparent: true,
    opacity: .55,
    blending: THREE.AdditiveBlending,
    depthWrite: false
  }));
  glow.scale.set(frost ? 1.1 : .8, frost ? 1.1 : .8, 1);
  mesh.add(glow);

  mesh.position.set(
    player.position.x + forwardX * 1.0,
    player.position.y + 1.15,
    player.position.z + forwardZ * 1.0
  );
  scene.add(mesh);

  projectiles.push({
    mesh,
    forwardX,
    forwardZ,
    speed: frost ? 30 : 38,
    traveled: 0,
    maxRange: weapon.range,
    damage,
    slow: weapon.slow || 0
  });
}

function updateProjectiles(dt) {
  for (let i = projectiles.length - 1; i >= 0; i--) {
    const shot = projectiles[i];
    const step = shot.speed * dt;
    shot.mesh.position.x += shot.forwardX * step;
    shot.mesh.position.z += shot.forwardZ * step;
    shot.traveled += step;

    let hit = null;
    for (const enemy of enemies) {
      if (!enemy.userData.alive) continue;
      const dx = enemy.position.x - shot.mesh.position.x;
      const dz = enemy.position.z - shot.mesh.position.z;
      if (dx * dx + dz * dz < 1.2 * 1.2) {
        hit = enemy;
        break;
      }
    }

    if (hit) {
      damageEnemy(hit, shot.damage, { slow: shot.slow });
      if (hit.userData.alive) {
        toast(`โจมตีโดน ${hit.userData.name} -${Math.round(shot.damage * 10) / 10}`);
        audio.play('hit');
      }
    }

    if (hit || shot.traveled >= shot.maxRange) {
      scene.remove(shot.mesh);
      shot.mesh.geometry.dispose();
      shot.mesh.material.dispose();
      projectiles.splice(i, 1);
    }
  }
}

function handlePlayerDeath() {
  state.hp = state.maxHp;
  state.stamina = 100;
  state.mana = state.maxMana;
  invulnerabilityTimer = 1.5;

  const point = Array.isArray(state.respawnPoint) ? state.respawnPoint : [0, 3];
  const rx = Number.isFinite(point[0]) ? point[0] : 0;
  const rz = Number.isFinite(point[1]) ? point[1] : 3;
  player.position.set(rx, getTerrainHeight(rx, rz, 0) ?? 0, rz);
  verticalVelocity = 0;
  grounded = true;

  let message = 'คุณล้มสลบ · กลับไปยังจุดพัก';
  if (dungeonActive) {
    dungeonActive = false;
    setDungeonEnemies(false);
    message = 'คุณถูกขับออกจากถ้ำต้องสาป';
  }
  if (state.gold > 0) {
    const lost = Math.min(state.gold, 10);
    state.gold -= lost;
    message += ` · สูญเสียทอง ${lost}`;
  }

  clearInputs();
  audio.play('boss');
  toast(message);
  updateHud();
}

// ---------- Camp ----------
const campPanel = $('#camp-panel');
const dialoguePanel = $('#dialogue-panel');
const campFire = new THREE.Group();
{
  const logMat = new THREE.MeshStandardMaterial({ color: 0x4a3324, roughness: 1 });
  for (let i = 0; i < 3; i++) {
    const log = new THREE.Mesh(new THREE.CylinderGeometry(.09, .11, 1.1, 6), logMat);
    log.rotation.z = Math.PI / 2;
    log.rotation.y = (i / 3) * Math.PI;
    log.position.y = .12;
    log.castShadow = true;
    campFire.add(log);
  }
  const flame = new THREE.Mesh(
    new THREE.ConeGeometry(.3, .8, 7),
    new THREE.MeshBasicMaterial({ color: 0xffa24a, transparent: true, opacity: .85 })
  );
  flame.position.y = .45;
  campFire.add(flame);
  const fireLight = new THREE.PointLight(0xff9a4a, 2.2, 14);
  fireLight.position.y = .9;
  campFire.add(fireLight);
  campFire.visible = false;
  scene.add(campFire);
}

function enemiesNearPlayer(radius = 12) {
  return enemies.some((enemy) =>
    enemy.userData.alive &&
    Math.hypot(
      enemy.position.x - player.position.x,
      enemy.position.z - player.position.z
    ) < radius
  );
}

function isCombatBlockingCamp() {
  return dungeonActive || enemiesNearPlayer(12);
}

function updateCampStatus() {
  const status = $('#camp-status');
  if (!status) return;
  const meat = systems.getCount('meat');
  const herb = systems.getCount('herb');
  if (dungeonActive) {
    status.textContent = 'ในถ้ำต้องสาปไม่สามารถตั้งแคมป์ได้';
  } else if (enemiesNearPlayer(12)) {
    status.textContent = 'มีศัตรูอยู่ใกล้เกินไป · กำจัดให้หมดก่อนจึงจะพักได้';
  } else {
    status.textContent =
      `กองไฟพร้อมสำหรับพักผ่อน · เนื้อสด ${meat} · สมุนไพร ${herb}`;
  }
  const restButton = $('#camp-rest');
  if (restButton) restButton.disabled = isCombatBlockingCamp();
  const cookButton = $('#camp-cook');
  if (cookButton) cookButton.disabled = meat < 1 || herb < 1;
}

function openCamp() {
  if (!campPanel) return;
  if (dungeonActive) return toast('ในถ้ำต้องสาปตั้งแคมป์ไม่ได้');

  state.respawnPoint = [
    Math.round(player.position.x * 10) / 10,
    Math.round(player.position.z * 10) / 10
  ];
  const groundY = getTerrainHeight(player.position.x, player.position.z, player.position.y) ?? 0;
  campFire.position.set(
    player.position.x + Math.sin(player.rotation.y) * 1.4,
    groundY,
    player.position.z + Math.cos(player.rotation.y) * 1.4
  );
  campFire.visible = true;
  closePanels('camp');
  campOpen = true;
  campPanel.classList.remove('hidden');
  updateCampStatus();
}

function closeCamp() {
  campOpen = false;
  if (campPanel) campPanel.classList.add('hidden');
}

function toggleCamp() {
  if (campOpen) closeCamp();
  else openCamp();
}

function campRest() {
  if (isCombatBlockingCamp()) {
    return toast('ยังพักไม่ได้ · มีศัตรูอยู่ใกล้');
  }

  state.dayTime = .28;
  dayNightMode = 'auto';
  settings.dayNightMode = 'auto';
  state.hp = state.maxHp;
  state.stamina = 100;
  state.mana = state.maxMana;
  invulnerabilityTimer = 1.5;
  audio.play('quest');
  updateHud();
  refreshEquipmentUI();
  toast('พักผ่อนจนรุ่งเช้า · ฟื้นฟูเต็มหลอด');
  closeCamp();
}

function campCook() {
  if (systems.getCount('meat') < 1 || systems.getCount('herb') < 1) {
    return toast('ต้องใช้เนื้อสด 1 + สมุนไพร 1');
  }

  state.inventory.meat = systems.getCount('meat') - 1;
  state.inventory.herb = systems.getCount('herb') - 1;
  state.potions += 2;
  audio.play('craft');
  systems.refreshInventoryUI();
  updateHud();
  updateCampStatus();
  toast('ปรุงสตูว์ป่า · ได้ยาฟื้นฟู 2');
}

function attack() {
  if (attackCooldown > 0) return;

  const weapon = weaponStats[state.weapon] || weaponStats.sword;
  const cls = classDefs[state.classId] || {};

  if (weapon.kind === 'ranged') {
    if (weapon.stamina && state.stamina < weapon.stamina) {
      toast('พละกำลังไม่พอสำหรับการยิง');
      return;
    }

    attackCooldown = weapon.cooldown;
    attackAnimTimer = .24;
    if (weapon.stamina) state.stamina = Math.max(0, state.stamina - weapon.stamina);
    audio.play('attack');

    const damage = (weapon.damage + state.attackBonus) * (cls.ranged || 1);
    spawnProjectile(weapon, damage);
    updateHud();
    return;
  }

  attackCooldown = weapon.cooldown;
  attackAnimTimer = .24;
  audio.play('attack');

  const forwardX = Math.sin(player.rotation.y);
  const forwardZ = Math.cos(player.rotation.y);
  const damage = (weapon.damage + state.attackBonus) * (cls.melee || 1);

  let target = null;
  let targetDistance = Infinity;
  for (const enemy of enemies) {
    if (!enemy.userData.alive) continue;

    const dx = enemy.position.x - player.position.x;
    const dz = enemy.position.z - player.position.z;
    const distance = Math.hypot(dx, dz);
    if (distance > weapon.range || distance < .001) continue;

    const facing = (dx * forwardX + dz * forwardZ) / distance;
    if (facing < .15) continue;

    if (distance < targetDistance) {
      targetDistance = distance;
      target = enemy;
    }
  }

  if (target) {
    damageEnemy(target, damage);
    audio.play('hit');
    if (target.userData.alive) {
      toast(`โจมตี ${target.userData.name} -${Math.round(damage * 10) / 10}`);
    }
  } else {
    toast('ไม่มีศัตรูอยู่ในระยะ');
  }

  updateHud();
}

function resetEnemySprite(enemy) {
  const data = enemy.userData;
  data.deathTimer = 0;
  data.hurtTimer = 0;
  data.attackTimer = 0;
  data.moving = false;
  data.baseTint = 0xffffff;
  data.healthBar.visible = true;
  data.sprite.material.opacity = 1;
  data.sprite.material.color.setHex(0xffffff);
  setSpriteFrame(data.sprite, data.directionRow || 0, 0, 'walk');
}

function setDungeonEnemies(active) {
  for (const enemy of dungeonEnemies) {
    resetEnemySprite(enemy);
    enemy.userData.hp = active ? enemy.userData.maxHp : 0;
    enemy.userData.alive = active;
    enemy.userData.cooldown = 0;
    enemy.userData.phase = 1;
    enemy.userData.phaseMultiplier = 1;
    enemy.userData.healthFill.scale.x = active ? 1 : 0;
    enemy.userData.healthFill.position.x = 0;
    enemy.position.set(
      enemy.userData.homeX,
      enemy.userData.baseY,
      enemy.userData.homeZ
    );

    if (active) scene.add(enemy);
    else scene.remove(enemy);
  }
}

function enterDungeon() {
  dungeonActive = true;
  setDungeonEnemies(true);

  const arenaY = getTerrainHeight(-28, -90, 0) ?? 0;
  player.position.set(-28, arenaY, -90);
  audio.play('boss');
  toast('คุณเข้าสู่ถ้ำต้องสาป · กำจัดผู้คุมถ้ำให้หมด');
}

function interact() {
  if (systems.interact()) return;

  const portalDistance = Math.hypot(
    player.position.x - dungeonPortal.position.x,
    player.position.z - dungeonPortal.position.z
  );

  if (portalDistance < 5) {
    if (dungeonActive) {
      toast('กำจัดสิ่งมีชีวิตในถ้ำให้หมดก่อนออกไป');
    } else {
      enterDungeon();
    }
    return;
  }

  if (player.position.distanceTo(shrine.position) < 5) {
    if (state.questStage === 0) {
      state.questStage = 1;
      toast('ภารกิจใหม่: กำจัดผู้พิทักษ์');
    } else if (
      state.questStage === 1 &&
      enemies.filter(e => e.userData.type === 'guardian')
        .every(e => !e.userData.alive)
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
/* Keep the shadow frustum centred on the player so distant districts get
   crisp, correctly aligned shadows instead of a single box around origin. */
function updateShadowFocus() {
  const focus = player.position;
  sunLight.position.copy(focus).addScaledVector(SKY_SUN_DIR, 72);
  sunLight.target.position.copy(focus);
  sunLight.target.updateMatrixWorld();
  moon.position.copy(focus).addScaledVector(SKY_MOON_DIR, -72);
  moon.target.position.copy(focus);
  moon.target.updateMatrixWorld();
}

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

  
moon.intensity = 2.8 * (1 - sun);
sunLight.intensity = 2.55 * sun;
hemi.intensity = 0.98 + 0.74 * sun;
ambient.intensity = 0.76 + 0.06 * sun + cinematic.getFlash() * 1.7;
moonGlow.intensity = 0.85 * (1 - sun);
renderer.toneMappingExposure = 1.32 + 0.16 * (1 - sun);
  if (sky.material.uniforms.uExposure) {
    sky.material.uniforms.uExposure.value = renderer.toneMappingExposure;
  }
sunLight.color.lerpColors(cWarmSun, cWhiteSun, sun);
lastSun = sun;
  
  // Use only one directional shadow light at a time
  moon.castShadow = sun < 0.5;
  sunLight.castShadow = sun >= 0.5;

  // Keep ground visible at night
  ground.material.color.copy(groundNightColor)
    .lerp(groundDayColor, sun);
  


  const daylight = new THREE.Color(0x111a2b).lerp(
  new THREE.Color(0x7d93ad),
  sun
);
  const duskTint = Math.max(0, 1 - Math.abs(sun - 0.18) * 3.4);
  daylight.lerp(new THREE.Color(0xe88a5a), duskTint * 0.30);

sky.visible = true;
sky.material.uniforms.uSun.value = sun;
scene.background.copy(daylight);
scene.fog.color.copy(daylight);
fireflies.visible = sun < 0.65;
fireflyMaterial.opacity = 0.75 * (1 - sun);

motes.visible = sun > 0.18;
moteMaterial.opacity = 0.30 * THREE.MathUtils.clamp((sun - 0.18) * 2.4, 0, 1);
// Dynamic Dark Fantasy Fog
const nightFog = 1 - sun;
scene.fog.density = THREE.MathUtils.lerp(
  0.0026,
  0.0042,
  nightFog
);

cinematic.update(dt, sun, player.position);

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

  if (lastSun < 0.35 && random() < dt * 0.055) {
    cinematic.strike();
    audio.play('thunder');
  }
}

// ---------- Update Fireflies ----------
function updateMotes() {
  const p = moteGeometry.attributes.position;
  const t = clock.elapsedTime;

  for (let i = 0; i < moteCount; i++) {
    const m = moteOffsets[i];
    p.array[i * 3] =
      player.position.x + m.x + Math.sin(t * 0.22 * m.drift + m.phase) * 2.2;
    p.array[i * 3 + 1] =
      m.y + Math.sin(t * 0.35 * m.drift + m.phase * 1.7) * 0.4;
    p.array[i * 3 + 2] =
      player.position.z + m.z + Math.cos(t * 0.19 * m.drift + m.phase) * 2.2;
  }

  p.needsUpdate = true;
}

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
const worldRegions = REGIONS.map((region) => ({
  id: region.id,
  name: region.name,
  isInside: () => regionAt(player.position.x, player.position.z)?.id === region.id
}));

function updateRegionDiscovery() {
  const region = worldRegions.find(area => area.isInside());
  if (!region || state.discoveredRegions.includes(region.id)) return;

  state.discoveredRegions.push(region.id);
  toast(`ค้นพบพื้นที่ใหม่: ${region.name}`);
}

function updateBossPhase(data) {
  const ratio = Math.max(0, data.hp / data.maxHp);
  const phase = ratio > .65 ? 1 : ratio > .3 ? 2 : 3;
  if (phase === data.phase) return;

  data.phase = phase;
  data.phaseMultiplier = phase === 1 ? 1 : phase === 2 ? 1.18 : 1.42;
  data.healthFill.material.color.setHex(
    phase === 3 ? 0xff3030 : phase === 2 ? 0xff9a3d : 0xff4fd8
  );
  data.baseTint = phase === 3 ? 0xff7a7a
    : phase === 2 ? 0xffb37a : 0xffffff;

  if (phase > 1) {
    toast(`${data.name} เข้าเฟส ${phase} · โจมตีรุนแรงขึ้น`);
    audio.play('boss');
  }
}

function updateWorld(dt, yaw) {
  updateRegionDiscovery();

  portalRing.rotation.z += dt * .35;
  portalCore.material.opacity = .72 + Math.sin(clock.elapsedTime * 2) * .12;
  shrine.rotation.y += dt * .4;

  for (const crystal of collectibles) {
    if (!crystal.visible) continue;

    crystal.rotation.y += dt * .8;
    crystal.position.y = (crystal.userData.baseY || 0) + .8 + Math.sin(
      performance.now() * .002 + crystal.position.z
    ) * .12;

    if (player.position.distanceTo(crystal.position) < 1.45) {
      crystal.visible = false;
      state.crystals++;
      gainXp(10);
      audio.play('pickup');
      toast('เก็บผลึกวิญญาณ +1');
      updateHud();
    }
  }

  for (const enemy of enemies) {
    const data = enemy.userData;

    if (data.deathTimer > 0) {
      data.deathTimer = Math.max(0, data.deathTimer - dt);
      data.moving = false;
      updateCharacterAnimation(data, dt, yaw, enemy.rotation.y);
      if (data.deathTimer <= 0) scene.remove(enemy);
      continue;
    }

    if (!data.alive) continue;

    const stats = data.stats;
    const dx = player.position.x - enemy.position.x;
    const dz = player.position.z - enemy.position.z;
    const distance = Math.hypot(dx, dz);
    const isBoss = data.type === 'boss' || data.type === 'dungeonBoss';

    if (isBoss) updateBossPhase(data);

    data.slowTimer = Math.max(0, (data.slowTimer || 0) - dt);
    const slowFactor = data.slowTimer > 0 ? .55 : 1;
    const speed = stats.speed * data.phaseMultiplier * slowFactor;
    const attackDamage = stats.damage * data.phaseMultiplier;

    const hpRatio = Math.max(0, data.hp / data.maxHp);
    data.healthFill.scale.x = hpRatio;
    data.healthFill.position.x = -(1 - hpRatio) * 0.46;

    const barWorldRotation = camera.quaternion.clone();
    barWorldRotation.premultiply(enemy.quaternion.clone().invert());
    data.healthBar.quaternion.copy(barWorldRotation);
    data.healthBar.visible = distance < stats.aggro + 2;

    data.cooldown = Math.max(0, data.cooldown - dt);

    data.moving = false;

    if (data.kind === 'animal' && data.type === 'deer') {
      if (distance < stats.aggro) {
        const away = new THREE.Vector3(-dx, 0, -dz).normalize();
        enemy.position.addScaledVector(away, dt * speed);
        enemy.rotation.y = Math.atan2(away.x, away.z);
        data.moving = true;
      } else {
        const t = performance.now() * 0.0004 + data.homeZ;
        enemy.position.x = data.homeX + Math.sin(t) * 1.6;
        enemy.position.z = data.homeZ + Math.cos(t * .7) * 1.2;
      }
    } else if (distance < stats.aggro) {
      const direction = new THREE.Vector3(dx, 0, dz).normalize();
      enemy.rotation.y = Math.atan2(direction.x, direction.z);

      if (distance > stats.reach) {
        enemy.position.addScaledVector(direction, dt * speed);
        data.moving = true;
      } else if (data.cooldown <= 0 && invulnerabilityTimer <= 0) {
        const armor = armorStats[state.armor] || armorStats.leather;
        const cls = classDefs[state.classId] || {};
        const incomingDamage = attackDamage *
          (1 - armor.reduction) *
          (1 - (cls.damageReduction || 0));
        state.hp = Math.max(0, state.hp - incomingDamage);
        data.cooldown = stats.cooldown;
        data.attackTimer = .4;
        hurtAnimTimer = .3;
        audio.play('hit');
        toast(`${data.name}โจมตีคุณ -${Math.round(incomingDamage)}`);

        if (state.hp <= 0) handlePlayerDeath();

        updateHud();
      }
    } else {
      const t = performance.now() * 0.0005 + data.homeZ;
      enemy.position.x = data.homeX + Math.sin(t) * 1.2;
      enemy.position.z = data.homeZ + Math.cos(t * 0.7) * 0.8;
    }

    const terrainY = getTerrainHeight(
      enemy.position.x,
      enemy.position.z,
      data.baseY
    );
    enemy.position.y = terrainY === null ? data.baseY : terrainY;

    if (!isBoss) {
      for (const other of enemies) {
        if (other === enemy || !other.userData.alive) continue;
        const odx = enemy.position.x - other.position.x;
        const odz = enemy.position.z - other.position.z;
        const od = Math.hypot(odx, odz);
        if (od > 0.001 && od < 1.0) {
          const push = (1.0 - od) * 0.5;
          enemy.position.x += odx / od * push;
          enemy.position.z += odz / od * push;
        }
      }
    }

    updateCharacterAnimation(data, dt, yaw, enemy.rotation.y);
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
  settings.sound = Boolean(settings.sound);

  audio.setEnabled(settings.sound);
  audio.setWeather(settings.weather);
  audio.setMusic(settings.music);

  const postActive = Boolean(settings.postfx && settings.quality !== 'low');
  cinematic.setEnabled(postActive);
  cinematic.setQuality(settings.quality);
  if (sky.material.uniforms.uPost) {
    sky.material.uniforms.uPost.value = postActive ? 1 : 0;
  }
  const postfxToggle = $('#postfx-toggle');
  if (postfxToggle) postfxToggle.checked = settings.postfx;

  document.body.classList.toggle('layout-left', settings.mobileLayout === 'left');

  $('#quality').value = settings.quality;
  $('#sensitivity').value = String(settings.sensitivity);
  $('#rain-toggle').checked = settings.weather;
  const soundToggle = $('#sound-toggle');
  if (soundToggle) soundToggle.checked = settings.sound;
  const musicToggle = $('#music-toggle');
  if (musicToggle) musicToggle.checked = settings.music;
  const fpsSelect = $('#fps-limit');
  if (fpsSelect) fpsSelect.value = settings.fpsLimit;
  const layoutSelect = $('#mobile-layout');
  if (layoutSelect) layoutSelect.value = settings.mobileLayout;
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
  attackAnimTimer = Math.max(0, attackAnimTimer - dt);
  hurtAnimTimer = Math.max(0, hurtAnimTimer - dt);

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
      audio.play('dodge');
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

const directionRow = facingRow(player.rotation.y, yaw);


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

const frame = attackAnimTimer > 0
  ? 1
  : isAnimating
    ? Math.floor(playerAnimTime * animationSpeed) % 4
    : 0;

playerTexture.offset.set(
  frame * 0.25,
  (3 - directionRow) * 0.25
);

playerSprite.position.y = 1.03 +
  (isAnimating ? 0 : Math.sin(playerAnimTime * 2) * 0.015);

const attackGlow = attackAnimTimer / .24;
const hurtGlow = hurtAnimTimer / .3;
playerSprite.material.color.setRGB(
  1 + hurtGlow * .5,
  1 - hurtGlow * .4,
  1 - hurtGlow * .4
);
playerSprite.scale.set(1.55 + attackGlow * .16, 2.05, 1);
body.rotation.x = -attackGlow * .22;

  if (!moving || !(input.run || keys.ShiftLeft || keys.ShiftRight)) {
    const staminaRegen = 15 * ((classDefs[state.classId] || {}).staminaRegen || 1);
    state.stamina = Math.min(100, state.stamina + staminaRegen * dt);
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

  player.position.x = THREE.MathUtils.clamp(
    player.position.x,
    WORLD_BOUNDS.minX + 10,
    WORLD_BOUNDS.maxX - 10
  );
  player.position.z = THREE.MathUtils.clamp(
    player.position.z,
    WORLD_BOUNDS.minZ + 10,
    WORLD_BOUNDS.maxZ - 10
  );

  worldStreamer.update(player.position);
  vegetation.update(player.position, dt);

  if (!fallbackHidden && worldStreamer.loadedCount > 0) {
    fallbackHidden = true;
    fallbackWorld.visible = false;
    for (let i = obstacles.length - 1; i >= 0; i--) {
      if (obstacles[i].fallback) obstacles.splice(i, 1);
    }
    toast('เปิดโลกกว้าง 6 เขต · ค้นพบจุดลับและสมบัติได้ทั่วแผนที่');
  }

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
  const yawDelta = yaw - prevYaw;
  prevYaw = yaw;

  desiredCamera.set(
    cameraTarget.x + Math.sin(yaw) * horizontal,
    cameraTarget.y + Math.sin(pitch) * distance,
    cameraTarget.z + Math.cos(yaw) * horizontal
  );

  camera.position.lerp(desiredCamera, 1 - Math.pow(.001, dt));
  camera.lookAt(cameraTarget);

  const rollTarget = THREE.MathUtils.clamp(-yawDelta * 0.9, -0.035, 0.035);
  camera.rotation.z += (rollTarget - camera.rotation.z) * Math.min(1, dt * 7);

  if (hurtAnimTimer > 0) {
    const k = hurtAnimTimer * 0.06;
    camera.position.x += (Math.random() - 0.5) * k;
    camera.position.y += (Math.random() - 0.5) * k;
  }

  sky.position.copy(camera.position);
  sunLight.position.set(
    player.position.x + 25,
    35,
    player.position.z - 20
  );
  sunLight.target.position.copy(player.position);
  sunLight.target.updateMatrixWorld();
  moon.position.set(
    player.position.x - 18,
    28,
    player.position.z + 12
  );
  moon.target.position.copy(player.position);
  moon.target.updateMatrixWorld();
  moonGlow.position.set(
    player.position.x - 16,
    12,
    player.position.z - 18
  );

  ui.hint.textContent = '';
  if (worldStreamer.pendingCount > 0) {
    ui.hint.textContent = 'กำลังโหลดพื้นที่...';
  }

  updateDayNight(dt);
  updateShadowFocus();
  updateWeather(dt);
  updateFireflies(dt);
  if (motes.visible) updateMotes();
  updateProjectiles(dt);

  if (campFire.visible) {
    const flame = campFire.children[3];
    const fireLight = campFire.children[4];
    const t = performance.now() * .001;
    flame.scale.setScalar(.92 + Math.sin(t * 9) * .08);
    flame.material.opacity = .72 + Math.sin(t * 13) * .14;
    fireLight.intensity = 2.1 + Math.sin(t * 7.3) * .5;
  }

  updateWorld(dt, yaw);
  systems.update(dt, yaw);

  const portalHintDistance = Math.hypot(
    player.position.x - dungeonPortal.position.x,
    player.position.z - dungeonPortal.position.z
  );

  if (portalHintDistance < 5) {
    ui.hint.textContent = dungeonActive
      ? 'กำจัดสิ่งมีชีวิตในถ้ำให้หมดก่อนออกไป'
      : 'กด E / ใช้เพื่อเข้าถ้ำต้องสาป';
  } else if (player.position.distanceTo(shrine.position) < 5) {
    ui.hint.textContent = 'กด E / ใช้ เพื่อโต้ตอบ';
  } else {
    const secretName = systems.getNearbySecretName();
    if (secretName) {
      ui.hint.textContent = `กด E / ใช้เพื่อค้นพบ ${secretName}`;
    }
  }

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
  settings.dayNightMode = dayNightMode;
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
  if (except !== 'shop') systems.closeShop();
  if (except !== 'camp') closeCamp();
  if (except !== 'dialogue') systems.closeDialogue();
}

function isPanelOpen() {
  return (
    !ui.settings.classList.contains('hidden') ||
    !ui.inventory.classList.contains('hidden') ||
    !questPanel.classList.contains('hidden') ||
    !mapPanel.classList.contains('hidden') ||
    !ui.shop.classList.contains('hidden') ||
    !campPanel.classList.contains('hidden') ||
    !dialoguePanel.classList.contains('hidden')
  );
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
  if (willOpen) systems.drawWorldMap(yaw);
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

const postfxToggle = $('#postfx-toggle');
if (postfxToggle) postfxToggle.addEventListener('change', (e) => {
  settings.postfx = e.target.checked;
  applySettings();
});

$('#sound-toggle').addEventListener('change', (e) => {
  settings.sound = e.target.checked;
  applySettings();
  if (settings.sound) audio.play('pickup');
});

const saveSlotSelect = $('#save-slot');
if (saveSlotSelect) {
  saveSlotSelect.addEventListener('change', (e) => {
    currentSlot = THREE.MathUtils.clamp(
      Math.round(Number(e.target.value)) || 1, 1, 3
    );
    toast(`เลือกช่องบันทึก ${currentSlot}`);
  });
}

$('#shop-open').addEventListener('click', () => {
  const willOpen = ui.shop.classList.contains('hidden');
  closePanels(willOpen ? 'shop' : null);
  if (willOpen) systems.openShop();
  ui.shop.setAttribute('aria-expanded', String(willOpen));
});

$('#camp').addEventListener('click', toggleCamp);
$('#camp-close').addEventListener('click', closeCamp);
$('#camp-rest').addEventListener('click', campRest);
$('#camp-cook').addEventListener('click', campCook);

$('#fps-limit').addEventListener('change', (e) => {
  settings.fpsLimit = e.target.value;
  toast(e.target.value === 'auto'
    ? 'ปลดล็อกเฟรมเรต'
    : `จำกัดที่ ${e.target.value} FPS`);
});

$('#mobile-layout').addEventListener('change', (e) => {
  settings.mobileLayout = e.target.value;
  applySettings();
});

const musicToggle = $('#music-toggle');
if (musicToggle) musicToggle.addEventListener('change', (e) => {
  settings.music = e.target.checked;
  applySettings();
});

const classContainer = $('#inventory');
if (classContainer) {
  classContainer.addEventListener('click', (event) => {
    const button = event.target.closest('[data-class]');
    if (button) selectClass(button.dataset.class);
  });
}

$('#save-button').addEventListener('click', () => saveGame(true, currentSlot));
$('#load-button').addEventListener('click', () => loadGame(currentSlot));

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
  cinematic.resize(width, height, ratio);
}

addEventListener('resize', resizeGame);
addEventListener('orientationchange', () => {
  setTimeout(resizeGame, 150);
});

if (window.visualViewport) {
  window.visualViewport.addEventListener('resize', resizeGame);
}

// ---------- Start ----------
dayNightMode = settings.dayNightMode || 'auto';
if (saveSlotSelect) saveSlotSelect.value = String(currentSlot);
applySettings();
updateHud();
refreshEquipmentUI();
refreshSkillUI();
refreshClassUI();
systems.refreshQuestUI();
resizeGame();

let lastFrameTime = 0;
function animate(now = performance.now()) {
  requestAnimationFrame(animate);

  const fpsLimit = Number(settings.fpsLimit);
  if (fpsLimit > 0 && now - lastFrameTime < 1000 / fpsLimit - 1.5) return;
  lastFrameTime = now;

  const dt = Math.min(clock.getDelta(), .05);
  if (!isPanelOpen()) update(dt);
  cinematic.render();
}

animate();
