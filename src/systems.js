import * as THREE from 'three';

export const RARITY = {
  common: { name: 'ธรรมดา', color: '#c9c9c9' },
  uncommon: { name: 'หายาก', color: '#7fd47f' },
  rare: { name: 'หายากมาก', color: '#7aa6f0' },
  epic: { name: 'ตำนาน', color: '#c992f0' }
};

export const MATERIAL_INFO = {
  herb: { name: 'สมุนไพร', color: 0x69b56b },
  ore: { name: 'แร่เหล็ก', color: 0x9ba6b4 },
  wood: { name: 'ไม้โบราณ', color: 0x8b5e3c },
  bone: { name: 'กระดูกผู้พิทักษ์', color: 0xd9d3c2 },
  darkShard: { name: 'เศษเงามืด', color: 0x9c72d4 },
  essence: { name: 'แก่นวิญญาณ', color: 0x74c9d6 },
  stoneHeart: { name: 'หัวใจศิลา', color: 0xd28b5c },
  bossRelic: { name: 'เศษชิ้นส่วนโบราณ', color: 0xe2b45c },
  meat: { name: 'เนื้อสด', color: 0xd48c7e }
};

export const RECIPES = [
  { id: 'potion', name: 'ยาฟื้นฟู', cost: { herb: 3 }, give: { potions: 1 }, repeatable: true },
  { id: 'greatsword', name: 'ดาบใหญ่', cost: { ore: 3, bone: 2 }, give: { item: 'greatsword' } },
  { id: 'staff', name: 'คทาเวท', cost: { wood: 2, darkShard: 2 }, give: { item: 'staff' } },
  { id: 'axe', name: 'ขวานศึก', cost: { ore: 4, wood: 2 }, give: { item: 'axe' }, rarity: 'uncommon' },
  { id: 'bow', name: 'ธนูวิญญาณ', cost: { wood: 4, essence: 2 }, give: { item: 'bow' }, rarity: 'rare' },
  { id: 'froststaff', name: 'คทาเหมันต์', cost: { wood: 3, essence: 3, darkShard: 2 }, give: { item: 'froststaff' }, rarity: 'rare' },
  { id: 'iron', name: 'เกราะเหล็ก', cost: { ore: 4, bone: 1 }, give: { item: 'iron' } },
  { id: 'shadow', name: 'เกราะเงา', cost: { darkShard: 3, wood: 2 }, give: { item: 'shadow' } },
  { id: 'spellFire', name: 'เวทลูกไฟ', cost: { darkShard: 2, bone: 1 }, give: { spell: 'firebolt' } },
  { id: 'spellHeal', name: 'เวทรักษา', cost: { herb: 4, bone: 1 }, give: { spell: 'heal' } },
  { id: 'voidblade', name: 'ดาบเงาว่าง', cost: { bossRelic: 1, stoneHeart: 2, darkShard: 4 }, give: { item: 'voidblade' }, rarity: 'epic' },
  { id: 'dragonplate', name: 'เกราะมังกรร้าง', cost: { bossRelic: 1, stoneHeart: 3, ore: 5 }, give: { item: 'dragonplate' }, rarity: 'epic' },
  { id: 'runerobe', name: 'ผ้าคลุมรูน', cost: { essence: 3, darkShard: 2, wood: 2 }, give: { item: 'runerobe' }, rarity: 'rare' },
  { id: 'ranger', name: 'เกราะพราน', cost: { leather: 3, wood: 2, bone: 2 }, give: { item: 'ranger' }, rarity: 'uncommon' },
  { id: 'upgrade_weapon', name: 'ลับคมอาวุธ', cost: { ore: 3, darkShard: 1 }, give: { upgrade: 'weapon' }, repeatable: true },
  { id: 'upgrade_armor', name: 'เสริมเกราะ', cost: { ore: 3, bone: 2 }, give: { upgrade: 'armor' }, repeatable: true }
];

export const SPELLS = {
  firebolt: { name: 'ลูกไฟ', cost: 15, power: 4, range: 12 },
  heal: { name: 'การรักษา', cost: 25, power: 35, range: 0 }
};

export const SHOP_ITEMS = [
  { id: 'potion', name: 'ยาฟื้นฟู', price: 25 },
  { id: 'herb', name: 'สมุนไพร', price: 12 },
  { id: 'wood', name: 'ไม้โบราณ', price: 20 },
  { id: 'ore', name: 'แร่เหล็ก', price: 40 },
  { id: 'bone', name: 'กระดูกผู้พิทักษ์', price: 28 },
  { id: 'darkShard', name: 'เศษเงามืด', price: 60 },
  { id: 'essence', name: 'แก่นวิญญาณ', price: 55 },
  { id: 'stoneHeart', name: 'หัวใจศิลา', price: 90 },
  { id: 'iron', name: 'เกราะเหล็ก', price: 180 },
  { id: 'shadow', name: 'เกราะเงา', price: 320 },
  { id: 'voidblade', name: 'ดาบเงาว่าง', price: 900, rarity: 'epic' },
  { id: 'dragonplate', name: 'เกราะมังกรร้าง', price: 1000, rarity: 'epic' }
];

export const SIDE_QUESTS = {
  herb: {
    title: 'สมุนไพรเพื่อชีวิต',
    desc: 'เก็บสมุนไพร 5 ชิ้นให้นักพรต',
    target: 5,
    reward: { potions: 2, xp: 50 }
  },
  hunt: {
    title: 'ล่าผู้พิทักษ์',
    desc: 'กำจัดผู้พิทักษ์ 3 ตัว',
    target: 3,
    reward: { ore: 3, xp: 100 }
  }
};

const LOOT_TABLE = {
  guardian: [
    { id: 'bone', chance: 1, min: 1, max: 2 },
    { id: 'darkShard', chance: .45, min: 1, max: 1 }
  ],
  wraith: [
    { id: 'essence', chance: .85, min: 1, max: 2 },
    { id: 'darkShard', chance: .3, min: 1, max: 1 }
  ],
  brute: [
    { id: 'stoneHeart', chance: 1, min: 1, max: 1 },
    { id: 'ore', chance: .7, min: 1, max: 2 }
  ],
  boss: [
    { id: 'bossRelic', chance: 1, min: 1, max: 2 },
    { id: 'stoneHeart', chance: 1, min: 2, max: 3 },
    { id: 'darkShard', chance: 1, min: 3, max: 5 }
  ],
  dungeonBoss: [
    { id: 'bossRelic', chance: 1, min: 2, max: 3 },
    { id: 'essence', chance: 1, min: 3, max: 5 },
    { id: 'darkShard', chance: 1, min: 4, max: 6 }
  ],
  wolf: [
    { id: 'bone', chance: .9, min: 1, max: 2 },
    { id: 'darkShard', chance: .25, min: 1, max: 1 }
  ],
  deer: [
    { id: 'herb', chance: 1, min: 1, max: 2 },
    { id: 'meat', chance: .9, min: 1, max: 2 },
    { id: 'wood', chance: .6, min: 1, max: 1 }
  ]
};

const ITEM_RARITY = {
  essence: 'uncommon',
  stoneHeart: 'rare',
  bossRelic: 'epic',
  voidblade: 'epic',
  dragonplate: 'epic',
  staff: 'uncommon',
  shadow: 'rare'
};

export function rarityOf(id) {
  return ITEM_RARITY[id] || 'common';
}

