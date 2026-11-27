/**
 * One-time unique rewards for open-world boss encounters.
 * The claimed flags live in state.flags and therefore travel with save slots.
 */
const BOSS_REWARDS = {
  boss: {
    key: 'unique-boss-reward-ruin-lord',
    title: 'เจ้าแห่งซากปรัก',
    gold: 250,
    crystals: 8,
    items: { bossRelic: 2, darkShard: 3, ruinCore: 1 }
  },
  warlord: {
    key: 'unique-boss-reward-ash-warlord',
    title: 'หัวหน้าโจร',
    gold: 140,
    crystals: 4,
    items: { bossRelic: 1, stoneHeart: 1, ashHeart: 1 }
  }
};

/**
 * Claims a boss reward exactly once per save.
 * Mutates the supplied flags object and returns a fresh reward object.
 */
export function claimBossReward(flags = {}, enemyType) {
  if (!flags || typeof flags !== 'object' || Array.isArray(flags)) return null;
  const reward = BOSS_REWARDS[enemyType];
  if (!reward || flags[reward.key]) return null;

  flags[reward.key] = true;
  return {
    title: reward.title,
    gold: reward.gold,
    crystals: reward.crystals,
    items: { ...reward.items }
  };
}
