import test from 'node:test';
import assert from 'node:assert/strict';
import { CURRENT_SAVE_VERSION, parseSaveWithBackup, validateSaveData } from './single-player-save.js';

const valid = (overrides = {}) => JSON.stringify({
  version: CURRENT_SAVE_VERSION,
  player: [1, 2, 3],
  state: {},
  ...overrides
});

test('loads a valid primary save without recovery', () => {
  const result = parseSaveWithBackup(valid(), valid());
  assert.equal(result.source, 'primary');
  assert.equal(result.recovered, false);
  assert.deepEqual(result.data.player, [1, 2, 3]);
});

test('recovers from a structurally invalid primary save', () => {
  const result = parseSaveWithBackup(JSON.stringify({ player: [1, 2, 3] }), valid());
  assert.equal(result.source, 'backup');
  assert.equal(result.recovered, true);
});

test('recovers from a malformed primary JSON save', () => {
  const result = parseSaveWithBackup('{broken json', valid());
  assert.equal(result.source, 'backup');
  assert.equal(result.recovered, true);
});

test('rejects unsupported future save versions', () => {
  assert.throws(() => validateSaveData(JSON.parse(valid({ version: CURRENT_SAVE_VERSION + 1 }))), /Unsupported save version/);
});

test('throws when both save copies are invalid', () => {
  assert.throws(() => parseSaveWithBackup('{broken', '{"bad":true}'));
});
