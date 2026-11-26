export const WORLD_BOUNDS = {
  minX: -320,
  maxX: 320,
  minZ: -320,
  maxZ: 320
};

export const REGIONS = [
  {
    id: 'wasteland',
    name: 'ทุ่งรกร้างโบราณ',
    center: { x: 0, z: 0 },
    radius: 96,
    color: '#c9a86a',
    description: 'ซากปราสาท หลุมศพ และแม่น้ำลาวาที่ไหลผ่านใจกลางดินแดน'
  },
  {
    id: 'ravenhold',
    name: 'ราเวนโฮลด์',
    center: { x: -45, z: -45 },
    radius: 72,
    color: '#d8b878',
    description: 'หมู่บ้านค้าขายเก่าแก่ที่มองลงไปยังหุบเขาเถ้าถ่าน'
  },
  {
    id: 'deadwood',
    name: 'ป่าแห้งตาย',
    center: { x: -165, z: -155 },
    radius: 110,
    color: '#7aa6f0',
    description: 'ป่าต้นไม้ตาย วงหินโบราณ และซากอารามที่ถูกลืม'
  },
  {
    id: 'varnhal',
    name: 'นครวาร์นฮัล',
    center: { x: 160, z: 50 },
    radius: 108,
    color: '#e2b45c',
    description: 'เมืองหลวงอันยิ่งใหญ่ มีตลาด ร้านตีเหล็ก และหน้าต่างที่ส่องสว่างในยามค่ำคืน'
  },
  {
    id: 'emberpeak',
    name: 'ภูเขาไฟเอ็มเบอร์พีค',
    center: { x: 160, z: -177 },
    radius: 112,
    color: '#ff7a4d',
    description: 'ยอดเขาแหลมคม ถ้ำถ่านไฟ และทะเลลาวาที่พุ่งขึ้นจากเดือด'
  },
  {
    id: 'mirefall',
    name: 'ทะเลสาบมิเรฟอลล์',
    center: { x: -170, z: 160 },
    radius: 112,
    color: '#7fd4e8',
    description: 'ทะเลสาบต้องสาป หมู่บ้านหนองน้ำ และถ้ำใต้รากหิน'
  }
  {
    id: 'frostwatch',
    name: 'ป้อมฟรอสต์วอตช์',
    center: { x: 245, z: -65 },
    radius: 58,
    color: '#a9d7e8',
    description: 'ป้อมชายแดนบนเนินลมหนาว เฝ้าทางผ่านสู่ดินแดนหิมะ'
  },
  {
    id: 'sunken-cathedral',
    name: 'มหาวิหารจมธาร',
    center: { x: -245, z: 58 },
    radius: 54,
    color: '#b8a7d9',
    description: 'วิหารหินเก่าที่ถูกน้ำท่วมและเฝ้าความลับใต้ซากเมือง'
  },
  {
    id: 'windscar',
    name: 'หุบผาวินด์สการ์',
    center: { x: 245, z: 225 },
    radius: 58,
    color: '#c7b59b',
    description: 'หุบเขาหินสูงที่มีสะพานเชือกและเส้นทางนักเดินทาง'
  },
  {
    id: 'starfall-coast',
    name: 'ชายฝั่งสตาร์ฟอลล์',
    center: { x: -245, z: -235 },
    radius: 58,
    color: '#7fc5d5',
    description: 'ชายฝั่งหมอกและซากเรือที่ถูกแสงดาวนำทาง'
  },
];

