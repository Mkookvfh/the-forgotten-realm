/**
 * Mobile adaptive resolution controller.
 * Keeps cinematic post-processing enabled while scaling the render resolution
 * when GPU frame time becomes heavy. Does not change game simulation speed.
 */
export function createAdaptiveResolution({ enabled = true } = {}) {
  let previousTime = 0;
  let sampleStart = 0;
  let samples = 0;
  let totalFrameMs = 0;
  let slowWindows = 0;
  let fastWindows = 0;
  let ratio = 1;
  let initialized = false;

  function capForQuality(quality) {
    const dpr = Math.max(1, window.devicePixelRatio || 1);
    if (quality === 'high') return Math.min(dpr, 1.25);
    if (quality === 'medium') return 1;
    return 1;
  }

  function update(now, quality, fpsLimit, renderer, cinematic) {
    if (!enabled || !('ontouchstart' in window || navigator.maxTouchPoints > 0) || quality === 'low') return;
    const cap = capForQuality(quality);
    if (!initialized) {
      ratio = Math.min(renderer.getPixelRatio(), cap);
      initialized = true;
      previousTime = now;
      sampleStart = now;
      return;
    }

    const frameMs = now - previousTime;
    previousTime = now;
    if (!Number.isFinite(frameMs) || frameMs <= 0 || frameMs > 250) return;
    totalFrameMs += frameMs;
    samples++;
    if (now - sampleStart < 2200 || samples < 25) return;

    const average = totalFrameMs / samples;
    const requestedFps = Number(fpsLimit);
    const targetMs = requestedFps > 0
      ? Math.max(1000 / 60, 1000 / requestedFps) * 1.22
      : 20.5;

    if (average > targetMs) {
      slowWindows++;
      fastWindows = 0;
    } else if (average < targetMs * 0.72) {
      fastWindows++;
      slowWindows = 0;
    } else {
      slowWindows = 0;
      fastWindows = 0;
    }

    let next = ratio;
    if (slowWindows >= 2) {
      next = Math.max(0.65, ratio - 0.10);
      slowWindows = 0;
    } else if (fastWindows >= 3) {
      next = Math.min(cap, ratio + 0.04);
      fastWindows = 0;
    }

    totalFrameMs = 0;
    samples = 0;
    sampleStart = now;
    if (Math.abs(next - ratio) < 0.01) return;

    ratio = next;
    renderer.setPixelRatio(ratio);
    renderer.setSize(window.innerWidth, window.innerHeight, false);
    cinematic.resize(window.innerWidth, window.innerHeight, ratio);
  }

  function reset(renderer, quality) {
    initialized = false;
    previousTime = 0;
    sampleStart = 0;
    samples = 0;
    totalFrameMs = 0;
    slowWindows = 0;
    fastWindows = 0;
    ratio = Math.min(renderer.getPixelRatio(), capForQuality(quality));
  }

  return { update, reset, get ratio() { return ratio; } };
}
