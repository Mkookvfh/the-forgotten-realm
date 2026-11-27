// Save-friendly, lightweight town events. Events are narrative notices for now;
// their physical festival props and economy effects can be added in later passes.
export const TOWN_EVENT_DAY_SECONDS = 240;

export const TOWN_EVENT_TYPES = [
  { id: 'market', title: 'ตลาดคึกคัก', message: 'พ่อค้าและช่างฝีมือมาตั้งแผงขายของ' },
  { id: 'lanterns', title: 'คืนโคมไฟ', message: 'ชาวเมืองจุดโคมเพื่อระลึกถึงผู้เดินทางที่หายไป' },
  { id: 'supplies', title: 'ขบวนเสบียงมาถึง', message: 'เสบียงจากเมืองใกล้เคียงมาถึง ทำให้ผู้คนออกมารวมตัวกัน' },
  { id: 'storyteller', title: 'นักเล่าเรื่องพเนจร', message: 'นักเล่าเรื่องเดินทางมาถึงและเล่าตำนานเก่าแก่' }
];

export const TOWN_EVENT_TOWNS = [
  {
    "id": "ravenhold",
    "name": "ราเวนโฮลด์",
    "x": -45,
    "z": -45
  },
  {
    "id": "varnhal",
    "name": "วาร์นฮัล",
    "x": 160,
    "z": 50
  },
  {
    "id": "ashford",
    "name": "แอชฟอร์ด",
    "x": 45,
    "z": -50
  },
  {
    "id": "grimmoor",
    "name": "กริมมัวร์",
    "x": 55,
    "z": 0
  },
  {
    "id": "duskvale",
    "name": "ดัสก์เวล",
    "x": 42,
    "z": 50
  },
  {
    "id": "blackmere",
    "name": "แบล็กเมียร์",
    "x": -48,
    "z": 42
  },
  {
    "id": "thornwick",
    "name": "ธอร์นวิก",
    "x": -150,
    "z": -40
  },
  {
    "id": "wolfden",
    "name": "วูล์ฟเดน",
    "x": 50,
    "z": -200
  },
  {
    "id": "mirefall",
    "name": "มิเรฟอลล์",
    "x": -50,
    "z": 205
  }
];

function validSavedState(value) {
  if (!value || typeof value !== 'object' || Array.isArray(value)) return null;
  const day = Number(value.day);
  const elapsed = Number(value.elapsed);
  return {
    day: Number.isFinite(day) ? Math.max(0, Math.floor(day)) : 0,
    elapsed: Number.isFinite(elapsed) ? Math.max(0, Math.min(TOWN_EVENT_DAY_SECONDS, elapsed)) : 0,
    seen: value.seen && typeof value.seen === 'object' && !Array.isArray(value.seen)
      ? { ...value.seen }
      : {}
  };
}

function eventIndex(cityId, day) {
  let hash = day * 31;
  for (const char of cityId) hash = (hash * 17 + char.charCodeAt(0)) >>> 0;
  return hash % TOWN_EVENT_TYPES.length;
}

export function createTownEventSystem(gameState, notify = () => {}) {
  if (!gameState || typeof gameState !== 'object') throw new TypeError('gameState is required');
  gameState.townEvents = validSavedState(gameState.townEvents) || { day: 0, elapsed: 0, seen: {} };
  let lastTownId = null;

  function getEvent(cityId) {
    const town = TOWN_EVENT_TOWNS.find((entry) => entry.id === cityId);
    if (!town) return null;
    const event = TOWN_EVENT_TYPES[eventIndex(cityId, gameState.townEvents.day)];
    return { townId: town.id, townName: town.name, day: gameState.townEvents.day, ...event };
  }

  function update(dt, playerX = 0, playerZ = 0) {
    if (!Number.isFinite(dt) || dt <= 0) return null;
    const saved = validSavedState(gameState.townEvents) || { day: 0, elapsed: 0, seen: {} };
    saved.elapsed += Math.min(dt, 1);
    while (saved.elapsed >= TOWN_EVENT_DAY_SECONDS) {
      saved.elapsed -= TOWN_EVENT_DAY_SECONDS;
      saved.day += 1;
      saved.seen = {};
    }
    gameState.townEvents = saved;

    const town = TOWN_EVENT_TOWNS.find((entry) =>
      Math.hypot(playerX - entry.x, playerZ - entry.z) <= 27
    );
    if (!town) {
      lastTownId = null;
      return null;
    }
    if (town.id === lastTownId) return null;
    lastTownId = town.id;
    if (saved.seen[town.id] === saved.day) return null;

    saved.seen[town.id] = saved.day;
    const event = getEvent(town.id);
    notify(`${town.name} · ${event.title}: ${event.message}`);
    return event;
  }

  return { update, getEvent, serialize: () => JSON.parse(JSON.stringify(gameState.townEvents)) };
}
