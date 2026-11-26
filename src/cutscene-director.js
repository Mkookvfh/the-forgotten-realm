import * as THREE from 'three';

/**
 * Lightweight scripted camera sequence. The game update is paused while active;
 * the normal renderer and HUD continue to run. Skippable on touch and desktop.
 */
export function createCutsceneDirector({ camera, player, mount }) {
  let active = false;
  let elapsed = 0;
  let duration = 5.2;
  let target = new THREE.Vector3();
  let startCamera = new THREE.Vector3();
  let startTarget = new THREE.Vector3();
  let titleText = '';
  let onComplete = null;
  const up = new THREE.Vector3(0,1,0);

  const overlay = document.createElement('div');
  overlay.className = 'fr-cutscene-overlay';
  overlay.innerHTML = '<div class="fr-cutscene-title"></div><button type="button" class="fr-cutscene-skip">ข้ามฉาก (แตะเพื่อข้าม)</button>';
  Object.assign(overlay.style, {
    position:'fixed', inset:'0', zIndex:'10000', display:'none',
    pointerEvents:'none', color:'#f6e6c6', fontFamily:'serif',
    background:'linear-gradient(180deg,rgba(0,0,0,.5),transparent 32%,transparent 65%,rgba(0,0,0,.55))'
  });
  const title=overlay.querySelector('.fr-cutscene-title');
  Object.assign(title.style,{position:'absolute',left:'7%',right:'7%',top:'15%',textAlign:'center',fontSize:'clamp(22px,4vw,42px)',letterSpacing:'.08em',textShadow:'0 3px 12px #000',fontWeight:'bold'});
  const skip=overlay.querySelector('.fr-cutscene-skip');
  Object.assign(skip.style,{position:'absolute',right:'20px',bottom:'calc(24px + env(safe-area-inset-bottom))',pointerEvents:'auto',padding:'12px 18px',border:'1px solid #b99a62',borderRadius:'24px',background:'rgba(22,16,12,.82)',color:'#f6e6c6',fontSize:'14px'});
  mount.appendChild(overlay);

  function finish() {
    if (!active) return;
    active=false;
    overlay.style.display='none';
    camera.position.copy(startCamera);
    camera.lookAt(startTarget);
    const callback=onComplete;
    onComplete=null;
    callback?.();
  }
  skip.addEventListener('click',finish);
  overlay.addEventListener('pointerdown',e=>{ if(e.target===overlay) finish(); });

  function play({ title:caption='เหตุการณ์สำคัญ', target:focus, duration:seconds=5.2, onDone }={}) {
    if (active) finish();
    target.copy(focus || player.position);
    elapsed=0; duration=Math.max(2,seconds);
    titleText=caption; onComplete=onDone || null;
    startCamera.copy(camera.position);
    startTarget.copy(target);
    // The opening shot begins behind and above the player, facing the scene.
    const forward=new THREE.Vector3(Math.sin(player.rotation.y),0,Math.cos(player.rotation.y));
    camera.position.copy(player.position).addScaledVector(forward,-7).add(new THREE.Vector3(0,3.6,0));
    camera.lookAt(target);
    startCamera.copy(camera.position);
    startTarget.copy(target);
    title.textContent=titleText;
    overlay.style.display='block';
    active=true;
  }

  function update(dt) {
    if (!active) return;
    elapsed+=dt;
    const t=Math.min(1,elapsed/duration);
    const smooth=t*t*(3-2*t);
    const forward=new THREE.Vector3(Math.sin(player.rotation.y),0,Math.cos(player.rotation.y));
    const side=new THREE.Vector3(forward.z,0,-forward.x);
    const shotA=player.position.clone().addScaledVector(forward,-7).add(new THREE.Vector3(0,3.6,0));
    const shotB=target.clone().addScaledVector(side,6.5).addScaledVector(forward,3.5).add(new THREE.Vector3(0,2.4,0));
    const shotC=target.clone().addScaledVector(forward,-5.5).add(new THREE.Vector3(0,2.1,0));
    let desired;
    if(t<.42) desired=shotA.lerp(shotB,THREE.MathUtils.smoothstep(t,0,.42));
    else desired=shotB.lerp(shotC,THREE.MathUtils.smoothstep(t,.42,1));
    camera.position.lerp(desired,Math.min(1,dt*3.2));
    const look=target.clone().add(new THREE.Vector3(0,1.2,0));
    camera.lookAt(look);
    if(elapsed>=duration) finish();
  }
  return { play, update, finish, get active(){return active;} };
}
