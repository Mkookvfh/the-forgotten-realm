/**
 * Data-driven boss phase profiles and escalating attack patterns.
 */
const PHASE_PROFILES = {
  1: { attackName: 'ฟาดพื้น', windup: .92, radiusBonus: .45, damageMultiplier: 1, cooldownMultiplier: 1, recovery: .75, openingMultiplier: 1.25 },
  2: { attackName: 'ฟาดวงกว้าง', windup: .78, radiusBonus: 1.25, damageMultiplier: 1.12, cooldownMultiplier: .92, recovery: .95, openingMultiplier: 1.35 },
  3: { attackName: 'คลื่นอเวจี', windup: .58, radiusBonus: 2.1, damageMultiplier: 1.28, cooldownMultiplier: .82, recovery: 1.15, openingMultiplier: 1.45 }
};

const ATTACK_PATTERNS = {
  1: [
    { attackName: 'ฟาดพื้น', windup: .92, radiusBonus: .45, damageMultiplier: 1, cooldownMultiplier: 1, recovery: .75 },
    { attackName: 'พุ่งกระแทก', behavior: 'charge', chargeSpeed: 7.2, windup: .68, radiusBonus: .8, damageMultiplier: 1.12, cooldownMultiplier: .9, recovery: .65 }
  ],
  2: [
    { attackName: 'ฟาดวงกว้าง', windup: .78, radiusBonus: 1.25, damageMultiplier: 1.12, cooldownMultiplier: .92, recovery: .95 },
    { attackName: 'พุ่งไล่ล่า', behavior: 'charge', chargeSpeed: 8.4, windup: .55, radiusBonus: 1.6, damageMultiplier: 1.2, cooldownMultiplier: .82, recovery: .75 },
    { attackName: 'ระเบิดอเวจี', windup: .7, radiusBonus: 2.2, damageMultiplier: 1.28, cooldownMultiplier: 1, recovery: 1.05 }
  ],
  3: [
    { attackName: 'คลื่นอเวจี', windup: .58, radiusBonus: 2.1, damageMultiplier: 1.28, cooldownMultiplier: .82, recovery: 1.15 },
    { attackName: 'พุ่งสังหาร', behavior: 'charge', chargeSpeed: 10.2, windup: .42, radiusBonus: 2.5, damageMultiplier: 1.38, cooldownMultiplier: .72, recovery: .82 },
    { attackName: 'ระเบิดวงกว้าง', windup: .5, radiusBonus: 3.1, damageMultiplier: 1.48, cooldownMultiplier: .9, recovery: 1.25 },
    { attackName: 'พิพากษาอเวจี', windup: .62, radiusBonus: 3.8, damageMultiplier: 1.65, cooldownMultiplier: 1.05, recovery: 1.45 }
  ]
};

export function getBossPhaseCombatProfile(phase) {
  const safePhase = Math.max(1, Math.min(3, Math.floor(Number(phase) || 1)));
  return { phase: safePhase, ...PHASE_PROFILES[safePhase] };
}

export function getBossAttackPattern(phase, attackIndex = 0) {
  const safePhase = Math.max(1, Math.min(3, Math.floor(Number(phase) || 1)));
  const patterns = ATTACK_PATTERNS[safePhase];
  const index = Math.abs(Math.floor(Number(attackIndex) || 0)) % patterns.length;
  return { ...patterns[index], phase: safePhase, patternIndex: index };
}

export function getBossOpeningMultiplier(isBoss, recoveryTimer, phase) {
  if (!isBoss || !(Number(recoveryTimer) > 0)) return 1;
  return getBossPhaseCombatProfile(phase).openingMultiplier;
}
