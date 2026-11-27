import { createServer } from 'node:http';
import { WebSocketServer, WebSocket } from 'ws';

const PORT = Number(process.env.PORT || 10000);
const ROOM_CAPACITY = 2;
const rooms = new Map();

const httpServer = createServer((req, res) => {
  if (req.url === '/health') {
    res.writeHead(200, { 'content-type': 'application/json' });
    res.end(JSON.stringify({ ok: true, service: 'the-forgotten-realm-multiplayer', rooms: rooms.size }));
    return;
  }
  res.writeHead(200, { 'content-type': 'text/plain; charset=utf-8' });
  res.end('THE FORGOTTEN REALM multiplayer relay is running.\n');
});

const wss = new WebSocketServer({ server: httpServer, maxPayload: 16 * 1024 });
const send = (socket, data) => {
  if (socket.readyState === WebSocket.OPEN) socket.send(JSON.stringify(data));
};
const clean = (value, max = 48) => typeof value === 'string' ? value.trim().slice(0, max) : '';

function removeFromRoom(socket) {
  const roomId = socket.roomId;
  if (!roomId) return;
  const room = rooms.get(roomId);
  if (room) {
    room.delete(socket);
    for (const peer of room) send(peer, {
      protocol: 1, roomId, playerId: socket.playerId, type: 'leave'
    });
    if (!room.size) rooms.delete(roomId);
  }
  socket.roomId = '';
}

wss.on('connection', (socket) => {
  socket.roomId = '';
  socket.playerId = '';
  socket.lastSnapshotAt = 0;

  socket.on('message', (raw) => {
    let message;
    try { message = JSON.parse(raw.toString()); } catch { return; }
    if (!message || message.protocol !== 1) return;

    if (message.type === 'join') {
      if (socket.roomId) return;
      const roomId = clean(message.roomId, 8).toUpperCase();
      const playerId = clean(message.playerId, 64);
      const displayName = clean(message.displayName, 32) || 'ผู้เล่น';
      if (!/^[A-Z0-9]{4,8}$/.test(roomId) || !playerId) {
        send(socket, { type: 'error', code: 'invalid-room', message: 'รหัสห้องไม่ถูกต้อง' });
        return;
      }

      let room = rooms.get(roomId);
      if (!room) { room = new Set(); rooms.set(roomId, room); }
      if (room.size >= ROOM_CAPACITY) {
        send(socket, { type: 'error', code: 'room-full', message: 'ห้องนี้มีผู้เล่นครบ 2 คนแล้ว' });
        socket.close(1008, 'Room full');
        return;
      }

      socket.roomId = roomId;
      socket.playerId = playerId;
      socket.displayName = displayName;
      for (const peer of room) {
        send(socket, { protocol: 1, roomId, playerId: peer.playerId, type: 'join', displayName: peer.displayName });
        send(peer, { protocol: 1, roomId, playerId, type: 'join', displayName });
      }
      room.add(socket);
      send(socket, { type: 'joined', roomId, playerCount: room.size, maxPlayers: ROOM_CAPACITY });
      return;
    }

    if (!socket.roomId || !socket.playerId) return;
    if (message.type === 'snapshot') {
      const now = Date.now();
      if (now - socket.lastSnapshotAt < 45) return;
      socket.lastSnapshotAt = now;
      const snapshot = message.snapshot;
      if (!snapshot || !snapshot.position) return;
      const p = snapshot.position;
      if (![p.x, p.y, p.z, snapshot.yaw, snapshot.hp].every((v) => Number.isFinite(Number(v)))) return;
      const safe = {
        position: { x: Math.max(-100000, Math.min(100000, Number(p.x))),
          y: Math.max(-10000, Math.min(10000, Number(p.y))),
          z: Math.max(-100000, Math.min(100000, Number(p.z))) },
        yaw: Number(snapshot.yaw), hp: Math.max(0, Math.min(1000, Number(snapshot.hp))),
        level: Math.max(1, Math.min(999, Math.round(Number(snapshot.level) || 1))),
        animation: ['idle','walk','run','attack','dodge','hurt'].includes(snapshot.animation) ? snapshot.animation : 'idle',
        timestamp: now
      };
      const room = rooms.get(socket.roomId);
      for (const peer of room || []) if (peer !== socket) send(peer, {
        protocol: 1, roomId: socket.roomId, playerId: socket.playerId,
        type: 'snapshot', snapshot: safe
      });
    }
  });

  socket.on('close', () => removeFromRoom(socket));
  socket.on('error', () => removeFromRoom(socket));
});

httpServer.listen(PORT, '0.0.0.0', () => {
  console.log(`Multiplayer relay listening on ${PORT}`);
});
