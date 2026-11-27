import * as THREE from 'three';
import {
  createCharacterAtlas,
  createCharacterSprite,
  updateCharacterAnimation
} from './pixelSprites.js';
import { SECRETS, WORLD_BOUNDS } from './worldData.js';
import { claimSecretRegionReward } from './secret-region-rewards.js';

export const RARITY = {
  common: { name: 'ธรรมดา', color: '#c9c9c9' },
  uncommon: { name: 'หายาก', color: '#7fd47f' },
  rare: { name: 'หายากมาก', color: '#7aa6f0' },
  epic: { name: 'ตำนาน', color: '#c992f0' },
  legendary: { name: 'เลเจนดารี', color: '#ffcf5a' }
};

export const MATERIAL_INFO = {
  herb: { name: 'สมุนไพร', color: 0x69b56b },
  ore: { name: 'แร่เหล็ก', color: 0x9ba6b4 },
  wood: { name: 'ไม้โบราณ', color: 0x8b5e3c },
  bone: { name: 'กระดูกผู้พิทักษ์', color: 0xd9d3c2 },
  meat: { name: 'เนื้อสด', color: 0xc4635a },
  darkShard: { name: 'เศษเงามืด', color: 0x9c72d4 },
  essence: { name: 'แก่นวิญญาณ', color: 0x74c9d6 },
  stoneHeart: { name: 'หัวใจศิลา', color: 0xd28b5c },
  bossRelic: { name: 'เศษชิ้นส่วนโบราณ', color: 0xe2b45c },
  ruinCore: { name: 'แกนแห่งเจ้าแห่งซาก (Legendary)', color: 0xffcf5a },
  ashHeart: { name: 'หัวใจขุนศึกเถ้า (Legendary)', color: 0xff7548 }
};

export const RECIPES = [
  { id: 'potion', name: 'ยาฟื้นฟู', cost: { herb: 3 }, give: { potions: 1 }, repeatable: true },
  { id: 'greatsword', name: 'ดาบใหญ่', cost: { ore: 3, bone: 2 }, give: { item: 'greatsword' } },
  { id: 'staff', name: 'คทาเวท', cost: { wood: 2, darkShard: 2 }, give: { item: 'staff' } },
  { id: 'axe', name: 'ขวาน', cost: { ore: 2, wood: 2 }, give: { item: 'axe' } },
  { id: 'bow', name: 'ธนูพรานป่า', cost: { wood: 3, bone: 2 }, give: { item: 'bow' } },
  { id: 'froststaff', name: 'คทาเหมันต์', cost: { wood: 2, essence: 2, darkShard: 2 }, give: { item: 'froststaff' }, rarity: 'rare' },
  { id: 'iron', name: 'เกราะเหล็ก', cost: { ore: 4, bone: 1 }, give: { item: 'iron' } },
  { id: 'ranger', name: 'เกราะพราน', cost: { wood: 2, bone: 2 }, give: { item: 'ranger' } },
  { id: 'shadow', name: 'เกราะเงา', cost: { darkShard: 3, wood: 2 }, give: { item: 'shadow' } },
  { id: 'runerobe', name: 'ผ้าคลุมรูน', cost: { essence: 3, darkShard: 2 }, give: { item: 'runerobe' }, rarity: 'rare' },
  { id: 'plate', name: 'เกราะจาน', cost: { ore: 4, bone: 3 }, give: { item: 'plate' }, rarity: 'rare' },
  { id: 'spellFire', name: 'เวทลูกไฟ', cost: { darkShard: 2, bone: 1 }, give: { spell: 'firebolt' } },
  { id: 'spellHeal', name: 'เวทรักษา', cost: { herb: 4, bone: 1 }, give: { spell: 'heal' } },
  { id: 'voidblade', name: 'ดาบเงาว่าง', cost: { bossRelic: 1, stoneHeart: 2, darkShard: 4 }, give: { item: 'voidblade' }, rarity: 'epic' },
  { id: 'dragonplate', name: 'เกราะมังกรร้าง', cost: { bossRelic: 1, stoneHeart: 3, ore: 5 }, give: { item: 'dragonplate' }, rarity: 'epic' },
  { id: 'starforged', name: 'ดาบดาวหลอม (Legendary)', cost: { ruinCore: 1, bossRelic: 4, darkShard: 8, stoneHeart: 4 }, give: { item: 'starforged' }, rarity: 'legendary' },
  { id: 'voidwarden', name: 'เกราะผู้พิทักษ์ว่างเปล่า (Legendary)', cost: { ashHeart: 1, bossRelic: 4, ore: 10, stoneHeart: 6 }, give: { item: 'voidwarden' }, rarity: 'legendary' }
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
  { id: 'meat', name: 'เนื้อสด', price: 16 },
  { id: 'darkShard', name: 'เศษเงามืด', price: 60 },
  { id: 'essence', name: 'แก่นวิญญาณ', price: 55 },
  { id: 'stoneHeart', name: 'หัวใจศิลา', price: 90 },
  { id: 'axe', name: 'ขวาน', price: 150 },
  { id: 'bow', name: 'ธนูพรานป่า', price: 170 },
  { id: 'staff', name: 'คทาเวท', price: 220, rarity: 'uncommon' },
  { id: 'froststaff', name: 'คทาเหมันต์', price: 420, rarity: 'rare' },
  { id: 'iron', name: 'เกราะเหล็ก', price: 180 },
  { id: 'ranger', name: 'เกราะพราน', price: 210, rarity: 'uncommon' },
  { id: 'shadow', name: 'เกราะเงา', price: 320, rarity: 'rare' },
  { id: 'runerobe', name: 'ผ้าคลุมรูน', price: 360, rarity: 'rare' },
  { id: 'plate', name: 'เกราะจาน', price: 380, rarity: 'rare' },
  { id: 'voidblade', name: 'ดาบเงาว่าง', price: 900, rarity: 'epic' },
  { id: 'dragonplate', name: 'เกราะมังกรร้าง', price: 1000, rarity: 'epic' }
];

export const SIDE_QUESTS = {
  herb: {
    title: 'สมุนไพรเพื่อชีวิต',
    desc: 'เก็บสมุนไพร 5 ชิ้นให้นักพรต',
    target: 5,
    reward: { potions: 2, xp: 50 },
    acceptedLine: 'สมุนไพรเหล่านี้ช่วยประคองชีวิตผู้บาดเจ็บได้ จงเก็บมาให้ครบ แล้วรีบกลับก่อนเงามืดจะกลืนป่า',
    completedLine: 'กลิ่นสมุนไพรกลับมาที่ศาลเจ้าอีกครั้ง ขอบใจที่ช่วยชีวิตผู้คนไว้'
  },
  hunt: {
    title: 'ล่าผู้พิทักษ์',
    desc: 'กำจัดผู้พิทักษ์ 3 ตัว',
    target: 3,
    reward: { ore: 3, xp: 100 }
  },
  wraith: {
    title: 'เงาที่หลงเหลือ',
    desc: 'กำจัดผีร้าย 3 ตัวให้ผู้เฝ้าศาลเจ้า',
    target: 3,
    reward: { crystals: 4, xp: 150 },
    acceptedLine: 'วิญญาณที่หลงเหลือกำลังวนเวียนใกล้ศาลเจ้า จงปลดปล่อยพวกเขา แล้วนำความสงบกลับคืนมา',
    completedLine: 'เสียงกระซิบเงียบลงในที่สุด เจ้าช่วยปลดปล่อยวิญญาณเหล่านั้นแล้ว'
  },
  release: {
    title: 'บทเพลงแห่งอิสรภาพ',
    desc: 'เก็บสมุนไพรศักดิ์สิทธิ์ 4 ชิ้นให้วิญญาณที่ถูกปลดปล่อย',
    target: 4,
    reward: { crystals: 3, xp: 180 },
    acceptedLine: 'วิญญาณที่เป็นอิสระขอให้เจ้ารวบรวมสมุนไพรศักดิ์สิทธิ์ เพื่อเยียวยาศาลเจ้าและผืนป่า'
  },
  seal: {
    title: 'ตราผนึกศาสนจักร',
    desc: 'กำจัดผีร้าย 3 ตัวเพื่อรวบรวมพลังสำหรับตราผนึก',
    target: 3,
    reward: { potions: 2, xp: 180 },
    acceptedLine: 'จงกำจัดผีร้ายที่เหลืออีก 3 ตัว พลังที่รวบรวมได้จะช่วยเสริมตราผนึกให้มั่นคง'
  }
};

/* Blacksmith upgrades: each weapon and armor piece keeps its own tier, paid
   with gold, ore and crystals so late-game loot still has a sink. */
export const GEAR_UPGRADE_MAX = 5;
export const GEAR_UPGRADE_COST = [
  null,
  { gold: 90, ore: 2, crystals: 1 },
  { gold: 180, ore: 3, crystals: 2 },
  { gold: 320, ore: 4, crystals: 3 },
  { gold: 520, ore: 5, crystals: 5 },
  { gold: 800, ore: 7, crystals: 8 }
];

/* Repeatable kill contracts. Three are offered at a time; completing one
   pays gold, experience and a material matched to the prey. */
const BOUNTY_TYPES = [
  { type: 'guardian', name: 'ล่าผู้พิทักษ์ซากโบราณ', items: ['bone', 'ore'] },
  { type: 'wraith', name: 'ขับไล่ผีร้าย', items: ['essence', 'darkShard'] },
  { type: 'brute', name: 'ปราบยักษ์หิน', items: ['stoneHeart', 'ore'] },
  { type: 'wolf', name: 'กำจัดหมาป่ามืด', items: ['meat', 'bone'] },
  { type: 'raider', name: 'ล่าหัวขโมยแดนเถ้าถ่าน', items: ['ore', 'meat'] },
  { type: 'revenant', name: 'ขับไล่ทหารกลายพันธุ์', items: ['bone', 'darkShard'] }
];

const BOUNTY_REROLL_COST = 60;

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
    { id: 'meat', chance: 1, min: 1, max: 2 },
    { id: 'bone', chance: .9, min: 1, max: 2 },
    { id: 'darkShard', chance: .25, min: 1, max: 1 }
  ],
  deer: [
    { id: 'meat', chance: .8, min: 1, max: 2 },
    { id: 'herb', chance: 1, min: 1, max: 2 },
    { id: 'wood', chance: .6, min: 1, max: 1 }
  ],
  raider: [
    { id: 'ore', chance: .75, min: 1, max: 1 },
    { id: 'meat', chance: .55, min: 1, max: 1 },
    { id: 'darkShard', chance: .2, min: 1, max: 1 }
  ],
  revenant: [
    { id: 'bone', chance: 1, min: 1, max: 2 },
    { id: 'darkShard', chance: .5, min: 1, max: 1 },
    { id: 'essence', chance: .35, min: 1, max: 1 }
  ],
  warlord: [
    { id: 'stoneHeart', chance: 1, min: 1, max: 2 },
    { id: 'bossRelic', chance: .25, min: 1, max: 1 },
    { id: 'ore', chance: 1, min: 2, max: 3 }
  ]
};

const ITEM_RARITY = {
  essence: 'uncommon',
  stoneHeart: 'rare',
  bossRelic: 'epic',
  ruinCore: 'legendary',
  ashHeart: 'legendary',
  voidblade: 'epic',
  dragonplate: 'epic',
  staff: 'uncommon',
  axe: 'uncommon',
  bow: 'uncommon',
  ranger: 'uncommon',
  froststaff: 'rare',
  runerobe: 'rare',
  shadow: 'rare'
};

export function rarityOf(id) {
  return ITEM_RARITY[id] || 'common';
}

export const FACTIONS = {
  kingdom: { name: 'ราชอาณาจักรราเวนฮอลด์', short: 'ราชอาณาจักร', color: '#d8b878' },
  church: { name: 'ศาสนจักรแห่งแสงจันทร์', short: 'ศาสนจักร', color: '#cfc8a8' },
  merchants: { name: 'สมาคมพ่อค้าเร่ร่อน', short: 'พ่อค้า', color: '#d8a86a' },
  outcasts: { name: 'กลุ่มผู้ถูกเนรเทศ', short: 'ผู้ถูกเนรเทศ', color: '#9ad6c2' },
  ancient: { name: 'องค์กรโบราณ', short: 'องค์กรโบราณ', color: '#b58ce0' }
};

/* Reputation tiers are shared by the dialogue header, the quest log and the
   merchant price modifier so a number always reads the same way. */
export const REP_TIERS = [
  { min: 40, label: 'ผู้มีพระคุณ', tone: 'ally' },
  { min: 15, label: 'มิตร', tone: 'friend' },
  { min: 5, label: 'ไว้เนื้อเชื่อใจ', tone: 'trust' },
  { min: -4, label: 'เป็นกลาง', tone: 'neutral' },
  { min: -19, label: 'ระแวง', tone: 'wary' },
  { min: -100, label: 'เป็นศัตรู', tone: 'enemy' }
];

/* Waypoints double as the Cartographer checkpoints: standing near one unlocks
   it, and the world map can then fast-travel to it. */
export const WAYPOINTS = [
  { id: 'camp', name: 'ค่ายทุ่งรกร้าง', x: 0, z: 14, region: 'wasteland' },
  { id: 'ravenhold', name: 'ราเวนโฮลด์', x: -45, z: -45, region: 'ravenhold' },
  { id: 'thornwick', name: 'ธอร์นวิก', x: -150, z: -40, region: 'ravenhold' },
  { id: 'stonecircle', name: 'วงหินโบราณ', x: -70, z: -140, region: 'deadwood' },
  { id: 'varnhal', name: 'นครวาร์นฮัล', x: 160, z: 50, region: 'varnhal' },
  { id: 'embercamp', name: 'เชิงเอ็มเบอร์พีค', x: 150, z: -150, region: 'emberpeak' },
  { id: 'mirefall', name: 'หมู่บ้านมิเรฟอลล์', x: -50, z: 205, region: 'mirefall' }
];

