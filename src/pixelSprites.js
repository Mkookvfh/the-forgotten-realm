import * as THREE from 'three';

export const SPRITE_FRAMES = 4;
export const SPRITE_DIRECTIONS = 4;
export const SPRITE_STATES = ['walk', 'attack', 'hurt', 'death'];

const CELL = 32;
const ROWS = SPRITE_STATES.length * SPRITE_DIRECTIONS;

const BASE_PALETTE = {
  body: '#3a4157',
  light: '#596078',
  dark: '#25283a',
  accent: '#a63d50',
  skin: '#e4b18b',
  hood: '#282638',
  eye: '#ff4d4d',
  boot: '#171923',
  metal: '#c19a55'
};

function drawCharacter(ctx, ox, oy, spec) {
  const {
    kind = 'humanoid', palette = {}, direction = 0, frame = 0,
    state = 'walk', boss = false, variant = ''
  } = spec;

  const p = { ...BASE_PALETTE, ...palette };
  const side = direction === 1 || direction === 3;
  const mirror = direction === 3;
  const collapse = state === 'death' ? frame * 2 : 0;
  const step = state === 'walk' ? (frame === 1 ? -1 : frame === 3 ? 1 : 0) : 0;
  const bob = state === 'walk' && (frame === 1 || frame === 3) ? -1 : 0;
  const attack = state === 'attack';

  ctx.save();
  ctx.translate(ox + (mirror ? CELL : 0), oy);
  if (mirror) ctx.scale(-1, 1);
  ctx.beginPath();
  ctx.rect(0, 0, CELL, CELL);
  ctx.clip();
  ctx.globalAlpha = state === 'death' ? Math.max(0.2, 1 - frame * 0.26) : 1;

  const px = (x, y, w, h, color) => {
    ctx.fillStyle = color;
    ctx.fillRect(x, y + bob + collapse, w, Math.max(1, h - collapse));
  };

  if (kind === 'humanoid') {
    px(9, 14, 14, 11, p.body);
    px(11, 15, 10, 8, p.light);
    px(13, 17, 6, 6, p.accent);
    px(9, 25, 5, 5, p.dark);
    px(18, 25, 5, 5, p.dark);
    px(9 + step, 29, 6, 2, p.boot);
    px(18 - step, 29, 6, 2, p.boot);
    px(7, 16, 4, 8, p.body);
    px(21, 16, 4, 8, p.body);
    px(7, 22, 4, 3, p.skin);
    px(21, 22, 4, 3, p.skin);
    px(10, 4, 12, 4, p.hood);
    px(8, 7, 16, 8, p.hood);
    px(10, 9, 12, 6, p.skin);
    px(7, 7, 5, 5, p.dark);
    px(20, 7, 5, 5, p.dark);

    if (direction === 0) {
      px(11, 11, 3, 2, p.eye);
      px(18, 11, 3, 2, p.eye);
      px(14, 14, 4, 1, p.dark);
    } else if (side) {
      px(18, 11, 3, 2, p.eye);
      px(23, 12, 1, 3, p.skin);
    } else {
      px(10, 9, 12, 7, p.hood);
    }

    if (boss) {
      px(13, 0, 3, 4, p.accent);
      px(16, 1, 3, 5, p.accent);
      px(19, 0, 3, 4, p.accent);
      px(16, 3, 2, 2, p.eye);
    }

    if (variant === 'sage') px(12, 2, 8, 3, p.accent);
    if (variant === 'smith') {
      px(10, 18, 12, 7, '#6d4a2f');
      px(23, 14, 2, 12, '#8a8f99');
    }
    if (variant === 'merchant') {
      px(7, 17, 4, 9, '#3e6c60');
      px(21, 17, 4, 9, '#3e6c60');
    }

    if (attack) {
      px(side ? 23 : 6, 15, 9, 3, p.metal);
      px(side ? 29 : 4, 14, 2, 5, p.light);
    }
  } else if (kind === 'wraith') {
    px(9, 8, 14, 14, p.body);
    px(11, 9, 10, 11, p.light);
    px(8, 6, 16, 5, p.hood);
    px(10, 4, 12, 3, p.dark);
    px(9, 21, 4, frame % 2 ? 4 : 6, p.body);
    px(14, 21, 4, frame % 2 ? 6 : 4, p.dark);
    px(19, 21, 4, frame % 2 ? 5 : 7, p.body);

    if (direction === 0) {
      px(12, 12, 3, 2, p.eye);
      px(18, 12, 3, 2, p.eye);
    } else if (side) {
      px(18, 12, 3, 2, p.eye);
    } else {
      px(10, 9, 12, 6, p.hood);
    }

    if (boss) {
      px(13, 1, 3, 4, p.accent);
      px(16, 0, 3, 5, p.accent);
      px(19, 1, 3, 4, p.accent);
      px(16, 3, 2, 2, p.eye);
    }

    if (attack) px(side ? 22 : 4, 14, 8, 3, p.eye);
  } else if (kind === 'brute') {
    px(7, 13, 18, 14, p.body);
    px(10, 15, 12, 10, p.light);
    px(9, 16, 4, 3, p.accent);
    px(19, 20, 4, 3, p.accent);
    px(9, 26, 5, 4, p.dark);
    px(18, 26, 5, 4, p.dark);
    px(5, 16, 5, 9, p.body);
    px(22, 16, 5, 9, p.body);
    px(11, 7, 10, 6, p.dark);
    px(12, 9, 8, 3, p.light);

    if (direction === 0) {
      px(13, 10, 2, 2, p.eye);
      px(18, 10, 2, 2, p.eye);
    } else if (side) {
      px(18, 10, 3, 2, p.eye);
    }

    if (attack) px(side ? 24 : 3, 15, 8, 5, p.light);
  } else {
    const deer = kind === 'deer';
    px(6, 16, 18, 8, p.body);
    px(9, 18, 11, 4, p.light);
    px(9, 24, 3, 6, p.dark);
    px(18, 24, 3, 6, p.dark);
    px(9 + step, 29, 4, 2, p.boot);
    px(18 - step, 29, 4, 2, p.boot);

    if (side || direction === 0) {
      px(20, 11, 8, 8, p.body);
      px(21, 13, 6, 4, p.light);
      px(19, 10, 3, 3, p.dark);
      px(25, 10, 3, 3, p.dark);
      px(24, 14, 2, 2, p.eye);
      px(27, 16, 4, 2, p.dark);
      if (deer) {
        px(21, 5, 2, 6, p.accent);
        px(23, 4, 2, 7, p.accent);
        px(26, 5, 2, 6, p.accent);
        px(28, 4, 2, 7, p.accent);
      }
    } else {
      px(11, 11, 10, 9, p.body);
      px(13, 14, 6, 4, p.light);
      px(11, 10, 3, 4, p.dark);
      px(18, 10, 3, 4, p.dark);
      px(13, 15, 2, 2, p.eye);
      px(18, 15, 2, 2, p.eye);
      if (deer) {
        px(12, 5, 2, 6, p.accent);
        px(18, 5, 2, 6, p.accent);
      }
    }

    if (direction === 2) px(3, 15, 4, 4, p.dark);
    if (attack) px(side ? 24 : 9, 18, 7, 3, p.boot);
  }

  if (state === 'hurt') {
    ctx.fillStyle = 'rgba(255, 220, 220, 0.55)';
    ctx.fillRect(5, 5, 22, 25);
  }

  ctx.restore();
}

