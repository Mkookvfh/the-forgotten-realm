/**
 * Save-friendly single-player dungeon progression.
 * This module owns room/puzzle/boss state; scene presentation is handled by
 * the game systems that call it.
 */
export const DUNGEON_LAYOUTS = {
  forgottenCrypt: {
    name: 'สุสานลืมเลือน',
    rooms: [
      { id: 'entry', kind: 'combat', enemies: 2 },
      { id: 'sealed-hall', kind: 'puzzle', puzzle: 'three-seals' },
      { id: 'guardian-sanctum', kind: 'boss', boss: 'cryptGuardian' }
    ],
    reward: { gold: 180, xp: 220, items: { bossRelic: 1, essence: 3 } }
  },
  emberCave: {
    name: 'ถ้ำถ่านไฟ',
    rooms: [
      { id: 'ash-tunnel', kind: 'combat', enemies: 3 },
      { id: 'magma-gate', kind: 'puzzle', puzzle: 'heat-runes' },
      { id: 'heart-chamber', kind: 'boss', boss: 'emberWarden' }
    ],
    reward: { gold: 240, xp: 280, items: { stoneHeart: 2, darkShard: 4 } }
  }
};

function copyReward(reward) {
  return {
    gold: Math.max(0, Number(reward.gold) || 0),
    xp: Math.max(0, Number(reward.xp) || 0),
    items: { ...(reward.items || {}) }
  };
}

export function createDungeonProgression(dungeonId, saveState = {}) {
  const layout = DUNGEON_LAYOUTS[dungeonId];
  if (!layout) throw new Error(`Unknown dungeon: ${dungeonId}`);

  const root = saveState.dungeons && typeof saveState.dungeons === 'object'
    ? saveState.dungeons
    : (saveState.dungeons = {});
  const progress = root[dungeonId] && typeof root[dungeonId] === 'object'
    ? root[dungeonId]
    : (root[dungeonId] = { roomIndex: 0, completed: [], puzzleSolved: [], bossHpRatio: 1, claimed: false });

  progress.roomIndex = Math.max(0, Math.min(layout.rooms.length - 1, Math.floor(Number(progress.roomIndex) || 0)));
  if (!Array.isArray(progress.completed)) progress.completed = [];
  if (!Array.isArray(progress.puzzleSolved)) progress.puzzleSolved = [];
  progress.bossHpRatio = Math.max(0, Math.min(1, Number(progress.bossHpRatio) || 0));
  progress.claimed = Boolean(progress.claimed);

  const room = () => layout.rooms[progress.roomIndex] || null;
  const isComplete = () => progress.completed.includes(layout.rooms[layout.rooms.length - 1].id);

  function completeCurrentRoom() {
    const current = room();
    if (!current) return { ok: false, reason: 'no-room' };
    if (current.kind === 'puzzle' && !progress.puzzleSolved.includes(current.id)) {
      return { ok: false, reason: 'puzzle-required' };
    }
    if (current.kind === 'boss' && progress.bossHpRatio > 0) {
      return { ok: false, reason: 'boss-alive' };
    }
    if (!progress.completed.includes(current.id)) progress.completed.push(current.id);
    if (progress.roomIndex < layout.rooms.length - 1) progress.roomIndex++;
    return { ok: true, room: room(), completed: isComplete() };
  }

  function solvePuzzle(answer) {
    const current = room();
    if (!current || current.kind !== 'puzzle') return { ok: false, reason: 'not-puzzle' };
    const expected = current.puzzle === 'three-seals' ? 'moon-star-sun' : 'ember-water-stone';
    if (answer !== expected) return { ok: false, reason: 'wrong-answer' };
    if (!progress.puzzleSolved.includes(current.id)) progress.puzzleSolved.push(current.id);
    return { ok: true };
  }

  function damageBoss(amount) {
    const current = room();
    if (!current || current.kind !== 'boss' || isComplete()) {
      return { ok: false, reason: 'no-active-boss' };
    }
    const damage = Math.max(0, Number(amount) || 0);
    const before = progress.bossHpRatio;
    progress.bossHpRatio = Math.max(0, before - damage);
    const phase = before > .66 && progress.bossHpRatio <= .66 ? 2
      : before > .33 && progress.bossHpRatio <= .33 ? 3 : null;
    return { ok: true, hpRatio: progress.bossHpRatio, phase, defeated: progress.bossHpRatio <= 0 };
  }

  function claimReward() {
    if (!isComplete()) return { ok: false, reason: 'dungeon-not-cleared' };
    if (progress.claimed) return { ok: false, reason: 'already-claimed' };
    progress.claimed = true;
    return { ok: true, reward: copyReward(layout.reward) };
  }

  return {
    layout,
    progress,
    currentRoom: room,
    isComplete,
    completeCurrentRoom,
    solvePuzzle,
    damageBoss,
    claimReward
  };
}