const NPC_DATA = [
  {
    id: 'sage',
    name: 'นักพรตผู้ลืมเลือน',
    title: 'ผู้เฝ้าศาลเจ้า · ศาสนจักร',
    faction: 'church',
    position: [5.5, 0, 1],
    color: 0x7486b8,
    quest: 'herb',
    questChain: ['herb', 'wraith'],
    schedule: [
      { from: 0, to: 0.45, position: [5.5, 0, 1] },
      { from: 0.45, to: 0.75, position: [1.5, 0, -43] },
      { from: 0.75, to: 1, position: [5.5, 0, 1] }
    ],
    greet: ({ tier, quests = {} }) => {
      if (quests.wraith && quests.wraith.status === 'done') {
        return 'เสียงกระซิบเงียบลงแล้ว... เจ้าปลดปล่อยวิญญาณที่ถูกขังไว้ได้สำเร็จ';
      }
      if (quests.wraith && quests.wraith.status === 'active') {
        return 'เงาที่หลงเหลือยังวนเวียนอยู่ จงตามหาผีร้ายให้ครบ แล้วกลับมาหาข้า';
      }
      if (quests.herb && quests.herb.status === 'done') {
        return 'สมุนไพรที่เจ้านำมาช่วยชีวิตผู้คนไว้ได้ แต่เงามืดยังไม่จากศาลเจ้าไป';
      }
      if (tier === 'enemy') return 'เจ้ากล้าดีที่กลับมาที่ศาลนี้ ทั้งที่มือเปื้อนเลือด...';
      if (tier === 'wary') return 'เจ้ายังไม่เป็นที่ไว้วางใจ แต่ศาลเจ้าไม่ปิดประตูต่อผู้ใด';
      return 'เจ้าเดินเข้ามาในดินแดนที่แม้แต่ความทรงจำยังลืมไปแล้ว...';
    },
    lines: [
      'เจ้าเดินเข้ามาในดินแดนที่แม้แต่ความทรงจำยังลืมไปแล้ว...',
      'สมุนไพรในป่ายังมีชีวิต เก็บมาให้ข้า 5 ชิ้นเถิด ข้าจะตอบแทนด้วยยาฟื้นฟู',
      'เมื่อฟ้าสาง ข้าจะไปยืนสวดที่ศาลเจ้า ตามหาข้าได้ที่นั่น'
    ],
    topics: [
      {
        id: 'forest',
        label: 'เกิดอะไรขึ้นในป่าแห้งตาย?',
        keys: ['ป่า', 'deadwood', 'แห้งตาย', 'เกิดอะไร'],
        reply: 'เสียงกระซิบในป่าไม่ใช่ลม ตั้งแต่หอคอยร้างล่ม เงาบางอย่างก็เดินออกมาจากใต้ดิน ผู้พิทักษ์ที่เจ้าฆ่าได้นั้น... มันคือวิญญาณของคนที่เคยสวดที่นี่'
      },
      {
        id: 'guardians',
        label: 'ผู้พิทักษ์ซากโบราณคืออะไร?',
        keys: ['ผู้พิทักษ์', 'ซาก', 'วิญญาณ', 'กระดูก'],
        reply: 'เมื่อองค์กรโบราณผนึกประตู พวกเขาผูกวิญญาณผู้เฝ้าประตูไว้กับกระดูกของตัวเอง ผู้พิทักษ์จึงยังเฝ้าซากที่ไม่มีใครเหลืออยู่'
      },
      {
        id: 'kingdom',
        label: 'เล่าเรื่องอาณาจักรนี้ให้ฟังหน่อย',
        keys: ['อาณาจักร', 'ราชา', 'ประวัติ', 'เล่า'],
        reply: 'ราชอาณาจักรราเวนฮอลด์เคยแผ่จากปราสาทตรงนี้ไปถึงภูเขาไฟ แต่กษัตริย์องค์สุดท้ายห้ามกองทัพจุดไฟบนยอดเขา แล้ววาร์นฮัลก็ไม่ส่งทหารมาอีกเลย'
      },
      {
        id: 'donate',
        label: 'บริจาค 30 ทองเพื่อจุดตะเกียง',
        keys: ['บริจาค', 'ตะเกียง', 'ทอง'],
        once: false,
        effect: { gold: -30, rep: { church: 6 }, toast: 'ศาสนจักรจดจำความเอื้อเฟื้อนี้' },
        reply: 'ขอบใจเจ้า แสงเดียวก็พอทำให้คนที่หลงทางมองเห็นศาลนี้'
      }
    ],
    secretTopic: {
      id: 'order',
      label: 'ถามถึงแท่นบูชาใต้ศาล (ความลับ)',
      requiresRep: { faction: 'church', min: 12 },
      effect: { rep: { ancient: 4 }, flag: 'secret-shrine' },
      reply: 'ใต้แท่นบูชามีแผ่นศิลาจารึกขององค์กรโบราณ เจ้าอ่านมันได้... มันบอกว่าผู้พิทักษ์ไม่ได้ถูกผูกไว้กับประตู แต่ผูกไว้กับ "คำสัญญา"'
    }
  },
  {
    id: 'smith',
    name: 'ช่างตีเหล็กเร่ร่อน',
    title: 'ช่างตีเหล็ก · สมาคมพ่อค้า',
    faction: 'merchants',
    nameColor: '#d8a86a',
    position: [9, 0, -44],
    color: 0xa8784a,
    quest: 'hunt',
    schedule: [
      { from: 0, to: 0.35, position: [9, 0, -44] },
      { from: 0.35, to: 0.7, position: [15, 0, -56] },
      { from: 0.7, to: 1, position: [9, 0, -44] }
    ],
    greet: ({ tier }) => tier === 'enemy'
      ? 'เจ้ามีเรื่องอะไรกับข้า? ข้าไม่ยุ่งกับคนที่ราชอาณาจักรหมายหัว'
      : 'เฮ้ นักร่อนเร่! ช่วงนี้ป่า Blackwood ไม่ปลอดภัยเลย มีบางอย่างกำลังออกล่าในยามค่ำคืน',
    lines: [
      'เฮ้ นักร่อนเร่! เหล็กและกระดูกที่เจ้าเก็บมาได้ ฉันเปลี่ยนเป็นอาวุธให้ได้',
      'ฆ่าผู้พิทักษ์ซะ 3 ตัว แล้วเอาแร่มาให้ฉัน แล้วฉันจะสอนวิธีคราฟต์ให้',
      'ตอนเย็นฉันย้ายเตาไปใกล้เหมืองแร่ อย่าลืมแวะไปหา'
    ],
    topics: [
      {
        id: 'blackwood',
        label: 'เกิดอะไรขึ้นในป่า Blackwood?',
        keys: ['blackwood', 'ป่า', 'อันตราย', 'คืน'],
        reply: 'สามคืนแล้วที่มีคนได้ยินเสียงกระดูกเดิน ฉันไม่ใช่คนขี้ขลาด แต่เตาของฉันไม่เคยดับเลยตั้งแต่คืนนั้น ถ้าจะเข้าไป เอาไฟติดมือไปด้วย'
      },
      {
        id: 'work',
        label: 'มีภารกิจอะไรให้ทำบ้าง?',
        keys: ['ภารกิจ', 'งาน', 'ช่วย', 'อะไรให้ทำ'],
        reply: 'เก็บกระดูกผู้พิทักษ์มาให้ข้า แล้วข้าจะสอนตีเหล็กให้ ไม่ต้องกลัวเปื้อนเลือด ข้าก็เปื้อนทุกวัน'
      },
      {
        id: 'weapons',
        label: 'ขอดูอาวุธที่ขายหน่อย',
        keys: ['อาวุธ', 'ขาย', 'ดาบ', 'ดูของ'],
        effect: { action: 'openShop' },
        reply: 'เข้ามาดูสิ เหล็กทุกชิ้นข้าตีเองกับมือ ไม่มีของปลอมจากตลาดล่าง'
      },
      {
        id: 'guild',
        label: 'ฝากเงิน 50 ทองกับสมาคมพ่อค้า',
        keys: ['สมาคม', 'ฝาก', 'พ่อค้า', 'เงิน'],
        effect: { gold: -50, rep: { merchants: 6 }, toast: 'สมาคมพ่อค้าเปิดบัญชีให้เจ้าแล้ว' },
        reply: 'ดี! สมาคมจำหน้าคนที่จ่ายตรงเวลา เจ้าจะได้ราคาที่ดีขึ้นในอีกไม่ช้า'
      }
    ],
    secretTopic: {
      id: 'cursedOre',
      label: 'ถามเรื่องแร่ที่ติดคำสาป (ความลับ)',
      requiresRep: { faction: 'merchants', min: 10 },
      effect: { rep: { ancient: 4 }, flag: 'secret-ore' },
      reply: 'ในเหมืองใต้ป่ามีแร่ที่เคาะแล้วร้องไห้ องค์กรโบราณเรียกมันว่า "โลหะแห่งคำสัญญา" ข้าเคยขายไปชิ้นหนึ่ง... แล้วลูกค้าคนนั้นก็หายไป'
    }
  },
  {
    id: 'merchant',
    name: 'พ่อค้าในหมอก',
    title: 'พ่อค้าเร่ร่อน · สมาคมพ่อค้า',
    faction: 'merchants',
    nameColor: '#9ad6c2',
    position: [12, 0, 4],
    color: 0x4d8f7e,
    shop: true,
    schedule: [
      { from: 0, to: 0.4, position: [12, 0, 4] },
      { from: 0.4, to: 0.72, position: [18, 0, -66] },
      { from: 0.72, to: 1, position: [12, 0, 4] }
    ],
    greet: ({ tier }) => tier === 'friend' || tier === 'ally'
      ? 'เจ้ามาอีกแล้วหรือ? ข้าวางของดีไว้ให้แล้ว ดูสิ ราคาเป็นมิตรกว่าคนอื่นแน่นอน'
      : 'ทองไม่มีวันเน่าในดินแดนนี้ ของวิญญาณนั่นต่างหากที่เน่าได้',
    lines: [
      'ทองไม่มีวันเน่าในดินแดนนี้ ของวิญญาณนั่นต่างหากที่เน่าได้',
      'ของข้าล้วนมาจากผู้ที่เดินทางไม่ถึงปลายทาง ซื้อไปเถิด อย่าถามที่มา',
      'กด B เมื่อใดก็ได้เพื่อเปิดร้านของข้า แม้ข้าจะเดินทางไปยังแม่น้ำ'
    ],
    topics: [
      {
        id: 'prices',
        label: 'ราคาของข้าจะถูกลงไหม?',
        keys: ['ราคา', 'ลด', 'ถูก', 'ส่วนลด'],
        dynamic: 'price',
        reply: 'ยิ่งเจ้าช่วยเหลือสมาคมมากเท่าไร ราคาก็ยิ่งนุ่มนวลขึ้นเท่านั้น'
      },
      {
        id: 'oldmap',
        label: 'ซื้อแผนที่เก่า (120 ทอง)',
        keys: ['แผนที่', 'map', 'ซื้อ', 'เก่า'],
        effect: { gold: -120, rep: { merchants: 4 }, action: 'buyMap', toast: 'พ่อค้าคลี่แผนที่เก่าให้เจ้าดู' },
        reply: 'แผนที่นี้ข้าซื้อมาจากคนที่กลับมาไม่ได้ มันยังบอกทางไปดินแดนที่เจ้ายังไม่เคยเหยียบ'
      },
      {
        id: 'rumor',
        label: 'มีข่าวลืออะไรในวาร์นฮัลบ้าง?',
        keys: ['ข่าว', 'ลือ', 'วาร์นฮัล', 'เมือง'],
        reply: 'ว่ากันว่ากองทหารวาร์นฮัลกำลังมองหาคนที่จุดไฟบนยอดเอ็มเบอร์พีค ใครจุดไฟ คนนั้นได้เป็นวีรบุรุษหรือเป็นเถ้าถ่าน'
      },
      {
        id: 'smuggle',
        label: 'รับของเถื่อนไปส่ง (ได้ 40 ทอง)',
        keys: ['เถื่อน', 'ขนของ', 'ส่งของ'],
        effect: { gold: 40, rep: { outcasts: 6, kingdom: -4 }, toast: 'กลุ่มผู้ถูกเนรเทศรู้จักชื่อเจ้าแล้ว' },
        reply: 'ไม่ถามว่าในห่อคืออะไร ขอบใจ เอาไปส่งที่หมู่บ้านมิเรฟอลล์ ผู้ถูกเนรเทศที่นั่นจะจำน้ำใจเจ้า'
      }
    ],
    secretTopic: {
      id: 'realname',
      label: 'ถามถึงชื่อจริงของเขา (ความลับ)',
      requiresRep: { faction: 'merchants', min: 14 },
      effect: { rep: { ancient: 4 }, flag: 'secret-merchant' },
      reply: 'ชื่อจริงข้า? ...ข้าเคยเป็นผู้เก็บกวาดซากขององค์กรโบราณ ก่อนจะพบว่าของที่พวกเขาฝังไว้ ขายได้ดีกว่าความภักดี'
    }
  },
  {
    id: 'ravenkeeper',
    name: 'นายกองราเวนโฮลด์',
    title: 'นายกองรักษาเมือง · ราชอาณาจักร',
    faction: 'kingdom',
    nameColor: '#d8b878',
    position: [-45, 0, -45],
    color: 0x8e6a4a,
    schedule: [
      { from: 0, to: 1, position: [-45, 0, -45] }
    ],
    greet: ({ tier }) => tier === 'ally' || tier === 'friend'
      ? 'ผู้เดินทาง! ประตูราเวนโฮลด์เปิดให้เจ้าเสมอ ว่ามาสิ ต้องการให้ข้าช่วยอะไร'
      : 'ราเวนโฮลด์ยังอยู่ได้เพราะผู้เดินทางอย่างเจ้า',
    lines: [
      'ราเวนโฮลด์ยังอยู่ได้เพราะผู้เดินทางอย่างเจ้า',
      'ถัดไปทางตะวันตกคือป่าแห้งตาย อย่าเดินลึกเกินกว่าจะเห็นวงหิน'
    ],
    topics: [
      {
        id: 'ravenhold',
        label: 'เล่าเรื่องราเวนโฮลด์ให้ฟังหน่อย',
        keys: ['ราเวนโฮลด์', 'เมือง', 'บ้าน'],
        reply: 'ราเวนโฮลด์เคยเป็นด่านหน้าของราชอาณาจักร ตอนนี้เหลือแค่ค่ายทหารกับคนที่ไม่มีที่ไป ข้ายังถือธงอยู่เพราะไม่มีใครบอกให้ปลด'
      },
      {
        id: 'war',
        label: 'ราชอาณาจักรกำลังทำสงครามหรือ?',
        keys: ['สงคราม', 'ทหาร', 'ราฟ', 'ศัตรู'],
        reply: 'วาร์นฮัลเรียกมันว่า "การรักษาความสงบ" กลุ่มผู้ถูกเนรเทศเรียกมันว่า "การล่า" ข้าเรียกมันว่าฤดูเก็บศพ'
      },
      {
        id: 'oath',
        label: 'สาบานตนรับใช้ราชอาณาจักร',
        keys: ['สาบาน', 'รับใช้', 'เข้าร่วม'],
        effect: { rep: { kingdom: 10, merchants: -2 }, flag: 'oath-kingdom', toast: 'เจ้ากลายเป็นพันธมิตรของราชอาณาจักร' },
        reply: 'คุกเข่าลง. ...ลุกขึ้นเถิด ทหารของราฟ ข้ามอบตรานี้ให้เจ้า ใช้มันเข้าประตูวาร์นฮัลได้โดยไม่ถูกตรวจ'
      },
      {
        id: 'deadwood',
        label: 'วงหินโบราณคืออะไร?',
        keys: ['วงหิน', 'deadwood', 'ป่า'],
        reply: 'อย่าไปแตะหินพวกนั้น มันไม่ใช่หินบูชา มันคือหลักผนึก สิ่งที่อยู่ใต้มันยังหายใจอยู่'
      }
    ],
    secretTopic: {
      id: 'king',
      label: 'ถามถึงกษัตริย์องค์สุดท้าย (ความลับ)',
      requiresRep: { faction: 'kingdom', min: 12 },
      effect: { rep: { ancient: 4 }, flag: 'secret-king' },
      reply: 'กษัตริย์องค์สุดท้ายไม่ได้สวรรคตบนเตียง พระองค์เสด็จลงไปใต้ปราสาทพร้อมองค์กรโบราณ แล้วประตูก็ปิดจากด้านใน'
    }
  },
  {
    id: 'varnhalguard',
    name: 'ทหารรักษาพระนคร',
    title: 'ทหารวาร์นฮัล · ราชอาณาจักร',
    faction: 'kingdom',
    nameColor: '#e2b45c',
    position: [160, 0, 50],
    color: 0x7d8ba6,
    schedule: [
      { from: 0, to: 1, position: [160, 0, 50] }
    ],
    greet: ({ tier }) => tier === 'enemy'
      ? 'หยุด! เจ้าคือคนที่สมาคมพ่อค้าร้องเรียนเรื่องของเถื่อนใช่ไหม'
      : 'วาร์นฮัลไม่เคยหลับ แสงไฟในหน้าต่างคือสัญญาณว่ายังมีชีวิตอยู่',
    lines: [
      'วาร์นฮัลไม่เคยหลับ แสงไฟในหน้าต่างคือสัญญาณว่ายังมีชีวิตอยู่',
      'ระวังภูเขาไฟทางใต้ ไฟที่นั่นไม่เคยมอด'
    ],
    topics: [
      {
        id: 'city',
        label: 'วาร์นฮัลมีอะไรให้สำรวจบ้าง?',
        keys: ['วาร์นฮัล', 'ตลาด', 'เมือง', 'สำรวจ'],
        reply: 'ตลาดกลางคึกคักทั้งวัน แต่ระวังกระเป๋า ยิ่งใกล้ตลาดล่าง ราคายิ่งถูก... และของก็ยิ่ง questionable'
      },
      {
        id: 'volcano',
        label: 'ภูเขาไฟเอ็มเบอร์พีคอันตรายแค่ไหน?',
        keys: ['ภูเขา', 'ไฟ', 'emberpeak', 'ลาวา'],
        reply: 'ห่างจากปากปล่องสามร้อยก้าว อากาศก็ร้อนจนเกราะบางๆ ของเจ้าละลายได้ อย่าเข้าไปโดยไม่มีหัวใจศิลา'
      },
      {
        id: 'report',
        label: 'แจ้งเบาะแสกลุ่มโจร (ได้ 30 ทอง)',
        keys: ['โจร', 'เบาะแส', 'แจ้ง', 'รางวัล'],
        effect: { gold: 30, rep: { kingdom: 5 }, toast: 'กองทหารจดบันทึกเบาะแสของเจ้า' },
        reply: 'ดีมาก ข้าจะส่งคนไปตรวจ เอานี่ไปเป็นค่าเหนื่อย ราชอาณาจักรไม่ลืมคนที่ช่วยเหลือ'
      }
    ],
    secretTopic: {
      id: 'underpalace',
      label: 'ถามเรื่องคลังใต้พระราชวัง (ความลับ)',
      requiresRep: { faction: 'kingdom', min: 12 },
      effect: { rep: { ancient: 4 }, flag: 'secret-vault' },
      reply: 'ใต้พระราชวังมีประตูที่ไม่มีลูกกุญแจ ทหารรุ่นก่อนบอกว่ามันเปิดด้วย "คำสัญญา" ไม่ใช่กุญแจ... ข้าไม่เคยกล้าลอง'
    }
  },
  {
    id: 'mirefarmer',
    name: 'ชาวประมงมิเรฟอลล์',
    title: 'ชาวประมง · ผู้ถูกเนรเทศ',
    faction: 'outcasts',
    nameColor: '#7fd4e8',
    position: [-50, 0, 205],
    color: 0x5f9d9e,
    schedule: [
      { from: 0, to: 1, position: [-50, 0, 205] }
    ],
    greet: ({ tier }) => tier === 'enemy'
      ? 'กลับไปซะ ชาวบ้านที่นี่ไม่ต้อนรับคนของราชอาณาจักร'
      : 'ทะเลสาบนี้คืนสิ่งที่เราทิ้งไว้เสมอ แต่ไม่เคยคืนคน',
    lines: [
      'ทะเลสาบนี้คืนสิ่งที่เราทิ้งไว้เสมอ แต่ไม่เคยคืนคน',
      'หากเจ้าพบหีบใต้น้ำ อย่าเปิดตอนฝนตก'
    ],
    topics: [
      {
        id: 'lake',
        label: 'ทะเลสาบนี้มีตำนานอะไร?',
        keys: ['ทะเลสาบ', 'มิเรฟอลล์', 'น้ำ', 'ตำนาน'],
        reply: 'ก่อนน้ำจะท่วม ที่นี่เคยเป็นอารามของศาสนจักร คนแก่บอกว่ากระดิ่งยังดังใต้น้ำทุกคืนพระจันทร์เต็มดวง'
      },
      {
        id: 'drowned',
        label: 'คนที่หายไปในทะเลสาบไปไหน?',
        keys: ['จม', 'หาย', 'คน', 'วิญญาณ'],
        reply: 'บางคนว่าพวกเขากลับมาดำรงอยู่ใต้ผืนน้ำ ไม่แก่ ไม่ตาย แต่ก็ไม่มีความสุข ฟังดูเหมือนคำสาปขององค์กรโบราณ'
      },
      {
        id: 'boat',
        label: 'ช่วยซ่อมเรือ 40 ทอง',
        keys: ['เรือ', 'ซ่อม', 'ช่วย', 'ทอง'],
        effect: { gold: -40, rep: { outcasts: 6 }, toast: 'ชาวมิเรฟอลล์เริ่มไว้ใจเจ้า' },
        reply: 'ขอบใจ ไม้ในหมู่บ้านนี้หายาก แต่เจ้ากลับเอาไม้มาซ่อมให้โดยไม่ขออะไร... ชาวบ้านจะจำเจ้า'
      },
      {
        id: 'smuggler',
        label: 'รู้จักพ่อค้าในหมอกไหม?',
        keys: ['พ่อค้า', 'หมอก', 'สมาคม'],
        reply: 'พ่อค้าในหมอก? เขาไม่เคยโกหกเรื่องสินค้า แต่ก็ไม่เคยบอกว่าของมาจากไหน ถ้าเขาส่งของมาให้เจ้า ก็อย่าเปิดห่อกลางน้ำ'
      }
    ],
    secretTopic: {
      id: 'abbey',
      label: 'ถามเรื่องอารามที่จมอยู่ (ความลับ)',
      requiresRep: { faction: 'outcasts', min: 10 },
      effect: { rep: { ancient: 4 }, flag: 'secret-abbey' },
      reply: 'อารามที่จมนั้นไม่มีพระอยู่เลย มีแต่แผ่นศิลาที่จารชื่อกษัตริย์ทุกองค์ องค์กรโบราณจดชื่อทุกคนที่ "สัญญา" ไว้กับประตู... ชื่อสุดท้ายยังว่างอยู่'
    }
  },
  {
    id: 'pilgrim',
    name: 'นักแสวงบุญ',
    title: 'ผู้เดินทางตามแสงจันทร์ · ศาสนจักร',
    faction: 'church',
    position: [4, 0, 18],
    color: 0xb9a67a,
    sprite: 'priest',
    schedule: [
      { from: 0, to: .5, position: [4, 0, 18] },
      { from: .5, to: .68, position: [10, 0, 26] },
      { from: .68, to: 1, position: [4, 0, 18] }
    ],
    greet: ({ tier }) => tier === 'enemy'
      ? 'ข้าเห็นเลือดบนมือเจ้า... แต่ศาลเจ้ายังเปิดให้ทุกคนอยู่'
      : 'เจ้าคือคนที่เดินออกจากค่ายตอนเช้าหรือ? ข้าเห็นเงาแปลกๆ ตามหลังเจ้า',
    lines: [
      'ข้าเดินตามแสงจันทร์มาสามคืน ไม่เคยเห็นมันสว่างเท่าคืนนี้',
      'ถ้าเจ้าพบศาลเจ้า บอกนักพรตว่าข้ายังเดินอยู่'
    ],
    topics: [
      {
        id: 'pilgrim-field',
        label: 'ทำไมทุ่งนี้ถึงรกร้าง?',
        keys: ['ทุ่ง', 'รกร้าง', 'ทำไม', 'แผ่นดิน'],
        reply: 'เมื่อหอคอยล่ม แผ่นดินก็จำเสียงของมันไม่ได้อีก น้ำในแม่น้ำลาวาไหลย้อนขึ้นมาสองวันเต็ม แล้วหญ้าที่ขึ้นใหม่ก็ไม่เคยมีกลิ่นอีกเลย'
      },
      {
        id: 'pilgrim-shrine',
        label: 'ศาลเจ้าแห่งนี้มีใครดูแล?',
        keys: ['ศาล', 'นักพรต', 'ดูแล', 'แสงจันทร์'],
        reply: 'นักพรตผู้ลืมเลือนยังจุดตะเกียงทุกคืน ข้าเคยถามว่าทำไมไม่ย้ายไปที่อื่น ท่านตอบว่า "ข้าลืมทางไปที่อื่นแล้ว"'
      },
      {
        id: 'pilgrim-omen',
        label: 'เจ้าเห็นลางร้ายอะไรบ้าง?',
        keys: ['ลาง', 'ร้าย', 'เห็น', 'ฝัน'],
        reply: 'ข้าฝันเห็นทหารหุ้มเกราะยืนเรียงรายอยู่ชายป่า แต่ละคนไม่มีหน้า พอตื่นขึ้นมา ข้าได้ยินเสียงเหล็กกระทบกันจากทางตะวันออก'
      }
    ]
  },
  {
    id: 'gravedigger',
    name: 'คนขุดหลุมศพ',
    title: 'ผู้ขุดหลุม · ผู้ถูกเนรเทศ',
    faction: 'outcasts',
    nameColor: '#b3a48c',
    position: [-16, 0, -2],
    color: 0x8a7f6a,
    sprite: 'rogue',
    schedule: [
      { from: 0, to: 1, position: [-16, 0, -2] }
    ],
    greet: () => 'ระวังที่ยืนหน่อย ที่ตรงนั้นข้าเพิ่งขุดเมื่อวาน ยังไม่แน่ใจว่าเจ้าของหลุมกลับมาแล้วหรือยัง',
    lines: [
      'ในดินแดนนี้ คนตายไม่เคยได้อยู่คนเดียว',
      'ข้าขุดหลุมให้ทั้งคนเป็นและคนที่ยังไม่รู้ว่าตัวเองตาย'
    ],
    topics: [
      {
        id: 'grave-work',
        label: 'ขุดหลุมมากมายขนาดนี้ทำไม?',
        keys: ['ขุด', 'หลุม', 'มาก', 'ทำไม'],
        reply: 'ทุกคืนมีคนเดินออกมาจากซากปราสาทแล้วล้มลงกลางทุ่ง เช้ามาก็เหลือแต่กระดูก ข้าไม่รู้ว่าพวกเขาตายมาแล้วหรือเพิ่งตาย ข้าจึงขุดให้ทั้งสองกรณี'
      },
      {
        id: 'grave-bone',
        label: 'กระดูกพวกนี้ขายได้ที่ไหน?',
        keys: ['กระดูก', 'ขาย', 'ที่ไหน', 'เงิน'],
        reply: 'สมาคมพ่อค้ารับซื้อทุกชิ้นที่ยังมีร่องรอยสลัก พวกเขาไม่ถามว่ามาจากหลุมไหน ข้าก็ไม่ถามว่าส่งไปทำอะไร'
      },
      {
        id: 'grave-pay',
        label: 'จ่าย 15 ทองให้ขุดหลุมฝังศพให้ (ได้ชื่อเสียงผู้ถูกเนรเทศ)',
        keys: ['จ่าย', 'ทอง', 'ฝัง', 'ช่วย'],
        effect: { gold: -15, rep: { outcasts: 5 }, toast: 'คนถูกเนรเทศจดจำน้ำใจของเจ้า' },
        reply: 'ขอบใจ ข้าจะฝังคนที่ไม่มีชื่อกำกับไว้ตรงหัวเนิน เผื่อวันหนึ่งมีคนมาเรียกชื่อเขาถูก'
      }
    ]
  },
  {
    id: 'refugee',
    name: 'ผู้ลี้ภัยจากหุบเขา',
    title: 'ผู้อพยพ · ผู้ถูกเนรเทศ',
    faction: 'outcasts',
    nameColor: '#c2a583',
    position: [16, 0, 26],
    color: 0xa88f70,
    sprite: 'rogue',
    schedule: [
      { from: 0, to: .55, position: [16, 0, 26] },
      { from: .55, to: .8, position: [10, 0, 22] },
      { from: .8, to: 1, position: [16, 0, 26] }
    ],
    greet: () => 'อย่าเดินตรงไปทางนั้น ฝูงหมาป่ามืดเพิ่งลากคนเฝ้าค่ายไปเมื่อคืน',
    lines: [
      'ข้าออกจากหุบเขามาสองอาทิตย์ ยังไม่เห็นใครในหมู่เราที่ไปถึงปลายทางเลย',
      'ค่ายนี้ไม่มีกำแพง มีแต่กองไฟกับคนที่ไม่มีที่ไป'
    ],
    topics: [
      {
        id: 'refugee-camp',
        label: 'ค่ายนี้ปลอดภัยพอจะพักได้ไหม?',
        keys: ['ค่าย', 'ปลอดภัย', 'พัก', 'นอน'],
        reply: 'กลางวันปลอดภัย กลางคืนไม่เคยมีใครรับประกัน ชาวค่ายผลัดกันเฝ้าไฟ ถ้าเจ้าจะพัก อย่าให้ไฟดับก็พอ'
      },
      {
        id: 'refugee-food',
        label: 'แบ่งเสบียงให้ (10 ทอง)',
        keys: ['เสบียง', 'อาหาร', 'แบ่ง', 'ช่วย'],
        effect: { gold: -10, rep: { outcasts: 3 }, toast: 'ผู้ลี้ภัยแบ่งความอบอุ่นตอบเจ้า' },
        reply: 'แค่ขนมปังแข็งๆ ก็พอ... ขอบใจ ข้าจะบอกเด็กๆ ว่ามีคนดีเดินผ่านค่ายนี้'
      },
      {
        id: 'refugee-road',
        label: 'ไปราเวนโฮลด์ทางไหน?',
        keys: ['ราเวนโฮลด์', 'ทาง', 'ไป', 'หมู่บ้าน'],
        reply: 'ขึ้นไปทางตะวันตกเฉียงเหนือ เดินตามเสาไฟที่ยังไม่ล้ม ถ้าเจอทางแยกที่ไม่มีป้าย ให้เลี้ยวซ้าย ราเวนโฮลด์อยู่ปลายทางนั้น'
      }
    ]
  },
  {
    id: 'wanderer',
    name: 'นักเดินทางไร้ชื่อ',
    title: 'นักสำรวจซาก · สมาคมพ่อค้า',
    faction: 'merchants',
    nameColor: '#a9b8c9',
    position: [28, 0, -58],
    color: 0x7d8ba6,
    sprite: 'soldier',
    schedule: [
      { from: 0, to: .4, position: [28, 0, -58] },
      { from: .4, to: .7, position: [34, 0, -66] },
      { from: .7, to: 1, position: [28, 0, -58] }
    ],
    greet: ({ tier }) => tier === 'friend' || tier === 'ally'
      ? 'เจ้ามาแล้ว! ข้าพบรอยเท้าแปลกใหม่เมื่อคืน อยากดูไหม'
      : 'ข้าไม่มีชื่อให้จำ แต่มีแผนที่ให้ดู ถ้าเจ้ามีทอง',
    lines: [
      'ทุกซากที่ข้าเข้าไป มีทางออกเสมอ แต่ไม่ใช่ทางที่ข้าเข้ามา',
      'ถ้าเจ้าหลงทาง ให้มองหาหินที่ไม่มีตะไคร่ นั่นแหละทางกลับ'
    ],
    topics: [
      {
        id: 'wanderer-south',
        label: 'ทางใต้มีอะไรบ้าง?',
        keys: ['ใต้', 'ทาง', 'มีอะไร', 'ภูเขา'],
        reply: 'ทางใต้เป็นที่ราบเถ้าถ่านจนถึงเชิงเอ็มเบอร์พีค มีโจรตั้งค่ายอยู่สองแห่ง พวกเขาไม่แต่งกายเหมือนทหาร แต่ถือดาบดีกว่าทหารเสียอีก'
      },
      {
        id: 'wanderer-ruins',
        label: 'ซากโบราณข้างหน้าเข้าได้ไหม?',
        keys: ['ซาก', 'โบราณ', 'เข้า', 'หอคอย'],
        reply: 'เข้าได้ แต่ประตูชั้นในปิดอยู่ ผู้พิทักษ์ที่เดินอยู่ข้างนอกคือคนที่พยายามเปิดมันครั้งก่อน อย่าไปยืนใกล้กำแพงด้านตะวันออก'
      },
      {
        id: 'wanderer-advice',
        label: 'มีคำแนะนำสำหรับนักเดินทางไหม?',
        keys: ['แนะนำ', 'เดินทาง', 'คำ', 'ระวัง'],
        reply: 'อย่าตีศัตรูโดยไม่มองที่เท้า บางตัวยืนบนกระดูกที่ยังขยับได้ และถ้าเจ้าจ้างใครร่วมทาง ให้ฟังเสียงเขาเวลากลางคืน เขาจะได้ยินก่อนเจ้าเสมอ'
      }
    ]
  },
  {
    id: 'sellsword',
    name: 'ทหารรับจ้าง',
    title: 'ดาบรับจ้าง · สมาคมทหาร',
    faction: 'merchants',
    nameColor: '#e0a06a',
    position: [-52, 0, -32],
    color: 0xc9773f,
    sprite: 'soldier',
    schedule: [
      { from: 0, to: .3, position: [-52, 0, -32] },
      { from: .3, to: .55, position: [-48, 0, -38] },
      { from: .55, to: 1, position: [-52, 0, -32] }
    ],
    greet: ({ tier }) => tier === 'friend' || tier === 'ally'
      ? 'เจ้ากลับมาแล้ว? ดาบข้ายังคมอยู่ อยากให้เดินเป็นเพื่อนอีกไหม'
      : 'ข้าดูจากฝีมือเจ้าแล้ว เจ้าต้องการดาบเพิ่มอีกเล่มแน่',
    lines: [
      'ข้าตีดาบให้ตัวเองเล่มเดียวตอนอายุสิบหก ตอนนี้ยังใช้เล่มเดิม',
      'จ้างข้าแล้วเจ้าจะไม่ต้องหันหลังบ่อยๆ อีก'
    ],
    topics: [
      {
        id: 'sellsword-story',
        label: 'เล่าเรื่องที่ผ่านมาของเจ้าให้ฟังหน่อย',
        keys: ['เล่า', 'เรื่อง', 'ผ่านมา', 'ประวัติ'],
        reply: 'ข้ารบในกองทหารราบราเวนโฮลด์จนวันหนึ่งคำสั่งให้เผาหมู่บ้านของตัวเอง ข้าวางดาบลงวันนั้น แล้วไม่เคยรับคำสั่งใครฟรีอีกเลย'
      },
      {
        id: 'sellsword-hire',
        label: 'จ้างสหายร่วมทาง',
        keys: ['จ้าง', 'สหาย', 'ร่วมทาง', 'เดินด้วย'],
        companionId: 'sellsword',
        effect: { action: 'hire', companion: 'sellsword' },
        reply: 'ตกลง ข้าจะเดินขนาบข้างเจ้า ไม่แย่งของ ข้าขอแค่ค่าดาบกับข้าวหนึ่งมื้อ'
      },
      {
        id: 'sellsword-danger',
        label: 'ศัตรูแบบไหนควรระวังที่สุด?',
        keys: ['ศัตรู', 'ระวัง', 'อันตราย', 'แบบไหน'],
        reply: 'พวกถือคทาไม่ใช่ปัญหา ตัวที่อันตรายคืออสูรศิลาที่ไม่ถอยและโจรที่ล้อมเจ้าเป็นวง ถ้าเจ้าเห็นธงแดงสามผืน ให้ถอยก่อน อย่าวิ่งเข้าไป'
      }
    ]
  },
  {
    id: 'innkeeper',
    name: 'เจ้าของโรงเตี๊ยม',
    title: 'โรงเตี๊ยมกลืนเงา · สมาคมพ่อค้า',
    faction: 'merchants',
    nameColor: '#c49a6c',
    position: [-40, 0, -53],
    color: 0xb07b52,
    sprite: 'merchant',
    schedule: [
      { from: 0, to: 1, position: [-40, 0, -53] }
    ],
    greet: () => 'เข้ามาสิ ไฟในเตายังแดงอยู่ กองทัพจะผ่านไปผ่านมากี่ครั้ง โรงเตี๊ยมข้าก็ไม่เคยปิด',
    lines: [
      'ข่าวดีคือไม่มีใครตายในโรงเตี๊ยมข้า ข่าวร้ายคือบางคนออกไปแล้วก็ไม่กลับมา',
      'เตียงริมหน้าต่างมีคนตายเมื่อสัปดาห์ก่อน ข้าล้างแล้ว ไม่ต้องห่วง'
    ],
    topics: [
      {
        id: 'inn-rumor',
        label: 'มีข่าวอะไรในราเวนโฮลด์บ้าง?',
        keys: ['ข่าว', 'ราเวนโฮลด์', 'ลือ', 'อะไร'],
        reply: 'มีคนเห็นทหารหุ้มเกราะเดินอยู่กลางป่าเมื่อคืน พวกเขาไม่พูด ไม่ตอบ และไม่เงยหน้า พอฟ้าเริ่มสางก็หายไปทั้งกลุ่ม'
      },
      {
        id: 'inn-meal',
        label: 'ขอสตูว์ร้อนๆ หน่อย (12 ทอง)',
        keys: ['สตูว์', 'อาหาร', 'กิน', 'มื้อ'],
        effect: { gold: -12, rep: { merchants: 2 }, toast: 'ท้องอุ่นแล้ว หายเหนื่อยขึ้น' },
        reply: 'มีเนื้อเค็มกับหัวหอมเท่านั้น แต่พอใส่พริกป่าแล้วก็อร่อยจนลืมว่าเนื้ออาจจะมาจากอะไร'
      },
      {
        id: 'inn-room',
        label: 'ห้องนอนราคาเท่าไหร่?',
        keys: ['ห้อง', 'นอน', 'ราคา', 'เท่าไหร่'],
        reply: 'ข้าไม่ให้เช่าห้องแล้ว ตอนนี้โรงเตี๊ยมกลายเป็นที่พักของผู้ลี้ภัย ถ้าเจ้าอยากนอน ให้ไปตั้งแคมป์ข้างกองไฟแทน ปลอดภัยกว่าห้องชั้นบนของข้าเสียอีก'
      }
    ]
  },
  {
    id: 'hawker',
    name: 'พ่อค้าแผงลอย',
    title: 'แผงของเก่า · สมาคมพ่อค้า',
    faction: 'merchants',
    nameColor: '#9ad6c2',
    position: [-58, 0, -40],
    color: 0x9ad6c2,
    sprite: 'merchant',
    schedule: [
      { from: 0, to: .5, position: [-58, 0, -40] },
      { from: .5, to: .72, position: [-50, 0, -46] },
      { from: .72, to: 1, position: [-58, 0, -40] }
    ],
    greet: () => 'ของทุกชิ้นข้ามาจากคนที่ไม่ได้ใช้มันอีกแล้ว ราคาจึงถูกกว่าที่อื่น',
    lines: [
      'ถ้าเจ้าเห็นของถูกเกินไป ให้ถามก่อนว่ามันเคยเป็นของใคร',
      'ข้าขายทุกอย่าง ยกเว้นความจริง'
    ],
    topics: [
      {
        id: 'hawker-goods',
        label: 'ขอดูของที่ขายหน่อย',
        keys: ['ขอดู', 'ขาย', 'ของ', 'สินค้า'],
        effect: { action: 'openShop' },
        reply: 'ตามสบาย มองได้ แตะไม่ได้ ของบางชิ้นยังจำเจ้าของเดิมได้'
      },
      {
        id: 'hawker-news',
        label: 'ได้ยินอะไรเกี่ยวกับโจรป่าบ้าง?',
        keys: ['โจร', 'ป่า', 'ได้ยิน', 'ข่าว'],
        reply: 'พวกเขาไม่ใช่โจรธรรมดา ข้าเคยขายมีดให้คนหนึ่ง เขาจ่ายด้วยเหรียญที่สลักรูปนกกา เหรียญแบบนั้นมีเฉพาะในคลังราเวนโฮลด์'
      }
    ]
  },
  {
    id: 'ranger',
    name: 'พรานเถ้าถ่าน',
    title: 'พรานป่าแห้งตาย · ผู้ถูกเนรเทศ',
    faction: 'outcasts',
    nameColor: '#9fe0a5',
    position: [-70, 0, -140],
    color: 0x7fc48a,
    sprite: 'ranger',
    schedule: [
      { from: 0, to: .35, position: [-70, 0, -140] },
      { from: .35, to: .65, position: [-78, 0, -148] },
      { from: .65, to: 1, position: [-70, 0, -140] }
    ],
    greet: ({ tier }) => tier === 'enemy'
      ? 'เจ้าเหยียบวงหินผิดด้าน ระวังตัวไว้'
      : 'ข้าเห็นเจ้ามาจากไกล ฝีเท้าเจ้าเงียบดี แต่ไม่เงียบเท่าพวกที่เดินตามเจ้า',
    lines: [
      'ป่าแห้งตายไม่ได้ตายเพราะไฟ มันตายเพราะมีบางอย่างดื่มน้ำจากราก',
      'ข้าอยู่ที่นี่คนเดียว เพราะไม่มีใครทนความเงียบแบบนี้ได้'
    ],
    topics: [
      {
        id: 'ranger-deadwood',
        label: 'ป่าแห้งตายเกิดขึ้นได้อย่างไร?',
        keys: ['ป่า', 'แห้ง', 'ตาย', 'เกิดขึ้น'],
        reply: 'คืนหนึ่งมีเสียงเหมือนน้ำถูกสูบลงดิน เช้ามาต้นไม้ทั้งป่าก็ยืนตายพร้อมกัน ข้าขุดดูใต้ราก เจอแผ่นศิลาเขียนว่า "ผู้เฝ้าประตูหิว"'
      },
      {
        id: 'ranger-hire',
        label: 'จ้างสหายร่วมทาง',
        keys: ['จ้าง', 'สหาย', 'ร่วมทาง', 'เดินด้วย'],
        companionId: 'ranger',
        effect: { action: 'hire', companion: 'ranger' },
        reply: 'ข้าจะไปด้วย ดอกธนูข้าไม่พลาดเป้าที่หายใจ แต่ถ้าเจ้าพาไปในที่ที่ไม่มีลม ข้าอาจลังเล'
      },
      {
        id: 'ranger-stone',
        label: 'วงหินโบราณใช้ทำอะไร?',
        keys: ['วงหิน', 'หิน', 'โบราณ', 'ทำอะไร'],
        reply: 'มันไม่ได้ใช้บูชา มันใช้กักเสียง หินแต่ละก้อนจดจำคำสัญญาของคนที่ยืนกลางวง ตอนนี้มันยังได้ยินเสียงใครบางคนอยู่'
      }
    ]
  },
  {
    id: 'hermit',
    name: 'ฤๅษีป่าแห้งตาย',
    title: 'ผู้สวดกล่อมรากไม้ · ศาสนจักร',
    faction: 'church',
    nameColor: '#c8bea2',
    position: [-150, 0, -138],
    color: 0xa9a07e,
    sprite: 'priest',
    schedule: [
      { from: 0, to: 1, position: [-150, 0, -138] }
    ],
    greet: ({ tier }) => tier === 'enemy'
      ? 'มือเจ้าเปื้อน แต่ใจเจ้ายังได้ยินข้า นั่งลงก่อน'
      : 'เจ้ามาไกลเพื่อฟังคนแก่พูดเรื่องต้นไม้ตายหรือ?',
    lines: [
      'ข้าสวดให้รากไม้ทุกคืน มันไม่ตอบ แต่บางคืนมันก็ร้องไห้',
      'ความเงียบของป่านี้หนักกว่าที่เจ้าคิด'
    ],
    topics: [
      {
        id: 'hermit-forest',
        label: 'เจ้าอยู่ในป่านี้มานานแค่ไหน?',
        keys: ['ป่า', 'นาน', 'อยู่', 'แค่ไหน'],
        reply: 'ข้าจำไม่ได้ว่ามากี่ฤดู ใบไม้ไม่ผลิอีกแล้วจึงไม่มีอะไรบอกเวลา ข้ารู้เพียงว่าทุกคืนที่มีหมอก ต้นไม้จะขยับเข้าหากัน'
      },
      {
        id: 'hermit-pray',
        label: 'ขอพรให้การเดินทางปลอดภัย',
        keys: ['พร', 'สวด', 'ปลอดภัย', 'เดินทาง'],
        effect: { rep: { church: 4 }, toast: 'ฤๅษีสวดพรให้เจ้า · ศาสนจักรพอใจ' },
        reply: 'ขอให้แสงจันทร์ส่องทางเจ้า และขอให้สิ่งที่ตามเจ้ามองไม่เห็นเจ้าในคืนนี้'
      }
    ],
    secretTopic: {
      id: 'hermit-root',
      label: 'ถามถึงเสียงร้องใต้รากไม้ (ความลับ)',
      requiresRep: { faction: 'church', min: 10 },
      effect: { rep: { ancient: 4 }, flag: 'secret-root' },
      reply: 'ใต้รากไม้มีห้องโถงขององค์กรโบราณ พวกเขาไม่ได้ผนึกประตูด้วยหิน แต่ผนึกด้วยชื่อของคนที่ยังมีชีวิต ข้าคือชื่อหนึ่งในนั้น'
    }
  },
  {
    id: 'scout',
    name: 'พรานสำรวจชายแดน',
    title: 'สายลับชายแดน · ราชอาณาจักร',
    faction: 'kingdom',
    nameColor: '#b5c288',
    position: [-188, 0, -186],
    color: 0x8a9b6a,
    sprite: 'ranger',
    schedule: [
      { from: 0, to: .45, position: [-188, 0, -186] },
      { from: .45, to: .7, position: [-180, 0, -178] },
      { from: .7, to: 1, position: [-188, 0, -186] }
    ],
    greet: () => 'หยุดตรงนั้น ใครส่งเจ้ามา? ...ไม่เป็นไร เจ้าดูไม่เหมือนคนของพวกโจร',
    lines: [
      'ข้าถูกส่งมาดูว่าป่าด้านนี้ยังส่งเสียงหรือไม่',
      'ถ้าเจ้าจะผ่านไปทางตะวันออก อย่าเก็บของที่วางอยู่กลางทาง'
    ],
    topics: [
      {
        id: 'scout-trail',
        label: 'เจ้ากำลังตามรอยอะไรอยู่?',
        keys: ['ตามรอย', 'รอย', 'อะไร', 'กำลัง'],
        reply: 'รอยเท้าขนาดเท้าคน แต่หนักกว่าคนสามเท่า เดินเป็นวงกลมรอบวงหินทุกคืน ข้าไม่กล้าเข้าไปดูใกล้ๆ'
      },
      {
        id: 'scout-beast',
        label: 'มีสัตว์ร้ายใหม่แถวนี้ไหม?',
        keys: ['สัตว์', 'ร้าย', 'ใหม่', 'หมาป่า'],
        reply: 'หมาป่ามืดยังอยู่ แต่ตัวที่ข้ากลัวคือคนที่เดินมากับมัน บางคนสวมเสื้อคลุมราชอาณาจักร แต่ไม่ตอบรหัสผ่าน'
      }
    ]
  },
  {
    id: 'warden',
    name: 'นักเวทพเนจร',
    title: 'ผู้เร่ร่อน · องค์กรโบราณ',
    faction: 'ancient',
    nameColor: '#b7c1ff',
    position: [146, 0, 66],
    color: 0x9aa8ec,
    sprite: 'priest',
    schedule: [
      { from: 0, to: .4, position: [146, 0, 66] },
      { from: .4, to: .7, position: [154, 0, 60] },
      { from: .7, to: 1, position: [146, 0, 66] }
    ],
    greet: ({ tier }) => tier === 'enemy'
      ? 'เจ้าไม่มีสิทธิ์ยืนในที่ที่คำสัญญาถูกจดไว้'
      : 'ข้ารู้สึกได้ว่าเจ้าเคยแตะแผ่นศิลาของเรา',
    lines: [
      'เวทของเราไม่ใช่ไฟหรือน้ำแข็ง แต่คือการยืมความหนาวจากที่ที่ไม่มีแสง',
      'ทุกคาถามีราคา บางทีราคาคือความทรงจำ'
    ],
    topics: [
      {
        id: 'warden-magic',
        label: 'เวทของเจ้าทำงานอย่างไร?',
        keys: ['เวท', 'ทำงาน', 'อย่างไร', 'คาถา'],
        reply: 'ข้าไม่ได้สร้างความหนาว ข้าแค่เปิดช่องเล็กๆ ให้ความหนาวจากอีกด้านไหลผ่าน ถ้าเปิดกว้างเกินไป มันจะไม่ยอมปิด'
      },
      {
        id: 'warden-hire',
        label: 'จ้างสหายร่วมทาง',
        keys: ['จ้าง', 'สหาย', 'ร่วมทาง', 'เดินด้วย'],
        companionId: 'warden',
        effect: { action: 'hire', companion: 'warden' },
        reply: 'ข้าจะไปกับเจ้า ความหนาวของข้าอาจทำให้ศัตรูช้าลง แต่เจ้าต้องไม่ยืนใกล้เกินไปตอนข้าร่าย'
      },
      {
        id: 'warden-frost',
        label: 'ความหนาวจากอีกด้านคืออะไร?',
        keys: ['หนาว', 'อีกด้าน', 'ความ', 'น้ำแข็ง'],
        reply: 'ที่ที่ไม่มีแสงยังมีลมอยู่ ลมนั้นพัดผ่านประตูที่องค์กรผนึกไว้ เมื่อมันรั่วออกมา มันจะพาความอบอุ่นของคนที่ยืนใกล้ไปด้วย'
      }
    ]
  },
  {
    id: 'scholar',
    name: 'นักปราชญ์วาร์นฮัล',
    title: 'ผู้จดบันทึกประวัติศาสตร์ · องค์กรโบราณ',
    faction: 'ancient',
    nameColor: '#c9a6f0',
    position: [172, 0, 44],
    color: 0xb58ce0,
    sprite: 'sage',
    schedule: [
      { from: 0, to: 1, position: [172, 0, 44] }
    ],
    greet: () => 'ระวัง อย่าเหยียบหน้ากระดาษที่ปลิวอยู่ ข้าใช้เวลาสามปีเรียงมัน',
    lines: [
      'ประวัติศาสตร์ของวาร์นฮัลถูกเขียนซ้ำสามครั้ง ทุกครั้งมีชื่อกษัตริย์หายไปหนึ่งชื่อ',
      'ข้าเก็บเฉพาะสิ่งที่คนอื่นเผาไม่หมด'
    ],
    topics: [
      {
        id: 'scholar-city',
        label: 'วาร์นฮัลเคยรุ่งเรืองแค่ไหน?',
        keys: ['วาร์นฮัล', 'รุ่งเรือง', 'เมือง', 'เคย'],
        reply: 'เคยมีหอสมุดสามชั้นและตลาดที่เปิดทั้งคืน ตอนนี้เหลือตลาดกลางกับหอสมุดที่ไฟไหม้ไปครึ่งหนึ่ง ข้ายังนอนในปีกที่เหลืออยู่'
      },
      {
        id: 'scholar-order',
        label: 'องค์กรโบราณคือใคร?',
        keys: ['องค์กร', 'โบราณ', 'ใคร', 'สมาคม'],
        reply: 'พวกเขาไม่ใช่ศาสนจักรและไม่ใช่ราชสำนัก พวกเขาคือคนที่จดคำสัญญาระหว่างมนุษย์กับประตู หลังประตูปิด พวกเขาก็หายไปพร้อมคำสัญญา'
      }
    ],
    secretTopic: {
      id: 'scholar-lastking',
      label: 'ถามถึงกษัตริย์ที่หายไปจากบันทึก (ความลับ)',
      requiresRep: { faction: 'ancient', min: 8 },
      effect: { rep: { ancient: 3 }, flag: 'secret-lastking' },
      reply: 'กษัตริย์องค์สุดท้ายไม่ได้หายไป พระองค์คือผู้ลงนามคนสุดท้าย ชื่อของพระองค์ถูกขูดออกเพราะประตูไม่ยอมรับพระองค์เป็นผู้เฝ้า'
    }
  },
  {
    id: 'guardcaptain',
    name: 'นายทหารยามวาร์นฮัล',
    title: 'ผู้คุมด่านกลางเมือง · ราชอาณาจักร',
    faction: 'kingdom',
    nameColor: '#e2c48a',
    position: [166, 0, 34],
    color: 0xd8b878,
    sprite: 'soldier',
    schedule: [
      { from: 0, to: 1, position: [166, 0, 34] }
    ],
    greet: ({ tier }) => tier === 'enemy'
      ? 'ข้าจำหน้าเจ้าได้จากประกาศของสมาคมพ่อค้า อย่าทำอะไรให้ข้าต้องทำงานหนัก'
      : 'ผ่านได้ แต่ถ้าเห็นธงแดงสามผืนนอกกำแพง ให้รีบกลับมาบอกข้า',
    lines: [
      'กำแพงนี้สูงเท่าเดิมมาสี่สิบปี แต่คนที่เฝ้ามันเปลี่ยนไปทุกฤดู',
      'ถ้าเจ้าฆ่าโจรได้ ข้าจดชื่อเจ้าไว้ในบัญชีรางวัล'
    ],
    topics: [
      {
        id: 'guard-duty',
        label: 'ตอนนี้กองทหารกำลังทำอะไร?',
        keys: ['กองทหาร', 'ทำอะไร', 'ตอนนี้', 'ยาม'],
        reply: 'เราส่งคนออกไปดูชายป่าทุกวัน แต่ไม่เคยมีใครกลับมาครบทีม ข้ากำลังคิดว่าจะหยุดส่งคนไป หรือส่งไปทั้งกองดี'
      },
      {
        id: 'guard-bounty',
        label: 'แจ้งเบาะแสโจร (รับ 30 ทอง)',
        keys: ['แจ้ง', 'เบาะแส', 'โจร', 'รางวัล'],
        effect: { gold: 30, rep: { kingdom: 5 }, toast: 'กองทหารบันทึกเบาะแสของเจ้าแล้ว' },
        reply: 'ขอบใจ ข้าจะส่งหน่วยลาดตระเวนไปตรวจทางใต้ เอานี่ไปเป็นค่าเหนื่อย ราชอาณาจักรไม่ลืมคนที่ช่วย'
      }
    ]
  },
  {
    id: 'ashminer',
    name: 'คนงานเหมืองเถ้าถ่าน',
    title: 'คนขุดแร่ · ผู้ถูกเนรเทศ',
    faction: 'outcasts',
    nameColor: '#c99a80',
    position: [140, 0, -160],
    color: 0xa0785e,
    sprite: 'smith',
    schedule: [
      { from: 0, to: .5, position: [140, 0, -160] },
      { from: .5, to: .75, position: [148, 0, -166] },
      { from: .75, to: 1, position: [140, 0, -160] }
    ],
    greet: () => 'ระวังพื้นตรงนั้น มันบางเหมือนเปลือกไข่ ข้าสูญเสียเพื่อนไปสองคนเมื่อเดือนก่อน',
    lines: [
      'ใต้ภูเขานี้มีแร่ที่ร้อนจนต้องขุดตอนกลางคืน',
      'ค่าจ้างดี แต่ไม่มีใครอยู่ครบฤดูกาล'
    ],
    topics: [
      {
        id: 'miner-mine',
        label: 'เหมืองนี้ขุดอะไรอยู่?',
        keys: ['เหมือง', 'ขุด', 'อะไร', 'แร่'],
        reply: 'แร่ดำที่เอาไปตีอาวุธได้ แต่บางก้อนมีสีแดงเหมือนถ่านที่ยังไม่ดับ ขนขึ้นมาแล้วมันยังอุ่นอยู่ทั้งคืน'
      },
      {
        id: 'miner-lava',
        label: 'ลาวาในเหมืองอันตรายไหม?',
        keys: ['ลาวา', 'อันตราย', 'ร้อน', 'ภูเขา'],
        reply: 'มันไม่ใช่ลาวาธรรมดา มันไหลขึ้นบนเหมือนมีคนเรียกกลับ บางคืนเราต้องเอาน้ำเย็นราดทางเดิมซ้ำๆ เพื่อไม่ให้มันปีนมาถึงปากเหมือง'
      }
    ]
  },
  {
    id: 'firepriest',
    name: 'นักบวชไฟ',
    title: 'ผู้เฝ้าปล่องภูเขา · ศาสนจักร',
    faction: 'church',
    nameColor: '#e8a074',
    position: [176, 0, -196],
    color: 0xd2845a,
    sprite: 'priest',
    schedule: [
      { from: 0, to: 1, position: [176, 0, -196] }
    ],
    greet: ({ tier }) => tier === 'enemy'
      ? 'ไฟที่นี่ไม่ตัดสินคน แต่ข้าตัดสิน'
      : 'เจ้ามาใกล้พอที่จะได้ยินไฟพูดหรือยัง?',
    lines: [
      'เราไม่บูชาไฟ เราฟังมัน',
      'ไฟที่เอ็มเบอร์พีคไม่เคยมอด เพราะมันไม่ใช่ไฟที่เราจุด'
    ],
    topics: [
      {
        id: 'priest-flame',
        label: 'ทำไมไฟที่นี่ไม่มอด?',
        keys: ['ไฟ', 'มอด', 'ทำไม', 'ไม่ดับ'],
        reply: 'ใต้ปล่องมีห้องที่องค์กรโบราณจุดตะเกียงไว้ก่อนปิดประตู เปลวไฟนั้นไม่ต้องการอากาศ ไม่ต้องการเชื้อเพลิง มันต้องการเพียงคำสัญญาที่ถูกจำ'
      },
      {
        id: 'priest-pilgrim',
        label: 'นักแสวงบุญควรทำอะไรที่นี่?',
        keys: ['แสวงบุญ', 'ทำอะไร', 'ที่นี่', 'ควร'],
        reply: 'อย่าโยนของลงปล่อง อย่าพูดชื่อคนที่ยังมีชีวิต และถ้าได้ยินเสียงตัวเองตอบกลับมา ให้เดินถอยหลังจนพ้นขอบหิน'
      }
    ],
    secretTopic: {
      id: 'priest-heart',
      label: 'ถามถึงหัวใจศิลาในปล่องไฟ (ความลับ)',
      requiresRep: { faction: 'church', min: 12 },
      effect: { rep: { ancient: 4 }, flag: 'secret-heart' },
      reply: 'หัวใจศิลาคือชิ้นส่วนสุดท้ายของประตู มันถูกฝังในปล่องไฟเพื่อไม่ให้ใครประกอบประตูกลับได้ แต่ศิลาทุกก้อนที่เจ้าเก็บมา... มันกำลังเรียกหากัน'
    }
  },
  {
    id: 'ferryman',
    name: 'คนพายเรือมิเรฟอลล์',
    title: 'ผู้พาข้ามทะเลสาบ · ผู้ถูกเนรเทศ',
    faction: 'outcasts',
    nameColor: '#a8e0ee',
    position: [-196, 0, 182],
    color: 0x7fb8c8,
    sprite: 'ranger',
    schedule: [
      { from: 0, to: .6, position: [-196, 0, 182] },
      { from: .6, to: .85, position: [-188, 0, 190] },
      { from: .85, to: 1, position: [-196, 0, 182] }
    ],
    greet: () => 'จะข้ามไปฝั่งโน้นหรือ? ข้าพาไปได้ แต่ไม่รับปากว่าจะพากลับมา',
    lines: [
      'น้ำในทะเลสาบนี้ไม่กี่ปีก็เปลี่ยนสี ไม่มีใครรู้ว่ามันเอาสีจากไหนมา',
      'เรือข้ามฟากลำนี้ซ่อมมาแล้วสิบเอ็ดครั้ง ข้ายังไม่กล้าทิ้งมัน'
    ],
    topics: [
      {
        id: 'ferry-lake',
        label: 'ทะเลสาบนี้มีอะไรอยู่ในน้ำ?',
        keys: ['ทะเลสาบ', 'น้ำ', 'อะไร', 'ในน้ำ'],
        reply: 'มีกระดิ่งกับหลังคาอาราม บางคืนที่น้ำนิ่ง เจ้าจะเห็นยอดแหลมโผล่ขึ้นมาแค่ปลายนิ้ว แล้วก็จมกลับไป'
      },
      {
        id: 'ferry-cross',
        label: 'จ้างพาข้ามทะเลสาบ (20 ทอง)',
        keys: ['จ้าง', 'ข้าม', 'เรือ', 'พาไป'],
        effect: { gold: -20, rep: { outcasts: 4 }, toast: 'คนพายเรือจดจำเจ้าไว้' },
        reply: 'ขึ้นมาเถิด อย่าเอามือแตะน้ำถ้าไม่จำเป็น และถ้าเราเห็นไฟใต้น้ำ ให้หลับตาจนกว่าข้าจะบอก'
      }
    ],
    secretTopic: {
      id: 'ferry-bell',
      label: 'ถามถึงกระดิ่งใต้น้ำ (ความลับ)',
      requiresRep: { faction: 'outcasts', min: 8 },
      effect: { rep: { ancient: 4 }, flag: 'secret-bell' },
      reply: 'กระดิ่งนั้นดังเฉพาะเมื่อมีคนพูดชื่อกษัตริย์องค์สุดท้ายใกล้น้ำ อารามที่จมไม่ได้เก็บศพ มันเก็บชื่อที่ไม่มีใครกล้าออกเสียง'
    }
  },
  {
    id: 'netmender',
    name: 'ช่างซ่อมอวน',
    title: 'ช่างเย็บอวน · ผู้ถูกเนรเทศ',
    faction: 'outcasts',
    nameColor: '#a8c4ad',
    position: [-150, 0, 150],
    color: 0x86a08a,
    sprite: 'smith',
    schedule: [
      { from: 0, to: 1, position: [-150, 0, 150] }
    ],
    greet: () => 'นั่งลงได้ ข้ายังต้องเย็บอวนอีกสามผืนก่อนพระอาทิตย์ตก',
    lines: [
      'อวนทุกผืนที่ขาด มีรอยฟันที่ทำด้วยของที่ไม่ใช่ปลา',
      'เด็กในหมู่บ้านไม่กล้าลงน้ำแล้ว ข้าเลยต้องเย็บอวนให้ผู้ใหญ่ใช้แทน'
    ],
    topics: [
      {
        id: 'net-fish',
        label: 'ชาวประมงจับอะไรได้บ้าง?',
        keys: ['จับ', 'ปลา', 'ได้อะไร', 'อวน'],
        reply: 'ปลาเงินกับปลาเงา ปลาเงานั้นเนื้อจืดแต่หนังใช้ทำถุงน้ำได้ดี ส่วนปลาเงินขายได้ราคาดีที่ตลาดวาร์นฮัล'
      },
      {
        id: 'net-story',
        label: 'รอยฟันในอวนเกิดจากอะไร?',
        keys: ['รอยฟัน', 'อวน', 'เกิด', 'อะไร'],
        reply: 'ข้าเคยเห็นครั้งเดียว มันเป็นเงาใต้เรือที่ใหญ่เท่าบ้าน มันไม่กัดอวน แต่ฟันของมันเกี่ยวไปตอนว่ายผ่าน ตอนนั้นข้าตัดอวนทิ้งแล้วพายกลับฝั่งทันที'
      }
    ]
  }
];