export function createCharacterAtlas(spec) {
  const canvas = document.createElement('canvas');
  canvas.width = CELL * SPRITE_FRAMES;
  canvas.height = CELL * ROWS;

  const ctx = canvas.getContext('2d');

  for (let stateIndex = 0; stateIndex < SPRITE_STATES.length; stateIndex++) {
    for (let direction = 0; direction < SPRITE_DIRECTIONS; direction++) {
      for (let frame = 0; frame < SPRITE_FRAMES; frame++) {
        drawCharacter(
          ctx,
          frame * CELL,
          (stateIndex * SPRITE_DIRECTIONS + direction) * CELL,
          { ...spec, direction, frame, state: SPRITE_STATES[stateIndex] }
        );
      }
    }
  }

  const texture = new THREE.CanvasTexture(canvas);
  texture.magFilter = THREE.NearestFilter;
  texture.minFilter = THREE.NearestFilter;
  texture.generateMipmaps = false;
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.repeat.set(1 / SPRITE_FRAMES, 1 / ROWS);
  return texture;
}

export function createCharacterSprite(texture, width = 1.55, height = 2.05) {
  const spriteTexture = texture.clone();
  spriteTexture.needsUpdate = true;

  const sprite = new THREE.Sprite(new THREE.SpriteMaterial({
    map: spriteTexture,
    transparent: true,
    alphaTest: 0.05,
    depthWrite: false
  }));
  sprite.scale.set(width, height, 1);
  sprite.position.y = height / 2;
  return sprite;
}

export function facingRow(rotationY, yaw = 0) {
  const relative = Math.atan2(
    Math.sin(rotationY - yaw),
    Math.cos(rotationY - yaw)
  );

  if (relative > Math.PI / 4 && relative < Math.PI * 3 / 4) return 1;
  if (relative > -Math.PI * 3 / 4 && relative < -Math.PI / 4) return 3;
  if (Math.abs(relative) >= Math.PI * 3 / 4) return 2;
  return 0;
}

export function setSpriteFrame(sprite, direction, frame, state = 'walk') {
  const row = SPRITE_STATES.indexOf(state) * SPRITE_DIRECTIONS + direction;
  const texture = sprite.material.map;
  texture.offset.set(
    frame / SPRITE_FRAMES,
    (ROWS - 1 - row) / ROWS
  );
}

export function updateCharacterAnimation(data, dt, yaw, rotationY) {
  if (!data.sprite) return;

  data.animTime = (data.animTime || 0) + dt;
  data.hurtTimer = Math.max(0, (data.hurtTimer || 0) - dt);
  data.attackTimer = Math.max(0, (data.attackTimer || 0) - dt);

  let state = 'walk';
  if (data.deathTimer > 0) state = 'death';
  else if (data.hurtTimer > 0) state = 'hurt';
  else if (data.attackTimer > 0) state = 'attack';

  const direction = facingRow(rotationY, yaw);
  data.directionRow = direction;

  const speed = state === 'death' ? 10
    : state === 'hurt' ? 14
      : state === 'attack' ? 12
        : data.moving ? 8 : 0;

  const active = state !== 'walk' || data.moving;
  const frame = active ? Math.floor(data.animTime * speed) % SPRITE_FRAMES : 0;
  setSpriteFrame(data.sprite, direction, frame, state);

  if (state === 'death') {
    const duration = data.deathDuration || 0.55;
    data.sprite.material.opacity = Math.max(0, data.deathTimer / duration);
  } else {
    data.sprite.material.opacity = 1;
  }

  if (data.hurtTimer > 0) {
    data.sprite.material.color.setRGB(1, 0.55, 0.55);
  } else {
    data.sprite.material.color.setHex(data.baseTint || 0xffffff);
  }
}
