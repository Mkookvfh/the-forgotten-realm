import test from 'node:test';
import assert from 'node:assert/strict';
import {
  getBossOpeningMultiplier,
  getBossPhaseCombatProfile
} from './boss-combat.js';

test('boss phase profile grows more dangerous but provides a longer counter window', () => {
  const phase1 = getBossPhaseCombatProfile(1);
  const phase2 = getBossPhaseCombatProfile(2);
  const phase3 = getBossPhaseCombatProfile(3);

  assert.equal(phase1.attackName, 'ฟาดพื้น');
  assert.ok(phase2.damageMultiplier > phase1.damageMultiplier);
  assert.ok(phase3.damageMultiplier > phase2.damageMultiplier);
  assert.ok(phase3.windup < phase2.windup);
  assert.ok(phase3.recovery > phase2.recovery);
  assert.ok(phase3.openingMultiplier > phase2.openingMultiplier);
});

test('phase values are clamped to the supported range', () => {
  assert.equal(getBossPhaseCombatProfile(0).phase, 1);
  assert.equal(getBossPhaseCombatProfile(99).phase, 3);
});

test('only bosses during recovery receive counterattack damage bonus', () => {
  assert.equal(getBossOpeningMultiplier(true, 0, 3), 1);
  assert.equal(getBossOpeningMultiplier(false, 1, 3), 1);
  assert.equal(getBossOpeningMultiplier(true, 1, 1), 1.25);
  assert.equal(getBossOpeningMultiplier(true, 1, 3), 1.45);
});
