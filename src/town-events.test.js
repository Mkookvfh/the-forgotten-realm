import test from 'node:test';
import assert from 'node:assert/strict';
import { createTownEventSystem, TOWN_EVENT_DAY_SECONDS } from './town-events.js';

test('town event is stable for a town and day and changes after a day advances', () => {
  const state = {};
  const notices = [];
  const events = createTownEventSystem(state, (message) => notices.push(message));
  const first = events.getEvent('ravenhold');
  assert.equal(events.getEvent('ravenhold').id, first.id);
  events.update(1, -45, -45);
  assert.equal(notices.length, 1);
  events.update(1, -45, -45);
  assert.equal(notices.length, 1);
  events.update(1, 0, 0);
  events.update(1, -45, -45);
  assert.equal(notices.length, 1, 'same town should not repeat the notice during the same day');
  for (let second = 0; second < TOWN_EVENT_DAY_SECONDS; second += 1) {
    events.update(1, 1000, 1000);
  }
  const next = events.getEvent('ravenhold');
  assert.equal(next.day, 1);
  events.update(1, -45, -45);
  assert.equal(notices.length, 2);
});

test('save state restores day and elapsed time safely', () => {
  const original = createTownEventSystem({ townEvents: { day: 4, elapsed: 12, seen: { ravenhold: 4 } } });
  const saved = original.serialize();
  const restored = createTownEventSystem({ townEvents: saved });
  assert.deepEqual(restored.serialize(), saved);
});

test('invalid city IDs return null and malformed saved state is sanitized', () => {
  const events = createTownEventSystem({ townEvents: { day: -5, elapsed: Infinity, seen: [] } });
  assert.equal(events.getEvent('not-a-town'), null);
  assert.deepEqual(events.serialize(), { day: 0, elapsed: 0, seen: {} });
});
