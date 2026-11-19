import * as THREE from 'three';
import './style.css';

const mount = document.querySelector('#game');
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x111a25);
scene.fog = new THREE.FogExp2(0x182332, 0.012);

const camera = new THREE.PerspectiveCamera(62, innerWidth / innerHeight, 0.1, 180);
camera.position.set(0, 5, 9);
const renderer = new THREE.WebGLRenderer({ antialias: true, powerPreference: 'high-performance' });
renderer.setPixelRatio(Math.min(devicePixelRatio, 1.6));
renderer.setSize(innerWidth, innerHeight);
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
renderer.outputColorSpace = THREE.SRGBColorSpace;
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1.2;
mount.appendChild(renderer.domElement);

scene.add(new THREE.HemisphereLight(0x9ba9c4, 0x17130f, 1.15));
const moon = new THREE.DirectionalLight(0xc3d5ff, 2.0);
moon.position.set(-18, 28, 12);
moon.castShadow = true;
moon.shadow.mapSize.set(1024, 1024);
moon.shadow.camera.left = -28; moon.shadow.camera.right = 28;
moon.shadow.camera.top = 28; moon.shadow.camera.bottom = -28;
scene.add(moon);

const groundMat = new THREE.MeshStandardMaterial({ color: 0x242a28, roughness: 1 });
const ground = new THREE.Mesh(new THREE.PlaneGeometry(180, 180), groundMat);
ground.rotation.x = -Math.PI / 2; ground.receiveShadow = true; scene.add(ground);

// Low-poly broken stone path
const pathMat = new THREE.MeshStandardMaterial({ color: 0x373a3a, roughness: 1 });
for (let i = 0; i < 18; i++) {
  const slab = new THREE.Mesh(new THREE.BoxGeometry(2.2, 0.12, 1.5), pathMat);
  slab.position.set(Math.sin(i * .32) * 1.4, .04, -i * 3.1);
  slab.rotation.y = Math.sin(i) * .12;
  slab.receiveShadow = true; slab.castShadow = true; scene.add(slab);
}

const trunkMat = new THREE.MeshStandardMaterial({ color: 0x211d1b, roughness: 1 });
const leafMat = new THREE.MeshStandardMaterial({ color: 0x182522, roughness: 1 });
function makeTree(x, z, scale=1) {
  const group = new THREE.Group();
  const trunk = new THREE.Mesh(new THREE.CylinderGeometry(.18*scale,.32*scale,3.2*scale,6), trunkMat);
  trunk.position.y=1.6*scale; trunk.castShadow=true; group.add(trunk);
  for(let j=0;j<3;j++){
    const crown = new THREE.Mesh(new THREE.ConeGeometry((1.25-j*.18)*scale,2.4*scale,7),leafMat);
    crown.position.set((j-1)*.28*scale, (3.1+j*.55)*scale, 0);
    crown.rotation.z=(j-1)*.12; crown.castShadow=true; group.add(crown);
  }
  group.position.set(x,0,z); scene.add(group);
}
for(let i=0;i<64;i++){
  const z=8-(i*2.9);
  makeTree(-7-Math.random()*9,z,0.7+Math.random()*.8);
  makeTree(7+Math.random()*9,z-1.2,0.7+Math.random()*.9);
}

// Distant ruined tower landmark
const stone = new THREE.MeshStandardMaterial({color:0x444448,roughness:1});
const tower = new THREE.Group();
const base = new THREE.Mesh(new THREE.CylinderGeometry(2.2,2.7,8,8),stone);
base.position.y=4;base.castShadow=true;tower.add(base);
const brokenTop = new THREE.Mesh(new THREE.ConeGeometry(2.1,2.8,8),new THREE.MeshStandardMaterial({color:0x242631}));
brokenTop.position.y=9.1;tower.add(brokenTop);
tower.position.set(0,0,-48);scene.add(tower);

