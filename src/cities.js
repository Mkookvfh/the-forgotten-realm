import * as THREE from 'three';

const CITY_DEFS = [
  { id:'ravenhold', name:'ราเวนโฮลด์', x:-45, z:-45, size:1.0, tint:0x6b4b35 },
  { id:'varnhal', name:'วาร์นฮัล', x:160, z:50, size:1.35, tint:0x76634b },
  { id:'ashford', name:'แอชฟอร์ด', x:45, z:-50, size:.9, tint:0x72503b },
  { id:'grimmoor', name:'กริมมัวร์', x:55, z:0, size:.88, tint:0x514b49 },
  { id:'duskvale', name:'ดัสก์เวล', x:42, z:50, size:.9, tint:0x624d3d },
  { id:'blackmere', name:'แบล็กเมียร์', x:-48, z:42, size:.9, tint:0x4d5b5b },
  { id:'thornwick', name:'ธอร์นวิก', x:-150, z:-40, size:.82, tint:0x5d4b39 },
  { id:'wolfden', name:'วูล์ฟเดน', x:50, z:-200, size:.82, tint:0x574638 },
  { id:'mirefall', name:'หมู่บ้านมิเรฟอลล์', x:-50, z:205, size:.82, tint:0x4c5a50 }
];

export function createCityWorld({ scene, getHeight = () => 0, mobile = false }) {
  const root = new THREE.Group();
  root.name = 'ProceduralSettlements';
  scene.add(root);
  const colliders = [];
  const colliderGrid = new Map();
  const colliderCellSize = 12;
  const residents = [];
  const cityRoots = [];
  const dummy = new THREE.Object3D();
  const wood = new THREE.MeshStandardMaterial({ color:0x493326, roughness:.92 });
  const plaster = new THREE.MeshStandardMaterial({ color:0xb49a75, roughness:.95 });
  const stone = new THREE.MeshStandardMaterial({ color:0x625e58, roughness:1 });
  const roofMaterials = [
    new THREE.MeshStandardMaterial({ color:0x4b3030, roughness:.9 }),
    new THREE.MeshStandardMaterial({ color:0x343b43, roughness:.9 }),
    new THREE.MeshStandardMaterial({ color:0x594737, roughness:.9 })
  ];
  const roadMat = new THREE.MeshStandardMaterial({ color:0x39352f, roughness:1 });
  const windowMat = new THREE.MeshStandardMaterial({ color:0xffc76b, emissive:0x7b3e10, emissiveIntensity:.55 });
  const lampMat = new THREE.MeshStandardMaterial({ color:0xffb64d, emissive:0xff6b19, emissiveIntensity:1.4 });
  const npcMats = [
    new THREE.MeshStandardMaterial({color:0x6c8a68,roughness:1}),
    new THREE.MeshStandardMaterial({color:0x8a5945,roughness:1}),
    new THREE.MeshStandardMaterial({color:0x777b9a,roughness:1}),
    new THREE.MeshStandardMaterial({color:0x9b8051,roughness:1})
  ];
  const npcSkin = new THREE.MeshStandardMaterial({color:0xc89b78,roughness:1});
  const npcHair = new THREE.MeshStandardMaterial({color:0x30251f,roughness:1});
  const boxGeo = new THREE.BoxGeometry(1,1,1);

  function groundY(x,z) {
    const h = getHeight(x,z);
    return Number.isFinite(h) ? h : 0;
  }
  function addBox(parent, material, x,y,z, sx,sy,sz, cast=true) {
    const mesh = new THREE.Mesh(boxGeo, material);
    mesh.position.set(x,y,z); mesh.scale.set(sx,sy,sz);
    mesh.castShadow = cast; mesh.receiveShadow = true;
    parent.add(mesh); return mesh;
  }
  function addCollider(x,z,halfX,halfZ) {
    const collider={x,z,halfX,halfZ};
    colliders.push(collider);
    const minX=Math.floor((x-halfX)/colliderCellSize), maxX=Math.floor((x+halfX)/colliderCellSize);
    const minZ=Math.floor((z-halfZ)/colliderCellSize), maxZ=Math.floor((z+halfZ)/colliderCellSize);
    for(let gx=minX;gx<=maxX;gx++) for(let gz=minZ;gz<=maxZ;gz++) {
      const key=gx+':'+gz;
      let cell=colliderGrid.get(key);
      if(!cell) colliderGrid.set(key,cell=new Set());
      cell.add(collider);
    }
  }
  function makeHouse(city, localX, localZ, variant) {
    const scale=city.size;
    const x=city.x+localX*scale, z=city.z+localZ*scale;
    const y=groundY(x,z);
    const w=(variant===0?6.8:5.5)*scale, d=(variant===0?5.8:5.2)*scale;
    const h=(variant===0?5.2:4.5)*scale;
    const group=new THREE.Group(); group.position.set(x,y,z); (city.root || root).add(group);
    const bodyMat=variant===0?plaster:stone;
    addBox(group,bodyMat,0,h/2,0,w,h,d);
    // Timber frame strips, door and warm windows are low-cost meshes.
    for (const side of [-1,1]) {
      addBox(group,wood,side*w*.36,h*.5,d*.5+.035,w*.06,h, .08);
      addBox(group,wood,side*w*.36,h*.5,-d*.5-.035,w*.06,h, .08);
      addBox(group,wood,0,h*.18,side*d*.5,w*.82,.12,.09);
      addBox(group,wood,0,h*.78,side*d*.5,w*.82,.12,.09);
    }
    addBox(group,wood,0,h*.42,d*.5+.08,w*.22,h*.78,.18);
    for (const wx of [-w*.25,w*.25]) {
      addBox(group,windowMat,wx,h*.62,-d*.5-.06,w*.16,.72,.07,false);
      addBox(group,windowMat,wx,h*.62,d*.5+.06,w*.16,.72,.07,false);
    }
    const roofH=2.4*scale;
    const roof=new THREE.Mesh(new THREE.ConeGeometry(w*.78,roofH,4),roofMaterials[variant%roofMaterials.length]);
    roof.position.y=h+roofH*.42; roof.rotation.y=Math.PI/4;
    roof.castShadow=true; roof.receiveShadow=true; group.add(roof);
    addBox(group,wood,0,h+roofH*.62,0,w*.9,.18,.18);
    addCollider(x,z,w*.5+.18,d*.5+.18);
    return group;
  }
  function makeNpc(city,index) {
    const group=new THREE.Group();
    group.name='TownResident';
    const shirt=npcMats[index%npcMats.length];
    const body=new THREE.Mesh(new THREE.CapsuleGeometry(.34,.72,3,6),shirt);
    body.position.y=1.05; body.castShadow=true; group.add(body);
    const head=new THREE.Mesh(new THREE.SphereGeometry(.26,8,6),npcSkin);
    head.position.y=1.72; head.castShadow=true; group.add(head);
    const hair=new THREE.Mesh(new THREE.SphereGeometry(.27,8,5,0,Math.PI*2,0,Math.PI*.55),npcHair);
    hair.position.y=1.83; hair.castShadow=true; group.add(hair);
    const belt=addBox(group,wood,0,.78,0,.48,.12,.38);
    const shadow=new THREE.Mesh(new THREE.CircleGeometry(.42,12),new THREE.MeshBasicMaterial({color:0x000000,transparent:true,opacity:.18,depthWrite:false}));
    shadow.rotation.x=-Math.PI/2; shadow.position.y=.025; group.add(shadow);
    const angle=index*2.4+city.x*.03;
    const radius=city.size*(5.5+index%3*1.4);
    const homeX=city.x+Math.cos(angle)*radius;
    const homeZ=city.z+Math.sin(angle)*radius;
    group.position.set(homeX,groundY(homeX,homeZ),homeZ);
    (city.root || root).add(group);
    residents.push({mesh:group,city,homeX,homeZ,phase:index*1.7,speed:.45+(index%3)*.12,body,goalX:homeX,goalZ:homeZ,wait:1+index%4});
  }
  function makeLamp(city, lx,lz) {
    const x=city.x+lx*city.size,z=city.z+lz*city.size,y=groundY(x,z);
    const group=new THREE.Group(); group.position.set(x,y,z); (city.root || root).add(group);
    addBox(group,wood,0,1.4,0,.22,2.8,.22);
    addBox(group,wood,0,2.65,0,.8,.16,.16);
    const lightBox=addBox(group,lampMat,0,2.35,0,.38,.42,.38,false);
    lightBox.material=lampMat;
    addCollider(x,z,.22,.22);
  }
  for (const city of CITY_DEFS) {
    const cityGroup=new THREE.Group(); cityGroup.name='Town_'+city.id; root.add(cityGroup); city.root=cityGroup; cityRoots.push({group:cityGroup,city});
    const size=city.size;
    // Main road and square intentionally remain open for navigation.
    const roadY=groundY(city.x,city.z)+.035;
    const road=new THREE.Mesh(new THREE.BoxGeometry(13*size,.08,54*size),roadMat);
    road.position.set(city.x,roadY,city.z); road.receiveShadow=true; cityGroup.add(road);
    const cross=new THREE.Mesh(new THREE.BoxGeometry(48*size,.08,10*size),roadMat);
    cross.position.set(city.x,roadY,city.z); cross.receiveShadow=true; cityGroup.add(cross);
    // Four residential blocks; leave a central plaza and clear lanes.
    const placements=[
      [-15,-15],[-15,-7],[-15,7],[-15,15],
      [15,-15],[15,-7],[15,7],[15,15],
      [-7,-20],[7,-20],[-7,20],[7,20]
    ];
    placements.forEach(([lx,lz],i)=>makeHouse(city,lx,lz,i%3));
    // Town hall/inn at the back of the plaza.
    const hallX=city.x, hallZ=city.z-27*size;
    const hallY=groundY(hallX,hallZ);
    const hall=new THREE.Group(); hall.position.set(hallX,hallY,hallZ); cityGroup.add(hall);
    addBox(hall,stone,0,4.2*size,0,12*size,8.4*size,8*size);
    addBox(hall,wood,0,2.2*size,4.08*size,2.2*size,4.4*size,.18*size);
    const hallRoof=new THREE.Mesh(new THREE.ConeGeometry(8.8*size,4.5*size,4),roofMaterials[1]);
    hallRoof.position.y=9.4*size; hallRoof.rotation.y=Math.PI/4; hallRoof.castShadow=true; hall.add(hallRoof);
    addCollider(hallX,hallZ,6.3*size,4.3*size);
    // Market stalls at the plaza edges, no collision in the central walking lane.
    for (let i=0;i<3;i++) {
      const sx=city.x+(i-1)*5.2*size, sz=city.z+12*size;
      const sy=groundY(sx,sz);
      const stall=new THREE.Group(); stall.position.set(sx,sy,sz); cityGroup.add(stall);
      addBox(stall,wood,0,1.25*size,0,3.8*size,2.5*size,2.6*size);
      addBox(stall,roofMaterials[i%3],0,2.75*size,0,4.5*size,.28*size,3.3*size);
      addCollider(sx,sz,2.1*size,1.5*size);
    }
    for (const [lx,lz] of [[-22,-22],[22,-22],[-22,22],[22,22]]) makeLamp(city,lx,lz);
    for (let i=0;i<(mobile?2:3);i++) makeNpc(city,i+residents.length);
  }

  const scratch=new THREE.Vector3();
  return {
    root,
    count: CITY_DEFS.length,
    residentCount: residents.length,
    blocked(x,z,radius=.55) {
      const minX=Math.floor((x-radius)/colliderCellSize), maxX=Math.floor((x+radius)/colliderCellSize);
      const minZ=Math.floor((z-radius)/colliderCellSize), maxZ=Math.floor((z+radius)/colliderCellSize);
      for(let gx=minX;gx<=maxX;gx++) for(let gz=minZ;gz<=maxZ;gz++) {
        const cell=colliderGrid.get(gx+':'+gz);
        if(!cell) continue;
        for(const c of cell) {
          if(Math.abs(x-c.x) > c.halfX+radius || Math.abs(z-c.z) > c.halfZ+radius) continue;
          return true;
        }
      }
      return false;
    },
    update(dt, playerX=0, playerZ=0) {
      const activeRange = mobile ? 155 : 220;
      for (const entry of cityRoots) {
        const dx=entry.city.x-playerX,dz=entry.city.z-playerZ;
        entry.group.visible = dx*dx+dz*dz < activeRange*activeRange;
      }
      for (const npc of residents) {
        if (!npc.city.root.visible) continue;
        npc.wait-=dt;
        const dx=npc.goalX-npc.mesh.position.x,dz=npc.goalZ-npc.mesh.position.z;
        const dist=Math.hypot(dx,dz);
        if (dist<.6 || npc.wait<=0) {
          npc.wait=2.5+((Math.sin(npc.phase*3)+1)*1.5);
          npc.phase+=1.3;
          const a=npc.phase*1.71;
          const radius=npc.city.size*(4.5+(npc.phase%3)*1.8);
          npc.goalX=npc.homeX+Math.cos(a)*radius;
          npc.goalZ=npc.homeZ+Math.sin(a)*radius;
        } else if (dist>.01) {
          const step=Math.min(dist,npc.speed*dt);
          const nx=npc.mesh.position.x+dx/dist*step;
          const nz=npc.mesh.position.z+dz/dist*step;
          if (!this.blocked(nx,nz,.42)) {
            npc.mesh.position.x=nx; npc.mesh.position.z=nz;
            npc.mesh.rotation.y=Math.atan2(dx,dz);
          } else npc.wait=0;
        }
        const y=groundY(npc.mesh.position.x,npc.mesh.position.z);
        npc.mesh.position.y=y;
        const bob=Math.sin(performance.now()*.006+npc.phase)*.025;
        npc.body.position.y=1.05+bob;
      }
    },
    dispose() { scene.remove(root); colliders.length=0; colliderGrid.clear(); residents.length=0; }
  };
}