export const LANDMARKS = [
  { id: 'castle', name: 'ซากปราสาท', position: { x: 9, z: -8 }, region: 'wasteland', color: '#d8a86a', size: 5 },
  { id: 'graveyard', name: 'สุสานเงียบ', position: { x: -12, z: 11 }, region: 'wasteland', color: '#9d9fb4', size: 3.5 },
  { id: 'bridge', name: 'สะพานข้ามลาวา', position: { x: -5, z: 2 }, region: 'wasteland', color: '#ff8a4d', size: 3 },
  { id: 'ravenhold', name: 'หมู่บ้านราเวนโฮลด์', position: { x: -45, z: -45 }, region: 'ravenhold', color: '#d8b878', size: 5 },
  { id: 'ashford', name: 'เมืองแอชฟอร์ด', position: { x: 45, z: -50 }, region: 'wasteland', color: '#c9a86a', size: 4.5 },
  { id: 'grimmoor', name: 'เมืองกริมมัวร์', position: { x: 55, z: 0 }, region: 'wasteland', color: '#c9a86a', size: 4.5 },
  { id: 'duskvale', name: 'เมืองดัสก์เวล', position: { x: 42, z: 50 }, region: 'wasteland', color: '#c9a86a', size: 4.5 },
  { id: 'blackmere', name: 'เมืองแบล็กเมียร์', position: { x: -48, z: 42 }, region: 'mirefall', color: '#9fb0c8', size: 4.5 },
  { id: 'varnhal', name: 'นครวาร์นฮัล', position: { x: 160, z: 50 }, region: 'varnhal', color: '#e2b45c', size: 7 },
  { id: 'thornwick', name: 'หมู่บ้านธอร์นวิก', position: { x: -150, z: -40 }, region: 'ravenhold', color: '#d8b878', size: 4 },
  { id: 'wolfden', name: 'หมู่บ้านวูล์ฟเดน', position: { x: 50, z: -200 }, region: 'emberpeak', color: '#c9a86a', size: 4 },
  { id: 'mirefall-village', name: 'หมู่บ้านมิเรฟอลล์', position: { x: -50, z: 205 }, region: 'mirefall', color: '#7fd4e8', size: 4 },
  { id: 'stone-circle', name: 'วงหินโบราณ', position: { x: -70, z: -140 }, region: 'deadwood', color: '#c992f0', size: 5 },
  { id: 'abbey', name: 'ซากอาราม', position: { x: -130, z: 120 }, region: 'mirefall', color: '#9d9fb4', size: 4 },
  { id: 'giant-bones', name: 'ซากกระดูกยักษ์', position: { x: 83, z: 158 }, region: 'varnhal', color: '#d9d3c2', size: 4 },
  { id: 'volcano', name: 'ปล่องภูเขาไฟ', position: { x: 159, z: -177 }, region: 'emberpeak', color: '#ff5b3d', size: 7 },
  { id: 'cursed-lake', name: 'ทะเลสาบต้องสาป', position: { x: -170, z: 160 }, region: 'mirefall', color: '#7fd4e8', size: 6 },
  { id: 'dead-forest', name: 'ป่าแห้งตาย', position: { x: -165, z: -155 }, region: 'deadwood', color: '#7aa6f0', size: 6 },
  { id: 'cave-shadow', name: 'ถ้ำเงาลืมเลือน', position: { x: 95, z: -120 }, region: 'emberpeak', color: '#c992f0', size: 4 },
  { id: 'cave-root', name: 'ถ้ำรากหิน', position: { x: -110, z: -190 }, region: 'deadwood', color: '#c992f0', size: 4 },
  { id: 'cave-mire', name: 'ถ้ำใต้ก้นบึง', position: { x: -205, z: 195 }, region: 'mirefall', color: '#c992f0', size: 4 },
  { id: 'cave-ember', name: 'ถ้ำถ่านไฟ', position: { x: 205, z: -205 }, region: 'emberpeak', color: '#ff8a4d', size: 4 },
  { id: 'frostwatch-fort', name: 'ป้อมฟรอสต์วอตช์', position: { x: 245, z: -65 }, region: 'frostwatch', color: '#a9d7e8', size: 5 },
  { id: 'sunken-cathedral', name: 'มหาวิหารจมธาร', position: { x: -245, z: 58 }, region: 'sunken-cathedral', color: '#b8a7d9', size: 5 },
  { id: 'windscar-bridge', name: 'สะพานหุบผาวินด์สการ์', position: { x: 245, z: 225 }, region: 'windscar', color: '#c7b59b', size: 4 },
  { id: 'starfall-shipwreck', name: 'ซากเรือชายฝั่งสตาร์ฟอลล์', position: { x: -245, z: -235 }, region: 'starfall-coast', color: '#7fc5d5', size: 4 }
];

