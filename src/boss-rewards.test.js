import test from 'node:test';
import assert from 'node:assert/strict';
import { claimBossReward } from './boss-rewards.js';

test('open-world boss reward is unique and records its claim in save flags', () => {
  const flags = {};
  const reward = claimBossReward(flags, 'boss');
  assert.equal(reward.title, 'เจ้าแห่งซากปรัก');
  assert.equal(reward.items.bossRelic, 2);
  assert.equal(flags['unique-boss-reward-ruin-lord'], true);
  assert.equal(claimBossReward(flags, 'boss'), null);
});

test('warlord has a separate unique reward and does not consume the boss reward', () => {
  const flags = {};
  const reward = claimBossReward(flags, 'warlord');
  assert.equal(reward.items.stoneHeart, 1);
  assert.equal(claimBossReward(flags, 'boss').title, 'เจ้าแห่งซากปรัก');
});

test('unknown types and invalid flags cannot claim rewards', () => {
  assert.equal(claimBossReward({}, 'wolf'), null);
  assert.equal(claimBossReward(null, 'boss'), null);
  assert.equal(claimBossReward([], 'boss'), null);
});