const NPC_DATA = [
  {
    id: 'sage',
    name: 'นักพรตผู้ลืมเลือน',
    position: [5.5, 0, 1],
    color: 0x7486b8,
    quest: 'herb',
    schedule: [
      { from: 0, to: 0.45, position: [5.5, 0, 1] },
      { from: 0.45, to: 0.75, position: [1.5, 0, -43] },
      { from: 0.75, to: 1, position: [5.5, 0, 1] }
    ],
    lines: [
      'เจ้าเดินเข้ามาในดินแดนที่แม้แต่ความทรงจำยังลืมไปแล้ว...',
      'สมุนไพรในป่ายังมีชีวิต เก็บมาให้ข้า 5 ชิ้นเถิด ข้าจะตอบแทนด้วยยาฟื้นฟู',
      'เมื่อฟ้าสาง ข้าจะไปยืนสวดที่ศาลเจ้า ตามหาข้าได้ที่นั่น'
    ],
    choices: [
      { label: 'ถามเรื่องสมุนไพร', text: 'สมุนไพรเรืองแสงเติบโตตามทางป่า เก็บมาให้ครบห้าชิ้นแล้วกลับมาหาข้า', relation: 2 },
      { label: 'ขอพรให้เดินทางปลอดภัย', text: 'ขอให้แสงที่เหลืออยู่ในใจเจ้านำทาง', relation: 1 }
    ]
  },
  {
    id: 'smith',
    name: 'ช่างตีเหล็กเร่ร่อน',
    nameColor: '#d8a86a',
    position: [9, 0, -44],
    color: 0xa8784a,
    quest: 'hunt',
    schedule: [
      { from: 0, to: 0.35, position: [9, 0, -44] },
      { from: 0.35, to: 0.7, position: [15, 0, -56] },
      { from: 0.7, to: 1, position: [9, 0, -44] }
    ],
    lines: [
      'เฮ้ นักร่อนเร่! เหล็กและกระดูกที่เจ้าเก็บมาได้ ฉันเปลี่ยนเป็นอาวุธให้ได้',
      'ฆ่าผู้พิทักษ์ซะ 3 ตัว แล้วเอาแร่มาให้ฉัน แล้วฉันจะสอนวิธีคราฟต์ให้',
      'ตอนเย็นฉันย้ายเตาไปใกล้เหมืองแร่ อย่าลืมแวะไปหา'
    ],
    choices: [
      { label: 'ถามเรื่องผู้พิทักษ์', text: 'เล็งข้อต่อให้แม่น พวกมันช้าแต่เกราะหนา', relation: 1 },
      { label: 'ขอดูสินค้า', text: 'เอาวัตถุดิบมา แล้วฉันจะตีของดีให้', relation: 2 }
    ]
  },
  {
    id: 'merchant',
    name: 'พ่อค้าในหมอก',
    nameColor: '#9ad6c2',
    position: [12, 0, 4],
    color: 0x4d8f7e,
    shop: true,
    schedule: [
      { from: 0, to: 0.4, position: [12, 0, 4] },
      { from: 0.4, to: 0.72, position: [18, 0, -66] },
      { from: 0.72, to: 1, position: [12, 0, 4] }
    ],
    lines: [
      'ทองไม่มีวันเน่าในดินแดนนี้ ของวิญญาณนั่นต่างหากที่เน่าได้',
      'ของข้าล้วนมาจากผู้ที่เดินทางไม่ถึงปลายทาง ซื้อไปเถิด อย่าถามที่มา',
      'กด B เมื่อใดก็ได้เพื่อเปิดร้านของข้า แม้ข้าจะเดินทางไปยังแม่น้ำ'
    ],
    choices: [
      { label: 'ถามข่าวในดินแดน', text: 'หมอกกลืนเส้นทางที่คนเดินทางน้อย ระวังตัวไว้', relation: 1 },
      { label: 'ขอส่วนลด', text: 'พิสูจน์ฝีมือเสียก่อน แล้วค่อยว่ากันเรื่องราคา', relation: 2 }
    ]
  }
];

const NODE_POSITIONS = {
  herb: [[3, -4], [-5, -12], [6, -20], [-4, -28], [5, -36], [-6, -44], [4, -55]],
  ore: [[10, -40], [15, -52], [8, -58], [16, -62]],
  wood: [[-11, -8], [-13, -18], [12, -26], [-12, -34], [11, -48]]
};

