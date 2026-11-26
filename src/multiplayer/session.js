/**
 * Two-player session contract for THE FORGOTTEN REALM.
 *
 * This module deliberately does not open a network connection. A future
 * WebSocket/WebRTC adapter can implement { send(message), subscribe(handler) }.
 * Keeping transport separate prevents the single-player game from depending
 * on a server and makes the protocol testable in isolation.
 */
export const MULTIPLAYER_PROTOCOL_VERSION = 1;
const MAX_REMOTE_SNAPSHOTS = 12;
const SNAPSHOT_INTERVAL_MS = 80;
const INTERPOLATION_DELAY_MS = 110;
const PLAYER_LIMIT = 2;

function createPlayerId() {
  if (globalThis.crypto?.randomUUID) return globalThis.crypto.randomUUID();
  return `player-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 10)}`;
}

function finite(value, fallback = 0) {
  const number = Number(value);
  return Number.isFinite(number) ? number : fallback;
}

function cleanId(value, maxLength = 64) {
  return typeof value === 'string'
    ? value.trim().slice(0, maxLength)
    : '';
}

function cleanSnapshot(payload) {
  if (!payload || typeof payload !== 'object') return null;
  const position = payload.position;
  if (!position || ![position.x, position.y, position.z].every((v) => Number.isFinite(Number(v)))) {
    return null;
  }

  return {
    position: {
      x: Math.max(-100000, Math.min(100000, Number(position.x))),
      y: Math.max(-10000, Math.min(10000, Number(position.y))),
      z: Math.max(-100000, Math.min(100000, Number(position.z)))
    },
    yaw: finite(payload.yaw),
    hp: Math.max(0, Math.min(1000, finite(payload.hp))),
    level: Math.max(1, Math.min(999, Math.round(finite(payload.level, 1)))),
    animation: ['idle', 'walk', 'run', 'attack', 'dodge', 'hurt'].includes(payload.animation)
      ? payload.animation
      : 'idle',
    timestamp: finite(payload.timestamp, Date.now())
  };
}

function lerp(a, b, t) {
  return a + (b - a) * t;
}

export function createMultiplayerSession({ playerId = createPlayerId(), maxPlayers = PLAYER_LIMIT } = {}) {
  const localPlayerId = cleanId(playerId);
  if (!localPlayerId) throw new Error('A valid local player id is required');

  const capacity = Math.max(1, Math.min(PLAYER_LIMIT, Math.round(finite(maxPlayers, PLAYER_LIMIT))));
  const remotePlayers = new Map();
  let roomId = '';
  let transport = null;
  let unsubscribe = null;
  let connected = false;
  let lastSnapshotSent = 0;
  let localSnapshot = null;

  function send(message) {
    if (!connected || !transport || typeof transport.send !== 'function') return false;
    try {
      transport.send({
        protocol: MULTIPLAYER_PROTOCOL_VERSION,
        roomId,
        playerId: localPlayerId,
        ...message
      });
      return true;
    } catch (error) {
      console.warn('[Multiplayer] transport send failed', error);
      return false;
    }
  }

  function receive(message) {
    if (!connected || !message || typeof message !== 'object') return;
    if (message.protocol !== MULTIPLAYER_PROTOCOL_VERSION) return;
    if (cleanId(message.roomId) !== roomId) return;

    const remoteId = cleanId(message.playerId);
    if (!remoteId || remoteId === localPlayerId) return;

    if (message.type === 'leave') {
      remotePlayers.delete(remoteId);
      return;
    }

    if (message.type === 'join') {
      if (!remotePlayers.has(remoteId) && remotePlayers.size >= capacity - 1) return;
      if (!remotePlayers.has(remoteId)) {
        remotePlayers.set(remoteId, { id: remoteId, name: cleanId(message.displayName, 32) || 'ผู้เล่น', snapshots: [] });
      }
      return;
    }

    if (message.type !== 'snapshot') return;
    if (!remotePlayers.has(remoteId) && remotePlayers.size >= capacity - 1) return;

    const snapshot = cleanSnapshot(message.snapshot);
    if (!snapshot) return;

    let player = remotePlayers.get(remoteId);
    if (!player) {
      player = { id: remoteId, name: 'ผู้เล่น', snapshots: [] };
      remotePlayers.set(remoteId, player);
    }

    player.snapshots.push(snapshot);
    if (player.snapshots.length > MAX_REMOTE_SNAPSHOTS) {
      player.snapshots.splice(0, player.snapshots.length - MAX_REMOTE_SNAPSHOTS);
    }
  }

  function connect({ room, adapter, displayName = 'ผู้เล่น' } = {}) {
    if (connected) return { ok: false, reason: 'already-connected' };
    const nextRoom = cleanId(room);
    if (!nextRoom) return { ok: false, reason: 'invalid-room' };
    if (!adapter || typeof adapter.send !== 'function' || typeof adapter.subscribe !== 'function') {
      return { ok: false, reason: 'invalid-transport-adapter' };
    }

    roomId = nextRoom;
    transport = adapter;
    connected = true;

    try {
      unsubscribe = adapter.subscribe(receive);
      send({ type: 'join', displayName: cleanId(displayName, 32) || 'ผู้เล่น' });
    } catch (error) {
      disconnect();
      return { ok: false, reason: 'transport-subscribe-failed', error };
    }
    return { ok: true, playerId: localPlayerId, roomId };
  }

  function disconnect() {
    if (connected) send({ type: 'leave' });
    connected = false;
    try {
      if (typeof unsubscribe === 'function') unsubscribe();
    } catch (error) {
      console.warn('[Multiplayer] unsubscribe failed', error);
    }
    unsubscribe = null;
    transport = null;
    roomId = '';
    remotePlayers.clear();
    lastSnapshotSent = 0;
  }

  function updateLocalSnapshot(snapshot, now = Date.now()) {
    localSnapshot = cleanSnapshot({ ...snapshot, timestamp: now });
    if (!localSnapshot || !connected || now - lastSnapshotSent < SNAPSHOT_INTERVAL_MS) return false;
    lastSnapshotSent = now;
    return send({ type: 'snapshot', snapshot: localSnapshot });
  }

  function getRemotePlayers(now = Date.now()) {
    const renderTime = now - INTERPOLATION_DELAY_MS;
    const result = [];

    for (const player of remotePlayers.values()) {
      const samples = player.snapshots;
      if (!samples.length) continue;

      while (samples.length > 2 && samples[1].timestamp <= renderTime) samples.shift();
      const first = samples[0];
      const second = samples[1];

      let state = first;
      if (second && second.timestamp > first.timestamp) {
        const t = Math.max(0, Math.min(1, (renderTime - first.timestamp) / (second.timestamp - first.timestamp)));
        state = {
          ...first,
          position: {
            x: lerp(first.position.x, second.position.x, t),
            y: lerp(first.position.y, second.position.y, t),
            z: lerp(first.position.z, second.position.z, t)
          },
          yaw: lerp(first.yaw, second.yaw, t),
          hp: lerp(first.hp, second.hp, t)
        };
      }

      if (now - state.timestamp > 5000) continue;
      result.push({ id: player.id, name: player.name, ...state });
    }
    return result;
  }

  function getStatus() {
    return {
      connected,
      roomId,
      localPlayerId,
      playerCount: Math.min(capacity, 1 + remotePlayers.size),
      maxPlayers: capacity
    };
  }

  return {
    connect,
    disconnect,
    updateLocalSnapshot,
    getRemotePlayers,
    getStatus,
    getLocalSnapshot: () => localSnapshot,
    protocolVersion: MULTIPLAYER_PROTOCOL_VERSION
  };
}
