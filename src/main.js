
import * as THREE from 'three';
import { CURRENT_SAVE_VERSION, parseSaveWithBackup } from './single-player-save.js';
import { createDungeonProgression } from './dungeon-progression.js';
import { getBossPhaseCombatProfile, getBossOpeningMultiplier, getBossAttackPattern, getBossCombo } from './boss-combat.js';
import { buildStaggerState, getElementMultiplier, getLowHealthBossSpecial, getWeaknessHint } from './boss-weaknesses.js';
import { claimBossReward } from './boss-rewards.js';
import { createTownEventSystem } from './town-events.js';
import { createWorldEventSystem } from './world-events.js';
import { getExplorationJournal, explorationTotals } from './exploration-journal.js';
import { installLandscapePrompt } from './mobile-orientation.js';
import { createMultiplayerSession } from './multiplayer/session.js';
import { createMultiplayerUI } from './multiplayer/ui.js';
import { createPlayerCharacter } from './player-character.js';
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
import { createFrontierWorld } from './frontierWorld.js';
import { createCityWorld } from './cities.js';
import { createCinematic } from './cinematic.js';
import { createAdaptiveResolution } from './adaptive-resolution.js';
import { createPerformanceMonitor } from './performance-monitor.js';
import { createPrologue } from './prologue.js';
import { createCutsceneDirector } from './cutscene-director.js';
import { createCombatFeedback } from './combat-feedback.js';
import { createCameraShake } from './camera-shake.js';
import { createVegetationManager } from './vegetation/vegetation-manager.js';
import { REGIONS, LANDMARKS, WORLD_BOUNDS, regionAt } from './worldData.js';
import './style.css';
import './hud-theme.css';
import './hud-world.css';

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
  hudGold: $('#hud-gold'), hudCrystal: $('#hud-crystal'),
  sideQuest: $('#side-quest-text')
};

const comboUI = {
  chip: $('#combo-chip'),
  count: $('#combo-count'),
  tier: $('#combo-tier'),
  bonus: $('#combo-bonus'),
  fill: $('#combo-fill'),
  best: $('#combo-best'),
  layer: $('#float-layer')
};

const companionUI = {
  chip: $('#companion-chip'),
  name: $('#companion-name'),
  role: $('#companion-role'),
  order: $('#companion-order'),
  dismiss: $('#companion-dismiss'),
  info: $('#companion-info')
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
  mobileLayout: 'right',
  perfMonitor: false
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
  plate: { name: 'เกราะจาน', reduction: .55, rarity: 'rare' },
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
  },
  knight: {
    name: 'อัศวิน',
    desc: 'โจมตีระยะประชิด +25% · ลดความเสียหาย 15% · HP สูงสุด +20',
    melee: 1.25,
    damageReduction: .15,
    hpBonus: 20
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
  upgrades: {},
  bounties: [],
  dayTime: 0.72, weatherTime: 0,
  weatherOn: true, dead: false,
  discoveredRegions: [],
  discoveredSecrets: [],
  reputation: {},
  flags: {},
  waypoints: [],
  explored: [],
  cartographer: 0,
  dungeonCleared: false,
  dungeons: {},
  townEvents: null,
  worldEvents: null,
  respawnPoint: null,
  comboBest: 0,
  companion: null,
  companionOrder: 'follow'
};

let toastTimer = 0;

function toast(message) {
  ui.toast.textContent = message;
  ui.toast.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => ui.toast.classList.remove('show'), 2200);
}

const townEventSystem = createTownEventSystem(state, toast);
const worldEventSystem = createWorldEventSystem(state, (event) => {
  if (event.reward.gold) state.gold += event.reward.gold;
  if (event.reward.crystals) state.crystals += event.reward.crystals;
  toast(`พบเหตุการณ์: ${event.title} · ${event.message}`);
  updateHud();
});

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
  if (ui.hudGold) ui.hudGold.textContent = String(state.gold);
  if (ui.hudCrystal) ui.hudCrystal.textContent = String(state.crystals);
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
  const bounty = (state.bounties || []).find((entry) => entry && !entry.done);
  if (bounty) {
    return `${bounty.title} · ${Math.min(bounty.count || 0, bounty.target)}/${bounty.target}`;
  }
  return '';
}

const GEAR_DAMAGE_PER_TIER = .10;
const GEAR_ARMOR_PER_TIER = .04;

function weaponDamageMultiplier() {
  return 1 + GEAR_DAMAGE_PER_TIER * systems.gearTier('weapon');
}

function armorReduction() {
  const armor = armorStats[state.armor] || armorStats.leather;
  return Math.min(.85, armor.reduction + GEAR_ARMOR_PER_TIER * systems.gearTier('armor'));
}

function renderUpgradeUI() {
  for (const slot of ['weapon', 'armor']) {
    const info = $(`#upgrade-${slot}-info`);
    const button = $(`#upgrade-${slot}`);
    if (!info && !button) continue;

    const tier = systems.gearTier(slot);
    const cost = systems.gearUpgradeCost(slot);
    const item = slot === 'armor'
      ? (armorStats[state.armor] || armorStats.leather)
      : (weaponStats[state.weapon] || weaponStats.sword);
    const gain = slot === 'armor'
      ? `ลดดาเมจ +${Math.round(GEAR_ARMOR_PER_TIER * 100)}%/ระดับ`
      : `พลังโจมตี +${Math.round(GEAR_DAMAGE_PER_TIER * 100)}%/ระดับ`;

    if (info) {
      info.textContent = cost
        ? `${item.name} +${tier} · ${cost.gold} ทอง · แร่ ${cost.ore} · ผลึก ${cost.crystals} (${gain})`
        : `${item.name} +${tier} · ระดับสูงสุด`;
    }
    if (button) {
      button.disabled = !cost || !systems.owns(slot === 'armor' ? state.armor : state.weapon);
      button.textContent = cost ? `อัปเกรด +${tier + 1}` : 'เต็มระดับ';
    }
  }
}

