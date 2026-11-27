import test from 'node:test';
import assert from 'node:assert/strict';
import { createDungeonProgression } from './dungeon-progression.js';

test('dungeon progress is stored in the supplied save state', () => {
  const save = {};
  const dungeon = createDungeonProgression('forgottenCrypt', save);
  assert.equal(dungeon.currentRoom().id, 'entry');
  assert.equal(save.dungeons.forgottenCrypt.roomIndex, 0);
});

test('puzzle room cannot be cleared before the correct solution', () => {
  const dungeon = createDungeonProgression('forgottenCrypt', {});
  dungeon.completeCurrentRoom();
  assert.equal(dungeon.currentRoom().kind, 'puzzle');
  assert.deepEqual(dungeon.completeCurrentRoom(), { ok: false, reason: 'puzzle-required' });
  assert.equal(dungeon.solvePuzzle('wrong').ok, false);
  assert.equal(dungeon.solvePuzzle('moon-star-sun').ok, true);
  assert.equal(dungeon.completeCurrentRoom().ok, true);
});

test('boss phases trigger at health thresholds and reward can only be claimed once', () => {
  const dungeon = createDungeonProgression('forgottenCrypt', {});
  dungeon.completeCurrentRoom();
  dungeon.solvePuzzle('moon-star-sun');
  dungeon.completeCurrentRoom();
  assert.equal(dungeon.currentRoom().kind, 'boss');
  assert.equal(dungeon.damageBoss(.4).phase, 2);
  assert.equal(dungeon.damageBoss(.3).phase, 3);
  assert.equal(dungeon.damageBoss(.3).defeated, true);
  assert.equal(dungeon.completeCurrentRoom().completed, true);
  assert.equal(dungeon.claimReward().ok, true);
  assert.deepEqual(dungeon.claimReward(), { ok: false, reason: 'already-claimed' });
});

test('unknown dungeon id is rejected', () => {
  assert.throws(() => createDungeonProgression('missing', {}), /Unknown dungeon/);
});