const NPC_SPRITE_STYLES = {
  sage: {
    kind: 'humanoid', variant: 'sage',
    palette: {
      body: '#7486b8', light: '#97a7d2', dark: '#3e4a70',
      accent: '#9b3547', skin: '#d5a47e', hood: '#46527a',
      eye: '#e8e2c8', boot: '#25283a', metal: '#c19a55'
    }
  },
  smith: {
    kind: 'humanoid', variant: 'smith',
    palette: {
      body: '#a8784a', light: '#c99a68', dark: '#5c3d25',
      accent: '#6d4a2f', skin: '#c9936f', hood: '#7a5436',
      eye: '#2a2020', boot: '#33251c', metal: '#c8cbd0'
    }
  },
  merchant: {
    kind: 'humanoid', variant: 'merchant',
    palette: {
      body: '#4d8f7e', light: '#6fb5a2', dark: '#2c574d',
      accent: '#c9a86a', skin: '#d5a47e', hood: '#3e6c60',
      eye: '#243a38', boot: '#25283a', metal: '#d8b45c'
    }
  },
  soldier: {
    kind: 'humanoid', variant: 'smith',
    palette: {
      body: '#6b6f7d', light: '#8d92a0', dark: '#3f434e',
      accent: '#8c3a3a', skin: '#d5a47e', hood: '#4a4e5a',
      eye: '#2a2020', boot: '#23262e', metal: '#c8cbd0'
    }
  },
  ranger: {
    kind: 'humanoid', variant: 'ranger',
    palette: {
      body: '#557a52', light: '#759a6e', dark: '#314a30',
      accent: '#b5763a', skin: '#d5a47e', hood: '#3a5539',
      eye: '#2a2020', boot: '#2b2118', metal: '#c8cbd0'
    }
  },
  priest: {
    kind: 'humanoid', variant: 'priest',
    palette: {
      body: '#8a8068', light: '#b0a488', dark: '#5a5240',
      accent: '#c9a86a', skin: '#d5a47e', hood: '#6b624d',
      eye: '#e8e2c8', boot: '#3a3428', metal: '#d8b45c'
    }
  },
  rogue: {
    kind: 'humanoid', variant: 'merchant',
    palette: {
      body: '#5b5148', light: '#7c7063', dark: '#37312b',
      accent: '#9c5b3a', skin: '#d5a47e', hood: '#453d35',
      eye: '#2a2020', boot: '#2b241d', metal: '#b8bcc4'
    }
  }
};