function refreshEquipmentUI() {
  const weapon = weaponStats[state.weapon] || weaponStats.sword;
  const armor = armorStats[state.armor] || armorStats.leather;
  const weaponTier = systems.gearTier('weapon');
  const armorTier = systems.gearTier('armor');

  const weaponLabel = $('#equipped-weapon');
  const armorLabel = $('#equipped-armor');
  const attackLabel = $('#attack-stat');
  const defenseLabel = $('#defense-stat');
  const skillLabel = $('#skill-points');

  const tierText = (tier) => (tier > 0 ? ` +${tier}` : '');

  if (weaponLabel) {
    weaponLabel.textContent = `${weapon.name}${tierText(weaponTier)} [${RARITY[weapon.rarity || 'common'].name}]`;
    weaponLabel.style.color = RARITY[weapon.rarity || 'common'].color;
  }
  if (armorLabel) {
    armorLabel.textContent = `${armor.name}${tierText(armorTier)} [${RARITY[armor.rarity || 'common'].name}]`;
    armorLabel.style.color = RARITY[armor.rarity || 'common'].color;
  }
  if (attackLabel) {
    attackLabel.textContent = ((weapon.damage + state.attackBonus) * weaponDamageMultiplier())
      .toFixed(1);
  }
  if (defenseLabel) defenseLabel.textContent = `${Math.round(armorReduction() * 100)}%`;
  if (skillLabel) skillLabel.textContent = String(state.skillPoints);

  const comboBestLabel = $('#combo-best');
  if (comboBestLabel) comboBestLabel.textContent = String(state.comboBest || 0);

  renderUpgradeUI();

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

  rebuildPlayerAtlas();
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

  const previous = classDefs[state.classId];
  if (previous && previous.hpBonus) {
    state.maxHp = Math.max(100, state.maxHp - previous.hpBonus);
  }

  state.classId = state.classId === id ? null : id;

  if (state.classId && def.hpBonus) {
    state.maxHp += def.hpBonus;
    state.hp = Math.min(state.maxHp, state.hp + def.hpBonus);
  }

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
const combatFeedback = createCombatFeedback(scene, { mobile: isTouch });
const cameraShake = createCameraShake({ mobile: isTouch });
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
renderer.toneMappingExposure = 1.38;
renderer.setPixelRatio(Math.min(devicePixelRatio || 1, isTouch ? 1.35 : 1.75));
renderer.setSize(innerWidth, innerHeight);
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
renderer.domElement.style.touchAction = 'none';
renderer.domElement.setAttribute('aria-label', 'Game view');
mount.appendChild(renderer.domElement);

const cinematic = createCinematic({ renderer, scene, camera, touch: isTouch });
const adaptiveResolution = createAdaptiveResolution({ enabled: isTouch });
const performanceMonitor = createPerformanceMonitor(renderer, { enabled: settings.perfMonitor });

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

const CAVE_FOG_COLOR = new THREE.Color(0x100c12);

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
let frontierWorld = null;
let cityWorld = null;
let pendingCitySave = null;
function moveEnemySafely(enemy, dx, dz) {
  const radius = enemy.userData.kind === 'animal' ? .42 : .5;
  const blocked = (x,z) => worldStreamer.blocked(x,z,radius) ||
    frontierWorld?.blocked(x,z,radius) || cityWorld?.blocked(x,z,radius);
  const stuck = blocked(enemy.position.x,enemy.position.z);
  const can = (x,z) => stuck || !blocked(x,z);
  const nx=enemy.position.x+dx, nz=enemy.position.z+dz;
  if(can(nx,enemy.position.z)) enemy.position.x=nx;
  if(can(enemy.position.x,nz)) enemy.position.z=nz;
}
const vegetation = createVegetationManager({
  scene,
  getHeight: (x, z) => frontierWorld?.getHeight(x, z) ?? worldStreamer.getHeight(x, z),
  getRegion: (x, z) => worldStreamer.getRegion(x, z),
  mobile: isTouch
});
let fallbackHidden = false;
worldStreamer.init().then((ok) => {
  if (!ok) {
    cityWorld = createCityWorld({
      scene,
      getHeight: (x, z) => worldStreamer.getHeight(x, z) ?? 0,
      mobile: isTouch
    });
    if (pendingCitySave) { cityWorld.restoreWorld?.(pendingCitySave); pendingCitySave = null; }
    toast('ใช้แผนที่ต้นแบบ · เมืองและชาวเมืองยังเปิดใช้งาน');
    return;
  }
  // Build the four new 3D frontier regions only after the heightmap is ready,
  // so each terrain patch conforms to the real streamed-world ground.
  frontierWorld = createFrontierWorld({
    scene,
    getHeight: (x, z) => worldStreamer.getHeight(x, z),
    loadDistance: isTouch ? 245 : 300
  });
  cityWorld = createCityWorld({
    scene,
    getHeight: (x, z) => getTerrainHeight(x, z, 0) ?? 0,
    mobile: isTouch
  });
  if (pendingCitySave) { cityWorld.restoreWorld?.(pendingCitySave); pendingCitySave = null; }
  toast('เมือง 9 แห่งเปิดแล้ว · ชาวเมืองเดินทางในเมือง');
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

const dungeonCave = new THREE.Group();
dungeonCave.name = 'DungeonCaveAtmosphere';
dungeonCave.position.copy(dungeonArena.position);

const caveShellGeometry = new THREE.SphereGeometry(19, 32, 22);
const caveShellPositions = caveShellGeometry.attributes.position;
for (let i = 0; i < caveShellPositions.count; i++) {
  const x = caveShellPositions.getX(i);
  const y = caveShellPositions.getY(i);
  const z = caveShellPositions.getZ(i);
  const roughness =
    1 +
    Math.sin(x * .34 + z * .21) * .035 +
    Math.cos(y * .43 - x * .19) * .025;
  caveShellPositions.setXYZ(i, x * roughness, y * roughness, z * roughness);
}
caveShellGeometry.computeVertexNormals();

const caveShell = new THREE.Mesh(
  caveShellGeometry,
  new THREE.MeshStandardMaterial({
    color: 0x28252a,
    roughness: 1,
    metalness: 0,
    flatShading: true,
    side: THREE.BackSide
  })
);
caveShell.position.y = 4.2;
caveShell.scale.set(1.08, .86, 1.08);
caveShell.receiveShadow = true;
dungeonCave.add(caveShell);

const dungeonTorchLights = [];
const dungeonTorchWood = new THREE.MeshStandardMaterial({
  color: 0x39271b,
  roughness: 1
});
const dungeonTorchIron = new THREE.MeshStandardMaterial({
  color: 0x343238,
  roughness: .82,
  metalness: .25
});

for (let i = 0; i < 4; i++) {
  const angle = i / 4 * Math.PI * 2 + Math.PI / 4;
  const torch = new THREE.Group();
  torch.position.set(Math.cos(angle) * 14.1, 0, Math.sin(angle) * 14.1);
  torch.rotation.y = -angle;

  const bracket = new THREE.Mesh(
    new THREE.BoxGeometry(3.6, .12, .14),
    dungeonTorchIron
  );
  bracket.position.set(1.65, 2.8, 0);
  torch.add(bracket);

  const shaft = new THREE.Mesh(
    new THREE.CylinderGeometry(.1, .15, 1.55, 6),
    dungeonTorchWood
  );
  shaft.position.set(-.08, 2.25, 0);
  shaft.castShadow = true;
  torch.add(shaft);

  const ironCup = new THREE.Mesh(
    new THREE.CylinderGeometry(.2, .14, .22, 6, 1, true),
    dungeonTorchIron
  );
  ironCup.position.set(-.08, 3.08, 0);
  torch.add(ironCup);

  const flame = new THREE.Mesh(
    new THREE.ConeGeometry(.23, .78, 6),
    new THREE.MeshBasicMaterial({
      color: 0xff7a2f,
      transparent: true,
      opacity: .9,
      depthWrite: false
    })
  );
  flame.position.set(-.08, 3.48, 0);
  torch.add(flame);

  const core = new THREE.Mesh(
    new THREE.ConeGeometry(.12, .48, 5),
    new THREE.MeshBasicMaterial({
      color: 0xffd27a,
      transparent: true,
      opacity: .92,
      depthWrite: false
    })
  );
  core.position.set(-.08, 3.42, 0);
  torch.add(core);

  const light = new THREE.PointLight(0xffa154, 2.8, 22, 2);
  light.position.set(-.08, 3.55, 0);
  torch.add(light);

  dungeonCave.add(torch);
  dungeonTorchLights.push({ flame, core, light, seed: i * 1.73 });
}

dungeonCave.visible = false;
scene.add(dungeonCave);

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
const cutsceneDirector = createCutsceneDirector({ camera, player, mount });
const body = new THREE.Group();
player.add(body);

// สร้างภาพ Pixel Art 4 ทิศทาง 4 เฟรม
const spriteCanvas = document.createElement('canvas');
spriteCanvas.width = 128;
spriteCanvas.height = 128;

const spriteCtx = spriteCanvas.getContext('2d');

function drawPixelHero(ctx, ox, oy, direction, frame, knight = false) {
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

  if (knight) {
    // ลำตัวเกราะเหล็ก
    px(10, 14, 13, 12, '#8f98a8');
    px(12, 15, 9, 8, '#c4cad4');
    px(14, 17, 5, 7, '#6d7686');
    px(15, 21, 3, 3, '#e0b45c');

    // แขนเกราะ
    px(7, 16, 4, 8, '#8f98a8');
    px(22, 16, 4, 8, '#8f98a8');
    px(7, 22, 4, 3, '#d5a47e');
    px(22, 22, 4, 3, '#d5a47e');

    // หมวกเหล็ก
    px(9, 3, 14, 4, '#7c8594');
    px(6, 7, 20, 6, '#aab2bf');
    px(8, 5, 16, 3, '#c4cad4');
    px(7, 12, 18, 3, '#6d7686');

    if (direction === 0) {
      // ช่องมองด้านหน้า
      px(11, 9, 3, 2, '#20202b');
      px(19, 9, 3, 2, '#20202b');
      px(15, 12, 3, 1, '#a96e65');
    } else if (side) {
      px(19, 9, 3, 2, '#20202b');
      px(23, 11, 2, 2, '#d99b79');
    } else {
      px(8, 9, 16, 5, '#7c8594');
    }
  } else {
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
  }

  // ขอบผ้าคลุมสีแดง
  px(8, 25, 3, 4, '#a63d50');
}

function rebuildPlayerAtlas() {
  const knight = state.armor === 'plate' || state.armor === 'dragonplate';
  for (let direction = 0; direction < 4; direction++) {
    for (let frame = 0; frame < 4; frame++) {
      drawPixelHero(spriteCtx, frame * 32, direction * 32, direction, frame, knight);
    }
  }
  playerTexture.needsUpdate = true;
}

const playerTexture = new THREE.CanvasTexture(spriteCanvas);
playerTexture.magFilter = THREE.NearestFilter;
playerTexture.minFilter = THREE.NearestFilter;
playerTexture.generateMipmaps = false;
playerTexture.colorSpace = THREE.SRGBColorSpace;
playerTexture.repeat.set(0.25, 0.25);
playerTexture.offset.set(0, 0.75);
rebuildPlayerAtlas();

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

// 3D procedural rig now renders by default; an optional rigged GLB can replace it.
const playerCharacter = createPlayerCharacter(body, playerSprite);

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

// Two-player session contract (network transport is injected later).
const multiplayerSession = createMultiplayerSession({ maxPlayers: 2 });
window.theForgottenRealm = window.theForgottenRealm || {};
window.theForgottenRealm.multiplayer = multiplayerSession;
const multiplayerUI = createMultiplayerUI({
  session: multiplayerSession,
  scene,
  getLocalSnapshot: () => ({
    position: player.position,
    yaw: player.rotation.y,
    hp: state.hp,
    level: state.level,
    animation: dodgeTimer > 0 ? 'dodge' : attackAnimTimer > 0 ? 'attack' : moving ? (isRunning ? 'run' : 'walk') : 'idle'
  })
});

// ---------- Terrain Height Query ----------
function getTerrainHeight(x, z, referenceY) {
  return frontierWorld?.getHeight(x, z) ?? worldStreamer.getHeight(x, z);
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
  },
  raider: {
    name: 'โจรแดนเถ้าถ่าน', hp: 4, damage: 7, speed: 2.15,
    aggro: 13, reach: 1.55, cooldown: 1.15, xp: 45,
    scale: 1, color: 0x4a3a2e, emissive: 0x1a0f08, eye: 0xffb35c
  },
  revenant: {
    name: 'ทหารกลายพันธุ์', hp: 8, damage: 11, speed: 1.3,
    aggro: 13, reach: 2.0, cooldown: 1.45, xp: 85,
    scale: 1.15, color: 0x3b4450, emissive: 0x14202a, eye: 0x9fe8ff
  },
  warlord: {
    name: 'หัวหน้าโจร', hp: 15, damage: 14, speed: 1.35,
    aggro: 16, reach: 2.6, cooldown: 1.5, xp: 180,
    scale: 1.7, color: 0x5a2f2a, emissive: 0x2a0d0d, eye: 0xff7a4d
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
  },
  raider: {
    kind: 'humanoid', variant: 'merchant',
    palette: {
      body: '#4a3a2e', light: '#6b5441', dark: '#2b2119',
      accent: '#8c3a2e', skin: '#c9936f', hood: '#3a2c22',
      eye: '#2a2020', boot: '#241b14', metal: '#b0a184'
    }
  },
  revenant: {
    kind: 'humanoid', variant: 'smith',
    palette: {
      body: '#3b4450', light: '#596472', dark: '#20262e',
      accent: '#5a8ba0', skin: '#8d9aa6', hood: '#2a323c',
      eye: '#9fe8ff', boot: '#1a1f25', metal: '#c3ccd6'
    }
  },
  warlord: {
    kind: 'humanoid', boss: true, variant: 'smith',
    palette: {
      body: '#5a2f2a', light: '#8a4a3c', dark: '#331713',
      accent: '#d8a23c', skin: '#b8825f', hood: '#47231d',
      eye: '#ff7a4d', boot: '#2a1511', metal: '#d8b45c'
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

  // Ground warning marker for boss attack wind-ups.
  let bossWarning = null;
  if (type === 'boss' || type === 'dungeonBoss') {
    bossWarning = new THREE.Group();
    const warningFill = new THREE.Mesh(
      new THREE.CircleGeometry(1, 48),
      new THREE.MeshBasicMaterial({
        color: 0xff4b32,
        transparent: true,
        opacity: .18,
        depthWrite: false,
        side: THREE.DoubleSide
      })
    );
    warningFill.rotation.x = -Math.PI / 2;
    warningFill.position.y = .035;
    const warningRing = new THREE.Mesh(
      new THREE.RingGeometry(.88, 1, 48),
      new THREE.MeshBasicMaterial({
        color: 0xff5a32,
        transparent: true,
        opacity: .9,
        depthWrite: false,
        side: THREE.DoubleSide
      })
    );
    warningRing.rotation.x = -Math.PI / 2;
    warningRing.position.y = .06;
    bossWarning.add(warningFill, warningRing);
    bossWarning.visible = false;
    scene.add(bossWarning);
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
    bossWarning,
    animTime: 0,
    hurtTimer: 0,
    attackTimer: 0,
    telegraphTimer: 0,
    recoveryTimer: 0,
    bossAttackIndex: 0,
    bossComboIndex: 0,
    bossComboQueue: null,
    bossComboStep: 0,
    staggerMeter: 0,
    staggerDecayTimer: 0,
    stunTimer: 0,
    lowHpSpecialUsed: false,
    weaknessHintShown: false,
    activeBossAttack: null,
    bossChargeTarget: null,
    deathTimer: 0,
    respawnTimer: 0,
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
  ['dungeonBoss', -170, 160],
  // 0.13 · raider camps and patrols across every region
  ['raider', 26, -18],
  ['raider', 34, -30],
  ['revenant', 22, -50],
  ['warlord', 32, -40],
  ['raider', -66, -28],
  ['raider', -70, -48],
  ['revenant', -58, -64],
  ['raider', -118, -128],
  ['raider', -128, -140],
  ['revenant', -158, -118],
  ['warlord', -124, -134],
  ['wraith', -142, -190],
  ['raider', 118, 30],
  ['raider', 126, 44],
  ['revenant', 190, 66],
  ['warlord', 120, 38],
  ['raider', 128, -140],
  ['raider', 138, -148],
  ['revenant', 186, -158],
  ['warlord', 132, -146],
  ['raider', -128, 138],
  ['raider', -138, 148],
  ['revenant', -180, 138],
  ['warlord', -132, 142]
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
  applyEnemyDamage: damageEnemy,
  hireCompanion,
  getCompanionId: () => state.companion,
  companionInfo: (id) => {
    const def = COMPANION_DEFS[id];
    return def ? { name: def.name, cost: def.cost, role: def.role } : null;
  },
  getTerrainHeight,
  teleportTo: (x, z) => {
    const ground = getTerrainHeight(x, z, player.position.y);
    player.position.set(x, Number.isFinite(ground) ? ground : player.position.y, z);
    verticalVelocity = 0;
    grounded = true;
    cameraReady = false;
    cameraEyeY = null;
    cameraGroundY = null;
    breakCombo();
    worldStreamer.update(player.position);
  },
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
let pinchStartDistance = 0;
const activeLookPointers = new Map();

const canvas = renderer.domElement;

function touchDistance() {
  const points = [...activeLookPointers.values()];
  if (points.length < 2) return 0;
  return Math.hypot(points[0].x - points[1].x, points[0].y - points[1].y);
}

canvas.addEventListener('pointerdown', (e) => {
  const validMouse = e.pointerType === 'mouse' && e.button === 0;
  const validTouch = e.pointerType === 'touch'
    && e.clientX > innerWidth * .38
    && e.clientY < innerHeight - 125;

  if (e.pointerType === 'touch') {
    activeLookPointers.set(e.pointerId, { x: e.clientX, y: e.clientY });
    if (activeLookPointers.size >= 2) {
      lookId = null;
      pinchStartDistance = touchDistance();
      canvas.setPointerCapture(e.pointerId);
      e.preventDefault();
      return;
    }
  }

  if (!validMouse && !validTouch) return;

  lookId = e.pointerId;
  lastX = e.clientX;
  lastY = e.clientY;
  canvas.setPointerCapture(e.pointerId);
  e.preventDefault();
});

canvas.addEventListener('pointermove', (e) => {
  if (e.pointerType === 'touch' && activeLookPointers.has(e.pointerId)) {
    activeLookPointers.set(e.pointerId, { x: e.clientX, y: e.clientY });

    if (activeLookPointers.size >= 2) {
      const currentDistance = touchDistance();
      if (pinchStartDistance > 0 && currentDistance > 0) {
        distance = THREE.MathUtils.clamp(
          distance + (pinchStartDistance - currentDistance) * .025,
          6,
          14
        );
      }
      pinchStartDistance = currentDistance;
      e.preventDefault();
      return;
    }
  }

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
  activeLookPointers.delete(e.pointerId);
  if (activeLookPointers.size < 2) pinchStartDistance = 0;
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
let dungeonAtmosphere = 0;
let campOpen = false;
let lastSun = 1;

const cWarmSun = new THREE.Color(0xff9a5c);
const cWhiteSun = new THREE.Color(0xfff1d6);

const clock = new THREE.Clock();
const cameraTarget = new THREE.Vector3();
const smoothTarget = new THREE.Vector3();
const desiredCamera = new THREE.Vector3();
let cameraReady = false;
// Screen-space stabilizer: walking over the blocky terrain moves the player's
// feet in 0.5-1 m steps, which used to be copied straight into the camera.
// We keep a separate, heavily damped height for the eye so the view glides.
let cameraEyeY = null;
let cameraGroundY = null;


function enemySaveKey(type, homeX, homeZ) {
  return `${type}@${Number(homeX).toFixed(3)},${Number(homeZ).toFixed(3)}`;
}

function saveGame(showMessage = true, slot = currentSlot) {
  if (typeof showMessage !== 'boolean') showMessage = true;
  currentSlot = slot;

  const payload = {
    version: CURRENT_SAVE_VERSION,
    savedAt: new Date().toISOString(),
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
    cities: cityWorld?.serializeWorld?.() || null,
    collectibles: collectibles.map(crystal => crystal.visible),
    enemies: enemies.map(enemy => ({
      // Stable spawn identity keeps saves aligned if the spawn list order changes.
      id: enemySaveKey(
        enemy.userData.type,
        enemy.userData.homeX,
        enemy.userData.homeZ
      ),
      type: enemy.userData.type,
      position: [
        enemy.position.x,
        enemy.position.y,
        enemy.position.z
      ],
      home: [enemy.userData.homeX, enemy.userData.homeZ],
      hp: enemy.userData.hp,
      alive: enemy.userData.alive,
      respawnTimer: enemy.userData.respawnTimer || 0
    }))
  };

  try {
    const serialized = JSON.stringify(payload);
    const saveKey = getSaveKey(slot);
    const previousSave = localStorage.getItem(saveKey);

    // Keep the previous successful save as a recovery copy before replacing it.
    if (previousSave) {
      try {
        localStorage.setItem(`${saveKey}-backup`, previousSave);
      } catch (backupError) {
        console.warn('Could not refresh save backup:', backupError);
      }
    }

    localStorage.setItem(saveKey, serialized);
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

    const backupRaw = localStorage.getItem(`${getSaveKey(slot)}-backup`);
    const parsedSave = parseSaveWithBackup(raw, backupRaw);
    const data = parsedSave.data;
    if (parsedSave.recovered) {
      toast(`กู้คืนเซฟสำรองของช่อง ${slot} แล้ว`);
    }

    currentSlot = slot;
    pendingCitySave = Array.isArray(data.cities) ? data.cities : null;
    if (cityWorld && pendingCitySave) {
      cityWorld.restoreWorld?.(pendingCitySave);
      pendingCitySave = null;
    }
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
    state.dungeons = data.state.dungeons && typeof data.state.dungeons === 'object'
      ? { ...data.state.dungeons }
      : {};

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
    if (data.state.upgrades && typeof data.state.upgrades === 'object') {
      const upgrades = {};
      for (const [id, tier] of Object.entries(data.state.upgrades)) {
        const value = Math.round(Number(tier));
        if (Number.isFinite(value) && value > 0) {
          upgrades[id] = Math.min(5, value);
        }
      }
      state.upgrades = upgrades;
    }
    if (Array.isArray(data.state.bounties)) {
      state.bounties = data.state.bounties
        .filter((bounty) => bounty && typeof bounty.type === 'string')
        .map((bounty) => ({
          ...bounty,
          count: Math.max(0, Math.round(Number(bounty.count) || 0)),
          target: Math.max(1, Math.round(Number(bounty.target) || 1))
        }));
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
    state.comboBest = Math.max(0, Math.round(Number(data.state.comboBest) || 0));
    state.companion = COMPANION_DEFS[data.state.companion]
      ? data.state.companion
      : null;
    // Older saves have no command field, so default them to follow mode.
    state.companionOrder = data.state.companionOrder === 'hold' ? 'hold' : 'follow';
    breakCombo();
    if (comboUI.best) comboUI.best.textContent = String(state.comboBest);
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
    if (data.state.reputation && typeof data.state.reputation === 'object') {
      state.reputation = { ...data.state.reputation };
    }
    if (data.state.flags && typeof data.state.flags === 'object') {
      state.flags = { ...data.state.flags };
    }
    if (Array.isArray(data.state.waypoints)) {
      state.waypoints = data.state.waypoints.filter((id) => typeof id === 'string');
    }
    if (Array.isArray(data.state.explored)) {
      state.explored = data.state.explored
        .map((value) => Math.round(Number(value)))
        .filter((value) => Number.isFinite(value) && value >= 0 && value < 4000);
    }
    if (Number.isFinite(Number(data.state.cartographer))) {
      state.cartographer = Math.max(0, Math.round(Number(data.state.cartographer)));
    }
    if (typeof systems.resetExploration === 'function') {
      systems.resetExploration();
    }

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
      const savedEnemiesById = new Map(
        data.enemies
          .filter(saved => saved && typeof saved.id === 'string')
          .map(saved => [saved.id, saved])
      );
      enemies.forEach((enemy, index) => {
        const stableId = enemySaveKey(
          enemy.userData.type,
          enemy.userData.homeX,
          enemy.userData.homeZ
        );
        // New saves use stable IDs; older version-11 saves remain supported
        // through the original index-based fallback.
        const saved = savedEnemiesById.get(stableId) || data.enemies[index];
        if (!saved) return;
        if (saved.type && saved.type !== enemy.userData.type) return;

        if (
          Array.isArray(saved.position) &&
          saved.position.length === 3 &&
          saved.position.every(Number.isFinite)
        ) {
          enemy.position.set(...saved.position);
        }

        if (
          Array.isArray(saved.home) &&
          saved.home.length === 2 &&
          saved.home.every(Number.isFinite)
        ) {
          enemy.userData.homeX = saved.home[0];
          enemy.userData.homeZ = saved.home[1];
        } else {
          enemy.userData.homeX = enemy.position.x;
          enemy.userData.homeZ = enemy.position.z;
        }

        const maxHp = enemy.userData.maxHp;
        enemy.userData.hp = THREE.MathUtils.clamp(
          Number(saved.hp) || 0, 0, maxHp
        );

        enemy.userData.alive =
          saved.alive !== false && enemy.userData.hp > 0;

        if (!enemy.userData.alive && !enemy.userData.dungeon &&
            enemy.userData.type !== 'dungeonBoss') {
          const savedTimer = Number(saved.respawnTimer);
          enemy.userData.respawnTimer = Number.isFinite(savedTimer) && savedTimer > 0
            ? Math.min(savedTimer, 180)
            : 25 + Math.random() * 40;
        } else {
          enemy.userData.respawnTimer = 0;
        }

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

    syncCompanionFromState();
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

// ---------- Update 0.12 · Blood Pact (combo lifesteal) ----------
const COMBO_WINDOW = 2.8;
const COMBO_MAX = 20;
const COMBO_TIERS = [
  { min: 0, tier: 0, name: 'สงบ', mult: 1, leech: 0 },
  { min: 5, tier: 1, name: 'ไหลเวียน', mult: 1.08, leech: 1 },
  { min: 10, tier: 2, name: 'คลั่ง', mult: 1.18, leech: 2 },
  { min: 15, tier: 3, name: 'กระหายเลือด', mult: 1.3, leech: 3 }
];

let combo = 0;
let comboTimer = 0;
const _floatVec = new THREE.Vector3();

function comboStats(stacks = combo) {
  let entry = COMBO_TIERS[0];
  for (const tier of COMBO_TIERS) {
    if (stacks >= tier.min) entry = tier;
  }
  return entry;
}

function comboBonusText(tier) {
  if (tier.tier === 0) {
    return `อีก ${Math.max(1, 5 - combo)} ครั้ง → ไหลเวียน`;
  }
  const percent = Math.round((tier.mult - 1) * 100);
  return `+${percent}% ดาเมจ · ดูดเลือด ${tier.leech} HP/ครั้ง`;
}

function refreshComboHud(pop = false) {
  const chip = comboUI.chip;
  if (!chip) return;

  if (combo <= 0) {
    chip.classList.add('hidden');
    chip.classList.remove('tier-1', 'tier-2', 'tier-3', 'pop', 'tier-up');
    if (comboUI.fill) comboUI.fill.style.width = '0%';
    return;
  }

  const tier = comboStats();
  chip.classList.remove('hidden', 'tier-1', 'tier-2', 'tier-3');
  if (tier.tier > 0) chip.classList.add(`tier-${tier.tier}`);

  if (comboUI.count) comboUI.count.textContent = String(combo);
  if (comboUI.tier) comboUI.tier.textContent = tier.name;
  if (comboUI.bonus) comboUI.bonus.textContent = comboBonusText(tier);
  if (comboUI.fill) {
    comboUI.fill.style.width = `${Math.max(0, comboTimer / COMBO_WINDOW * 100)}%`;
  }

  if (pop) {
    chip.classList.remove('pop');
    void chip.offsetWidth;
    chip.classList.add('pop');
  }
}

function comboLevelUp(tier) {
  audio.play('blood');
  toast(`พันธะเลือด · ${tier.name}! +${Math.round((tier.mult - 1) * 100)}% ดาเมจ · ดูดเลือด ${tier.leech} HP/ครั้ง`);
  spawnFloatText('พันธะเลือด!', 'burst');
  const chip = comboUI.chip;
  if (chip) {
    chip.classList.remove('tier-up');
    void chip.offsetWidth;
    chip.classList.add('tier-up');
  }
}

function registerComboHit() {
  const before = comboStats().tier;
  combo = Math.min(COMBO_MAX, combo + 1);
  comboTimer = COMBO_WINDOW;

  if (combo > state.comboBest) {
    state.comboBest = combo;
    if (comboUI.best) comboUI.best.textContent = String(combo);
  }

  const tier = comboStats();
  if (tier.tier > before) comboLevelUp(tier);
  refreshComboHud(true);
}

function healFromBloodPact(amount) {
  if (amount <= 0 || state.dead) return;

  const before = state.hp;
  state.hp = Math.min(state.maxHp, state.hp + amount);
  const healed = state.hp - before;
  if (healed <= 0) return;

  spawnFloatText(`+${Math.round(healed * 10) / 10}`, 'leech');
  updateHud();
}

function updateCombo(dt) {
  if (combo <= 0) return;

  comboTimer -= dt;
  if (comboTimer <= 0) {
    breakCombo();
    return;
  }

  if (comboUI.fill) {
    comboUI.fill.style.width = `${Math.max(0, comboTimer / COMBO_WINDOW * 100)}%`;
  }
}

function breakCombo() {
  if (combo === 0 && comboTimer === 0) {
    if (comboUI.chip) comboUI.chip.classList.add('hidden');
    return;
  }

  combo = 0;
  comboTimer = 0;
  refreshComboHud(false);
}

function spawnFloatText(text, tone = 'leech') {
  const layer = comboUI.layer;
  if (!layer) return;

  const node = document.createElement('span');
  node.className = `float-text${tone === 'burst' ? ' burst' : ''}`;
  node.textContent = text;
  layer.appendChild(node);

  _floatVec.set(player.position.x, player.position.y + 2.35, player.position.z);
  _floatVec.project(camera);
  if (_floatVec.z > 1) {
    node.remove();
    return;
  }

  const rect = renderer.domElement.getBoundingClientRect();
  node.style.left = `${rect.left + (_floatVec.x * .5 + .5) * rect.width}px`;
  node.style.top = `${rect.top + (-_floatVec.y * .5 + .5) * rect.height}px`;
  node.addEventListener('animationend', () => node.remove(), { once: true });
  setTimeout(() => node.remove(), 1200);
}

// ---------- Update 0.13 · Wayfarer's Bond (hireable companion) ----------
/* One hired blade walks with the player: it follows, auto-attacks nearby
   enemies and never feeds the Blood Pact combo. Hiring happens through
   dialogue with the three mercenary NPCs spread across the map. */
const COMPANION_DEFS = {
  sellsword: {
    name: 'ทหารรับจ้าง', role: 'ดาบประชิด · คอยคุ้มกันข้างกาย',
    cost: 220, damage: 3.4, range: 3.0, cooldown: 1.0,
    color: 0xc9773f
  },
  ranger: {
    name: 'พรานเถ้าถ่าน', role: 'ธนูยาว · ยิงจากระยะไกล',
    cost: 260, damage: 2.3, range: 12, cooldown: .95,
    color: 0x7fc48a, bolt: 0xffd27a
  },
  warden: {
    name: 'นักเวทพเนจร', role: 'เวทเหมันต์ · ทำให้ศัตรูช้าลง',
    cost: 320, damage: 2.9, range: 10, cooldown: 1.35,
    color: 0x9aa8ec, bolt: 0x9fe8ff, slow: 1.8
  }
};

const companionSpriteStyles = {
  sellsword: {
    kind: 'humanoid', variant: 'smith',
    palette: {
      body: '#a5623c', light: '#c98550', dark: '#5e341f',
      accent: '#39404f', skin: '#d5a47e', hood: '#453222',
      eye: '#2a2020', boot: '#2b2118', metal: '#cfd2d8'
    }
  },
  ranger: {
    kind: 'humanoid', variant: 'ranger',
    palette: {
      body: '#4f7a52', light: '#6f9c6d', dark: '#2d4a30',
      accent: '#b5763a', skin: '#d5a47e', hood: '#3a5539',
      eye: '#2a2020', boot: '#2b2118', metal: '#c8cbd0'
    }
  },
  warden: {
    kind: 'humanoid', variant: 'priest',
    palette: {
      body: '#56609c', light: '#7b86c6', dark: '#323a68',
      accent: '#c9a86a', skin: '#d5a47e', hood: '#3d4677',
      eye: '#e8e2c8', boot: '#25283a', metal: '#d8b45c'
    }
  }
};

const companionTextures = new Map();
const companionShots = [];
const companionFx = [];
let companionMesh = null;
let companionCooldown = 0;

function getCompanionTexture(id) {
  if (!companionTextures.has(id)) {
    companionTextures.set(
      id,
      createCharacterAtlas(companionSpriteStyles[id] || companionSpriteStyles.sellsword)
    );
  }
  return companionTextures.get(id);
}

function refreshCompanionHud() {
  const chip = companionUI.chip;
  if (!chip) return;

  const def = COMPANION_DEFS[state.companion];
  if (!def) {
    chip.classList.add('hidden');
    if (companionUI.info) companionUI.info.textContent = 'ไม่มี';
    return;
  }

  chip.classList.remove('hidden');
  if (companionUI.info) companionUI.info.textContent = def.name;
  chip.style.setProperty(
    '--ally-accent',
    `#${def.color.toString(16).padStart(6, '0')}`
  );
  if (companionUI.name) companionUI.name.textContent = def.name;
  if (companionUI.role) companionUI.role.textContent = def.role;

  const holding = state.companionOrder === 'hold';
  if (companionUI.order) {
    companionUI.order.textContent = holding ? '↶ ตาม' : '⛺ เฝ้า';
    companionUI.order.title = holding
      ? 'สั่งให้สหายกลับมาติดตาม'
      : 'สั่งให้สหายยืนเฝ้าตำแหน่ง';
    companionUI.order.setAttribute('aria-label', companionUI.order.title);
  }
}

function removeCompanionMesh() {
  if (!companionMesh) return;
  scene.remove(companionMesh);
  companionMesh = null;
}

function spawnCompanion(id, { silent = false } = {}) {
  const def = COMPANION_DEFS[id];
  if (!def) return false;

  removeCompanionMesh();

  const group = new THREE.Group();
  const sprite = createCharacterSprite(getCompanionTexture(id), 1.5, 2);
  group.add(sprite);

  const shadow = new THREE.Mesh(
    new THREE.CircleGeometry(.4, 16),
    new THREE.MeshBasicMaterial({
      color: 0x000000, transparent: true, opacity: .25, depthWrite: false
    })
  );
  shadow.rotation.x = -Math.PI / 2;
  shadow.position.y = 0.025;
  group.add(shadow);

  const mark = new THREE.Mesh(
    new THREE.TorusGeometry(.46, .035, 6, 20),
    new THREE.MeshBasicMaterial({ color: def.color })
  );
  mark.rotation.x = Math.PI / 2;
  mark.position.y = .06;
  group.add(mark);

  const angle = player.rotation.y + Math.PI * .7;
  const spawnX = player.position.x + Math.sin(angle) * 1.8;
  const spawnZ = player.position.z + Math.cos(angle) * 1.8;
  const spawnY = getTerrainHeight(spawnX, spawnZ, player.position.y) ?? player.position.y;
  group.position.set(spawnX, spawnY, spawnZ);
  group.userData = {
    kind: 'companion',
    companionId: id,
    sprite,
    animTime: 0,
    hurtTimer: 0,
    attackTimer: 0,
    deathTimer: 0,
    directionRow: 0,
    moving: false,
    baseTint: 0xffffff,
    target: new THREE.Vector3(spawnX, spawnY, spawnZ)
  };

  scene.add(group);
  companionMesh = group;
  companionCooldown = .7;
  state.companion = id;
  refreshCompanionHud();

  if (!silent) {
    audio.play('level');
    toast(`${def.name}ร่วมเดินทางกับเจ้าแล้ว`);
  }
  return true;
}

function hireCompanion(id) {
  const def = COMPANION_DEFS[id];
  if (!def) return false;
  if (state.companion === id) {
    toast(`${def.name}ยังร่วมทางอยู่กับเจ้า`);
    return false;
  }
  if (state.companion) {
    toast('แยกทางกับสหายคนเดิมก่อนจึงจะจ้างคนใหม่ได้');
    return false;
  }
  if (state.gold < def.cost) {
    toast(`ต้องมี ${def.cost} ทองจึงจะจ้าง${def.name}ได้`);
    return false;
  }

  state.gold -= def.cost;
  spawnCompanion(id);
  updateHud();
  return true;
}

function dismissCompanion(announce = true) {
  const def = COMPANION_DEFS[state.companion];
  if (!def) return false;

  removeCompanionMesh();
  state.companion = null;
  state.companionOrder = 'follow';
  refreshCompanionHud();
  if (announce) toast(`${def.name}แยกทางแล้ว`);
  return true;
}

function syncCompanionFromState() {
  if (state.companion && COMPANION_DEFS[state.companion]) {
    spawnCompanion(state.companion, { silent: true });
  } else {
    state.companion = null;
    removeCompanionMesh();
  }
  refreshCompanionHud();
}

function spawnCompanionSpark(position, color) {
  const sprite = new THREE.Sprite(new THREE.SpriteMaterial({
    color, transparent: true, opacity: .9,
    blending: THREE.AdditiveBlending, depthWrite: false
  }));
  sprite.scale.setScalar(.9);
  sprite.position.copy(position);
  scene.add(sprite);
  companionFx.push({ sprite, life: .22, max: .22, baseScale: .9 });
}

function updateCompanion(dt, yaw) {
  for (let i = companionShots.length - 1; i >= 0; i--) {
    const shot = companionShots[i];
    shot.t += dt;
    const k = Math.min(1, shot.t / shot.duration);
    shot.mesh.position.lerpVectors(shot.from, shot.to, k);
    shot.mesh.position.y += Math.sin(k * Math.PI) * .18;

    if (k >= 1) {
      damageEnemy(shot.target, shot.damage, { companion: true, slow: shot.slow });
      spawnCompanionSpark(shot.to, shot.color);
      scene.remove(shot.mesh);
      shot.mesh.geometry.dispose();
      shot.mesh.material.dispose();
      companionShots.splice(i, 1);
    }
  }

  for (let i = companionFx.length - 1; i >= 0; i--) {
    const fx = companionFx[i];
    fx.life -= dt;
    const ratio = Math.max(0, fx.life / fx.max);
    fx.sprite.material.opacity = ratio;
    fx.sprite.scale.setScalar(fx.baseScale * (1 + (1 - ratio) * .9));
    if (fx.life <= 0) {
      scene.remove(fx.sprite);
      fx.sprite.material.dispose();
      companionFx.splice(i, 1);
    }
  }

  if (!companionMesh || !state.companion) return;
  const def = COMPANION_DEFS[state.companion];
  const data = companionMesh.userData;

  if (state.companionOrder !== 'hold') {
    // Follow mode: stay just behind the player's shoulder.
    const forwardX = Math.sin(player.rotation.y);
    const forwardZ = Math.cos(player.rotation.y);
    const goalX = player.position.x - forwardX * 1.5 + forwardZ * 1.5;
    const goalZ = player.position.z - forwardZ * 1.5 - forwardX * 1.5;
    const dx = goalX - companionMesh.position.x;
    const dz = goalZ - companionMesh.position.z;
    const distance = Math.hypot(dx, dz);

    if (distance > 26) {
      const ground = getTerrainHeight(goalX, goalZ, player.position.y);
      companionMesh.position.set(
        goalX,
        Number.isFinite(ground) ? ground : player.position.y,
        goalZ
      );
      data.moving = false;
    } else if (distance > .8) {
      const step = Math.min(distance, dt * 4.4);
      companionMesh.position.x += dx / distance * step;
      companionMesh.position.z += dz / distance * step;
      companionMesh.rotation.y = Math.atan2(dx, dz);
      data.moving = true;
    } else {
      companionMesh.rotation.y = player.rotation.y;
      data.moving = false;
    }
  } else {
    // Hold mode: stay at the current spot and guard nearby; terrain still updates.
    data.moving = false;
  }

  const terrainY = getTerrainHeight(
    companionMesh.position.x,
    companionMesh.position.z,
    companionMesh.position.y
  );
  if (terrainY !== null) companionMesh.position.y = terrainY;

  updateCharacterAnimation(data, dt, yaw, companionMesh.rotation.y);

  companionCooldown = Math.max(0, companionCooldown - dt);
  if (companionCooldown > 0) return;

  let target = null;
  let bestDistance = Infinity;
  for (const enemy of enemies) {
    if (!enemy.userData.alive) continue;
    const ex = enemy.position.x - companionMesh.position.x;
    const ez = enemy.position.z - companionMesh.position.z;
    const enemyDistance = Math.hypot(ex, ez);
    if (enemyDistance > 14) continue;
    if (Math.hypot(
      enemy.position.x - player.position.x,
      enemy.position.z - player.position.z
    ) > 26) continue;
    if (enemyDistance < bestDistance) {
      bestDistance = enemyDistance;
      target = enemy;
    }
  }

  if (!target || bestDistance > def.range) return;

  companionMesh.rotation.y = Math.atan2(
    target.position.x - companionMesh.position.x,
    target.position.z - companionMesh.position.z
  );
  companionCooldown = def.cooldown;

  if (def.bolt) {
    const from = companionMesh.position.clone();
    from.y += 1.25;
    const to = target.position.clone();
    to.y += 1.1;
    const mesh = new THREE.Mesh(
      new THREE.SphereGeometry(.11, 6, 5),
      new THREE.MeshBasicMaterial({ color: def.bolt })
    );
    mesh.position.copy(from);
    scene.add(mesh);
    companionShots.push({
      mesh, from, to, target,
      damage: def.damage, slow: def.slow || 0,
      color: def.bolt, t: 0, duration: .16
    });
    audio.play('attack');
  } else {
    damageEnemy(target, def.damage, { companion: true });
    spawnCompanionSpark(
      target.position.clone().setY(target.position.y + 1.1),
      def.color
    );
    audio.play('hit');
  }
}

if (companionUI.order) {
  companionUI.order.addEventListener('click', () => {
    if (!state.companion) return;
    state.companionOrder = state.companionOrder === 'hold' ? 'follow' : 'hold';
    refreshCompanionHud();
    saveGame(false);
    const def = COMPANION_DEFS[state.companion];
    toast(state.companionOrder === 'hold'
      ? `${def.name}จะยืนเฝ้าบริเวณนี้`
      : `${def.name}กลับมาติดตามแล้ว`);
  });
}

if (companionUI.dismiss) {
  companionUI.dismiss.addEventListener('click', () => dismissCompanion());
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

  // Persist the cleared room chain and award the dungeon's unique loot once.
  const dungeon = createDungeonProgression('forgottenCrypt', state);
  dungeon.progress.roomIndex = dungeon.layout.rooms.length - 1;
  dungeon.progress.completed = dungeon.layout.rooms.map(room => room.id);
  dungeon.progress.puzzleSolved = dungeon.layout.rooms
    .filter(room => room.kind === 'puzzle')
    .map(room => room.id);
  dungeon.progress.bossHpRatio = 0;
  const reward = dungeon.claimReward();

  if (reward.ok) {
    state.gold += 180;
    gainXp(250);
    for (const [itemId, amount] of Object.entries(reward.reward.items)) {
      systems.addItem(itemId, amount);
    }
    toast('ถ้ำต้องสาปสงบแล้ว · ผลึก 6 · ทอง 180 · ได้รับของรางวัลดันเจี้ยน');
  } else {
    toast('ถ้ำต้องสาปสงบแล้ว · ได้ผลึก 6 · รางวัลดันเจี้ยนนี้รับไปแล้ว');
  }

  const exitY = getTerrainHeight(-24, -70, 0) ?? 0;
  player.position.set(-24, exitY, -70);
  audio.play('quest');
  updateHud();
}
function respawnEnemy(enemy) {
  const data = enemy.userData;
  const terrainY = getTerrainHeight(data.homeX, data.homeZ, data.baseY) ?? data.baseY;

  data.hp = data.maxHp;
  data.alive = true;
  data.respawnTimer = 0;
  data.deathTimer = 0;
  data.cooldown = 1 + Math.random() * 2;
  data.telegraphTimer = 0;
  data.attackTimer = 0;
  data.recoveryTimer = 0;
  data.activeBossAttack = null;
  data.bossChargeTarget = null;
  data.bossAttackIndex = 0;
  data.bossComboIndex = 0;
  data.bossComboQueue = null;
  data.bossComboStep = 0;
  data.staggerMeter = 0;
  data.staggerDecayTimer = 0;
  data.stunTimer = 0;
  data.lowHpSpecialUsed = false;
  data.weaknessHintShown = false;
  if (data.bossWarning) data.bossWarning.visible = false;
  data.phase = 1;
  data.phaseMultiplier = 1;
  data.slowTimer = 0;
  enemy.position.set(data.homeX, terrainY, data.homeZ);
  enemy.rotation.set(0, 0, 0);
  enemy.scale.setScalar(data.baseScale);
  data.healthFill.scale.x = 1;
  data.healthFill.position.x = 0;
  resetEnemySprite(enemy);
  scene.add(enemy);
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
  data.telegraphTimer = 0;
  data.bossChargeTarget = null;
  if (data.bossWarning) data.bossWarning.visible = false;
  data.moving = false;

  // Random respawn is for open-world enemies only; dungeon progress stays cleared.
  if (!data.dungeon && type !== 'dungeonBoss') {
    const isBoss = type === 'boss' || type === 'warlord';
    const minDelay = isBoss ? 90 : 25;
    const maxDelay = isBoss ? 180 : 65;
    data.respawnTimer = minDelay + Math.random() * (maxDelay - minDelay);
  } else {
    data.respawnTimer = 0;
  }

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

  // Open-world boss rewards are unique per save slot, even after respawn.
  const uniqueBossReward = !data.dungeon ? claimBossReward(state.flags, type) : null;
  if (uniqueBossReward) {
    systems.createBossChest(
      `unique-boss-reward-${type}-slot-${currentSlot}`,
      { x: enemy.position.x + 2.2, z: enemy.position.z + 1.2 },
      uniqueBossReward
    );
  }

  gainXp(enemy.userData.stats.xp);
  systems.onEnemyKilled(enemy);
  audio.play(type === 'boss' || type === 'dungeonBoss' ? 'boss' : 'hit');
  const rewardText = uniqueBossReward
    ? ' · หีบรางวัลพิเศษปรากฏใกล้ๆ'
    : '';
  toast(
    `${enemy.userData.name}พ่ายแพ้ · ได้ผลึก ${crystals} · ทอง ${gold}${rewardText}`
  );
  completeDungeonIfReady();
  updateHud();
}

const projectiles = [];

function damageEnemy(enemy, amount, options = {}) {
  const data = enemy.userData;
  if (!data.alive) return 0;

  // The blood pact amplifies every weapon hit and feeds the combo meter.
  const isBoss = data.type === 'boss' || data.type === 'dungeonBoss';
  const openingMultiplier = getBossOpeningMultiplier(isBoss, data.recoveryTimer, data.phase);
  const element = options.element || 'physical';
  const weaknessMultiplier = getElementMultiplier(data.type, element);
  const dealt = amount * weaknessMultiplier * comboStats().mult * openingMultiplier;

  data.hp -= dealt;
  data.hurtTimer = .3;
  combatFeedback.impact(enemy, dealt, {
    boss: data.type === 'boss' || data.type === 'dungeonBoss'
  });
  if (options.slow) {
    data.slowTimer = Math.max(data.slowTimer || 0, options.slow);
  }

  const stagger = buildStaggerState({
    meter: data.staggerMeter,
    decayTimer: data.staggerDecayTimer
  }, data.type, Math.max(0, dealt) * .85);
  data.staggerMeter = stagger.meter;
  data.staggerDecayTimer = stagger.decayTimer;
  if (stagger.triggered) {
    data.stunTimer = Math.max(data.stunTimer || 0, stagger.duration);
    data.cooldown = Math.max(data.cooldown || 0, stagger.duration);
    data.hurtTimer = Math.max(data.hurtTimer, .55);
    if (isBoss) {
      data.telegraphTimer = 0;
      data.attackTimer = 0;
      data.activeBossAttack = null;
      data.bossChargeTarget = null;
      data.bossComboQueue = null;
      data.bossComboStep = 0;
      data.recoveryTimer = Math.max(data.recoveryTimer || 0, stagger.duration);
      if (data.bossWarning) data.bossWarning.visible = false;
    }
    toast(`${data.name} ชะงัก! โจมตีสวนได้`);
  }
  if (weaknessMultiplier > 1) toast(`โจมตีจุดอ่อน ${element} · ความเสียหายเพิ่ม ${Math.round((weaknessMultiplier - 1) * 100)}%`);

  // Only the player's own weapon feeds the Blood Pact; companion hits do not.
  if (!options.companion) {
    registerComboHit();
    const tier = comboStats();
    if (tier.leech > 0) healFromBloodPact(tier.leech);
  }

  if (data.hp <= 0) defeatEnemy(enemy);

  return dealt;
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
    slow: weapon.slow || 0,
    element: weapon.element || (weapon.projectile === 'frost' ? 'frost' : 'physical')
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
      const dealt = damageEnemy(hit, shot.damage, { slow: shot.slow, element: shot.element });
      if (hit.userData.alive) {
        toast(`โจมตีโดน ${hit.userData.name} -${Math.round(dealt * 10) / 10}`);
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
  breakCombo();

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
let emberGeometry = null;
let emberVelocities = [];

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

  const emberCount = 24;
  const emberPositions = new Float32Array(emberCount * 3);
  emberVelocities = [];
  for (let i = 0; i < emberCount; i++) {
    emberPositions[i * 3] = (Math.random() - .5) * .4;
    emberPositions[i * 3 + 1] = Math.random() * .8;
    emberPositions[i * 3 + 2] = (Math.random() - .5) * .4;
    emberVelocities.push({
      vx: (Math.random() - .5) * .3,
      vy: .6 + Math.random() * 1.2,
      vz: (Math.random() - .5) * .3
    });
  }
  emberGeometry = new THREE.BufferGeometry();
  emberGeometry.setAttribute('position', new THREE.BufferAttribute(emberPositions, 3));
  const embers = new THREE.Points(emberGeometry, new THREE.PointsMaterial({
    color: 0xffb45c,
    size: .12,
    transparent: true,
    opacity: .85,
    blending: THREE.AdditiveBlending,
    depthWrite: false
  }));
  campFire.add(embers);

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

    const damage = (weapon.damage + state.attackBonus) *
      weaponDamageMultiplier() *
      (cls.ranged || 1);
    spawnProjectile(weapon, damage);
    updateHud();
    return;
  }

  attackCooldown = weapon.cooldown;
  attackAnimTimer = .24;
  audio.play('attack');

  const forwardX = Math.sin(player.rotation.y);
  const forwardZ = Math.cos(player.rotation.y);
  const damage = (weapon.damage + state.attackBonus) *
    weaponDamageMultiplier() *
    (cls.melee || 1);

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
    const dealt = damageEnemy(target, damage, { element: weapon.element || 'physical' });
    audio.play('hit');
    if (target.userData.alive) {
      toast(`โจมตี ${target.userData.name} -${Math.round(dealt * 10) / 10}`);
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
    enemy.userData.recoveryTimer = 0;
    enemy.userData.bossChargeTarget = null;
    enemy.userData.activeBossAttack = null;
    enemy.userData.bossComboQueue = null;
    enemy.userData.bossComboStep = 0;
    enemy.userData.staggerMeter = 0;
    enemy.userData.staggerDecayTimer = 0;
    enemy.userData.stunTimer = 0;
    enemy.userData.lowHpSpecialUsed = false;
    enemy.userData.weaknessHintShown = false;
    enemy.userData.telegraphTimer = 0;
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
  const bossEnemy = enemies.find(e => e.userData.type === 'dungeonBoss' && e.userData.alive);
  cutsceneDirector.play({
    title: 'ถ้ำต้องสาป · ผู้คุมแห่งซากโบราณ',
    target: bossEnemy ? bossEnemy.position : dungeonPortal.position,
    duration: 6.2
  });
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
      cutsceneDirector.play({ title: 'ภารกิจใหม่ · ผู้พิทักษ์แห่งซากโบราณ', target: shrine.position, duration: 4.8 });
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

  dungeonAtmosphere = THREE.MathUtils.damp(
    dungeonAtmosphere,
    dungeonActive ? 1 : 0,
    2.4,
    dt
  );
  const caveBlend = dungeonAtmosphere;
  dungeonCave.visible = caveBlend > .01;

  let sun;

  if (dayNightMode === 'day') {
    sun = 1;
  } else if (dayNightMode === 'night') {
    sun = 0;
  } else {
    sun = Math.max(0, Math.sin(state.dayTime * Math.PI * 2));
  }

  
moon.intensity = THREE.MathUtils.lerp(2.8 * (1 - sun), .04, caveBlend);
sunLight.intensity = THREE.MathUtils.lerp(2.55 * sun, 0, caveBlend);
hemi.intensity = THREE.MathUtils.lerp(.98 + .74 * sun, .16, caveBlend);
ambient.intensity = THREE.MathUtils.lerp(
  .76 + .06 * sun + cinematic.getFlash() * 1.7,
  .11 + cinematic.getFlash() * .55,
  caveBlend
);
moonGlow.intensity = .85 * (1 - sun) * (1 - caveBlend);
renderer.toneMappingExposure = THREE.MathUtils.lerp(
  1.38 + .16 * (1 - sun),
  1.02,
  caveBlend
);
  if (sky.material.uniforms.uExposure) {
    sky.material.uniforms.uExposure.value = renderer.toneMappingExposure;
  }
sunLight.color.lerpColors(cWarmSun, cWhiteSun, sun);
lastSun = sun;
  
  // Use only one directional shadow light at a time
  moon.castShadow = sun < 0.5 && caveBlend < .5;
  sunLight.castShadow = sun >= 0.5 && caveBlend < .5;

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
scene.background.copy(daylight).lerp(CAVE_FOG_COLOR, caveBlend);
scene.fog.color.copy(daylight).lerp(CAVE_FOG_COLOR, caveBlend);
fireflies.visible = sun < 0.65 && caveBlend < .5;
fireflyMaterial.opacity = 0.75 * (1 - sun) * (1 - caveBlend);

motes.visible = sun > 0.18 && caveBlend < .5;
moteMaterial.opacity =
  0.30 * THREE.MathUtils.clamp((sun - 0.18) * 2.4, 0, 1) * (1 - caveBlend);
// Dynamic Dark Fantasy Fog
const nightFog = 1 - sun;
const outdoorFogDensity = THREE.MathUtils.lerp(
  0.0026,
  0.0042,
  nightFog
);
scene.fog.density = THREE.MathUtils.lerp(outdoorFogDensity, .034, caveBlend);

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

function updateBossPhase(enemy) {
  const data = enemy.userData;
  const ratio = Math.max(0, data.hp / data.maxHp);
  const phase = ratio > .65 ? 1 : ratio > .3 ? 2 : 3;
  if (phase === data.phase) return;

  data.phase = phase;
  cameraShake.trigger(phase === 3 ? .18 : .12);
  data.phaseMultiplier = phase === 1 ? 1 : phase === 2 ? 1.18 : 1.42;
  data.healthFill.material.color.setHex(
    phase === 3 ? 0xff3030 : phase === 2 ? 0xff9a3d : 0xff4fd8
  );
  data.baseTint = phase === 3 ? 0xff7a7a
    : phase === 2 ? 0xffb37a : 0xffffff;

  if (phase > 1) {
    const phaseTitle = phase === 2
      ? `${data.name} · พลังอเวจีตื่นขึ้น`
      : `${data.name} · เฟสคลั่ง`;
    toast(`${data.name} เข้าเฟส ${phase} · โจมตีรุนแรงขึ้น`);
    audio.play('boss');

    // Pause combat briefly for a readable, skippable boss phase reveal.
    cutsceneDirector.play({
      title: phaseTitle,
      target: enemy.position,
      duration: phase === 3 ? 4.2 : 3.4
    });
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

    if (!data.alive) {
      if (data.respawnTimer > 0) {
        data.respawnTimer = Math.max(0, data.respawnTimer - dt);
        if (data.respawnTimer <= 0) respawnEnemy(enemy);
      }
      continue;
    }

    const stats = data.stats;
    const dx = player.position.x - enemy.position.x;
    const dz = player.position.z - enemy.position.z;
    const distance = Math.hypot(dx, dz);
    const isBoss = data.type === 'boss' || data.type === 'dungeonBoss';
    if (isBoss) updateBossPhase(enemy);
    const bossProfile = isBoss ? getBossPhaseCombatProfile(data.phase) : null;

    if (data.bossWarning) {
      const warning = data.bossWarning;
      const warningAttack = data.activeBossAttack || bossProfile;
      const warningRadius = Math.max(1.6, stats.reach + (warningAttack?.radiusBonus || .45));
      warning.visible = data.telegraphTimer > 0 && data.alive;
      warning.position.set(
        enemy.position.x,
        (getTerrainHeight(enemy.position.x, enemy.position.z, data.baseY) ?? data.baseY) + .01,
        enemy.position.z
      );
      warning.scale.setScalar(warningRadius * (1 + Math.sin(clock.elapsedTime * 12) * .035));
      const warningColor = data.phase === 3 ? 0xff2020 : data.phase === 2 ? 0xffb02e : 0xff8738;
      warning.children.forEach((part, index) => {
        part.material.color.setHex(warningColor);
        part.material.opacity = index === 0
          ? .14 + Math.sin(clock.elapsedTime * 10) * .045
          : .72 + Math.sin(clock.elapsedTime * 12) * .18;
      });
    }

    data.slowTimer = Math.max(0, (data.slowTimer || 0) - dt);
    data.recoveryTimer = Math.max(0, (data.recoveryTimer || 0) - dt);
    data.staggerDecayTimer = Math.max(0, (data.staggerDecayTimer || 0) - dt);
    if (data.staggerDecayTimer <= 0) data.staggerMeter = 0;
    data.stunTimer = Math.max(0, (data.stunTimer || 0) - dt);
    const slowFactor = data.slowTimer > 0 ? .55 : 1;
    const speed = stats.speed * data.phaseMultiplier * slowFactor;
    const attackDamage = stats.damage * data.phaseMultiplier * (bossProfile?.damageMultiplier || 1);

    const hpRatio = Math.max(0, data.hp / data.maxHp);
    data.healthFill.scale.x = hpRatio;
    data.healthFill.position.x = -(1 - hpRatio) * 0.46;

    const showBar = distance < stats.aggro + 2;
    data.healthBar.visible = showBar;
    if (showBar && isBoss && !data.weaknessHintShown) {
      data.weaknessHintShown = true;
      toast(`${data.name} · จุดอ่อน: ${getWeaknessHint(data.type)}`);
    }
    if (showBar) {
      const barWorldRotation = camera.quaternion.clone();
      barWorldRotation.premultiply(enemy.quaternion.clone().invert());
      data.healthBar.quaternion.copy(barWorldRotation);
    }
    data.cooldown = Math.max(0, data.cooldown - dt);

    if (data.stunTimer > 0) {
      data.moving = false;
      if (distance < 42) updateCharacterAnimation(data, dt, player.rotation.y, enemy.rotation.y);
      continue;
    }

    data.moving = false;

    if (data.kind === 'animal' && data.type === 'deer') {
      if (distance < stats.aggro) {
        const away = new THREE.Vector3(-dx, 0, -dz).normalize();
        moveEnemySafely(enemy, away.x * dt * speed, away.z * dt * speed);
        enemy.rotation.y = Math.atan2(away.x, away.z);
        data.moving = true;
      } else {
        const t = performance.now() * 0.0004 + data.homeZ;
        const wanderX = data.homeX + Math.sin(t) * 1.6;
        const wanderZ = data.homeZ + Math.cos(t * .7) * 1.2;
        if (!worldStreamer.blocked(wanderX,wanderZ,.42) && !frontierWorld?.blocked(wanderX,wanderZ,.42) && !cityWorld?.blocked(wanderX,wanderZ,.42)) { enemy.position.x=wanderX; enemy.position.z=wanderZ; }
      }
    } else if (distance < stats.aggro) {
      const direction = new THREE.Vector3(dx, 0, dz).normalize();
      enemy.rotation.y = Math.atan2(direction.x, direction.z);

      if (distance > stats.reach) {
        moveEnemySafely(enemy, direction.x * dt * speed, direction.z * dt * speed);
        data.moving = true;
      } else if (isBoss) {
        // Boss attacks have a short, readable wind-up so players can dodge.
        if (distance > stats.reach + 1) {
          data.telegraphTimer = 0;
        } else if (data.cooldown <= 0 && data.telegraphTimer <= 0) {
          if (!Array.isArray(data.bossComboQueue) || data.bossComboStep >= data.bossComboQueue.length) {
            data.bossComboQueue = getBossCombo(data.phase, data.bossComboIndex++);
            data.bossComboStep = 0;
          }
          const lowHpSpecial = !data.lowHpSpecialUsed
            ? getLowHealthBossSpecial(data.type, data.hp / data.maxHp)
            : null;
          if (lowHpSpecial) {
            data.activeBossAttack = lowHpSpecial;
            data.lowHpSpecialUsed = true;
            data.bossComboQueue = null;
            data.bossComboStep = 0;
          } else {
            const comboPatternIndex = data.bossComboQueue[data.bossComboStep];
            data.activeBossAttack = getBossAttackPattern(data.phase, comboPatternIndex);
          }
          data.bossAttackIndex++;
          data.telegraphTimer = data.activeBossAttack.windup;
          data.attackTimer = data.telegraphTimer;
          // Lock the charge direction when the warning starts; players can dodge
          // by moving laterally while the boss rushes toward this position.
          data.bossChargeTarget = data.activeBossAttack.behavior === 'charge'
            ? { x: player.position.x, z: player.position.z }
            : null;
          toast(`${data.name} เตรียม ${data.activeBossAttack.attackName}! หลบออกจากวงเตือน!`);
        } else if (data.telegraphTimer > 0) {
          const activeAttack = data.activeBossAttack || bossProfile;
          data.telegraphTimer = Math.max(0, data.telegraphTimer - dt);
          data.attackTimer = data.telegraphTimer;

          // Charge attacks move during their readable wind-up. Collision-aware
          // movement keeps the boss from passing through streamed buildings.
          if (activeAttack.behavior === 'charge' && data.bossChargeTarget) {
            const chargeX = data.bossChargeTarget.x - enemy.position.x;
            const chargeZ = data.bossChargeTarget.z - enemy.position.z;
            const chargeDistance = Math.hypot(chargeX, chargeZ);
            if (chargeDistance > .12) {
              const chargeDirection = new THREE.Vector3(chargeX, 0, chargeZ).normalize();
              enemy.rotation.y = Math.atan2(chargeDirection.x, chargeDirection.z);
              const chargeStep = Math.min(chargeDistance, (activeAttack.chargeSpeed || 7) * dt);
              moveEnemySafely(enemy, chargeDirection.x * chargeStep, chargeDirection.z * chargeStep);
              data.moving = true;
            }
          }

          if (data.telegraphTimer <= 0) {
            const comboHasNext = Array.isArray(data.bossComboQueue) && data.bossComboStep < data.bossComboQueue.length - 1;
            data.bossComboStep++;
            data.cooldown = comboHasNext ? Math.max(.16, .42 - data.phase * .07) : stats.cooldown * activeAttack.cooldownMultiplier;
            data.recoveryTimer = comboHasNext ? .35 : activeAttack.recovery;
            if (!comboHasNext) {
              data.bossComboQueue = null;
              data.bossComboStep = 0;
            }
            data.bossChargeTarget = null;
            // Recheck the live positions and dodge invulnerability at impact.
            const impactDistance = Math.hypot(
              player.position.x - enemy.position.x,
              player.position.z - enemy.position.z
            );
            const attackRadius = stats.reach + activeAttack.radiusBonus;
            const finalAttackDamage = attackDamage * activeAttack.damageMultiplier;
            if (impactDistance <= attackRadius && invulnerabilityTimer <= 0) {
              const cls = classDefs[state.classId] || {};
              const incomingDamage = finalAttackDamage *
                (1 - armorReduction()) *
                (1 - (cls.damageReduction || 0));
              state.hp = Math.max(0, state.hp - incomingDamage);
              hurtAnimTimer = .3;
              cameraShake.trigger(.14);
              audio.play('hit');
              toast(`${data.name} โจมตีโดนคุณ -${Math.round(incomingDamage)} · บอสเปิดช่องสวนกลับ!`);
              if (state.hp <= 0) handlePlayerDeath();
              updateHud();
            } else {
              toast(`หลบสำเร็จ! บอสเปิดช่อง ${bossProfile.recovery.toFixed(1)} วินาที · โจมตีสวนได้แรงขึ้น`);
            }
          }
        }
      } else if (data.cooldown <= 0 && invulnerabilityTimer <= 0) {
        const cls = classDefs[state.classId] || {};
        const incomingDamage = attackDamage *
          (1 - armorReduction()) *
          (1 - (cls.damageReduction || 0));
        state.hp = Math.max(0, state.hp - incomingDamage);
        data.cooldown = stats.cooldown;
        data.attackTimer = .4;
        hurtAnimTimer = .3;
        cameraShake.trigger(.075);
        audio.play('hit');
        toast(`${data.name}โจมตีคุณ -${Math.round(incomingDamage)}`);
        if (state.hp <= 0) handlePlayerDeath();
        updateHud();
      }
    } else {
      const t = performance.now() * 0.0005 + data.homeZ;
      const wanderX = data.homeX + Math.sin(t) * 1.2;
      const wanderZ = data.homeZ + Math.cos(t * 0.7) * 0.8;
      if (!worldStreamer.blocked(wanderX,wanderZ,.5) && !frontierWorld?.blocked(wanderX,wanderZ,.5) && !cityWorld?.blocked(wanderX,wanderZ,.5)) { enemy.position.x=wanderX; enemy.position.z=wanderZ; }
    }

    const terrainY = getTerrainHeight(
      enemy.position.x,
      enemy.position.z,
      data.baseY
    );
    enemy.position.y = terrainY === null ? data.baseY : terrainY;

    if (!isBoss && distance < 42) {
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

    if (distance < 70) {
      updateCharacterAnimation(data, dt, yaw, enemy.rotation.y);
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
  adaptiveResolution.reset(renderer, settings.quality);
  renderer.shadowMap.enabled = settings.quality !== 'low';
  const shadowResolution = settings.quality === 'high'
    ? (isTouch ? 1536 : 2048)
    : settings.quality === 'medium' ? 1024 : 512;
  sunLight.shadow.mapSize.setScalar(shadowResolution);
  moon.shadow.mapSize.setScalar(shadowResolution);

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
  const perfToggle = $('#perf-monitor-toggle');
  if (perfToggle) perfToggle.checked = Boolean(settings.perfMonitor);
  performanceMonitor.setEnabled(settings.perfMonitor);
}

// ---------- Main Update ----------
function update(dt) {
  if (cutsceneDirector.active) {
    cutsceneDirector.update(dt);
    return;
  }
  cityWorld?.update(dt, player.position.x, player.position.z);
  townEventSystem.update(dt, player.position.x, player.position.z);
  worldEventSystem.update(player.position.x, player.position.z);
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
  updateCombo(dt);

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
    const stuckDodge = worldStreamer.blocked(player.position.x, player.position.z, .55) || frontierWorld?.blocked(player.position.x, player.position.z, .55) || cityWorld?.blocked(player.position.x, player.position.z, .55);
    const canDodgeTo = (x, z) => {
      if (!stuckDodge && (worldStreamer.blocked(x, z, .55) || frontierWorld?.blocked(x, z, .55) || cityWorld?.blocked(x, z, .55))) return false;
      return obstacles.every(obstacle => {
        const dx = x - obstacle.x;
        const dz = z - obstacle.z;
        const minDistance = .55 + obstacle.radius;
        return dx * dx + dz * dz >= minDistance * minDistance;
      });
    };

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

    const stuck = worldStreamer.blocked(player.position.x, player.position.z, playerRadius) || frontierWorld?.blocked(player.position.x, player.position.z, playerRadius) || cityWorld?.blocked(player.position.x, player.position.z, playerRadius);
    const canMoveTo = (x, z) => {
      // Never trap a body that already overlaps an obstacle (spawn, teleport,
      // or a prop streamed in on top of it): let it walk back out.
      if (!stuck && (worldStreamer.blocked(x, z, playerRadius) || frontierWorld?.blocked(x, z, playerRadius) || cityWorld?.blocked(x, z, playerRadius))) return false;
      return obstacles.every(obstacle => {
        const dx = x - obstacle.x;
        const dz = z - obstacle.z;
        const minDistance = playerRadius + obstacle.radius;
        return dx * dx + dz * dz >= minDistance * minDistance;
      });
    };

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
playerCharacter.update(dt, {
  moving,
  running: isRunning,
  attacking: attackAnimTimer > 0,
  dodging: isDodging,
  hurt: hurtAnimTimer > 0,
  jumping: !grounded,
  time: playerAnimTime,
  armor: state.armor
});
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
      groundDelta >= -1.0 &&
      groundDelta <= 1.0;

    const landing =
      verticalVelocity <= 0 &&
      player.position.y <= terrainHeight + 0.2;

    if (followingGround) {
      // Ease small terrain steps (voxel cells are ~0.5-1 m tall). Snapping the
      // feet to every cell edge is what made the camera bob on rough ground.
      const step = terrainHeight - player.position.y;
      const ease = 1 - Math.pow(1e-6, dt);
      player.position.y += step * Math.min(1, ease * 1.6);
      if (Math.abs(step) < 0.02) player.position.y = terrainHeight;
      verticalVelocity = 0;
      grounded = true;
    } else if (landing) {
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
  frontierWorld?.update(player.position);
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

  // The look-at point is smoothed separately (and faster) than the eye, so a
  // single terrain step or frame hitch cannot make the view snap sideways.
  if (!cameraReady) {
    smoothTarget.copy(cameraTarget);
    cameraEyeY = cameraTarget.y;
    cameraReady = true;
  } else {
    smoothTarget.lerp(
      cameraTarget,
      Math.min(.55, 1 - Math.pow(1e-10, dt))
    );

    // Height is stabilized twice: a slow spring keeps the eye from chasing
    // every step, and a dead zone swallows the sub-centimetre noise left over
    // from easing the feet over cell edges.
    const eyeTarget = cameraTarget.y;
    const eyeDelta = eyeTarget - cameraEyeY;
    if (Math.abs(eyeDelta) > 0.12) {
      const k = 1 - Math.pow(1e-4, Math.min(dt, 1 / 20));
      cameraEyeY += eyeDelta * k;
    }
    smoothTarget.y = cameraEyeY;
  }

  const horizontal = Math.cos(pitch) * distance;

  desiredCamera.set(
    smoothTarget.x + Math.sin(yaw) * horizontal,
    smoothTarget.y + Math.sin(pitch) * distance,
    smoothTarget.z + Math.cos(yaw) * horizontal
  );

  // Sample the ground under the *target* eye position and lift the target
  // before smoothing. Doing the correction on the target keeps the actual eye
  // on a smooth exponential path instead of snapping up when a voxel step
  // slides underneath it.
  const desiredGround = getTerrainHeight(
    desiredCamera.x,
    desiredCamera.z,
    desiredCamera.y
  );
  if (desiredGround !== null) {
    const minY = desiredGround + .7;
    if (desiredCamera.y < minY) {
      desiredCamera.y = THREE.MathUtils.lerp(desiredCamera.y, minY, Math.min(1, dt * 6));
    }
  }

  // Cap the smoothing step: chunk streaming and GC cause occasional long
  // frames, and letting a 300 ms frame move the eye 30% of the way to its
  // target reads as a camera jolt while walking.
  const cameraDt = Math.min(dt, 1 / 30);
  camera.position.lerp(desiredCamera, 1 - Math.pow(.001, cameraDt));
  camera.lookAt(smoothTarget);
  cameraShake.apply(camera, smoothTarget);

  // Keep the eye above the ground so walking up a slope does not clip the
  // near plane through the terrain.
  const cameraGround = getTerrainHeight(
    camera.position.x,
    camera.position.z,
    camera.position.y
  );
  if (cameraGround === null) {
    cameraGroundY = null;
  } else {
    // The old safety clamp teleported the eye to each new terrain sample.
    // Filter the floor height and ease the last-resort lift to avoid jolts.
    const groundTarget = cameraGround + .42;
    if (cameraGroundY === null) {
      cameraGroundY = groundTarget;
    } else {
      const response = groundTarget > cameraGroundY ? 18 : 7;
      cameraGroundY = THREE.MathUtils.damp(
        cameraGroundY,
        groundTarget,
        response,
        cameraDt
      );
    }

    const minEyeY = Math.max(cameraGroundY, cameraGround + .22);
    if (camera.position.y < minEyeY) {
      camera.position.y = THREE.MathUtils.damp(
        camera.position.y,
        minEyeY,
        24,
        cameraDt
      );
    }
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
  combatFeedback.update(dt);
  updateProjectiles(dt);

  if (campFire.visible) {
    const flame = campFire.children[3];
    const fireLight = campFire.children[4];
    const t = performance.now() * .001;
    flame.scale.setScalar(.92 + Math.sin(t * 9) * .08);
    flame.material.opacity = .72 + Math.sin(t * 13) * .14;
    fireLight.intensity = 2.1 + Math.sin(t * 7.3) * .5;

    if (emberGeometry) {
      const ep = emberGeometry.attributes.position;
      for (let i = 0; i < emberVelocities.length; i++) {
        const v = emberVelocities[i];
        let y = ep.getY(i) + v.vy * dt;
        if (y > 2.2) {
          y = 0;
          ep.setX(i, (Math.random() - .5) * .4);
          ep.setZ(i, (Math.random() - .5) * .4);
        }
        ep.setY(i, y);
        ep.setX(i, ep.getX(i) + v.vx * dt);
        ep.setZ(i, ep.getZ(i) + v.vz * dt);
      }
      ep.needsUpdate = true;
    }
  }

  if (dungeonCave.visible) {
    const t = performance.now() * .001;
    for (const torch of dungeonTorchLights) {
      const flicker =
        Math.sin(t * 8.5 + torch.seed) * .5 +
        Math.sin(t * 13.7 + torch.seed * 1.9) * .25;
      torch.flame.scale.set(
        .92 + flicker * .08,
        .92 + Math.abs(flicker) * .16,
        .92 + flicker * .08
      );
      torch.core.material.opacity = .78 + Math.abs(flicker) * .2;
      torch.light.intensity = (2.65 + flicker * .55) * dungeonAtmosphere;
    }
  }

  updateWorld(dt, yaw);
  updateCompanion(dt, yaw);
  systems.update(dt, yaw);

  // Publish a sanitized local snapshot only when a transport is connected.
  multiplayerSession.updateLocalSnapshot({
    position: player.position,
    yaw: player.rotation.y,
    hp: state.hp,
    level: state.level,
    animation: dodgeTimer > 0 ? 'dodge' : attackAnimTimer > 0 ? 'attack' : moving ? (isRunning ? 'run' : 'walk') : 'idle'
  });
  multiplayerUI.update(performance.now());

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
const journalOpenButton = $('#journal-open');
const journalPanel = $('#journal-panel');
const journalSummary = $('#journal-summary');
const journalRegions = $('#journal-regions');

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
  if (except !== 'journal') {
    journalPanel.classList.add('hidden');
    journalOpenButton.setAttribute('aria-expanded', 'false');
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
    !journalPanel.classList.contains('hidden') ||
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

function renderExplorationJournal() {
  const journal = getExplorationJournal(state);
  const totals = explorationTotals(journal);
  journalSummary.textContent = `สำรวจพื้นที่ ${systems.exploredPercent()}% · ค้นพบความลับ ${totals.found} / ${totals.total} จุด · สำเร็จ ${totals.completedRegions} / ${journal.length} ภูมิภาค`;
  journalRegions.replaceChildren();

  for (const region of journal) {
    const card = document.createElement('article');
    card.className = 'journal-region';
    const heading = document.createElement('div');
    heading.className = 'journal-region-head';
    const title = document.createElement('strong');
    title.textContent = region.name;
    const count = document.createElement('span');
    count.textContent = `${region.discovered}/${region.total}`;
    heading.append(title, count);

    const track = document.createElement('div');
    track.className = 'journal-progress';
    const fill = document.createElement('i');
    fill.style.width = `${region.total ? region.discovered / region.total * 100 : 0}%`;
    track.append(fill);

    const list = document.createElement('ul');
    list.className = 'journal-secret-list';
    for (const secret of region.secrets) {
      const item = document.createElement('li');
      item.textContent = secret.discovered ? `✓ ${secret.name}` : '◇ ความลับที่ยังไม่ค้นพบ';
      item.className = secret.discovered ? 'found' : 'unknown';
      list.append(item);
    }

    const status = document.createElement('small');
    status.className = 'journal-reward';
    status.textContent = region.rewardClaimed ? 'รางวัลภูมิภาค: รับแล้ว'
      : region.complete ? 'รางวัลภูมิภาค: พร้อมรับ' : 'รางวัลภูมิภาค: ยังไม่ครบ';
    card.append(heading, track, list, status);
    journalRegions.append(card);
  }
}

function toggleJournalPanel() {
  const willOpen = journalPanel.classList.contains('hidden');
  closePanels(willOpen ? 'journal' : null);
  journalPanel.classList.toggle('hidden', !willOpen);
  journalOpenButton.setAttribute('aria-expanded', String(willOpen));
  if (willOpen) renderExplorationJournal();
}

journalOpenButton.addEventListener('click', toggleJournalPanel);
$('#journal-close').addEventListener('click', () => closePanels());

$('#settings-open').addEventListener('click', () => {
  closePanels('settings');
  ui.settings.classList.remove('hidden');
});

$('#settings-close').addEventListener('click', () => {
  closePanels();
});

const perfMonitorToggle = $('#perf-monitor-toggle');
if (perfMonitorToggle) perfMonitorToggle.addEventListener('change', (e) => {
  settings.perfMonitor = e.target.checked;
  performanceMonitor.setEnabled(settings.perfMonitor);
  toast(settings.perfMonitor ? 'เปิดหน้าทดสอบประสิทธิภาพแล้ว' : 'ปิดหน้าทดสอบประสิทธิภาพแล้ว');
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

const upgradeWeaponButton = $('#upgrade-weapon');
if (upgradeWeaponButton) {
  upgradeWeaponButton.addEventListener('click', () => systems.upgradeGear('weapon'));
}
const upgradeArmorButton = $('#upgrade-armor');
if (upgradeArmorButton) {
  upgradeArmorButton.addEventListener('click', () => systems.upgradeGear('armor'));
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

// ---------- Mobile Orientation ----------
installLandscapePrompt();

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

const prologue = createPrologue({
  onDone() {
    toast('ยินดีต้อนรับสู่อาณาจักรที่ถูกลืม');
  }
});

function prologueUpdate(dt) {
  updateDayNight(dt);
  updateShadowFocus();
  updateWeather(dt);
  updateFireflies(dt);
  if (motes.visible) updateMotes();
  updateWorld(dt, 0);
  sky.position.copy(camera.position);
  prologue.applyCamera(camera, player.position);
  prologue.update(dt);
}

function animate(now = performance.now()) {
  requestAnimationFrame(animate);

  const fpsLimit = Number(settings.fpsLimit);
  if (fpsLimit > 0 && now - lastFrameTime < 1000 / fpsLimit - 1.5) return;
  lastFrameTime = now;

  const dt = Math.min(clock.getDelta(), .05);
  cameraShake.update(dt);
  if (prologue.active) {
    prologueUpdate(dt);
  } else if (!isPanelOpen()) {
    update(dt);
  }
  adaptiveResolution.update(now, settings.quality, settings.fpsLimit, renderer, cinematic);
  performanceMonitor.update(now, settings.quality, settings.fpsLimit, adaptiveResolution.ratio);
  cinematic.render();
}

prologue.start();
animate();
