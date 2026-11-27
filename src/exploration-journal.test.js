import test from 'node:test';
import assert from 'node:assert/strict';
import { getExplorationJournal, explorationTotals } from './exploration-journal.js';

const regions = [
  { id: 'forest', name: 'ป่า' },
  { id: 'lake', name: 'ทะเลสาบ' }
];
const secrets = [
  { id: 'a', name: 'หีบหนึ่ง', region: 'forest' },
  { id: 'b', name: 'หีบสอง', region: 'forest' },
  { id: 'c', name: 'ถ้ำ', region: 'lake' }
];

test('journal counts discovered secrets, hides undiscovered names and reports completion', () => {
  const state = { discoveredSecrets: ['a', 'b'], flags: { 'secret-region-reward:forest': true } };
  const journal = getExplorationJournal(state, regions, secrets);
  assert.deepEqual(journal[0], {
    id: 'forest', name: 'ป่า', discovered: 2, total: 2, complete: true,
    rewardClaimed: true,
    secrets: [
      { id: 'a', name: 'หีบหนึ่ง', discovered: true },
      { id: 'b', name: 'หีบสอง', discovered: true }
    ]
  });
  assert.equal(journal[1].secrets[0].name, 'ความลับที่ยังไม่ค้นพบ');
  assert.deepEqual(explorationTotals(journal), { found: 2, total: 3, completedRegions: 1 });
});

test('empty and malformed state returns safe zero progress', () => {
  const journal = getExplorationJournal({}, regions, secrets);
  assert.equal(journal[0].discovered, 0);
  assert.equal(journal[0].complete, false);
  assert.deepEqual(explorationTotals(journal), { found: 0, total: 3, completedRegions: 0 });
});
