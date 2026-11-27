import test from 'node:test';
import assert from 'node:assert/strict';
import { createWorldEventSystem, WORLD_EVENT_SITES } from './world-events.js';

test('encounter triggers once when entering a site and persists as found', () => {
  const state = {};
  const encountered = [];
  const events = createWorldEventSystem(state, event => encountered.push(event));
  const site = WORLD_EVENT_SITES[0];
  assert.equal(events.update(site.x, site.z).id, site.id);
  assert.equal(events.update(site.x, site.z), null);
  events.update(site.x + site.radius + 2, site.z);
  assert.equal(events.update(site.x, site.z), null);
  assert.equal(encountered.length, 1);
  assert.deepEqual(events.serialize(), { found: [site.id] });
});

test('restored discoveries are not rewarded again', () => {
  const site = WORLD_EVENT_SITES[1];
  const state = { worldEvents: { found: [site.id] } };
  let calls = 0;
  const events = createWorldEventSystem(state, () => calls++);
  assert.equal(events.update(site.x, site.z), null);
  assert.equal(calls, 0);
});

test('malformed save data is sanitized and invalid coordinates are ignored', () => {
  const events = createWorldEventSystem({ worldEvents: { found: 'bad' } });
  assert.deepEqual(events.serialize(), { found: [] });
  assert.equal(events.update(NaN, 0), null);
});