export function createSystems(ctx) {
  const {
    scene, player, state, toast, gainXp, updateHud,
    refreshEquipmentUI, defeatEnemy, enemies, staticLandmarks, regions,
    getTerrainHeight, audio
  } = ctx;

  function surfaceY(x, z, baseY = 0) {
    if (typeof getTerrainHeight !== 'function') return baseY;
    const height = getTerrainHeight(x, z, baseY);
    return Number.isFinite(height) ? height : baseY;
  }

  const $ = (selector) => document.querySelector(selector);

  const nodes = [];
  const drops = [];
  const effects = [];
  const npcs = [];
  let dialogue = null;
  let shopOpen = false;
  let minimapContext = null;

  function initState() {
    if (!state.inventory || typeof state.inventory !== 'object') {
      state.inventory = { sword: 1, leather: 1 };
    }
    if (!Number.isFinite(state.gold)) state.gold = 60;
    if (typeof state.mana !== 'number') state.mana = 100;
    if (typeof state.maxMana !== 'number') state.maxMana = 100;
    if (typeof state.maxHp !== 'number') state.maxHp = 100;
    if (!state.skills || typeof state.skills !== 'object') {
      state.skills = { might: 0, vitality: 0, arcana: 0 };
    }
    if (!Array.isArray(state.spells)) state.spells = [];
    if (typeof state.activeSpell !== 'string') state.activeSpell = null;
    if (!state.quests || typeof state.quests !== 'object') state.quests = {};
    if (!state.relationships || typeof state.relationships !== 'object' || Array.isArray(state.relationships)) state.relationships = {};
    if (!state.npcMemories || typeof state.npcMemories !== 'object' || Array.isArray(state.npcMemories)) state.npcMemories = {};
    if (!state.worldHistory || typeof state.worldHistory !== 'object' || Array.isArray(state.worldHistory)) state.worldHistory = {};
    for (const npc of NPC_DATA) {
      state.relationships[npc.id] = THREE.MathUtils.clamp(Number(state.relationships[npc.id]) || 0, -100, 100);
      if (!state.npcMemories[npc.id] || typeof state.npcMemories[npc.id] !== 'object' || Array.isArray(state.npcMemories[npc.id])) state.npcMemories[npc.id] = {};
    }
  }

  const MEMORY_REACTIONS = {
    guardianKill: { field: 'guardians', reaction: { sage: 1, smith: 2, merchant: 1 } },
    wolfKill: { field: 'wolves', reaction: { sage: 1, smith: 1 } },
    deerKill: { field: 'deer', reaction: { sage: -2, merchant: -1 } },
    dungeonClear: { field: 'dungeons', reaction: { sage: 3, smith: 3, merchant: 3 } },
    mainQuestComplete: { field: 'mainQuests', reaction: { sage: 3, smith: 2, merchant: 1 } },
    herbQuestComplete: { field: 'herbQuests', reaction: { sage: 4 } },
    huntQuestComplete: { field: 'huntQuests', reaction: { smith: 4 } },
    trade: { field: 'trades', reaction: { merchant: 1 } },
    campRest: { field: 'campRests', reaction: {} },
    cookedMeal: { field: 'cookedMeals', reaction: {} },
    dialogueChoice: { field: 'kindWords', reaction: {} }
  };

  function rememberAction(action) {
    const event = MEMORY_REACTIONS[action];
    if (!event) return;
    state.worldHistory[action] = Math.min(999, (Number(state.worldHistory[action]) || 0) + 1);
    for (const npc of NPC_DATA) {
      const memory = state.npcMemories[npc.id] || (state.npcMemories[npc.id] = {});
      memory[event.field] = Math.min(999, (Number(memory[event.field]) || 0) + 1);
      memory.lastAction = action;
      const change = event.reaction[npc.id] || 0;
      if (change) state.relationships[npc.id] = THREE.MathUtils.clamp((Number(state.relationships[npc.id]) || 0) + change, -100, 100);
    }
  }

  function rememberedGreeting(npc) {
    const memory = state.npcMemories[npc.id] || {};
    const relation = Number(state.relationships[npc.id]) || 0;
    if (memory.dungeons) {
      return npc.id === 'sage' ? 'ข้ายังจำได้ว่าเจ้าทำลายคำสาปในถ้ำ แสงเริ่มกลับคืนสู่ผืนดินแล้ว' :
        npc.id === 'smith' ? 'ข่าวเรื่องถ้ำต้องสาปแพร่ไปทั่ว ข้าจำได้ว่าเจ้าเป็นคนจัดการมัน' :
          'คนที่กลับจากถ้ำต้องสาปได้มีไม่มาก ข้าจำการกระทำนั้นไว้';
    }
    if (memory.mainQuests) return 'ข้าจำได้ว่าเจ้าช่วยปกป้องซากโบราณ ผู้คนเริ่มกล้าออกจากที่ซ่อนแล้ว';
    if (npc.id === 'smith' && memory.guardians) return `ข้าเห็นเจ้าปราบผู้พิทักษ์มาแล้ว ${memory.guardians} ตัว ฝีมือใช้ได้เลย`;
    if (npc.id === 'sage' && memory.deer) return 'ข้าจำการล่าสัตว์ของเจ้าได้ ป่าต้องการการดูแลพอ ๆ กับผู้คน';
    if (memory.wolves) return 'ข้าได้ยินว่าเจ้าช่วยลดฝูงหมาป่าที่คุกคามเส้นทางเดินทาง';
    if (npc.id === 'merchant' && memory.trades > 1) return `กลับมาอีกแล้วสินะ เราค้าขายกันมา ${memory.trades} ครั้งแล้ว`;
    if (npc.id === 'sage' && memory.herbQuests) return 'สมุนไพรที่เจ้านำมาให้ยังช่วยผู้เดินทางได้อีกหลายคน';
    if (npc.id === 'smith' && memory.huntQuests) return 'ข้ายังจำได้ว่าเจ้าช่วยกำจัดผู้พิทักษ์ งานตีเหล็กของข้าปลอดภัยขึ้นมาก';
    if (relation < 0) return 'ข้ายังจำสิ่งที่เจ้าทำไว้ได้ อย่าคิดว่ากาลเวลาจะลบมัน';
    if (memory.campRests) return 'เห็นเจ้าตั้งค่ายพักอยู่หลายครั้ง รู้จักดูแลตัวเองระหว่างเดินทางก็ดีแล้ว';
    if (memory.cookedMeals) return 'กลิ่นอาหารจากค่ายของเจ้าทำให้ข้านึกถึงวันที่โลกนี้ยังสงบ';
    if (memory.visits > 1) return 'กลับมาอีกแล้ว ยินดีที่ได้พบเจ้า';
    return null;
  }

  function getCount(id) {
    return Math.max(0, Number(state.inventory[id]) || 0);
  }

  function addItem(id, amount = 1) {
    const equipmentIds = [
      'sword', 'greatsword', 'staff', 'voidblade', 'axe', 'bow', 'froststaff',
      'leather', 'iron', 'shadow', 'dragonplate', 'runerobe', 'ranger'
    ];
    if (!MATERIAL_INFO[id] && !equipmentIds.includes(id)) return;

    state.inventory[id] = getCount(id) + amount;
    refreshInventoryUI();
    if (typeof refreshEquipmentUI === 'function') refreshEquipmentUI();
  }

  function owns(id) {
    return getCount(id) > 0;
  }

  function makeNodeMesh(type) {
    const group = new THREE.Group();

    if (type === 'herb') {
      const material = new THREE.MeshStandardMaterial({ color: 0x4f9b5c, roughness: 1 });
      for (let i = 0; i < 3; i++) {
        const leaf = new THREE.Mesh(new THREE.ConeGeometry(.22, .75, 5), material);
        leaf.position.set((i - 1) * .24, .38, (i % 2) * .18);
        leaf.rotation.z = (i - 1) * .3;
        leaf.castShadow = true;
        group.add(leaf);
      }
    } else if (type === 'ore') {
      const rock = new THREE.Mesh(
        new THREE.DodecahedronGeometry(.62, 0),
        new THREE.MeshStandardMaterial({
          color: 0x9ba6b4,
          roughness: .7,
          metalness: .35,
          emissive: 0x263341
        })
      );
      rock.position.y = .5;
      rock.castShadow = true;
      group.add(rock);
    } else {
      const log = new THREE.Mesh(
        new THREE.CylinderGeometry(.3, .34, 1.5, 7),
        new THREE.MeshStandardMaterial({ color: 0x7a5032, roughness: 1 })
      );
      log.rotation.z = Math.PI / 2;
      log.position.y = .35;
      log.castShadow = true;
      group.add(log);
    }

    return group;
  }

  function spawnNode(type, x, z) {
    const mesh = makeNodeMesh(type);
    const y = surfaceY(x, z, 0);
    mesh.position.set(x, y, z);
    mesh.userData = {
      kind: 'resource',
      type,
      amount: 2,
      maxAmount: 2,
      respawn: 0,
      baseY: y
    };
    scene.add(mesh);
    nodes.push(mesh);
  }

  function makeDropMesh(type, rarity = rarityOf(type)) {
    const color = MATERIAL_INFO[type] ? MATERIAL_INFO[type].color : 0xffffff;
    const size = { common: .22, uncommon: .26, rare: .3, epic: .38 }[rarity] || .22;
    const mesh = new THREE.Mesh(
      new THREE.OctahedronGeometry(size),
      new THREE.MeshStandardMaterial({
        color,
        emissive: color,
        emissiveIntensity: rarity === 'epic' ? 1.6 : .9,
        roughness: .3
      })
    );
    mesh.userData = {
      kind: 'drop',
      type,
      rarity,
      baseY: .6,
      phase: Math.random() * 6
    };
    return mesh;
  }

  function spawnDrop(type, position, spread = .8, rarity = rarityOf(type)) {
    const mesh = makeDropMesh(type, rarity);
    const x = position.x + (Math.random() - .5) * spread;
    const z = position.z + (Math.random() - .5) * spread;
    const y = surfaceY(x, z, position.y || 0) + .6;
    mesh.position.set(x, y, z);
    mesh.userData.baseY = y;
    scene.add(mesh);
    drops.push(mesh);
  }

  function makeNpcMesh(data) {
    const group = new THREE.Group();

    const robe = new THREE.Mesh(
      new THREE.ConeGeometry(.52, 1.55, 8),
      new THREE.MeshStandardMaterial({ color: data.color, roughness: .9 })
    );
    robe.position.y = .78;
    robe.castShadow = true;
    group.add(robe);

    const head = new THREE.Mesh(
      new THREE.SphereGeometry(.3, 10, 8),
      new THREE.MeshStandardMaterial({ color: 0xd9b48f, roughness: .95 })
    );
    head.position.y = 1.72;
    head.castShadow = true;
    group.add(head);

    const mark = new THREE.Mesh(
      new THREE.TorusGeometry(.5, .035, 6, 20),
      new THREE.MeshBasicMaterial({ color: data.color })
    );
    mark.rotation.x = Math.PI / 2;
    mark.position.y = .06;
    group.add(mark);

    const y = surfaceY(data.position[0], data.position[2], data.position[1]);
    group.position.set(data.position[0], y, data.position[2]);
    group.userData = {
      kind: 'npc',
      npcId: data.id,
      baseY: y,
      target: new THREE.Vector3(data.position[0], y, data.position[2]),
      walkPhase: Math.random() * Math.PI * 2,
      moving: false,
      facing: 'south'
    };
    scene.add(group);
    return group;
  }

  function makeBeam(from, to, color) {
    const geometry = new THREE.BufferGeometry().setFromPoints([from, to]);
    const material = new THREE.LineBasicMaterial({
      color,
      transparent: true,
      opacity: 1
    });
    const line = new THREE.Line(geometry, material);
    scene.add(line);
    effects.push({ mesh: line, life: .28, maxLife: .28, kind: 'beam' });
  }

  function makeBurst(position, color) {
    const ring = new THREE.Mesh(
      new THREE.SphereGeometry(.5, 12, 8),
      new THREE.MeshBasicMaterial({
        color,
        transparent: true,
        opacity: .8,
        depthWrite: false
      })
    );
    ring.position.copy(position);
    ring.position.y += 1;
    scene.add(ring);
    effects.push({ mesh: ring, life: .5, maxLife: .5, kind: 'burst' });
  }

  function impact(position, color = 0xffb28a) {
    const count = 9;
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(count * 3);
    const velocity = [];
    for (let i = 0; i < count; i++) {
      positions.set([position.x, position.y + .8, position.z], i * 3);
      velocity.push(new THREE.Vector3((Math.random() - .5) * 2.4, .7 + Math.random() * 1.8, (Math.random() - .5) * 2.4));
    }
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    const material = new THREE.PointsMaterial({ color, size: .12, transparent: true, opacity: .8, depthWrite: false });
    const particles = new THREE.Points(geometry, material);
    scene.add(particles);
    effects.push({ mesh: particles, life: .28, maxLife: .28, kind: 'impact', velocity });
  }

  function advanceQuest(id, amount = 1) {
    const quest = SIDE_QUESTS[id];
    const progress = state.quests[id];
    if (!quest || !progress || progress.status !== 'active') return;

    progress.count = Math.min(quest.target, progress.count + amount);

    if (progress.count >= quest.target) {
      progress.status = 'done';
      rememberAction(id === 'herb' ? 'herbQuestComplete' : 'huntQuestComplete');
      const reward = quest.reward;

      if (reward.potions) state.potions += reward.potions;
      if (reward.ore) addItem('ore', reward.ore);
      if (reward.xp) gainXp(reward.xp);

      if (audio) audio.play('quest');
      toast(`ภารกิจรอบสำเร็จ: ${quest.title}`);
      updateHud();
    }

    refreshQuestUI();
  }

  function onEnemyKilled(enemy) {
    const type = enemy.userData.type || 'guardian';
    if (type === 'guardian' || type === 'boss') rememberAction('guardianKill');
    else if (type === 'deer') rememberAction('deerKill');
    else if (type === 'wolf') rememberAction('wolfKill');
    const table = LOOT_TABLE[type] || LOOT_TABLE.guardian;

    for (const entry of table) {
      if (Math.random() > entry.chance) continue;

      const amount = entry.min + Math.floor(Math.random() * (entry.max - entry.min + 1));
      const rarity = rarityOf(entry.id);

      for (let i = 0; i < amount; i++) {
        spawnDrop(entry.id, enemy.position, .9, rarity);
      }

      if (rarity !== 'common') {
        toast(`ดรอป${RARITY[rarity].name}: ${MATERIAL_INFO[entry.id].name}`);
      }
    }

    if (type === 'guardian') advanceQuest('hunt', 1);
  }

  function canCraft(recipe) {
    return Object.entries(recipe.cost).every(
      ([id, amount]) => getCount(id) >= amount
    );
  }

  function recipeOwned(recipe) {
    if (recipe.repeatable) return false;
    if (recipe.give.item) return owns(recipe.give.item);
    if (recipe.give.spell) return state.spells.includes(recipe.give.spell);
    return false;
  }

  function craft(recipeId) {
    const recipe = RECIPES.find((entry) => entry.id === recipeId);
    if (!recipe) return;
    if (recipeOwned(recipe)) return toast('ครอบครองอยู่แล้ว');
    if (!canCraft(recipe)) return toast('วัตถุดิบไม่เพียงพอ');

    for (const [id, amount] of Object.entries(recipe.cost)) {
      state.inventory[id] = getCount(id) - amount;
    }

    if (recipe.give.potions) {
      state.potions += recipe.give.potions;
      updateHud();
    }
    if (recipe.give.item) {
      addItem(recipe.give.item, 1);
    }
    if (recipe.give.spell) {
      state.spells.push(recipe.give.spell);
      if (!state.activeSpell) state.activeSpell = recipe.give.spell;
    }
    if (recipe.give.upgrade === 'weapon') {
      state.equipmentUpgrades = state.equipmentUpgrades || {};
      state.equipmentUpgrades[state.weapon] = (state.equipmentUpgrades[state.weapon] || 0) + 1;
    }
    if (recipe.give.upgrade === 'armor') {
      state.equipmentUpgrades = state.equipmentUpgrades || {};
      const key = `armor:${state.armor}`;
      state.equipmentUpgrades[key] = (state.equipmentUpgrades[key] || 0) + 1;
    }

    if (audio) audio.play('craft');
    toast(`คราฟต์สำเร็จ: ${recipe.name}`);
    refreshInventoryUI();
  }

  function selectSpell(id) {
    if (!state.spells.includes(id)) return toast('ยังไม่ได้เรียนเวทนี้');
    state.activeSpell = id;
    refreshInventoryUI();
    toast(`เลือกเวท: ${SPELLS[id].name}`);
  }

  function castSpell() {
    const id = state.activeSpell;
    if (!id || !state.spells.includes(id)) return toast('ยังไม่ได้เลือกเวทมนตร์');

    const spell = SPELLS[id];
    if (state.mana < spell.cost) return toast('มนตรากำลังไม่เพียงพอ');

    state.mana -= spell.cost;
    if (audio) audio.play('spell');

    const arcana = Math.max(0, Number(state.skills && state.skills.arcana) || 0);
    const classBonus = state.characterClass === 'mage' ? .2 : 0;
    const armorBonus = state.armor === 'runerobe' ? .1 : 0;
    const power = Math.round(spell.power * (1 + arcana * .1 + classBonus + armorBonus));

    if (id === 'heal') {
      state.hp = Math.min(state.maxHp || 100, state.hp + power);
      makeBurst(player.position, 0x8ce6a3);
      toast(`เวทรักษา +${power} HP`);
      updateHud();
    } else {
      const forwardX = Math.sin(player.rotation.y);
      const forwardZ = Math.cos(player.rotation.y);
      let target = null;
      let bestScore = -Infinity;

      for (const enemy of enemies) {
        if (!enemy.userData.alive) continue;

        const dx = enemy.position.x - player.position.x;
        const dz = enemy.position.z - player.position.z;
        const distance = Math.hypot(dx, dz);
        if (distance > spell.range || distance < .001) continue;

        const facing = (dx * forwardX + dz * forwardZ) / distance;
        if (facing < .2) continue;

        const score = facing - distance * .03;
        if (score > bestScore) {
          bestScore = score;
          target = enemy;
        }
      }

      const from = player.position.clone().add(new THREE.Vector3(0, 1.35, 0));
      const to = target
        ? target.position.clone().add(new THREE.Vector3(0, 1.2, 0))
        : player.position.clone().add(
            new THREE.Vector3(forwardX * spell.range, 1.2, forwardZ * spell.range)
          );

      makeBeam(from, to, 0xff9a4d);

      if (target) {
        makeBurst(target.position, 0xff7a3d);
        target.userData.hp -= power;
        if (target.userData.hp <= 0) {
          defeatEnemy(target);
        } else {
          toast(`ลูกไฟโดนศัตรู -${power}`);
        }
      } else {
        toast('ลูกไฟพุ่งเข้าสู่ความมืด');
      }
    }

    refreshInventoryUI();
  }

  function renderMaterials() {
    const container = $('#material-list');
    if (!container) return;

    container.innerHTML = Object.entries(MATERIAL_INFO)
      .map(([id, info]) => (
        `<span>${info.name} <strong id="material-${id}">${getCount(id)}</strong></span>`
      ))
      .join('');
  }

  function renderCrafts() {
    const container = $('#craft-list');
    if (!container) return;

    container.innerHTML = RECIPES.map((recipe) => {
      const cost = Object.entries(recipe.cost)
        .map(([id, amount]) => `${MATERIAL_INFO[id].name}×${amount}`)
        .join(' · ');
      const disabled = recipeOwned(recipe) || !canCraft(recipe) ? ' disabled' : '';
      const label = recipeOwned(recipe) ? 'มีแล้ว' : recipe.name;
      const rarity = recipe.rarity
        ? ` <em class="rarity ${recipe.rarity}">[${RARITY[recipe.rarity].name}]</em>`
        : '';
      return (
        `<button type="button" class="craft-btn" data-recipe="${recipe.id}"${disabled}>` +
        `<b>${label}${rarity}</b><small>${cost}</small></button>`
      );
    }).join('');

  }

  function renderSpells() {
    for (const id of Object.keys(SPELLS)) {
      const button = $(`#spell-${id}`);
      if (!button) continue;

      const learned = state.spells.includes(id);
      button.disabled = !learned;
      button.classList.toggle('selected', state.activeSpell === id);
      button.title = learned
        ? `${SPELLS[id].name} · ใช้มนตรา ${SPELLS[id].cost}`
        : 'ยังไม่ได้เรียนเวทนี้';
    }

    const castButton = $('#cast');
    if (castButton) castButton.disabled = !state.activeSpell;
  }

  function refreshInventoryUI() {
    renderMaterials();
    renderCrafts();
    renderSpells();
  }

  function refreshQuestUI() {
    const list = $('#quest-list');
    if (!list) return;

    const mainText = state.questStage === 0
      ? 'เดินทางไปยังหอคอยร้าง'
      : state.questStage === 1
        ? 'กำจัดผู้พิทักษ์ที่เฝ้าซากโบราณ'
        : 'สำเร็จ! สำรวจดินแดนต่อไป';

    const sideHtml = Object.entries(SIDE_QUESTS)
      .filter(([id]) => state.quests[id] && state.quests[id].status !== 'locked')
      .map(([id, quest]) => {
        const progress = state.quests[id];
        const status = progress.status === 'done' ? '✓ สำเร็จ' : 'กำลังทำ';
        return (
          `<div class="quest-entry">` +
          `<b>${quest.title}</b>` +
          `<small>${quest.desc} (${progress.count}/${quest.target})</small>` +
          `<small>${status}</small>` +
          `</div>`
        );
      })
      .join('');

    list.innerHTML = (
      `<div class="quest-entry main-quest">` +
      `<b>✦ ภารกิจหลัก</b><small>${mainText}</small></div>` +
      sideHtml
    );
  }

  function acceptQuest(id) {
    const quest = SIDE_QUESTS[id];
    if (!quest) return;

    const progress = state.quests[id];
    if (progress && progress.status !== 'locked') return;

    state.quests[id] = { status: 'active', count: 0 };
    toast(`รับภารกิจ: ${quest.title}`);
    refreshQuestUI();
    updateHud();
  }

  function questAvailable(npc) {
    if (!npc.quest) return false;
    const progress = state.quests[npc.quest];
    return !progress || progress.status === 'locked';
  }

  function renderDialogue() {
    if (!dialogue) return;

    const nameEl = $('#dialogue-name');
    const textEl = $('#dialogue-text');
    const nextEl = $('#dialogue-next');
    if (!nameEl || !textEl || !nextEl) return;

    const npc = dialogue.npc;
    const lines = dialogue.lines || npc.lines;
    const isLast = dialogue.index >= lines.length - 1;

    const relation = Math.round(Number((state.relationships || {})[npc.id]) || 0);
    nameEl.textContent = `${npc.name} · ความสัมพันธ์ ${relation}`;
    textEl.textContent = lines[dialogue.index];
    nextEl.textContent = isLast
      ? (questAvailable(npc) ? 'รับภารกิจ' : 'จบการสนทนา')
      : 'ถัดไป';
    const choicesEl = $('#dialogue-choices');
    if (choicesEl) choicesEl.innerHTML = (dialogue.index === 0 ? (npc.choices || []) : [])
      .map((choice, index) => `<button type="button" class="dialogue-choice" data-choice="${index}">${choice.label}</button>`).join('');
    if (dialogue.choiceText) textEl.textContent = dialogue.choiceText;
  }

  function chooseDialogue(index) {
    if (!dialogue) return;
    const choice = (dialogue.npc.choices || [])[index];
    if (!choice) return;
    state.relationships = state.relationships || {};
    state.relationships[dialogue.npc.id] = THREE.MathUtils.clamp((Number(state.relationships[dialogue.npc.id]) || 0) + choice.relation, -100, 100);
    rememberAction('dialogueChoice');
    dialogue.choiceText = choice.text;
    dialogue.index = 1;
    renderDialogue();
  }

  function closeDialogue() {
    dialogue = null;
    const panel = $('#dialogue-panel');
    if (panel) panel.classList.add('hidden');
  }

  function openDialogue(npc) {
    state.npcMemories = state.npcMemories || {};
    const memory = state.npcMemories[npc.id] || (state.npcMemories[npc.id] = {});
    memory.visits = Math.min(999, (Number(memory.visits) || 0) + 1);
    const greeting = rememberedGreeting(npc);
    dialogue = { npc, index: 0, lines: greeting ? [greeting, ...npc.lines] : npc.lines };
    const panel = $('#dialogue-panel');
    if (panel) panel.classList.remove('hidden');
    renderDialogue();
  }

  function interact() {
    if (dialogue) {
      closeDialogue();
      return true;
    }

    let nearest = null;
    let nearestDistance = Infinity;

    for (const npc of npcs) {
      const distance = player.position.distanceTo(npc.position);
      if (distance < 4 && distance < nearestDistance) {
        nearest = npc;
        nearestDistance = distance;
      }
    }

    if (nearest) {
      const data = NPC_DATA.find((entry) => entry.id === nearest.userData.npcId);
      if (data) openDialogue(data);
      return true;
    }

    for (const node of nodes) {
      if (node.userData.amount <= 0) continue;

      const distance = player.position.distanceTo(node.position);
      if (distance < 2.5 && distance < nearestDistance) {
        nearest = node;
        nearestDistance = distance;
      }
    }

    if (nearest && nearest.userData.kind === 'resource') {
      const type = nearest.userData.type;
      const amount = nearest.userData.amount;

      nearest.userData.amount = 0;
      nearest.userData.respawn = 50;
      nearest.visible = false;
      addItem(type, amount);
      if (type === 'herb') advanceQuest('herb', amount);

      toast(`เก็บ${MATERIAL_INFO[type].name} +${amount}`);
      return true;
    }

    return false;
  }

  function renderShop() {
    const gold = Math.max(0, Math.floor(state.gold || 0));
    const buyContainer = $('#shop-buy');
    const sellContainer = $('#shop-sell');
    const goldLabel = $('#shop-gold');
    if (goldLabel) goldLabel.textContent = String(gold);

    if (buyContainer) {
      buyContainer.innerHTML = SHOP_ITEMS.map((item) => {
        const relation = THREE.MathUtils.clamp(Number(state.relationships?.merchant) || 0, -20, 20);
        const price = Math.max(1, Math.floor(item.price * (1 - relation * .01)));
        const owned = item.id !== 'potion' && owns(item.id) &&
          !['herb', 'ore', 'wood', 'bone', 'darkShard', 'essence', 'stoneHeart'].includes(item.id);
        const disabled = gold < price || owned ? ' disabled' : '';
        const label = owned ? 'มีแล้ว' : item.name;
        const rarity = item.rarity
          ? ` <em class="rarity ${item.rarity}">[${RARITY[item.rarity].name}]</em>`
          : '';
        return (
          `<button type="button" data-buy="${item.id}"${disabled}>` +
          `<span>${label}${rarity}</span><strong>${price} ◈</strong></button>`
        );
      }).join('');
    }

    if (sellContainer) {
      const sellable = SHOP_ITEMS.filter((item) =>
        MATERIAL_INFO[item.id] && getCount(item.id) > 0
      );
      sellContainer.innerHTML = sellable.length
        ? sellable.map((item) => (
            `<button type="button" data-sell="${item.id}">` +
            `<span>${item.name} ×${getCount(item.id)}</span>` +
            `<strong>+${Math.max(1, Math.floor(item.price * .5))} ◈</strong></button>`
          )).join('')
        : '<small>ไม่มีวัตถุดิบสำหรับขาย</small>';
    }

    const hudGold = $('#gold-count');
    if (hudGold) hudGold.textContent = String(gold);
  }

  function buyItem(id) {
    const item = SHOP_ITEMS.find((entry) => entry.id === id);
    if (!item) return;
    const relation = THREE.MathUtils.clamp(Number(state.relationships?.merchant) || 0, -20, 20);
    const price = Math.max(1, Math.floor(item.price * (1 - relation * .01)));
    if (state.gold < price) return toast('ทองไม่เพียงพอ');

    state.gold -= price;
    rememberAction('trade');
    if (id === 'potion') state.potions++;
    else addItem(id, 1);

    if (audio) audio.play('coin');
    toast(`ซื้อ${item.name}แล้ว`);
    updateHud();
    renderShop();
    refreshInventoryUI();
  }

  function sellItem(id) {
    const item = SHOP_ITEMS.find((entry) => entry.id === id);
    if (!item || !MATERIAL_INFO[id] || getCount(id) <= 0) return;

    const value = Math.max(1, Math.floor(item.price * .5));
    state.inventory[id] = getCount(id) - 1;
    state.gold += value;
    rememberAction('trade');

    if (audio) audio.play('coin');
    toast(`ขาย${item.name} ได้ ${value} ทอง`);
    updateHud();
    renderShop();
    refreshInventoryUI();
  }

  function openShop() {
    shopOpen = true;
    const panel = $('#shop-panel');
    if (panel) panel.classList.remove('hidden');
    const button = $('#shop-open');
    if (button) button.setAttribute('aria-expanded', 'true');
    renderShop();
  }

  function closeShop() {
    shopOpen = false;
    const panel = $('#shop-panel');
    if (panel) panel.classList.add('hidden');
    const button = $('#shop-open');
    if (button) button.setAttribute('aria-expanded', 'false');
  }

  function toggleShop() {
    if (shopOpen) closeShop();
    else openShop();
  }

  function updateMinimap(yaw) {
    const canvas = $('#minimap');
    if (!canvas) return;
    if (!minimapContext) minimapContext = canvas.getContext('2d');

    const g = minimapContext;
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const radius = Math.min(centerX, centerY) - 6;
    const scale = 1.5;

    g.clearRect(0, 0, canvas.width, canvas.height);
    g.save();
    g.beginPath();
    g.arc(centerX, centerY, radius, 0, Math.PI * 2);
    g.clip();

    g.fillStyle = 'rgba(9, 13, 22, 0.88)';
    g.fillRect(0, 0, canvas.width, canvas.height);

    g.strokeStyle = 'rgba(210, 190, 140, 0.12)';
    g.lineWidth = 1;
    for (let offset = -radius; offset <= radius; offset += 18) {
      g.beginPath();
      g.moveTo(centerX + offset, 0);
      g.lineTo(centerX + offset, canvas.height);
      g.stroke();
      g.beginPath();
      g.moveTo(0, centerY + offset);
      g.lineTo(canvas.width, centerY + offset);
      g.stroke();
    }

    const plot = (position, color, size = 3) => {
      if (!position) return;

      const dx = position.x - player.position.x;
      const dz = position.z - player.position.z;
      const cos = Math.cos(yaw);
      const sin = Math.sin(yaw);
      const sx = dx * cos + dz * sin;
      const sy = -dx * sin + dz * cos;
      const px = centerX + sx * scale;
      const py = centerY + sy * scale;

      if (Math.hypot(px - centerX, py - centerY) > radius - size) return;

      g.fillStyle = color;
      g.beginPath();
      g.arc(px, py, size, 0, Math.PI * 2);
      g.fill();
    };

    for (const landmark of staticLandmarks) {
      plot(landmark.position, landmark.color, landmark.size || 4);
    }

    for (const npc of npcs) plot(npc.position, '#7fd4e8', 4);
    for (const node of nodes) {
      if (node.userData.amount > 0) {
        plot(node.position, `#${MATERIAL_INFO[node.userData.type].color.toString(16).padStart(6, '0')}`, 2.5);
      }
    }
    for (const drop of drops) plot(drop.position, '#f0d69a', 2);
    for (const enemy of enemies) {
      if (enemy.userData.alive) plot(enemy.position, '#ff5b52', 3.5);
    }

    g.restore();

    g.strokeStyle = '#c9a86a';
    g.lineWidth = 2;
    g.beginPath();
    g.arc(centerX, centerY, radius, 0, Math.PI * 2);
    g.stroke();

    g.fillStyle = '#f5e3b3';
    g.beginPath();
    g.moveTo(centerX, centerY - 7);
    g.lineTo(centerX - 5, centerY + 5);
    g.lineTo(centerX + 5, centerY + 5);
    g.closePath();
    g.fill();

    const compass = $('#compass-text');
    if (compass) {
      const degrees = ((yaw * 180 / Math.PI) % 360 + 360) % 360;
      const direction = degrees < 45 || degrees >= 315
        ? 'N' : degrees < 135 ? 'E' : degrees < 225 ? 'S' : 'W';
      compass.textContent = `${direction} · ${String(Math.round(degrees)).padStart(3, '0')}°`;
    }
  }

  function drawWorldMap(yaw) {
    const canvas = $('#world-map');
    if (!canvas) return;

    const g = canvas.getContext('2d');
    const width = canvas.width;
    const height = canvas.height;
    const minX = -70;
    const maxX = 70;
    const minZ = -170;
    const maxZ = 20;
    const toX = (x) => (x - minX) / (maxX - minX) * width;
    const toY = (z) => (z - minZ) / (maxZ - minZ) * height;

    g.fillStyle = '#0a0f18';
    g.fillRect(0, 0, width, height);

    g.strokeStyle = '#ffffff10';
    g.lineWidth = 1;
    for (let x = -70; x <= 70; x += 10) {
      g.beginPath();
      g.moveTo(toX(x), 0);
      g.lineTo(toX(x), height);
      g.stroke();
    }
    for (let z = -170; z <= 20; z += 10) {
      g.beginPath();
      g.moveTo(0, toY(z));
      g.lineTo(width, toY(z));
      g.stroke();
    }

    g.fillStyle = '#1d3a2c88';
    g.fillRect(0, toY(-65), toX(-8), toY(12) - toY(-65));

    g.strokeStyle = '#2c5578';
    g.lineWidth = 14;
    g.beginPath();
    g.moveTo(0, toY(-72));
    g.bezierCurveTo(width * .3, toY(-66), width * .7, toY(-76), width, toY(-72));
    g.stroke();

    for (const region of regions) {
      const px = toX(region.center.x);
      const py = toY(region.center.z);
      const radius = region.radius * (width / (maxX - minX));
      const discovered = state.discoveredRegions.includes(region.id);

      g.beginPath();
      g.arc(px, py, radius, 0, Math.PI * 2);
      g.fillStyle = discovered ? '#d8b87812' : '#05070da8';
      g.fill();
      g.strokeStyle = discovered ? '#c9a86a66' : '#ffffff18';
      g.lineWidth = 1.5;
      g.stroke();

      g.fillStyle = discovered ? '#e6d3a4' : '#7a7b80';
      g.font = '13px sans-serif';
      g.textAlign = 'center';
      g.fillText(discovered ? region.name : '???', px, py - radius - 6);
    }

    const dot = (position, color, size, label) => {
      const px = toX(position.x);
      const py = toY(position.z);

      g.fillStyle = color;
      g.beginPath();
      g.arc(px, py, size, 0, Math.PI * 2);
      g.fill();

      if (label) {
        g.fillStyle = '#e8e1d3';
        g.font = '11px sans-serif';
        g.textAlign = 'left';
        g.fillText(label, px + size + 4, py + 4);
      }
    };

    for (const landmark of staticLandmarks) {
      if (state.discoveredRegions.includes(landmark.region)) {
        const name = landmark.region === 'hamlet' && state.settlementStage >= 2 ? 'หมู่บ้านปลอดภัย'
          : landmark.region === 'hamlet' && state.settlementStage >= 1 ? 'ชุมชนผู้รอดชีวิต' : landmark.name;
        dot(landmark.position, landmark.color, 5, name);
      }
    }
    for (const npc of npcs) dot(npc.position, '#7fd4e8', 4, 'NPC');
    for (const node of nodes) {
      if (node.userData.amount > 0) {
        dot(node.position, `#${MATERIAL_INFO[node.userData.type].color.toString(16).padStart(6, '0')}`, 3);
      }
    }
    for (const drop of drops) dot(drop.position, '#f0d69a', 3);
    for (const enemy of enemies) {
      if (!enemy.userData.alive) continue;
      const isBoss = enemy.userData.type === 'boss';
      dot(enemy.position, isBoss ? '#ff4fd8' : '#ff5b52', isBoss ? 8 : 4,
        isBoss ? 'BOSS' : null);
    }

    g.save();
    g.translate(toX(player.position.x), toY(player.position.z));
    g.rotate(yaw);
    g.fillStyle = '#f5e3b3';
    g.beginPath();
    g.moveTo(0, -11);
    g.lineTo(-7, 8);
    g.lineTo(7, 8);
    g.closePath();
    g.fill();
    g.restore();

    const coords = $('#map-coords');
    if (coords) {
      coords.textContent = `ตำแหน่ง: X ${Math.round(player.position.x)} · Z ${Math.round(player.position.z)}`;
    }
  }

  function updateNpcSchedules(dt) {
    const time = Number(state.dayTime) || 0;

    for (const npc of npcs) {
      const data = NPC_DATA.find((entry) => entry.id === npc.userData.npcId);
      if (!data || !Array.isArray(data.schedule)) continue;

      const stop = data.schedule.find((entry) =>
        time >= entry.from && time < entry.to
      ) || data.schedule[0];

      const villageDayStops = { sage: [25, 0, -25], smith: [29, 0, -30], merchant: [33, 0, -25] };
      const targetPosition = state.settlementStage >= 1 && time >= .08 && time < .5
        ? villageDayStops[data.id] || stop.position
        : stop.position;
      const goal = npc.userData.target;
      const stopKey = `${targetPosition[0]}:${targetPosition[2]}`;
      if (npc.userData.scheduleStop !== stopKey) {
        npc.userData.scheduleStop = stopKey;
        goal.set(targetPosition[0], surfaceY(targetPosition[0], targetPosition[2], targetPosition[1]), targetPosition[2]);
      }

      const dx = goal.x - npc.position.x;
      const dz = goal.z - npc.position.z;
      const distance = Math.hypot(dx, dz);

      if (distance > .35) {
        npc.userData.moving = true;
        const step = Math.min(distance, dt * .85);
        npc.position.x += dx / distance * step;
        npc.position.z += dz / distance * step;
        npc.userData.heightTimer = (npc.userData.heightTimer || 0) + dt;
        if (npc.userData.heightTimer >= .15) {
          npc.userData.heightTimer = 0;
          npc.position.y = surfaceY(npc.position.x, npc.position.z, goal.y);
        }
        npc.rotation.y = Math.atan2(dx, dz);
        npc.userData.facing = Math.abs(dx) > Math.abs(dz) ? (dx > 0 ? 'east' : 'west') : (dz > 0 ? 'south' : 'north');
      } else {
        npc.userData.moving = false;
      }
      npc.userData.walkPhase += dt * (npc.userData.moving ? 8 : 2);
      npc.children[0].rotation.z = npc.userData.moving ? Math.sin(npc.userData.walkPhase) * .08 : 0;
      npc.children[1].position.y = 1.72 + (npc.userData.moving ? Math.abs(Math.sin(npc.userData.walkPhase)) * .035 : 0);
    }
  }

  function update(dt, yaw) {
    updateNpcSchedules(dt);

    const maxMana = state.maxMana || 100;
    state.mana = Math.min(maxMana, state.mana + 3 * dt);

    const manaFill = $('#mana-fill');
    const manaText = $('#mana-text');
    if (manaFill) manaFill.style.width = `${state.mana / maxMana * 100}%`;
    if (manaText) manaText.textContent = `${Math.ceil(state.mana)} / ${maxMana}`;

    for (const node of nodes) {
      if (node.userData.amount > 0) continue;

      node.userData.respawn -= dt;
      if (node.userData.respawn <= 0) {
        node.userData.amount = node.userData.maxAmount;
        node.userData.respawn = 0;
        node.visible = true;
      }
    }

    const time = performance.now() * .003;
    for (let i = drops.length - 1; i >= 0; i--) {
      const drop = drops[i];
      drop.rotation.y += dt * 1.6;
      drop.position.y = drop.userData.baseY +
        Math.sin(time + drop.userData.phase) * .16;

      if (player.position.distanceTo(drop.position) < 1.6) {
        addItem(drop.userData.type, 1);
        const rarity = drop.userData.rarity || 'common';
        const tag = rarity === 'common' ? '' : `[${RARITY[rarity].name}] `;
        if (audio) audio.play('pickup');
        toast(`เก็บ${tag}${MATERIAL_INFO[drop.userData.type].name} +1`);
        scene.remove(drop);
        drop.geometry.dispose();
        drop.material.dispose();
        drops.splice(i, 1);
      }
    }

    for (let i = effects.length - 1; i >= 0; i--) {
      const effect = effects[i];
      effect.life -= dt;
      const ratio = Math.max(0, effect.life / effect.maxLife);
      effect.mesh.material.opacity = ratio;

      if (effect.kind === 'burst') {
        effect.mesh.scale.setScalar(1 + (1 - ratio) * 2.2);
      }
      if (effect.kind === 'impact') {
        const positions = effect.mesh.geometry.attributes.position;
        for (let p = 0; p < positions.count; p++) {
          positions.array[p * 3] += effect.velocity[p].x * dt;
          positions.array[p * 3 + 1] += effect.velocity[p].y * dt;
          positions.array[p * 3 + 2] += effect.velocity[p].z * dt;
          effect.velocity[p].y -= dt * 5;
        }
        positions.needsUpdate = true;
      }

      if (effect.life <= 0) {
        scene.remove(effect.mesh);
        effect.mesh.geometry.dispose();
        effect.mesh.material.dispose();
        effects.splice(i, 1);
      }
    }

    const hint = $('#interaction-hint');
    if (hint && !dialogue) {
      let text = '';

      for (const npc of npcs) {
        if (player.position.distanceTo(npc.position) < 4) {
          text = npc.userData.npcId === 'merchant'
            ? 'กด E คุย · B เปิดร้านค้า'
            : 'กด E / ใช้ เพื่อสนทนา';
          break;
        }
      }

      if (!text) {
        for (const node of nodes) {
          if (node.userData.amount > 0 &&
              player.position.distanceTo(node.position) < 2.5) {
            text = `กด E / ใช้ เพื่อเก็บ${MATERIAL_INFO[node.userData.type].name}`;
            break;
          }
        }
      }

      if (text) hint.textContent = text;
    }

    updateMinimap(yaw);

    const mapPanel = $('#map-panel');
    if (mapPanel && !mapPanel.classList.contains('hidden')) {
      drawWorldMap(yaw);
    }

    renderSpells();
  }

  function serializeWorld() {
    return {
      nodes: nodes.map((node) => ({
        type: node.userData.type,
        x: node.position.x,
        z: node.position.z,
        amount: node.userData.amount,
        respawn: node.userData.respawn
      })),
      drops: drops.map((drop) => ({
        type: drop.userData.type,
        rarity: drop.userData.rarity,
        x: drop.position.x,
        z: drop.position.z
      }))
    };
  }

  function deserializeWorld(data) {
    if (!data) return;

    if (Array.isArray(data.nodes)) {
      nodes.forEach((node, index) => {
        const saved = data.nodes[index];
        if (!saved || saved.type !== node.userData.type) return;

        const amount = THREE.MathUtils.clamp(
          Math.round(Number(saved.amount) || 0), 0, node.userData.maxAmount
        );
        node.userData.amount = amount;
        node.userData.respawn = Math.max(0, Number(saved.respawn) || 0);
        node.visible = amount > 0;
      });
    }

    if (Array.isArray(data.drops)) {
      for (const drop of drops) {
        scene.remove(drop);
        drop.geometry.dispose();
        drop.material.dispose();
      }
      drops.length = 0;

      for (const saved of data.drops) {
        if (!MATERIAL_INFO[saved.type]) continue;
        if (!Number.isFinite(saved.x) || !Number.isFinite(saved.z)) continue;
        const rarity = RARITY[saved.rarity] ? saved.rarity : rarityOf(saved.type);
        spawnDrop(saved.type, new THREE.Vector3(saved.x, 0, saved.z), 0, rarity);
      }
    }
  }

  function restoreState() {
    initState();

    const inventory = {};
    for (const [id, value] of Object.entries(state.inventory)) {
      const amount = Math.floor(Number(value));
      if (Number.isFinite(amount) && amount > 0) inventory[id] = amount;
    }
    state.inventory = inventory;
    state.gold = Math.max(0, Math.floor(Number(state.gold) || 0));
    if (!state.inventory.sword) state.inventory.sword = 1;
    if (!state.inventory.leather) state.inventory.leather = 1;

    const skillCaps = { might: 5, vitality: 3, arcana: 3, precision: 3, ward: 3 };
    const skills = {};
    for (const [id, cap] of Object.entries(skillCaps)) {
      const rank = state.skills && state.skills[id];
      skills[id] = THREE.MathUtils.clamp(
        Math.round(Number(rank) || 0), 0, cap
      );
    }
    state.skills = skills;
    state.relationships = state.relationships || {};
    state.npcMemories = state.npcMemories || {};
    state.worldHistory = state.worldHistory || {};
    for (const npc of NPC_DATA) {
      state.relationships[npc.id] = THREE.MathUtils.clamp(Number(state.relationships[npc.id]) || 0, -100, 100);
      const memory = state.npcMemories[npc.id] || (state.npcMemories[npc.id] = {});
      for (const field of ['guardians', 'wolves', 'deer', 'dungeons', 'mainQuests', 'herbQuests', 'huntQuests', 'trades', 'campRests', 'cookedMeals', 'kindWords', 'visits']) {
        memory[field] = THREE.MathUtils.clamp(Math.floor(Number(memory[field]) || 0), 0, 999);
      }
      if (!Object.prototype.hasOwnProperty.call(MEMORY_REACTIONS, memory.lastAction)) memory.lastAction = null;
    }
    state.maxHp = 100 + skills.vitality * 15;
    state.maxMana = 100 + skills.arcana * 12;
    state.hp = THREE.MathUtils.clamp(state.hp, 0, state.maxHp);
    state.mana = THREE.MathUtils.clamp(
      Number(state.mana) || 0, 0, state.maxMana
    );
    state.spells = state.spells.filter((id) => SPELLS[id]);
    state.activeSpell = SPELLS[state.activeSpell] &&
      state.spells.includes(state.activeSpell) ? state.activeSpell : null;

    const quests = {};
    for (const id of Object.keys(SIDE_QUESTS)) {
      const saved = state.quests[id];
      if (!saved) continue;

      const status = ['active', 'done'].includes(saved.status) ? saved.status : 'locked';
      quests[id] = {
        status,
        count: THREE.MathUtils.clamp(
          Math.round(Number(saved.count) || 0), 0, SIDE_QUESTS[id].target
        )
      };
    }
    state.quests = quests;
  }

  initState();

  for (const [type, positions] of Object.entries(NODE_POSITIONS)) {
    for (const [x, z] of positions) spawnNode(type, x, z);
  }

  for (const data of NPC_DATA) npcs.push(makeNpcMesh(data));

  const nextButton = $('#dialogue-next');
  const choicesContainer = $('#dialogue-choices');
  if (choicesContainer) choicesContainer.addEventListener('click', (event) => {
    const button = event.target.closest('[data-choice]');
    if (button) chooseDialogue(Number(button.dataset.choice));
  });
  if (nextButton) {
    nextButton.addEventListener('click', () => {
      if (!dialogue) return;

      const npc = dialogue.npc;
      if (dialogue.index < npc.lines.length - 1) {
        dialogue.index++;
        renderDialogue();
        return;
      }

      if (questAvailable(npc)) acceptQuest(npc.quest);
      closeDialogue();
      if (npc.shop) openShop();
    });
  }

  const closeButton = $('#dialogue-close');
  if (closeButton) closeButton.addEventListener('click', closeDialogue);

  const craftContainer = $('#craft-list');
  if (craftContainer) {
    craftContainer.addEventListener('click', (event) => {
      const button = event.target.closest('[data-recipe]');
      if (button) craft(button.dataset.recipe);
    });
  }

  const spellContainer = $('#spell-list');
  if (spellContainer) {
    spellContainer.addEventListener('click', (event) => {
      const button = event.target.closest('[data-spell]');
      if (button) selectSpell(button.dataset.spell);
    });
  }

  const shopBuyContainer = $('#shop-buy');
  if (shopBuyContainer) {
    shopBuyContainer.addEventListener('click', (event) => {
      const button = event.target.closest('[data-buy]');
      if (button && !button.disabled) buyItem(button.dataset.buy);
    });
  }

  const shopSellContainer = $('#shop-sell');
  if (shopSellContainer) {
    shopSellContainer.addEventListener('click', (event) => {
      const button = event.target.closest('[data-sell]');
      if (button) sellItem(button.dataset.sell);
    });
  }

  const shopOpenButton = $('#shop-open');
  if (shopOpenButton) shopOpenButton.addEventListener('click', toggleShop);
  const shopCloseButton = $('#shop-close');
  if (shopCloseButton) shopCloseButton.addEventListener('click', closeShop);

  refreshInventoryUI();
  renderShop();
  refreshQuestUI();

  return {
    owns,
    getCount,
    addItem,
    interact,
    castSpell,
    impact,
    onEnemyKilled,
    advanceQuest,
    update,
    serializeWorld,
    deserializeWorld,
    restoreState,
    drawWorldMap,
    refreshInventoryUI,
    refreshQuestUI,
    closeDialogue,
    rememberAction,
    openShop,
    closeShop,
    toggleShop,
    renderShop
  };
}
