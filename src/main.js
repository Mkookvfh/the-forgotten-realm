
import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.js';
import { ShaderPass } from 'three/addons/postprocessing/ShaderPass.js';
import { OutputPass } from 'three/addons/postprocessing/OutputPass.js';
import { createSystems, RARITY } from './systems.js';
import { createAudio } from './audio.js';
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
  shop: $('#shop-panel'), gold: $('#gold-count')
};

const isTouch = matchMedia('(pointer: coarse)').matches;
const settings = {
  quality: 'medium',
  sensitivity: 5,
  weather: true,
  sound: true,
  music: true,
  dayNightMode: 'auto',
  mobileLayout: 'right',
  fpsLimit: 'auto',
  postProcessing: false
};
const audio = createAudio();
let currentSlot = 1;
let dayNightMode = 'auto';
let targetFps = 60;
let lodTimer = 0;
let qualityEffectScale = .65;

const weaponStats = {
  sword: { name: 'ดาบ', damage: 1, range: 3.0, cooldown: 0.55, rarity: 'common' },
  greatsword: { name: 'ดาบใหญ่', damage: 2, range: 3.4, cooldown: 0.9, rarity: 'common' },
  staff: { name: 'คทาเวท', damage: 1.5, range: 4.8, cooldown: 0.8, rarity: 'uncommon' },
  voidblade: { name: 'ดาบเงาว่าง', damage: 3.5, range: 3.8, cooldown: .7, rarity: 'epic' },
  axe: { name: 'ขวานศึก', damage: 2.8, range: 3.1, cooldown: 1.0, rarity: 'uncommon', element: 'earth' },
  bow: { name: 'ธนูวิญญาณ', damage: 1.8, range: 9, cooldown: .72, rarity: 'rare', element: 'wind' },
  froststaff: { name: 'คทาเหมันต์', damage: 2.4, range: 5.2, cooldown: .85, rarity: 'rare', element: 'ice' }
};

const armorStats = {
  leather: { name: 'เกราะหนัง', reduction: 0, rarity: 'common' },
  iron: { name: 'เกราะเหล็ก', reduction: .25, rarity: 'common' },
  shadow: { name: 'เกราะเงา', reduction: .5, rarity: 'rare' },
  dragonplate: { name: 'เกราะมังกรร้าง', reduction: .65, rarity: 'epic' },
  runerobe: { name: 'ผ้าคลุมรูน', reduction: .2, rarity: 'rare', mana: 25 },
  ranger: { name: 'เกราะพราน', reduction: .32, rarity: 'uncommon' }
};

