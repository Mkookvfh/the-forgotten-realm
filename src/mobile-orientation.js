/**
 * Mobile landscape orientation prompt for THE FORGOTTEN REALM.
 * Requests fullscreen/orientation lock only after a user gesture.
 * Browsers that do not support orientation locking remain usable.
 */
export function installLandscapePrompt() {
  const isMobile =
    matchMedia('(pointer: coarse)').matches ||
    /Android|iPhone|iPad|Mobile/i.test(navigator.userAgent);

  if (!isMobile) return null;

  const overlay = document.createElement('div');
  overlay.id = 'orientation-prompt';
  overlay.innerHTML = `
    <div class="orientation-card">
      <div class="orientation-icon" aria-hidden="true">📱</div>
      <h2>THE FORGOTTEN REALM</h2>
      <p>หมุนอุปกรณ์เป็นแนวนอน</p>
      <p class="orientation-sub">เพื่อประสบการณ์การเล่นที่ดีที่สุด</p>
      <button type="button" id="orientation-button">หมุนจอแนวนอน</button>
    </div>
  `;

  const style = document.createElement('style');
  style.textContent = `
    #orientation-prompt {
      position: fixed;
      inset: 0;
      z-index: 99999;
      display: none;
      align-items: center;
      justify-content: center;
      padding: 20px;
      background: radial-gradient(circle at center, #20243b 0%, #080a12 75%);
      color: #fff;
      font-family: system-ui, sans-serif;
      text-align: center;
    }
    #orientation-prompt.visible { display: flex; }
    .orientation-card {
      width: min(100%, 360px);
      padding: 28px 20px;
      border: 1px solid #7465a8;
      border-radius: 20px;
      background: rgba(15, 17, 31, .95);
      box-shadow: 0 0 35px #57458a55;
    }
    .orientation-icon { font-size: 48px; margin-bottom: 12px; }
    .orientation-card h2 { color: #c9baff; font-size: 20px; letter-spacing: 1px; }
    .orientation-card p { margin: 12px 0; }
    .orientation-sub { color: #aaa8bd; font-size: 13px; }
    #orientation-button {
      margin-top: 16px;
      padding: 14px 20px;
      width: 100%;
      border: 1px solid #a99ae8;
      border-radius: 12px;
      background: #51427e;
      color: white;
      font-size: 15px;
      font-weight: bold;
    }
    #orientation-button:active { transform: scale(.97); }
  `;

  document.head.appendChild(style);
  document.body.appendChild(overlay);

  const button = overlay.querySelector('#orientation-button');

  function update() {
    const portrait = window.innerHeight > window.innerWidth;
    overlay.classList.toggle('visible', portrait);
  }

  async function requestLandscape() {
    try {
      if (document.documentElement.requestFullscreen && !document.fullscreenElement) {
        await document.documentElement.requestFullscreen();
      }
    } catch {
      // Fullscreen may be unavailable or denied by the browser.
    }

    try {
      if (screen.orientation && screen.orientation.lock) {
        await screen.orientation.lock('landscape');
      }
    } catch {
      // Orientation lock is not supported in every browser.
    }

    update();
    window.dispatchEvent(new Event('resize'));
  }

  button.addEventListener('click', requestLandscape);
  window.addEventListener('resize', update);
  window.addEventListener('orientationchange', update);

  if (window.visualViewport) {
    window.visualViewport.addEventListener('resize', update);
  }

  update();

  return {
    requestLandscape,
    update,
    destroy() {
      window.removeEventListener('resize', update);
      window.removeEventListener('orientationchange', update);
      if (window.visualViewport) {
        window.visualViewport.removeEventListener('resize', update);
      }
      overlay.remove();
      style.remove();
    }
  };
}
