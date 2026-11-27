import test from 'node:test';
import assert from 'node:assert/strict';
import { claimSecretRegionReward } from './secret-region-rewards.js';

const secrets = [
  { id: 'a', region: 'forest' },
  { id: 'b', region: 'forest' },
  { id: 'c', region: 'lake' }
];

test('regional reward is granted only after all secrets in that region are found', () => {
  const state = { discoveredSecrets: ['a'], flags: {} };
  assert.equal(claimSecretRegionReward(state, 'a', secrets), null);
  state.discoveredSecrets.push('b');
  const reward = claimSecretRegionReward(state, 'b', secrets);
  assert.deepEqual(reward, { region: 'forest', count: 2, gold: 105, crystals: 2, xp: 150 });
  assert.equal(state.flags['secret-region-reward:forest'], true);
});

test('completion bonus cannot be claimed twice and does not affect another region', () => {
  const state = { discoveredSecrets: ['a', 'b', 'c'], flags: {} };
  assert.equal(claimSecretRegionReward(state, 'a', secrets).gold, 105);
  assert.equal(claimSecretRegionReward(state, 'b', secrets), null);
  assert.equal(claimSecretRegionReward(state, 'c', secrets).gold, 90);
});

test('invalid IDs and malformed state safely return no reward', () => {
  assert.equal(claimSecretRegionReward({}, 'missing', secrets), null);
  const state = { discoveredSecrets: ['a', 'b'], flags: [] };
  const reward = claimSecretRegionReward(state, 'a', secrets);
  assert.equal(reward.gold, 105);
  assert.equal(state.flags['secret-region-reward:forest'], true);
});
