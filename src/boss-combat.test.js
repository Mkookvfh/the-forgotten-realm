import test from 'node:test';
import assert from 'node:assert/strict';
import { getBossAttackPattern, getBossOpeningMultiplier, getBossPhaseCombatProfile } from './boss-combat.js';

test('boss phase profile escalates damage and counter window', () => {
  const p1=getBossPhaseCombatProfile(1), p2=getBossPhaseCombatProfile(2), p3=getBossPhaseCombatProfile(3);
  assert.equal(p1.attackName,'ฟาดพื้น');
  assert.ok(p2.damageMultiplier>p1.damageMultiplier);
  assert.ok(p3.damageMultiplier>p2.damageMultiplier);
  assert.ok(p3.windup<p2.windup);
  assert.ok(p3.recovery>p2.recovery);
  assert.ok(p3.openingMultiplier>p2.openingMultiplier);
});
test('phase and attack index are safely normalized',()=>{
  assert.equal(getBossPhaseCombatProfile(0).phase,1);
  assert.equal(getBossPhaseCombatProfile(99).phase,3);
  assert.equal(getBossAttackPattern(3,4).patternIndex,0);
});
test('later phases unlock larger and more damaging patterns',()=>{
  const first=getBossAttackPattern(1,0), final=getBossAttackPattern(3,3);
  assert.ok(final.radiusBonus>first.radiusBonus);
  assert.ok(final.damageMultiplier>first.damageMultiplier);
  assert.equal(final.attackName,'พิพากษาอเวจี');
});
test('only bosses during recovery receive counterattack damage bonus',()=>{
  assert.equal(getBossOpeningMultiplier(true,0,3),1);
  assert.equal(getBossOpeningMultiplier(false,1,3),1);
  assert.equal(getBossOpeningMultiplier(true,1,1),1.25);
  assert.equal(getBossOpeningMultiplier(true,1,3),1.45);
});

test('charge attacks expose movement speed and remain dodgeable by target-lock',()=>{
  const phase1=getBossAttackPattern(1,1);
  const phase2=getBossAttackPattern(2,1);
  const phase3=getBossAttackPattern(3,1);
  assert.equal(phase1.behavior,'charge');
  assert.ok(phase1.chargeSpeed>0);
  assert.equal(phase2.behavior,'charge');
  assert.ok(phase2.chargeSpeed>phase1.chargeSpeed);
  assert.equal(phase3.behavior,'charge');
  assert.ok(phase3.chargeSpeed>phase2.chargeSpeed);
});
