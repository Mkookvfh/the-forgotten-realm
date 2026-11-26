/* Cinematic prologue for The Forgotten Realm.
   A letterboxed opening sequence with slow camera drift over the world,
   fading title cards and a short knight narration. Skippable. */

export function createPrologue({ onDone }) {
  const root = document.createElement('div');
  root.className = 'prologue';
  root.innerHTML = `
    <div class="prologue-letterbox top"></div>
    <div class="prologue-letterbox bottom"></div>
    <div class="prologue-stage">
      <div class="prologue-card" data-card="0">
        <h1>THE FORGOTTEN REALM</h1>
        <p class="prologue-sub">A KNIGHT'S OATH</p>
      </div>
      <div class="prologue-card" data-card="1">
        <p class="prologue-narration">อาณาจักรตกอยู่ในเงามืด…<br>ในฐานะอัศวินคนสุดท้าย เจ้าต้องจุดไฟแห่งความหวังอีกครั้ง</p>
      </div>
      <div class="prologue-skip">กด Enter / แตะเพื่อข้าม</div>
    </div>
  `;
  document.body.appendChild(root);

  const CARDS = [
    { hold: 2.6, fade: 1.1 },
    { hold: 3.4, fade: 1.1 }
  ];

  let active = false;
  let done = false;
  let cardIndex = 0;
  let elapsed = 0;
  let camAngle = 0;

  function showCard(index) {
    const cards = root.querySelectorAll('.prologue-card');
    cards.forEach((card, i) => card.classList.toggle('active', i === index));
  }

  function finish() {
    if (done) return;
    done = true;
    active = false;
    root.classList.add('prologue-fade-out');
    setTimeout(() => root.remove(), 700);
    if (onDone) onDone();
  }

  function skip() {
    if (active) finish();
  }

  function onKey(e) {
    if (e.code === 'Enter' || e.code === 'Space') skip();
  }

  function start() {
    if (active) return;
    active = true;
    root.classList.add('visible');
    showCard(0);
    root.addEventListener('click', skip);
    window.addEventListener('keydown', onKey);
  }

  function update(dt) {
    if (!active) return;
    camAngle += dt * 0.05;
    elapsed += dt;

    const card = CARDS[cardIndex];
    if (elapsed > card.hold + card.fade) {
      cardIndex += 1;
      if (cardIndex >= CARDS.length) {
        finish();
        return;
      }
      elapsed = 0;
      showCard(cardIndex);
    }
  }

  function applyCamera(camera, center) {
    const radius = 42;
    const height = 16;
    camera.position.set(
      center.x + Math.cos(camAngle) * radius,
      height,
      center.z + Math.sin(camAngle) * radius
    );
    camera.lookAt(center.x, 2, center.z);
  }

  return {
    get active() { return active; },
    start,
    update,
    applyCamera,
    skip
  };
}