const NODE_POSITIONS = {
  herb: [
    [3, -4], [-5, -12], [6, -20], [-4, -28], [5, -36], [-6, -44], [4, -55],
    [-48, -42], [-62, -58], [-156, -148], [-182, -172], [-132, 118],
    [-182, 172], [-58, 212], [136, 74], [178, 38], [46, -196]
  ],
  ore: [
    [10, -40], [15, -52], [8, -58], [16, -62],
    [-38, -66], [52, -58], [146, 60], [182, 28], [152, -168], [198, -196],
    [-198, 186], [-132, 132], [-76, -152]
  ],
  wood: [
    [-11, -8], [-13, -18], [12, -26], [-12, -34], [11, -48],
    [-58, -38], [-172, -160], [-146, -190], [-114, -176], [-132, 128],
    [-188, 148], [124, 42], [142, 78]
  ],
  bone: [[-18, 12], [80, 165], [55, -205], [-14, 15]],
  darkShard: [[-72, -147], [168, -188], [96, -120], [-160, -52]],
  essence: [[-180, 168], [-135, 125], [-108, -190], [-205, 194]],
  stoneHeart: [[158, -178], [202, -203], [136, 80], [-200, 188]]
};

export function createSystems(ctx) {
  const {
    scene, player, state, toast, gainXp, updateHud,
    refreshEquipmentUI, defeatEnemy, applyEnemyDamage, enemies, staticLandmarks, regions,
    getTerrainHeight, audio, worldBounds = WORLD_BOUNDS,
    hireCompanion, getCompanionId, companionInfo, onQuestCutscene
  } = ctx;

  function surfaceY(x, z, baseY = 0) {
    if (typeof getTerrainHeight !== 'function') return baseY;
    const height = getTerrainHeight(x, z, baseY);
    return Number.isFinite(height) ? height : baseY;
  }

  const $ = (selector) => document.querySelector(selector);

  const nodes = [];
  const drops = [];
  const secrets = [];
  const effects = [];
  const npcs = [];
  const npcTextures = new Map();
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
    if (!Array.isArray(state.discoveredSecrets)) state.discoveredSecrets = [];
    if (typeof state.classId !== 'string') state.classId = null;
    if (!state.upgrades || typeof state.upgrades !== 'object') state.upgrades = {};
    if (!Array.isArray(state.bounties)) state.bounties = [];

    if (!state.reputation || typeof state.reputation !== 'object') {
      state.reputation = {};
    }
    for (const id of Object.keys(FACTIONS)) {
      state.reputation[id] = THREE.MathUtils.clamp(
        Math.round(Number(state.reputation[id]) || 0), -100, 100
      );
    }
    if (!state.flags || typeof state.flags !== 'object') state.flags = {};
    if (!Array.isArray(state.waypoints)) state.waypoints = [];
    if (!Array.isArray(state.explored)) state.explored = [];
    state.cartographer = Math.max(0, Math.round(Number(state.cartographer) || 0));
  }

  /* ---------------- Reputation, factions and choices ---------------- */

  const REP_MODULE_KEY = 'reputation-log';

  function repValue(faction) {
    return THREE.MathUtils.clamp(
      Math.round(Number(state.reputation && state.reputation[faction]) || 0),
      -100, 100
    );
  }

  function repTier(value = 0) {
    return REP_TIERS.find((tier) => value >= tier.min) ||
      REP_TIERS[REP_TIERS.length - 1];
  }

  function repPriceModifier() {
    // +40 reputation is roughly a 20% discount, -40 a 20% markup.
    return THREE.MathUtils.clamp(-repValue('merchants') * 0.005, -0.2, 0.2);
  }

  function shopPrice(item) {
    return Math.max(1, Math.round(item.price * (1 + repPriceModifier())));
  }

  function addReputation(faction, amount, reason = '') {
    if (!FACTIONS[faction] || !amount) return;
    const before = repValue(faction);
    const after = THREE.MathUtils.clamp(before + Math.round(amount), -100, 100);
    state.reputation[faction] = after;
    if (after === before) return;

    state.repLog = Array.isArray(state.repLog) ? state.repLog : [];
    state.repLog.push({ faction, amount: after - before, reason });
    if (state.repLog.length > 12) state.repLog.shift();

    const sign = after - before > 0 ? '+' : '';
    toast(`${FACTIONS[faction].short} ${sign}${after - before}` +
      (reason ? ` · ${reason}` : ''));
    renderRep();
    if (dialogue) renderDialogue();
  }

  function renderRep() {
    const list = $('#rep-list');
    if (!list) return;
    list.innerHTML = Object.entries(FACTIONS).map(([id, faction]) => {
      const value = repValue(id);
      const tier = repTier(value);
      const percent = Math.round((value + 100) / 2);
      return (
        `<div class="rep-row" data-tone="${tier.tone}">` +
        `<span class="rep-name">${faction.short}</span>` +
        `<span class="rep-track"><i style="width:${percent}%"></i></span>` +
        `<span class="rep-value">${value > 0 ? '+' : ''}${value} · ${tier.label}</span>` +
        `</div>`
      );
    }).join('');
  }

  /* Cartographer / fog of war ---------------------------------------- */

  const FOG_CELL = 16;
  const FOG_COLS = Math.ceil((worldBounds.maxX - worldBounds.minX) / FOG_CELL);
  const FOG_ROWS = Math.ceil((worldBounds.maxZ - worldBounds.minZ) / FOG_CELL);
  let fogSet = null;
  let fogTimer = 0;
  let mapTimer = 0;

  function fogIndex(x, z) {
    const gx = Math.floor((x - worldBounds.minX) / FOG_CELL);
    const gz = Math.floor((z - worldBounds.minZ) / FOG_CELL);
    if (gx < 0 || gz < 0 || gx >= FOG_COLS || gz >= FOG_ROWS) return -1;
    return gz * FOG_COLS + gx;
  }

  function ensureFog() {
    if (fogSet) return;
    fogSet = new Set((state.explored || []).map((v) => Number(v)));
  }

  // A load replaces state.explored wholesale, so the cached fog grid has to
  // be rebuilt or the map keeps showing the previous run's explored cells.
  function resetExploration() {
    fogSet = null;
    ensureFog();
  }

  function markExplored() {
    ensureFog();
    const radius = 2;
    const cx = Math.floor((player.position.x - worldBounds.minX) / FOG_CELL);
    const cz = Math.floor((player.position.z - worldBounds.minZ) / FOG_CELL);
    let added = false;
    for (let dz = -radius; dz <= radius; dz++) {
      for (let dx = -radius; dx <= radius; dx++) {
        const gx = cx + dx;
        const gz = cz + dz;
        if (gx < 0 || gz < 0 || gx >= FOG_COLS || gz >= FOG_ROWS) continue;
        if (dx * dx + dz * dz > radius * radius + 1) continue;
        const index = gz * FOG_COLS + gx;
        if (!fogSet.has(index)) {
          fogSet.add(index);
          state.explored.push(index);
          added = true;
        }
      }
    }
    return added;
  }

  function exploredPercent() {
    ensureFog();
    return Math.min(100, Math.round(fogSet.size / (FOG_COLS * FOG_ROWS) * 100));
  }

  function unlockNearbyWaypoints() {
    for (const wp of WAYPOINTS) {
      if (state.waypoints.includes(wp.id)) continue;
      const distance = Math.hypot(player.position.x - wp.x, player.position.z - wp.z);
      if (distance < 16) {
        state.waypoints.push(wp.id);
        toast(`บันทึกจุดเดินทาง: ${wp.name}`);
      }
    }
  }

  function discoveredRegion(regionId) {
    return Array.isArray(state.discoveredRegions) &&
      state.discoveredRegions.includes(regionId);
  }

  function getCount(id) {
    return Math.max(0, Number(state.inventory[id]) || 0);
  }

  function addItem(id, amount = 1) {
    const equipmentIds = [
      'sword', 'greatsword', 'staff', 'voidblade',
      'axe', 'bow', 'froststaff',
      'leather', 'iron', 'shadow', 'dragonplate', 'ranger', 'runerobe',
      'starforged', 'voidwarden'
    ];
    if (!MATERIAL_INFO[id] && !equipmentIds.includes(id)) return;

    state.inventory[id] = getCount(id) + amount;
    refreshInventoryUI();
    if (typeof refreshEquipmentUI === 'function') refreshEquipmentUI();
  }

  function owns(id) {
    return getCount(id) > 0;
  }

  /* ---------------- Gear upgrades ---------------- */

  function gearTier(slot) {
    const id = slot === 'armor' ? state.armor : state.weapon;
    return THREE.MathUtils.clamp(
      Math.round(Number(state.upgrades && state.upgrades[id]) || 0),
      0,
      GEAR_UPGRADE_MAX
    );
  }

  function gearUpgradeCost(slot) {
    const tier = gearTier(slot);
    return tier >= GEAR_UPGRADE_MAX ? null : GEAR_UPGRADE_COST[tier + 1];
  }

  function upgradeGear(slot) {
    const id = slot === 'armor' ? state.armor : state.weapon;
    const cost = gearUpgradeCost(slot);
    if (!cost) return toast('อุปกรณ์ชิ้นนี้อัปเกรดถึงระดับสูงสุดแล้ว');
    if (
      state.gold < cost.gold ||
      getCount('ore') < cost.ore ||
      state.crystals < cost.crystals
    ) {
      return toast(`ต้องใช้ ${cost.gold} ทอง · แร่ ${cost.ore} · ผลึก ${cost.crystals}`);
    }

    state.gold -= cost.gold;
    state.inventory.ore = Math.max(0, getCount('ore') - cost.ore);
    state.crystals = Math.max(0, state.crystals - cost.crystals);
    const tier = gearTier(slot) + 1;
    state.upgrades[id] = tier;

    if (audio) audio.play('craft');
    refreshInventoryUI();
    if (typeof refreshEquipmentUI === 'function') refreshEquipmentUI();
    updateHud();
    toast(`อัปเกรดสำเร็จ: ${id} +${tier}`);
  }

  /* ---------------- Bounty contracts ---------------- */

  function rollBounties() {
    const pool = BOUNTY_TYPES.slice();
    const level = Math.max(1, Number(state.level) || 1);
    const extra = Math.min(2, Math.floor(level / 4));
    const list = [];

    for (let i = 0; i < 3 && pool.length > 0; i++) {
      const pick = pool.splice(Math.floor(Math.random() * pool.length), 1)[0];
      const target = 3 + Math.floor(Math.random() * 3) + extra;
      list.push({
        id: `${pick.type}-${i}-${Math.floor(Math.random() * 1e6)}`,
        type: pick.type,
        title: pick.name,
        target,
        count: 0,
        done: false,
        reward: {
          gold: Math.round(target * (18 + level * 3)),
          xp: Math.round(target * (10 + level * 2)),
          item: pick.items[Math.floor(Math.random() * pick.items.length)],
          amount: target >= 5 ? 2 : 1
        }
      });
    }

    state.bounties = list;
  }

  function ensureBounties() {
    if (!Array.isArray(state.bounties) || state.bounties.length !== 3) {
      rollBounties();
    } else {
      for (const bounty of state.bounties) {
        if (!BOUNTY_TYPES.some((entry) => entry.type === bounty.type)) {
          rollBounties();
          break;
        }
      }
    }
  }

  function rerollBounties() {
    const allDone = state.bounties.length > 0 &&
      state.bounties.every((bounty) => bounty.done);
    const cost = allDone ? 0 : BOUNTY_REROLL_COST;
    if (state.gold < cost) {
      return toast(`ต้องมี ${cost} ทองเพื่อรับสัญญาชุดใหม่`);
    }

    state.gold -= cost;
    rollBounties();
    refreshQuestUI();
    updateHud();
    toast(cost
      ? `สัญญาชุดใหม่ (-${cost} ทอง)`
      : 'สัญญาชุดใหม่พร้อมแล้ว');
  }

  function advanceBounties(type) {
    let changed = false;

    for (const bounty of state.bounties) {
      if (bounty.done || bounty.type !== type) continue;

      bounty.count = Math.min(bounty.target, bounty.count + 1);
      changed = true;

      if (bounty.count >= bounty.target) {
        bounty.done = true;
        state.gold += bounty.reward.gold;
        if (bounty.reward.xp) gainXp(bounty.reward.xp);
        if (bounty.reward.item) {
          addItem(bounty.reward.item, bounty.reward.amount || 1);
        }
        if (audio) audio.play('quest');
        toast(`สัญญาสำเร็จ: ${bounty.title} · +${bounty.reward.gold} ทอง`);
        updateHud();
      }
    }

    if (changed) refreshQuestUI();
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
    } else if (type === 'wood') {
      const log = new THREE.Mesh(
        new THREE.CylinderGeometry(.3, .34, 1.5, 7),
        new THREE.MeshStandardMaterial({ color: 0x7a5032, roughness: 1 })
      );
      log.rotation.z = Math.PI / 2;
      log.position.y = .35;
      group.add(log);
    } else {
      const crystal = new THREE.Mesh(
        new THREE.OctahedronGeometry(.55, 0),
        new THREE.MeshStandardMaterial({
          color: MATERIAL_INFO[type] ? MATERIAL_INFO[type].color : 0xffffff,
          emissive: MATERIAL_INFO[type] ? MATERIAL_INFO[type].color : 0xffffff,
          emissiveIntensity: .5,
          roughness: .4
        })
      );
      crystal.position.y = .65;
      group.add(crystal);
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

  function makeSecretMesh(data) {
    const color = data.kind === 'cave'
      ? 0x7fd4e8
      : data.kind === 'ruin' ? 0xc992f0 : 0xe2b45c;
    const group = new THREE.Group();
    const material = new THREE.MeshStandardMaterial({
      color,
      emissive: color,
      emissiveIntensity: .65,
      roughness: .4
    });

    if (data.kind === 'cave') {
      const ring = new THREE.Mesh(new THREE.TorusGeometry(.85, .16, 8, 24), material);
      ring.position.y = 1.1;
      group.add(ring);
    } else {
      const base = new THREE.Mesh(new THREE.BoxGeometry(1.15, .65, .85), material);
      base.position.y = .45;
      group.add(base);
      const lid = new THREE.Mesh(new THREE.BoxGeometry(1.25, .18, .95), material);
      lid.position.y = .86;
      group.add(lid);
    }

    const spark = new THREE.Mesh(new THREE.OctahedronGeometry(.32), material);
    spark.position.y = data.kind === 'cave' ? 1.1 : 1.5;
    group.add(spark);

    const y = surfaceY(data.position.x, data.position.z, 0);
    group.position.set(data.position.x, y, data.position.z);
    group.userData = {
      kind: 'secret',
      secretId: data.id,
      secretKind: data.kind,
      secretData: data,
      color,
      baseY: y,
      phase: Math.random() * Math.PI * 2,
      spark
    };
    group.visible = !state.discoveredSecrets.includes(data.id);
    scene.add(group);
    return group;
  }

  const bossChests = [];

  function makeBossChestMesh(position, chestId, reward) {
    const group = new THREE.Group();
    const wood = new THREE.MeshStandardMaterial({ color: 0x6b3f25, roughness: .42, metalness: .25 });
    const trim = new THREE.MeshStandardMaterial({ color: 0xe4b45d, emissive: 0x8a4b12, emissiveIntensity: .8, metalness: .75, roughness: .25 });
    const base = new THREE.Mesh(new THREE.BoxGeometry(1.35, .72, .9), wood);
    base.position.y = .48;
    const lid = new THREE.Mesh(new THREE.BoxGeometry(1.42, .3, .98), wood);
    lid.position.y = .98;
    const band = new THREE.Mesh(new THREE.BoxGeometry(1.48, .12, 1.02), trim);
    band.position.y = .75;
    const lock = new THREE.Mesh(new THREE.BoxGeometry(.2, .28, .08), trim);
    lock.position.set(0, .8, .53);
    const glow = new THREE.Mesh(new THREE.TorusGeometry(.8, .045, 8, 32), new THREE.MeshBasicMaterial({ color: 0xffd879, transparent: true, opacity: .85 }));
    glow.rotation.x = -Math.PI / 2;
    glow.position.y = .08;
    group.add(base, lid, band, lock, glow);
    const x = Number(position.x) || 0;
    const z = Number(position.z) || 0;
    group.position.set(x, surfaceY(x, z, Number(position.y) || 0), z);
    group.userData = {
      kind: 'bossChest', chestId,
      reward: { title: reward.title, gold: Math.max(0, Number(reward.gold) || 0), crystals: Math.max(0, Number(reward.crystals) || 0), items: { ...reward.items } },
      opened: false, glow, lid, phase: Math.random() * Math.PI * 2
    };
    scene.add(group);
    bossChests.push(group);
    return group;
  }

  function createBossChest(chestId, position, reward) {
    if (typeof chestId !== 'string' || !chestId || !reward || typeof reward !== 'object') return null;
    if (bossChests.some((chest) => chest.userData.chestId === chestId)) return null;
    return makeBossChestMesh(position, chestId, reward);
  }

  function openBossChest(chest) {
    const data = chest.userData;
    if (!data || data.kind !== 'bossChest' || data.opened) return false;
    data.opened = true;
    state.gold += data.reward.gold;
    state.crystals += data.reward.crystals;
    for (const [id, amount] of Object.entries(data.reward.items || {})) {
      if (MATERIAL_INFO[id]) addItem(id, Math.max(0, Math.floor(Number(amount) || 0)));
    }
    if (data.lid) data.lid.rotation.x = -.72;
    if (audio) audio.play('pickup');
    const legendary = Object.keys(data.reward.items || {}).some((id) => ITEM_RARITY[id] === 'legendary');
    if (legendary) makeBurst(chest.position, 0xffcf5a);
    toast(`เปิดหีบ ${data.reward.title} · ทอง +${data.reward.gold} · ผลึก +${data.reward.crystals} · ${legendary ? 'ได้รับไอเทม Legendary!' : 'รับไอเทมพิเศษแล้ว'}`);
    updateHud();
    return true;
  }

  function claimSecret(secret) {
    const data = secret.userData.secretData;
    if (!data || state.discoveredSecrets.includes(data.id)) return false;

    state.discoveredSecrets.push(data.id);
    const loot = data.loot || {};
    if (loot.crystals) state.crystals += loot.crystals;
    if (loot.gold) state.gold += loot.gold;
    if (loot.potions) state.potions += loot.potions;
    if (loot.xp) gainXp(loot.xp);
    for (const [item, amount] of Object.entries(loot.items || {})) {
      addItem(item, amount);
    }

    const regionReward = claimSecretRegionReward(state, data.id);
    if (regionReward) {
      state.gold += regionReward.gold;
      state.crystals += regionReward.crystals;
      gainXp(regionReward.xp);
    }

    makeBurst(secret.position, secret.userData.color);
    secret.visible = false;
    toast(`ค้นพบ ${data.name}${loot.gold ? ` · ทองคำ +${loot.gold}` : ''}${regionReward ? ` · สำรวจภูมิภาคครบ! โบนัสทอง +${regionReward.gold} ผลึก +${regionReward.crystals}` : ''}`);
    addReputation('ancient', 2, 'ค้นพบความลับ');
    refreshInventoryUI();
    refreshQuestUI();
    updateHud();
    return true;
  }

  function getNearbySecretName() {
    let nearest = null;
    let nearestDistance = Infinity;
    for (const secret of secrets) {
      if (!secret.visible) continue;
      const distance = player.position.distanceTo(secret.position);
      if (distance < 4 && distance < nearestDistance) {
        nearest = secret.userData.secretData;
        nearestDistance = distance;
      }
    }
    return nearest ? nearest.name : null;
  }

  function updateSecrets(dt) {
    const time = performance.now() * .001;
    for (const secret of secrets) {
      if (!secret.visible) continue;
      const spark = secret.userData.spark;
      spark.rotation.y += dt * 1.8;
      spark.position.y = (secret.userData.secretKind === 'cave' ? 1.1 : 1.5)
        + Math.sin(time * 2 + secret.userData.phase) * .14;
    }
  }

  function getNpcTexture(data) {
    if (!npcTextures.has(data.id)) {
      const style = NPC_SPRITE_STYLES[data.sprite] ||
        NPC_SPRITE_STYLES[data.id] ||
        { kind: 'humanoid', palette: {} };
      const palette = { ...(style.palette || {}) };

      // New NPCs reuse an archetype silhouette but keep their own body tint,
      // so the crowd reads as individuals without a texture per villager.
      if (data.sprite && Number.isFinite(data.color)) {
        const base = new THREE.Color(data.color);
        palette.body = `#${base.getHexString()}`;
        palette.light = `#${base.clone().offsetHSL(0, .04, .14).getHexString()}`;
        palette.dark = `#${base.clone().offsetHSL(0, -.02, -.13).getHexString()}`;
      }

      npcTextures.set(data.id, createCharacterAtlas({ ...style, palette }));
    }
    return npcTextures.get(data.id);
  }

  function makeNpcMesh(data) {
    const group = new THREE.Group();

    const sprite = createCharacterSprite(getNpcTexture(data), 1.5, 2);
    group.add(sprite);

    const npcShadow = new THREE.Mesh(
      new THREE.CircleGeometry(.42, 16),
      new THREE.MeshBasicMaterial({
        color: 0x000000,
        transparent: true,
        opacity: 0.25,
        depthWrite: false
      })
    );
    npcShadow.rotation.x = -Math.PI / 2;
    npcShadow.position.y = 0.025;
    group.add(npcShadow);

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
      sprite,
      animTime: 0,
      hurtTimer: 0,
      attackTimer: 0,
      deathTimer: 0,
      directionRow: 0,
      moving: false,
      baseTint: 0xffffff,
      target: new THREE.Vector3(data.position[0], y, data.position[2])
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

  function advanceQuest(id, amount = 1) {
    const quest = SIDE_QUESTS[id];
    const progress = state.quests[id];
    if (!quest || !progress || progress.status !== 'active') return;

    progress.count = Math.min(quest.target, progress.count + amount);

    if (progress.count >= quest.target) {
      progress.status = 'done';
      const reward = quest.reward;

      if (reward.potions) state.potions += reward.potions;
      if (reward.ore) addItem('ore', reward.ore);
      if (reward.crystals) state.crystals += reward.crystals;
      if (id === 'wraith') {
        if (state.flags['sage-story-choice'] === 'free-spirits') {
          state.crystals += 2;
          addReputation('outcasts', 5, 'ปลดปล่อยวิญญาณ');
        } else if (state.flags['sage-story-choice'] === 'seal-spirits') {
          state.potions += 1;
          addReputation('church', 5, 'ผนึกวิญญาณ');
        }
      }
      if (id === 'release') addReputation('outcasts', 4, 'บทเพลงแห่งอิสรภาพ');
      if (id === 'seal') addReputation('church', 4, 'ตราผนึกศาสนจักร');
      if (reward.xp) gainXp(reward.xp);

      if (audio) audio.play('quest');
      toast(`ภารกิจสำเร็จ: ${quest.title}`);
      if (typeof onQuestCutscene === 'function') {
        onQuestCutscene({ title: `ภารกิจสำเร็จ · ${quest.title}` });
      }
      updateHud();
    }

    refreshQuestUI();
  }

  function onEnemyKilled(enemy) {
    const type = enemy.userData.type || 'guardian';
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
    if (type === 'wraith') {
      advanceQuest('wraith', 1);
      if (state.flags['sage-story-choice'] === 'seal-spirits') advanceQuest('seal', 1);
    }
    advanceBounties(type);
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
    if (id === 'heal' && state.hp >= (state.maxHp || 100)) {
      return toast('พลังชีวิตเต็มอยู่แล้ว');
    }

    state.mana -= spell.cost;
    if (audio) audio.play('spell');

    const arcana = Math.max(0, Number(state.skills && state.skills.arcana) || 0);
    const classBonus = state.classId === 'mage' ? 1.25 : 1;
    const power = Math.round(spell.power * (1 + arcana * .1) * classBonus);

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
        if (typeof applyEnemyDamage === 'function') {
          applyEnemyDamage(target, power, { element: 'fire' });
        } else {
          target.userData.hurtTimer = .3;
          target.userData.hp -= power;
          if (target.userData.hp <= 0) defeatEnemy(target);
        }
        if (target.userData.alive) toast(`ลูกไฟโดนศัตรู -${power}`);
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

    const secretsFound = (state.discoveredSecrets || []).length;
    const hiddenHtml =
      `<div class="quest-entry hidden-quest">` +
      `<b>🗝 ภารกิจลับ</b>` +
      `<small>ค้นพบความลับในโลก ${secretsFound}/18 · ค่าชื่อเสียงองค์กรโบราณ ${repValue('ancient')}</small>` +
      `<small>${secretsFound ? 'ความลับที่พบถูกบันทึกบนแผนที่' : 'ยังไม่มีผู้ค้นพบความลับนี้'}</small>` +
      `</div>`;

    list.innerHTML = (
      `<div class="quest-entry main-quest">` +
      `<b>✦ ภารกิจหลัก</b><small>${mainText}</small></div>` +
      sideHtml + hiddenHtml
    );

    ensureBounties();
    const bountyList = $('#bounty-list');
    if (bountyList) {
      bountyList.innerHTML = state.bounties.map((bounty) => {
        const stateText = bounty.done
          ? '✓ สำเร็จ'
          : `${Math.min(bounty.count, bounty.target)}/${bounty.target}`;
        const itemName = bounty.reward.item && MATERIAL_INFO[bounty.reward.item]
          ? MATERIAL_INFO[bounty.reward.item].name
          : '-';
        return (
          `<div class="bounty-entry${bounty.done ? ' done' : ''}">` +
          `<b>${bounty.title}</b>` +
          `<small>${stateText} · +${bounty.reward.gold} ทอง · +${bounty.reward.xp} XP` +
          ` · ${itemName} x${bounty.reward.amount || 1}</small>` +
          `</div>`
        );
      }).join('');
    }

    const reroll = $('#bounty-reroll');
    if (reroll) {
      const allDone = state.bounties.length > 0 &&
        state.bounties.every((bounty) => bounty.done);
      reroll.textContent = allDone
        ? 'รับสัญญาชุดใหม่'
        : `สัญญาใหม่ (${BOUNTY_REROLL_COST} ทอง)`;
    }

    renderRep();
  }

  function questAcceptedLine(id) {
    if (id === 'wraith') {
      if (state.flags['sage-story-choice'] === 'free-spirits') return 'ข้าจะไม่ผนึกพวกเขาอีก จงช่วยวิญญาณที่หลงเหลือให้เป็นอิสระ แล้วกลับมาบอกข้า';
      if (state.flags['sage-story-choice'] === 'seal-spirits') return 'จงผนึกวิญญาณที่หลงเหลือไว้ก่อนที่เงาจะลุกลาม ข้าจะเตรียมยาฟื้นฟูให้เจ้า';
    }
    return SIDE_QUESTS[id]?.acceptedLine || `จงทำภารกิจ ${SIDE_QUESTS[id]?.title || ''} ให้สำเร็จ แล้วกลับมาหาข้า`;
  }

  function chooseStoryChoice(choiceId) {
    if (!dialogue || dialogue.npc.id !== 'sage') return;
    if (state.quests.herb?.status !== 'done' || state.flags['sage-story-choice']) return;
    const choices = {
      'free-spirits': { flag: 'free-spirits', text: 'ข้าจะช่วยปลดปล่อยวิญญาณ ไม่ใช่กักขังพวกเขาอีกต่อไป', faction: 'outcasts', rep: 3 },
      'seal-spirits': { flag: 'seal-spirits', text: 'ข้าจะช่วยศาสนจักรผนึกวิญญาณ เพื่อปกป้องผู้คนจากเงามืด', faction: 'church', rep: 3 }
    };
    const choice = choices[choiceId];
    if (!choice) return;
    state.flags['sage-story-choice'] = choice.flag;
    addReputation(choice.faction, choice.rep, 'การตัดสินใจที่ศาลเจ้า');
    dialogue.mode = 'reply';
    dialogue.text = choice.text + (choiceId === 'free-spirits'
      ? '\n\nเมื่อภารกิจสำเร็จ วิญญาณจะมอบผลึกเพิ่มเติมให้เจ้า'
      : '\n\nเมื่อภารกิจสำเร็จ ศาสนจักรจะมอบยาฟื้นฟูเพิ่มเติมให้เจ้า');
    if (typeof onQuestCutscene === 'function') {
      onQuestCutscene({ title: choiceId === 'free-spirits' ? 'คำสัตย์ · ปลดปล่อยวิญญาณ' : 'คำสัตย์ · ผนึกวิญญาณ' });
    }
    toast(choiceId === 'free-spirits' ? 'เลือกปลดปล่อยวิญญาณ · ผู้ถูกเนรเทศ +3' : 'เลือกผนึกวิญญาณ · ศาสนจักร +3');
    renderDialogue();
  }

  function acceptQuest(id) {
    const quest = SIDE_QUESTS[id];
    if (!quest) return false;

    const progress = state.quests[id];
    if (progress && progress.status !== 'locked') return false;

    state.quests[id] = { status: 'active', count: 0 };
    toast(`รับภารกิจ: ${quest.title}`);
    if (typeof onQuestCutscene === 'function') {
      onQuestCutscene({ title: `ภารกิจใหม่ · ${quest.title}` });
    }
    refreshQuestUI();
    return true;
  }

  function npcQuestId(npc) {
    const chain = Array.isArray(npc.questChain)
      ? npc.questChain.slice()
      : (npc.quest ? [npc.quest] : []);
    if (npc.id === 'sage' && state.quests.wraith?.status === 'done') {
      const branch = state.flags['sage-story-choice'] === 'free-spirits'
        ? 'release'
        : state.flags['sage-story-choice'] === 'seal-spirits' ? 'seal' : null;
      if (branch) chain.push(branch);
    }

    for (const id of chain) {
      const progress = state.quests[id];
      if (!progress || progress.status === 'locked' || progress.status === 'active') {
        return id;
      }
    }
    return null;
  }

  function questAvailable(npc) {
    const id = npcQuestId(npc);
    if (!id) return false;
    const progress = state.quests[id];
    return !progress || progress.status === 'locked';
  }

  function questGuideTarget() {
    const active = Object.entries(state.quests || {}).find(([id, progress]) =>
      SIDE_QUESTS[id] && progress && progress.status === 'active'
    );
    if (active) {
      const [id, progress] = active;
      const targetType = ['herb', 'release'].includes(id) ? 'herb' : 'wraith';
      const pool = targetType === 'herb'
        ? nodes.filter((node) => node.userData.type === 'herb' && node.userData.amount > 0)
        : enemies.filter((enemy) => enemy.userData.type === 'wraith' && enemy.userData.alive);
      let target = null, distance = Infinity;
      for (const item of pool) {
        const d = Math.hypot(item.position.x - player.position.x, item.position.z - player.position.z);
        if (d < distance) { target = item; distance = d; }
      }
      if (target) return {
        x: target.position.x, z: target.position.z,
        label: SIDE_QUESTS[id].title,
        progress: `${Math.min(progress.count || 0, SIDE_QUESTS[id].target)}/${SIDE_QUESTS[id].target}`
      };
      return { x: 5.5, z: 1, label: 'กลับไปหานักพรต', progress: 'กลับไปส่งภารกิจ' };
    }

    const sage = npcs.find((npc) => npc.userData.npcId === 'sage');
    const sageData = NPC_DATA.find((npc) => npc.id === 'sage');
    if (sage && sageData && questAvailable(sageData)) {
      return { x: sage.position.x, z: sage.position.z, label: 'รับภารกิจจากนักพรต', progress: 'คุยกับ NPC' };
    }
    if (state.questStage < 2) {
      const main = mainQuestMarker();
      if (main) return { ...main, progress: 'ภารกิจหลัก' };
    }
    return null;
  }

  function npcTier(npc) {
    return repTier(repValue(npc.faction || 'outcasts'));
  }

  function dialogueContext(npc) {
    const tier = npcTier(npc);
    return {
      rep: repValue(npc.faction),
      tier: tier.tone,
      label: tier.label,
      flags: state.flags,
      quests: state.quests,
      questStage: state.questStage
    };
  }

  function topicUnlocked(topic) {
    if (!topic) return false;
    if (topic.requiresRep) {
      return repValue(topic.requiresRep.faction) >= topic.requiresRep.min;
    }
    if (topic.once && state.flags[`topic-${topic.id}`]) return false;
    return true;
  }

  function topicLabel(topic) {
    if (topic.requiresRep) return `🔒 ${topic.label}`;
    if (topic.companionId && typeof companionInfo === 'function') {
      const info = companionInfo(topic.companionId);
      if (info) {
        const hired = typeof getCompanionId === 'function' &&
          getCompanionId() === topic.companionId;
        return hired
          ? `${info.name} · กำลังร่วมทางกับเจ้า`
          : `จ้าง ${info.name} (${info.cost} ทอง)`;
      }
    }
    return topic.label;
  }

  function priceSentence() {
    const value = repValue('merchants');
    const mod = Math.round(repPriceModifier() * 100);
    if (mod === 0) return 'ตอนนี้ข้าขายราคาปกติให้เจ้า ถ้าช่วยสมาคมมากขึ้น ข้าอาจลดให้';
    return mod < 0
      ? `ตอนนี้เจ้าซื้อถูกลง ${Math.abs(mod)}% จากราคาปกติ (ชื่อเสียงพ่อค้า ${value})`
      : `ตอนนี้เจ้าซื้อแพงขึ้น ${mod}% จากราคาปกติ (ชื่อเสียงพ่อค้า ${value})`;
  }

  function revealRegionForMap() {
    const undiscovered = regions.filter((region) => !discoveredRegion(region.id));
    if (!undiscovered.length) {
      toast('เจ้ารู้จักทุกภูมิภาคในแผนที่นี้แล้ว');
      return;
    }
    undiscovered.sort((a, b) => {
      const da = Math.hypot(a.center.x - player.position.x, a.center.z - player.position.z);
      const db = Math.hypot(b.center.x - player.position.x, b.center.z - player.position.z);
      return da - db;
    });
    const region = undiscovered[0];
    state.discoveredRegions.push(region.id);
    state.cartographer += 1;
    toast(`แผนที่เก่าผยให้เห็น: ${region.name}`);
    audio && audio.play('pickup');
  }

  function applyTopicEffect(npc, topic) {
    const effect = topic.effect;
    if (!effect) return true;

    if (effect.action === 'hire') {
      const hired = typeof hireCompanion === 'function' &&
        hireCompanion(effect.companion);
      return Boolean(hired);
    }

    if (effect.gold && effect.gold < 0 && state.gold < -effect.gold) {
      toast(`ต้องมี ${-effect.gold} ทองก่อน`);
      return false;
    }

    if (effect.gold) {
      state.gold = Math.max(0, state.gold + effect.gold);
      updateHud();
    }
    if (effect.rep) {
      for (const [faction, amount] of Object.entries(effect.rep)) {
        addReputation(faction, amount, topic.label);
      }
    }
    if (effect.flag) state.flags[effect.flag] = true;
    if (effect.once !== false) state.flags[`topic-${topic.id}`] = true;

    if (effect.action === 'openShop') {
      closeDialogue();
      openShop();
      return true;
    }
    if (effect.action === 'buyMap') revealRegionForMap();
    if (effect.toast && !effect.rep) toast(effect.toast);
    return true;
  }

  function chooseTopic(topic) {
    if (!dialogue) return;
    if (!topicUnlocked(topic)) {
      toast(topic.requiresRep
        ? `ต้องมีความสัมพันธ์กับ${FACTIONS[topic.requiresRep.faction].short}อย่างน้อย ${topic.requiresRep.min}`
        : 'หัวข้อนี้ถูกใช้ไปแล้ว');
      return;
    }
    if (!applyTopicEffect(dialogue.npc, topic)) return;

    let text = topic.reply;
    if (topic.dynamic === 'price') text = `${text}\n\n${priceSentence()}`;
    dialogue.mode = 'reply';
    dialogue.text = text;
    dialogue.topicId = topic.id;
    renderDialogue();
  }

  function backToTopics() {
    if (!dialogue) return;
    dialogue.mode = 'topics';
    dialogue.text = dialogue.npc.greet
      ? dialogue.npc.greet(dialogueContext(dialogue.npc))
      : (dialogue.npc.lines && dialogue.npc.lines[0]) || '';
    renderDialogue();
  }

  function askNpc(text) {
    if (!dialogue) return;
    const query = String(text || '').trim().toLowerCase().replace(/\s+/g, '');
    if (!query) return;

    const npc = dialogue.npc;
    const pool = [
      ...(npc.topics || []),
      ...(topicUnlocked(npc.secretTopic) ? [npc.secretTopic] : [])
    ];
    let best = null;
    let bestScore = 0;
    for (const topic of pool) {
      let score = 0;
      for (const key of topic.keys || []) {
        if (query.includes(String(key).toLowerCase().replace(/\s+/g, ''))) {
          score += Math.max(1, key.length);
        }
      }
      if (score > bestScore) {
        best = topic;
        bestScore = score;
      }
    }

    if (best) {
      if (best.requiresRep && !topicUnlocked(best)) {
        dialogue.mode = 'reply';
        dialogue.text = `เรื่องนั้น... เจ้ายังไม่ใช่คนที่ข้าจะไว้ใจได้`;
        renderDialogue();
        return;
      }
      chooseTopic(best);
      return;
    }

    const tier = npcTier(npc);
    dialogue.mode = 'reply';
    dialogue.text =
      `ข้าไม่รู้เรื่องนั้นดีพอ (${tier.label}ต่อ${FACTIONS[npc.faction].short}) ` +
      `ลองถามเรื่องที่ข้ารู้ เช่น ${(npc.topics || []).slice(0, 2).map((t) => `“${t.label}”`).join(' หรือ ')}`;
    renderDialogue();
  }

  function renderDialogue() {
    if (!dialogue) return;

    const nameEl = $('#dialogue-name');
    const titleEl = $('#dialogue-title');
    const repEl = $('#dialogue-rep');
    const textEl = $('#dialogue-text');
    const choicesEl = $('#dialogue-choices');
    const nextEl = $('#dialogue-next');
    const askRow = $('.dialogue-ask');
    if (!nameEl || !textEl || !nextEl) return;

    const npc = dialogue.npc;
    const tier = npcTier(npc);
    nameEl.textContent = npc.name;
    if (titleEl) titleEl.textContent = npc.title || 'ชาวเมือง';
    if (repEl) {
      repEl.textContent = `${FACTIONS[npc.faction].short} · ${tier.label}`;
      repEl.dataset.tone = tier.tone;
      repEl.title = `ชื่อเสียง ${repValue(npc.faction)}`;
    }
    textEl.textContent = dialogue.text;

    if (choicesEl) {
      choicesEl.innerHTML = '';
      if (dialogue.mode === 'reply') {
        const back = document.createElement('button');
        back.type = 'button';
        back.className = 'dialogue-back';
        back.textContent = '↩ กลับไปถามเรื่องอื่น';
        back.addEventListener('click', backToTopics);
        choicesEl.appendChild(back);
      } else {
        if (npc.id === 'sage' && state.quests.herb?.status === 'done' && !state.flags['sage-story-choice']) {
          const choiceTitle = document.createElement('small');
          choiceTitle.className = 'story-choice-title';
          choiceTitle.textContent = '✦ การตัดสินใจของเจ้า';
          choicesEl.appendChild(choiceTitle);

          const free = document.createElement('button');
          free.type = 'button';
          free.className = 'dialogue-topic story-choice';
          free.textContent = 'ปลดปล่อยวิญญาณ · ผู้ถูกเนรเทศ +3';
          free.addEventListener('click', () => chooseStoryChoice('free-spirits'));
          choicesEl.appendChild(free);

          const seal = document.createElement('button');
          seal.type = 'button';
          seal.className = 'dialogue-topic story-choice';
          seal.textContent = 'ผนึกวิญญาณ · ศาสนจักร +3';
          seal.addEventListener('click', () => chooseStoryChoice('seal-spirits'));
          choicesEl.appendChild(seal);
        }
        if (questAvailable(npc)) {
          const questId = npcQuestId(npc);
          const accept = document.createElement('button');
          accept.type = 'button';
          accept.className = 'dialogue-topic quest';
          accept.textContent = `✦ รับภารกิจ: ${SIDE_QUESTS[questId].title}`;
          accept.addEventListener('click', () => {
            if (acceptQuest(questId)) {
              dialogue.mode = 'reply';
              dialogue.text = questAcceptedLine(questId);
              renderDialogue();
            }
          });
          choicesEl.appendChild(accept);
        }
        for (const topic of npc.topics || []) {
          if (!topicUnlocked(topic)) continue;
          const button = document.createElement('button');
          button.type = 'button';
          button.className = 'dialogue-topic';
          button.innerHTML = `<span>${topicLabel(topic)}</span>`;
          button.addEventListener('click', () => chooseTopic(topic));
          choicesEl.appendChild(button);
        }
        if (topicUnlocked(npc.secretTopic)) {
          const secret = document.createElement('button');
          secret.type = 'button';
          secret.className = 'dialogue-topic secret';
          secret.innerHTML = `<span>🗝 ${npc.secretTopic.label}</span>`;
          secret.addEventListener('click', () => chooseTopic(npc.secretTopic));
          choicesEl.appendChild(secret);
        }
      }
    }

    if (askRow) askRow.classList.toggle('hidden', dialogue.mode !== 'topics');
    const askInput = $('#dialogue-ask');
    if (askInput) askInput.value = '';

    nextEl.textContent = dialogue.mode === 'topics' && questAvailable(npc)
      ? 'รับภารกิจ'
      : 'จบการสนทนา';
  }

  function closeDialogue() {
    dialogue = null;
    const panel = $('#dialogue-panel');
    if (panel) panel.classList.add('hidden');
  }

  function openDialogue(npc) {
    dialogue = {
      npc,
      mode: 'topics',
      text: npc.greet ? npc.greet(dialogueContext(npc)) : (npc.lines && npc.lines[0]) || ''
    };
    const panel = $('#dialogue-panel');
    if (panel) panel.classList.remove('hidden');
    renderDialogue();
  }

  function interact() {
    if (dialogue) {
      closeDialogue();
      return true;
    }

    const nearbyChest = bossChests.find((chest) =>
      !chest.userData.opened && player.position.distanceTo(chest.position) < 3.2
    );
    if (nearbyChest) return openBossChest(nearbyChest);

    let nearest = null;
    let nearestDistance = Infinity;

    for (const npc of npcs) {
      const distance = Math.hypot(
        player.position.x - npc.position.x,
        player.position.z - npc.position.z
      );
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
      if (type === 'herb') {
        advanceQuest('herb', amount);
        if (state.flags['sage-story-choice'] === 'free-spirits') advanceQuest('release', amount);
      }

      toast(`เก็บ${MATERIAL_INFO[type].name} +${amount}`);
      return true;
    }

    let nearestSecret = null;
    let secretDistance = Infinity;
    for (const secret of secrets) {
      if (!secret.visible) continue;
      const distance = player.position.distanceTo(secret.position);
      if (distance < 3.2 && distance < secretDistance) {
        nearestSecret = secret;
        secretDistance = distance;
      }
    }
    if (nearestSecret) return claimSecret(nearestSecret);

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
        const owned = item.id !== 'potion' && owns(item.id) &&
          !['herb', 'ore', 'wood', 'bone', 'meat', 'darkShard', 'essence', 'stoneHeart'].includes(item.id);
        const price = shopPrice(item);
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

    const repLabel = $('#shop-rep');
    if (repLabel) {
      const value = repValue('merchants');
      const mod = Math.round(repPriceModifier() * 100);
      const tier = repTier(value);
      repLabel.textContent = mod === 0
        ? `ชื่อเสียงพ่อค้า ${value} · ${tier.label}`
        : `ชื่อเสียงพ่อค้า ${value} · ${tier.label} · ราคา ${mod > 0 ? '+' : ''}${mod}%`;
      repLabel.dataset.tone = tier.tone;
    }
  }

  function buyItem(id) {
    const item = SHOP_ITEMS.find((entry) => entry.id === id);
    if (!item) return;
    const price = shopPrice(item);
    if (state.gold < price) return toast('ทองไม่เพียงพอ');

    state.gold -= price;
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

    for (const secret of secrets) {
      if (secret.visible) plot(secret.position, '#f0d69a', 2.8);
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

  /* ---------------- Living world map (parchment) ---------------- */

  const MAP_SIZE = 900;
  const MAP_PAD = 48;
  const MAP_INNER = MAP_SIZE - MAP_PAD * 2;
  const MAP_MAX_SCALE = 5;

  const mapView = {
    scale: 1,
    tx: 0,
    ty: 0,
    bound: false,
    lastYaw: 0,
    dragging: false,
    moved: 0,
    lastX: 0,
    lastY: 0,
    pointers: new Map(),
    pinchDist: 0,
    selected: null
  };

  let parchmentCanvas = null;
  let fogPattern = null;

  const MAP_ROADS = [
    [[-45, -45], [9, -8], [45, -50], [55, 0], [42, 50]],
    [[-45, -45], [-70, -140]],
    [[9, -8], [42, 50], [-50, 205]],
    [[55, 0], [160, 50]],
    [[160, 50], [150, -150], [159, -177]],
    [[-45, -45], [-150, -40], [-165, -155]],
    // Newly charted frontier routes (kept inside the current terrain bounds).
    [[160,  50], [210,  5], [245, -65]],
    [[-48, 42], [-150, 55], [-245, 58]],
    [[42, 50], [135, 145], [245, 225]],
    [[-165, -155], [-210, -205], [-245, -235]],
    [[245, -65], [160, -177], [55, -200]],
    [[-245, 58], [-170, 160], [-50, 205]]
  ];

  function hashString(text) {
    let h = 2166136261;
    for (let i = 0; i < text.length; i++) {
      h ^= text.charCodeAt(i);
      h = Math.imul(h, 16777619);
    }
    return (h >>> 0) / 4294967296;
  }

  function seeded(seed) {
    let value = Math.floor(seed * 2147483647) || 1;
    return () => {
      value = (value * 16807) % 2147483647;
      return value / 2147483647;
    };
  }

  function mapX(x) {
    return MAP_PAD + (x - worldBounds.minX) /
      (worldBounds.maxX - worldBounds.minX) * MAP_INNER;
  }

  function mapY(z) {
    return MAP_PAD + (z - worldBounds.minZ) /
      (worldBounds.maxZ - worldBounds.minZ) * MAP_INNER;
  }

  function makeParchment() {
    if (parchmentCanvas) return parchmentCanvas;
    const canvas = document.createElement('canvas');
    canvas.width = canvas.height = MAP_SIZE;
    const g = canvas.getContext('2d');

    const base = g.createRadialGradient(
      MAP_SIZE * .46, MAP_SIZE * .38, MAP_SIZE * .05,
      MAP_SIZE * .5, MAP_SIZE * .5, MAP_SIZE * .78
    );
    base.addColorStop(0, '#f3e3bd');
    base.addColorStop(.55, '#e8d3a7');
    base.addColorStop(.85, '#d8bd8b');
    base.addColorStop(1, '#b8935f');
    g.fillStyle = base;
    g.fillRect(0, 0, MAP_SIZE, MAP_SIZE);

    const rnd = seeded(.42);
    for (let i = 0; i < 5200; i++) {
      const x = rnd() * MAP_SIZE;
      const y = rnd() * MAP_SIZE;
      const r = rnd() * 1.7 + .3;
      const dark = rnd() > .45;
      g.fillStyle = dark ? `rgba(94,66,32,${.02 + rnd() * .07})`
        : `rgba(255,246,218,${.02 + rnd() * .08})`;
      g.beginPath();
      g.arc(x, y, r, 0, Math.PI * 2);
      g.fill();
    }

    for (let i = 0; i < 220; i++) {
      const x = rnd() * MAP_SIZE;
      const y = rnd() * MAP_SIZE;
      g.strokeStyle = `rgba(120,88,48,${.02 + rnd() * .04})`;
      g.lineWidth = .5 + rnd();
      g.beginPath();
      g.moveTo(x, y);
      g.quadraticCurveTo(
        x + (rnd() - .5) * 80, y + (rnd() - .5) * 30,
        x + (rnd() - .5) * 160, y + (rnd() - .5) * 40
      );
      g.stroke();
    }

    // Burned, uneven border so the sheet reads as an old chart.
    g.strokeStyle = 'rgba(82,52,24,0.55)';
    g.lineWidth = 10;
    g.strokeRect(14, 14, MAP_SIZE - 28, MAP_SIZE - 28);
    g.strokeStyle = 'rgba(255,244,214,0.35)';
    g.lineWidth = 2;
    g.strokeRect(26, 26, MAP_SIZE - 52, MAP_SIZE - 52);

    parchmentCanvas = canvas;
    return canvas;
  }

  function makeFogPattern(g) {
    if (fogPattern) return fogPattern;
    const canvas = document.createElement('canvas');
    canvas.width = canvas.height = 12;
    const p = canvas.getContext('2d');
    p.fillStyle = 'rgba(74,50,24,0.30)';
    p.fillRect(0, 0, 12, 12);
    p.strokeStyle = 'rgba(50,32,14,0.28)';
    p.lineWidth = 1;
    p.beginPath();
    p.moveTo(-2, 10); p.lineTo(10, -2);
    p.moveTo(4, 16); p.lineTo(16, 4);
    p.stroke();
    fogPattern = g.createPattern(canvas, 'repeat');
    return fogPattern;
  }

  function regionBlob(g, region) {
    const cx = mapX(region.center.x);
    const cy = mapY(region.center.z);
    const radius = region.radius /
      (worldBounds.maxX - worldBounds.minX) * MAP_INNER;
    const seed = hashString(region.id) * 20;
    const points = 54;
    g.beginPath();
    for (let i = 0; i <= points; i++) {
      const angle = i / points * Math.PI * 2;
      const wobble = 1 +
        Math.sin(angle * 3 + seed) * .10 +
        Math.sin(angle * 7 + seed * 1.7) * .05 +
        Math.sin(angle * 13 + seed * .6) * .025;
      const x = cx + Math.cos(angle) * radius * wobble;
      const y = cy + Math.sin(angle) * radius * wobble;
      if (i === 0) g.moveTo(x, y);
      else g.lineTo(x, y);
    }
    g.closePath();
    return { cx, cy, radius };
  }

  function drawTree(g, x, y, size) {
    g.strokeStyle = '#5a4326';
    g.lineWidth = Math.max(.8, size * .16);
    g.beginPath();
    g.moveTo(x, y);
    g.lineTo(x, y - size * .55);
    g.stroke();
    g.fillStyle = '#5c6b3c';
    g.beginPath();
    g.moveTo(x, y - size);
    g.lineTo(x - size * .42, y - size * .5);
    g.lineTo(x + size * .42, y - size * .5);
    g.closePath();
    g.fill();
  }

  function drawMountain(g, x, y, size) {
    g.strokeStyle = '#5a4326';
    g.lineWidth = Math.max(.9, size * .14);
    g.beginPath();
    g.moveTo(x - size * .8, y);
    g.lineTo(x, y - size);
    g.lineTo(x + size * .8, y);
    g.stroke();
    g.strokeStyle = 'rgba(90,67,38,.55)';
    g.beginPath();
    g.moveTo(x - size * .18, y - size * .7);
    g.lineTo(x + size * .22, y - size * .25);
    g.stroke();
  }

  function drawWave(g, x, y, size) {
    g.strokeStyle = 'rgba(56,92,108,.65)';
    g.lineWidth = Math.max(.8, size * .14);
    g.beginPath();
    g.moveTo(x - size, y);
    g.quadraticCurveTo(x - size * .5, y - size * .5, x, y);
    g.quadraticCurveTo(x + size * .5, y + size * .5, x + size, y);
    g.stroke();
  }

  function drawTown(g, x, y, size, big) {
    g.fillStyle = big ? '#7a4a22' : '#6b4526';
    g.strokeStyle = '#4a2f17';
    g.lineWidth = 1.3;
    g.beginPath();
    g.rect(x - size * .55, y - size * .5, size * 1.1, size * .9);
    g.fill();
    g.stroke();
    g.beginPath();
    g.moveTo(x - size * .75, y - size * .5);
    g.lineTo(x, y - size * 1.1);
    g.lineTo(x + size * .75, y - size * .5);
    g.closePath();
    g.fillStyle = '#8a5a2c';
    g.fill();
    g.stroke();
    if (big) {
      g.beginPath();
      g.moveTo(x + size * .25, y - size * .95);
      g.lineTo(x + size * .25, y - size * 1.7);
      g.strokeStyle = '#4a2f17';
      g.stroke();
      g.beginPath();
      g.moveTo(x + size * .25, y - size * 1.7);
      g.lineTo(x + size * .85, y - size * 1.5);
      g.lineTo(x + size * .25, y - size * 1.3);
      g.closePath();
      g.fillStyle = '#a3121c';
      g.fill();
    }
  }

  function drawCave(g, x, y, size) {
    g.fillStyle = '#4d3a26';
    g.beginPath();
    g.arc(x, y, size * .7, Math.PI, Math.PI * 2);
    g.closePath();
    g.fill();
    g.fillStyle = '#e8d3a7';
    g.beginPath();
    g.arc(x, y, size * .34, Math.PI, Math.PI * 2);
    g.closePath();
    g.fill();
  }

  function drawRuin(g, x, y, size) {
    g.strokeStyle = '#5d4a33';
    g.lineWidth = size * .22;
    g.beginPath();
    g.moveTo(x - size * .6, y);
    g.lineTo(x - size * .6, y - size);
    g.moveTo(x, y);
    g.lineTo(x, y - size * .7);
    g.moveTo(x + size * .6, y);
    g.lineTo(x + size * .6, y - size * .9);
    g.stroke();
    g.beginPath();
    g.moveTo(x - size * .8, y);
    g.lineTo(x + size * .8, y);
    g.stroke();
  }

  function drawSkull(g, x, y, size) {
    g.fillStyle = 'rgba(150,22,32,.92)';
    g.beginPath();
    g.arc(x, y - size * .1, size * .62, 0, Math.PI * 2);
    g.fill();
    g.fillRect(x - size * .34, y + size * .34, size * .68, size * .38);
    g.fillStyle = '#f3e3bd';
    g.beginPath();
    g.arc(x - size * .24, y - size * .16, size * .15, 0, Math.PI * 2);
    g.arc(x + size * .24, y - size * .16, size * .15, 0, Math.PI * 2);
    g.fill();
  }

  function drawStar(g, x, y, size, color) {
    g.fillStyle = color;
    g.beginPath();
    for (let i = 0; i < 10; i++) {
      const r = i % 2 ? size * .45 : size;
      const a = -Math.PI / 2 + i * Math.PI / 5;
      const px = x + Math.cos(a) * r;
      const py = y + Math.sin(a) * r;
      i ? g.lineTo(px, py) : g.moveTo(px, py);
    }
    g.closePath();
    g.fill();
  }

  function drawBanner(g, x, y, size, unlocked) {
    g.strokeStyle = unlocked ? '#5b3c18' : 'rgba(80,60,36,.55)';
    g.lineWidth = 2;
    g.beginPath();
    g.moveTo(x, y + size * .9);
    g.lineTo(x, y - size);
    g.stroke();
    g.fillStyle = unlocked ? '#d9a63c' : 'rgba(120,96,64,.45)';
    g.beginPath();
    g.moveTo(x, y - size);
    g.lineTo(x + size * .95, y - size * .72);
    g.lineTo(x, y - size * .4);
    g.closePath();
    g.fill();
    if (unlocked) {
      g.strokeStyle = 'rgba(74,47,23,.8)';
      g.lineWidth = 1;
      g.stroke();
    }
  }

  function drawChest(g, x, y, size) {
    g.fillStyle = '#8a5a24';
    g.fillRect(x - size * .5, y - size * .25, size, size * .55);
    g.fillStyle = '#c89b45';
    g.fillRect(x - size * .5, y - size * .42, size, size * .2);
    g.fillStyle = '#5a3a18';
    g.fillRect(x - size * .08, y - size * .4, size * .16, size * .7);
  }

  function mainQuestMarker() {
    if (state.questStage === 0) return { x: 0, z: -48, label: 'หอคอยร้าง' };
    if (state.questStage === 1) return { x: 0, z: -86, label: 'ซากโบราณ' };
    return null;
  }

  function drawQuestMarkers(g) {
    const main = mainQuestMarker();
    if (main && discoveredRegion('wasteland')) {
      const x = mapX(main.x);
      const y = mapY(main.z);
      g.save();
      g.shadowColor = 'rgba(246,206,110,.9)';
      g.shadowBlur = 12;
      drawStar(g, x, y, 13, '#e8a92a');
      g.restore();
      if (mapView.scale >= 1.45) {
        g.font = '700 15px Georgia, "Noto Serif Thai", serif';
        g.fillStyle = '#4a2f17';
        g.textAlign = 'center';
        g.fillText(main.label, x, y - 20);
      }
    }

    for (const npc of npcs) {
      const data = NPC_DATA.find((entry) => entry.id === npc.userData.npcId);
      if (!data || !npcQuestId(data)) continue;
      const questId = npcQuestId(data);
      const progress = state.quests[questId];
      const active = progress && progress.status === 'active';
      const available = !progress || progress.status === 'locked';
      if (!active && !available) continue;
      if (!discoveredRegion(regionOf(npc.position.x, npc.position.z))) continue;
      const x = mapX(npc.position.x);
      const y = mapY(npc.position.z);
      drawStar(g, x, y - 16, 7, active ? '#c98a1e' : '#e8c14a');
    }
  }

  function regionOf(x, z) {
    for (const region of regions) {
      if (Math.hypot(x - region.center.x, z - region.center.z) <= region.radius) {
        return region.id;
      }
    }
    return null;
  }

  function drawWorldMap(yaw) {
    const canvas = $('#world-map');
    if (!canvas) return;
    ensureFog();
    bindMapControls(canvas);

    mapView.lastYaw = Number.isFinite(yaw) ? yaw : mapView.lastYaw;
    const g = canvas.getContext('2d');
    const size = canvas.width;

    g.setTransform(1, 0, 0, 1, 0, 0);
    g.clearRect(0, 0, size, size);
    g.drawImage(makeParchment(), 0, 0);

    g.save();
    g.translate(mapView.tx, mapView.ty);
    g.scale(mapView.scale, mapView.scale);

    // Below this zoom the small labels would collide; the icons still show.
    const showDetail = mapView.scale >= 1.45;
    const showTownNames = mapView.scale >= 1.85;
    mapView.labelBoxes = [];

    // Cartographic labels are only placed when they do not collide with a
    // label already on the sheet, so a town cluster stays readable.
    const mapLabel = (text, x, y, font, color) => {
      g.font = font;
      const w = g.measureText(text).width;
      const size = parseFloat((font.match(/([\d.]+)px/) || [0, 14])[1]);
      const h = size * 1.1;
      const box = { x: x - w / 2 - 3, y: y - h, w: w + 6, h: h + 4 };
      for (const other of mapView.labelBoxes) {
        if (!(box.x + box.w < other.x || box.x > other.x + other.w ||
              box.y + box.h < other.y || box.y > other.y + other.h)) return false;
      }
      mapView.labelBoxes.push(box);
      g.fillStyle = color;
      g.textAlign = 'center';
      g.fillText(text, x, y);
      return true;
    };

    // Region shapes and terrain glyphs.
    for (const region of regions) {
      const discovered = discoveredRegion(region.id);
      const { cx, cy, radius } = regionBlob(g, region);
      g.globalAlpha = discovered ? .30 : .16;
      g.fillStyle = region.color;
      g.fill();
      g.globalAlpha = 1;
      g.strokeStyle = discovered ? 'rgba(88,60,30,.65)' : 'rgba(88,60,30,.3)';
      g.lineWidth = discovered ? 2 : 1.2;
      g.setLineDash(discovered ? [] : [5, 6]);
      g.stroke();
      g.setLineDash([]);

      const rnd = seeded(hashString(region.id + 'glyph'));
      if (region.id === 'deadwood' || region.id === 'ravenhold') {
        for (let i = 0; i < 16; i++) {
          const a = rnd() * Math.PI * 2;
          const d = Math.sqrt(rnd()) * radius * .82;
          drawTree(g, cx + Math.cos(a) * d, cy + Math.sin(a) * d, 7 + rnd() * 4);
        }
      }
      if (region.id === 'emberpeak') {
        for (let i = 0; i < 7; i++) {
          const a = rnd() * Math.PI * 2;
          const d = Math.sqrt(rnd()) * radius * .7;
          drawMountain(g, cx + Math.cos(a) * d, cy + Math.sin(a) * d, 12 + rnd() * 8);
        }
      }
      if (region.id === 'mirefall') {
        for (let i = 0; i < 9; i++) {
          const a = rnd() * Math.PI * 2;
          const d = Math.sqrt(rnd()) * radius * .75;
          drawWave(g, cx + Math.cos(a) * d, cy + Math.sin(a) * d, 6 + rnd() * 4);
        }
      }

      if (mapView.scale < 1.8) {
        mapLabel(
          discovered ? region.name : '· · ·',
          cx, cy - radius * .12,
          `700 ${discovered ? (mapView.scale < 1.45 ? 20 : 24) : 18}px Georgia, "Noto Serif Thai", serif`,
          discovered ? 'rgba(58,39,23,.92)' : 'rgba(90,70,44,.55)'
        );
      }
    }

    // Roads
    g.strokeStyle = 'rgba(122,86,46,.55)';
    g.lineWidth = 1.6;
    g.setLineDash([7, 5]);
    for (const road of MAP_ROADS) {
      g.beginPath();
      road.forEach(([x, z], i) => {
        i ? g.lineTo(mapX(x), mapY(z)) : g.moveTo(mapX(x), mapY(z));
      });
      g.stroke();
    }
    g.setLineDash([]);

    // Landmarks
    for (const landmark of staticLandmarks) {
      if (!discoveredRegion(landmark.region)) continue;
      const x = mapX(landmark.position.x);
      const y = mapY(landmark.position.z);
      const name = landmark.name || '';
      if (/ปราสาท|วาร์นฮัล|ราเวนโฮลด์|เมือง|หมู่บ้าน/.test(name)) {
        drawTown(g, x, y, landmark.size ? 6.5 : 5, /วาร์นฮัล|ปราสาท/.test(name));
      } else if (/ถ้ำ/.test(name)) {
        drawCave(g, x, y, 9);
      } else if (/วงหิน|อาราม/.test(name)) {
        drawRuin(g, x, y, 10);
      } else if (/ภูเขา|ปล่อง/.test(name)) {
        drawMountain(g, x, y, 16);
      } else if (/ทะเลสาบ/.test(name)) {
        drawWave(g, x, y, 9);
      } else {
        g.fillStyle = '#6b4526';
        g.beginPath();
        g.arc(x, y, 3.4, 0, Math.PI * 2);
        g.fill();
      }
      if (showTownNames) {
        mapLabel(name, x, y + 20, '600 13px Georgia, "Noto Serif Thai", serif',
          'rgba(48,32,18,.9)');
      }
    }

    // Waypoints
    for (const wp of WAYPOINTS) {
      const unlocked = state.waypoints.includes(wp.id);
      if (!unlocked && !discoveredRegion(wp.region)) continue;
      const x = mapX(wp.x);
      const y = mapY(wp.z);
      drawBanner(g, x, y, 10, unlocked);
      if (mapView.selected === wp.id) {
        g.strokeStyle = '#c8891c';
        g.lineWidth = 2.5;
        g.beginPath();
        g.arc(x, y - 2, 19, 0, Math.PI * 2);
        g.stroke();
      }
      if (showDetail) {
        mapLabel(unlocked ? wp.name : '???', x, y + 30,
          `600 ${unlocked ? 13 : 12}px Georgia, "Noto Serif Thai", serif`,
          unlocked ? '#3f2a14' : 'rgba(70,52,30,.6)');
      }
    }

    // Secrets and NPCs
    for (const secret of secrets) {
      const id = secret.userData.secretData.id;
      if (!state.discoveredSecrets.includes(id)) continue;
      if (!discoveredRegion(secret.userData.secretData.region)) continue;
      drawChest(g, mapX(secret.position.x), mapY(secret.position.z), 11);
    }

    for (const npc of npcs) {
      const region = regionOf(npc.position.x, npc.position.z);
      if (!discoveredRegion(region)) continue;
      const x = mapX(npc.position.x);
      const y = mapY(npc.position.z);
      g.fillStyle = '#2f6d80';
      g.beginPath();
      g.arc(x, y, 4.6, 0, Math.PI * 2);
      g.fill();
      g.strokeStyle = '#f3e3bd';
      g.lineWidth = 1.4;
      g.stroke();
    }

    // Enemies / bosses
    for (const enemy of enemies) {
      if (!enemy.userData.alive) continue;
      const region = regionOf(enemy.position.x, enemy.position.z);
      if (!discoveredRegion(region)) continue;
      const boss = enemy.userData.type === 'boss' || enemy.userData.type === 'dungeonBoss';
      const x = mapX(enemy.position.x);
      const y = mapY(enemy.position.z);
      if (boss) {
        drawSkull(g, x, y, 16);
      } else {
        g.fillStyle = 'rgba(156,34,34,.55)';
        g.beginPath();
        g.arc(x, y, 2.8, 0, Math.PI * 2);
        g.fill();
      }
    }

    drawQuestMarkers(g);

    // Fog of war on top of everything that lives on the land.
    g.save();
    g.globalAlpha = .85;
    g.fillStyle = makeFogPattern(g);
    for (let gz = 0; gz < FOG_ROWS; gz++) {
      for (let gx = 0; gx < FOG_COLS; gx++) {
        const index = gz * FOG_COLS + gx;
        if (fogSet.has(index)) continue;
        const x = worldBounds.minX + gx * FOG_CELL;
        const z = worldBounds.minZ + gz * FOG_CELL;
        // Snap each cell to whole pixels so neighbouring cells share an
        // edge: fractional rects would overlap and paint a dark grid.
        const x0 = Math.round(mapX(x));
        const y0 = Math.round(mapY(z));
        const x1 = Math.round(mapX(x + FOG_CELL));
        const y1 = Math.round(mapY(z + FOG_CELL));
        g.fillRect(x0, y0, x1 - x0, y1 - y0);
      }
    }
    g.restore();

    // Player marker sits above the fog.
    const px = mapX(player.position.x);
    const py = mapY(player.position.z);
    g.save();
    g.translate(px, py);
    g.rotate(mapView.lastYaw + Math.PI);
    g.fillStyle = '#8a1f1f';
    g.strokeStyle = '#f7e7bf';
    g.lineWidth = 2;
    g.beginPath();
    g.moveTo(0, -13);
    g.lineTo(-9, 9);
    g.lineTo(0, 4);
    g.lineTo(9, 9);
    g.closePath();
    g.fill();
    g.stroke();
    g.restore();
    g.strokeStyle = 'rgba(138,31,31,.5)';
    g.lineWidth = 1.5;
    g.beginPath();
    g.arc(px, py, 17, 0, Math.PI * 2);
    g.stroke();

    // Compass rose
    const cxRose = MAP_SIZE - 96;
    const cyRose = 96;
    g.save();
    g.translate(cxRose, cyRose);
    g.strokeStyle = 'rgba(74,47,23,.6)';
    g.lineWidth = 1.6;
    g.beginPath();
    g.arc(0, 0, 34, 0, Math.PI * 2);
    g.stroke();
    g.beginPath();
    g.arc(0, 0, 24, 0, Math.PI * 2);
    g.stroke();
    g.fillStyle = 'rgba(86,54,26,.85)';
    for (let i = 0; i < 4; i++) {
      g.save();
      g.rotate(i * Math.PI / 2);
      g.beginPath();
      g.moveTo(0, -58);
      g.lineTo(5, -34);
      g.lineTo(-5, -34);
      g.closePath();
      g.fill();
      g.restore();
    }
    g.fillStyle = '#4a2f17';
    g.font = '700 15px Georgia, serif';
    g.textAlign = 'center';
    g.fillText('N', 0, -64);
    g.restore();

    g.restore();

    // Frame, cartouche and live readouts.
    g.strokeStyle = 'rgba(58,38,18,.75)';
    g.lineWidth = 3;
    g.strokeRect(10, 10, size - 20, size - 20);

    const coords = $('#map-coords');
    if (coords) {
      coords.textContent =
        `ตำแหน่ง: X ${Math.round(player.position.x)} · Z ${Math.round(player.position.z)}` +
        ` · สำรวจแล้ว ${exploredPercent()}% · จุดเดินทาง ${state.waypoints.length}/${WAYPOINTS.length}`;
    }

    const selected = WAYPOINTS.find((wp) => wp.id === mapView.selected);
    const wpBox = $('#map-wp');
    const wpName = $('#map-wp-name');
    if (wpBox && wpName) {
      wpBox.classList.toggle('hidden', !selected);
      if (selected) wpName.textContent = `⚑ ${selected.name}`;
    }
  }

  function clampMapPan(canvas) {
    const size = canvas ? canvas.width : MAP_SIZE;
    if (mapView.scale <= 1.01) {
      mapView.scale = 1;
      mapView.tx = 0;
      mapView.ty = 0;
      return;
    }
    const min = size - size * mapView.scale;
    mapView.tx = THREE.MathUtils.clamp(mapView.tx, min, 0);
    mapView.ty = THREE.MathUtils.clamp(mapView.ty, min, 0);
  }

  function zoomMap(factor, clientX, clientY) {
    const canvas = $('#world-map');
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    const scaleFactor = rect.width ? canvas.width / rect.width : 1;
    let sx = canvas.width / 2;
    let sy = canvas.height / 2;
    if (Number.isFinite(clientX)) {
      sx = (clientX - rect.left) * scaleFactor;
      sy = (clientY - rect.top) * scaleFactor;
    }
    const next = THREE.MathUtils.clamp(mapView.scale * factor, 1, MAP_MAX_SCALE);
    if (next === mapView.scale) return;
    const ratio = next / mapView.scale;
    mapView.tx = sx - (sx - mapView.tx) * ratio;
    mapView.ty = sy - (sy - mapView.ty) * ratio;
    mapView.scale = next;
    clampMapPan(canvas);
    drawWorldMap(mapView.lastYaw);
  }

  function selectWaypointAt(clientX, clientY) {
    const canvas = $('#world-map');
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    const scaleFactor = rect.width ? canvas.width / rect.width : 1;
    const bx = ((clientX - rect.left) * scaleFactor - mapView.tx) / mapView.scale;
    const by = ((clientY - rect.top) * scaleFactor - mapView.ty) / mapView.scale;

    let hit = null;
    for (const wp of WAYPOINTS) {
      if (!state.waypoints.includes(wp.id)) continue;
      const dx = bx - mapX(wp.x);
      const dy = by - (mapY(wp.z) - 6);
      if (Math.hypot(dx, dy) < 26 / mapView.scale + 8) {
        hit = wp;
        break;
      }
    }
    mapView.selected = hit ? hit.id : null;
    const travel = $('#map-wp-travel');
    if (travel) travel.disabled = !hit;
    drawWorldMap(mapView.lastYaw);
  }

  function closeMapPanel() {
    const panel = $('#map-panel');
    if (panel) panel.classList.add('hidden');
    const button = $('#map-open');
    if (button) button.setAttribute('aria-expanded', 'false');
  }

  function travelToSelectedWaypoint() {
    const wp = WAYPOINTS.find((entry) => entry.id === mapView.selected);
    if (!wp || !state.waypoints.includes(wp.id)) return;
    if (typeof ctx.teleportTo !== 'function') return;
    ctx.teleportTo(wp.x, wp.z);
    toast(`เดินทางถึง: ${wp.name}`);
    closeMapPanel();
  }

  function bindMapControls(canvas) {
    if (mapView.bound) return;
    mapView.bound = true;

    const zoomIn = $('#map-zoom-in');
    const zoomOut = $('#map-zoom-out');
    const recenter = $('#map-recenter');
    const travel = $('#map-wp-travel');
    if (zoomIn) zoomIn.addEventListener('click', () => zoomMap(1.45));
    if (zoomOut) zoomOut.addEventListener('click', () => zoomMap(1 / 1.45));
    if (recenter) {
      recenter.addEventListener('click', () => {
        mapView.scale = 2.4;
        mapView.tx = MAP_SIZE / 2 - mapX(player.position.x) * mapView.scale;
        mapView.ty = MAP_SIZE / 2 - mapY(player.position.z) * mapView.scale;
        clampMapPan(canvas);
        drawWorldMap(mapView.lastYaw);
      });
    }
    if (travel) travel.addEventListener('click', travelToSelectedWaypoint);

    canvas.addEventListener('contextmenu', (e) => e.preventDefault());

    canvas.addEventListener('wheel', (event) => {
      event.preventDefault();
      zoomMap(event.deltaY < 0 ? 1.18 : 1 / 1.18, event.clientX, event.clientY);
    }, { passive: false });

    canvas.addEventListener('pointerdown', (event) => {
      canvas.setPointerCapture(event.pointerId);
      mapView.pointers.set(event.pointerId, { x: event.clientX, y: event.clientY });
      if (mapView.pointers.size === 1) {
        mapView.dragging = true;
        mapView.moved = 0;
        mapView.lastX = event.clientX;
        mapView.lastY = event.clientY;
        canvas.style.cursor = 'grabbing';
      } else if (mapView.pointers.size === 2) {
        const [a, b] = [...mapView.pointers.values()];
        mapView.pinchDist = Math.hypot(a.x - b.x, a.y - b.y);
      }
    });

    canvas.addEventListener('pointermove', (event) => {
      if (!mapView.pointers.has(event.pointerId)) return;
      mapView.pointers.set(event.pointerId, { x: event.clientX, y: event.clientY });

      if (mapView.pointers.size === 2) {
        const [a, b] = [...mapView.pointers.values()];
        const dist = Math.hypot(a.x - b.x, a.y - b.y);
        if (mapView.pinchDist > 0) {
          zoomMap(dist / mapView.pinchDist, (a.x + b.x) / 2, (a.y + b.y) / 2);
        }
        mapView.pinchDist = dist;
        return;
      }

      if (!mapView.dragging) return;
      const rect = canvas.getBoundingClientRect();
      const scaleFactor = rect.width ? canvas.width / rect.width : 1;
      const dx = (event.clientX - mapView.lastX) * scaleFactor;
      const dy = (event.clientY - mapView.lastY) * scaleFactor;
      mapView.moved += Math.abs(dx) + Math.abs(dy);
      mapView.lastX = event.clientX;
      mapView.lastY = event.clientY;

      if (mapView.scale > 1.01) {
        mapView.tx += dx * mapView.scale;
        mapView.ty += dy * mapView.scale;
        clampMapPan(canvas);
        drawWorldMap(mapView.lastYaw);
      }
    });

    const endPointer = (event) => {
      mapView.pointers.delete(event.pointerId);
      if (mapView.pointers.size < 2) mapView.pinchDist = 0;
      if (mapView.pointers.size === 0) {
        const wasDrag = mapView.moved > 6;
        mapView.dragging = false;
        canvas.style.cursor = 'grab';
        if (!wasDrag) selectWaypointAt(event.clientX, event.clientY);
      }
    };
    canvas.addEventListener('pointerup', endPointer);
    canvas.addEventListener('pointercancel', endPointer);
  }

  function updateNpcSchedules(dt, yaw) {
    const time = Number(state.dayTime) || 0;

    for (const npc of npcs) {
      const data = NPC_DATA.find((entry) => entry.id === npc.userData.npcId);
      if (!data || !Array.isArray(data.schedule)) continue;

      const stop = data.schedule.find((entry) =>
        time >= entry.from && time < entry.to
      ) || data.schedule[0];

      const goal = npc.userData.target;
      goal.set(stop.position[0], surfaceY(stop.position[0], stop.position[2], stop.position[1]), stop.position[2]);

      const dx = goal.x - npc.position.x;
      const dz = goal.z - npc.position.z;
      const distance = Math.hypot(dx, dz);

      npc.userData.moving = distance > .35;

      if (distance > .35) {
        const step = Math.min(distance, dt * .85);
        npc.position.x += dx / distance * step;
        npc.position.z += dz / distance * step;
        npc.rotation.y = Math.atan2(dx, dz);
      } else {
        const nearX = player.position.x - npc.position.x;
        const nearZ = player.position.z - npc.position.z;
        if (Math.hypot(nearX, nearZ) < 5) {
          npc.rotation.y = Math.atan2(nearX, nearZ);
        }
      }

      // Keep idle NPCs glued to the streamed terrain; otherwise a villager
      // placed before its chunk loads would float at y=0 and never be
      // reachable by the 3D interaction radius.
      npc.position.y = surfaceY(npc.position.x, npc.position.z, goal.y);

      if (npc.position.distanceTo(player.position) < 55) {
        updateCharacterAnimation(npc.userData, dt, yaw, npc.rotation.y);
      }
    }
  }

  function update(dt, yaw) {
    updateNpcSchedules(dt, yaw);
    updateSecrets(dt);

    const maxMana = state.maxMana || 100;
    const manaRegen = state.classId === 'mage' ? 4.5 : 3;
    state.mana = Math.min(maxMana, state.mana + manaRegen * dt);

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
    for (const chest of bossChests) {
      if (chest.userData.opened) continue;
      chest.userData.glow.material.opacity = .55 + Math.sin(time + chest.userData.phase) * .25;
      chest.rotation.y += dt * .18;
    }
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
      const nearbyChest = bossChests.find((chest) =>
        !chest.userData.opened && player.position.distanceTo(chest.position) < 3.2
      );
      if (nearbyChest) text = 'กด E / ใช้ เพื่อเปิดหีบรางวัลบอส';

      for (const npc of text ? [] : npcs) {
        if (Math.hypot(
          player.position.x - npc.position.x,
          player.position.z - npc.position.z
        ) < 4) {
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

      hint.textContent = text;
    }

    updateMinimap(yaw);

    fogTimer += dt;
    if (fogTimer > 0.4) {
      fogTimer = 0;
      markExplored();
      unlockNearbyWaypoints();
    }

    const mapPanel = $('#map-panel');
    if (mapPanel && !mapPanel.classList.contains('hidden')) {
      mapTimer += dt;
      if (mapTimer > 0.25) {
        mapTimer = 0;
        drawWorldMap(yaw);
      }
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
      })),
      bossChests: bossChests.filter((chest) => !chest.userData.opened).map((chest) => ({
        chestId: chest.userData.chestId,
        x: chest.position.x,
        z: chest.position.z,
        reward: chest.userData.reward
      })),
      // Preserve villagers' current locations so a save/load does not
      // teleport every NPC back to their original spawn point.
      npcs: npcs.map((npc) => ({
        id: npc.userData.npcId,
        x: npc.position.x,
        z: npc.position.z,
        rotation: npc.rotation.y
      })),
      secrets: state.discoveredSecrets.slice()
    };
  }

  function deserializeWorld(data) {
    if (!data) return;

    if (Array.isArray(data.secrets)) {
      state.discoveredSecrets = data.secrets.filter(id => typeof id === 'string');
    }
    for (const secret of secrets) {
      secret.visible = !state.discoveredSecrets.includes(secret.userData.secretId);
    }

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

    if (Array.isArray(data.bossChests)) {
      for (const chest of bossChests) {
        scene.remove(chest);
        chest.traverse((part) => {
          if (part.geometry) part.geometry.dispose();
          if (part.material) {
            if (Array.isArray(part.material)) part.material.forEach((material) => material.dispose());
            else part.material.dispose();
          }
        });
      }
      bossChests.length = 0;
      for (const saved of data.bossChests) {
        if (!saved || typeof saved.chestId !== 'string' || !saved.reward ||
            !Number.isFinite(saved.x) || !Number.isFinite(saved.z)) continue;
        createBossChest(saved.chestId, { x: saved.x, z: saved.z }, saved.reward);
      }
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

    if (Array.isArray(data.npcs)) {
      const savedById = new Map(
        data.npcs.filter((saved) => saved && typeof saved.id === 'string')
          .map((saved) => [saved.id, saved])
      );
      for (const npc of npcs) {
        const saved = savedById.get(npc.userData.npcId);
        if (!saved || !Number.isFinite(saved.x) || !Number.isFinite(saved.z)) continue;
        const x = THREE.MathUtils.clamp(saved.x, WORLD_BOUNDS.minX, WORLD_BOUNDS.maxX);
        const z = THREE.MathUtils.clamp(saved.z, WORLD_BOUNDS.minZ, WORLD_BOUNDS.maxZ);
        const groundY = surfaceY(x, z, npc.position.y);
        npc.position.set(x, groundY, z);
        if (Number.isFinite(saved.rotation)) npc.rotation.y = saved.rotation;
        npc.userData.target.set(x, groundY, z);
        npc.userData.moving = false;
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

    const skillCaps = { might: 5, vitality: 3, arcana: 3 };
    const skills = {};
    for (const [id, cap] of Object.entries(skillCaps)) {
      const rank = state.skills && state.skills[id];
      skills[id] = THREE.MathUtils.clamp(
        Math.round(Number(rank) || 0), 0, cap
      );
    }
    state.skills = skills;
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

  for (const data of SECRETS) secrets.push(makeSecretMesh(data));

  for (const data of NPC_DATA) npcs.push(makeNpcMesh(data));

  const nextButton = $('#dialogue-next');
  if (nextButton) {
    nextButton.addEventListener('click', () => {
      if (!dialogue) return;

      const npc = dialogue.npc;
      if (dialogue.mode === 'topics' && questAvailable(npc)) {
        const questId = npcQuestId(npc);
        if (acceptQuest(questId)) {
          dialogue.mode = 'reply';
          dialogue.text = questAcceptedLine(questId);
          renderDialogue();
          return;
        }
      }
      closeDialogue();
      if (npc.shop) openShop();
    });
  }

  const askButton = $('#dialogue-ask-btn');
  const askInput = $('#dialogue-ask');
  if (askButton && askInput) {
    const submit = () => {
      if (!dialogue) return;
      askNpc(askInput.value);
      askInput.value = '';
    };
    askButton.addEventListener('click', submit);
    askInput.addEventListener('keydown', (event) => {
      if (event.key === 'Enter') {
        event.preventDefault();
        submit();
      }
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

  const shopCloseButton = $('#shop-close');
  if (shopCloseButton) shopCloseButton.addEventListener('click', closeShop);

  const bountyRerollButton = $('#bounty-reroll');
  if (bountyRerollButton) {
    bountyRerollButton.addEventListener('click', rerollBounties);
  }

  refreshInventoryUI();
  renderShop();
  refreshQuestUI();

  return {
    owns,
    getCount,
    addItem,
    createBossChest,
    interact,
    getNearbySecretName,
    castSpell,
    onEnemyKilled,
    advanceQuest,
    update,
    serializeWorld,
    deserializeWorld,
    restoreState,
    drawWorldMap,
    refreshInventoryUI,
    refreshQuestUI,
    questGuideTarget,
    gearTier,
    gearUpgradeCost,
    upgradeGear,
    rerollBounties,
    ensureBounties,
    closeDialogue,
    openShop,
    closeShop,
    toggleShop,
    renderShop,
    addReputation,
    repValue,
    repTier,
    exploredPercent,
    resetExploration,
    teleportToWaypoint: travelToSelectedWaypoint
  };
}
