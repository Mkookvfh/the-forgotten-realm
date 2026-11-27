/**
 * Lightweight renderer diagnostics for Android/desktop QA.
 * The monitor only reads renderer stats; it does not affect game simulation.
 */
export function createPerformanceMonitor(renderer, { enabled = false } = {}) {
  const panel = document.createElement('aside');
  panel.id = 'performance-monitor';
  panel.setAttribute('aria-live', 'off');
  panel.style.cssText = [
    'position:fixed','z-index:10000','left:8px','top:8px','pointer-events:none',
    'display:none','min-width:168px','padding:8px 10px','border:1px solid #bda16b88',
    'border-radius:8px','background:rgba(5,8,13,.86)','color:#e9dfc9',
    'font:11px/1.55 ui-monospace,monospace','white-space:pre','backdrop-filter:blur(5px)'
  ].join(';');
  document.body.appendChild(panel);

  let visible = Boolean(enabled);
  let lastSample = 0;
  let frameCount = 0;
  let frameTotal = 0;
  let frameMin = Infinity;
  let frameMax = 0;
  let fps = 0;
  let frameMs = 0;
  let lastNow = 0;

  function setEnabled(value) {
    visible = Boolean(value);
    panel.style.display = visible ? 'block' : 'none';
  }

  function update(now, quality = 'medium', fpsLimit = 'auto', adaptiveRatio = 1) {
    if (!visible) return;
    if (lastNow > 0) {
      const delta = now - lastNow;
      if (Number.isFinite(delta) && delta > 0 && delta < 250) {
        frameCount++;
        frameTotal += delta;
        frameMin = Math.min(frameMin, delta);
        frameMax = Math.max(frameMax, delta);
      }
    }
    lastNow = now;
    if (now - lastSample < 500) return;

    if (frameCount > 0) {
      frameMs = frameTotal / frameCount;
      fps = 1000 / frameMs;
    }
    const info = renderer.info;
    const calls = info?.render?.calls ?? 0;
    const triangles = info?.render?.triangles ?? 0;
    const geometries = info?.memory?.geometries ?? 0;
    const textures = info?.memory?.textures ?? 0;
    const canvas = renderer.domElement;
    const width = Math.round(canvas.width / Math.max(.1, renderer.getPixelRatio()));
    const height = Math.round(canvas.height / Math.max(.1, renderer.getPixelRatio()));
    const limit = fpsLimit === 'auto' ? 'Auto' : String(fpsLimit);
    panel.textContent =
      'THE FORGOTTEN REALM · PERF\n' +
      'FPS       ' + fps.toFixed(1) + ' / ' + limit + '\n' +
      'FRAME     ' + frameMs.toFixed(1) + ' ms\n' +
      'MIN / MAX ' + (frameMin === Infinity ? '—' : frameMin.toFixed(1)) + ' / ' + frameMax.toFixed(1) + ' ms\n' +
      'QUALITY   ' + String(quality).toUpperCase() + '\n' +
      'RES       ' + width + ' × ' + height + '\n' +
      'DPR       ' + renderer.getPixelRatio().toFixed(2) + ' (adaptive ' + Number(adaptiveRatio).toFixed(2) + ')\n' +
      'DRAW CALL ' + calls + '\n' +
      'TRIANGLES ' + triangles.toLocaleString() + '\n' +
      'GPU ASSET ' + geometries + ' geo / ' + textures + ' tex';
    lastSample = now;
    frameCount = 0;
    frameTotal = 0;
    frameMin = Infinity;
    frameMax = 0;
  }

  setEnabled(visible);
  return { setEnabled, update, get enabled() { return visible; } };
}