// Player placeholder
const player = new THREE.Group();
const bodyMat = new THREE.MeshStandardMaterial({color:0x292b35,roughness:.8});
const body = new THREE.Mesh(new THREE.CapsuleGeometry(.42,.9,4,8),bodyMat);
body.position.y=1.05;body.castShadow=true;player.add(body);
const hood = new THREE.Mesh(new THREE.SphereGeometry(.38,8,7),new THREE.MeshStandardMaterial({color:0x11131b}));
hood.position.set(0,1.85,-.04);hood.castShadow=true;player.add(hood);
const cloak = new THREE.Mesh(new THREE.ConeGeometry(.58,1.2,7),new THREE.MeshStandardMaterial({color:0x171923,side:THREE.DoubleSide}));
cloak.position.set(0,.75,.16);cloak.rotation.x=Math.PI;player.add(cloak);
player.position.set(0,0,3);scene.add(player);

const keys = {};
addEventListener('keydown',e=>{keys[e.code]=true;});
addEventListener('keyup',e=>{keys[e.code]=false;});
const input={x:0,y:0,run:false,jump:false};
const stickZone=document.querySelector('#stick-zone'), stick=document.querySelector('#stick');
let pointerId=null;
stickZone.addEventListener('pointerdown',e=>{pointerId=e.pointerId;stickZone.setPointerCapture(pointerId);updateStick(e);});
stickZone.addEventListener('pointermove',e=>{if(e.pointerId===pointerId)updateStick(e);});
function resetStick(){pointerId=null;input.x=0;input.y=0;stick.style.transform='translate(0,0)';}
stickZone.addEventListener('pointerup',resetStick);stickZone.addEventListener('pointercancel',resetStick);
function updateStick(e){const r=stickZone.getBoundingClientRect(),cx=r.left+r.width/2,cy=r.top+r.height/2;let dx=e.clientX-cx,dy=e.clientY-cy;const len=Math.hypot(dx,dy),max=34;if(len>max){dx=dx/len*max;dy=dy/len*max;}input.x=dx/max;input.y=dy/max;stick.style.transform=`translate(${dx}px,${dy}px)`;}
const jumpBtn=document.querySelector('#jump'),runBtn=document.querySelector('#run');
jumpBtn.addEventListener('pointerdown',()=>input.jump=true);
jumpBtn.addEventListener('pointerup',()=>input.jump=false);
jumpBtn.addEventListener('pointercancel',()=>input.jump=false);
runBtn.addEventListener('pointerdown',()=>input.run=true);
runBtn.addEventListener('pointerup',()=>input.run=false);
runBtn.addEventListener('pointercancel',()=>input.run=false);

let verticalVelocity=0, grounded=true;
const clock=new THREE.Clock();
function animate(){
  requestAnimationFrame(animate);
  const dt=Math.min(clock.getDelta(),.04);
  let x=input.x, z=input.y;
  if(keys.KeyA||keys.ArrowLeft)x-=1;
  if(keys.KeyD||keys.ArrowRight)x+=1;
  if(keys.KeyW||keys.ArrowUp)z-=1;
  if(keys.KeyS||keys.ArrowDown)z+=1;
  const moving=Math.hypot(x,z)>.08;
  if(moving){
    const len=Math.hypot(x,z);x/=len;z/=len;
    const speed=(input.run||keys.ShiftLeft||keys.ShiftRight)?8.2:4.2;
    player.position.x+=x*speed*dt;
    player.position.z+=z*speed*dt;
    player.rotation.y=Math.atan2(x,z)+Math.PI;
    body.rotation.z=Math.sin(performance.now()*.012)*.045;
  }
  if((input.jump||keys.Space)&&grounded){verticalVelocity=7;grounded=false;}
  verticalVelocity-=18*dt;player.position.y+=verticalVelocity*dt;
  if(player.position.y<0){player.position.y=0;verticalVelocity=0;grounded=true;}
  player.position.x=THREE.MathUtils.clamp(player.position.x,-32,32);
  player.position.z=THREE.MathUtils.clamp(player.position.z,-80,12);

  const desired=new THREE.Vector3(player.position.x,player.position.y+4.3,player.position.z+8.5);
  camera.position.lerp(desired,1-Math.pow(.001,dt));
  camera.lookAt(player.position.x,player.position.y+1.2,player.position.z-1.5);
  renderer.render(scene,camera);
}
animate();

addEventListener('resize',()=>{
  camera.aspect=innerWidth/innerHeight;camera.updateProjectionMatrix();
  renderer.setSize(innerWidth,innerHeight);
  renderer.setPixelRatio(Math.min(devicePixelRatio,1.6));
});
