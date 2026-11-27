// Lightweight exploration encounters placed away from the settlements.
// Each encounter is claimed once and persisted in the regular game save.
export const WORLD_EVENT_SITES = [
  { id: 'lost-caravan', name: 'คาราวานที่หายไป', x: -112, z: -82, radius: 9, title: 'ร่องรอยคาราวาน', message: 'พบลังเสบียงที่ถูกทิ้งไว้ข้างทาง', reward: { gold: 35 } },
  { id: 'forgotten-shrine', name: 'ศาลเจ้าที่ถูกลืม', x: -190, z: -95, radius: 10, title: 'ศาลเจ้าโบราณ', message: 'แท่นหินส่องแสงจาง ๆ เมื่อเจ้าเข้าใกล้', reward: { crystals: 2 } },
  { id: 'wandering-merchant', name: 'พ่อค้าเร่', x: 118, z: -120, radius: 11, title: 'พ่อค้าเร่พเนจร', message: 'พ่อค้าเร่ฝากถุงทองไว้ให้เป็นรางวัลจากการช่วยเหลือที่ผ่านมา', reward: { gold: 50 } },
  { id: 'echoing-stones', name: 'วงหินเสียงสะท้อน', x: -250, z: 75, radius: 10, title: 'เสียงสะท้อนจากวงหิน', message: 'เสียงกระซิบโบราณดังขึ้น แล้วเงียบหายไป', reward: { crystals: 1 } },
  { id: 'old-watchtower', name: 'หอคอยเฝ้าระวังเก่า', x: 245, z: 95, radius: 10, title: 'หอคอยร้าง', message: 'บนหอคอยมีแผนที่เส้นทางเก่าซ่อนอยู่', reward: { gold: 25, crystals: 1 } },
  { id: 'moonlit-water', name: 'บ่อน้ำแสงจันทร์', x: -80, z: 245, radius: 10, title: 'บ่อน้ำแสงจันทร์', message: 'ผิวน้ำสะท้อนแสงประหลาดและมอบพลังให้เจ้า', reward: { crystals: 2 } }
];

function sanitize(value) {
  if (!value || typeof value !== 'object' || Array.isArray(value)) return { found: [] };
  return { found: Array.isArray(value.found) ? [...new Set(value.found.filter(id => typeof id === 'string'))] : [] };
}

export function createWorldEventSystem(gameState, onEncounter = () => {}) {
  if (!gameState || typeof gameState !== 'object') throw new TypeError('gameState is required');
  gameState.worldEvents = sanitize(gameState.worldEvents);
  let nearbyId = null;

  function update(playerX, playerZ) {
    if (!Number.isFinite(playerX) || !Number.isFinite(playerZ)) return null;
    const site = WORLD_EVENT_SITES.find(entry =>
      Math.hypot(playerX - entry.x, playerZ - entry.z) <= entry.radius
    );
    if (!site) {
      nearbyId = null;
      return null;
    }
    if (nearbyId === site.id) return null;
    nearbyId = site.id;
    if (gameState.worldEvents.found.includes(site.id)) return null;

    gameState.worldEvents.found.push(site.id);
    const event = { ...site, reward: { ...site.reward } };
    onEncounter(event);
    return event;
  }

  return {
    update,
    serialize: () => ({ found: [...gameState.worldEvents.found] }),
    getFound: () => [...gameState.worldEvents.found]
  };
}
