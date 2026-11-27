/**
 * Data-driven boss combat tuning shared by the world boss AI.
 * A recovery opening rewards players for dodging and counter-attacking.
 */
const PHASE_PROFILES = {
  1: {
    attackName: 'ฟาดพื้น',
    windup: 0.92,
    radiusBonus: 0.45,
    damageMultiplier: 1,
    cooldownMultiplier: 1,
    recovery: 0.75,
    openingMultiplier: 1.25
  },
  2: {
    attackName: 'ฟาดวงกว้าง',
    windup: 0.78,
    radiusBonus: 1.25,
    damageMultiplier: 1.12,
    cooldownMultiplier: 0.92,
    recovery: 0.95,
    openingMultiplier: 1.35
  },
  3: {
    attackName: 'คลื่นอเวจี',
    windup: 0.58,
    radiusBonus: 2.1,
    damageMultiplier: 1.28,
    cooldownMultiplier: 0.82,
    recovery: 1.15,
    openingMultiplier: 1.45
  }
};

export function getBossPhaseCombatProfile(phase) {
  const safePhase = Math.max(1, Math.min(3, Math.floor(Number(phase) || 1)));
  return { phase: safePhase, ...PHASE_PROFILES[safePhase] };
}

export function getBossOpeningMultiplier(isBoss, recoveryTimer, phase) {
  if (!isBoss || !(Number(recoveryTimer) > 0)) return 1;
  return getBossPhaseCombatProfile(phase).openingMultiplier;
}
