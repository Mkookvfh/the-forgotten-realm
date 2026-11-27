import test from 'node:test';
import assert from 'node:assert/strict';
import { buildStaggerState, getElementMultiplier, getLowHealthBossSpecial, getStaggerThreshold, getWeaknessHint } from './boss-weaknesses.js';

test('elemental weaknesses and resistances are type-specific', () => {
  assert.equal(getElementMultiplier('wraith', 'fire'), 1.4);
  assert.equal(getElementMultiplier('brute', 'frost'), 1.25);
  assert.equal(getElementMultiplier('boss', 'fire'), 0.8);
  assert.equal(getElementMultiplier('unknown', 'fire'), 1);
});

test('stagger meter decays after inactivity and triggers at threshold', () => {
  const threshold = getStaggerThreshold('guardian');
  const first = buildStaggerState({ meter: 2, decayTimer: 2 }, 'guardian', 1, .5);
  assert.equal(first.triggered, false);
  const second = buildStaggerState(first, 'guardian', threshold, 0);
  assert.equal(second.triggered, true);
  assert.equal(second.meter, 0);
});

test('bosses require more stagger and have longer interruption windows', () => {
  const boss = buildStaggerState({ meter: 6, decayTimer: 2 }, 'boss', 1.1);
  assert.equal(boss.triggered, true);
  assert.equal(boss.duration, 1.65);
  assert.ok(getStaggerThreshold('boss') > getStaggerThreshold('guardian'));
});

test('low-health special attacks are only offered to bosses at or below 20 percent', () => {
  assert.equal(getLowHealthBossSpecial('boss', .21), null);
  assert.equal(getLowHealthBossSpecial('wolf', .1), null);
  const special = getLowHealthBossSpecial('dungeonBoss', .2);
  assert.equal(special.special, true);
  assert.ok(special.damageMultiplier > 1.5);
});

test('boss weak point hints match elemental weakness data', () => {
  assert.equal(getWeaknessHint('boss'), 'น้ำแข็ง');
  assert.equal(getWeaknessHint('dungeonBoss'), 'ไฟ');
  assert.equal(getWeaknessHint('warlord'), 'สายฟ้า');
});