const state = {
  hp: 100, stamina: 100,   crystals: 0, potions: 2, gold: 60,
  level: 1, xp: 0, questStage: 0,

  weapon: 'sword', armor: 'leather',
  attackBonus: 0, skillPoints: 0,
  maxHp: 100, maxMana: 100,
  skills: { might: 0, vitality: 0, arcana: 0, precision: 0, ward: 0 },
  characterClass: 'adventurer',
  inventory: { sword: 1, leather: 1 },
  mana: 100, spells: [], activeSpell: null,
  quests: {},
  relationships: {},
  npcMemories: {},
  worldHistory: {},
  settlementStage: 0,
  dayTime: 0.25, weatherTime: 0,
  weatherOn: true, dead: false,
  discoveredRegions: [],
  dungeonCleared: false,
  dungeonStarted: false,
  dungeonRewarded: false,
  dungeonLoot: {},
  mounted: false,
  horsePosition: null,
  foodBuff: 0,
  campPosition: null
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
  ui.hp.style.width = `${Math.max(0, state.hp)}%`;
  ui.hpText.textContent = `${Math.ceil(state.hp)} / ${state.maxHp}`;
  ui.stamina.style.width = `${Math.ceil(state.stamina)}%`;
  ui.staminaText.textContent = `${Math.ceil(state.stamina)} / 100`;
  ui.level.textContent = String(state.level);
  ui.crystals.textContent = String(state.crystals);
  ui.potions.textContent = String(state.potions);
  if (ui.gold) ui.gold.textContent = String(state.gold);

  ui.quest.textContent = state.questStage === 0
    ? 'เดินทางไปยังหอคอยร้าง'
    : state.questStage === 1
      ? 'กำจัดผู้พิทักษ์ที่เฝ้าซากโบราณ'
      : 'สำเร็จ! สำรวจดินแดนต่อไป';
  const sideTracker = $('#side-quest-text');
  if (sideTracker) {
    const active = Object.entries(state.quests || {}).find(([, quest]) => quest?.status === 'active');
    const labels = { herb: 'สมุนไพรเพื่อชีวิต', hunt: 'ล่าผู้พิทักษ์' };
    sideTracker.textContent = active ? `ภารกิจรอง: ${labels[active[0]] || active[0]} (${active[1].count}/${active[0] === 'herb' ? 5 : 3})` : '';
  }
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
  arcana: { name: 'พลังเวท', max: 3, desc: 'เพิ่ม MP สูงสุด +12 และพลังเวท +10% ต่อระดับ' },
  precision: { name: 'นักล่าแม่นยำ', max: 3, desc: 'เพิ่มความเสียหายธนู +15% ต่อระดับ' },
  ward: { name: 'เกราะธาตุ', max: 3, desc: 'ลดเวลาสถานะผิดปกติที่ได้รับ' }
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
scene.background = new THREE.Color(0x8fc8df);
scene.fog = new THREE.FogExp2(0xa8d2dc, 0.0022);

const camera = new THREE.PerspectiveCamera(
  62, innerWidth / innerHeight, 0.1, 220
);

const renderer = new THREE.WebGLRenderer({
  antialias: !isTouch,
  powerPreference: isTouch ? 'low-power' : 'high-performance'
});

renderer.outputColorSpace = THREE.SRGBColorSpace;
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1.22;
renderer.setPixelRatio(Math.min(devicePixelRatio || 1, isTouch ? 1.35 : 1.75));
renderer.setSize(innerWidth, innerHeight);
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
renderer.domElement.style.touchAction = 'none';
renderer.domElement.setAttribute('aria-label', 'Game view');
mount.appendChild(renderer.domElement);

let composer = null;
let bloomPass = null;
let vignettePass = null;

function createPostProcessing() {
  if (composer) return;
  composer = new EffectComposer(renderer);
  composer.addPass(new RenderPass(scene, camera));
  bloomPass = new UnrealBloomPass(new THREE.Vector2(innerWidth, innerHeight), .24, .42, .84);
  composer.addPass(bloomPass);
  vignettePass = new ShaderPass({
    uniforms: { tDiffuse: { value: null }, strength: { value: .18 } },
    vertexShader: `varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,
    fragmentShader: `uniform sampler2D tDiffuse; uniform float strength; varying vec2 vUv; void main(){ vec4 color = texture2D(tDiffuse, vUv); float edge = smoothstep(.24, .78, length((vUv - .5) * vec2(1.0, .86))); color.rgb *= 1.0 - edge * strength; gl_FragColor = color; }`
  });
  composer.addPass(vignettePass);
  composer.addPass(new OutputPass());
}

function disposePostProcessing() {
  if (!composer) return;
  composer.dispose();
  bloomPass?.dispose();
  vignettePass?.material?.dispose();
  composer = null;
  bloomPass = null;
  vignettePass = null;
}

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

    vec3 nightHorizon = vec3(.17,.22,.34);
    vec3 nightZenith = vec3(.018,.035,.095);

    vec3 dayHorizon = vec3(.72,.86,.91);
    vec3 dayZenith = vec3(.23,.62,.91);

    float twilight = smoothstep(0.0, .2, uSun) * (1.0 - smoothstep(.2, .55, uSun));
    vec3 duskHorizon = vec3(.88,.56,.32);
    vec3 duskZenith = vec3(.43,.43,.62);
    vec3 horizon = mix(mix(nightHorizon, dayHorizon, uSun), duskHorizon, twilight * .58);
    vec3 zenith = mix(mix(nightZenith, dayZenith, uSun), duskZenith, twilight * .48);

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

const clouds = [];
const cloudMaterials = [];
const cloudGeometry = new THREE.DodecahedronGeometry(1, 1);
const cloudMaterial = new THREE.MeshLambertMaterial({ color: 0xf1f2ec, transparent: true, opacity: .92, flatShading: true, depthWrite: false });
cloudMaterials.push(cloudMaterial);
for (let i = 0; i < 10; i++) {
  const cloud = new THREE.Group();
  const puffs = 5 + Math.floor(Math.random() * 4);
  for (let j = 0; j < puffs; j++) {
    const puff = new THREE.Mesh(cloudGeometry, cloudMaterial);
    const size = 1.8 + Math.random() * 2.1;
    puff.position.set((j - puffs / 2) * 2.2, Math.random() * 1.1, (Math.random() - .5) * 2.8);
    puff.scale.set(size * 1.35, size * .68, size * 1.08);
    cloud.add(puff);
  }
  cloud.position.set((Math.random() - .5) * 150, 28 + Math.random() * 13, (Math.random() - .5) * 160);
  cloud.userData.drift = .35 + Math.random() * .45;
  clouds.push(cloud);
  scene.add(cloud);
}

function updateClouds(dt) {
  for (const cloud of clouds) {
    cloud.position.x += dt * cloud.userData.drift;
    if (cloud.position.x > 90) cloud.position.x = -90;
  }
  const sun = dayNightMode === 'day' ? 1 : dayNightMode === 'night' ? 0 : Math.max(0, Math.sin(state.dayTime * Math.PI * 2));
  cloudMaterial.color.setRGB(.35 + sun * .58, .39 + sun * .55, .48 + sun * .48);
  cloudMaterial.opacity = .48 + sun * .45;
}

// ---------- Lighting ----------
const hemi = new THREE.HemisphereLight(0xa8d8f2, 0x596744, 1.6);
scene.add(hemi);

const ambient = new THREE.AmbientLight(0xd8e9d2, 0.52);
scene.add(ambient);

const moon = new THREE.DirectionalLight(0xb8cbf2, .7);
moon.position.set(-18, 28, 12);
moon.castShadow = true;
moon.shadow.mapSize.set(1024, 1024);
Object.assign(moon.shadow.camera, {
  left: -32, right: 32, top: 32, bottom: -32
});
moon.shadow.normalBias = 0.03;
scene.add(moon);
scene.add(moon.target);

const sunLight = new THREE.DirectionalLight(0xffe4b5, 2.35);
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
scene.add(sunLight.target);

const moonGlow = new THREE.PointLight(0x9bb5ed, .32, 65);
moonGlow.position.set(-16, 12, -18);
scene.add(moonGlow);

// ---------- Ground ----------
function sampleDefaultTerrainHeight(x, z) {
  let flatten = THREE.MathUtils.smoothstep(Math.abs(x), 3, 10);
  flatten *= THREE.MathUtils.smoothstep(Math.abs(z + 72), 4, 10);
  for (const [cx, cz, radius] of [[0, -48, 9], [13, -48, 12], [-27, -27, 12], [29, -28, 21], [-28, -87, 23], [0, -136, 13]]) {
    flatten *= THREE.MathUtils.smoothstep(Math.hypot(x - cx, z - cz), radius, radius + 9);
  }
  const rolling = Math.sin(x * .075 + z * .043) * .86 +
    Math.cos(z * .058 - x * .032) * .58 +
    Math.sin((x - z) * .12) * .2;
  return rolling * flatten;
}

const groundGeometry = new THREE.PlaneGeometry(220, 380, 55, 95);
const groundPositions = groundGeometry.attributes.position;
for (let i = 0; i < groundPositions.count; i++) {
  const x = groundPositions.getX(i);
  const z = -groundPositions.getY(i) - 65;
  groundPositions.setZ(i, sampleDefaultTerrainHeight(x, z));
}
groundGeometry.computeVertexNormals();
const ground = new THREE.Mesh(
  groundGeometry,
  new THREE.MeshStandardMaterial({ color: 0x7fae4f, roughness: 1, flatShading: true })
);
ground.rotation.x = -Math.PI / 2;
ground.position.z = -65;
ground.receiveShadow = true;
scene.add(ground);

// ---------- Terrain Height Detection ----------
let importedWorld = null;
let importedWorldBounds = null;
const terrainRaycaster = new THREE.Raycaster();

const glbRequested = new URLSearchParams(location.search).has('glb');

if (glbRequested) {
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
        if (object.isMesh) meshCount++;
      });

      scene.add(importedWorld);
      ground.visible = false;
      alignGrassToTerrain();

      toast(`ตรวจพบแผนที่ GLB · ${Math.round(size.x)} × ${Math.round(size.z)}`);
    },

    undefined,

    (error) => {
      console.error('GLB WORLD LOAD ERROR:', error);
      toast('โหลดไฟล์แผนที่ GLB ไม่สำเร็จ ใช้แผนที่ต้นแบบแทน');
    }
  );
}

const groundDayColor = new THREE.Color(0x7fae4f);
const groundNightColor = new THREE.Color(0x33445a);


const mats = {
  stone: new THREE.MeshStandardMaterial({ color: 0x77766b, roughness: 1, flatShading: true }),
  bark: new THREE.MeshStandardMaterial({ color: 0x68462d, roughness: 1, flatShading: true }),
  leaves: new THREE.MeshStandardMaterial({ color: 0x5c9e3e, roughness: 1, flatShading: true }),
  ruin: new THREE.MeshStandardMaterial({ color: 0x969587, roughness: 1, flatShading: true })
};

const treeLeafPalette = [0x68a93e, 0x82b949, 0xa2c957, 0x458f5e, 0xc28b43].map(color =>
  new THREE.MeshStandardMaterial({ color, roughness: 1, flatShading: true })
);
const broadleafGeometry = new THREE.IcosahedronGeometry(1, 0);

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
for (let i = 0; i < 28; i++) {
  const slab = new THREE.Mesh(new THREE.BoxGeometry(2.6, .1, 1.65), mats.stone);
  slab.position.set(Math.sin(i * .24) * 2.1, .04, -59 - i * 3.1);
  slab.rotation.y = Math.sin(i * .7) * .1;
  slab.receiveShadow = true;
  scene.add(slab);
}
const obstacles = [];
const environmentalTrees = [];
const environmentalRocks = [];
function makeTree(x, z, scale = 1) {
  const tree = new THREE.Group();
  const crownMaterial = treeLeafPalette[Math.floor(random() * treeLeafPalette.length)];

  const trunk = new THREE.Mesh(
    new THREE.CylinderGeometry(.18 * scale, .32 * scale, 3.2 * scale, 6),
    mats.bark
  );
  trunk.position.y = 1.6 * scale;
  trunk.castShadow = true;
  tree.add(trunk);

  for (let j = 0; j < 3; j++) {
    const crown = new THREE.Mesh(broadleafGeometry, crownMaterial);
    crown.scale.set((1.45 - j * .08) * scale, (1.05 + j * .08) * scale, 1.25 * scale);
    crown.position.set((j - 1) * .72 * scale, (3.15 + j * .48) * scale, (j % 2 ? .25 : -.18) * scale);
    crown.castShadow = true;
    tree.add(crown);
  }

  tree.userData.crowns = tree.children.slice(1);
  environmentalTrees.push(tree);

  tree.position.set(x, sampleDefaultTerrainHeight(x, z), z);
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
  color: 0xffffff,
  roughness: 1,
  vertexColors: false,
  side: THREE.DoubleSide
});

function makeGrassClumpGeometry() {
  const positions = [];
  for (let blade = 0; blade < 3; blade++) {
    const angle = blade * Math.PI / 3;
    const dx = Math.cos(angle) * .16;
    const dz = Math.sin(angle) * .16;
    const height = .58 + blade * .12;
    positions.push(-dx, 0, -dz, dx, 0, dz, -dx * .12, height, -dz * .12);
    positions.push(dx, 0, dz, -dx, 0, -dz, dx * .12, height * .92, dz * .12);
  }
  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
  geometry.computeVertexNormals();
  return geometry;
}

const grassBlade = makeGrassClumpGeometry();
const grassCount = isTouch ? 1800 : 4200;
const grass = new THREE.InstancedMesh(
  grassBlade,
  grassMaterial,
  grassCount
);

const grassDummy = new THREE.Object3D();

for (let i = 0; i < grassCount; i++) {
  const x = (random() - 0.5) * 112;
  const z = 14 - random() * 180;
  const nearTower = Math.hypot(x, z + 48) < 7;
  const nearRuins = Math.hypot(x - 13, z + 48) < 9;
  const inVillage = x > 17 && x < 37 && z < -15 && z > -39;
  const nearSkeletonClearing = x > -39 && x < -15 && z > -43 && z < -11;
  if ((Math.abs(x) < 3.2 && z > -65 && z < 15) || Math.abs(z + 72) < 4.5 || nearTower || nearRuins || inVillage || nearSkeletonClearing) {
    i--;
    continue;
  }
  grassDummy.position.set(x, sampleDefaultTerrainHeight(x, z) + .025, z);

  grassDummy.rotation.set(
    0,
    random() * Math.PI,
    (random() - 0.5) * 0.25
  );

  const scale = 0.65 + random() * 1.2;
  grassDummy.scale.set(scale, scale, scale);
  grassDummy.updateMatrix();
  grass.setMatrixAt(i, grassDummy.matrix);
  const tint = new THREE.Color().setHSL(.23 + random() * .12, .48 + random() * .28, .34 + random() * .2);
  grass.setColorAt(i, tint);
}

grass.instanceMatrix.needsUpdate = true;
if (grass.instanceColor) grass.instanceColor.needsUpdate = true;
grass.frustumCulled = true;
grass.castShadow = false;
grass.receiveShadow = false;
scene.add(grass);

// Sparse low-poly wildflowers add the bright meadow accents from the reference art.
const flowerColors = [0xe75243, 0xf0d45b, 0xf4eee0, 0xb36bd4];
const flowerGeometry = new THREE.IcosahedronGeometry(.15, 0);
for (const flowerColor of flowerColors) {
  const flowerMaterial = new THREE.MeshStandardMaterial({ color: flowerColor, roughness: .8, flatShading: true });
  const flowerField = new THREE.InstancedMesh(flowerGeometry, flowerMaterial, 52);
  const flowerDummy = new THREE.Object3D();
  let placed = 0;
  while (placed < 52) {
    const x = (random() - .5) * 108;
    const z = 10 - random() * 170;
    if ((Math.abs(x) < 5 && z > -65 && z < 10) || Math.abs(z + 72) < 7 ||
        Math.hypot(x, z + 48) < 13 || Math.hypot(x + 27, z + 27) < 13 ||
        (x > 17 && x < 40 && z > -42 && z < -12)) continue;
    flowerDummy.position.set(x, sampleDefaultTerrainHeight(x, z) + .42, z);
    const scale = .62 + random() * .75;
    flowerDummy.scale.set(scale, scale, scale);
    flowerDummy.rotation.set(random() * .25, random() * Math.PI, random() * .2);
    flowerDummy.updateMatrix();
    flowerField.setMatrixAt(placed++, flowerDummy.matrix);
  }
  flowerField.instanceMatrix.needsUpdate = true;
  flowerField.castShadow = false;
  scene.add(flowerField);
}

function alignGrassToTerrain() {
  if (!importedWorld) return;
  let start = 0;
  const alignBatch = () => {
    const end = Math.min(start + 100, grassCount);
    for (let i = start; i < end; i++) {
      grass.getMatrixAt(i, grassDummy.matrix);
      grassDummy.matrix.decompose(grassDummy.position, grassDummy.quaternion, grassDummy.scale);
      const height = getTerrainHeight(grassDummy.position.x, grassDummy.position.z, 0);
      if (height !== null) grassDummy.position.y = height + .025;
      grassDummy.updateMatrix();
      grass.setMatrixAt(i, grassDummy.matrix);
    }
    grass.instanceMatrix.needsUpdate = true;
    start = end;
    if (start < grassCount) setTimeout(alignBatch, 0);
  };
  alignBatch();
}

// ---------- Mountains ----------
const mountainMaterial = new THREE.MeshStandardMaterial({
  color: 0x898778,
  roughness: 1,
  flatShading: true
});

for (let i = 0; i < 18; i++) {
  const radius = 7 + random() * 9;
  const height = 15 + random() * 18;
  const mountain = new THREE.Mesh(
    new THREE.ConeGeometry(radius, height, 7),
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

  const snowCap = new THREE.Mesh(
    new THREE.ConeGeometry(radius * .27, height * .24, 7),
    new THREE.MeshStandardMaterial({ color: 0xe6e7df, roughness: .95, flatShading: true })
  );
  snowCap.position.copy(mountain.position);
  snowCap.position.y += height * .39;
  snowCap.castShadow = true;
  scene.add(snowCap);
}

// Layered rock walls frame the meadow like a lost highland valley.
const cliffGeometry = new THREE.DodecahedronGeometry(1, 0);
const cliffMaterials = [0x918c7d, 0xaaa18d, 0x77796f, 0x6f7775].map(color =>
  new THREE.MeshStandardMaterial({ color, roughness: 1, flatShading: true })
);
for (const side of [-1, 1]) {
  for (let i = 0; i < 17; i++) {
    const z = 12 - i * 10.4;
    const width = 6 + random() * 4.5;
    const height = 9 + random() * 11;
    const cliff = new THREE.Mesh(cliffGeometry, cliffMaterials[Math.floor(random() * cliffMaterials.length)]);
    cliff.position.set(side * (56 + random() * 2.5), height * .42, z + (random() - .5) * 3);
    cliff.scale.set(width, height, 7 + random() * 6);
    cliff.rotation.set((random() - .5) * .18, random() * .5, (random() - .5) * .12);
    cliff.castShadow = false;
    cliff.receiveShadow = false;
    scene.add(cliff);
  }
}

// Faceted boulders and shrubs break up the broad meadow into readable low-poly biomes.
const boulderMaterials = [0x777b76, 0x999486, 0x676f70, 0xb0a48d].map(color =>
  new THREE.MeshStandardMaterial({ color, roughness: 1, flatShading: true })
);
for (let i = 0; i < 48; i++) {
  const x = (random() - .5) * 105;
  const z = 9 - random() * 175;
  if ((Math.abs(x) < 4 && z > -65 && z < 13) || (x > 16 && x < 38 && z < -15 && z > -39) || (x > -39 && x < -15 && z > -43 && z < -11) || Math.abs(z + 72) < 5) continue;
  const size = .35 + random() * 1.05;
  const rock = new THREE.Mesh(new THREE.DodecahedronGeometry(size, 0), boulderMaterials[Math.floor(random() * boulderMaterials.length)]);
  rock.position.set(x, sampleDefaultTerrainHeight(x, z) + size * .48, z);
  rock.rotation.set(random() * .5, random() * Math.PI, random() * .4);
  rock.scale.set(1 + random() * .6, .65 + random() * .55, .85 + random() * .5);
  rock.castShadow = true;
  rock.receiveShadow = true;
  scene.add(rock);
  environmentalRocks.push(rock);
  if (size > .95) obstacles.push({ x, z, radius: size * .8 });
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
    color: 0x287e8b,
    emissive: 0x0b252a,
    emissiveIntensity: .28,
    roughness: 0.24,
    metalness: 0.08,
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

// ---------- Forgotten hamlet ----------
const hamlet = new THREE.Group();
const wallMaterial = new THREE.MeshStandardMaterial({ color: 0x75634b, roughness: 1 });
const roofMaterial = new THREE.MeshStandardMaterial({ color: 0x3d3028, roughness: .95 });
const doorMaterial = new THREE.MeshStandardMaterial({ color: 0x38291e, roughness: 1 });
const windowMaterial = new THREE.MeshStandardMaterial({ color: 0xb88048, emissive: 0x4b2512, emissiveIntensity: .35 });

function makeCabin(x, z, scale = 1, rotation = 0) {
  const cabin = new THREE.Group();
  const walls = new THREE.Mesh(new THREE.BoxGeometry(3.6, 2.5, 3.2), wallMaterial);
  walls.position.y = 1.25;
  walls.castShadow = true;
  walls.receiveShadow = true;
  cabin.add(walls);

  for (const side of [-1, 1]) {
    const roofSide = new THREE.Mesh(new THREE.BoxGeometry(3.95, .16, 2.05), roofMaterial);
    roofSide.position.set(0, 2.55, side * .72);
    roofSide.rotation.x = side * .58;
    roofSide.castShadow = true;
    cabin.add(roofSide);
  }

  const door = new THREE.Mesh(new THREE.BoxGeometry(.75, 1.55, .12), doorMaterial);
  door.position.set(0, .78, 1.66);
  cabin.add(door);
  for (const wx of [-1.12, 1.12]) {
    const window = new THREE.Mesh(new THREE.BoxGeometry(.48, .55, .08), windowMaterial);
    window.position.set(wx, 1.55, 1.63);
    cabin.add(window);
  }
  const chimney = new THREE.Mesh(new THREE.BoxGeometry(.45, 1.1, .48), mats.ruin);
  chimney.position.set(.95, 2.9, -.72);
  chimney.castShadow = true;
  cabin.add(chimney);

  cabin.position.set(x, 0, z);
  cabin.rotation.y = rotation;
  cabin.scale.setScalar(scale);
  hamlet.add(cabin);
  obstacles.push({ x, z, radius: 2.15 * scale });
}

makeCabin(24, -20, 1.05, -.25);
makeCabin(31, -27, .85, .35);
makeCabin(22, -31, .75, .5);

for (let i = 0; i < 7; i++) {
  const post = new THREE.Mesh(new THREE.BoxGeometry(.18, .9, .18), mats.bark);
  post.position.set(27 + i * 1.15, .45, -34);
  post.castShadow = true;
  hamlet.add(post);
  if (i < 6) {
    const rail = new THREE.Mesh(new THREE.BoxGeometry(1.15, .12, .12), mats.bark);
    rail.position.set(27.58 + i * 1.15, .55, -34);
    hamlet.add(rail);
  }
  obstacles.push({ x: 27 + i * 1.15, z: -34, radius: .22 });
}

const hamletPath = new THREE.Mesh(new THREE.BoxGeometry(18, .08, 2.2), new THREE.MeshStandardMaterial({ color: 0x625643, roughness: 1 }));
hamletPath.position.set(18, .035, -24);
hamletPath.rotation.y = -.42;
hamletPath.receiveShadow = true;
hamlet.add(hamletPath);

const hamletRevival = new THREE.Group();
const hamletGuarded = new THREE.Group();
const villageLanternMaterial = new THREE.MeshStandardMaterial({ color: 0xffc46a, emissive: 0xff8a32, emissiveIntensity: 1.4 });
const villageWoodMaterial = new THREE.MeshStandardMaterial({ color: 0x6c5137, roughness: 1, flatShading: true });
for (const [x, z] of [[20, -22], [32, -31], [29, -20]]) {
  const pole = new THREE.Mesh(new THREE.CylinderGeometry(.07, .12, 2.6, 5), villageWoodMaterial);
  pole.position.set(x, 1.3, z);
  pole.castShadow = true;
  hamletRevival.add(pole);
  const lamp = new THREE.Mesh(new THREE.IcosahedronGeometry(.2, 0), villageLanternMaterial);
  lamp.position.set(x, 2.65, z);
  hamletRevival.add(lamp);
  const light = new THREE.PointLight(0xffad5c, .8, 11, 2);
  light.position.copy(lamp.position);
  hamletRevival.add(light);
}
for (const [x, z] of [[18, -33], [36, -35], [36, -18]]) {
  const trunk = new THREE.Mesh(new THREE.CylinderGeometry(.16, .24, 2.1, 5), villageWoodMaterial);
  trunk.position.set(x, 1.05, z);
  const crown = new THREE.Mesh(broadleafGeometry, treeLeafPalette[1]);
  crown.scale.set(1.55, 1.25, 1.45);
  crown.position.set(x, 2.55, z);
  trunk.castShadow = true;
  crown.castShadow = true;
  hamletRevival.add(trunk, crown);
}
for (const [x, z, color] of [[23, -18, 0xb04e43], [34, -24, 0xc09a52]]) {
  const banner = new THREE.Group();
  const staff = new THREE.Mesh(new THREE.CylinderGeometry(.055, .07, 3.5, 5), villageWoodMaterial);
  staff.position.y = 1.75;
  const cloth = new THREE.Mesh(new THREE.BoxGeometry(.95, 1.2, .09), new THREE.MeshStandardMaterial({ color, roughness: 1, flatShading: true }));
  cloth.position.set(.48, 2.65, 0);
  banner.add(staff, cloth);
  banner.position.set(x, 0, z);
  hamletGuarded.add(banner);
}
const villageWell = new THREE.Mesh(new THREE.CylinderGeometry(1.05, 1.2, .8, 8), mats.ruin);
villageWell.position.set(28, .4, -27);
hamletGuarded.add(villageWell);
hamletRevival.visible = false;
hamletGuarded.visible = false;
hamlet.add(hamletRevival, hamletGuarded);
scene.add(hamlet);
const hamletMarker = new THREE.Vector3(26, 0, -26);

const waystone = new THREE.Group();
const waystoneMaterial = new THREE.MeshStandardMaterial({ color: 0x83b3a1, emissive: 0x1f5146, emissiveIntensity: .55, flatShading: true });
const waystonePillar = new THREE.Mesh(new THREE.BoxGeometry(1.5, 4.4, 1.15), waystoneMaterial);
waystonePillar.position.y = 2.2;
waystonePillar.castShadow = true;
waystone.add(waystonePillar);
const waystoneCap = new THREE.Mesh(new THREE.DodecahedronGeometry(1.1, 0), waystoneMaterial);
waystoneCap.position.y = 4.6;
waystone.add(waystoneCap);
waystone.position.set(0, 0, -136);
scene.add(waystone);
obstacles.push({ x: 0, z: -136, radius: 1.4 });
const waystoneMarker = new THREE.Vector3(0, 0, -136);

// ---------- Colossal skeleton landmark ----------
const skeletonSite = new THREE.Group();
const boneMaterial = new THREE.MeshStandardMaterial({ color: 0xd5c8a6, roughness: .92, flatShading: true });
const boneShadeMaterial = new THREE.MeshStandardMaterial({ color: 0x9c9c77, roughness: 1, flatShading: true });
const socketMaterial = new THREE.MeshStandardMaterial({ color: 0x181c1a, roughness: 1 });

function boneCurve(points, radius = .16, material = boneMaterial) {
  const curve = new THREE.CatmullRomCurve3(points.map(([x, y, z]) => new THREE.Vector3(x, y, z)));
  const bone = new THREE.Mesh(new THREE.TubeGeometry(curve, 14, radius, 5, false), material);
  bone.castShadow = true;
  bone.receiveShadow = true;
  skeletonSite.add(bone);
  return bone;
}

boneCurve([[0, 3.2, 2], [0, 3.35, -1], [0, 3.05, -4], [0, 3.15, -7.5]], .34, boneShadeMaterial);
for (let i = 0; i < 8; i++) {
  const z = 1 - i * 1.12;
  for (const side of [-1, 1]) {
    boneCurve([[0, 3.35, z], [side * 1.45, 4.45, z - .15], [side * 2.8, 4.2, z - .35], [side * 3.55, 2.7, z - .65], [side * 3.2, .55, z - .9]], .19);
  }
  const joint = new THREE.Mesh(new THREE.DodecahedronGeometry(.38, 0), boneMaterial);
  joint.position.set(0, 3.2, z);
  joint.castShadow = true;
  skeletonSite.add(joint);
}

const pelvis = new THREE.Mesh(new THREE.TorusGeometry(1.55, .28, 6, 9), boneShadeMaterial);
pelvis.rotation.x = Math.PI / 2;
pelvis.position.set(0, 2.9, 2.3);
pelvis.scale.set(1.15, 1, .8);
pelvis.castShadow = true;
skeletonSite.add(pelvis);

const skull = new THREE.Mesh(new THREE.IcosahedronGeometry(1.55, 1), boneMaterial);
skull.scale.set(1.08, .92, 1.18);
skull.position.set(0, 3.35, -8.4);
skull.rotation.x = -.15;
skull.castShadow = true;
skeletonSite.add(skull);
const jaw = new THREE.Mesh(new THREE.BoxGeometry(1.65, .36, 1.15), boneShadeMaterial);
jaw.position.set(0, 2.35, -8.7);
jaw.castShadow = true;
skeletonSite.add(jaw);
for (const side of [-1, 1]) {
  const socket = new THREE.Mesh(new THREE.SphereGeometry(.48, 8, 6), socketMaterial);
  socket.position.set(side * .72, 3.45, -9.55);
  socket.scale.set(1, 1.05, .35);
  skeletonSite.add(socket);
  const fang = new THREE.Mesh(new THREE.ConeGeometry(.18, .55, 5), boneMaterial);
  fang.position.set(side * .42, 2.18, -9.1);
  fang.rotation.x = Math.PI;
  skeletonSite.add(fang);
}

boneCurve([[-2.7, 3.8, -.2], [-4.5, 3.6, 1.2], [-6.8, 2.6, 2.4]], .27, boneShadeMaterial);
boneCurve([[-6.8, 2.6, 2.4], [-7.5, 1.7, 3.2], [-8.2, .35, 3.6]], .22);
boneCurve([[2.8, 3.8, -.2], [4.7, 3.3, 1.4], [6.4, 2.2, 2.8]], .27, boneShadeMaterial);
boneCurve([[6.4, 2.2, 2.8], [7.2, 1.2, 3.2], [8, .28, 3.6]], .22);

skeletonSite.position.set(-27, 0, -27);
scene.add(skeletonSite);
const skeletonMarker = new THREE.Vector3(-27, 0, -27);
for (const z of [-1, -4, -7]) {
  obstacles.push({ x: -30.5, z: -27 + z, radius: .6 });
  obstacles.push({ x: -23.5, z: -27 + z, radius: .6 });
}
obstacles.push({ x: -27, z: -35.5, radius: 1.3 });

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

const dungeonArena = new THREE.Group();
const cryptStone = new THREE.MeshStandardMaterial({ color: 0x454957, roughness: .94, flatShading: true });
const cryptStoneLight = new THREE.MeshStandardMaterial({ color: 0x656575, roughness: .92, flatShading: true });
const cryptFloorMats = [
  new THREE.MeshStandardMaterial({ color: 0x343943, roughness: 1, flatShading: true }),
  new THREE.MeshStandardMaterial({ color: 0x3c414c, roughness: 1, flatShading: true }),
  new THREE.MeshStandardMaterial({ color: 0x41434c, roughness: 1, flatShading: true })
];
const cryptWood = new THREE.MeshStandardMaterial({ color: 0x493326, roughness: 1, flatShading: true });
const cryptIron = new THREE.MeshStandardMaterial({ color: 0x292d36, metalness: .55, roughness: .72, flatShading: true });
const cryptTorchMat = new THREE.MeshStandardMaterial({ color: 0xe77a32, emissive: 0xff4b12, emissiveIntensity: 2.2, roughness: .6 });

function cryptBox(w, h, d, material, x, y, z, rotationY = 0) {
  const mesh = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), material);
  mesh.position.set(x, y, z);
  mesh.rotation.y = rotationY;
  mesh.castShadow = true;
  mesh.receiveShadow = true;
  dungeonArena.add(mesh);
  return mesh;
}

// A rectangular, walkable crypt hall with worn modular flagstones.
cryptBox(30, .45, 36, cryptStone, 0, -.28, 0);
const floorTiles = cryptFloorMats.map(material => {
  const mesh = new THREE.InstancedMesh(new THREE.PlaneGeometry(2.48, 2.48), material, 44);
  mesh.receiveShadow = true;
  dungeonArena.add(mesh);
  return { mesh, count: 0 };
});
const floorTransform = new THREE.Object3D();
for (let x = -13; x <= 13; x += 2.6) {
  for (let z = -16; z <= 14; z += 2.6) {
    const tileIndex = Math.abs(Math.round(x * 2 + z)) % floorTiles.length;
    const tile = floorTiles[tileIndex];
    floorTransform.position.set(x, -.025, z);
    floorTransform.rotation.set(-Math.PI / 2, 0, (Math.round(x + z) % 2) * .006);
    floorTransform.updateMatrix();
    tile.mesh.setMatrixAt(tile.count++, floorTransform.matrix);
  }
}
for (const tile of floorTiles) tile.mesh.count = tile.count;

// Thick walls leave a broad doorway in the south wall beside the portal.
cryptBox(30, 6.5, 1.2, cryptStone, 0, 3.1, -17.4);
cryptBox(1.2, 6.5, 34, cryptStone, -14.4, 3.1, 0);
cryptBox(1.2, 6.5, 34, cryptStone, 14.4, 3.1, 0);
cryptBox(12, 6.5, 1.2, cryptStone, -9, 3.1, 17.4);
cryptBox(7, 6.5, 1.2, cryptStone, 11.5, 3.1, 17.4);
cryptBox(2.4, 6.5, 1.5, cryptStoneLight, 1.4, 3.1, 17.2);
cryptBox(2.4, 6.5, 1.5, cryptStoneLight, 7.2, 3.1, 17.2);

// Raised side galleries, parapets and broad stair runs give the room its dungeon silhouette.
for (const side of [-1, 1]) {
  cryptBox(4.8, .5, 27, cryptStoneLight, side * 11.5, 3.05, -1.6);
  cryptBox(4.8, .55, .55, cryptStone, side * 11.5, 3.55, -1.6);
  for (let z = -12; z <= 10; z += 3.7) cryptBox(.35, .75, .35, cryptStoneLight, side * 9.25, 3.65, z);
  const stairDirection = side === -1 ? 1 : -1;
  for (let step = 0; step < 9; step++) {
    const x = side * (8.5 + step * .48);
    const y = .2 + step * .35;
    const z = 9 - step * 1.25;
    cryptBox(3.5, .42, 1.35, step % 3 ? cryptStone : cryptStoneLight, x, y, z, stairDirection * .035);
  }
}

// Pillars frame the gallery and remain solid in the movement collision map.
for (const x of [-8.6, 8.6]) {
  for (const z of [-12, -4, 4, 12]) {
    const pillar = new THREE.Mesh(new THREE.CylinderGeometry(.78, .98, 5.7, 6), cryptStoneLight);
    pillar.position.set(x, 2.85, z);
    pillar.castShadow = true;
    pillar.receiveShadow = true;
    dungeonArena.add(pillar);
    cryptBox(1.55, .42, 1.55, cryptStone, x, 5.75, z);
    obstacles.push({ x: -28 + x, z: -87 + z, radius: 1.02 });
  }
}

// Broken barricades, toppled furniture, rubble and storage make the hall feel abandoned.
for (const [x, z, yaw] of [[-5.4, -10, .26], [5.7, -7.6, -.34], [-9.7, 7.4, .48], [9.4, 7.8, -.55]]) {
  cryptBox(3.4, .24, .22, cryptWood, x, .3, z, yaw);
  cryptBox(2.2, .2, .2, cryptWood, x + .8, .53, z + .45, -yaw * 1.5);
  for (const legX of [-1.2, 1.2]) cryptBox(.2, .75, .2, cryptWood, x + legX, -.08, z);
}
for (const [x, z] of [[-11, -8], [-10, 9], [10, -11], [11, 4], [-5, 13], [5, -14]]) {
  const crate = cryptBox(1.15, 1.05, 1.15, cryptWood, x, .53, z, (x + z) * .07);
  cryptBox(1.22, .12, 1.22, cryptIron, x, 1.02, z, (x + z) * .07);
  crate.rotation.z = ((x * z) % 3) * .045;
}
for (let i = 0; i < 12; i++) {
  const x = Math.sin(i * 12.8) * 11.6;
  const z = Math.cos(i * 7.4) * 13.4;
  const rubble = new THREE.Mesh(new THREE.DodecahedronGeometry(.25 + (i % 3) * .11, 0), i % 2 ? cryptStone : cryptStoneLight);
  rubble.position.set(x, .13, z);
  rubble.scale.y = .65;
  rubble.castShadow = true;
  dungeonArena.add(rubble);
}

// Amber wall torches and a cool blue vault light echo the reference lighting.
for (const [x, z, color] of [[-13, -10, 0xff873d], [13, -10, 0x559dff], [-13, 10, 0xff7834], [13, 10, 0x559dff]]) {
  cryptBox(.3, 1.25, .3, cryptIron, x * .91, 2.35, z);
  const flame = new THREE.Mesh(new THREE.ConeGeometry(.24, .8, 6), cryptTorchMat);
  flame.position.set(x * .91, 3.35, z);
  dungeonArena.add(flame);
  const light = new THREE.PointLight(color, color === 0xff873d || color === 0xff7834 ? 2.1 : 1.5, 15, 2);
  light.position.set(x * .91, 3.7, z);
  dungeonArena.add(light);
}

// Low altar and a second stair at the far end anchor the boss chamber.
cryptBox(5.8, .45, 4.2, cryptStoneLight, 0, .28, -5.4);
cryptBox(4.2, .65, 3.2, cryptStone, 0, .72, -5.4);
cryptBox(2.6, .55, 1.8, cryptStoneLight, 0, 1.32, -5.4);
for (let i = 0; i < 5; i++) cryptBox(5, .34, 1.1, cryptStoneLight, 0, .18 + i * .32, -12 + i * 1.15);

dungeonArena.position.set(-28, 0, -87);
dungeonArena.visible = false;
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

const dungeonCorruption = new THREE.Group();
const curseCrystalMaterial = new THREE.MeshStandardMaterial({ color: 0x34244e, emissive: 0x5a2b91, emissiveIntensity: 1.15, roughness: .45, flatShading: true });
const cleansedGrowth = new THREE.Group();
const cleansedRockMaterial = new THREE.MeshStandardMaterial({ color: 0x74866a, roughness: 1, flatShading: true });
for (let i = 0; i < 7; i++) {
  const angle = i / 7 * Math.PI * 2;
  const radius = 5.2 + (i % 3) * 1.1;
  const crystal = new THREE.Mesh(new THREE.ConeGeometry(.45 + (i % 3) * .13, 1.4 + (i % 2) * .8, 5), curseCrystalMaterial);
  crystal.position.set(Math.cos(angle) * radius, .6, Math.sin(angle) * radius);
  crystal.rotation.z = (i % 2 ? 1 : -1) * .16;
  crystal.castShadow = true;
  dungeonCorruption.add(crystal);
  const plant = new THREE.Mesh(broadleafGeometry, treeLeafPalette[i % 3]);
  plant.scale.set(.5, .42, .48);
  plant.position.set(Math.cos(angle) * radius, .38, Math.sin(angle) * radius);
  cleansedGrowth.add(plant);
  const pebble = new THREE.Mesh(new THREE.DodecahedronGeometry(.45, 0), cleansedRockMaterial);
  pebble.position.set(Math.cos(angle) * (radius + 1), .24, Math.sin(angle) * (radius + 1));
  pebble.scale.y = .6;
  cleansedGrowth.add(pebble);
}
dungeonCorruption.position.set(dungeonPortal.position.x, 0, dungeonPortal.position.z);
cleansedGrowth.position.copy(dungeonCorruption.position);
cleansedGrowth.visible = false;
scene.add(dungeonCorruption, cleansedGrowth);

function updateLivingWorld() {
  const nextStage = state.dungeonCleared ? 2 : state.questStage >= 2 ? 1 : 0;
  state.settlementStage = nextStage;
  hamletRevival.visible = nextStage >= 1;
  hamletGuarded.visible = nextStage >= 2;
  windowMaterial.emissiveIntensity = nextStage === 0 ? .12 : nextStage === 1 ? .62 : 1.05;
  dungeonCorruption.visible = !state.dungeonCleared;
  cleansedGrowth.visible = Boolean(state.dungeonCleared);
  portalRing.material.emissiveIntensity = state.dungeonCleared ? .35 : 1.8;
  portalCore.material.color.setHex(state.dungeonCleared ? 0x28645b : 0x1b0d2e);
}

const dungeonChests = [];
const chestWood = new THREE.MeshStandardMaterial({ color: 0x704927, roughness: .8, flatShading: true });
const chestIron = new THREE.MeshStandardMaterial({ color: 0xb7a16e, metalness: .62, roughness: .45 });
function makeDungeonChest(id, x, z, requiresClear = false) {
  const chest = new THREE.Group();
  const base = new THREE.Mesh(new THREE.BoxGeometry(1.25, .72, .82), chestWood);
  base.position.y = .38;
  base.castShadow = true;
  chest.add(base);
  const lidPivot = new THREE.Group();
  lidPivot.position.set(0, .72, -.37);
  const lid = new THREE.Mesh(new THREE.BoxGeometry(1.25, .44, .82), chestWood);
  lid.position.set(0, .2, .37);
  lid.castShadow = true;
  lidPivot.add(lid);
  chest.add(lidPivot);
  const lock = new THREE.Mesh(new THREE.BoxGeometry(.18, .24, .08), chestIron);
  lock.position.set(0, .58, .45);
  chest.add(lock);
  for (const side of [-1, 1]) {
    const band = new THREE.Mesh(new THREE.BoxGeometry(.12, .86, .88), chestIron);
    band.position.x = side * .39;
    band.position.y = .47;
    chest.add(band);
  }
  chest.position.set(x, 0, z);
  chest.userData = { id, requiresClear, lidPivot, opened: false };
  chest.visible = false;
  scene.add(chest);
  dungeonChests.push(chest);
}

makeDungeonChest('crypt_cache', -22.1, -85.2);
makeDungeonChest('warden_treasure', -33.6, -88.4, true);

function updateDungeonChests() {
  for (const chest of dungeonChests) {
    chest.visible = dungeonActive && !state.dungeonLoot[chest.userData.id] &&
      (!chest.userData.requiresClear || state.dungeonCleared);
  }
}

function openDungeonChest(chest) {
  if (!chest.visible || chest.userData.opened) return false;
  const id = chest.userData.id;
  if (chest.userData.requiresClear && !state.dungeonCleared) {
    toast('ผนึกสมบัติจะคลายเมื่อผู้คุมถ้ำพ่ายแพ้');
    return true;
  }
  chest.userData.opened = true;
  audio.play('chest');
  chest.userData.lidPivot.rotation.x = -.9;
  state.dungeonLoot[id] = true;
  if (id === 'crypt_cache') {
    systems.addItem('darkShard', 3);
    systems.addItem('ore', 2);
    state.gold += 80;
    toast('ค้นพบหีบสุสาน · ได้เศษเงามืด แร่ และทอง');
  } else {
    systems.addItem('bossRelic', 1);
    systems.addItem('essence', 3);
    state.crystals += 3;
    toast('พบสมบัติผู้คุม · ได้เศษโบราณ แก่นวิญญาณ และผลึก');
  }
  updateHud();
  return true;
}

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

const horse = new THREE.Group();
const horseCoat = new THREE.MeshStandardMaterial({ color: 0x704832, roughness: .92, flatShading: true });
const horseMane = new THREE.MeshStandardMaterial({ color: 0x2b211d, roughness: 1, flatShading: true });
const horseGear = new THREE.MeshStandardMaterial({ color: 0x9b7749, roughness: .8, flatShading: true });
const horseBody = new THREE.Mesh(new THREE.CapsuleGeometry(.45, .85, 4, 8), horseCoat);
horseBody.rotation.x = Math.PI / 2;
horseBody.position.y = 1.18;
horseBody.castShadow = true;
horse.add(horseBody);
const horseNeck = new THREE.Mesh(new THREE.CapsuleGeometry(.25, .66, 4, 7), horseCoat);
horseNeck.rotation.x = .55;
horseNeck.position.set(0, 1.55, .62);
horseNeck.castShadow = true;
horse.add(horseNeck);
const horseHead = new THREE.Mesh(new THREE.CapsuleGeometry(.21, .42, 4, 7), horseCoat);
horseHead.rotation.x = .35;
horseHead.position.set(0, 1.78, 1.05);
horse.add(horseHead);
const horseMuzzle = new THREE.Mesh(new THREE.SphereGeometry(.22, 8, 6), horseCoat);
horseMuzzle.scale.set(1.15, .7, .8);
horseMuzzle.position.set(0, 1.62, 1.4);
horse.add(horseMuzzle);
const horseManeMesh = new THREE.Mesh(new THREE.ConeGeometry(.3, .9, 5), horseMane);
horseManeMesh.position.set(0, 1.95, .48);
horseManeMesh.rotation.x = -.35;
horse.add(horseManeMesh);
const horseTail = new THREE.Mesh(new THREE.ConeGeometry(.19, .8, 5), horseMane);
horseTail.position.set(0, .95, -.86);
horseTail.rotation.x = -.35;
horse.add(horseTail);
const saddle = new THREE.Mesh(new THREE.BoxGeometry(.76, .18, .75), horseGear);
saddle.position.set(0, 1.58, -.02);
horse.add(saddle);
const horseLegPivots = [];
for (const side of [-1, 1]) {
  for (const front of [-1, 1]) {
    const leg = new THREE.Group();
    leg.position.set(side * .27, .95, front * .55);
    const upper = new THREE.Mesh(new THREE.CylinderGeometry(.11, .075, .7, 6), horseCoat);
    upper.position.y = -.33;
    const hoof = new THREE.Mesh(new THREE.BoxGeometry(.19, .18, .24), horseMane);
    hoof.position.set(0, -.72, .03);
    leg.add(upper, hoof);
    horse.add(leg);
    horseLegPivots.push(leg);
  }
}
horse.position.set(1.5, 0, 6);
scene.add(horse);
state.horsePosition = [horse.position.x, horse.position.y, horse.position.z];
let campGroup = null;
let campFireLight = null;
let campClock = 0;
let campSmoke = null;
let footstepTimer = 0;

function updateHorse(dt, moving) {
  if (!state.mounted) return;
  horse.position.set(player.position.x, player.position.y, player.position.z);
  horse.rotation.y = player.rotation.y;
  const gait = moving ? Math.sin(performance.now() * .018) * .42 : Math.sin(performance.now() * .002) * .035;
  horseLegPivots.forEach((leg, index) => { leg.rotation.x = moving ? (index % 2 ? -gait : gait) : 0; });
  state.horsePosition = [horse.position.x, horse.position.y, horse.position.z];
}

function toggleHorseMount() {
  if (state.mounted) {
    state.mounted = false;
    body.position.y = 0;
    horse.position.set(player.position.x + 1.2, player.position.y, player.position.z);
    state.horsePosition = [horse.position.x, horse.position.y, horse.position.z];
    toast('ลงจากม้าแล้ว');
    return;
  }
  if (player.position.distanceTo(horse.position) > 4) return false;
  state.mounted = true;
  body.position.y = 1.35;
  horse.position.set(player.position.x, player.position.y, player.position.z);
  state.horsePosition = [horse.position.x, horse.position.y, horse.position.z];
  toast('ขึ้นม้าแล้ว · กด Shift เพื่อควบม้าเร็ว');
  return true;
}

function buildCamp(position) {
  if (campGroup) scene.remove(campGroup);
  campGroup = new THREE.Group();
  const canvas = new THREE.MeshStandardMaterial({ color: 0x786045, roughness: 1, side: THREE.DoubleSide });
  const firewood = new THREE.MeshStandardMaterial({ color: 0x4a3020, roughness: 1 });
  const tent = new THREE.Mesh(new THREE.ConeGeometry(1.25, 1.85, 4), canvas);
  tent.position.set(-1.35, .92, -.25);
  tent.rotation.y = Math.PI / 4;
  tent.castShadow = true;
  campGroup.add(tent);
  for (let i = 0; i < 3; i++) {
    const log = new THREE.Mesh(new THREE.CylinderGeometry(.09, .09, 1.05, 6), firewood);
    log.position.set(.7, .18 + i * .04, .1);
    log.rotation.z = Math.PI / 2;
    log.rotation.y = i * Math.PI / 3;
    campGroup.add(log);
    const stone = new THREE.Mesh(new THREE.DodecahedronGeometry(.22, 0), mats.stone);
    const angle = i / 8 * Math.PI * 2;
    stone.position.set(.7 + Math.cos(angle) * .72, .16, .1 + Math.sin(angle) * .72);
    campGroup.add(stone);
  }
  const flame = new THREE.Mesh(new THREE.ConeGeometry(.28, .85, 5), new THREE.MeshBasicMaterial({ color: 0xff8b39 }));
  flame.position.set(.7, .62, .1);
  campGroup.add(flame);
  const smokeGeometry = new THREE.BufferGeometry();
  const smokePositions = new Float32Array(18 * 3);
  for (let i = 0; i < 18; i++) {
    smokePositions[i * 3] = (random() - .5) * .35;
    smokePositions[i * 3 + 1] = .8 + random() * 2.2;
    smokePositions[i * 3 + 2] = (random() - .5) * .35;
  }
  smokeGeometry.setAttribute('position', new THREE.BufferAttribute(smokePositions, 3));
  campSmoke = new THREE.Points(smokeGeometry, new THREE.PointsMaterial({ color: 0xaaa9a5, size: .19, transparent: true, opacity: .3, depthWrite: false }));
  campSmoke.position.set(.7, .3, .1);
  campGroup.add(campSmoke);
  campFireLight = new THREE.PointLight(0xff923f, 2.1, 13);
  campFireLight.position.set(.7, 1.1, .1);
  campGroup.add(campFireLight);
  campGroup.position.set(position[0], position[1] || 0, position[2]);
  scene.add(campGroup);
}

function placeCamp() {
  if (dungeonActive) return toast('ตั้งแคมป์ไม่ได้ภายในดันเจียน');
  if (state.campPosition && campGroup) return toast('ค่ายของคุณตั้งไว้แล้ว · เดินทางกลับไปใช้ได้');
  if (systems.getCount('wood') < 3 || systems.getCount('herb') < 1) {
    return toast('ต้องใช้ไม้ 3 ชิ้นและสมุนไพร 1 ชิ้นเพื่อตั้งแคมป์');
  }
  systems.addItem('wood', -3);
  systems.addItem('herb', -1);
  state.campPosition = [player.position.x, player.position.y, player.position.z];
  buildCamp(state.campPosition);
  toast('ตั้งแคมป์แล้ว · กด E ที่กองไฟเพื่อพักหรือทำอาหาร');
}

function openCampPanel() {
  closePanels('camp');
  $('#camp-panel').classList.remove('hidden');
  const meat = systems.getCount('meat');
  const herb = systems.getCount('herb');
  $('#camp-status').textContent = `เนื้อสด ${meat} · สมุนไพร ${herb} · อาหารบัฟ ${Math.ceil(state.foodBuff / 60)} นาที`;
}

function restAtCamp() {
  if (!campGroup || player.position.distanceTo(campGroup.position) > 5) return toast('ต้องอยู่ใกล้ค่ายเพื่อพักผ่อน');
  if (dungeonActive || enemies.some(enemy => enemy.userData.alive && player.position.distanceTo(enemy.position) < 16)) return toast('บริเวณนี้ยังไม่ปลอดภัยพอสำหรับพัก');
  state.hp = state.maxHp;
  state.stamina = 100;
  state.mana = state.maxMana;
  state.dayTime = .25;
  dayNightMode = 'auto';
  settings.dayNightMode = 'auto';
  systems.rememberAction('campRest');
  updateHud();
  openCampPanel();
  toast('พักผ่อนจนรุ่งเช้า · ฟื้นฟูพลังแล้ว');
}

function cookAtCamp() {
  if (!campGroup || player.position.distanceTo(campGroup.position) > 5) return toast('ต้องอยู่ใกล้ค่ายเพื่อทำอาหาร');
  if (systems.getCount('meat') < 1 || systems.getCount('herb') < 1) return toast('ต้องใช้เนื้อสด 1 ชิ้นและสมุนไพร 1 ชิ้น');
  systems.addItem('meat', -1);
  systems.addItem('herb', -1);
  state.foodBuff = 180;
  systems.rememberAction('cookedMeal');
  state.hp = Math.min(state.maxHp, state.hp + 25);
  updateHud();
  openCampPanel();
  toast('ปรุงอาหารสำเร็จ · เพิ่มพลังโจมตี 3 นาที');
}

// ---------- Terrain Height Query ----------


function getTerrainHeight(x, z, referenceY) {
  if (!importedWorld || !importedWorldBounds) {
    return sampleDefaultTerrainHeight(x, z);
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

  let crown = null;
  if (type === 'boss' || type === 'dungeonBoss') {
    crown = new THREE.Mesh(
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
    crown,
    healthBar,
    healthFill,
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
  ['deer', 18, -17]
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
  staticLandmarks: [
    { position: tower.position, color: '#c9a86a', size: 4.5, name: 'หอคอย', region: 'tower' },
    { position: ruinGroup.position, color: '#9d9fb4', size: 4, name: 'ซากวิหาร', region: 'ruins' },
    { position: hamletMarker, color: '#dfa96f', size: 4, name: 'หมู่บ้านร้าง', region: 'hamlet' },
    { position: waystoneMarker, color: '#83dbc0', size: 4, name: 'ศิลานำทางแดนไกล', region: 'far_wilds' },
    { position: skeletonMarker, color: '#ded4ad', size: 5, name: 'ซากยักษ์โบราณ', region: 'forest' },
    { position: shrine.position, color: '#d6a8f0', size: 3.5, name: 'ศาลเจ้า', region: 'tower' },
    { position: dungeonPortal.position, color: '#b57ce8', size: 5, name: 'ประตูถ้ำต้องสาป', region: 'dungeon' },
    { position: new THREE.Vector3(-28, 0, -87), color: '#7cd9e8', size: 4, name: 'ถ้ำต้องสาป', region: 'dungeon' }
  ],
  regions: [
    { id: 'tower', name: 'หอคอยแห่งผู้สูญหาย', center: tower.position, radius: 10 },
    { id: 'ruins', name: 'วิหารโบราณ', center: ruinGroup.position, radius: 12 },
    { id: 'river', name: 'ริมแม่น้ำโบราณ', center: new THREE.Vector3(0, 0, -72), radius: 18 },
    { id: 'forest', name: 'ป่าต้องสาป', center: new THREE.Vector3(-12, 0, -30), radius: 25 },
    { id: 'hamlet', name: 'หมู่บ้านร้าง', center: hamletMarker, radius: 14 },
    { id: 'far_wilds', name: 'แดนไกล', center: waystoneMarker, radius: 24 },
    { id: 'dungeon', name: 'ถ้ำต้องสาป', center: new THREE.Vector3(-28, 0, -87), radius: 14 },
    { id: 'wilderness', name: 'ทุ่งรกร้าง', center: new THREE.Vector3(0, 0, 0), radius: 25 }
  ]
});
updateLivingWorld();

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
let wetness = 0;
const puddleMaterial = new THREE.MeshStandardMaterial({ color: 0x607e8d, metalness: .12, roughness: .22, transparent: true, opacity: 0, depthWrite: false });
const puddles = new THREE.InstancedMesh(new THREE.CircleGeometry(1, 10), puddleMaterial, 34);
puddles.geometry.rotateX(-Math.PI / 2);
const puddleTransform = new THREE.Object3D();
for (let i = 0; i < 34; i++) {
  const x = (random() - .5) * 94;
  const z = (random() - .5) * 150;
  puddleTransform.position.set(x, (getTerrainHeight(x, z, 0) ?? 0) + .035, z);
  puddleTransform.rotation.y = random() * Math.PI;
  puddleTransform.scale.set(.8 + random() * 2.2, 1, .5 + random() * 1.2);
  puddleTransform.updateMatrix();
  puddles.setMatrixAt(i, puddleTransform.matrix);
}
scene.add(puddles);


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

const airCount = isTouch ? 48 : 96;
const airGeometry = new THREE.BufferGeometry();
const airPositions = new Float32Array(airCount * 3);
const airData = Array.from({ length: airCount }, () => ({ x: (random() - .5) * 42, y: .3 + random() * 7, z: (random() - .5) * 42, phase: random() * Math.PI * 2 }));
airGeometry.setAttribute('position', new THREE.BufferAttribute(airPositions, 3));
const airMotes = new THREE.Points(airGeometry, new THREE.PointsMaterial({ color: 0xe5d7ad, size: .055, transparent: true, opacity: .28, depthWrite: false }));
scene.add(airMotes);
const leafMotes = new THREE.Points(airGeometry.clone(), new THREE.PointsMaterial({ color: 0x78964b, size: .12, transparent: true, opacity: .75, depthWrite: false }));
scene.add(leafMotes);

function updateAirEffects(dt) {
  const raining = settings.weather && (weatherType === 'rain' || weatherType === 'storm');
  airMotes.visible = !raining && !dungeonActive;
  leafMotes.visible = !dungeonActive;
  const activeCount = Math.floor(airCount * qualityEffectScale);
  airMotes.geometry.setDrawRange(0, activeCount);
  leafMotes.geometry.setDrawRange(0, Math.floor(activeCount * .25));
  for (let i = 0; i < activeCount; i++) {
    const mote = airData[i];
    const t = clock.elapsedTime + mote.phase;
    const x = player.position.x + mote.x + Math.sin(t * .3) * .55;
    const y = mote.y + Math.sin(t * .7) * .12;
    const z = player.position.z + mote.z - t * .08 % 42;
    airPositions.set([x, y, z], i * 3);
  }
  airMotes.geometry.attributes.position.needsUpdate = true;
  leafMotes.geometry.attributes.position.array.set(airPositions);
  leafMotes.geometry.attributes.position.needsUpdate = true;
}
    

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
    if (e.code === 'Space') input.jumpPressed = true;
    if (e.code === 'KeyF') input.attackPressed = true;
    if (e.code === 'KeyE') input.interactPressed = true;
    if (e.code === 'KeyQ') usePotion();
    if (e.code === 'KeyC') input.dodgePressed = true;
    if (e.code === 'KeyR') systems.castSpell();
    if (e.code === 'KeyG') placeCamp();
    if (e.code === 'KeyB') systems.toggleShop();
    if (e.code === 'KeyM') toggleMapPanel();
    if (e.code === 'Escape') closePanels();
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

const clock = new THREE.Clock();
const cameraTarget = new THREE.Vector3();
const desiredCamera = new THREE.Vector3();


function saveGame(showMessage = true, slot = currentSlot) {
  if (typeof showMessage !== 'boolean') showMessage = true;
  currentSlot = slot;

  const payload = {
    version: 6,
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
    Object.assign(state, data.state);
    player.position.set(...data.player);
    dungeonActive = Boolean(data.dungeonActive);
    dungeonArena.visible = dungeonActive;

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
    state.dungeonStarted = Boolean(data.state.dungeonStarted);
    state.dungeonRewarded = Boolean(data.state.dungeonRewarded);
    state.dungeonLoot = data.state.dungeonLoot && typeof data.state.dungeonLoot === 'object' ? data.state.dungeonLoot : {};
    state.mounted = Boolean(data.state.mounted);
    state.foodBuff = Math.max(0, Number(data.state.foodBuff) || 0);
    state.campPosition = Array.isArray(data.state.campPosition) && data.state.campPosition.length === 3 && data.state.campPosition.every(Number.isFinite) ? data.state.campPosition : null;
    state.horsePosition = Array.isArray(data.state.horsePosition) && data.state.horsePosition.length === 3 && data.state.horsePosition.every(Number.isFinite) ? data.state.horsePosition : [1.5, 0, 6];
    horse.position.set(...state.horsePosition);
    body.position.y = state.mounted ? 1.35 : 0;
    if (state.mounted) horse.position.set(player.position.x, player.position.y, player.position.z);
    if (state.campPosition) buildCamp(state.campPosition);

    systems.restoreState();
    systems.deserializeWorld(data.systems);
    updateLivingWorld();

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
      settings.postProcessing = Boolean(data.settings.postProcessing);
      if (Number.isFinite(Number(data.settings.sensitivity))) {
        settings.sensitivity = THREE.MathUtils.clamp(
          Number(data.settings.sensitivity), 1, 12
        );
      }
      settings.weather = Boolean(data.settings.weather);
      settings.sound = Boolean(data.settings.sound);
      settings.fpsLimit = ['auto', '30', '45', '60'].includes(String(data.settings.fpsLimit)) ? String(data.settings.fpsLimit) : 'auto';
      if (['auto', 'day', 'night'].includes(data.settings.dayNightMode)) {
        settings.dayNightMode = data.settings.dayNightMode;
      }
      settings.mobileLayout = data.settings.mobileLayout === 'left' ? 'left' : 'right';
    }

    dayNightMode = settings.dayNightMode || 'auto';
    const slotSelect = $('#save-slot');
    if (slotSelect) slotSelect.value = String(slot);

    applySettings();
    updateHud();
    refreshEquipmentUI();
    refreshSkillUI();
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
  const firstClear = !state.dungeonCleared;
  state.dungeonCleared = true;
  if (firstClear) {
    systems.rememberAction('dungeonClear');
    updateLivingWorld();
  }
  if (!state.dungeonRewarded) {
    state.dungeonRewarded = true;
    state.crystals += 6;
    state.gold += 180;
    gainXp(250);
    audio.play('quest');
      toast('ดันเจียนเคลียร์ · คำสาปสลาย หมู่บ้านเริ่มปลอดภัย · ค้นหาหีบสมบัติแล้วกลับไปที่ประตู');
  }
  updateDungeonChests();
  updateHud();
}

function defeatEnemy(enemy) {
  if (!enemy.userData.alive) return;

  const type = enemy.userData.type;
  enemy.userData.hp = 0;
  enemy.userData.alive = false;
  scene.remove(enemy);

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

function attack() {
  if (attackCooldown > 0) return;

  const weapon = weaponStats[state.weapon] || weaponStats.sword;
  attackCooldown = weapon.cooldown;
  attackAnimTimer = .24;
  audio.play('attack');
  let hit = false;

  for (const enemy of enemies) {
    if (!enemy.userData.alive) continue;

    const dx = player.position.x - enemy.position.x;
    const dz = player.position.z - enemy.position.z;
    const d = Math.hypot(dx, dz);

    if (d < weapon.range) {
      let damage = weapon.damage + state.attackBonus;
      if (state.foodBuff > 0) damage += .65;
      if (state.characterClass === 'warrior') damage *= 1.12;
      if (state.characterClass === 'ranger' && state.weapon === 'bow') damage *= 1.2 + (state.skills.precision || 0) * .15;
      damage += Number((state.equipmentUpgrades || {})[state.weapon] || 0) * .35;
      enemy.userData.hp -= damage;
      systems.impact(enemy.position, weapon.element === 'ice' ? 0x9bdcff : weapon.element === 'earth' ? 0xd3bd91 : 0xffbb8b);
      if (weapon.element) {
        const status = weapon.element === 'ice' ? 'slow' : weapon.element === 'earth' ? 'stun' : 'wind_mark';
        enemy.userData.statusEffect = { type: status, time: status === 'stun' ? .8 : 3 };
        toast(`${weapon.name} · ${status === 'slow' ? 'แช่แข็ง' : status === 'stun' ? 'ชะงัก' : 'ทำเครื่องหมายลม'}`);
      }
      hit = true;
      const baseScale = enemy.userData.baseScale || 1;
      enemy.scale.setScalar(baseScale * .92);

      setTimeout(() => enemy.scale.setScalar(baseScale), 100);

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

function setDungeonEnemies(active) {
  for (const enemy of dungeonEnemies) {
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
  dungeonArena.visible = true;
  state.mounted = false;
  body.position.y = 0;
  if (!state.dungeonCleared) setDungeonEnemies(true);
  state.dungeonStarted = true;
  const entranceY = getTerrainHeight(dungeonPortal.position.x, dungeonPortal.position.z + 2, 0) ?? 0;
  player.position.set(dungeonPortal.position.x, entranceY, dungeonPortal.position.z + 2);
  updateDungeonChests();
  audio.play('boss');
  toast(state.dungeonCleared
    ? 'กลับเข้าสู่ดันเจียน · สมบัติที่ยังไม่พบรออยู่ในห้องลึก'
    : 'เข้าสู่ดันเจียน · สำรวจซากและค้นหาหีบสมบัติ');
}

function interact() {
  if (systems.interact()) return;

  if (player.position.distanceTo(horse.position) < 4) {
    toggleHorseMount();
    return;
  }

  if (campGroup && player.position.distanceTo(campGroup.position) < 4) {
    openCampPanel();
    return;
  }

  if (dungeonActive) {
    const chest = dungeonChests.find(item => item.visible && player.position.distanceTo(item.position) < 3.2);
    if (chest && openDungeonChest(chest)) return;
  }

  const portalDistance = Math.hypot(
    player.position.x - dungeonPortal.position.x,
    player.position.z - dungeonPortal.position.z
  );

  if (portalDistance < 5) {
    if (dungeonActive) {
      if (state.dungeonCleared) {
        dungeonActive = false;
        dungeonArena.visible = false;
        player.position.set(dungeonPortal.position.x, player.position.y, dungeonPortal.position.z + 2);
        updateDungeonChests();
        toast('ออกจากดันเจียนแล้ว · เดินทางต่อได้');
      } else {
        toast('ทางออกถูกผนึก · กำจัดผู้คุมถ้ำก่อน');
      }
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
      systems.rememberAction('mainQuestComplete');
      updateLivingWorld();
      toast('ภารกิจสำเร็จ · หมู่บ้านเริ่มฟื้นฟู · ได้รับยาฟื้นฟู');
    } else {
      toast('พลังบางอย่างยังปกป้องซากโบราณอยู่');
    }

    updateHud();
    return;
  }

  toast('ไม่มีสิ่งใดให้โต้ตอบใกล้ตัว');
}

// ---------- Day and Night ----------

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

  
moon.intensity = .72 * (1 - sun);
sunLight.intensity = 2.45 * sun;
hemi.intensity = .78 + .88 * sun;
ambient.intensity = .3 + .19 * sun;
moonGlow.intensity = .34 * (1 - sun);
const sunAngle = (state.dayTime - .25) * Math.PI * 2;
sunLight.position.set(player.position.x + Math.cos(sunAngle) * 48, player.position.y + 34 + sun * 12, player.position.z + Math.sin(sunAngle) * 48);
sunLight.target.position.copy(player.position);
moon.position.set(player.position.x - Math.cos(sunAngle) * 42, player.position.y + 34 + (1 - sun) * 10, player.position.z - Math.sin(sunAngle) * 42);
moon.target.position.copy(player.position);
hemi.color.setRGB(.33 + .30 * sun, .43 + .42 * sun, .69 + .25 * sun);
hemi.groundColor.setRGB(.13 + .19 * sun, .18 + .2 * sun, .24 + .04 * sun);
sunLight.color.setRGB(1, .77 + .17 * sun, .57 + .38 * sun);
  
  // Use only one directional shadow light at a time
  moon.castShadow = sun < 0.5;
  sunLight.castShadow = sun >= 0.5;

  // Keep ground visible at night
  ground.material.color.copy(groundNightColor)
    .lerp(groundDayColor, sun);
  ground.material.roughness = 1 - wetness * .5;
  ground.material.metalness = wetness * .08;
  


  const twilight = THREE.MathUtils.smoothstep(sun, 0, .2) * (1 - THREE.MathUtils.smoothstep(sun, .2, .55));
  const daylight = new THREE.Color(0x172540).lerp(new THREE.Color(0x9ed6e8), sun);
  daylight.lerp(new THREE.Color(0xe0a16a), twilight * .42);

sky.visible = true;
sky.material.uniforms.uSun.value = sun;
scene.background.copy(daylight);
scene.fog.color.copy(daylight);
fireflies.visible = sun < 0.65;
fireflyMaterial.opacity = 0.75 * (1 - sun);
// Dynamic Dark Fantasy Fog
const nightFog = 1 - sun;
  const weatherFog = weatherType === 'fog' ? .009 : weatherType === 'storm' ? .0068 : 0;
  scene.fog.density = THREE.MathUtils.lerp(
  0.00135 + weatherFog * .45,
  0.0032 + weatherFog,
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
let weatherType = 'clear';
let weatherCycleTimer = 38 + random() * 28;
let weatherCycleTime = 0;
let lightningTimer = 0;
let worldEventTimer = 55 + random() * 35;
let worldEventObject = null;
let worldEventData = null;

function setWeather(type) {
  weatherType = type;
  audio.setWeather(settings.weather, type);
  const labels = { clear: 'อากาศแจ่มใส', rain: 'ฝนตก', fog: 'หมอกลงจัด', storm: 'พายุฝนฟ้าคะนอง' };
  toast(`สภาพอากาศเปลี่ยน: ${labels[type]}`);
  if (type === 'storm') lightningTimer = 2 + random() * 4;
}

function updateWorldEvents(dt) {
  weatherCycleTimer -= dt;
  if (weatherCycleTimer <= 0) {
    const choices = ['clear', 'rain', 'fog', 'storm'];
    let next = choices[Math.floor(random() * choices.length)];
    if (next === weatherType) next = choices[(choices.indexOf(next) + 1) % choices.length];
    setWeather(next);
    weatherCycleTimer = 45 + random() * 65;
  }

  if (weatherType === 'storm') {
    lightningTimer -= dt;
    if (lightningTimer <= 0) {
      lightningTimer = 4 + random() * 8;
      audio.play('thunder');
      sunLight.intensity = 5.5;
      setTimeout(() => { sunLight.intensity = Math.max(.1, 2.2 * Math.max(0, Math.sin(state.dayTime * Math.PI * 2))); }, 100);
    }
  }

  if (!worldEventObject) {
    worldEventTimer -= dt;
    if (worldEventTimer <= 0) {
      worldEventTimer = 100 + random() * 80;
      const events = [
        { name: 'เศษแก่นวิญญาณตกจากฟ้า', item: 'essence', color: 0x76d9ef },
        { name: 'สมุนไพรเรืองแสงผลิบาน', item: 'herb', color: 0x77e58c },
        { name: 'แร่โบราณโผล่พ้นดิน', item: 'ore', color: 0xc5d2dc }
      ];
      worldEventData = events[Math.floor(random() * events.length)];
      const x = player.position.x + (random() - .5) * 18;
      const z = player.position.z - 7 - random() * 10;
      const y = getTerrainHeight(x, z, 0) || 0;
      worldEventObject = new THREE.Mesh(new THREE.OctahedronGeometry(.55, 0), new THREE.MeshStandardMaterial({ color: worldEventData.color, emissive: worldEventData.color, emissiveIntensity: 1.4 }));
      worldEventObject.position.set(x, y + .8, z);
      worldEventObject.userData.baseY = y + .8;
      scene.add(worldEventObject);
      toast(`เหตุการณ์โลก: ${worldEventData.name} · ตามหาแสงที่ปรากฏ`);
    }
  } else {
    worldEventObject.rotation.y += dt * 1.4;
    worldEventObject.position.y = worldEventObject.userData.baseY + Math.sin(performance.now() * .002) * .18;
    if (player.position.distanceTo(worldEventObject.position) < 1.8) {
      systems.addItem(worldEventData.item, worldEventData.item === 'herb' ? 3 : 1);
      const itemNames = { herb: 'สมุนไพร', essence: 'แก่นวิญญาณ', ore: 'แร่เหล็ก' };
      toast(`พบเหตุการณ์: ${worldEventData.name} · ได้รับ${itemNames[worldEventData.item] || worldEventData.item}`);
      scene.remove(worldEventObject);
      worldEventObject.geometry.dispose();
      worldEventObject.material.dispose();
      worldEventObject = null;
      worldEventData = null;
    }
  }
}

function updateWeather(dt) {
  const rainingNow = settings.weather && (weatherType === 'rain' || weatherType === 'storm');
  wetness = THREE.MathUtils.clamp(wetness + dt * (rainingNow ? .055 : -.004), 0, 1);
  puddleMaterial.opacity = wetness * .32;
  puddles.visible = wetness > .025;
  if (!settings.weather) {
    rain.visible = false;
    return;
  }

  


  rain.visible = weatherType === 'rain' || weatherType === 'storm';
  rain.position.set(player.position.x, player.position.y, player.position.z);
  if (!rain.visible) return;
  const p = rainGeometry.attributes.position;

  const activeRainCount = Math.floor(rainCount * qualityEffectScale);
  for (let i = 0; i < activeRainCount; i++) {
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
  if (!fireflies.visible) return;
  const p = fireflyGeometry.attributes.position;

  const activeFireflyCount = Math.floor(fireflyCount * qualityEffectScale);
  for (let i = 0; i < activeFireflyCount; i++) {
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
    id: 'dungeon',
    name: 'ถ้ำต้องสาป',
    isInside: () => Math.hypot(
      player.position.x + 28,
      player.position.z + 87
    ) < 13
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

function updateBossPhase(data) {
  const ratio = Math.max(0, data.hp / data.maxHp);
  const phase = ratio > .65 ? 1 : ratio > .3 ? 2 : 3;
  if (phase === data.phase) return;

  data.phase = phase;
  data.phaseMultiplier = phase === 1 ? 1 : phase === 2 ? 1.18 : 1.42;
  data.healthFill.material.color.setHex(
    phase === 3 ? 0xff3030 : phase === 2 ? 0xff9a3d : 0xff4fd8
  );
  if (data.crown) data.crown.material.emissiveIntensity = 1.4 + phase * .6;

  if (phase > 1) {
    toast(`${data.name} เข้าเฟส ${phase} · โจมตีรุนแรงขึ้น`);
    audio.play('boss');
  }
}

function updateWorld(dt) {
  updateRegionDiscovery();
  updateDungeonChests();

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
    if (!enemy.userData.alive) continue;

    const data = enemy.userData;
    const stats = data.stats;
    const dx = player.position.x - enemy.position.x;
    const dz = player.position.z - enemy.position.z;
    const distance = Math.hypot(dx, dz);
    if (distance > 105) {
      enemy.visible = false;
      continue;
    }
    enemy.visible = true;
    const isBoss = data.type === 'boss' || data.type === 'dungeonBoss';

    if (isBoss) updateBossPhase(data);

    if (data.statusEffect) {
      data.statusEffect.time -= dt;
      if (data.statusEffect.time <= 0) data.statusEffect = null;
    }
    const wildlifeFactor = data.kind === 'animal'
      ? (data.type === 'wolf' ? (state.dayTime < .25 || state.dayTime > .75 ? 1.25 : .68) : (state.dayTime > .22 && state.dayTime < .78 ? 1.15 : .72))
      : 1;
    const weatherFactor = weatherType === 'storm' && data.kind === 'animal' ? .8 : 1;
    const speed = stats.speed * data.phaseMultiplier * wildlifeFactor * weatherFactor * (data.statusEffect?.type === 'slow' ? .55 : data.statusEffect?.type === 'stun' ? 0 : 1);
    const attackDamage = stats.damage * data.phaseMultiplier;

    const hpRatio = Math.max(0, data.hp / data.maxHp);
    data.healthFill.scale.x = hpRatio;
    data.healthFill.position.x = -(1 - hpRatio) * 0.46;

    data.healthBar.quaternion.copy(camera.quaternion);
    data.healthBar.visible = distance < stats.aggro + 2;

    data.cooldown = Math.max(0, data.cooldown - dt);

    if (data.kind === 'animal' && data.type === 'deer') {
      if (distance < stats.aggro) {
        const away = new THREE.Vector3(-dx, 0, -dz).normalize();
        enemy.position.addScaledVector(away, dt * speed);
        enemy.rotation.y = Math.atan2(away.x, away.z);
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
      } else if (data.cooldown <= 0 && invulnerabilityTimer <= 0 && data.statusEffect?.type !== 'stun') {
        const armor = armorStats[state.armor] || armorStats.leather;
        const incomingDamage = attackDamage * (1 - Math.min(.85, armor.reduction + ((state.equipmentUpgrades || {})[`armor:${state.armor}`] || 0) * .025));
        state.hp = Math.max(0, state.hp - incomingDamage);
        data.cooldown = stats.cooldown;
        hurtAnimTimer = .3;
        audio.play('hit');
        systems.impact(player.position, 0xff9b83);
        audio.play('enemy');
        toast(`${data.name}โจมตีคุณ`);

        if (state.hp <= 0) {
          state.hp = state.maxHp;
          const respawnY = getTerrainHeight(0, 3, 0) ?? 0;
          player.position.set(0, respawnY, 3);
          state.mounted = false;
          body.position.y = 0;
          if (dungeonActive) {
            dungeonActive = false;
            dungeonArena.visible = false;
            setDungeonEnemies(false);
            state.dungeonStarted = false;
            updateDungeonChests();
          }
          toast('คุณกลับมาที่จุดพัก');
        }

        updateHud();
      }
    } else {
      const t = performance.now() * 0.0005 + data.homeZ;
      enemy.position.x = data.homeX + Math.sin(t) * 1.2;
      enemy.position.z = data.homeZ + Math.cos(t * 0.7) * 0.8;
    }

    data.terrainCheckTimer = (data.terrainCheckTimer || 0) + dt;
    if (data.terrainCheckTimer >= .18) {
      data.terrainCheckTimer = 0;
      const terrainY = getTerrainHeight(enemy.position.x, enemy.position.z, data.baseY);
      enemy.position.y = terrainY === null ? data.baseY : terrainY;
    }
  }
}

function updateDistanceLod(dt) {
  lodTimer += dt;
  if (lodTimer < .4) return;
  lodTimer = 0;
  for (const tree of environmentalTrees) {
    const distance = Math.hypot(tree.position.x - camera.position.x, tree.position.z - camera.position.z);
    tree.visible = distance < 105;
    const crowns = tree.userData.crowns;
    if (crowns) crowns.forEach((crown, index) => { crown.visible = distance < 52 || index === 0; });
  }
  for (const rock of environmentalRocks) {
    const distance = Math.hypot(rock.position.x - camera.position.x, rock.position.z - camera.position.z);
    rock.visible = distance < 90;
  }
}

// ---------- Graphics Settings ----------
function applySettings() {
  sensitivity = Number(settings.sensitivity) * .001;

  const pixelRatioCap = settings.quality === 'high' ? (isTouch ? 1.4 : 1.75)
    : settings.quality === 'low' ? (isTouch ? .8 : .95) : (isTouch ? 1.05 : 1.3);
  const ratio = Math.min(devicePixelRatio || 1, pixelRatioCap);

  renderer.setPixelRatio(ratio);
  renderer.shadowMap.enabled = settings.quality !== 'low';
  renderer.shadowMap.type = settings.quality === 'high' ? THREE.PCFSoftShadowMap : THREE.PCFShadowMap;
  const shadowSize = settings.quality === 'high' ? (isTouch ? 1024 : 1536)
    : settings.quality === 'low' ? 512 : 768;
  moon.shadow.mapSize.setScalar(shadowSize);
  sunLight.shadow.mapSize.setScalar(shadowSize);
  const shadowExtent = settings.quality === 'high' ? (isTouch ? 42 : 36)
    : settings.quality === 'low' ? 56 : 48;
  for (const light of [moon, sunLight]) {
    Object.assign(light.shadow.camera, {
      left: -shadowExtent, right: shadowExtent,
      top: shadowExtent, bottom: -shadowExtent,
      near: .5, far: 150
    });
    light.shadow.camera.updateProjectionMatrix();
  }
  grass.count = settings.quality === 'high' ? grassCount
    : settings.quality === 'low' ? Math.min(grassCount, isTouch ? 700 : 1200)
      : Math.min(grassCount, isTouch ? 1200 : 2400);
  clouds.forEach((cloud, index) => { cloud.visible = settings.quality !== 'low' || index < 4; });
  qualityEffectScale = settings.quality === 'high' ? 1 : settings.quality === 'low' ? .3 : .65;
  rain.geometry.setDrawRange(0, Math.floor(rainCount * qualityEffectScale));
  fireflies.geometry.setDrawRange(0, Math.floor(fireflyCount * qualityEffectScale));
  const fpsSelect = $('#fps-limit');
  if (fpsSelect) fpsSelect.value = settings.fpsLimit;
  const selectedFps = settings.fpsLimit;
  targetFps = selectedFps === 'auto'
    ? (isTouch ? (settings.quality === 'high' ? 60 : settings.quality === 'low' ? 30 : 40) : settings.quality === 'low' ? 45 : 60)
    : THREE.MathUtils.clamp(Number(selectedFps) || 45, 30, 60);

  settings.weather = Boolean(settings.weather);
  settings.sound = Boolean(settings.sound);
  settings.postProcessing = Boolean(settings.postProcessing);

  audio.setEnabled(settings.sound);
  settings.music = settings.music !== false;
  audio.setMusicEnabled(settings.music);
  audio.setWeather(settings.weather, weatherType);

  const postFxToggle = $('#postfx-toggle');
  if (postFxToggle) {
    postFxToggle.checked = settings.postProcessing;
    postFxToggle.disabled = settings.quality === 'low';
  }
  if (settings.postProcessing && settings.quality !== 'low') {
    createPostProcessing();
    const effectPixelRatio = Math.min(ratio, isTouch ? .78 : 1.0);
    composer.setPixelRatio(effectPixelRatio);
    composer.setSize(innerWidth, innerHeight);
    bloomPass.strength = settings.quality === 'high' ? (isTouch ? .17 : .28) : (isTouch ? .08 : .15);
    bloomPass.radius = .42;
    bloomPass.threshold = .86;
    vignettePass.uniforms.strength.value = settings.quality === 'high' ? .19 : .12;
  } else {
    disposePostProcessing();
  }

  $('#quality').value = settings.quality;
  if (fpsSelect) fpsSelect.value = settings.fpsLimit;
  $('#sensitivity').value = String(settings.sensitivity);
  $('#rain-toggle').checked = settings.weather;
  const layoutSelect = $('#mobile-layout');
  if (layoutSelect) layoutSelect.value = settings.mobileLayout;
  $('#mobile-controls').classList.toggle('actions-left', settings.mobileLayout === 'left');
  const soundToggle = $('#sound-toggle');
  if (soundToggle) soundToggle.checked = settings.sound;
  const musicToggle = $('#music-toggle');
  if (musicToggle) musicToggle.checked = settings.music;
}

// ---------- Main Update ----------
function update(dt) {
    autoSaveTimer += dt;

  if (autoSaveTimer >= 30) {
    saveGame(false);
    autoSaveTimer = 0;
  }
  state.foodBuff = Math.max(0, (Number(state.foodBuff) || 0) - dt);
  if (campFireLight && campGroup) {
    campClock += dt;
    campFireLight.intensity = 1.8 + Math.sin(campClock * 9) * .25 + Math.sin(campClock * 17) * .12;
    const smoke = campSmoke?.geometry.attributes.position;
    if (smoke) {
      for (let i = 0; i < smoke.count; i++) {
        const phase = (campClock * .22 + i / smoke.count) % 1;
        smoke.array[i * 3 + 1] = phase * 2.8;
        smoke.array[i * 3] = Math.sin(campClock * .7 + i) * phase * .32;
        smoke.array[i * 3 + 2] = Math.cos(campClock * .55 + i) * phase * .24;
      }
      smoke.needsUpdate = true;
    }
  }
  
  let mx = input.x;
  let my = input.y;

  if (keys.KeyA || keys.ArrowLeft) mx -= 1;
  if (keys.KeyD || keys.ArrowRight) mx += 1;
  if (keys.KeyW || keys.ArrowUp) my -= 1;
  if (keys.KeyS || keys.ArrowDown) my += 1;

  const len = Math.hypot(mx, my);
  const moving = len > .08;
  footstepTimer = Math.max(0, footstepTimer - dt);
  if (moving && footstepTimer <= 0 && state.hp > 0) {
    footstepTimer = state.mounted ? .38 : keys.ShiftLeft || keys.ShiftRight ? .31 : .48;
    const onPath = Math.abs(player.position.x - (player.position.z * .23 + 1)) < 2.2;
    audio.playFootstep(dungeonActive ? 'stone' : wetness > .3 ? 'wet' : onPath ? 'dirt' : 'grass');
  }

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
    } else if (state.stamina < 20) {
      toast('พละกำลังไม่เพียงพอสำหรับหลบหลีก');
    }
  }

  if (dodgeTimer > 0) {
    const moveX = dodgeDirection.x * 8.5 * dt;
    const moveZ = dodgeDirection.z * 8.5 * dt;
    const canDodgeTo = (x, z) => (!dungeonActive || (x >= -40.5 && x <= -15.5 && z >= -102.5 && z <= -71.5)) && obstacles.every(obstacle => {
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
    const speed = state.mounted ? (canRun ? 13.5 : 9.0) : (canRun ? 7.5 : 4.0);
    const moveX = wx * speed * dt;
    const moveZ = wz * speed * dt;
    const playerRadius = 0.55;

    const canMoveTo = (x, z) => (!dungeonActive || (x >= -40.5 && x <= -15.5 && z >= -102.5 && z <= -71.5)) && obstacles.every(obstacle => {
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
updateHorse(dt, moving);

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

  player.position.x = THREE.MathUtils.clamp(player.position.x, -65, 65);
  player.position.z = THREE.MathUtils.clamp(player.position.z, -160, 12);

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
    player.position.y + (state.mounted ? 2.15 : 1.25),
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

  ui.hint.textContent = '';

  updateDayNight(dt);
  const sunLevel = dayNightMode === 'day' ? 1 : dayNightMode === 'night' ? 0 : Math.max(0, Math.sin(state.dayTime * Math.PI * 2));
  const position = player.position;
  const inVillage = position.x > 14 && position.x < 43 && position.z > -44 && position.z < -12;
  const inForest = position.x < -10 && position.z > -58 && position.z < -12;
  const inRiver = Math.abs(position.z + 71) < 9;
  const biome = dungeonActive ? 'dungeon' : inVillage ? 'village' : inRiver ? 'river' : inForest ? 'forest' : 'meadow';
  const nearCampfire = Boolean(campGroup && position.distanceTo(campGroup.position) < 18);
  audio.setEnvironment(biome, sunLevel < .2, nearCampfire);
  const inCombat = enemies.some(enemy => enemy.userData.alive && position.distanceTo(enemy.position) < 16);
  audio.setMusicMode(inCombat ? 'battle' : dungeonActive ? 'dungeon' : inVillage ? 'village' : 'explore');
  updateClouds(dt);
  updateWeather(dt);
  updateWorldEvents(dt);
  updateDistanceLod(dt);
  updateFireflies(dt);
  updateAirEffects(dt);
  updateWorld(dt);
  systems.update(dt, yaw);

  const portalHintDistance = Math.hypot(
    player.position.x - dungeonPortal.position.x,
    player.position.z - dungeonPortal.position.z
  );

  if (portalHintDistance < 5) {
    ui.hint.textContent = dungeonActive
      ? (state.dungeonCleared ? 'กด E / ใช้ เพื่อออกจากดันเจียน' : 'กำจัดผู้คุมถ้ำให้หมดก่อนออกไป')
      : 'กด E / ใช้เพื่อเข้าถ้ำต้องสาป';
  } else if (player.position.distanceTo(horse.position) < 4) {
    ui.hint.textContent = state.mounted ? 'กด E / ใช้ เพื่อลงจากม้า' : 'กด E / ใช้ เพื่อขี่ม้า · กด Shift ควบม้า';
  } else if (campGroup && player.position.distanceTo(campGroup.position) < 4) {
    ui.hint.textContent = 'กด E / ใช้ เพื่อพักผ่อนหรือปรุงอาหาร';
  } else if (player.position.distanceTo(shrine.position) < 5) {
    ui.hint.textContent = 'กด E / ใช้ เพื่อโต้ตอบ';
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
  if (except !== 'camp') $('#camp-panel').classList.add('hidden');
  if (except !== 'shop') systems.closeShop();
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
  audio.play('ui');
  closePanels('settings');
  ui.settings.classList.remove('hidden');
});

$('#settings-close').addEventListener('click', () => {
  audio.play('ui');
  closePanels();
});

$('#camp').addEventListener('click', placeCamp);
$('#camp-rest').addEventListener('click', restAtCamp);
$('#camp-cook').addEventListener('click', cookAtCamp);
$('#camp-close').addEventListener('click', () => closePanels());

$('#quality').addEventListener('change', (e) => {
  settings.quality = e.target.value;
  applySettings();
});

$('#fps-limit').addEventListener('change', (e) => {
  settings.fpsLimit = e.target.value;
  applySettings();
});

$('#postfx-toggle').addEventListener('change', (e) => {
  settings.postProcessing = e.target.checked;
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

$('#sound-toggle').addEventListener('change', (e) => {
  settings.sound = e.target.checked;
  applySettings();
  if (settings.sound) audio.play('pickup');
});

$('#music-toggle').addEventListener('change', (e) => {
  settings.music = e.target.checked;
  applySettings();
});

$('#mobile-layout').addEventListener('change', (e) => {
  settings.mobileLayout = e.target.value === 'left' ? 'left' : 'right';
  $('#mobile-controls').classList.toggle('actions-left', settings.mobileLayout === 'left');
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
  const opening = !ui.shop.classList.contains('hidden');
  closePanels(opening ? 'shop' : null);
});

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
document.querySelectorAll('[data-class]').forEach((button) => button.addEventListener('click', () => {
  state.characterClass = button.dataset.class;
  document.querySelectorAll('[data-class]').forEach((item) => item.classList.toggle('selected', item === button));
  toast(`เลือกสายอาชีพ: ${button.textContent}`);
}));

// ---------- Screen Resize / Rotation ----------
function resizeGame() {
  const width = Math.max(1, window.innerWidth);
  const height = Math.max(1, window.innerHeight);

  camera.aspect = width / height;
  camera.updateProjectionMatrix();

  renderer.setSize(width, height);

  const ratioCap = settings.quality === 'high' ? (isTouch ? 1.4 : 1.75)
    : settings.quality === 'low' ? (isTouch ? .8 : .95) : (isTouch ? 1.05 : 1.3);
  const ratio = Math.min(devicePixelRatio || 1, ratioCap);

  renderer.setPixelRatio(ratio);
  if (composer) {
    composer.setPixelRatio(Math.min(ratio, isTouch ? .78 : 1.0));
    composer.setSize(width, height);
  }
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
$('#mobile-controls').classList.toggle('actions-left', settings.mobileLayout === 'left');
if (saveSlotSelect) saveSlotSelect.value = String(currentSlot);
applySettings();
updateHud();
refreshEquipmentUI();
refreshSkillUI();
resizeGame();

let lastFrameTimestamp = 0;
function animate(timestamp = performance.now()) {
  requestAnimationFrame(animate);

  const frameInterval = 1000 / targetFps;
  if (timestamp - lastFrameTimestamp < frameInterval) return;
  lastFrameTimestamp = timestamp - ((timestamp - lastFrameTimestamp) % frameInterval);

  const dt = Math.min(clock.getDelta(), .05);
  update(dt);
  if (composer) composer.render();
  else renderer.render(scene, camera);
}

animate();
