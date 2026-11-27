import * as THREE from 'three';

const DEFAULT_SERVER = 'wss://YOUR-MULTIPLAYER-SERVER.example';

function makeAvatar() {
  const group = new THREE.Group();
  const body = new THREE.Mesh(
    new THREE.CapsuleGeometry(0.34, 0.85, 4, 8),
    new THREE.MeshStandardMaterial({ color: 0x65c9f0, roughness: 0.72, emissive: 0x103344 })
  );
  body.position.y = 1.0;
  const head = new THREE.Mesh(
    new THREE.SphereGeometry(0.25, 10, 8),
    new THREE.MeshStandardMaterial({ color: 0xd8c4a4, roughness: 0.8 })
  );
  head.position.y = 1.72;
  const cloak = new THREE.Mesh(
    new THREE.ConeGeometry(0.48, 1.15, 8),
    new THREE.MeshStandardMaterial({ color: 0x28364d, roughness: 0.9, side: THREE.DoubleSide })
  );
  cloak.position.set(0, 0.78, -0.12);
  group.add(body, head, cloak);
  group.userData.body = body;
  return group;
}

function randomRoomCode() {
  const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
  let code = '';
  for (let i = 0; i < 6; i++) code += chars[Math.floor(Math.random() * chars.length)];
  return code;
}

