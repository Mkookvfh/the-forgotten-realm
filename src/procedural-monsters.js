import * as THREE from 'three';

// Lightweight original procedural 3D enemy models. No external textures or downloads.
const mat = (color, roughness=.82, metalness=0) =>
  new THREE.MeshStandardMaterial({ color, roughness, metalness, flatShading:true });
const M = {
  bark:mat(0x4a3328), moss:mat(0x557c45), leaf:mat(0x2e7047),
  bone:mat(0xd7d0b8), dark:mat(0x252b35), steel:mat(0x687b8b,.42,.55),
  leather:mat(0x543b2a), red:mat(0x9e3c32), gold:mat(0xd5aa48,.4,.55),
  cyan:mat(0x66dff5,.3,.2), violet:mat(0x8b5be0,.35,.15),
  skin:mat(0x9b7057), eye:mat(0xff5d42,.25), white:mat(0xf0f5ff)
};
function mesh(geo, material, parent, pos=[0,0,0], scale=null) {
  const o=new THREE.Mesh(geo,material); o.position.set(...pos);
  if(scale)o.scale.set(...scale); o.castShadow=true; o.receiveShadow=true; parent.add(o); return o;
}
function sphere(parent,material,pos,scale) {
  return mesh(new THREE.SphereGeometry(1,10,8),material,parent,pos,scale);
}
function limb(parent,material,a,b,r1,r2=r1) {
  const A=new THREE.Vector3(...a), B=new THREE.Vector3(...b), d=B.clone().sub(A);
  const o=mesh(new THREE.CylinderGeometry(r2,r1,d.length(),7),material,parent,A.clone().add(B).multiplyScalar(.5).toArray());
  o.quaternion.setFromUnitVectors(new THREE.Vector3(0,1,0),d.normalize()); return o;
}
function humanoid(root,type) {
  const boss=type==='warlord'||type==='boss'||type==='dungeonBoss';
  const revenant=type==='revenant';
  const armor=revenant?M.steel:M.leather, accent=revenant?M.cyan:(boss?M.gold:M.red);
  sphere(root,armor,[0,1.05,0],[.38,.52,.24]);
  sphere(root,M.skin,[0,1.72,0],[.23,.25,.22]);
  mesh(new THREE.ConeGeometry(.29,.42,7),revenant?M.dark:M.leather,root,[0,1.88,0]);
  sphere(root,accent,[0,1.69,-.19],[.15,.055,.045]);
  for(const x of [-.1,.1]) sphere(root,M.eye,[x,1.72,-.21],[.035,.025,.025]);
  sphere(root,accent,[0,1.18,-.24],[.16,.16,.045]);
  limb(root,armor,[-.34,1.38,0],[-.58,.92,0],.13,.09);
  limb(root,armor,[.34,1.38,0],[.58,.92,0],.13,.09);
  sphere(root,accent,[-.58,.9,0],[.13,.13,.13]); sphere(root,accent,[.58,.9,0],[.13,.13,.13]);
  limb(root,M.dark,[-.18,.72,0],[-.22,.18,0],.14,.1);
  limb(root,M.dark,[.18,.72,0],[.22,.18,0],.14,.1);
  sphere(root,M.steel,[0,.55,-.23],[.23,.18,.08]);
  if(boss){
    mesh(new THREE.ConeGeometry(.11,.42,6),M.gold,root,[-.25,2.02,0]);
    mesh(new THREE.ConeGeometry(.11,.42,6),M.gold,root,[.25,2.02,0]);
    sphere(root,M.gold,[0,2.02,0],[.12,.09,.12]);
  }
  if(type==='raider'){
    limb(root,M.steel,[.58,.9,0],[.85,.58,-.1],.07,.045);
    mesh(new THREE.BoxGeometry(.12,.52,.08),M.steel,root,[.91,.42,-.1]);
  }
  if(revenant){
    mesh(new THREE.ConeGeometry(.38,.55,7),M.dark,root,[0,1.35,.18]);
    sphere(root,M.cyan,[0,1.7,-.23],[.08,.045,.025]);
  }
}
function beast(root,type) {
  const deer=type==='deer';
  const fur=deer?M.moss:M.bark;
  sphere(root,fur,[0,.68,0],[deer?.35:.42,.32,.68]);
  sphere(root,fur,[0,.82,-.55],[.27,.26,.3]);
  limb(root,fur,[-.25,.55,-.38],[-.28,.12,-.4],.09,.055);
  limb(root,fur,[.25,.55,-.38],[.28,.12,-.4],.09,.055);
  limb(root,fur,[-.25,.55,.38],[-.28,.12,.4],.09,.055);
  limb(root,fur,[.25,.55,.38],[.28,.12,.4],.09,.055);
  sphere(root,M.eye,[-.12,.88,-.78],[.04,.04,.025]); sphere(root,M.eye,[.12,.88,-.78],[.04,.04,.025]);
  if(deer){
    limb(root,M.bone,[-.12,1.02,-.63],[-.2,1.42,-.65],.035,.025);
    limb(root,M.bone,[-.2,1.42,-.65],[-.34,1.5,-.62],.025,.015);
    limb(root,M.bone,[.12,1.02,-.63],[.2,1.42,-.65],.035,.025);
    limb(root,M.bone,[.2,1.42,-.65],[.34,1.5,-.62],.025,.015);
  } else {
    sphere(root,M.bone,[0,.48,.7],[.1,.1,.24]);
    mesh(new THREE.ConeGeometry(.13,.32,6),M.bone,root,[0,.75,-.83],[-1,1,1]);
  }
}
function wraith(root) {
  sphere(root,M.violet,[0,1.3,0],[.35,.48,.25]);
  mesh(new THREE.ConeGeometry(.38,1.0,8),M.dark,root,[0,.55,.05]);
  sphere(root,M.dark,[0,1.78,0],[.25,.26,.22]);
  sphere(root,M.cyan,[-.1,1.8,-.2],[.05,.035,.025]); sphere(root,M.cyan,[.1,1.8,-.2],[.05,.035,.025]);
  limb(root,M.violet,[-.3,1.48,0],[-.62,1.0,-.05],.12,.06);
  limb(root,M.violet,[.3,1.48,0],[.62,1.0,-.05],.12,.06);
}
function brute(root,type) {
  sphere(root,M.bark,[0,1.0,0],[.58,.62,.42]);
  sphere(root,M.dark,[0,1.72,-.03],[.38,.34,.32]);
  sphere(root,M.red,[0,1.62,-.32],[.22,.1,.06]);
  for(const x of [-.18,.18]) sphere(root,M.eye,[x,1.78,-.32],[.055,.045,.035]);
  limb(root,M.bark,[-.45,1.35,0],[-.75,.78,-.05],.22,.16);
  limb(root,M.bark,[.45,1.35,0],[.75,.78,-.05],.22,.16);
  limb(root,M.dark,[-.25,.55,0],[-.3,.12,0],.19,.13);
  limb(root,M.dark,[.25,.55,0],[.3,.12,0],.19,.13);
  if(type==='guardian'||type==='boss'||type==='dungeonBoss'){
    sphere(root,M.steel,[0,1.1,-.38],[.4,.42,.12]);
    mesh(new THREE.ConeGeometry(.16,.5,6),M.gold,root,[-.42,1.8,0]);
    mesh(new THREE.ConeGeometry(.16,.5,6),M.gold,root,[.42,1.8,0]);
  }
}
export function createProceduralMonster(type) {
  const root=new THREE.Group();
  if(type==='wolf'||type==='deer') beast(root,type);
  else if(type==='wraith') wraith(root);
  else if(type==='brute'||type==='guardian'||type==='boss'||type==='dungeonBoss') brute(root,type);
  else humanoid(root,type);
  root.traverse(o=>{ if(o.isMesh){o.castShadow=true;o.receiveShadow=true;} });
  root.userData.procedural3D=true;
  return root;
}
