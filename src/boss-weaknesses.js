/**
 * Elemental weaknesses, stagger thresholds and one-time low-health boss moves.
 * Pure data helpers keep combat tuning testable without loading the 3D scene.
 */
const WEAKNESSES = {
  guardian: { lightning: 1.35, poison: 0.8 },
  wraith: { fire: 1.4, physical: 0.85 },
  brute: { frost: 1.25, lightning: 0.8 },
  boss: { frost: 1.35, fire: 0.8 },
  dungeonBoss: { fire: 1.35, frost: 0.8 },
  wolf: { fire: 1.2, poison: 0.85 },
  raider: { poison: 1.2, lightning: 0.9 },
  revenant: { fire: 1.25, frost: 0.85 },
  warlord: { lightning: 1.25, poison: 0.8 }
};

export function getElementMultiplier(enemyType, element = 'physical') {
  const safeElement = typeof element === 'string' ? element.toLowerCase() : 'physical';
  return WEAKNESSES[enemyType]?.[safeElement] || 1;
}

export function getWeaknessHint(enemyType) {
  const hints = {
    guardian: 'สายฟ้า', wraith: 'ไฟ', brute: 'น้ำแข็ง',
    boss: 'น้ำแข็ง', dungeonBoss: 'ไฟ', wolf: 'ไฟ',
    raider: 'พิษ', revenant: 'ไฟ', warlord: 'สายฟ้า'
  };
  return hints[enemyType] || 'ธาตุที่เหมาะสม';
}

export function getStaggerThreshold(enemyType) {
  if (enemyType === 'boss' || enemyType === 'dungeonBoss' || enemyType === 'warlord') return 7;
  if (enemyType === 'brute' || enemyType === 'revenant') return 4.5;
  return 3.2;
}

export function buildStaggerState(current = {}, enemyType, staggerPower, elapsed = 0) {
  const threshold = getStaggerThreshold(enemyType);
  const decayTimer = Math.max(0, Number(current.decayTimer) || 0) - Math.max(0, Number(elapsed) || 0);
  const meter = decayTimer <= 0 ? 0 : Math.max(0, Number(current.meter) || 0);
  const nextMeter = meter + Math.max(0, Number(staggerPower) || 0);
  const triggered = nextMeter >= threshold;
  return {
    meter: triggered ? 0 : nextMeter,
    decayTimer: triggered ? 0 : 2.4,
    triggered,
    duration: enemyType === 'boss' || enemyType === 'dungeonBoss' || enemyType === 'warlord' ? 1.65 : 1.05,
    threshold
  };
}

export function getLowHealthBossSpecial(enemyType, hpRatio) {
  if (!['boss', 'dungeonBoss', 'warlord'].includes(enemyType) || !(Number(hpRatio) <= 0.2)) return null;
  const specials = {
    boss: { attackName: 'พิพากษาอเวจี · ท่าปิดฉาก', windup: 1.05, radiusBonus: 3.4, damageMultiplier: 1.72, cooldownMultiplier: 1.2, recovery: 1.8 },
    dungeonBoss: { attackName: 'แก่นถ้ำแตกสลาย', windup: 1.15, radiusBonus: 3.8, damageMultiplier: 1.78, cooldownMultiplier: 1.25, recovery: 2.0 },
    warlord: { attackName: 'คำสั่งสุดท้าย', windup: .95, radiusBonus: 2.8, damageMultiplier: 1.6, cooldownMultiplier: 1.15, recovery: 1.7 }
  };
  return { ...specials[enemyType], phase: 3, behavior: 'slam', special: true };
}