export function createMultiplayerUI({ session, scene, getLocalSnapshot }) {
  const root = document.createElement('div');
  root.id = 'multiplayer-panel';
  root.style.cssText = 'position:fixed;right:12px;top:88px;z-index:30;pointer-events:auto;font:12px system-ui;color:#f3eadb;max-width:min(320px,calc(100vw - 24px));';
  root.innerHTML = `
    <button id="mp-open" style="background:#171d2a;color:#eee;border:1px solid #766a99;border-radius:10px;padding:9px 12px;font-weight:700">👥 เล่นออนไลน์ 2 คน</button>
    <div id="mp-box" style="display:none;margin-top:8px;background:rgba(10,13,22,.96);border:1px solid #62577d;border-radius:12px;padding:12px;box-shadow:0 8px 30px #0008">
      <strong style="display:block;margin-bottom:8px;color:#d6c4ff">MULTIPLAYER · 2 PLAYERS</strong>
      <label style="display:block;margin:6px 0">เซิร์ฟเวอร์ WSS
        <input id="mp-server" value="${DEFAULT_SERVER}" autocomplete="url" style="display:block;width:100%;margin-top:4px;padding:8px;border-radius:7px;background:#080b12;color:#fff;border:1px solid #4d5366">
      </label>
      <label style="display:block;margin:6px 0">ชื่อผู้เล่น
        <input id="mp-name" maxlength="24" value="ผู้เล่น" style="display:block;width:100%;margin-top:4px;padding:8px;border-radius:7px;background:#080b12;color:#fff;border:1px solid #4d5366">
      </label>
      <label style="display:block;margin:6px 0">รหัสห้อง
        <input id="mp-room" maxlength="8" placeholder="เช่น A7K9Q2" autocapitalize="characters" style="display:block;width:100%;margin-top:4px;padding:8px;border-radius:7px;background:#080b12;color:#fff;border:1px solid #4d5366;text-transform:uppercase">
      </label>
      <div style="display:flex;gap:6px;margin-top:8px">
        <button id="mp-create" style="flex:1;padding:9px;border:0;border-radius:7px;background:#68529a;color:white">สร้างห้อง</button>
        <button id="mp-join" style="flex:1;padding:9px;border:0;border-radius:7px;background:#344d64;color:white">เข้าห้อง</button>
      </div>
      <div id="mp-status" role="status" style="margin:9px 0;color:#c8c0d9">ยังไม่ได้เชื่อมต่อ</div>
      <button id="mp-leave" style="width:100%;padding:8px;border:1px solid #674f5b;border-radius:7px;background:#281b23;color:#f5d7dc">ออกจากห้อง</button>
      <small style="display:block;margin-top:8px;color:#a8a2b4">ผู้เล่น 2 คน · แชร์รหัสห้องให้เพื่อน · ต้องใช้เซิร์ฟเวอร์ WSS ที่ออนไลน์</small>
    </div>`;
  document.body.appendChild(root);

  const $ = (id) => root.querySelector('#' + id);
  const open = $('mp-open');
  const box = $('mp-box');
  const roomInput = $('mp-room');
  const serverInput = $('mp-server');
  const status = $('mp-status');
  const remoteAvatars = new Map();
  let socket = null;
  let adapter = null;

  open.addEventListener('click', () => {
    box.style.display = box.style.display === 'none' ? 'block' : 'none';
  });

  function setStatus(message, color = '#c8c0d9') {
    status.textContent = message;
    status.style.color = color;
  }

  function disconnect(showMessage = true) {
    session.disconnect();
    if (socket) {
      socket.onclose = null;
      socket.onerror = null;
      try { socket.close(); } catch {}
    }
    socket = null;
    adapter = null;
    for (const avatar of remoteAvatars.values()) scene.remove(avatar);
    remoteAvatars.clear();
    if (showMessage) setStatus('ออกจากห้องแล้ว');
    open.textContent = '👥 เล่นออนไลน์ 2 คน';
  }

  async function connect(room) {
    disconnect(false);
    const url = serverInput.value.trim();
    if (!/^wss:\/\//i.test(url)) {
      setStatus('กรุณาใส่ URL เซิร์ฟเวอร์ที่ขึ้นต้นด้วย wss://', '#ffb6a9');
      return;
    }
    const code = room.trim().toUpperCase();
    if (!/^[A-Z0-9]{4,8}$/.test(code)) {
      setStatus('รหัสห้องต้องมี 4–8 ตัวอักษร/ตัวเลข', '#ffb6a9');
      return;
    }
    setStatus('กำลังเชื่อมต่อเซิร์ฟเวอร์…');
    try {
      socket = new WebSocket(url);
      await new Promise((resolve, reject) => {
        const timeout = setTimeout(() => reject(new Error('หมดเวลารอเซิร์ฟเวอร์')), 12000);
        socket.addEventListener('open', () => { clearTimeout(timeout); resolve(); }, { once: true });
        socket.addEventListener('error', () => { clearTimeout(timeout); reject(new Error('เชื่อมต่อไม่สำเร็จ')); }, { once: true });
      });
      adapter = {
        send(message) {
          if (socket?.readyState === WebSocket.OPEN) socket.send(JSON.stringify(message));
        },
        subscribe(handler) {
          const onMessage = (event) => {
            try {
              const message = JSON.parse(event.data);
              if (message.type === 'error') setStatus(message.message || 'เกิดข้อผิดพลาด', '#ffb6a9');
              else if (message.type === 'joined') setStatus(`เชื่อมต่อแล้ว · ห้อง ${message.roomId} · ${message.playerCount}/2 คน`, '#a8e6bd');
              else handler(message);
            } catch {}
          };
          socket.addEventListener('message', onMessage);
          return () => socket.removeEventListener('message', onMessage);
        }
      };
      const result = session.connect({ room: code, adapter, displayName: $('mp-name').value.trim() || 'ผู้เล่น' });
      if (!result.ok) throw new Error('เริ่มเซสชันไม่สำเร็จ');
      socket.addEventListener('close', () => {
        session.disconnect();
        setStatus('การเชื่อมต่อขาดหาย · กดเข้าห้องอีกครั้ง', '#ffb6a9');
      });
      open.textContent = `👥 ห้อง ${code}`;
      roomInput.value = code;
    } catch (error) {
      disconnect(false);
      setStatus(error.message || 'เชื่อมต่อไม่สำเร็จ', '#ffb6a9');
    }
  }

  $('mp-create').addEventListener('click', () => {
    const code = randomRoomCode();
    roomInput.value = code;
    connect(code);
  });
  $('mp-join').addEventListener('click', () => connect(roomInput.value));
  $('mp-leave').addEventListener('click', () => disconnect());

  function update(now = Date.now()) {
    const local = getLocalSnapshot();
    session.updateLocalSnapshot(local, now);
    const remotes = session.getRemotePlayers(now);
    const present = new Set();

    for (const remote of remotes) {
      present.add(remote.id);
      let avatar = remoteAvatars.get(remote.id);
      if (!avatar) {
        avatar = makeAvatar();
        scene.add(avatar);
        remoteAvatars.set(remote.id, avatar);
      }
      avatar.position.set(remote.position.x, remote.position.y, remote.position.z);
      avatar.rotation.y = remote.yaw;
      avatar.visible = true;
      avatar.userData.body.material.emissiveIntensity = remote.animation === 'attack' ? 0.7 : 0.15;
    }

    for (const [id, avatar] of remoteAvatars) {
      if (!present.has(id)) {
        scene.remove(avatar);
        remoteAvatars.delete(id);
      }
    }
    const state = session.getStatus();
    if (state.connected && !status.textContent.startsWith('เชื่อมต่อแล้ว')) {
      setStatus(`เชื่อมต่อแล้ว · ห้อง ${state.roomId} · ${state.playerCount}/2 คน`, '#a8e6bd');
    } else if (state.connected) {
      status.textContent = `เชื่อมต่อแล้ว · ห้อง ${state.roomId} · ${state.playerCount}/2 คน`;
    }
  }

  return { update, disconnect };
}
