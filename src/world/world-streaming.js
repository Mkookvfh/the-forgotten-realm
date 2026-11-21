import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { chunkKey } from './world-config.js';

export function getStreamingRadius(quality = 'medium', isTouch = false, cameraFar = 220, chunkSize = 60) {
  const budget = quality === 'low' ? 1 : quality === 'high' ? 3 : 2;
  const visible = Math.max(1, Math.floor(cameraFar * (isTouch ? .62 : .8) / chunkSize));
  return Math.max(1, Math.min(budget, visible));
}

export class ChunkAssetLoader {
  constructor({ baseUrl = 'assets/world/chunks/', enabled = false, maxParallel = 2 } = {}) {
    this.baseUrl = baseUrl;
    this.enabled = enabled;
    this.maxParallel = maxParallel;
    this.loader = new GLTFLoader();
    this.cache = new Map();
    this.tasks = [];
    this.active = 0;
  }

  load(cx, cz, zone) {
    if (!this.enabled) return Promise.resolve(null);
    const key = chunkKey(cx, cz);
    if (this.cache.has(key)) return this.cache.get(key);

    const url = `${import.meta.env.BASE_URL}${this.baseUrl}${zone.id}/chunk_${cx}_${cz}.glb`;
    const promise = this.enqueue(() => this.loader.loadAsync(url)).then(gltf => {
      if (!gltf || !gltf.scene) return null;
      gltf.scene.traverse(object => {
        if (!object.isMesh) return;
        object.castShadow = true;
        object.receiveShadow = true;
        object.userData.chunkAsset = true;
      });
      return gltf.scene;
    }).catch(() => null);

    this.cache.set(key, promise);
    return promise;
  }

  clearFailed() {
    for (const [key, promise] of this.cache) {
      if (!promise) continue;
      promise.then(value => { if (!value) this.cache.delete(key); });
    }
  }

  enqueue(task) {
    return new Promise((resolve, reject) => {
      this.tasks.push({ task, resolve, reject });
      this.pump();
    });
  }

  pump() {
    while (this.active < this.maxParallel && this.tasks.length > 0) {
      const { task, resolve, reject } = this.tasks.shift();
      this.active += 1;
      Promise.resolve().then(task).then(resolve, reject).then(() => {
        this.active -= 1;
        this.pump();
      });
    }
  }
}
