import * as THREE from 'three';
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.js';
import { ShaderPass } from 'three/addons/postprocessing/ShaderPass.js';
import { OutputPass } from 'three/addons/postprocessing/OutputPass.js';

/* Cinematic post-processing + atmosphere layers for The Forgotten Realm.
   Additive module: renders through EffectComposer when enabled, otherwise
   falls back to the plain renderer so gameplay stays lightweight on low tier. */

const GradeShader = {
  uniforms: {
    tDiffuse: { value: null },
    uTime: { value: 0 },
    uVignette: { value: 1.0 },
    uGrain: { value: 1.0 }
  },
  vertexShader: `
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,
  fragmentShader: `
    uniform sampler2D tDiffuse;
    uniform float uTime;
    uniform float uVignette;
    uniform float uGrain;
    varying vec2 vUv;

    float hash(vec2 p) {
      return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453);
    }

    void main() {
      vec4 c = texture2D(tDiffuse, vUv);
      float luma = dot(c.rgb, vec3(0.299, 0.587, 0.114));

      // Cool shadows / warm highlights — cinematic color grade
      vec3 shadowTint = c.rgb * vec3(0.90, 0.97, 1.10);
      vec3 highlightTint = c.rgb * vec3(1.07, 1.00, 0.88);
      c.rgb = mix(shadowTint, highlightTint, smoothstep(0.22, 0.85, luma));

      // Subtle saturation lift
      vec3 gray = vec3(dot(c.rgb, vec3(0.299, 0.587, 0.114)));
      c.rgb = mix(gray, c.rgb, 1.07);

      // Vignette
      float d = distance(vUv, vec2(0.5));
      c.rgb *= 1.0 - smoothstep(0.36, 0.88, d) * 0.36 * uVignette;

      // Animated film grain
      float g = hash(vUv * vec2(1920.0, 1080.0) + fract(uTime) * 17.0) - 0.5;
      c.rgb += g * 0.028 * uGrain;

      gl_FragColor = c;
    }
  `
};

function makeSoftDotTexture() {
  const c = document.createElement('canvas');
  c.width = c.height = 128;
  const g = c.getContext('2d');
  const grad = g.createRadialGradient(64, 64, 0, 64, 64, 64);
  grad.addColorStop(0, 'rgba(255,255,255,0.85)');
  grad.addColorStop(0.45, 'rgba(255,255,255,0.28)');
  grad.addColorStop(1, 'rgba(255,255,255,0)');
  g.fillStyle = grad;
  g.fillRect(0, 0, 128, 128);
  return new THREE.CanvasTexture(c);
}

function makeCloudTexture() {
  const c = document.createElement('canvas');
  c.width = 256; c.height = 128;
  const g = c.getContext('2d');
  for (let i = 0; i < 24; i++) {
    const x = 34 + Math.random() * 188;
    const y = 42 + Math.random() * 46;
    const r = 14 + Math.random() * 26;
    const grad = g.createRadialGradient(x, y, 0, x, y, r);
    grad.addColorStop(0, 'rgba(255,255,255,0.42)');
    grad.addColorStop(1, 'rgba(255,255,255,0)');
    g.fillStyle = grad;
    g.beginPath();
    g.arc(x, y, r, 0, Math.PI * 2);
    g.fill();
  }
  return new THREE.CanvasTexture(c);
}

export function createCinematic({ renderer, scene, camera, touch = false }) {
  const composer = new EffectComposer(renderer);
  const renderPass = new RenderPass(scene, camera);
  const bloom = new UnrealBloomPass(
    new THREE.Vector2(innerWidth, innerHeight),
    0.36, 0.55, 0.84
  );
  const grade = new ShaderPass(GradeShader);
  const output = new OutputPass();
  composer.addPass(renderPass);
  composer.addPass(bloom);
  composer.addPass(grade);
  composer.addPass(output);

  let enabled = true;

  /* ---------- Cloud layer ---------- */
  const cloudTex = makeCloudTexture();
  const clouds = [];
  const cloudCount = touch ? 8 : 16;
  for (let i = 0; i < cloudCount; i++) {
    const mat = new THREE.SpriteMaterial({
      map: cloudTex, transparent: true, opacity: 0.4,
      depthWrite: false, fog: false, color: 0xf4e6d8
    });
    const s = new THREE.Sprite(mat);
    const a = Math.random() * Math.PI * 2;
    const r = 60 + Math.random() * 200;
    s.userData = {
      a, r,
      y: 26 + Math.random() * 30,
      speed: 0.006 + Math.random() * 0.012,
      base: 0.26 + Math.random() * 0.26,
      scale: 46 + Math.random() * 66
    };
    scene.add(s);
    clouds.push(s);
  }

  /* ---------- Ground mist ---------- */
  const mistTex = makeSoftDotTexture();
  const mists = [];
  const mistCount = touch ? 10 : 20;
  for (let i = 0; i < mistCount; i++) {
    const mat = new THREE.SpriteMaterial({
      map: mistTex, transparent: true, opacity: 0.06,
      depthWrite: false, fog: false, color: 0xb9c8dd
    });
    const s = new THREE.Sprite(mat);
    s.userData = {
      ox: (Math.random() - 0.5) * 56,
      oz: (Math.random() - 0.5) * 56,
      oy: 0.7 + Math.random() * 1.8,
      phase: Math.random() * Math.PI * 2,
      scale: 13 + Math.random() * 15
    };
    scene.add(s);
    mists.push(s);
  }

  let flash = 0;

  function update(dt, sun, playerPos) {
    grade.uniforms.uTime.value += dt;

    // Clouds drift slowly; fade slightly at night, warm up near sunrise/sunset
    for (const c of clouds) {
      const u = c.userData;
      u.a += u.speed * dt;
      c.position.set(
        playerPos.x + Math.cos(u.a) * u.r,
        u.y,
        playerPos.z + Math.sin(u.a) * u.r
      );
      c.scale.set(u.scale, u.scale * 0.34, 1);
      const dusk = Math.max(0, 1 - Math.abs(sun - 0.18) * 3.2);
      c.material.opacity = u.base * (0.45 + 0.55 * sun) + dusk * 0.12;
      c.material.color.setHSL(0.08, 0.35 * dusk + 0.05, 0.78 + 0.12 * sun);
    }

    // Mist breathes around the player, thicker after dark
    for (const m of mists) {
      const u = m.userData;
      const t = grade.uniforms.uTime.value;
      m.position.set(
        playerPos.x + u.ox + Math.sin(t * 0.12 + u.phase) * 2.5,
        u.oy,
        playerPos.z + u.oz + Math.cos(t * 0.10 + u.phase) * 2.5
      );
      m.scale.set(u.scale, u.scale * 0.42, 1);
      m.material.opacity = (0.035 + 0.075 * (1 - sun));
    }

    flash = Math.max(0, flash - dt * 2.6);
  }

  return {
    composer,
    bloom,
    getFlash: () => flash,
    strike() { flash = 1; },
    setEnabled(on) { enabled = Boolean(on); },
    setQuality(q) {
      bloom.strength = q === 'high' ? 0.42 : q === 'medium' ? 0.26 : 0.0;
      grade.uniforms.uGrain.value = q === 'low' ? 0.0 : 1.0;
      grade.uniforms.uVignette.value = q === 'low' ? 0.0 : 1.0;
    },
    render() {
      if (enabled) composer.render();
      else renderer.render(scene, camera);
    },
    resize(width, height, ratio) {
      composer.setPixelRatio(ratio);
      composer.setSize(width, height);
      bloom.setSize(width, height);
    },
    update
  };
}