export const SECRETS = [
  { id: 's-castle', name: 'หีบใต้ฐานปราสาท', kind: 'cache', position: { x: 4, z: -18 }, region: 'wasteland', loot: { crystals: 2, gold: 45, xp: 30, items: { bone: 2 } } },
  { id: 's-grave', name: 'พอกศพถูกลืม', kind: 'cache', position: { x: -18, z: 16 }, region: 'wasteland', loot: { gold: 60, xp: 35, items: { darkShard: 1 } } },
  { id: 's-bridge', name: 'ของขวัญคนข้ามสะพาน', kind: 'cache', position: { x: -9, z: -7 }, region: 'wasteland', loot: { crystals: 1, potions: 1, xp: 20 } },
  { id: 's-raven', name: 'คลังลับราเวนโฮลด์', kind: 'cache', position: { x: -58, z: -56 }, region: 'ravenhold', loot: { crystals: 3, gold: 90, xp: 60, items: { ore: 2 } } },
  { id: 's-thorn', name: 'ซองจดหมายธอร์นวิก', kind: 'cache', position: { x: -162, z: -50 }, region: 'ravenhold', loot: { gold: 75, xp: 45, items: { herb: 3 } } },
  { id: 's-ashen', name: 'เตาลับแอชฟอร์ด', kind: 'cache', position: { x: 52, z: -60 }, region: 'ravenhold', loot: { crystals: 2, gold: 80, items: { ore: 3 } } },
  { id: 's-circle', name: 'แท่นบูชาวงหิน', kind: 'ruin', position: { x: -70, z: -148 }, region: 'deadwood', loot: { crystals: 4, xp: 90, items: { darkShard: 2, essence: 1 } } },
  { id: 's-bones', name: 'กระดูกยักษ์แตกสลาย', kind: 'cache', position: { x: 83, z: 168 }, region: 'varnhal', loot: { gold: 120, xp: 70, items: { bone: 4 } } },
  { id: 's-abbey', name: 'หีบศักดิ์สิทธิ์อาราม', kind: 'ruin', position: { x: -138, z: 128 }, region: 'mirefall', loot: { crystals: 3, potions: 2, xp: 80, items: { herb: 4 } } },
  { id: 's-varnhal', name: 'คลังใต้พระราชวัง', kind: 'cache', position: { x: 172, z: 62 }, region: 'varnhal', loot: { crystals: 5, gold: 200, xp: 120, items: { bossRelic: 1 } } },
  { id: 's-market', name: 'ตู้เงินตลาดวาร์นฮัล', kind: 'cache', position: { x: 136, z: 80 }, region: 'varnhal', loot: { gold: 160, xp: 60, items: { stoneHeart: 1 } } },
  { id: 's-volcano', name: 'แก่นไฟภูเขา', kind: 'ruin', position: { x: 168, z: -188 }, region: 'emberpeak', loot: { crystals: 4, gold: 140, xp: 110, items: { stoneHeart: 2, darkShard: 2 } } },
  { id: 's-wolfden', name: 'ถุงของพรานวูล์ฟเดน', kind: 'cache', position: { x: 58, z: -208 }, region: 'emberpeak', loot: { gold: 100, xp: 55, items: { bone: 3 } } },
  { id: 's-lake', name: 'หีบใต้ทะเลสาบ', kind: 'cache', position: { x: -182, z: 170 }, region: 'mirefall', loot: { crystals: 4, potions: 2, xp: 90, items: { essence: 2 } } },
  { id: 'c-shadow', name: 'ถ้ำเงาลืมเลือน', kind: 'cave', position: { x: 95, z: -120 }, region: 'emberpeak', loot: { crystals: 5, gold: 180, xp: 130, items: { bossRelic: 1, darkShard: 3 } } },
  { id: 'c-root', name: 'ถ้ำรากหิน', kind: 'cave', position: { x: -110, z: -190 }, region: 'deadwood', loot: { crystals: 5, potions: 2, xp: 140, items: { essence: 3, wood: 3 } } },
  { id: 'c-mire', name: 'ถ้ำใต้ก้นบึง', kind: 'cave', position: { x: -205, z: 195 }, region: 'mirefall', loot: { crystals: 6, gold: 220, xp: 160, items: { essence: 4, stoneHeart: 2 } } },
  { id: 'c-ember', name: 'ถ้ำถ่านไฟ', kind: 'cave', position: { x: 205, z: -205 }, region: 'emberpeak', loot: { crystals: 6, gold: 240, xp: 180, items: { stoneHeart: 4, darkShard: 4 } } }
];

export function regionAt(x, z) {
  let nearest = null;
  let nearestDistance = Infinity;

  for (const region of REGIONS) {
    const dx = x - region.center.x;
    const dz = z - region.center.z;
    const distance = dx * dx + dz * dz;
    if (distance <= region.radius * region.radius && distance < nearestDistance) {
      nearest = region;
      nearestDistance = distance;
    }
  }

  return nearest;
}
