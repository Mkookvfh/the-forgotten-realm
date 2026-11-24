(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();const du="180",jp=0,gh=1,Zp=2,cf=1,lf=2,Ni=3,Gi=0,An=1,Un=2,Hi=0,xr=1,Ds=2,_h=3,vh=4,Jp=5,Rs=100,Qp=101,em=102,tm=103,nm=104,im=200,sm=201,rm=202,om=203,ul=204,hl=205,am=206,cm=207,lm=208,um=209,hm=210,dm=211,fm=212,pm=213,mm=214,dl=0,fl=1,pl=2,Er=3,ml=4,gl=5,_l=6,vl=7,uf=0,gm=1,_m=2,os=0,hf=1,df=2,ff=3,fu=4,pf=5,mf=6,gf=7,xh="attached",vm="detached",_f=300,wr=301,Ar=302,xl=303,yl=304,Ya=306,Rr=1e3,rs=1001,Ia=1002,Qt=1003,vf=1004,ao=1005,Fn=1006,Ta=1007,ki=1008,_i=1009,xf=1010,yf=1011,vo=1012,pu=1013,Is=1014,ii=1015,gi=1016,mu=1017,gu=1018,xo=1020,Mf=35902,Sf=35899,bf=1021,Tf=1022,qn=1023,yo=1026,Mo=1027,_u=1028,vu=1029,Ef=1030,xu=1031,yu=1033,Ea=33776,wa=33777,Aa=33778,Ra=33779,Ml=35840,Sl=35841,bl=35842,Tl=35843,El=36196,wl=37492,Al=37496,Rl=37808,Cl=37809,Pl=37810,Ll=37811,Dl=37812,Il=37813,Nl=37814,Ul=37815,Fl=37816,Ol=37817,kl=37818,Bl=37819,zl=37820,Hl=37821,Vl=36492,Gl=36494,Wl=36495,Xl=36283,ql=36284,$l=36285,Yl=36286,So=2300,bo=2301,_c=2302,yh=2400,Mh=2401,Sh=2402,xm=2500,ym=0,wf=1,Kl=2,Mm=3200,Sm=3201,Af=0,bm=1,ss="",Yt="srgb",xn="srgb-linear",Na="linear",Rt="srgb",Ws=7680,bh=519,Tm=512,Em=513,wm=514,Rf=515,Am=516,Rm=517,Cm=518,Pm=519,jl=35044,Th="300 es",mi=2e3,Ua=2001;class Or{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const s=n[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}}const gn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Eh=1234567;const uo=Math.PI/180,Cr=180/Math.PI;function si(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(gn[i&255]+gn[i>>8&255]+gn[i>>16&255]+gn[i>>24&255]+"-"+gn[e&255]+gn[e>>8&255]+"-"+gn[e>>16&15|64]+gn[e>>24&255]+"-"+gn[t&63|128]+gn[t>>8&255]+"-"+gn[t>>16&255]+gn[t>>24&255]+gn[n&255]+gn[n>>8&255]+gn[n>>16&255]+gn[n>>24&255]).toLowerCase()}function ot(i,e,t){return Math.max(e,Math.min(t,i))}function Mu(i,e){return(i%e+e)%e}function Lm(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function Dm(i,e,t){return i!==e?(t-i)/(e-i):0}function ho(i,e,t){return(1-t)*i+t*e}function Im(i,e,t,n){return ho(i,e,1-Math.exp(-t*n))}function Nm(i,e=1){return e-Math.abs(Mu(i,e*2)-e)}function Um(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function Fm(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function Om(i,e){return i+Math.floor(Math.random()*(e-i+1))}function km(i,e){return i+Math.random()*(e-i)}function Bm(i){return i*(.5-Math.random())}function zm(i){i!==void 0&&(Eh=i);let e=Eh+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Hm(i){return i*uo}function Vm(i){return i*Cr}function Gm(i){return(i&i-1)===0&&i!==0}function Wm(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Xm(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function qm(i,e,t,n,s){const r=Math.cos,o=Math.sin,a=r(t/2),c=o(t/2),l=r((e+n)/2),h=o((e+n)/2),u=r((e-n)/2),d=o((e-n)/2),f=r((n-e)/2),g=o((n-e)/2);switch(s){case"XYX":i.set(a*h,c*u,c*d,a*l);break;case"YZY":i.set(c*d,a*h,c*u,a*l);break;case"ZXZ":i.set(c*u,c*d,a*h,a*l);break;case"XZX":i.set(a*h,c*g,c*f,a*l);break;case"YXY":i.set(c*f,a*h,c*g,a*l);break;case"ZYZ":i.set(c*g,c*f,a*h,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function ni(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Ct(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const Pt={DEG2RAD:uo,RAD2DEG:Cr,generateUUID:si,clamp:ot,euclideanModulo:Mu,mapLinear:Lm,inverseLerp:Dm,lerp:ho,damp:Im,pingpong:Nm,smoothstep:Um,smootherstep:Fm,randInt:Om,randFloat:km,randFloatSpread:Bm,seededRandom:zm,degToRad:Hm,radToDeg:Vm,isPowerOfTwo:Gm,ceilPowerOfTwo:Wm,floorPowerOfTwo:Xm,setQuaternionFromProperEuler:qm,normalize:Ct,denormalize:ni};class xe{constructor(e=0,t=0){xe.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=ot(this.x,e.x,t.x),this.y=ot(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=ot(this.x,e,t),this.y=ot(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ot(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(ot(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*s+e.x,this.y=r*s+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class us{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,o,a){let c=n[s+0],l=n[s+1],h=n[s+2],u=n[s+3];const d=r[o+0],f=r[o+1],g=r[o+2],y=r[o+3];if(a===0){e[t+0]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u;return}if(a===1){e[t+0]=d,e[t+1]=f,e[t+2]=g,e[t+3]=y;return}if(u!==y||c!==d||l!==f||h!==g){let m=1-a;const p=c*d+l*f+h*g+u*y,x=p>=0?1:-1,b=1-p*p;if(b>Number.EPSILON){const R=Math.sqrt(b),C=Math.atan2(R,p*x);m=Math.sin(m*C)/R,a=Math.sin(a*C)/R}const M=a*x;if(c=c*m+d*M,l=l*m+f*M,h=h*m+g*M,u=u*m+y*M,m===1-a){const R=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=R,l*=R,h*=R,u*=R}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,s,r,o){const a=n[s],c=n[s+1],l=n[s+2],h=n[s+3],u=r[o],d=r[o+1],f=r[o+2],g=r[o+3];return e[t]=a*g+h*u+c*f-l*d,e[t+1]=c*g+h*d+l*u-a*f,e[t+2]=l*g+h*f+a*d-c*u,e[t+3]=h*g-a*u-c*d-l*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(n/2),h=a(s/2),u=a(r/2),d=c(n/2),f=c(s/2),g=c(r/2);switch(o){case"XYZ":this._x=d*h*u+l*f*g,this._y=l*f*u-d*h*g,this._z=l*h*g+d*f*u,this._w=l*h*u-d*f*g;break;case"YXZ":this._x=d*h*u+l*f*g,this._y=l*f*u-d*h*g,this._z=l*h*g-d*f*u,this._w=l*h*u+d*f*g;break;case"ZXY":this._x=d*h*u-l*f*g,this._y=l*f*u+d*h*g,this._z=l*h*g+d*f*u,this._w=l*h*u-d*f*g;break;case"ZYX":this._x=d*h*u-l*f*g,this._y=l*f*u+d*h*g,this._z=l*h*g-d*f*u,this._w=l*h*u+d*f*g;break;case"YZX":this._x=d*h*u+l*f*g,this._y=l*f*u+d*h*g,this._z=l*h*g-d*f*u,this._w=l*h*u-d*f*g;break;case"XZY":this._x=d*h*u-l*f*g,this._y=l*f*u-d*h*g,this._z=l*h*g+d*f*u,this._w=l*h*u+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],s=t[4],r=t[8],o=t[1],a=t[5],c=t[9],l=t[2],h=t[6],u=t[10],d=n+a+u;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-c)*f,this._y=(r-l)*f,this._z=(o-s)*f}else if(n>a&&n>u){const f=2*Math.sqrt(1+n-a-u);this._w=(h-c)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+l)/f}else if(a>u){const f=2*Math.sqrt(1+a-n-u);this._w=(r-l)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(c+h)/f}else{const f=2*Math.sqrt(1+u-n-a);this._w=(o-s)/f,this._x=(r+l)/f,this._y=(c+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ot(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,s=e._y,r=e._z,o=e._w,a=t._x,c=t._y,l=t._z,h=t._w;return this._x=n*h+o*a+s*l-r*c,this._y=s*h+o*c+r*a-n*l,this._z=r*h+o*l+n*c-s*a,this._w=o*h-n*a-s*c-r*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,s=this._y,r=this._z,o=this._w;let a=o*e._w+n*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;const c=1-a*a;if(c<=Number.EPSILON){const f=1-t;return this._w=f*o+t*this._w,this._x=f*n+t*this._x,this._y=f*s+t*this._y,this._z=f*r+t*this._z,this.normalize(),this}const l=Math.sqrt(c),h=Math.atan2(l,a),u=Math.sin((1-t)*h)/l,d=Math.sin(t*h)/l;return this._w=o*u+this._w*d,this._x=n*u+this._x*d,this._y=s*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class U{constructor(e=0,t=0,n=0){U.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(wh.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(wh.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,s=this.z,r=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*s-a*n),h=2*(a*t-r*s),u=2*(r*n-o*t);return this.x=t+c*l+o*u-a*h,this.y=n+c*h+a*l-r*u,this.z=s+c*u+r*h-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=ot(this.x,e.x,t.x),this.y=ot(this.y,e.y,t.y),this.z=ot(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=ot(this.x,e,t),this.y=ot(this.y,e,t),this.z=ot(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ot(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,s=e.y,r=e.z,o=t.x,a=t.y,c=t.z;return this.x=s*c-r*a,this.y=r*o-n*c,this.z=n*a-s*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return vc.copy(this).projectOnVector(e),this.sub(vc)}reflect(e){return this.sub(vc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(ot(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const vc=new U,wh=new us;class st{constructor(e,t,n,s,r,o,a,c,l){st.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,c,l)}set(e,t,n,s,r,o,a,c,l){const h=this.elements;return h[0]=e,h[1]=s,h[2]=a,h[3]=t,h[4]=r,h[5]=c,h[6]=n,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],h=n[4],u=n[7],d=n[2],f=n[5],g=n[8],y=s[0],m=s[3],p=s[6],x=s[1],b=s[4],M=s[7],R=s[2],C=s[5],w=s[8];return r[0]=o*y+a*x+c*R,r[3]=o*m+a*b+c*C,r[6]=o*p+a*M+c*w,r[1]=l*y+h*x+u*R,r[4]=l*m+h*b+u*C,r[7]=l*p+h*M+u*w,r[2]=d*y+f*x+g*R,r[5]=d*m+f*b+g*C,r[8]=d*p+f*M+g*w,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8];return t*o*h-t*a*l-n*r*h+n*a*c+s*r*l-s*o*c}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],u=h*o-a*l,d=a*c-h*r,f=l*r-o*c,g=t*u+n*d+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const y=1/g;return e[0]=u*y,e[1]=(s*l-h*n)*y,e[2]=(a*n-s*o)*y,e[3]=d*y,e[4]=(h*t-s*c)*y,e[5]=(s*r-a*t)*y,e[6]=f*y,e[7]=(n*c-l*t)*y,e[8]=(o*t-n*r)*y,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,o,a){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+e,-s*l,s*c,-s*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(xc.makeScale(e,t)),this}rotate(e){return this.premultiply(xc.makeRotation(-e)),this}translate(e,t){return this.premultiply(xc.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const xc=new st;function Cf(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function To(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function $m(){const i=To("canvas");return i.style.display="block",i}const Ah={};function Eo(i){i in Ah||(Ah[i]=!0,console.warn(i))}function Ym(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}const Rh=new st().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ch=new st().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Km(){const i={enabled:!0,workingColorSpace:xn,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===Rt&&(s.r=Vi(s.r),s.g=Vi(s.g),s.b=Vi(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===Rt&&(s.r=yr(s.r),s.g=yr(s.g),s.b=yr(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===ss?Na:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Eo("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Eo("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[xn]:{primaries:e,whitePoint:n,transfer:Na,toXYZ:Rh,fromXYZ:Ch,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Yt},outputColorSpaceConfig:{drawingBufferColorSpace:Yt}},[Yt]:{primaries:e,whitePoint:n,transfer:Rt,toXYZ:Rh,fromXYZ:Ch,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Yt}}}),i}const pt=Km();function Vi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function yr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Xs;class jm{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Xs===void 0&&(Xs=To("canvas")),Xs.width=e.width,Xs.height=e.height;const s=Xs.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=Xs}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=To("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Vi(r[o]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Vi(t[n]/255)*255):t[n]=Vi(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Zm=0;class Su{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Zm++}),this.uuid=si(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(yc(s[o].image)):r.push(yc(s[o]))}else r=yc(s);n.url=r}return t||(e.images[this.uuid]=n),n}}function yc(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?jm.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Jm=0;const Mc=new U;class en extends Or{constructor(e=en.DEFAULT_IMAGE,t=en.DEFAULT_MAPPING,n=rs,s=rs,r=Fn,o=ki,a=qn,c=_i,l=en.DEFAULT_ANISOTROPY,h=ss){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Jm++}),this.uuid=si(),this.name="",this.source=new Su(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new xe(0,0),this.repeat=new xe(1,1),this.center=new xe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new st,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Mc).x}get height(){return this.source.getSize(Mc).y}get depth(){return this.source.getSize(Mc).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==_f)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Rr:e.x=e.x-Math.floor(e.x);break;case rs:e.x=e.x<0?0:1;break;case Ia:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Rr:e.y=e.y-Math.floor(e.y);break;case rs:e.y=e.y<0?0:1;break;case Ia:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}en.DEFAULT_IMAGE=null;en.DEFAULT_MAPPING=_f;en.DEFAULT_ANISOTROPY=1;class Mt{constructor(e=0,t=0,n=0,s=1){Mt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r;const c=e.elements,l=c[0],h=c[4],u=c[8],d=c[1],f=c[5],g=c[9],y=c[2],m=c[6],p=c[10];if(Math.abs(h-d)<.01&&Math.abs(u-y)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+y)<.1&&Math.abs(g+m)<.1&&Math.abs(l+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const b=(l+1)/2,M=(f+1)/2,R=(p+1)/2,C=(h+d)/4,w=(u+y)/4,L=(g+m)/4;return b>M&&b>R?b<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(b),s=C/n,r=w/n):M>R?M<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(M),n=C/s,r=L/s):R<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(R),n=w/r,s=L/r),this.set(n,s,r,t),this}let x=Math.sqrt((m-g)*(m-g)+(u-y)*(u-y)+(d-h)*(d-h));return Math.abs(x)<.001&&(x=1),this.x=(m-g)/x,this.y=(u-y)/x,this.z=(d-h)/x,this.w=Math.acos((l+f+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=ot(this.x,e.x,t.x),this.y=ot(this.y,e.y,t.y),this.z=ot(this.z,e.z,t.z),this.w=ot(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=ot(this.x,e,t),this.y=ot(this.y,e,t),this.z=ot(this.z,e,t),this.w=ot(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ot(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Qm extends Or{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Fn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Mt(0,0,e,t),this.scissorTest=!1,this.viewport=new Mt(0,0,e,t);const s={width:e,height:t,depth:n.depth},r=new en(s);this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){const t={minFilter:Fn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isArrayTexture=this.textures[s].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const s=Object.assign({},e.textures[t].image);this.textures[t].source=new Su(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class $n extends Qm{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Pf extends en{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Qt,this.minFilter=Qt,this.wrapR=rs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class eg extends en{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Qt,this.minFilter=Qt,this.wrapR=rs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Wi{constructor(e=new U(1/0,1/0,1/0),t=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Qn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Qn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Qn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Qn):Qn.fromBufferAttribute(r,o),Qn.applyMatrix4(e.matrixWorld),this.expandByPoint(Qn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Vo.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Vo.copy(n.boundingBox)),Vo.applyMatrix4(e.matrixWorld),this.union(Vo)}const s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Qn),Qn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter($r),Go.subVectors(this.max,$r),qs.subVectors(e.a,$r),$s.subVectors(e.b,$r),Ys.subVectors(e.c,$r),Zi.subVectors($s,qs),Ji.subVectors(Ys,$s),fs.subVectors(qs,Ys);let t=[0,-Zi.z,Zi.y,0,-Ji.z,Ji.y,0,-fs.z,fs.y,Zi.z,0,-Zi.x,Ji.z,0,-Ji.x,fs.z,0,-fs.x,-Zi.y,Zi.x,0,-Ji.y,Ji.x,0,-fs.y,fs.x,0];return!Sc(t,qs,$s,Ys,Go)||(t=[1,0,0,0,1,0,0,0,1],!Sc(t,qs,$s,Ys,Go))?!1:(Wo.crossVectors(Zi,Ji),t=[Wo.x,Wo.y,Wo.z],Sc(t,qs,$s,Ys,Go))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Qn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Qn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ri[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ri[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ri[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ri[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ri[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ri[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ri[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ri[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ri),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Ri=[new U,new U,new U,new U,new U,new U,new U,new U],Qn=new U,Vo=new Wi,qs=new U,$s=new U,Ys=new U,Zi=new U,Ji=new U,fs=new U,$r=new U,Go=new U,Wo=new U,ps=new U;function Sc(i,e,t,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){ps.fromArray(i,r);const a=s.x*Math.abs(ps.x)+s.y*Math.abs(ps.y)+s.z*Math.abs(ps.z),c=e.dot(ps),l=t.dot(ps),h=n.dot(ps);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}const tg=new Wi,Yr=new U,bc=new U;class bi{constructor(e=new U,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):tg.setFromPoints(e).getCenter(n);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Yr.subVectors(e,this.center);const t=Yr.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(Yr,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(bc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Yr.copy(e.center).add(bc)),this.expandByPoint(Yr.copy(e.center).sub(bc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const Ci=new U,Tc=new U,Xo=new U,Qi=new U,Ec=new U,qo=new U,wc=new U;class Ka{constructor(e=new U,t=new U(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ci)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Ci.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ci.copy(this.origin).addScaledVector(this.direction,t),Ci.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){Tc.copy(e).add(t).multiplyScalar(.5),Xo.copy(t).sub(e).normalize(),Qi.copy(this.origin).sub(Tc);const r=e.distanceTo(t)*.5,o=-this.direction.dot(Xo),a=Qi.dot(this.direction),c=-Qi.dot(Xo),l=Qi.lengthSq(),h=Math.abs(1-o*o);let u,d,f,g;if(h>0)if(u=o*c-a,d=o*a-c,g=r*h,u>=0)if(d>=-g)if(d<=g){const y=1/h;u*=y,d*=y,f=u*(u+o*d+2*a)+d*(o*u+d+2*c)+l}else d=r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*c)+l;else d=-r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*c)+l;else d<=-g?(u=Math.max(0,-(-o*r+a)),d=u>0?-r:Math.min(Math.max(-r,-c),r),f=-u*u+d*(d+2*c)+l):d<=g?(u=0,d=Math.min(Math.max(-r,-c),r),f=d*(d+2*c)+l):(u=Math.max(0,-(o*r+a)),d=u>0?r:Math.min(Math.max(-r,-c),r),f=-u*u+d*(d+2*c)+l);else d=o>0?-r:r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Tc).addScaledVector(Xo,d),f}intersectSphere(e,t){Ci.subVectors(e.center,this.origin);const n=Ci.dot(this.direction),s=Ci.dot(Ci)-n*n,r=e.radius*e.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,o,a,c;const l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return l>=0?(n=(e.min.x-d.x)*l,s=(e.max.x-d.x)*l):(n=(e.max.x-d.x)*l,s=(e.min.x-d.x)*l),h>=0?(r=(e.min.y-d.y)*h,o=(e.max.y-d.y)*h):(r=(e.max.y-d.y)*h,o=(e.min.y-d.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(e.min.z-d.z)*u,c=(e.max.z-d.z)*u):(a=(e.max.z-d.z)*u,c=(e.min.z-d.z)*u),n>c||a>s)||((a>n||n!==n)&&(n=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,Ci)!==null}intersectTriangle(e,t,n,s,r){Ec.subVectors(t,e),qo.subVectors(n,e),wc.crossVectors(Ec,qo);let o=this.direction.dot(wc),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Qi.subVectors(this.origin,e);const c=a*this.direction.dot(qo.crossVectors(Qi,qo));if(c<0)return null;const l=a*this.direction.dot(Ec.cross(Qi));if(l<0||c+l>o)return null;const h=-a*Qi.dot(wc);return h<0?null:this.at(h/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class tt{constructor(e,t,n,s,r,o,a,c,l,h,u,d,f,g,y,m){tt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,c,l,h,u,d,f,g,y,m)}set(e,t,n,s,r,o,a,c,l,h,u,d,f,g,y,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=c,p[2]=l,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=g,p[11]=y,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new tt().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,s=1/Ks.setFromMatrixColumn(e,0).length(),r=1/Ks.setFromMatrixColumn(e,1).length(),o=1/Ks.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,s=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){const d=o*h,f=o*u,g=a*h,y=a*u;t[0]=c*h,t[4]=-c*u,t[8]=l,t[1]=f+g*l,t[5]=d-y*l,t[9]=-a*c,t[2]=y-d*l,t[6]=g+f*l,t[10]=o*c}else if(e.order==="YXZ"){const d=c*h,f=c*u,g=l*h,y=l*u;t[0]=d+y*a,t[4]=g*a-f,t[8]=o*l,t[1]=o*u,t[5]=o*h,t[9]=-a,t[2]=f*a-g,t[6]=y+d*a,t[10]=o*c}else if(e.order==="ZXY"){const d=c*h,f=c*u,g=l*h,y=l*u;t[0]=d-y*a,t[4]=-o*u,t[8]=g+f*a,t[1]=f+g*a,t[5]=o*h,t[9]=y-d*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){const d=o*h,f=o*u,g=a*h,y=a*u;t[0]=c*h,t[4]=g*l-f,t[8]=d*l+y,t[1]=c*u,t[5]=y*l+d,t[9]=f*l-g,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){const d=o*c,f=o*l,g=a*c,y=a*l;t[0]=c*h,t[4]=y-d*u,t[8]=g*u+f,t[1]=u,t[5]=o*h,t[9]=-a*h,t[2]=-l*h,t[6]=f*u+g,t[10]=d-y*u}else if(e.order==="XZY"){const d=o*c,f=o*l,g=a*c,y=a*l;t[0]=c*h,t[4]=-u,t[8]=l*h,t[1]=d*u+y,t[5]=o*h,t[9]=f*u-g,t[2]=g*u-f,t[6]=a*h,t[10]=y*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(ng,e,ig)}lookAt(e,t,n){const s=this.elements;return In.subVectors(e,t),In.lengthSq()===0&&(In.z=1),In.normalize(),es.crossVectors(n,In),es.lengthSq()===0&&(Math.abs(n.z)===1?In.x+=1e-4:In.z+=1e-4,In.normalize(),es.crossVectors(n,In)),es.normalize(),$o.crossVectors(In,es),s[0]=es.x,s[4]=$o.x,s[8]=In.x,s[1]=es.y,s[5]=$o.y,s[9]=In.y,s[2]=es.z,s[6]=$o.z,s[10]=In.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],h=n[1],u=n[5],d=n[9],f=n[13],g=n[2],y=n[6],m=n[10],p=n[14],x=n[3],b=n[7],M=n[11],R=n[15],C=s[0],w=s[4],L=s[8],S=s[12],E=s[1],I=s[5],k=s[9],z=s[13],Y=s[2],$=s[6],j=s[10],Q=s[14],K=s[3],me=s[7],ve=s[11],De=s[15];return r[0]=o*C+a*E+c*Y+l*K,r[4]=o*w+a*I+c*$+l*me,r[8]=o*L+a*k+c*j+l*ve,r[12]=o*S+a*z+c*Q+l*De,r[1]=h*C+u*E+d*Y+f*K,r[5]=h*w+u*I+d*$+f*me,r[9]=h*L+u*k+d*j+f*ve,r[13]=h*S+u*z+d*Q+f*De,r[2]=g*C+y*E+m*Y+p*K,r[6]=g*w+y*I+m*$+p*me,r[10]=g*L+y*k+m*j+p*ve,r[14]=g*S+y*z+m*Q+p*De,r[3]=x*C+b*E+M*Y+R*K,r[7]=x*w+b*I+M*$+R*me,r[11]=x*L+b*k+M*j+R*ve,r[15]=x*S+b*z+M*Q+R*De,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],o=e[1],a=e[5],c=e[9],l=e[13],h=e[2],u=e[6],d=e[10],f=e[14],g=e[3],y=e[7],m=e[11],p=e[15];return g*(+r*c*u-s*l*u-r*a*d+n*l*d+s*a*f-n*c*f)+y*(+t*c*f-t*l*d+r*o*d-s*o*f+s*l*h-r*c*h)+m*(+t*l*u-t*a*f-r*o*u+n*o*f+r*a*h-n*l*h)+p*(-s*a*h-t*c*u+t*a*d+s*o*u-n*o*d+n*c*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],u=e[9],d=e[10],f=e[11],g=e[12],y=e[13],m=e[14],p=e[15],x=u*m*l-y*d*l+y*c*f-a*m*f-u*c*p+a*d*p,b=g*d*l-h*m*l-g*c*f+o*m*f+h*c*p-o*d*p,M=h*y*l-g*u*l+g*a*f-o*y*f-h*a*p+o*u*p,R=g*u*c-h*y*c-g*a*d+o*y*d+h*a*m-o*u*m,C=t*x+n*b+s*M+r*R;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const w=1/C;return e[0]=x*w,e[1]=(y*d*r-u*m*r-y*s*f+n*m*f+u*s*p-n*d*p)*w,e[2]=(a*m*r-y*c*r+y*s*l-n*m*l-a*s*p+n*c*p)*w,e[3]=(u*c*r-a*d*r-u*s*l+n*d*l+a*s*f-n*c*f)*w,e[4]=b*w,e[5]=(h*m*r-g*d*r+g*s*f-t*m*f-h*s*p+t*d*p)*w,e[6]=(g*c*r-o*m*r-g*s*l+t*m*l+o*s*p-t*c*p)*w,e[7]=(o*d*r-h*c*r+h*s*l-t*d*l-o*s*f+t*c*f)*w,e[8]=M*w,e[9]=(g*u*r-h*y*r-g*n*f+t*y*f+h*n*p-t*u*p)*w,e[10]=(o*y*r-g*a*r+g*n*l-t*y*l-o*n*p+t*a*p)*w,e[11]=(h*a*r-o*u*r-h*n*l+t*u*l+o*n*f-t*a*f)*w,e[12]=R*w,e[13]=(h*y*s-g*u*s+g*n*d-t*y*d-h*n*m+t*u*m)*w,e[14]=(g*a*s-o*y*s-g*n*c+t*y*c+o*n*m-t*a*m)*w,e[15]=(o*u*s-h*a*s+h*n*c-t*u*c-o*n*d+t*a*d)*w,this}scale(e){const t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),s=Math.sin(t),r=1-n,o=e.x,a=e.y,c=e.z,l=r*o,h=r*a;return this.set(l*o+n,l*a-s*c,l*c+s*a,0,l*a+s*c,h*a+n,h*c-s*o,0,l*c-s*a,h*c+s*o,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,o){return this.set(1,n,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){const s=this.elements,r=t._x,o=t._y,a=t._z,c=t._w,l=r+r,h=o+o,u=a+a,d=r*l,f=r*h,g=r*u,y=o*h,m=o*u,p=a*u,x=c*l,b=c*h,M=c*u,R=n.x,C=n.y,w=n.z;return s[0]=(1-(y+p))*R,s[1]=(f+M)*R,s[2]=(g-b)*R,s[3]=0,s[4]=(f-M)*C,s[5]=(1-(d+p))*C,s[6]=(m+x)*C,s[7]=0,s[8]=(g+b)*w,s[9]=(m-x)*w,s[10]=(1-(d+y))*w,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){const s=this.elements;let r=Ks.set(s[0],s[1],s[2]).length();const o=Ks.set(s[4],s[5],s[6]).length(),a=Ks.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],ei.copy(this);const l=1/r,h=1/o,u=1/a;return ei.elements[0]*=l,ei.elements[1]*=l,ei.elements[2]*=l,ei.elements[4]*=h,ei.elements[5]*=h,ei.elements[6]*=h,ei.elements[8]*=u,ei.elements[9]*=u,ei.elements[10]*=u,t.setFromRotationMatrix(ei),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,s,r,o,a=mi,c=!1){const l=this.elements,h=2*r/(t-e),u=2*r/(n-s),d=(t+e)/(t-e),f=(n+s)/(n-s);let g,y;if(c)g=r/(o-r),y=o*r/(o-r);else if(a===mi)g=-(o+r)/(o-r),y=-2*o*r/(o-r);else if(a===Ua)g=-o/(o-r),y=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=h,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=u,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=y,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,s,r,o,a=mi,c=!1){const l=this.elements,h=2/(t-e),u=2/(n-s),d=-(t+e)/(t-e),f=-(n+s)/(n-s);let g,y;if(c)g=1/(o-r),y=o/(o-r);else if(a===mi)g=-2/(o-r),y=-(o+r)/(o-r);else if(a===Ua)g=-1/(o-r),y=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=h,l[4]=0,l[8]=0,l[12]=d,l[1]=0,l[5]=u,l[9]=0,l[13]=f,l[2]=0,l[6]=0,l[10]=g,l[14]=y,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Ks=new U,ei=new tt,ng=new U(0,0,0),ig=new U(1,1,1),es=new U,$o=new U,In=new U,Ph=new tt,Lh=new us;class vi{constructor(e=0,t=0,n=0,s=vi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const s=e.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],h=s[9],u=s[2],d=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(ot(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-ot(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(ot(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-ot(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(ot(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-ot(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Ph.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Ph,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Lh.setFromEuler(this),this.setFromQuaternion(Lh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}vi.DEFAULT_ORDER="XYZ";class Lf{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let sg=0;const Dh=new U,js=new us,Pi=new tt,Yo=new U,Kr=new U,rg=new U,og=new us,Ih=new U(1,0,0),Nh=new U(0,1,0),Uh=new U(0,0,1),Fh={type:"added"},ag={type:"removed"},Zs={type:"childadded",child:null},Ac={type:"childremoved",child:null};class It extends Or{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:sg++}),this.uuid=si(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=It.DEFAULT_UP.clone();const e=new U,t=new vi,n=new us,s=new U(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new tt},normalMatrix:{value:new st}}),this.matrix=new tt,this.matrixWorld=new tt,this.matrixAutoUpdate=It.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=It.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Lf,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return js.setFromAxisAngle(e,t),this.quaternion.multiply(js),this}rotateOnWorldAxis(e,t){return js.setFromAxisAngle(e,t),this.quaternion.premultiply(js),this}rotateX(e){return this.rotateOnAxis(Ih,e)}rotateY(e){return this.rotateOnAxis(Nh,e)}rotateZ(e){return this.rotateOnAxis(Uh,e)}translateOnAxis(e,t){return Dh.copy(e).applyQuaternion(this.quaternion),this.position.add(Dh.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Ih,e)}translateY(e){return this.translateOnAxis(Nh,e)}translateZ(e){return this.translateOnAxis(Uh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Pi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Yo.copy(e):Yo.set(e,t,n);const s=this.parent;this.updateWorldMatrix(!0,!1),Kr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Pi.lookAt(Kr,Yo,this.up):Pi.lookAt(Yo,Kr,this.up),this.quaternion.setFromRotationMatrix(Pi),s&&(Pi.extractRotation(s.matrixWorld),js.setFromRotationMatrix(Pi),this.quaternion.premultiply(js.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Fh),Zs.child=e,this.dispatchEvent(Zs),Zs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(ag),Ac.child=e,this.dispatchEvent(Ac),Ac.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Pi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Pi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Pi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Fh),Zs.child=e,this.dispatchEvent(Zs),Zs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Kr,e,rg),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Kr,og,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const u=c[l];r(e.shapes,u)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(e.materials,this.material[c]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];s.animations.push(r(e.animations,c))}}if(t){const a=o(e.geometries),c=o(e.materials),l=o(e.textures),h=o(e.images),u=o(e.shapes),d=o(e.skeletons),f=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){const c=[];for(const l in a){const h=a[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const s=e.children[n];this.add(s.clone())}return this}}It.DEFAULT_UP=new U(0,1,0);It.DEFAULT_MATRIX_AUTO_UPDATE=!0;It.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const ti=new U,Li=new U,Rc=new U,Di=new U,Js=new U,Qs=new U,Oh=new U,Cc=new U,Pc=new U,Lc=new U,Dc=new Mt,Ic=new Mt,Nc=new Mt;class Gn{constructor(e=new U,t=new U,n=new U){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),ti.subVectors(e,t),s.cross(ti);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){ti.subVectors(s,t),Li.subVectors(n,t),Rc.subVectors(e,t);const o=ti.dot(ti),a=ti.dot(Li),c=ti.dot(Rc),l=Li.dot(Li),h=Li.dot(Rc),u=o*l-a*a;if(u===0)return r.set(0,0,0),null;const d=1/u,f=(l*c-a*h)*d,g=(o*h-a*c)*d;return r.set(1-f-g,g,f)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,Di)===null?!1:Di.x>=0&&Di.y>=0&&Di.x+Di.y<=1}static getInterpolation(e,t,n,s,r,o,a,c){return this.getBarycoord(e,t,n,s,Di)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Di.x),c.addScaledVector(o,Di.y),c.addScaledVector(a,Di.z),c)}static getInterpolatedAttribute(e,t,n,s,r,o){return Dc.setScalar(0),Ic.setScalar(0),Nc.setScalar(0),Dc.fromBufferAttribute(e,t),Ic.fromBufferAttribute(e,n),Nc.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(Dc,r.x),o.addScaledVector(Ic,r.y),o.addScaledVector(Nc,r.z),o}static isFrontFacing(e,t,n,s){return ti.subVectors(n,t),Li.subVectors(e,t),ti.cross(Li).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ti.subVectors(this.c,this.b),Li.subVectors(this.a,this.b),ti.cross(Li).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Gn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Gn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return Gn.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return Gn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Gn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,s=this.b,r=this.c;let o,a;Js.subVectors(s,n),Qs.subVectors(r,n),Cc.subVectors(e,n);const c=Js.dot(Cc),l=Qs.dot(Cc);if(c<=0&&l<=0)return t.copy(n);Pc.subVectors(e,s);const h=Js.dot(Pc),u=Qs.dot(Pc);if(h>=0&&u<=h)return t.copy(s);const d=c*u-h*l;if(d<=0&&c>=0&&h<=0)return o=c/(c-h),t.copy(n).addScaledVector(Js,o);Lc.subVectors(e,r);const f=Js.dot(Lc),g=Qs.dot(Lc);if(g>=0&&f<=g)return t.copy(r);const y=f*l-c*g;if(y<=0&&l>=0&&g<=0)return a=l/(l-g),t.copy(n).addScaledVector(Qs,a);const m=h*g-f*u;if(m<=0&&u-h>=0&&f-g>=0)return Oh.subVectors(r,s),a=(u-h)/(u-h+(f-g)),t.copy(s).addScaledVector(Oh,a);const p=1/(m+y+d);return o=y*p,a=d*p,t.copy(n).addScaledVector(Js,o).addScaledVector(Qs,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Df={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ts={h:0,s:0,l:0},Ko={h:0,s:0,l:0};function Uc(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class ze{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Yt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,pt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=pt.workingColorSpace){return this.r=e,this.g=t,this.b=n,pt.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=pt.workingColorSpace){if(e=Mu(e,1),t=ot(t,0,1),n=ot(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=Uc(o,r,e+1/3),this.g=Uc(o,r,e),this.b=Uc(o,r,e-1/3)}return pt.colorSpaceToWorking(this,s),this}setStyle(e,t=Yt){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Yt){const n=Df[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Vi(e.r),this.g=Vi(e.g),this.b=Vi(e.b),this}copyLinearToSRGB(e){return this.r=yr(e.r),this.g=yr(e.g),this.b=yr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Yt){return pt.workingToColorSpace(_n.copy(this),e),Math.round(ot(_n.r*255,0,255))*65536+Math.round(ot(_n.g*255,0,255))*256+Math.round(ot(_n.b*255,0,255))}getHexString(e=Yt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=pt.workingColorSpace){pt.workingToColorSpace(_n.copy(this),t);const n=_n.r,s=_n.g,r=_n.b,o=Math.max(n,s,r),a=Math.min(n,s,r);let c,l;const h=(a+o)/2;if(a===o)c=0,l=0;else{const u=o-a;switch(l=h<=.5?u/(o+a):u/(2-o-a),o){case n:c=(s-r)/u+(s<r?6:0);break;case s:c=(r-n)/u+2;break;case r:c=(n-s)/u+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=pt.workingColorSpace){return pt.workingToColorSpace(_n.copy(this),t),e.r=_n.r,e.g=_n.g,e.b=_n.b,e}getStyle(e=Yt){pt.workingToColorSpace(_n.copy(this),e);const t=_n.r,n=_n.g,s=_n.b;return e!==Yt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(ts),this.setHSL(ts.h+e,ts.s+t,ts.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(ts),e.getHSL(Ko);const n=ho(ts.h,Ko.h,t),s=ho(ts.s,Ko.s,t),r=ho(ts.l,Ko.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const _n=new ze;ze.NAMES=Df;let cg=0;class ri extends Or{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:cg++}),this.uuid=si(),this.name="",this.type="Material",this.blending=xr,this.side=Gi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ul,this.blendDst=hl,this.blendEquation=Rs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ze(0,0,0),this.blendAlpha=0,this.depthFunc=Er,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=bh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ws,this.stencilZFail=Ws,this.stencilZPass=Ws,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==xr&&(n.blending=this.blending),this.side!==Gi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==ul&&(n.blendSrc=this.blendSrc),this.blendDst!==hl&&(n.blendDst=this.blendDst),this.blendEquation!==Rs&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Er&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==bh&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ws&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Ws&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Ws&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const o=[];for(const a in r){const c=r[a];delete c.metadata,o.push(c)}return o}if(t){const r=s(e.textures),o=s(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class cn extends ri{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ze(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new vi,this.combine=uf,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Zt=new U,jo=new xe;let lg=0;class ln{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:lg++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=jl,this.updateRanges=[],this.gpuType=ii,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)jo.fromBufferAttribute(this,t),jo.applyMatrix3(e),this.setXY(t,jo.x,jo.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Zt.fromBufferAttribute(this,t),Zt.applyMatrix3(e),this.setXYZ(t,Zt.x,Zt.y,Zt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Zt.fromBufferAttribute(this,t),Zt.applyMatrix4(e),this.setXYZ(t,Zt.x,Zt.y,Zt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Zt.fromBufferAttribute(this,t),Zt.applyNormalMatrix(e),this.setXYZ(t,Zt.x,Zt.y,Zt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Zt.fromBufferAttribute(this,t),Zt.transformDirection(e),this.setXYZ(t,Zt.x,Zt.y,Zt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=ni(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Ct(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ni(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ct(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ni(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ct(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ni(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ct(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ni(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ct(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Ct(t,this.array),n=Ct(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=Ct(t,this.array),n=Ct(n,this.array),s=Ct(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=Ct(t,this.array),n=Ct(n,this.array),s=Ct(s,this.array),r=Ct(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==jl&&(e.usage=this.usage),e}}class If extends ln{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Nf extends ln{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class wt extends ln{constructor(e,t,n){super(new Float32Array(e),t,n)}}let ug=0;const zn=new tt,Fc=new It,er=new U,Nn=new Wi,jr=new Wi,an=new U;class Xt extends Or{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ug++}),this.uuid=si(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Cf(e)?Nf:If)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new st().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return zn.makeRotationFromQuaternion(e),this.applyMatrix4(zn),this}rotateX(e){return zn.makeRotationX(e),this.applyMatrix4(zn),this}rotateY(e){return zn.makeRotationY(e),this.applyMatrix4(zn),this}rotateZ(e){return zn.makeRotationZ(e),this.applyMatrix4(zn),this}translate(e,t,n){return zn.makeTranslation(e,t,n),this.applyMatrix4(zn),this}scale(e,t,n){return zn.makeScale(e,t,n),this.applyMatrix4(zn),this}lookAt(e){return Fc.lookAt(e),Fc.updateMatrix(),this.applyMatrix4(Fc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(er).negate(),this.translate(er.x,er.y,er.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let s=0,r=e.length;s<r;s++){const o=e[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new wt(n,3))}else{const n=Math.min(e.length,t.count);for(let s=0;s<n;s++){const r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Wi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){const r=t[n];Nn.setFromBufferAttribute(r),this.morphTargetsRelative?(an.addVectors(this.boundingBox.min,Nn.min),this.boundingBox.expandByPoint(an),an.addVectors(this.boundingBox.max,Nn.max),this.boundingBox.expandByPoint(an)):(this.boundingBox.expandByPoint(Nn.min),this.boundingBox.expandByPoint(Nn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new bi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new U,1/0);return}if(e){const n=this.boundingSphere.center;if(Nn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];jr.setFromBufferAttribute(a),this.morphTargetsRelative?(an.addVectors(Nn.min,jr.min),Nn.expandByPoint(an),an.addVectors(Nn.max,jr.max),Nn.expandByPoint(an)):(Nn.expandByPoint(jr.min),Nn.expandByPoint(jr.max))}Nn.getCenter(n);let s=0;for(let r=0,o=e.count;r<o;r++)an.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(an));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)an.fromBufferAttribute(a,l),c&&(er.fromBufferAttribute(e,l),an.add(er)),s=Math.max(s,n.distanceToSquared(an))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ln(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],c=[];for(let L=0;L<n.count;L++)a[L]=new U,c[L]=new U;const l=new U,h=new U,u=new U,d=new xe,f=new xe,g=new xe,y=new U,m=new U;function p(L,S,E){l.fromBufferAttribute(n,L),h.fromBufferAttribute(n,S),u.fromBufferAttribute(n,E),d.fromBufferAttribute(r,L),f.fromBufferAttribute(r,S),g.fromBufferAttribute(r,E),h.sub(l),u.sub(l),f.sub(d),g.sub(d);const I=1/(f.x*g.y-g.x*f.y);isFinite(I)&&(y.copy(h).multiplyScalar(g.y).addScaledVector(u,-f.y).multiplyScalar(I),m.copy(u).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(I),a[L].add(y),a[S].add(y),a[E].add(y),c[L].add(m),c[S].add(m),c[E].add(m))}let x=this.groups;x.length===0&&(x=[{start:0,count:e.count}]);for(let L=0,S=x.length;L<S;++L){const E=x[L],I=E.start,k=E.count;for(let z=I,Y=I+k;z<Y;z+=3)p(e.getX(z+0),e.getX(z+1),e.getX(z+2))}const b=new U,M=new U,R=new U,C=new U;function w(L){R.fromBufferAttribute(s,L),C.copy(R);const S=a[L];b.copy(S),b.sub(R.multiplyScalar(R.dot(S))).normalize(),M.crossVectors(C,S);const I=M.dot(c[L])<0?-1:1;o.setXYZW(L,b.x,b.y,b.z,I)}for(let L=0,S=x.length;L<S;++L){const E=x[L],I=E.start,k=E.count;for(let z=I,Y=I+k;z<Y;z+=3)w(e.getX(z+0)),w(e.getX(z+1)),w(e.getX(z+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new ln(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const s=new U,r=new U,o=new U,a=new U,c=new U,l=new U,h=new U,u=new U;if(e)for(let d=0,f=e.count;d<f;d+=3){const g=e.getX(d+0),y=e.getX(d+1),m=e.getX(d+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,y),o.fromBufferAttribute(t,m),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(n,g),c.fromBufferAttribute(n,y),l.fromBufferAttribute(n,m),a.add(h),c.add(h),l.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(y,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let d=0,f=t.count;d<f;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)an.fromBufferAttribute(e,t),an.normalize(),e.setXYZ(t,an.x,an.y,an.z)}toNonIndexed(){function e(a,c){const l=a.array,h=a.itemSize,u=a.normalized,d=new l.constructor(c.length*h);let f=0,g=0;for(let y=0,m=c.length;y<m;y++){a.isInterleavedBufferAttribute?f=c[y]*a.data.stride+a.offset:f=c[y]*h;for(let p=0;p<h;p++)d[g++]=l[f++]}return new ln(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Xt,n=this.index.array,s=this.attributes;for(const a in s){const c=s[a],l=e(c,n);t.setAttribute(a,l)}const r=this.morphAttributes;for(const a in r){const c=[],l=r[a];for(let h=0,u=l.length;h<u;h++){const d=l[h],f=e(d,n);c.push(f)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const l=n[c];e.data.attributes[c]=l.toJSON(e.data)}const s={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let u=0,d=l.length;u<d;u++){const f=l[u];h.push(f.toJSON(e.data))}h.length>0&&(s[c]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const s=e.attributes;for(const l in s){const h=s[l];this.setAttribute(l,h.clone(t))}const r=e.morphAttributes;for(const l in r){const h=[],u=r[l];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let l=0,h=o.length;l<h;l++){const u=o[l];this.addGroup(u.start,u.count,u.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const kh=new tt,ms=new Ka,Zo=new bi,Bh=new U,Jo=new U,Qo=new U,ea=new U,Oc=new U,ta=new U,zh=new U,na=new U;class Xe extends It{constructor(e=new Xt,t=new cn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(s,e);const a=this.morphTargetInfluences;if(r&&a){ta.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const h=a[c],u=r[c];h!==0&&(Oc.fromBufferAttribute(u,e),o?ta.addScaledVector(Oc,h):ta.addScaledVector(Oc.sub(t),h))}t.add(ta)}return t}raycast(e,t){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Zo.copy(n.boundingSphere),Zo.applyMatrix4(r),ms.copy(e.ray).recast(e.near),!(Zo.containsPoint(ms.origin)===!1&&(ms.intersectSphere(Zo,Bh)===null||ms.origin.distanceToSquared(Bh)>(e.far-e.near)**2))&&(kh.copy(r).invert(),ms.copy(e.ray).applyMatrix4(kh),!(n.boundingBox!==null&&ms.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,ms)))}_computeIntersections(e,t,n){let s;const r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,y=d.length;g<y;g++){const m=d[g],p=o[m.materialIndex],x=Math.max(m.start,f.start),b=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let M=x,R=b;M<R;M+=3){const C=a.getX(M),w=a.getX(M+1),L=a.getX(M+2);s=ia(this,p,e,n,l,h,u,C,w,L),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const g=Math.max(0,f.start),y=Math.min(a.count,f.start+f.count);for(let m=g,p=y;m<p;m+=3){const x=a.getX(m),b=a.getX(m+1),M=a.getX(m+2);s=ia(this,o,e,n,l,h,u,x,b,M),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,y=d.length;g<y;g++){const m=d[g],p=o[m.materialIndex],x=Math.max(m.start,f.start),b=Math.min(c.count,Math.min(m.start+m.count,f.start+f.count));for(let M=x,R=b;M<R;M+=3){const C=M,w=M+1,L=M+2;s=ia(this,p,e,n,l,h,u,C,w,L),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const g=Math.max(0,f.start),y=Math.min(c.count,f.start+f.count);for(let m=g,p=y;m<p;m+=3){const x=m,b=m+1,M=m+2;s=ia(this,o,e,n,l,h,u,x,b,M),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}}function hg(i,e,t,n,s,r,o,a){let c;if(e.side===An?c=n.intersectTriangle(o,r,s,!0,a):c=n.intersectTriangle(s,r,o,e.side===Gi,a),c===null)return null;na.copy(a),na.applyMatrix4(i.matrixWorld);const l=t.ray.origin.distanceTo(na);return l<t.near||l>t.far?null:{distance:l,point:na.clone(),object:i}}function ia(i,e,t,n,s,r,o,a,c,l){i.getVertexPosition(a,Jo),i.getVertexPosition(c,Qo),i.getVertexPosition(l,ea);const h=hg(i,e,t,n,Jo,Qo,ea,zh);if(h){const u=new U;Gn.getBarycoord(zh,Jo,Qo,ea,u),s&&(h.uv=Gn.getInterpolatedAttribute(s,a,c,l,u,new xe)),r&&(h.uv1=Gn.getInterpolatedAttribute(r,a,c,l,u,new xe)),o&&(h.normal=Gn.getInterpolatedAttribute(o,a,c,l,u,new U),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const d={a,b:c,c:l,normal:new U,materialIndex:0};Gn.getNormal(Jo,Qo,ea,d.normal),h.face=d,h.barycoord=u}return h}class xi extends Xt{constructor(e=1,t=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const c=[],l=[],h=[],u=[];let d=0,f=0;g("z","y","x",-1,-1,n,t,e,o,r,0),g("z","y","x",1,-1,n,t,-e,o,r,1),g("x","z","y",1,1,e,n,t,s,o,2),g("x","z","y",1,-1,e,n,-t,s,o,3),g("x","y","z",1,-1,e,t,n,s,r,4),g("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new wt(l,3)),this.setAttribute("normal",new wt(h,3)),this.setAttribute("uv",new wt(u,2));function g(y,m,p,x,b,M,R,C,w,L,S){const E=M/w,I=R/L,k=M/2,z=R/2,Y=C/2,$=w+1,j=L+1;let Q=0,K=0;const me=new U;for(let ve=0;ve<j;ve++){const De=ve*I-z;for(let Je=0;Je<$;Je++){const mt=Je*E-k;me[y]=mt*x,me[m]=De*b,me[p]=Y,l.push(me.x,me.y,me.z),me[y]=0,me[m]=0,me[p]=C>0?1:-1,h.push(me.x,me.y,me.z),u.push(Je/w),u.push(1-ve/L),Q+=1}}for(let ve=0;ve<L;ve++)for(let De=0;De<w;De++){const Je=d+De+$*ve,mt=d+De+$*(ve+1),At=d+(De+1)+$*(ve+1),ft=d+(De+1)+$*ve;c.push(Je,mt,ft),c.push(mt,At,ft),K+=6}a.addGroup(f,K,S),f+=K,d+=Q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new xi(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Pr(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function En(i){const e={};for(let t=0;t<i.length;t++){const n=Pr(i[t]);for(const s in n)e[s]=n[s]}return e}function dg(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Uf(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:pt.workingColorSpace}const wo={clone:Pr,merge:En};var fg=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,pg=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class vn extends ri{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=fg,this.fragmentShader=pg,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Pr(e.uniforms),this.uniformsGroups=dg(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Ff extends It{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new tt,this.projectionMatrix=new tt,this.projectionMatrixInverse=new tt,this.coordinateSystem=mi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ns=new U,Hh=new xe,Vh=new xe;class wn extends Ff{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Cr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(uo*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Cr*2*Math.atan(Math.tan(uo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){ns.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ns.x,ns.y).multiplyScalar(-e/ns.z),ns.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ns.x,ns.y).multiplyScalar(-e/ns.z)}getViewSize(e,t){return this.getViewBounds(e,Hh,Vh),t.subVectors(Vh,Hh)}setViewOffset(e,t,n,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(uo*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,t-=o.offsetY*n/l,s*=o.width/c,n*=o.height/l}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const tr=-90,nr=1;class mg extends It{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new wn(tr,nr,e,t);s.layers=this.layers,this.add(s);const r=new wn(tr,nr,e,t);r.layers=this.layers,this.add(r);const o=new wn(tr,nr,e,t);o.layers=this.layers,this.add(o);const a=new wn(tr,nr,e,t);a.layers=this.layers,this.add(a);const c=new wn(tr,nr,e,t);c.layers=this.layers,this.add(c);const l=new wn(tr,nr,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,s,r,o,a,c]=t;for(const l of t)this.remove(l);if(e===mi)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Ua)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,c,l,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const y=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,o),e.setRenderTarget(n,2,s),e.render(t,a),e.setRenderTarget(n,3,s),e.render(t,c),e.setRenderTarget(n,4,s),e.render(t,l),n.texture.generateMipmaps=y,e.setRenderTarget(n,5,s),e.render(t,h),e.setRenderTarget(u,d,f),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Of extends en{constructor(e=[],t=wr,n,s,r,o,a,c,l,h){super(e,t,n,s,r,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class gg extends $n{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new Of(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new xi(5,5,5),r=new vn({name:"CubemapFromEquirect",uniforms:Pr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:An,blending:Hi});r.uniforms.tEquirect.value=t;const o=new Xe(s,r),a=t.minFilter;return t.minFilter===ki&&(t.minFilter=Fn),new mg(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,s);e.setRenderTarget(r)}}class Wt extends It{constructor(){super(),this.isGroup=!0,this.type="Group"}}const _g={type:"move"};class kc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Wt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Wt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Wt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(const y of e.hand.values()){const m=t.getJointPose(y,n),p=this._getHandJoint(l,y);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,g=.005;l.inputState.pinching&&d>f+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=f-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(_g)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Wt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class bu{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new ze(e),this.density=t}clone(){return new bu(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class vg extends It{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new vi,this.environmentIntensity=1,this.environmentRotation=new vi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class kf{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=jl,this.updateRanges=[],this.version=0,this.uuid=si()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=si()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=si()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Tn=new U;class Ao{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Tn.fromBufferAttribute(this,t),Tn.applyMatrix4(e),this.setXYZ(t,Tn.x,Tn.y,Tn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Tn.fromBufferAttribute(this,t),Tn.applyNormalMatrix(e),this.setXYZ(t,Tn.x,Tn.y,Tn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Tn.fromBufferAttribute(this,t),Tn.transformDirection(e),this.setXYZ(t,Tn.x,Tn.y,Tn.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=ni(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Ct(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=Ct(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Ct(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Ct(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Ct(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=ni(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=ni(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=ni(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=ni(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ct(t,this.array),n=Ct(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ct(t,this.array),n=Ct(n,this.array),s=Ct(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ct(t,this.array),n=Ct(n,this.array),s=Ct(s,this.array),r=Ct(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new ln(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Ao(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Ns extends ri{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new ze(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let ir;const Zr=new U,sr=new U,rr=new U,or=new xe,Jr=new xe,Bf=new tt,sa=new U,Qr=new U,ra=new U,Gh=new xe,Bc=new xe,Wh=new xe;class Lr extends It{constructor(e=new Ns){if(super(),this.isSprite=!0,this.type="Sprite",ir===void 0){ir=new Xt;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new kf(t,5);ir.setIndex([0,1,2,0,2,3]),ir.setAttribute("position",new Ao(n,3,0,!1)),ir.setAttribute("uv",new Ao(n,2,3,!1))}this.geometry=ir,this.material=e,this.center=new xe(.5,.5),this.count=1}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),sr.setFromMatrixScale(this.matrixWorld),Bf.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),rr.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&sr.multiplyScalar(-rr.z);const n=this.material.rotation;let s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));const o=this.center;oa(sa.set(-.5,-.5,0),rr,o,sr,s,r),oa(Qr.set(.5,-.5,0),rr,o,sr,s,r),oa(ra.set(.5,.5,0),rr,o,sr,s,r),Gh.set(0,0),Bc.set(1,0),Wh.set(1,1);let a=e.ray.intersectTriangle(sa,Qr,ra,!1,Zr);if(a===null&&(oa(Qr.set(-.5,.5,0),rr,o,sr,s,r),Bc.set(0,1),a=e.ray.intersectTriangle(sa,ra,Qr,!1,Zr),a===null))return;const c=e.ray.origin.distanceTo(Zr);c<e.near||c>e.far||t.push({distance:c,point:Zr.clone(),uv:Gn.getInterpolation(Zr,sa,Qr,ra,Gh,Bc,Wh,new xe),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function oa(i,e,t,n,s,r){or.subVectors(i,t).addScalar(.5).multiply(n),s!==void 0?(Jr.x=r*or.x-s*or.y,Jr.y=s*or.x+r*or.y):Jr.copy(or),i.copy(e),i.x+=Jr.x,i.y+=Jr.y,i.applyMatrix4(Bf)}const Xh=new U,qh=new Mt,$h=new Mt,xg=new U,Yh=new tt,aa=new U,zc=new bi,Kh=new tt,Hc=new Ka;class yg extends Xe{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=xh,this.bindMatrix=new tt,this.bindMatrixInverse=new tt,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Wi),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,aa),this.boundingBox.expandByPoint(aa)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new bi),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,aa),this.boundingSphere.expandByPoint(aa)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,s=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),zc.copy(this.boundingSphere),zc.applyMatrix4(s),e.ray.intersectsSphere(zc)!==!1&&(Kh.copy(s).invert(),Hc.copy(e.ray).applyMatrix4(Kh),!(this.boundingBox!==null&&Hc.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Hc)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new Mt,t=this.geometry.attributes.skinWeight;for(let n=0,s=t.count;n<s;n++){e.fromBufferAttribute(t,n);const r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===xh?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===vm?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,s=this.geometry;qh.fromBufferAttribute(s.attributes.skinIndex,e),$h.fromBufferAttribute(s.attributes.skinWeight,e),Xh.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){const o=$h.getComponent(r);if(o!==0){const a=qh.getComponent(r);Yh.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(xg.copy(Xh).applyMatrix4(Yh),o)}}return t.applyMatrix4(this.bindMatrixInverse)}}class zf extends It{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Hf extends en{constructor(e=null,t=1,n=1,s,r,o,a,c,l=Qt,h=Qt,u,d){super(null,o,a,c,l,h,s,r,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const jh=new tt,Mg=new tt;class Tu{constructor(e=[],t=[]){this.uuid=si(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,s=this.bones.length;n<s;n++)this.boneInverses.push(new tt)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new tt;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,s=this.boneTexture;for(let r=0,o=e.length;r<o;r++){const a=e[r]?e[r].matrixWorld:Mg;jh.multiplyMatrices(a,t[r]),jh.toArray(n,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new Tu(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new Hf(t,e,e,qn,ii);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,s=e.bones.length;n<s;n++){const r=e.bones[n];let o=t[r];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),o=new zf),this.bones.push(o),this.boneInverses.push(new tt().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let s=0,r=t.length;s<r;s++){const o=t[s];e.bones.push(o.uuid);const a=n[s];e.boneInverses.push(a.toArray())}return e}}class Zl extends ln{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const ar=new tt,Zh=new tt,ca=[],Jh=new Wi,Sg=new tt,eo=new Xe,to=new bi;class Eu extends Xe{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Zl(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Sg)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Wi),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,ar),Jh.copy(e.boundingBox).applyMatrix4(ar),this.boundingBox.union(Jh)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new bi),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,ar),to.copy(e.boundingSphere).applyMatrix4(ar),this.boundingSphere.union(to)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=e*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(e,t){const n=this.matrixWorld,s=this.count;if(eo.geometry=this.geometry,eo.material=this.material,eo.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),to.copy(this.boundingSphere),to.applyMatrix4(n),e.ray.intersectsSphere(to)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,ar),Zh.multiplyMatrices(n,ar),eo.matrixWorld=Zh,eo.raycast(e,ca);for(let o=0,a=ca.length;o<a;o++){const c=ca[o];c.instanceId=r,c.object=this,t.push(c)}ca.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Zl(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Hf(new Float32Array(s*this.count),s,this.count,_u,ii));const r=this.morphTexture.source.data.data;let o=0;for(let l=0;l<n.length;l++)o+=n[l];const a=this.geometry.morphTargetsRelative?1:1-o,c=s*e;r[c]=a,r.set(n,c+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Vc=new U,bg=new U,Tg=new st;class Es{constructor(e=new U(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const s=Vc.subVectors(n,t).cross(bg.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Vc),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Tg.getNormalMatrix(e),s=this.coplanarPoint(Vc).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const gs=new bi,Eg=new xe(.5,.5),la=new U;class wu{constructor(e=new Es,t=new Es,n=new Es,s=new Es,r=new Es,o=new Es){this.planes=[e,t,n,s,r,o]}set(e,t,n,s,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=mi,n=!1){const s=this.planes,r=e.elements,o=r[0],a=r[1],c=r[2],l=r[3],h=r[4],u=r[5],d=r[6],f=r[7],g=r[8],y=r[9],m=r[10],p=r[11],x=r[12],b=r[13],M=r[14],R=r[15];if(s[0].setComponents(l-o,f-h,p-g,R-x).normalize(),s[1].setComponents(l+o,f+h,p+g,R+x).normalize(),s[2].setComponents(l+a,f+u,p+y,R+b).normalize(),s[3].setComponents(l-a,f-u,p-y,R-b).normalize(),n)s[4].setComponents(c,d,m,M).normalize(),s[5].setComponents(l-c,f-d,p-m,R-M).normalize();else if(s[4].setComponents(l-c,f-d,p-m,R-M).normalize(),t===mi)s[5].setComponents(l+c,f+d,p+m,R+M).normalize();else if(t===Ua)s[5].setComponents(c,d,m,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),gs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),gs.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(gs)}intersectsSprite(e){gs.center.set(0,0,0);const t=Eg.distanceTo(e.center);return gs.radius=.7071067811865476+t,gs.applyMatrix4(e.matrixWorld),this.intersectsSphere(gs)}intersectsSphere(e){const t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const s=t[n];if(la.x=s.normal.x>0?e.max.x:e.min.x,la.y=s.normal.y>0?e.max.y:e.min.y,la.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(la)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Au extends ri{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ze(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Fa=new U,Oa=new U,Qh=new tt,no=new Ka,ua=new bi,Gc=new U,ed=new U;class ja extends It{constructor(e=new Xt,t=new Au){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)Fa.fromBufferAttribute(t,s-1),Oa.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=Fa.distanceTo(Oa);e.setAttribute("lineDistance",new wt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ua.copy(n.boundingSphere),ua.applyMatrix4(s),ua.radius+=r,e.ray.intersectsSphere(ua)===!1)return;Qh.copy(s).invert(),no.copy(e.ray).applyMatrix4(Qh);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){const f=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let y=f,m=g-1;y<m;y+=l){const p=h.getX(y),x=h.getX(y+1),b=ha(this,e,no,c,p,x,y);b&&t.push(b)}if(this.isLineLoop){const y=h.getX(g-1),m=h.getX(f),p=ha(this,e,no,c,y,m,g-1);p&&t.push(p)}}else{const f=Math.max(0,o.start),g=Math.min(d.count,o.start+o.count);for(let y=f,m=g-1;y<m;y+=l){const p=ha(this,e,no,c,y,y+1,y);p&&t.push(p)}if(this.isLineLoop){const y=ha(this,e,no,c,g-1,f,g-1);y&&t.push(y)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function ha(i,e,t,n,s,r,o){const a=i.geometry.attributes.position;if(Fa.fromBufferAttribute(a,s),Oa.fromBufferAttribute(a,r),t.distanceSqToSegment(Fa,Oa,Gc,ed)>n)return;Gc.applyMatrix4(i.matrixWorld);const l=e.ray.origin.distanceTo(Gc);if(!(l<e.near||l>e.far))return{distance:l,point:ed.clone().applyMatrix4(i.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:i}}const td=new U,nd=new U;class wg extends ja{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)td.fromBufferAttribute(t,s),nd.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+td.distanceTo(nd);e.setAttribute("lineDistance",new wt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Ag extends ja{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class Po extends ri{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ze(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const id=new tt,Jl=new Ka,da=new bi,fa=new U;class Za extends It{constructor(e=new Xt,t=new Po){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),da.copy(n.boundingSphere),da.applyMatrix4(s),da.radius+=r,e.ray.intersectsSphere(da)===!1)return;id.copy(s).invert(),Jl.copy(e.ray).applyMatrix4(id);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=n.index,u=n.attributes.position;if(l!==null){const d=Math.max(0,o.start),f=Math.min(l.count,o.start+o.count);for(let g=d,y=f;g<y;g++){const m=l.getX(g);fa.fromBufferAttribute(u,m),sd(fa,m,c,s,e,t,this)}}else{const d=Math.max(0,o.start),f=Math.min(u.count,o.start+o.count);for(let g=d,y=f;g<y;g++)fa.fromBufferAttribute(u,g),sd(fa,g,c,s,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function sd(i,e,t,n,s,r,o){const a=Jl.distanceSqToPoint(i);if(a<t){const c=new U;Jl.closestPointToPoint(i,c),c.applyMatrix4(n);const l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class kr extends en{constructor(e,t,n,s,r,o,a,c,l){super(e,t,n,s,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Vf extends en{constructor(e,t,n=Is,s,r,o,a=Qt,c=Qt,l,h=yo,u=1){if(h!==yo&&h!==Mo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:e,height:t,depth:u};super(d,s,r,o,a,c,h,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Su(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Gf extends en{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Br extends Xt{constructor(e=1,t=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:s},t=Math.max(3,t);const r=[],o=[],a=[],c=[],l=new U,h=new xe;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let u=0,d=3;u<=t;u++,d+=3){const f=n+u/t*s;l.x=e*Math.cos(f),l.y=e*Math.sin(f),o.push(l.x,l.y,l.z),a.push(0,0,1),h.x=(o[d]/e+1)/2,h.y=(o[d+1]/e+1)/2,c.push(h.x,h.y)}for(let u=1;u<=t;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new wt(o,3)),this.setAttribute("normal",new wt(a,3)),this.setAttribute("uv",new wt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Br(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class Xi extends Xt{constructor(e=1,t=1,n=1,s=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};const l=this;s=Math.floor(s),r=Math.floor(r);const h=[],u=[],d=[],f=[];let g=0;const y=[],m=n/2;let p=0;x(),o===!1&&(e>0&&b(!0),t>0&&b(!1)),this.setIndex(h),this.setAttribute("position",new wt(u,3)),this.setAttribute("normal",new wt(d,3)),this.setAttribute("uv",new wt(f,2));function x(){const M=new U,R=new U;let C=0;const w=(t-e)/n;for(let L=0;L<=r;L++){const S=[],E=L/r,I=E*(t-e)+e;for(let k=0;k<=s;k++){const z=k/s,Y=z*c+a,$=Math.sin(Y),j=Math.cos(Y);R.x=I*$,R.y=-E*n+m,R.z=I*j,u.push(R.x,R.y,R.z),M.set($,w,j).normalize(),d.push(M.x,M.y,M.z),f.push(z,1-E),S.push(g++)}y.push(S)}for(let L=0;L<s;L++)for(let S=0;S<r;S++){const E=y[S][L],I=y[S+1][L],k=y[S+1][L+1],z=y[S][L+1];(e>0||S!==0)&&(h.push(E,I,z),C+=3),(t>0||S!==r-1)&&(h.push(I,k,z),C+=3)}l.addGroup(p,C,0),p+=C}function b(M){const R=g,C=new xe,w=new U;let L=0;const S=M===!0?e:t,E=M===!0?1:-1;for(let k=1;k<=s;k++)u.push(0,m*E,0),d.push(0,E,0),f.push(.5,.5),g++;const I=g;for(let k=0;k<=s;k++){const Y=k/s*c+a,$=Math.cos(Y),j=Math.sin(Y);w.x=S*j,w.y=m*E,w.z=S*$,u.push(w.x,w.y,w.z),d.push(0,E,0),C.x=$*.5+.5,C.y=j*.5*E+.5,f.push(C.x,C.y),g++}for(let k=0;k<s;k++){const z=R+k,Y=I+k;M===!0?h.push(Y,Y+1,z):h.push(Y+1,Y,z),L+=3}l.addGroup(p,L,M===!0?1:2),p+=L}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Xi(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class ks extends Xi{constructor(e=1,t=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new ks(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Ja extends Xt{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};const r=[],o=[];a(s),l(n),h(),this.setAttribute("position",new wt(r,3)),this.setAttribute("normal",new wt(r.slice(),3)),this.setAttribute("uv",new wt(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(x){const b=new U,M=new U,R=new U;for(let C=0;C<t.length;C+=3)f(t[C+0],b),f(t[C+1],M),f(t[C+2],R),c(b,M,R,x)}function c(x,b,M,R){const C=R+1,w=[];for(let L=0;L<=C;L++){w[L]=[];const S=x.clone().lerp(M,L/C),E=b.clone().lerp(M,L/C),I=C-L;for(let k=0;k<=I;k++)k===0&&L===C?w[L][k]=S:w[L][k]=S.clone().lerp(E,k/I)}for(let L=0;L<C;L++)for(let S=0;S<2*(C-L)-1;S++){const E=Math.floor(S/2);S%2===0?(d(w[L][E+1]),d(w[L+1][E]),d(w[L][E])):(d(w[L][E+1]),d(w[L+1][E+1]),d(w[L+1][E]))}}function l(x){const b=new U;for(let M=0;M<r.length;M+=3)b.x=r[M+0],b.y=r[M+1],b.z=r[M+2],b.normalize().multiplyScalar(x),r[M+0]=b.x,r[M+1]=b.y,r[M+2]=b.z}function h(){const x=new U;for(let b=0;b<r.length;b+=3){x.x=r[b+0],x.y=r[b+1],x.z=r[b+2];const M=m(x)/2/Math.PI+.5,R=p(x)/Math.PI+.5;o.push(M,1-R)}g(),u()}function u(){for(let x=0;x<o.length;x+=6){const b=o[x+0],M=o[x+2],R=o[x+4],C=Math.max(b,M,R),w=Math.min(b,M,R);C>.9&&w<.1&&(b<.2&&(o[x+0]+=1),M<.2&&(o[x+2]+=1),R<.2&&(o[x+4]+=1))}}function d(x){r.push(x.x,x.y,x.z)}function f(x,b){const M=x*3;b.x=e[M+0],b.y=e[M+1],b.z=e[M+2]}function g(){const x=new U,b=new U,M=new U,R=new U,C=new xe,w=new xe,L=new xe;for(let S=0,E=0;S<r.length;S+=9,E+=6){x.set(r[S+0],r[S+1],r[S+2]),b.set(r[S+3],r[S+4],r[S+5]),M.set(r[S+6],r[S+7],r[S+8]),C.set(o[E+0],o[E+1]),w.set(o[E+2],o[E+3]),L.set(o[E+4],o[E+5]),R.copy(x).add(b).add(M).divideScalar(3);const I=m(R);y(C,E+0,x,I),y(w,E+2,b,I),y(L,E+4,M,I)}}function y(x,b,M,R){R<0&&x.x===1&&(o[b]=x.x-1),M.x===0&&M.z===0&&(o[b]=R/2/Math.PI+.5)}function m(x){return Math.atan2(x.z,-x.x)}function p(x){return Math.atan2(-x.y,Math.sqrt(x.x*x.x+x.z*x.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ja(e.vertices,e.indices,e.radius,e.details)}}class Qa extends Ja{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,s=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-n,0,-s,n,0,s,-n,0,s,n,-s,-n,0,-s,n,0,s,-n,0,s,n,0,-n,0,-s,n,0,-s,-n,0,s,n,0,s],o=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,o,e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Qa(e.radius,e.detail)}}class qi{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,s=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){const n=this.getLengths();let s=0;const r=n.length;let o;t?o=t:o=e*n[r-1];let a=0,c=r-1,l;for(;a<=c;)if(s=Math.floor(a+(c-a)/2),l=n[s]-o,l<0)a=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,n[s]===o)return s/(r-1);const h=n[s],d=n[s+1]-h,f=(o-h)/d;return(s+f)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);const o=this.getPoint(s),a=this.getPoint(r),c=t||(o.isVector2?new xe:new U);return c.copy(a).sub(o).normalize(),c}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){const n=new U,s=[],r=[],o=[],a=new U,c=new tt;for(let f=0;f<=e;f++){const g=f/e;s[f]=this.getTangentAt(g,new U)}r[0]=new U,o[0]=new U;let l=Number.MAX_VALUE;const h=Math.abs(s[0].x),u=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=l&&(l=h,n.set(1,0,0)),u<=l&&(l=u,n.set(0,1,0)),d<=l&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(s[f-1],s[f]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(ot(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(c.makeRotationAxis(a,g))}o[f].crossVectors(s[f],r[f])}if(t===!0){let f=Math.acos(ot(r[0].dot(r[e]),-1,1));f/=e,s[0].dot(a.crossVectors(r[0],r[e]))>0&&(f=-f);for(let g=1;g<=e;g++)r[g].applyMatrix4(c.makeRotationAxis(s[g],f*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class Wf extends qi{constructor(e=0,t=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(e,t=new xe){const n=t,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);const a=this.aStartAngle+e*r;let c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=c-this.aX,f=l-this.aY;c=d*h-f*u+this.aX,l=d*u+f*h+this.aY}return n.set(c,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class Rg extends Wf{constructor(e,t,n,s,r,o){super(e,t,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function Ru(){let i=0,e=0,t=0,n=0;function s(r,o,a,c){i=r,e=a,t=-3*r+3*o-2*a-c,n=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,l){s(o,a,l*(a-r),l*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,l,h,u){let d=(o-r)/l-(a-r)/(l+h)+(a-o)/h,f=(a-o)/h-(c-o)/(h+u)+(c-a)/u;d*=h,f*=h,s(o,a,d,f)},calc:function(r){const o=r*r,a=o*r;return i+e*r+t*o+n*a}}}const pa=new U,Wc=new Ru,Xc=new Ru,qc=new Ru;class Xf extends qi{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new U){const n=t,s=this.points,r=s.length,o=(r-(this.closed?0:1))*e;let a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let l,h;this.closed||a>0?l=s[(a-1)%r]:(pa.subVectors(s[0],s[1]).add(s[0]),l=pa);const u=s[a%r],d=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(pa.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=pa),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let g=Math.pow(l.distanceToSquared(u),f),y=Math.pow(u.distanceToSquared(d),f),m=Math.pow(d.distanceToSquared(h),f);y<1e-4&&(y=1),g<1e-4&&(g=y),m<1e-4&&(m=y),Wc.initNonuniformCatmullRom(l.x,u.x,d.x,h.x,g,y,m),Xc.initNonuniformCatmullRom(l.y,u.y,d.y,h.y,g,y,m),qc.initNonuniformCatmullRom(l.z,u.z,d.z,h.z,g,y,m)}else this.curveType==="catmullrom"&&(Wc.initCatmullRom(l.x,u.x,d.x,h.x,this.tension),Xc.initCatmullRom(l.y,u.y,d.y,h.y,this.tension),qc.initCatmullRom(l.z,u.z,d.z,h.z,this.tension));return n.set(Wc.calc(c),Xc.calc(c),qc.calc(c)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(new U().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function rd(i,e,t,n,s){const r=(n-e)*.5,o=(s-t)*.5,a=i*i,c=i*a;return(2*t-2*n+r+o)*c+(-3*t+3*n-2*r-o)*a+r*i+t}function Cg(i,e){const t=1-i;return t*t*e}function Pg(i,e){return 2*(1-i)*i*e}function Lg(i,e){return i*i*e}function fo(i,e,t,n){return Cg(i,e)+Pg(i,t)+Lg(i,n)}function Dg(i,e){const t=1-i;return t*t*t*e}function Ig(i,e){const t=1-i;return 3*t*t*i*e}function Ng(i,e){return 3*(1-i)*i*i*e}function Ug(i,e){return i*i*i*e}function po(i,e,t,n,s){return Dg(i,e)+Ig(i,t)+Ng(i,n)+Ug(i,s)}class Fg extends qi{constructor(e=new xe,t=new xe,n=new xe,s=new xe){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new xe){const n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(po(e,s.x,r.x,o.x,a.x),po(e,s.y,r.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Og extends qi{constructor(e=new U,t=new U,n=new U,s=new U){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new U){const n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(po(e,s.x,r.x,o.x,a.x),po(e,s.y,r.y,o.y,a.y),po(e,s.z,r.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class kg extends qi{constructor(e=new xe,t=new xe){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new xe){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new xe){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Bg extends qi{constructor(e=new U,t=new U){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new U){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new U){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class zg extends qi{constructor(e=new xe,t=new xe,n=new xe){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new xe){const n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(fo(e,s.x,r.x,o.x),fo(e,s.y,r.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class qf extends qi{constructor(e=new U,t=new U,n=new U){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new U){const n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(fo(e,s.x,r.x,o.x),fo(e,s.y,r.y,o.y),fo(e,s.z,r.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Hg extends qi{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new xe){const n=t,s=this.points,r=(s.length-1)*e,o=Math.floor(r),a=r-o,c=s[o===0?o:o-1],l=s[o],h=s[o>s.length-2?s.length-1:o+1],u=s[o>s.length-3?s.length-1:o+2];return n.set(rd(a,c.x,l.x,h.x,u.x),rd(a,c.y,l.y,h.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(new xe().fromArray(s))}return this}}var Vg=Object.freeze({__proto__:null,ArcCurve:Rg,CatmullRomCurve3:Xf,CubicBezierCurve:Fg,CubicBezierCurve3:Og,EllipseCurve:Wf,LineCurve:kg,LineCurve3:Bg,QuadraticBezierCurve:zg,QuadraticBezierCurve3:qf,SplineCurve:Hg});class Mr extends Ja{constructor(e=1,t=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,s,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Mr(e.radius,e.detail)}}class as extends Xt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};const r=e/2,o=t/2,a=Math.floor(n),c=Math.floor(s),l=a+1,h=c+1,u=e/a,d=t/c,f=[],g=[],y=[],m=[];for(let p=0;p<h;p++){const x=p*d-o;for(let b=0;b<l;b++){const M=b*u-r;g.push(M,-x,0),y.push(0,0,1),m.push(b/a),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let x=0;x<a;x++){const b=x+l*p,M=x+l*(p+1),R=x+1+l*(p+1),C=x+1+l*p;f.push(b,M,C),f.push(M,R,C)}this.setIndex(f),this.setAttribute("position",new wt(g,3)),this.setAttribute("normal",new wt(y,3)),this.setAttribute("uv",new wt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new as(e.width,e.height,e.widthSegments,e.heightSegments)}}class Lo extends Xt{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const c=Math.min(o+a,Math.PI);let l=0;const h=[],u=new U,d=new U,f=[],g=[],y=[],m=[];for(let p=0;p<=n;p++){const x=[],b=p/n;let M=0;p===0&&o===0?M=.5/t:p===n&&c===Math.PI&&(M=-.5/t);for(let R=0;R<=t;R++){const C=R/t;u.x=-e*Math.cos(s+C*r)*Math.sin(o+b*a),u.y=e*Math.cos(o+b*a),u.z=e*Math.sin(s+C*r)*Math.sin(o+b*a),g.push(u.x,u.y,u.z),d.copy(u).normalize(),y.push(d.x,d.y,d.z),m.push(C+M,1-b),x.push(l++)}h.push(x)}for(let p=0;p<n;p++)for(let x=0;x<t;x++){const b=h[p][x+1],M=h[p][x],R=h[p+1][x],C=h[p+1][x+1];(p!==0||o>0)&&f.push(b,M,C),(p!==n-1||c<Math.PI)&&f.push(M,R,C)}this.setIndex(f),this.setAttribute("position",new wt(g,3)),this.setAttribute("normal",new wt(y,3)),this.setAttribute("uv",new wt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Lo(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Dr extends Xt{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);const o=[],a=[],c=[],l=[],h=new U,u=new U,d=new U;for(let f=0;f<=n;f++)for(let g=0;g<=s;g++){const y=g/s*r,m=f/n*Math.PI*2;u.x=(e+t*Math.cos(m))*Math.cos(y),u.y=(e+t*Math.cos(m))*Math.sin(y),u.z=t*Math.sin(m),a.push(u.x,u.y,u.z),h.x=e*Math.cos(y),h.y=e*Math.sin(y),d.subVectors(u,h).normalize(),c.push(d.x,d.y,d.z),l.push(g/s),l.push(f/n)}for(let f=1;f<=n;f++)for(let g=1;g<=s;g++){const y=(s+1)*f+g-1,m=(s+1)*(f-1)+g-1,p=(s+1)*(f-1)+g,x=(s+1)*f+g;o.push(y,m,x),o.push(m,p,x)}this.setIndex(o),this.setAttribute("position",new wt(a,3)),this.setAttribute("normal",new wt(c,3)),this.setAttribute("uv",new wt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Dr(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class Cu extends Xt{constructor(e=new qf(new U(-1,-1,0),new U(-1,1,0),new U(1,1,0)),t=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:s,closed:r};const o=e.computeFrenetFrames(t,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;const a=new U,c=new U,l=new xe;let h=new U;const u=[],d=[],f=[],g=[];y(),this.setIndex(g),this.setAttribute("position",new wt(u,3)),this.setAttribute("normal",new wt(d,3)),this.setAttribute("uv",new wt(f,2));function y(){for(let b=0;b<t;b++)m(b);m(r===!1?t:0),x(),p()}function m(b){h=e.getPointAt(b/t,h);const M=o.normals[b],R=o.binormals[b];for(let C=0;C<=s;C++){const w=C/s*Math.PI*2,L=Math.sin(w),S=-Math.cos(w);c.x=S*M.x+L*R.x,c.y=S*M.y+L*R.y,c.z=S*M.z+L*R.z,c.normalize(),d.push(c.x,c.y,c.z),a.x=h.x+n*c.x,a.y=h.y+n*c.y,a.z=h.z+n*c.z,u.push(a.x,a.y,a.z)}}function p(){for(let b=1;b<=t;b++)for(let M=1;M<=s;M++){const R=(s+1)*(b-1)+(M-1),C=(s+1)*b+(M-1),w=(s+1)*b+M,L=(s+1)*(b-1)+M;g.push(R,C,L),g.push(C,w,L)}}function x(){for(let b=0;b<=t;b++)for(let M=0;M<=s;M++)l.x=b/t,l.y=M/s,f.push(l.x,l.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new Cu(new Vg[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}class Gg extends vn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Gt extends ri{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new ze(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ze(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Af,this.normalScale=new xe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new vi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Ti extends Gt{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new xe(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return ot(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new ze(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new ze(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new ze(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class Wg extends ri{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Mm,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Xg extends ri{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}function ma(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function qg(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function $g(i){function e(s,r){return i[s]-i[r]}const t=i.length,n=new Array(t);for(let s=0;s!==t;++s)n[s]=s;return n.sort(e),n}function od(i,e,t){const n=i.length,s=new i.constructor(n);for(let r=0,o=0;o!==n;++r){const a=t[r]*e;for(let c=0;c!==e;++c)s[o++]=i[a+c]}return s}function $f(i,e,t,n){let s=1,r=i[0];for(;r!==void 0&&r[n]===void 0;)r=i[s++];if(r===void 0)return;let o=r[n];if(o!==void 0)if(Array.isArray(o))do o=r[n],o!==void 0&&(e.push(r.time),t.push(...o)),r=i[s++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[n],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=i[s++];while(r!==void 0);else do o=r[n],o!==void 0&&(e.push(r.time),t.push(o)),r=i[s++];while(r!==void 0)}class Do{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let o;t:{i:if(!(e<s)){for(let a=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=t[++n],e<s)break e}o=t.length;break t}if(!(e>=r)){const a=t[1];e<a&&(n=2,r=a);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=t[--n-1],e>=r)break e}o=n,n=0;break t}break n}for(;n<o;){const a=n+o>>>1;e<t[a]?o=a:n=a+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class Yg extends Do{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:yh,endingEnd:yh}}intervalChanged_(e,t,n){const s=this.parameterPositions;let r=e-2,o=e+1,a=s[r],c=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case Mh:r=e,a=2*t-n;break;case Sh:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case Mh:o=e,c=2*n-t;break;case Sh:o=1,c=n+s[1]-s[0];break;default:o=e-1,c=t}const l=(n-t)*.5,h=this.valueSize;this._weightPrev=l/(t-a),this._weightNext=l/(c-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(e,t,n,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,g=(n-t)/(s-t),y=g*g,m=y*g,p=-d*m+2*d*y-d*g,x=(1+d)*m+(-1.5-2*d)*y+(-.5+d)*g+1,b=(-1-f)*m+(1.5+f)*y+.5*g,M=f*m-f*y;for(let R=0;R!==a;++R)r[R]=p*o[h+R]+x*o[l+R]+b*o[c+R]+M*o[u+R];return r}}class Kg extends Do{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,h=(n-t)/(s-t),u=1-h;for(let d=0;d!==a;++d)r[d]=o[l+d]*u+o[c+d]*h;return r}}class jg extends Do{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}}class ci{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=ma(t,this.TimeBufferType),this.values=ma(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:ma(e.times,Array),values:ma(e.values,Array)};const s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new jg(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Kg(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Yg(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case So:t=this.InterpolantFactoryMethodDiscrete;break;case bo:t=this.InterpolantFactoryMethodLinear;break;case _c:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return So;case this.InterpolantFactoryMethodLinear:return bo;case this.InterpolantFactoryMethodSmooth:return _c}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e}return this}trim(e,t){const n=this.times,s=n.length;let r=0,o=s-1;for(;r!==s&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);const a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){const c=n[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),e=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,o),e=!1;break}o=c}if(s!==void 0&&qg(s))for(let a=0,c=s.length;a!==c;++a){const l=s[a];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,l),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===_c,r=e.length-1;let o=1;for(let a=1;a<r;++a){let c=!1;const l=e[a],h=e[a+1];if(l!==h&&(a!==1||l!==e[0]))if(s)c=!0;else{const u=a*n,d=u-n,f=u+n;for(let g=0;g!==n;++g){const y=t[u+g];if(y!==t[d+g]||y!==t[f+g]){c=!0;break}}}if(c){if(a!==o){e[o]=e[a];const u=a*n,d=o*n;for(let f=0;f!==n;++f)t[d+f]=t[u+f]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,c=o*n,l=0;l!==n;++l)t[c+l]=t[a+l];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}}ci.prototype.ValueTypeName="";ci.prototype.TimeBufferType=Float32Array;ci.prototype.ValueBufferType=Float32Array;ci.prototype.DefaultInterpolation=bo;class zr extends ci{constructor(e,t,n){super(e,t,n)}}zr.prototype.ValueTypeName="bool";zr.prototype.ValueBufferType=Array;zr.prototype.DefaultInterpolation=So;zr.prototype.InterpolantFactoryMethodLinear=void 0;zr.prototype.InterpolantFactoryMethodSmooth=void 0;class Yf extends ci{constructor(e,t,n,s){super(e,t,n,s)}}Yf.prototype.ValueTypeName="color";class Ir extends ci{constructor(e,t,n,s){super(e,t,n,s)}}Ir.prototype.ValueTypeName="number";class Zg extends Do{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(n-t)/(s-t);let l=e*a;for(let h=l+a;l!==h;l+=4)us.slerpFlat(r,0,o,l-a,o,l,c);return r}}class Nr extends ci{constructor(e,t,n,s){super(e,t,n,s)}InterpolantFactoryMethodLinear(e){return new Zg(this.times,this.values,this.getValueSize(),e)}}Nr.prototype.ValueTypeName="quaternion";Nr.prototype.InterpolantFactoryMethodSmooth=void 0;class Hr extends ci{constructor(e,t,n){super(e,t,n)}}Hr.prototype.ValueTypeName="string";Hr.prototype.ValueBufferType=Array;Hr.prototype.DefaultInterpolation=So;Hr.prototype.InterpolantFactoryMethodLinear=void 0;Hr.prototype.InterpolantFactoryMethodSmooth=void 0;class Ur extends ci{constructor(e,t,n,s){super(e,t,n,s)}}Ur.prototype.ValueTypeName="vector";class Jg{constructor(e="",t=-1,n=[],s=xm){this.name=e,this.tracks=n,this.duration=t,this.blendMode=s,this.uuid=si(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,s=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(e0(n[o]).scale(s));const r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r.userData=JSON.parse(e.userData||"{}"),r}static toJSON(e){const t=[],n=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let r=0,o=n.length;r!==o;++r)t.push(ci.toJSON(n[r]));return s}static CreateFromMorphTargetSequence(e,t,n,s){const r=t.length,o=[];for(let a=0;a<r;a++){let c=[],l=[];c.push((a+r-1)%r,a,(a+1)%r),l.push(0,1,0);const h=$g(c);c=od(c,1,h),l=od(l,1,h),!s&&c[0]===0&&(c.push(r),l.push(l[0])),o.push(new Ir(".morphTargetInfluences["+t[a].name+"]",c,l).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const s=e;n=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<n.length;s++)if(n[s].name===t)return n[s];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const s={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,c=e.length;a<c;a++){const l=e[a],h=l.name.match(r);if(h&&h.length>1){const u=h[1];let d=s[u];d||(s[u]=d=[]),d.push(l)}}const o=[];for(const a in s)o.push(this.CreateFromMorphTargetSequence(a,s[a],t,n));return o}static parseAnimation(e,t){if(console.warn("THREE.AnimationClip: parseAnimation() is deprecated and will be removed with r185"),!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(u,d,f,g,y){if(f.length!==0){const m=[],p=[];$f(f,m,p,g),m.length!==0&&y.push(new u(d,m,p))}},s=[],r=e.name||"default",o=e.fps||30,a=e.blendMode;let c=e.length||-1;const l=e.hierarchy||[];for(let u=0;u<l.length;u++){const d=l[u].keys;if(!(!d||d.length===0))if(d[0].morphTargets){const f={};let g;for(g=0;g<d.length;g++)if(d[g].morphTargets)for(let y=0;y<d[g].morphTargets.length;y++)f[d[g].morphTargets[y]]=-1;for(const y in f){const m=[],p=[];for(let x=0;x!==d[g].morphTargets.length;++x){const b=d[g];m.push(b.time),p.push(b.morphTarget===y?1:0)}s.push(new Ir(".morphTargetInfluence["+y+"]",m,p))}c=f.length*o}else{const f=".bones["+t[u].name+"]";n(Ur,f+".position",d,"pos",s),n(Nr,f+".quaternion",d,"rot",s),n(Ur,f+".scale",d,"scl",s)}}return s.length===0?null:new this(r,c,s,a)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,s=e.length;n!==s;++n){const r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let n=0;n<this.tracks.length;n++)e.push(this.tracks[n].clone());const t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}}function Qg(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Ir;case"vector":case"vector2":case"vector3":case"vector4":return Ur;case"color":return Yf;case"quaternion":return Nr;case"bool":case"boolean":return zr;case"string":return Hr}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function e0(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=Qg(i.type);if(i.times===void 0){const t=[],n=[];$f(i.keys,t,n,"value"),i.times=t,i.values=n}return e.parse!==void 0?e.parse(i):new e(i.name,i.times,i.values,i.interpolation)}const Bi={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class t0{constructor(e,t,n){const s=this;let r=!1,o=0,a=0,c;const l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.abortController=new AbortController,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){const u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=l.length;u<d;u+=2){const f=l[u],g=l[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}}const n0=new t0;class Vr{constructor(e){this.manager=e!==void 0?e:n0,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}Vr.DEFAULT_MATERIAL_NAME="__DEFAULT";const Ii={};class i0 extends Error{constructor(e,t){super(e),this.response=t}}class Kf extends Vr{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=Bi.get(`file:${e}`);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(Ii[e]!==void 0){Ii[e].push({onLoad:t,onProgress:n,onError:s});return}Ii[e]=[],Ii[e].push({onLoad:t,onProgress:n,onError:s});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),a=this.mimeType,c=this.responseType;fetch(o).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;const h=Ii[e],u=l.body.getReader(),d=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),f=d?parseInt(d):0,g=f!==0;let y=0;const m=new ReadableStream({start(p){x();function x(){u.read().then(({done:b,value:M})=>{if(b)p.close();else{y+=M.byteLength;const R=new ProgressEvent("progress",{lengthComputable:g,loaded:y,total:f});for(let C=0,w=h.length;C<w;C++){const L=h[C];L.onProgress&&L.onProgress(R)}p.enqueue(M),x()}},b=>{p.error(b)})}}});return new Response(m)}else throw new i0(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return l.json();default:if(a==="")return l.text();{const u=/charset="?([^;"\s]*)"?/i.exec(a),d=u&&u[1]?u[1].toLowerCase():void 0,f=new TextDecoder(d);return l.arrayBuffer().then(g=>f.decode(g))}}}).then(l=>{Bi.add(`file:${e}`,l);const h=Ii[e];delete Ii[e];for(let u=0,d=h.length;u<d;u++){const f=h[u];f.onLoad&&f.onLoad(l)}}).catch(l=>{const h=Ii[e];if(h===void 0)throw this.manager.itemError(e),l;delete Ii[e];for(let u=0,d=h.length;u<d;u++){const f=h[u];f.onError&&f.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const cr=new WeakMap;class s0 extends Vr{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=Bi.get(`image:${e}`);if(o!==void 0){if(o.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0);else{let u=cr.get(o);u===void 0&&(u=[],cr.set(o,u)),u.push({onLoad:t,onError:s})}return o}const a=To("img");function c(){h(),t&&t(this);const u=cr.get(this)||[];for(let d=0;d<u.length;d++){const f=u[d];f.onLoad&&f.onLoad(this)}cr.delete(this),r.manager.itemEnd(e)}function l(u){h(),s&&s(u),Bi.remove(`image:${e}`);const d=cr.get(this)||[];for(let f=0;f<d.length;f++){const g=d[f];g.onError&&g.onError(u)}cr.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){a.removeEventListener("load",c,!1),a.removeEventListener("error",l,!1)}return a.addEventListener("load",c,!1),a.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),Bi.add(`image:${e}`,a),r.manager.itemStart(e),a.src=e,a}}class r0 extends Vr{constructor(e){super(e)}load(e,t,n,s){const r=new en,o=new s0(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}}class Io extends It{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ze(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class o0 extends Io{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(It.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ze(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const $c=new tt,ad=new U,cd=new U;class Pu{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new xe(512,512),this.mapType=_i,this.map=null,this.mapPass=null,this.matrix=new tt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new wu,this._frameExtents=new xe(1,1),this._viewportCount=1,this._viewports=[new Mt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;ad.setFromMatrixPosition(e.matrixWorld),t.position.copy(ad),cd.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(cd),t.updateMatrixWorld(),$c.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix($c,t.coordinateSystem,t.reversedDepth),t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply($c)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class a0 extends Pu{constructor(){super(new wn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){const t=this.camera,n=Cr*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(n!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class c0 extends Io{constructor(e,t,n=0,s=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(It.DEFAULT_UP),this.updateMatrix(),this.target=new It,this.distance=n,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new a0}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const ld=new tt,io=new U,Yc=new U;class l0 extends Pu{constructor(){super(new wn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new xe(4,2),this._viewportCount=6,this._viewports=[new Mt(2,1,1,1),new Mt(0,1,1,1),new Mt(3,1,1,1),new Mt(1,1,1,1),new Mt(3,0,1,1),new Mt(1,0,1,1)],this._cubeDirections=[new U(1,0,0),new U(-1,0,0),new U(0,0,1),new U(0,0,-1),new U(0,1,0),new U(0,-1,0)],this._cubeUps=[new U(0,1,0),new U(0,1,0),new U(0,1,0),new U(0,1,0),new U(0,0,1),new U(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,s=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),io.setFromMatrixPosition(e.matrixWorld),n.position.copy(io),Yc.copy(n.position),Yc.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Yc),n.updateMatrixWorld(),s.makeTranslation(-io.x,-io.y,-io.z),ld.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ld,n.coordinateSystem,n.reversedDepth)}}class Lu extends Io{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new l0}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class ec extends Ff{constructor(e=-1,t=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-e,o=n+e,a=s+t,c=s-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class u0 extends Pu{constructor(){super(new ec(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Du extends Io{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(It.DEFAULT_UP),this.updateMatrix(),this.target=new It,this.shadow=new u0}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class h0 extends Io{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class mo{static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}const Kc=new WeakMap;class d0 extends Vr{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=Bi.get(`image-bitmap:${e}`);if(o!==void 0){if(r.manager.itemStart(e),o.then){o.then(l=>{if(Kc.has(o)===!0)s&&s(Kc.get(o)),r.manager.itemError(e),r.manager.itemEnd(e);else return t&&t(l),r.manager.itemEnd(e),l});return}return setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o}const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader,a.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;const c=fetch(e,a).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(l){return Bi.add(`image-bitmap:${e}`,l),t&&t(l),r.manager.itemEnd(e),l}).catch(function(l){s&&s(l),Kc.set(c,l),Bi.remove(`image-bitmap:${e}`),r.manager.itemError(e),r.manager.itemEnd(e)});Bi.add(`image-bitmap:${e}`,c),r.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}class f0 extends wn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class jf{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}const Iu="\\[\\]\\.:\\/",p0=new RegExp("["+Iu+"]","g"),Nu="[^"+Iu+"]",m0="[^"+Iu.replace("\\.","")+"]",g0=/((?:WC+[\/:])*)/.source.replace("WC",Nu),_0=/(WCOD+)?/.source.replace("WCOD",m0),v0=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Nu),x0=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Nu),y0=new RegExp("^"+g0+_0+v0+x0+"$"),M0=["material","materials","bones","map"];class S0{constructor(e,t,n){const s=n||Lt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class Lt{constructor(e,t,n){this.path=t,this.parsedPath=n||Lt.parseTrackName(t),this.node=Lt.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new Lt.Composite(e,t,n):new Lt(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(p0,"")}static parseTrackName(e){const t=y0.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){const r=n.nodeName.substring(s+1);M0.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(r){for(let o=0;o<r.length;o++){const a=r[o];if(a.name===t||a.uuid===t)return a;const c=n(a.children);if(c)return c}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,s=t.propertyName;let r=t.propertyIndex;if(e||(e=Lt.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===l){l=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}const o=e[s];if(o===void 0){const l=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}Lt.Composite=S0;Lt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Lt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Lt.prototype.GetterByBindingType=[Lt.prototype._getValue_direct,Lt.prototype._getValue_array,Lt.prototype._getValue_arrayElement,Lt.prototype._getValue_toArray];Lt.prototype.SetterByBindingTypeAndVersioning=[[Lt.prototype._setValue_direct,Lt.prototype._setValue_direct_setNeedsUpdate,Lt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Lt.prototype._setValue_array,Lt.prototype._setValue_array_setNeedsUpdate,Lt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Lt.prototype._setValue_arrayElement,Lt.prototype._setValue_arrayElement_setNeedsUpdate,Lt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Lt.prototype._setValue_fromArray,Lt.prototype._setValue_fromArray_setNeedsUpdate,Lt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];function ud(i,e,t,n){const s=b0(n);switch(t){case bf:return i*e;case _u:return i*e/s.components*s.byteLength;case vu:return i*e/s.components*s.byteLength;case Ef:return i*e*2/s.components*s.byteLength;case xu:return i*e*2/s.components*s.byteLength;case Tf:return i*e*3/s.components*s.byteLength;case qn:return i*e*4/s.components*s.byteLength;case yu:return i*e*4/s.components*s.byteLength;case Ea:case wa:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Aa:case Ra:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Sl:case Tl:return Math.max(i,16)*Math.max(e,8)/4;case Ml:case bl:return Math.max(i,8)*Math.max(e,8)/2;case El:case wl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Al:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Rl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Cl:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Pl:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Ll:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Dl:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Il:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Nl:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Ul:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Fl:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Ol:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case kl:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Bl:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case zl:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Hl:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Vl:case Gl:case Wl:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Xl:case ql:return Math.ceil(i/4)*Math.ceil(e/4)*8;case $l:case Yl:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function b0(i){switch(i){case _i:case xf:return{byteLength:1,components:1};case vo:case yf:case gi:return{byteLength:2,components:1};case mu:case gu:return{byteLength:2,components:4};case Is:case pu:case ii:return{byteLength:4,components:1};case Mf:case Sf:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:du}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=du);function Zf(){let i=null,e=!1,t=null,n=null;function s(r,o){t(r,o),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function T0(i){const e=new WeakMap;function t(a,c){const l=a.array,h=a.usage,u=l.byteLength,d=i.createBuffer();i.bindBuffer(c,d),i.bufferData(c,l,h),a.onUploadCallback();let f;if(l instanceof Float32Array)f=i.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)f=i.HALF_FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=i.SHORT;else if(l instanceof Uint32Array)f=i.UNSIGNED_INT;else if(l instanceof Int32Array)f=i.INT;else if(l instanceof Int8Array)f=i.BYTE;else if(l instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,c,l){const h=c.array,u=c.updateRanges;if(i.bindBuffer(l,a),u.length===0)i.bufferSubData(l,0,h);else{u.sort((f,g)=>f.start-g.start);let d=0;for(let f=1;f<u.length;f++){const g=u[d],y=u[f];y.start<=g.start+g.count+1?g.count=Math.max(g.count,y.start+y.count-g.start):(++d,u[d]=y)}u.length=d+1;for(let f=0,g=u.length;f<g;f++){const y=u[f];i.bufferSubData(l,y.start*h.BYTES_PER_ELEMENT,h,y.start,y.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=e.get(a);c&&(i.deleteBuffer(c.buffer),e.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const l=e.get(a);if(l===void 0)e.set(a,t(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:s,remove:r,update:o}}var E0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,w0=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,A0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,R0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,C0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,P0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,L0=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,D0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,I0=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,N0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,U0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,F0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,O0=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,k0=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,B0=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,z0=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,H0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,V0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,G0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,W0=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,X0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,q0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,$0=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Y0=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,K0=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,j0=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Z0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,J0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Q0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,e_=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,t_="gl_FragColor = linearToOutputTexel( gl_FragColor );",n_=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,i_=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,s_=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,r_=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,o_=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,a_=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,c_=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,l_=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,u_=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,h_=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,d_=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,f_=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,p_=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,m_=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,g_=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,__=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,v_=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,x_=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,y_=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,M_=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,S_=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,b_=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,T_=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,E_=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,w_=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,A_=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,R_=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,C_=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,P_=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,L_=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,D_=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,I_=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,N_=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,U_=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,F_=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,O_=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,k_=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,B_=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,z_=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,H_=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,V_=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,G_=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,W_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,X_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,q_=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,$_=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Y_=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,K_=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,j_=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Z_=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,J_=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Q_=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,ev=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,tv=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,nv=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,iv=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,sv=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,rv=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,ov=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,av=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,cv=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,lv=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,uv=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,hv=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,dv=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,fv=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,pv=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,mv=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,gv=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,_v=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,vv=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,xv=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,yv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Mv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Sv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,bv=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Tv=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Ev=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,wv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Av=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Rv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Cv=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Pv=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Lv=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Dv=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Iv=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Nv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Uv=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Fv=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Ov=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,kv=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Bv=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,zv=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Hv=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Vv=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Gv=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Wv=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Xv=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,qv=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,$v=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Yv=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Kv=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,jv=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Zv=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Jv=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Qv=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,ex=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,tx=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,nx=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,ix=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,rt={alphahash_fragment:E0,alphahash_pars_fragment:w0,alphamap_fragment:A0,alphamap_pars_fragment:R0,alphatest_fragment:C0,alphatest_pars_fragment:P0,aomap_fragment:L0,aomap_pars_fragment:D0,batching_pars_vertex:I0,batching_vertex:N0,begin_vertex:U0,beginnormal_vertex:F0,bsdfs:O0,iridescence_fragment:k0,bumpmap_pars_fragment:B0,clipping_planes_fragment:z0,clipping_planes_pars_fragment:H0,clipping_planes_pars_vertex:V0,clipping_planes_vertex:G0,color_fragment:W0,color_pars_fragment:X0,color_pars_vertex:q0,color_vertex:$0,common:Y0,cube_uv_reflection_fragment:K0,defaultnormal_vertex:j0,displacementmap_pars_vertex:Z0,displacementmap_vertex:J0,emissivemap_fragment:Q0,emissivemap_pars_fragment:e_,colorspace_fragment:t_,colorspace_pars_fragment:n_,envmap_fragment:i_,envmap_common_pars_fragment:s_,envmap_pars_fragment:r_,envmap_pars_vertex:o_,envmap_physical_pars_fragment:__,envmap_vertex:a_,fog_vertex:c_,fog_pars_vertex:l_,fog_fragment:u_,fog_pars_fragment:h_,gradientmap_pars_fragment:d_,lightmap_pars_fragment:f_,lights_lambert_fragment:p_,lights_lambert_pars_fragment:m_,lights_pars_begin:g_,lights_toon_fragment:v_,lights_toon_pars_fragment:x_,lights_phong_fragment:y_,lights_phong_pars_fragment:M_,lights_physical_fragment:S_,lights_physical_pars_fragment:b_,lights_fragment_begin:T_,lights_fragment_maps:E_,lights_fragment_end:w_,logdepthbuf_fragment:A_,logdepthbuf_pars_fragment:R_,logdepthbuf_pars_vertex:C_,logdepthbuf_vertex:P_,map_fragment:L_,map_pars_fragment:D_,map_particle_fragment:I_,map_particle_pars_fragment:N_,metalnessmap_fragment:U_,metalnessmap_pars_fragment:F_,morphinstance_vertex:O_,morphcolor_vertex:k_,morphnormal_vertex:B_,morphtarget_pars_vertex:z_,morphtarget_vertex:H_,normal_fragment_begin:V_,normal_fragment_maps:G_,normal_pars_fragment:W_,normal_pars_vertex:X_,normal_vertex:q_,normalmap_pars_fragment:$_,clearcoat_normal_fragment_begin:Y_,clearcoat_normal_fragment_maps:K_,clearcoat_pars_fragment:j_,iridescence_pars_fragment:Z_,opaque_fragment:J_,packing:Q_,premultiplied_alpha_fragment:ev,project_vertex:tv,dithering_fragment:nv,dithering_pars_fragment:iv,roughnessmap_fragment:sv,roughnessmap_pars_fragment:rv,shadowmap_pars_fragment:ov,shadowmap_pars_vertex:av,shadowmap_vertex:cv,shadowmask_pars_fragment:lv,skinbase_vertex:uv,skinning_pars_vertex:hv,skinning_vertex:dv,skinnormal_vertex:fv,specularmap_fragment:pv,specularmap_pars_fragment:mv,tonemapping_fragment:gv,tonemapping_pars_fragment:_v,transmission_fragment:vv,transmission_pars_fragment:xv,uv_pars_fragment:yv,uv_pars_vertex:Mv,uv_vertex:Sv,worldpos_vertex:bv,background_vert:Tv,background_frag:Ev,backgroundCube_vert:wv,backgroundCube_frag:Av,cube_vert:Rv,cube_frag:Cv,depth_vert:Pv,depth_frag:Lv,distanceRGBA_vert:Dv,distanceRGBA_frag:Iv,equirect_vert:Nv,equirect_frag:Uv,linedashed_vert:Fv,linedashed_frag:Ov,meshbasic_vert:kv,meshbasic_frag:Bv,meshlambert_vert:zv,meshlambert_frag:Hv,meshmatcap_vert:Vv,meshmatcap_frag:Gv,meshnormal_vert:Wv,meshnormal_frag:Xv,meshphong_vert:qv,meshphong_frag:$v,meshphysical_vert:Yv,meshphysical_frag:Kv,meshtoon_vert:jv,meshtoon_frag:Zv,points_vert:Jv,points_frag:Qv,shadow_vert:ex,shadow_frag:tx,sprite_vert:nx,sprite_frag:ix},Se={common:{diffuse:{value:new ze(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new st},alphaMap:{value:null},alphaMapTransform:{value:new st},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new st}},envmap:{envMap:{value:null},envMapRotation:{value:new st},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new st}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new st}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new st},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new st},normalScale:{value:new xe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new st},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new st}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new st}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new st}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ze(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ze(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new st},alphaTest:{value:0},uvTransform:{value:new st}},sprite:{diffuse:{value:new ze(16777215)},opacity:{value:1},center:{value:new xe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new st},alphaMap:{value:null},alphaMapTransform:{value:new st},alphaTest:{value:0}}},pi={basic:{uniforms:En([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.fog]),vertexShader:rt.meshbasic_vert,fragmentShader:rt.meshbasic_frag},lambert:{uniforms:En([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,Se.lights,{emissive:{value:new ze(0)}}]),vertexShader:rt.meshlambert_vert,fragmentShader:rt.meshlambert_frag},phong:{uniforms:En([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,Se.lights,{emissive:{value:new ze(0)},specular:{value:new ze(1118481)},shininess:{value:30}}]),vertexShader:rt.meshphong_vert,fragmentShader:rt.meshphong_frag},standard:{uniforms:En([Se.common,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.roughnessmap,Se.metalnessmap,Se.fog,Se.lights,{emissive:{value:new ze(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:rt.meshphysical_vert,fragmentShader:rt.meshphysical_frag},toon:{uniforms:En([Se.common,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.gradientmap,Se.fog,Se.lights,{emissive:{value:new ze(0)}}]),vertexShader:rt.meshtoon_vert,fragmentShader:rt.meshtoon_frag},matcap:{uniforms:En([Se.common,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,{matcap:{value:null}}]),vertexShader:rt.meshmatcap_vert,fragmentShader:rt.meshmatcap_frag},points:{uniforms:En([Se.points,Se.fog]),vertexShader:rt.points_vert,fragmentShader:rt.points_frag},dashed:{uniforms:En([Se.common,Se.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:rt.linedashed_vert,fragmentShader:rt.linedashed_frag},depth:{uniforms:En([Se.common,Se.displacementmap]),vertexShader:rt.depth_vert,fragmentShader:rt.depth_frag},normal:{uniforms:En([Se.common,Se.bumpmap,Se.normalmap,Se.displacementmap,{opacity:{value:1}}]),vertexShader:rt.meshnormal_vert,fragmentShader:rt.meshnormal_frag},sprite:{uniforms:En([Se.sprite,Se.fog]),vertexShader:rt.sprite_vert,fragmentShader:rt.sprite_frag},background:{uniforms:{uvTransform:{value:new st},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:rt.background_vert,fragmentShader:rt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new st}},vertexShader:rt.backgroundCube_vert,fragmentShader:rt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:rt.cube_vert,fragmentShader:rt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:rt.equirect_vert,fragmentShader:rt.equirect_frag},distanceRGBA:{uniforms:En([Se.common,Se.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:rt.distanceRGBA_vert,fragmentShader:rt.distanceRGBA_frag},shadow:{uniforms:En([Se.lights,Se.fog,{color:{value:new ze(0)},opacity:{value:1}}]),vertexShader:rt.shadow_vert,fragmentShader:rt.shadow_frag}};pi.physical={uniforms:En([pi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new st},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new st},clearcoatNormalScale:{value:new xe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new st},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new st},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new st},sheen:{value:0},sheenColor:{value:new ze(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new st},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new st},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new st},transmissionSamplerSize:{value:new xe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new st},attenuationDistance:{value:0},attenuationColor:{value:new ze(0)},specularColor:{value:new ze(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new st},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new st},anisotropyVector:{value:new xe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new st}}]),vertexShader:rt.meshphysical_vert,fragmentShader:rt.meshphysical_frag};const ga={r:0,b:0,g:0},_s=new vi,sx=new tt;function rx(i,e,t,n,s,r,o){const a=new ze(0);let c=r===!0?0:1,l,h,u=null,d=0,f=null;function g(b){let M=b.isScene===!0?b.background:null;return M&&M.isTexture&&(M=(b.backgroundBlurriness>0?t:e).get(M)),M}function y(b){let M=!1;const R=g(b);R===null?p(a,c):R&&R.isColor&&(p(R,1),M=!0);const C=i.xr.getEnvironmentBlendMode();C==="additive"?n.buffers.color.setClear(0,0,0,1,o):C==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||M)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(b,M){const R=g(M);R&&(R.isCubeTexture||R.mapping===Ya)?(h===void 0&&(h=new Xe(new xi(1,1,1),new vn({name:"BackgroundCubeMaterial",uniforms:Pr(pi.backgroundCube.uniforms),vertexShader:pi.backgroundCube.vertexShader,fragmentShader:pi.backgroundCube.fragmentShader,side:An,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(C,w,L){this.matrixWorld.copyPosition(L.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),_s.copy(M.backgroundRotation),_s.x*=-1,_s.y*=-1,_s.z*=-1,R.isCubeTexture&&R.isRenderTargetTexture===!1&&(_s.y*=-1,_s.z*=-1),h.material.uniforms.envMap.value=R,h.material.uniforms.flipEnvMap.value=R.isCubeTexture&&R.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(sx.makeRotationFromEuler(_s)),h.material.toneMapped=pt.getTransfer(R.colorSpace)!==Rt,(u!==R||d!==R.version||f!==i.toneMapping)&&(h.material.needsUpdate=!0,u=R,d=R.version,f=i.toneMapping),h.layers.enableAll(),b.unshift(h,h.geometry,h.material,0,0,null)):R&&R.isTexture&&(l===void 0&&(l=new Xe(new as(2,2),new vn({name:"BackgroundMaterial",uniforms:Pr(pi.background.uniforms),vertexShader:pi.background.vertexShader,fragmentShader:pi.background.fragmentShader,side:Gi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=R,l.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,l.material.toneMapped=pt.getTransfer(R.colorSpace)!==Rt,R.matrixAutoUpdate===!0&&R.updateMatrix(),l.material.uniforms.uvTransform.value.copy(R.matrix),(u!==R||d!==R.version||f!==i.toneMapping)&&(l.material.needsUpdate=!0,u=R,d=R.version,f=i.toneMapping),l.layers.enableAll(),b.unshift(l,l.geometry,l.material,0,0,null))}function p(b,M){b.getRGB(ga,Uf(i)),n.buffers.color.setClear(ga.r,ga.g,ga.b,M,o)}function x(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(b,M=1){a.set(b),c=M,p(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(b){c=b,p(a,c)},render:y,addToRenderList:m,dispose:x}}function ox(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null);let r=s,o=!1;function a(E,I,k,z,Y){let $=!1;const j=u(z,k,I);r!==j&&(r=j,l(r.object)),$=f(E,z,k,Y),$&&g(E,z,k,Y),Y!==null&&e.update(Y,i.ELEMENT_ARRAY_BUFFER),($||o)&&(o=!1,M(E,I,k,z),Y!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(Y).buffer))}function c(){return i.createVertexArray()}function l(E){return i.bindVertexArray(E)}function h(E){return i.deleteVertexArray(E)}function u(E,I,k){const z=k.wireframe===!0;let Y=n[E.id];Y===void 0&&(Y={},n[E.id]=Y);let $=Y[I.id];$===void 0&&($={},Y[I.id]=$);let j=$[z];return j===void 0&&(j=d(c()),$[z]=j),j}function d(E){const I=[],k=[],z=[];for(let Y=0;Y<t;Y++)I[Y]=0,k[Y]=0,z[Y]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:k,attributeDivisors:z,object:E,attributes:{},index:null}}function f(E,I,k,z){const Y=r.attributes,$=I.attributes;let j=0;const Q=k.getAttributes();for(const K in Q)if(Q[K].location>=0){const ve=Y[K];let De=$[K];if(De===void 0&&(K==="instanceMatrix"&&E.instanceMatrix&&(De=E.instanceMatrix),K==="instanceColor"&&E.instanceColor&&(De=E.instanceColor)),ve===void 0||ve.attribute!==De||De&&ve.data!==De.data)return!0;j++}return r.attributesNum!==j||r.index!==z}function g(E,I,k,z){const Y={},$=I.attributes;let j=0;const Q=k.getAttributes();for(const K in Q)if(Q[K].location>=0){let ve=$[K];ve===void 0&&(K==="instanceMatrix"&&E.instanceMatrix&&(ve=E.instanceMatrix),K==="instanceColor"&&E.instanceColor&&(ve=E.instanceColor));const De={};De.attribute=ve,ve&&ve.data&&(De.data=ve.data),Y[K]=De,j++}r.attributes=Y,r.attributesNum=j,r.index=z}function y(){const E=r.newAttributes;for(let I=0,k=E.length;I<k;I++)E[I]=0}function m(E){p(E,0)}function p(E,I){const k=r.newAttributes,z=r.enabledAttributes,Y=r.attributeDivisors;k[E]=1,z[E]===0&&(i.enableVertexAttribArray(E),z[E]=1),Y[E]!==I&&(i.vertexAttribDivisor(E,I),Y[E]=I)}function x(){const E=r.newAttributes,I=r.enabledAttributes;for(let k=0,z=I.length;k<z;k++)I[k]!==E[k]&&(i.disableVertexAttribArray(k),I[k]=0)}function b(E,I,k,z,Y,$,j){j===!0?i.vertexAttribIPointer(E,I,k,Y,$):i.vertexAttribPointer(E,I,k,z,Y,$)}function M(E,I,k,z){y();const Y=z.attributes,$=k.getAttributes(),j=I.defaultAttributeValues;for(const Q in $){const K=$[Q];if(K.location>=0){let me=Y[Q];if(me===void 0&&(Q==="instanceMatrix"&&E.instanceMatrix&&(me=E.instanceMatrix),Q==="instanceColor"&&E.instanceColor&&(me=E.instanceColor)),me!==void 0){const ve=me.normalized,De=me.itemSize,Je=e.get(me);if(Je===void 0)continue;const mt=Je.buffer,At=Je.type,ft=Je.bytesPerElement,ie=At===i.INT||At===i.UNSIGNED_INT||me.gpuType===pu;if(me.isInterleavedBufferAttribute){const ae=me.data,Te=ae.stride,He=me.offset;if(ae.isInstancedInterleavedBuffer){for(let Ce=0;Ce<K.locationSize;Ce++)p(K.location+Ce,ae.meshPerAttribute);E.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=ae.meshPerAttribute*ae.count)}else for(let Ce=0;Ce<K.locationSize;Ce++)m(K.location+Ce);i.bindBuffer(i.ARRAY_BUFFER,mt);for(let Ce=0;Ce<K.locationSize;Ce++)b(K.location+Ce,De/K.locationSize,At,ve,Te*ft,(He+De/K.locationSize*Ce)*ft,ie)}else{if(me.isInstancedBufferAttribute){for(let ae=0;ae<K.locationSize;ae++)p(K.location+ae,me.meshPerAttribute);E.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=me.meshPerAttribute*me.count)}else for(let ae=0;ae<K.locationSize;ae++)m(K.location+ae);i.bindBuffer(i.ARRAY_BUFFER,mt);for(let ae=0;ae<K.locationSize;ae++)b(K.location+ae,De/K.locationSize,At,ve,De*ft,De/K.locationSize*ae*ft,ie)}}else if(j!==void 0){const ve=j[Q];if(ve!==void 0)switch(ve.length){case 2:i.vertexAttrib2fv(K.location,ve);break;case 3:i.vertexAttrib3fv(K.location,ve);break;case 4:i.vertexAttrib4fv(K.location,ve);break;default:i.vertexAttrib1fv(K.location,ve)}}}}x()}function R(){L();for(const E in n){const I=n[E];for(const k in I){const z=I[k];for(const Y in z)h(z[Y].object),delete z[Y];delete I[k]}delete n[E]}}function C(E){if(n[E.id]===void 0)return;const I=n[E.id];for(const k in I){const z=I[k];for(const Y in z)h(z[Y].object),delete z[Y];delete I[k]}delete n[E.id]}function w(E){for(const I in n){const k=n[I];if(k[E.id]===void 0)continue;const z=k[E.id];for(const Y in z)h(z[Y].object),delete z[Y];delete k[E.id]}}function L(){S(),o=!0,r!==s&&(r=s,l(r.object))}function S(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:L,resetDefaultState:S,dispose:R,releaseStatesOfGeometry:C,releaseStatesOfProgram:w,initAttributes:y,enableAttribute:m,disableUnusedAttributes:x}}function ax(i,e,t){let n;function s(l){n=l}function r(l,h){i.drawArrays(n,l,h),t.update(h,n,1)}function o(l,h,u){u!==0&&(i.drawArraysInstanced(n,l,h,u),t.update(h,n,u))}function a(l,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,h,0,u);let f=0;for(let g=0;g<u;g++)f+=h[g];t.update(f,n,1)}function c(l,h,u,d){if(u===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<l.length;g++)o(l[g],h[g],d[g]);else{f.multiDrawArraysInstancedWEBGL(n,l,0,h,0,d,0,u);let g=0;for(let y=0;y<u;y++)g+=h[y]*d[y];t.update(g,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function cx(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const w=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(w){return!(w!==qn&&n.convert(w)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(w){const L=w===gi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(w!==_i&&n.convert(w)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==ii&&!L)}function c(w){if(w==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);const u=t.logarithmicDepthBuffer===!0,d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),x=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),b=i.getParameter(i.MAX_VARYING_VECTORS),M=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),R=g>0,C=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:u,reversedDepthBuffer:d,maxTextures:f,maxVertexTextures:g,maxTextureSize:y,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:x,maxVaryings:b,maxFragmentUniforms:M,vertexTextures:R,maxSamples:C}}function lx(i){const e=this;let t=null,n=0,s=!1,r=!1;const o=new Es,a=new st,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const f=u.length!==0||d||n!==0||s;return s=d,n=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,f){const g=u.clippingPlanes,y=u.clipIntersection,m=u.clipShadows,p=i.get(u);if(!s||g===null||g.length===0||r&&!m)r?h(null):l();else{const x=r?0:n,b=x*4;let M=p.clippingState||null;c.value=M,M=h(g,d,b,f);for(let R=0;R!==b;++R)M[R]=t[R];p.clippingState=M,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=x}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,d,f,g){const y=u!==null?u.length:0;let m=null;if(y!==0){if(m=c.value,g!==!0||m===null){const p=f+y*4,x=d.matrixWorldInverse;a.getNormalMatrix(x),(m===null||m.length<p)&&(m=new Float32Array(p));for(let b=0,M=f;b!==y;++b,M+=4)o.copy(u[b]).applyMatrix4(x,a),o.normal.toArray(m,M),m[M+3]=o.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,m}}function ux(i){let e=new WeakMap;function t(o,a){return a===xl?o.mapping=wr:a===yl&&(o.mapping=Ar),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===xl||a===yl)if(e.has(o)){const c=e.get(o).texture;return t(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new gg(c.height);return l.fromEquirectangularTexture(i,o),e.set(o,l),o.addEventListener("dispose",s),t(l.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}const mr=4,hd=[.125,.215,.35,.446,.526,.582],Cs=20,jc=new ec,dd=new ze;let Zc=null,Jc=0,Qc=0,el=!1;const ws=(1+Math.sqrt(5))/2,lr=1/ws,fd=[new U(-ws,lr,0),new U(ws,lr,0),new U(-lr,0,ws),new U(lr,0,ws),new U(0,ws,-lr),new U(0,ws,lr),new U(-1,1,-1),new U(1,1,-1),new U(-1,1,1),new U(1,1,1)],hx=new U;class pd{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100,r={}){const{size:o=256,position:a=hx}=r;Zc=this._renderer.getRenderTarget(),Jc=this._renderer.getActiveCubeFace(),Qc=this._renderer.getActiveMipmapLevel(),el=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,n,s,c,a),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=_d(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=gd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Zc,Jc,Qc),this._renderer.xr.enabled=el,e.scissorTest=!1,_a(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===wr||e.mapping===Ar?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Zc=this._renderer.getRenderTarget(),Jc=this._renderer.getActiveCubeFace(),Qc=this._renderer.getActiveMipmapLevel(),el=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Fn,minFilter:Fn,generateMipmaps:!1,type:gi,format:qn,colorSpace:xn,depthBuffer:!1},s=md(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=md(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=dx(r)),this._blurMaterial=fx(r,e,t)}return s}_compileMaterial(e){const t=new Xe(this._lodPlanes[0],e);this._renderer.compile(t,jc)}_sceneToCubeUV(e,t,n,s,r){const c=new wn(90,1,t,n),l=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,f=u.toneMapping;u.getClearColor(dd),u.toneMapping=os,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(s),u.clearDepth(),u.setRenderTarget(null));const y=new cn({name:"PMREM.Background",side:An,depthWrite:!1,depthTest:!1}),m=new Xe(new xi,y);let p=!1;const x=e.background;x?x.isColor&&(y.color.copy(x),e.background=null,p=!0):(y.color.copy(dd),p=!0);for(let b=0;b<6;b++){const M=b%3;M===0?(c.up.set(0,l[b],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+h[b],r.y,r.z)):M===1?(c.up.set(0,0,l[b]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+h[b],r.z)):(c.up.set(0,l[b],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+h[b]));const R=this._cubeSize;_a(s,M*R,b>2?R:0,R,R),u.setRenderTarget(s),p&&u.render(m,c),u.render(e,c)}m.geometry.dispose(),m.material.dispose(),u.toneMapping=f,u.autoClear=d,e.background=x}_textureToCubeUV(e,t){const n=this._renderer,s=e.mapping===wr||e.mapping===Ar;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=_d()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=gd());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new Xe(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;const c=this._cubeSize;_a(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(o,jc)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=fd[(s-r-1)%fd.length];this._blur(e,r-1,r,o,a)}t.autoClear=n}_blur(e,t,n,s,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,s,"latitudinal",r),this._halfBlur(o,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new Xe(this._lodPlanes[s],l),d=l.uniforms,f=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*Cs-1),y=r/g,m=isFinite(r)?1+Math.floor(h*y):Cs;m>Cs&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Cs}`);const p=[];let x=0;for(let w=0;w<Cs;++w){const L=w/y,S=Math.exp(-L*L/2);p.push(S),w===0?x+=S:w<m&&(x+=2*S)}for(let w=0;w<p.length;w++)p[w]=p[w]/x;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:b}=this;d.dTheta.value=g,d.mipInt.value=b-n;const M=this._sizeLods[s],R=3*M*(s>b-mr?s-b+mr:0),C=4*(this._cubeSize-M);_a(t,R,C,3*M,2*M),c.setRenderTarget(t),c.render(u,jc)}}function dx(i){const e=[],t=[],n=[];let s=i;const r=i-mr+1+hd.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);t.push(a);let c=1/a;o>i-mr?c=hd[o-i+mr-1]:o===0&&(c=0),n.push(c);const l=1/(a-2),h=-l,u=1+l,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,g=6,y=3,m=2,p=1,x=new Float32Array(y*g*f),b=new Float32Array(m*g*f),M=new Float32Array(p*g*f);for(let C=0;C<f;C++){const w=C%3*2/3-1,L=C>2?0:-1,S=[w,L,0,w+2/3,L,0,w+2/3,L+1,0,w,L,0,w+2/3,L+1,0,w,L+1,0];x.set(S,y*g*C),b.set(d,m*g*C);const E=[C,C,C,C,C,C];M.set(E,p*g*C)}const R=new Xt;R.setAttribute("position",new ln(x,y)),R.setAttribute("uv",new ln(b,m)),R.setAttribute("faceIndex",new ln(M,p)),e.push(R),s>mr&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function md(i,e,t){const n=new $n(i,e,t);return n.texture.mapping=Ya,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function _a(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function fx(i,e,t){const n=new Float32Array(Cs),s=new U(0,1,0);return new vn({name:"SphericalGaussianBlur",defines:{n:Cs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Uu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Hi,depthTest:!1,depthWrite:!1})}function gd(){return new vn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Uu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Hi,depthTest:!1,depthWrite:!1})}function _d(){return new vn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Uu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Hi,depthTest:!1,depthWrite:!1})}function Uu(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function px(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const c=a.mapping,l=c===xl||c===yl,h=c===wr||c===Ar;if(l||h){let u=e.get(a);const d=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return t===null&&(t=new pd(i)),u=l?t.fromEquirectangular(a,u):t.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),u.texture;if(u!==void 0)return u.texture;{const f=a.image;return l&&f&&f.height>0||h&&f&&s(f)?(t===null&&(t=new pd(i)),u=l?t.fromEquirectangular(a):t.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function s(a){let c=0;const l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function r(a){const c=a.target;c.removeEventListener("dispose",r);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function mx(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const s=t(n);return s===null&&Eo("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function gx(i,e,t,n){const s={},r=new WeakMap;function o(u){const d=u.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);d.removeEventListener("dispose",o),delete s[d.id];const f=r.get(d);f&&(e.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(u,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,t.memory.geometries++),d}function c(u){const d=u.attributes;for(const f in d)e.update(d[f],i.ARRAY_BUFFER)}function l(u){const d=[],f=u.index,g=u.attributes.position;let y=0;if(f!==null){const x=f.array;y=f.version;for(let b=0,M=x.length;b<M;b+=3){const R=x[b+0],C=x[b+1],w=x[b+2];d.push(R,C,C,w,w,R)}}else if(g!==void 0){const x=g.array;y=g.version;for(let b=0,M=x.length/3-1;b<M;b+=3){const R=b+0,C=b+1,w=b+2;d.push(R,C,C,w,w,R)}}else return;const m=new(Cf(d)?Nf:If)(d,1);m.version=y;const p=r.get(u);p&&e.remove(p),r.set(u,m)}function h(u){const d=r.get(u);if(d){const f=u.index;f!==null&&d.version<f.version&&l(u)}else l(u);return r.get(u)}return{get:a,update:c,getWireframeAttribute:h}}function _x(i,e,t){let n;function s(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function c(d,f){i.drawElements(n,f,r,d*o),t.update(f,n,1)}function l(d,f,g){g!==0&&(i.drawElementsInstanced(n,f,r,d*o,g),t.update(f,n,g))}function h(d,f,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,d,0,g);let m=0;for(let p=0;p<g;p++)m+=f[p];t.update(m,n,1)}function u(d,f,g,y){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<d.length;p++)l(d[p]/o,f[p],y[p]);else{m.multiDrawElementsInstancedWEBGL(n,f,0,r,d,0,y,0,g);let p=0;for(let x=0;x<g;x++)p+=f[x]*y[x];t.update(p,n,1)}}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function vx(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(r/3);break;case i.LINES:t.lines+=a*(r/2);break;case i.LINE_STRIP:t.lines+=a*(r-1);break;case i.LINE_LOOP:t.lines+=a*r;break;case i.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function xx(i,e,t){const n=new WeakMap,s=new Mt;function r(o,a,c){const l=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0;let d=n.get(a);if(d===void 0||d.count!==u){let E=function(){L.dispose(),n.delete(a),a.removeEventListener("dispose",E)};var f=E;d!==void 0&&d.texture.dispose();const g=a.morphAttributes.position!==void 0,y=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],x=a.morphAttributes.normal||[],b=a.morphAttributes.color||[];let M=0;g===!0&&(M=1),y===!0&&(M=2),m===!0&&(M=3);let R=a.attributes.position.count*M,C=1;R>e.maxTextureSize&&(C=Math.ceil(R/e.maxTextureSize),R=e.maxTextureSize);const w=new Float32Array(R*C*4*u),L=new Pf(w,R,C,u);L.type=ii,L.needsUpdate=!0;const S=M*4;for(let I=0;I<u;I++){const k=p[I],z=x[I],Y=b[I],$=R*C*4*I;for(let j=0;j<k.count;j++){const Q=j*S;g===!0&&(s.fromBufferAttribute(k,j),w[$+Q+0]=s.x,w[$+Q+1]=s.y,w[$+Q+2]=s.z,w[$+Q+3]=0),y===!0&&(s.fromBufferAttribute(z,j),w[$+Q+4]=s.x,w[$+Q+5]=s.y,w[$+Q+6]=s.z,w[$+Q+7]=0),m===!0&&(s.fromBufferAttribute(Y,j),w[$+Q+8]=s.x,w[$+Q+9]=s.y,w[$+Q+10]=s.z,w[$+Q+11]=Y.itemSize===4?s.w:1)}}d={count:u,texture:L,size:new xe(R,C)},n.set(a,d),a.addEventListener("dispose",E)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let g=0;for(let m=0;m<l.length;m++)g+=l[m];const y=a.morphTargetsRelative?1:1-g;c.getUniforms().setValue(i,"morphTargetBaseInfluence",y),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",d.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function yx(i,e,t,n){let s=new WeakMap;function r(c){const l=n.render.frame,h=c.geometry,u=e.get(c,h);if(s.get(u)!==l&&(e.update(u),s.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),s.get(c)!==l&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){const d=c.skeleton;s.get(d)!==l&&(d.update(),s.set(d,l))}return u}function o(){s=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:r,dispose:o}}const Jf=new en,vd=new Vf(1,1),Qf=new Pf,ep=new eg,tp=new Of,xd=[],yd=[],Md=new Float32Array(16),Sd=new Float32Array(9),bd=new Float32Array(4);function Gr(i,e,t){const n=i[0];if(n<=0||n>0)return i;const s=e*t;let r=xd[s];if(r===void 0&&(r=new Float32Array(s),xd[s]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(r,a)}return r}function tn(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function nn(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function tc(i,e){let t=yd[e];t===void 0&&(t=new Int32Array(e),yd[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Mx(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Sx(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(tn(t,e))return;i.uniform2fv(this.addr,e),nn(t,e)}}function bx(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(tn(t,e))return;i.uniform3fv(this.addr,e),nn(t,e)}}function Tx(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(tn(t,e))return;i.uniform4fv(this.addr,e),nn(t,e)}}function Ex(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(tn(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),nn(t,e)}else{if(tn(t,n))return;bd.set(n),i.uniformMatrix2fv(this.addr,!1,bd),nn(t,n)}}function wx(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(tn(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),nn(t,e)}else{if(tn(t,n))return;Sd.set(n),i.uniformMatrix3fv(this.addr,!1,Sd),nn(t,n)}}function Ax(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(tn(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),nn(t,e)}else{if(tn(t,n))return;Md.set(n),i.uniformMatrix4fv(this.addr,!1,Md),nn(t,n)}}function Rx(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Cx(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(tn(t,e))return;i.uniform2iv(this.addr,e),nn(t,e)}}function Px(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(tn(t,e))return;i.uniform3iv(this.addr,e),nn(t,e)}}function Lx(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(tn(t,e))return;i.uniform4iv(this.addr,e),nn(t,e)}}function Dx(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Ix(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(tn(t,e))return;i.uniform2uiv(this.addr,e),nn(t,e)}}function Nx(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(tn(t,e))return;i.uniform3uiv(this.addr,e),nn(t,e)}}function Ux(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(tn(t,e))return;i.uniform4uiv(this.addr,e),nn(t,e)}}function Fx(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(vd.compareFunction=Rf,r=vd):r=Jf,t.setTexture2D(e||r,s)}function Ox(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||ep,s)}function kx(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||tp,s)}function Bx(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||Qf,s)}function zx(i){switch(i){case 5126:return Mx;case 35664:return Sx;case 35665:return bx;case 35666:return Tx;case 35674:return Ex;case 35675:return wx;case 35676:return Ax;case 5124:case 35670:return Rx;case 35667:case 35671:return Cx;case 35668:case 35672:return Px;case 35669:case 35673:return Lx;case 5125:return Dx;case 36294:return Ix;case 36295:return Nx;case 36296:return Ux;case 35678:case 36198:case 36298:case 36306:case 35682:return Fx;case 35679:case 36299:case 36307:return Ox;case 35680:case 36300:case 36308:case 36293:return kx;case 36289:case 36303:case 36311:case 36292:return Bx}}function Hx(i,e){i.uniform1fv(this.addr,e)}function Vx(i,e){const t=Gr(e,this.size,2);i.uniform2fv(this.addr,t)}function Gx(i,e){const t=Gr(e,this.size,3);i.uniform3fv(this.addr,t)}function Wx(i,e){const t=Gr(e,this.size,4);i.uniform4fv(this.addr,t)}function Xx(i,e){const t=Gr(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function qx(i,e){const t=Gr(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function $x(i,e){const t=Gr(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Yx(i,e){i.uniform1iv(this.addr,e)}function Kx(i,e){i.uniform2iv(this.addr,e)}function jx(i,e){i.uniform3iv(this.addr,e)}function Zx(i,e){i.uniform4iv(this.addr,e)}function Jx(i,e){i.uniform1uiv(this.addr,e)}function Qx(i,e){i.uniform2uiv(this.addr,e)}function ey(i,e){i.uniform3uiv(this.addr,e)}function ty(i,e){i.uniform4uiv(this.addr,e)}function ny(i,e,t){const n=this.cache,s=e.length,r=tc(t,s);tn(n,r)||(i.uniform1iv(this.addr,r),nn(n,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||Jf,r[o])}function iy(i,e,t){const n=this.cache,s=e.length,r=tc(t,s);tn(n,r)||(i.uniform1iv(this.addr,r),nn(n,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||ep,r[o])}function sy(i,e,t){const n=this.cache,s=e.length,r=tc(t,s);tn(n,r)||(i.uniform1iv(this.addr,r),nn(n,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||tp,r[o])}function ry(i,e,t){const n=this.cache,s=e.length,r=tc(t,s);tn(n,r)||(i.uniform1iv(this.addr,r),nn(n,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||Qf,r[o])}function oy(i){switch(i){case 5126:return Hx;case 35664:return Vx;case 35665:return Gx;case 35666:return Wx;case 35674:return Xx;case 35675:return qx;case 35676:return $x;case 5124:case 35670:return Yx;case 35667:case 35671:return Kx;case 35668:case 35672:return jx;case 35669:case 35673:return Zx;case 5125:return Jx;case 36294:return Qx;case 36295:return ey;case 36296:return ty;case 35678:case 36198:case 36298:case 36306:case 35682:return ny;case 35679:case 36299:case 36307:return iy;case 35680:case 36300:case 36308:case 36293:return sy;case 36289:case 36303:case 36311:case 36292:return ry}}class ay{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=zx(t.type)}}class cy{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=oy(t.type)}}class ly{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(e,t[a.id],n)}}}const tl=/(\w+)(\])?(\[|\.)?/g;function Td(i,e){i.seq.push(e),i.map[e.id]=e}function uy(i,e,t){const n=i.name,s=n.length;for(tl.lastIndex=0;;){const r=tl.exec(n),o=tl.lastIndex;let a=r[1];const c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){Td(t,l===void 0?new ay(a,i,e):new cy(a,i,e));break}else{let u=t.map[a];u===void 0&&(u=new ly(a),Td(t,u)),t=u}}}class Ca{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);uy(r,o,this)}}setValue(e,t,n,s){const r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){const s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,o=t.length;r!==o;++r){const a=t[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,s)}}static seqWithValue(e,t){const n=[];for(let s=0,r=e.length;s!==r;++s){const o=e[s];o.id in t&&n.push(o)}return n}}function Ed(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const hy=37297;let dy=0;function fy(i,e){const t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}const wd=new st;function py(i){pt._getMatrix(wd,pt.workingColorSpace,i);const e=`mat3( ${wd.elements.map(t=>t.toFixed(4))} )`;switch(pt.getTransfer(i)){case Na:return[e,"LinearTransferOETF"];case Rt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Ad(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const a=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+fy(i.getShaderSource(e),a)}else return r}function my(i,e){const t=py(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function gy(i,e){let t;switch(e){case hf:t="Linear";break;case df:t="Reinhard";break;case ff:t="Cineon";break;case fu:t="ACESFilmic";break;case mf:t="AgX";break;case gf:t="Neutral";break;case pf:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const va=new U;function _y(){pt.getLuminanceCoefficients(va);const i=va.x.toFixed(4),e=va.y.toFixed(4),t=va.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function vy(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(co).join(`
`)}function xy(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function yy(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(e,s),o=r.name;let a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function co(i){return i!==""}function Rd(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Cd(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const My=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ql(i){return i.replace(My,by)}const Sy=new Map;function by(i,e){let t=rt[e];if(t===void 0){const n=Sy.get(e);if(n!==void 0)t=rt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Ql(t)}const Ty=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Pd(i){return i.replace(Ty,Ey)}function Ey(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Ld(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function wy(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===cf?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===lf?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Ni&&(e="SHADOWMAP_TYPE_VSM"),e}function Ay(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case wr:case Ar:e="ENVMAP_TYPE_CUBE";break;case Ya:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Ry(i){let e="ENVMAP_MODE_REFLECTION";return i.envMap&&i.envMapMode===Ar&&(e="ENVMAP_MODE_REFRACTION"),e}function Cy(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case uf:e="ENVMAP_BLENDING_MULTIPLY";break;case gm:e="ENVMAP_BLENDING_MIX";break;case _m:e="ENVMAP_BLENDING_ADD";break}return e}function Py(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function Ly(i,e,t,n){const s=i.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const c=wy(t),l=Ay(t),h=Ry(t),u=Cy(t),d=Py(t),f=vy(t),g=xy(r),y=s.createProgram();let m,p,x=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(co).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(co).join(`
`),p.length>0&&(p+=`
`)):(m=[Ld(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(co).join(`
`),p=[Ld(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==os?"#define TONE_MAPPING":"",t.toneMapping!==os?rt.tonemapping_pars_fragment:"",t.toneMapping!==os?gy("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",rt.colorspace_pars_fragment,my("linearToOutputTexel",t.outputColorSpace),_y(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(co).join(`
`)),o=Ql(o),o=Rd(o,t),o=Cd(o,t),a=Ql(a),a=Rd(a,t),a=Cd(a,t),o=Pd(o),a=Pd(a),t.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===Th?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Th?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const b=x+m+o,M=x+p+a,R=Ed(s,s.VERTEX_SHADER,b),C=Ed(s,s.FRAGMENT_SHADER,M);s.attachShader(y,R),s.attachShader(y,C),t.index0AttributeName!==void 0?s.bindAttribLocation(y,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(y,0,"position"),s.linkProgram(y);function w(I){if(i.debug.checkShaderErrors){const k=s.getProgramInfoLog(y)||"",z=s.getShaderInfoLog(R)||"",Y=s.getShaderInfoLog(C)||"",$=k.trim(),j=z.trim(),Q=Y.trim();let K=!0,me=!0;if(s.getProgramParameter(y,s.LINK_STATUS)===!1)if(K=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,y,R,C);else{const ve=Ad(s,R,"vertex"),De=Ad(s,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(y,s.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+$+`
`+ve+`
`+De)}else $!==""?console.warn("THREE.WebGLProgram: Program Info Log:",$):(j===""||Q==="")&&(me=!1);me&&(I.diagnostics={runnable:K,programLog:$,vertexShader:{log:j,prefix:m},fragmentShader:{log:Q,prefix:p}})}s.deleteShader(R),s.deleteShader(C),L=new Ca(s,y),S=yy(s,y)}let L;this.getUniforms=function(){return L===void 0&&w(this),L};let S;this.getAttributes=function(){return S===void 0&&w(this),S};let E=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=s.getProgramParameter(y,hy)),E},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(y),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=dy++,this.cacheKey=e,this.usedTimes=1,this.program=y,this.vertexShader=R,this.fragmentShader=C,this}let Dy=0;class Iy{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Ny(e),t.set(e,n)),n}}class Ny{constructor(e){this.id=Dy++,this.code=e,this.usedTimes=0}}function Uy(i,e,t,n,s,r,o){const a=new Lf,c=new Iy,l=new Set,h=[],u=s.logarithmicDepthBuffer,d=s.vertexTextures;let f=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function y(S){return l.add(S),S===0?"uv":`uv${S}`}function m(S,E,I,k,z){const Y=k.fog,$=z.geometry,j=S.isMeshStandardMaterial?k.environment:null,Q=(S.isMeshStandardMaterial?t:e).get(S.envMap||j),K=Q&&Q.mapping===Ya?Q.image.height:null,me=g[S.type];S.precision!==null&&(f=s.getMaxPrecision(S.precision),f!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",f,"instead."));const ve=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,De=ve!==void 0?ve.length:0;let Je=0;$.morphAttributes.position!==void 0&&(Je=1),$.morphAttributes.normal!==void 0&&(Je=2),$.morphAttributes.color!==void 0&&(Je=3);let mt,At,ft,ie;if(me){const xt=pi[me];mt=xt.vertexShader,At=xt.fragmentShader}else mt=S.vertexShader,At=S.fragmentShader,c.update(S),ft=c.getVertexShaderID(S),ie=c.getFragmentShaderID(S);const ae=i.getRenderTarget(),Te=i.state.buffers.depth.getReversed(),He=z.isInstancedMesh===!0,Ce=z.isBatchedMesh===!0,at=!!S.map,Kt=!!S.matcap,O=!!Q,Nt=!!S.aoMap,je=!!S.lightMap,qe=!!S.bumpMap,Ne=!!S.normalMap,Ut=!!S.displacementMap,Oe=!!S.emissiveMap,nt=!!S.metalnessMap,jt=!!S.roughnessMap,zt=S.anisotropy>0,N=S.clearcoat>0,A=S.dispersion>0,X=S.iridescence>0,te=S.sheen>0,oe=S.transmission>0,Z=zt&&!!S.anisotropyMap,Ve=N&&!!S.clearcoatMap,ge=N&&!!S.clearcoatNormalMap,Ue=N&&!!S.clearcoatRoughnessMap,ke=X&&!!S.iridescenceMap,he=X&&!!S.iridescenceThicknessMap,ye=te&&!!S.sheenColorMap,$e=te&&!!S.sheenRoughnessMap,Be=!!S.specularMap,Me=!!S.specularColorMap,Qe=!!S.specularIntensityMap,B=oe&&!!S.transmissionMap,de=oe&&!!S.thicknessMap,pe=!!S.gradientMap,Ee=!!S.alphaMap,ue=S.alphaTest>0,se=!!S.alphaHash,Pe=!!S.extensions;let Ze=os;S.toneMapped&&(ae===null||ae.isXRRenderTarget===!0)&&(Ze=i.toneMapping);const vt={shaderID:me,shaderType:S.type,shaderName:S.name,vertexShader:mt,fragmentShader:At,defines:S.defines,customVertexShaderID:ft,customFragmentShaderID:ie,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:f,batching:Ce,batchingColor:Ce&&z._colorsTexture!==null,instancing:He,instancingColor:He&&z.instanceColor!==null,instancingMorph:He&&z.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:ae===null?i.outputColorSpace:ae.isXRRenderTarget===!0?ae.texture.colorSpace:xn,alphaToCoverage:!!S.alphaToCoverage,map:at,matcap:Kt,envMap:O,envMapMode:O&&Q.mapping,envMapCubeUVHeight:K,aoMap:Nt,lightMap:je,bumpMap:qe,normalMap:Ne,displacementMap:d&&Ut,emissiveMap:Oe,normalMapObjectSpace:Ne&&S.normalMapType===bm,normalMapTangentSpace:Ne&&S.normalMapType===Af,metalnessMap:nt,roughnessMap:jt,anisotropy:zt,anisotropyMap:Z,clearcoat:N,clearcoatMap:Ve,clearcoatNormalMap:ge,clearcoatRoughnessMap:Ue,dispersion:A,iridescence:X,iridescenceMap:ke,iridescenceThicknessMap:he,sheen:te,sheenColorMap:ye,sheenRoughnessMap:$e,specularMap:Be,specularColorMap:Me,specularIntensityMap:Qe,transmission:oe,transmissionMap:B,thicknessMap:de,gradientMap:pe,opaque:S.transparent===!1&&S.blending===xr&&S.alphaToCoverage===!1,alphaMap:Ee,alphaTest:ue,alphaHash:se,combine:S.combine,mapUv:at&&y(S.map.channel),aoMapUv:Nt&&y(S.aoMap.channel),lightMapUv:je&&y(S.lightMap.channel),bumpMapUv:qe&&y(S.bumpMap.channel),normalMapUv:Ne&&y(S.normalMap.channel),displacementMapUv:Ut&&y(S.displacementMap.channel),emissiveMapUv:Oe&&y(S.emissiveMap.channel),metalnessMapUv:nt&&y(S.metalnessMap.channel),roughnessMapUv:jt&&y(S.roughnessMap.channel),anisotropyMapUv:Z&&y(S.anisotropyMap.channel),clearcoatMapUv:Ve&&y(S.clearcoatMap.channel),clearcoatNormalMapUv:ge&&y(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ue&&y(S.clearcoatRoughnessMap.channel),iridescenceMapUv:ke&&y(S.iridescenceMap.channel),iridescenceThicknessMapUv:he&&y(S.iridescenceThicknessMap.channel),sheenColorMapUv:ye&&y(S.sheenColorMap.channel),sheenRoughnessMapUv:$e&&y(S.sheenRoughnessMap.channel),specularMapUv:Be&&y(S.specularMap.channel),specularColorMapUv:Me&&y(S.specularColorMap.channel),specularIntensityMapUv:Qe&&y(S.specularIntensityMap.channel),transmissionMapUv:B&&y(S.transmissionMap.channel),thicknessMapUv:de&&y(S.thicknessMap.channel),alphaMapUv:Ee&&y(S.alphaMap.channel),vertexTangents:!!$.attributes.tangent&&(Ne||zt),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,pointsUvs:z.isPoints===!0&&!!$.attributes.uv&&(at||Ee),fog:!!Y,useFog:S.fog===!0,fogExp2:!!Y&&Y.isFogExp2,flatShading:S.flatShading===!0&&S.wireframe===!1,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:Te,skinning:z.isSkinnedMesh===!0,morphTargets:$.morphAttributes.position!==void 0,morphNormals:$.morphAttributes.normal!==void 0,morphColors:$.morphAttributes.color!==void 0,morphTargetsCount:De,morphTextureStride:Je,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:i.shadowMap.enabled&&I.length>0,shadowMapType:i.shadowMap.type,toneMapping:Ze,decodeVideoTexture:at&&S.map.isVideoTexture===!0&&pt.getTransfer(S.map.colorSpace)===Rt,decodeVideoTextureEmissive:Oe&&S.emissiveMap.isVideoTexture===!0&&pt.getTransfer(S.emissiveMap.colorSpace)===Rt,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===Un,flipSided:S.side===An,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:Pe&&S.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Pe&&S.extensions.multiDraw===!0||Ce)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return vt.vertexUv1s=l.has(1),vt.vertexUv2s=l.has(2),vt.vertexUv3s=l.has(3),l.clear(),vt}function p(S){const E=[];if(S.shaderID?E.push(S.shaderID):(E.push(S.customVertexShaderID),E.push(S.customFragmentShaderID)),S.defines!==void 0)for(const I in S.defines)E.push(I),E.push(S.defines[I]);return S.isRawShaderMaterial===!1&&(x(E,S),b(E,S),E.push(i.outputColorSpace)),E.push(S.customProgramCacheKey),E.join()}function x(S,E){S.push(E.precision),S.push(E.outputColorSpace),S.push(E.envMapMode),S.push(E.envMapCubeUVHeight),S.push(E.mapUv),S.push(E.alphaMapUv),S.push(E.lightMapUv),S.push(E.aoMapUv),S.push(E.bumpMapUv),S.push(E.normalMapUv),S.push(E.displacementMapUv),S.push(E.emissiveMapUv),S.push(E.metalnessMapUv),S.push(E.roughnessMapUv),S.push(E.anisotropyMapUv),S.push(E.clearcoatMapUv),S.push(E.clearcoatNormalMapUv),S.push(E.clearcoatRoughnessMapUv),S.push(E.iridescenceMapUv),S.push(E.iridescenceThicknessMapUv),S.push(E.sheenColorMapUv),S.push(E.sheenRoughnessMapUv),S.push(E.specularMapUv),S.push(E.specularColorMapUv),S.push(E.specularIntensityMapUv),S.push(E.transmissionMapUv),S.push(E.thicknessMapUv),S.push(E.combine),S.push(E.fogExp2),S.push(E.sizeAttenuation),S.push(E.morphTargetsCount),S.push(E.morphAttributeCount),S.push(E.numDirLights),S.push(E.numPointLights),S.push(E.numSpotLights),S.push(E.numSpotLightMaps),S.push(E.numHemiLights),S.push(E.numRectAreaLights),S.push(E.numDirLightShadows),S.push(E.numPointLightShadows),S.push(E.numSpotLightShadows),S.push(E.numSpotLightShadowsWithMaps),S.push(E.numLightProbes),S.push(E.shadowMapType),S.push(E.toneMapping),S.push(E.numClippingPlanes),S.push(E.numClipIntersection),S.push(E.depthPacking)}function b(S,E){a.disableAll(),E.supportsVertexTextures&&a.enable(0),E.instancing&&a.enable(1),E.instancingColor&&a.enable(2),E.instancingMorph&&a.enable(3),E.matcap&&a.enable(4),E.envMap&&a.enable(5),E.normalMapObjectSpace&&a.enable(6),E.normalMapTangentSpace&&a.enable(7),E.clearcoat&&a.enable(8),E.iridescence&&a.enable(9),E.alphaTest&&a.enable(10),E.vertexColors&&a.enable(11),E.vertexAlphas&&a.enable(12),E.vertexUv1s&&a.enable(13),E.vertexUv2s&&a.enable(14),E.vertexUv3s&&a.enable(15),E.vertexTangents&&a.enable(16),E.anisotropy&&a.enable(17),E.alphaHash&&a.enable(18),E.batching&&a.enable(19),E.dispersion&&a.enable(20),E.batchingColor&&a.enable(21),E.gradientMap&&a.enable(22),S.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.reversedDepthBuffer&&a.enable(4),E.skinning&&a.enable(5),E.morphTargets&&a.enable(6),E.morphNormals&&a.enable(7),E.morphColors&&a.enable(8),E.premultipliedAlpha&&a.enable(9),E.shadowMapEnabled&&a.enable(10),E.doubleSided&&a.enable(11),E.flipSided&&a.enable(12),E.useDepthPacking&&a.enable(13),E.dithering&&a.enable(14),E.transmission&&a.enable(15),E.sheen&&a.enable(16),E.opaque&&a.enable(17),E.pointsUvs&&a.enable(18),E.decodeVideoTexture&&a.enable(19),E.decodeVideoTextureEmissive&&a.enable(20),E.alphaToCoverage&&a.enable(21),S.push(a.mask)}function M(S){const E=g[S.type];let I;if(E){const k=pi[E];I=wo.clone(k.uniforms)}else I=S.uniforms;return I}function R(S,E){let I;for(let k=0,z=h.length;k<z;k++){const Y=h[k];if(Y.cacheKey===E){I=Y,++I.usedTimes;break}}return I===void 0&&(I=new Ly(i,E,S,r),h.push(I)),I}function C(S){if(--S.usedTimes===0){const E=h.indexOf(S);h[E]=h[h.length-1],h.pop(),S.destroy()}}function w(S){c.remove(S)}function L(){c.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:M,acquireProgram:R,releaseProgram:C,releaseShaderCache:w,programs:h,dispose:L}}function Fy(){let i=new WeakMap;function e(o){return i.has(o)}function t(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,c){i.get(o)[a]=c}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function Oy(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Dd(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Id(){const i=[];let e=0;const t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function o(u,d,f,g,y,m){let p=i[e];return p===void 0?(p={id:u.id,object:u,geometry:d,material:f,groupOrder:g,renderOrder:u.renderOrder,z:y,group:m},i[e]=p):(p.id=u.id,p.object=u,p.geometry=d,p.material=f,p.groupOrder=g,p.renderOrder=u.renderOrder,p.z=y,p.group=m),e++,p}function a(u,d,f,g,y,m){const p=o(u,d,f,g,y,m);f.transmission>0?n.push(p):f.transparent===!0?s.push(p):t.push(p)}function c(u,d,f,g,y,m){const p=o(u,d,f,g,y,m);f.transmission>0?n.unshift(p):f.transparent===!0?s.unshift(p):t.unshift(p)}function l(u,d){t.length>1&&t.sort(u||Oy),n.length>1&&n.sort(d||Dd),s.length>1&&s.sort(d||Dd)}function h(){for(let u=e,d=i.length;u<d;u++){const f=i[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:a,unshift:c,finish:h,sort:l}}function ky(){let i=new WeakMap;function e(n,s){const r=i.get(n);let o;return r===void 0?(o=new Id,i.set(n,[o])):s>=r.length?(o=new Id,r.push(o)):o=r[s],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function By(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new U,color:new ze};break;case"SpotLight":t={position:new U,direction:new U,color:new ze,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new U,color:new ze,distance:0,decay:0};break;case"HemisphereLight":t={direction:new U,skyColor:new ze,groundColor:new ze};break;case"RectAreaLight":t={color:new ze,position:new U,halfWidth:new U,halfHeight:new U};break}return i[e.id]=t,t}}}function zy(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xe};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xe};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xe,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let Hy=0;function Vy(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function Gy(i){const e=new By,t=zy(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new U);const s=new U,r=new tt,o=new tt;function a(l){let h=0,u=0,d=0;for(let S=0;S<9;S++)n.probe[S].set(0,0,0);let f=0,g=0,y=0,m=0,p=0,x=0,b=0,M=0,R=0,C=0,w=0;l.sort(Vy);for(let S=0,E=l.length;S<E;S++){const I=l[S],k=I.color,z=I.intensity,Y=I.distance,$=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)h+=k.r*z,u+=k.g*z,d+=k.b*z;else if(I.isLightProbe){for(let j=0;j<9;j++)n.probe[j].addScaledVector(I.sh.coefficients[j],z);w++}else if(I.isDirectionalLight){const j=e.get(I);if(j.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){const Q=I.shadow,K=t.get(I);K.shadowIntensity=Q.intensity,K.shadowBias=Q.bias,K.shadowNormalBias=Q.normalBias,K.shadowRadius=Q.radius,K.shadowMapSize=Q.mapSize,n.directionalShadow[f]=K,n.directionalShadowMap[f]=$,n.directionalShadowMatrix[f]=I.shadow.matrix,x++}n.directional[f]=j,f++}else if(I.isSpotLight){const j=e.get(I);j.position.setFromMatrixPosition(I.matrixWorld),j.color.copy(k).multiplyScalar(z),j.distance=Y,j.coneCos=Math.cos(I.angle),j.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),j.decay=I.decay,n.spot[y]=j;const Q=I.shadow;if(I.map&&(n.spotLightMap[R]=I.map,R++,Q.updateMatrices(I),I.castShadow&&C++),n.spotLightMatrix[y]=Q.matrix,I.castShadow){const K=t.get(I);K.shadowIntensity=Q.intensity,K.shadowBias=Q.bias,K.shadowNormalBias=Q.normalBias,K.shadowRadius=Q.radius,K.shadowMapSize=Q.mapSize,n.spotShadow[y]=K,n.spotShadowMap[y]=$,M++}y++}else if(I.isRectAreaLight){const j=e.get(I);j.color.copy(k).multiplyScalar(z),j.halfWidth.set(I.width*.5,0,0),j.halfHeight.set(0,I.height*.5,0),n.rectArea[m]=j,m++}else if(I.isPointLight){const j=e.get(I);if(j.color.copy(I.color).multiplyScalar(I.intensity),j.distance=I.distance,j.decay=I.decay,I.castShadow){const Q=I.shadow,K=t.get(I);K.shadowIntensity=Q.intensity,K.shadowBias=Q.bias,K.shadowNormalBias=Q.normalBias,K.shadowRadius=Q.radius,K.shadowMapSize=Q.mapSize,K.shadowCameraNear=Q.camera.near,K.shadowCameraFar=Q.camera.far,n.pointShadow[g]=K,n.pointShadowMap[g]=$,n.pointShadowMatrix[g]=I.shadow.matrix,b++}n.point[g]=j,g++}else if(I.isHemisphereLight){const j=e.get(I);j.skyColor.copy(I.color).multiplyScalar(z),j.groundColor.copy(I.groundColor).multiplyScalar(z),n.hemi[p]=j,p++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Se.LTC_FLOAT_1,n.rectAreaLTC2=Se.LTC_FLOAT_2):(n.rectAreaLTC1=Se.LTC_HALF_1,n.rectAreaLTC2=Se.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;const L=n.hash;(L.directionalLength!==f||L.pointLength!==g||L.spotLength!==y||L.rectAreaLength!==m||L.hemiLength!==p||L.numDirectionalShadows!==x||L.numPointShadows!==b||L.numSpotShadows!==M||L.numSpotMaps!==R||L.numLightProbes!==w)&&(n.directional.length=f,n.spot.length=y,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=x,n.directionalShadowMap.length=x,n.pointShadow.length=b,n.pointShadowMap.length=b,n.spotShadow.length=M,n.spotShadowMap.length=M,n.directionalShadowMatrix.length=x,n.pointShadowMatrix.length=b,n.spotLightMatrix.length=M+R-C,n.spotLightMap.length=R,n.numSpotLightShadowsWithMaps=C,n.numLightProbes=w,L.directionalLength=f,L.pointLength=g,L.spotLength=y,L.rectAreaLength=m,L.hemiLength=p,L.numDirectionalShadows=x,L.numPointShadows=b,L.numSpotShadows=M,L.numSpotMaps=R,L.numLightProbes=w,n.version=Hy++)}function c(l,h){let u=0,d=0,f=0,g=0,y=0;const m=h.matrixWorldInverse;for(let p=0,x=l.length;p<x;p++){const b=l[p];if(b.isDirectionalLight){const M=n.directional[u];M.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(m),u++}else if(b.isSpotLight){const M=n.spot[f];M.position.setFromMatrixPosition(b.matrixWorld),M.position.applyMatrix4(m),M.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(m),f++}else if(b.isRectAreaLight){const M=n.rectArea[g];M.position.setFromMatrixPosition(b.matrixWorld),M.position.applyMatrix4(m),o.identity(),r.copy(b.matrixWorld),r.premultiply(m),o.extractRotation(r),M.halfWidth.set(b.width*.5,0,0),M.halfHeight.set(0,b.height*.5,0),M.halfWidth.applyMatrix4(o),M.halfHeight.applyMatrix4(o),g++}else if(b.isPointLight){const M=n.point[d];M.position.setFromMatrixPosition(b.matrixWorld),M.position.applyMatrix4(m),d++}else if(b.isHemisphereLight){const M=n.hemi[y];M.direction.setFromMatrixPosition(b.matrixWorld),M.direction.transformDirection(m),y++}}}return{setup:a,setupView:c,state:n}}function Nd(i){const e=new Gy(i),t=[],n=[];function s(h){l.camera=h,t.length=0,n.length=0}function r(h){t.push(h)}function o(h){n.push(h)}function a(){e.setup(t)}function c(h){e.setupView(t,h)}const l={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:a,setupLightsView:c,pushLight:r,pushShadow:o}}function Wy(i){let e=new WeakMap;function t(s,r=0){const o=e.get(s);let a;return o===void 0?(a=new Nd(i),e.set(s,[a])):r>=o.length?(a=new Nd(i),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}const Xy=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,qy=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function $y(i,e,t){let n=new wu;const s=new xe,r=new xe,o=new Mt,a=new Wg({depthPacking:Sm}),c=new Xg,l={},h=t.maxTextureSize,u={[Gi]:An,[An]:Gi,[Un]:Un},d=new vn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new xe},radius:{value:4}},vertexShader:Xy,fragmentShader:qy}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const g=new Xt;g.setAttribute("position",new ln(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const y=new Xe(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=cf;let p=this.type;this.render=function(C,w,L){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||C.length===0)return;const S=i.getRenderTarget(),E=i.getActiveCubeFace(),I=i.getActiveMipmapLevel(),k=i.state;k.setBlending(Hi),k.buffers.depth.getReversed()===!0?k.buffers.color.setClear(0,0,0,0):k.buffers.color.setClear(1,1,1,1),k.buffers.depth.setTest(!0),k.setScissorTest(!1);const z=p!==Ni&&this.type===Ni,Y=p===Ni&&this.type!==Ni;for(let $=0,j=C.length;$<j;$++){const Q=C[$],K=Q.shadow;if(K===void 0){console.warn("THREE.WebGLShadowMap:",Q,"has no shadow.");continue}if(K.autoUpdate===!1&&K.needsUpdate===!1)continue;s.copy(K.mapSize);const me=K.getFrameExtents();if(s.multiply(me),r.copy(K.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/me.x),s.x=r.x*me.x,K.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/me.y),s.y=r.y*me.y,K.mapSize.y=r.y)),K.map===null||z===!0||Y===!0){const De=this.type!==Ni?{minFilter:Qt,magFilter:Qt}:{};K.map!==null&&K.map.dispose(),K.map=new $n(s.x,s.y,De),K.map.texture.name=Q.name+".shadowMap",K.camera.updateProjectionMatrix()}i.setRenderTarget(K.map),i.clear();const ve=K.getViewportCount();for(let De=0;De<ve;De++){const Je=K.getViewport(De);o.set(r.x*Je.x,r.y*Je.y,r.x*Je.z,r.y*Je.w),k.viewport(o),K.updateMatrices(Q,De),n=K.getFrustum(),M(w,L,K.camera,Q,this.type)}K.isPointLightShadow!==!0&&this.type===Ni&&x(K,L),K.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(S,E,I)};function x(C,w){const L=e.update(y);d.defines.VSM_SAMPLES!==C.blurSamples&&(d.defines.VSM_SAMPLES=C.blurSamples,f.defines.VSM_SAMPLES=C.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new $n(s.x,s.y)),d.uniforms.shadow_pass.value=C.map.texture,d.uniforms.resolution.value=C.mapSize,d.uniforms.radius.value=C.radius,i.setRenderTarget(C.mapPass),i.clear(),i.renderBufferDirect(w,null,L,d,y,null),f.uniforms.shadow_pass.value=C.mapPass.texture,f.uniforms.resolution.value=C.mapSize,f.uniforms.radius.value=C.radius,i.setRenderTarget(C.map),i.clear(),i.renderBufferDirect(w,null,L,f,y,null)}function b(C,w,L,S){let E=null;const I=L.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(I!==void 0)E=I;else if(E=L.isPointLight===!0?c:a,i.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0||w.alphaToCoverage===!0){const k=E.uuid,z=w.uuid;let Y=l[k];Y===void 0&&(Y={},l[k]=Y);let $=Y[z];$===void 0&&($=E.clone(),Y[z]=$,w.addEventListener("dispose",R)),E=$}if(E.visible=w.visible,E.wireframe=w.wireframe,S===Ni?E.side=w.shadowSide!==null?w.shadowSide:w.side:E.side=w.shadowSide!==null?w.shadowSide:u[w.side],E.alphaMap=w.alphaMap,E.alphaTest=w.alphaToCoverage===!0?.5:w.alphaTest,E.map=w.map,E.clipShadows=w.clipShadows,E.clippingPlanes=w.clippingPlanes,E.clipIntersection=w.clipIntersection,E.displacementMap=w.displacementMap,E.displacementScale=w.displacementScale,E.displacementBias=w.displacementBias,E.wireframeLinewidth=w.wireframeLinewidth,E.linewidth=w.linewidth,L.isPointLight===!0&&E.isMeshDistanceMaterial===!0){const k=i.properties.get(E);k.light=L}return E}function M(C,w,L,S,E){if(C.visible===!1)return;if(C.layers.test(w.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&E===Ni)&&(!C.frustumCulled||n.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,C.matrixWorld);const z=e.update(C),Y=C.material;if(Array.isArray(Y)){const $=z.groups;for(let j=0,Q=$.length;j<Q;j++){const K=$[j],me=Y[K.materialIndex];if(me&&me.visible){const ve=b(C,me,S,E);C.onBeforeShadow(i,C,w,L,z,ve,K),i.renderBufferDirect(L,null,z,ve,C,K),C.onAfterShadow(i,C,w,L,z,ve,K)}}}else if(Y.visible){const $=b(C,Y,S,E);C.onBeforeShadow(i,C,w,L,z,$,null),i.renderBufferDirect(L,null,z,$,C,null),C.onAfterShadow(i,C,w,L,z,$,null)}}const k=C.children;for(let z=0,Y=k.length;z<Y;z++)M(k[z],w,L,S,E)}function R(C){C.target.removeEventListener("dispose",R);for(const L in l){const S=l[L],E=C.target.uuid;E in S&&(S[E].dispose(),delete S[E])}}}const Yy={[dl]:fl,[pl]:_l,[ml]:vl,[Er]:gl,[fl]:dl,[_l]:pl,[vl]:ml,[gl]:Er};function Ky(i,e){function t(){let B=!1;const de=new Mt;let pe=null;const Ee=new Mt(0,0,0,0);return{setMask:function(ue){pe!==ue&&!B&&(i.colorMask(ue,ue,ue,ue),pe=ue)},setLocked:function(ue){B=ue},setClear:function(ue,se,Pe,Ze,vt){vt===!0&&(ue*=Ze,se*=Ze,Pe*=Ze),de.set(ue,se,Pe,Ze),Ee.equals(de)===!1&&(i.clearColor(ue,se,Pe,Ze),Ee.copy(de))},reset:function(){B=!1,pe=null,Ee.set(-1,0,0,0)}}}function n(){let B=!1,de=!1,pe=null,Ee=null,ue=null;return{setReversed:function(se){if(de!==se){const Pe=e.get("EXT_clip_control");se?Pe.clipControlEXT(Pe.LOWER_LEFT_EXT,Pe.ZERO_TO_ONE_EXT):Pe.clipControlEXT(Pe.LOWER_LEFT_EXT,Pe.NEGATIVE_ONE_TO_ONE_EXT),de=se;const Ze=ue;ue=null,this.setClear(Ze)}},getReversed:function(){return de},setTest:function(se){se?ae(i.DEPTH_TEST):Te(i.DEPTH_TEST)},setMask:function(se){pe!==se&&!B&&(i.depthMask(se),pe=se)},setFunc:function(se){if(de&&(se=Yy[se]),Ee!==se){switch(se){case dl:i.depthFunc(i.NEVER);break;case fl:i.depthFunc(i.ALWAYS);break;case pl:i.depthFunc(i.LESS);break;case Er:i.depthFunc(i.LEQUAL);break;case ml:i.depthFunc(i.EQUAL);break;case gl:i.depthFunc(i.GEQUAL);break;case _l:i.depthFunc(i.GREATER);break;case vl:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Ee=se}},setLocked:function(se){B=se},setClear:function(se){ue!==se&&(de&&(se=1-se),i.clearDepth(se),ue=se)},reset:function(){B=!1,pe=null,Ee=null,ue=null,de=!1}}}function s(){let B=!1,de=null,pe=null,Ee=null,ue=null,se=null,Pe=null,Ze=null,vt=null;return{setTest:function(xt){B||(xt?ae(i.STENCIL_TEST):Te(i.STENCIL_TEST))},setMask:function(xt){de!==xt&&!B&&(i.stencilMask(xt),de=xt)},setFunc:function(xt,jn,kn){(pe!==xt||Ee!==jn||ue!==kn)&&(i.stencilFunc(xt,jn,kn),pe=xt,Ee=jn,ue=kn)},setOp:function(xt,jn,kn){(se!==xt||Pe!==jn||Ze!==kn)&&(i.stencilOp(xt,jn,kn),se=xt,Pe=jn,Ze=kn)},setLocked:function(xt){B=xt},setClear:function(xt){vt!==xt&&(i.clearStencil(xt),vt=xt)},reset:function(){B=!1,de=null,pe=null,Ee=null,ue=null,se=null,Pe=null,Ze=null,vt=null}}}const r=new t,o=new n,a=new s,c=new WeakMap,l=new WeakMap;let h={},u={},d=new WeakMap,f=[],g=null,y=!1,m=null,p=null,x=null,b=null,M=null,R=null,C=null,w=new ze(0,0,0),L=0,S=!1,E=null,I=null,k=null,z=null,Y=null;const $=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let j=!1,Q=0;const K=i.getParameter(i.VERSION);K.indexOf("WebGL")!==-1?(Q=parseFloat(/^WebGL (\d)/.exec(K)[1]),j=Q>=1):K.indexOf("OpenGL ES")!==-1&&(Q=parseFloat(/^OpenGL ES (\d)/.exec(K)[1]),j=Q>=2);let me=null,ve={};const De=i.getParameter(i.SCISSOR_BOX),Je=i.getParameter(i.VIEWPORT),mt=new Mt().fromArray(De),At=new Mt().fromArray(Je);function ft(B,de,pe,Ee){const ue=new Uint8Array(4),se=i.createTexture();i.bindTexture(B,se),i.texParameteri(B,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(B,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Pe=0;Pe<pe;Pe++)B===i.TEXTURE_3D||B===i.TEXTURE_2D_ARRAY?i.texImage3D(de,0,i.RGBA,1,1,Ee,0,i.RGBA,i.UNSIGNED_BYTE,ue):i.texImage2D(de+Pe,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ue);return se}const ie={};ie[i.TEXTURE_2D]=ft(i.TEXTURE_2D,i.TEXTURE_2D,1),ie[i.TEXTURE_CUBE_MAP]=ft(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),ie[i.TEXTURE_2D_ARRAY]=ft(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),ie[i.TEXTURE_3D]=ft(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ae(i.DEPTH_TEST),o.setFunc(Er),qe(!1),Ne(gh),ae(i.CULL_FACE),Nt(Hi);function ae(B){h[B]!==!0&&(i.enable(B),h[B]=!0)}function Te(B){h[B]!==!1&&(i.disable(B),h[B]=!1)}function He(B,de){return u[B]!==de?(i.bindFramebuffer(B,de),u[B]=de,B===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=de),B===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=de),!0):!1}function Ce(B,de){let pe=f,Ee=!1;if(B){pe=d.get(de),pe===void 0&&(pe=[],d.set(de,pe));const ue=B.textures;if(pe.length!==ue.length||pe[0]!==i.COLOR_ATTACHMENT0){for(let se=0,Pe=ue.length;se<Pe;se++)pe[se]=i.COLOR_ATTACHMENT0+se;pe.length=ue.length,Ee=!0}}else pe[0]!==i.BACK&&(pe[0]=i.BACK,Ee=!0);Ee&&i.drawBuffers(pe)}function at(B){return g!==B?(i.useProgram(B),g=B,!0):!1}const Kt={[Rs]:i.FUNC_ADD,[Qp]:i.FUNC_SUBTRACT,[em]:i.FUNC_REVERSE_SUBTRACT};Kt[tm]=i.MIN,Kt[nm]=i.MAX;const O={[im]:i.ZERO,[sm]:i.ONE,[rm]:i.SRC_COLOR,[ul]:i.SRC_ALPHA,[hm]:i.SRC_ALPHA_SATURATE,[lm]:i.DST_COLOR,[am]:i.DST_ALPHA,[om]:i.ONE_MINUS_SRC_COLOR,[hl]:i.ONE_MINUS_SRC_ALPHA,[um]:i.ONE_MINUS_DST_COLOR,[cm]:i.ONE_MINUS_DST_ALPHA,[dm]:i.CONSTANT_COLOR,[fm]:i.ONE_MINUS_CONSTANT_COLOR,[pm]:i.CONSTANT_ALPHA,[mm]:i.ONE_MINUS_CONSTANT_ALPHA};function Nt(B,de,pe,Ee,ue,se,Pe,Ze,vt,xt){if(B===Hi){y===!0&&(Te(i.BLEND),y=!1);return}if(y===!1&&(ae(i.BLEND),y=!0),B!==Jp){if(B!==m||xt!==S){if((p!==Rs||M!==Rs)&&(i.blendEquation(i.FUNC_ADD),p=Rs,M=Rs),xt)switch(B){case xr:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ds:i.blendFunc(i.ONE,i.ONE);break;case _h:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case vh:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}else switch(B){case xr:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ds:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case _h:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case vh:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}x=null,b=null,R=null,C=null,w.set(0,0,0),L=0,m=B,S=xt}return}ue=ue||de,se=se||pe,Pe=Pe||Ee,(de!==p||ue!==M)&&(i.blendEquationSeparate(Kt[de],Kt[ue]),p=de,M=ue),(pe!==x||Ee!==b||se!==R||Pe!==C)&&(i.blendFuncSeparate(O[pe],O[Ee],O[se],O[Pe]),x=pe,b=Ee,R=se,C=Pe),(Ze.equals(w)===!1||vt!==L)&&(i.blendColor(Ze.r,Ze.g,Ze.b,vt),w.copy(Ze),L=vt),m=B,S=!1}function je(B,de){B.side===Un?Te(i.CULL_FACE):ae(i.CULL_FACE);let pe=B.side===An;de&&(pe=!pe),qe(pe),B.blending===xr&&B.transparent===!1?Nt(Hi):Nt(B.blending,B.blendEquation,B.blendSrc,B.blendDst,B.blendEquationAlpha,B.blendSrcAlpha,B.blendDstAlpha,B.blendColor,B.blendAlpha,B.premultipliedAlpha),o.setFunc(B.depthFunc),o.setTest(B.depthTest),o.setMask(B.depthWrite),r.setMask(B.colorWrite);const Ee=B.stencilWrite;a.setTest(Ee),Ee&&(a.setMask(B.stencilWriteMask),a.setFunc(B.stencilFunc,B.stencilRef,B.stencilFuncMask),a.setOp(B.stencilFail,B.stencilZFail,B.stencilZPass)),Oe(B.polygonOffset,B.polygonOffsetFactor,B.polygonOffsetUnits),B.alphaToCoverage===!0?ae(i.SAMPLE_ALPHA_TO_COVERAGE):Te(i.SAMPLE_ALPHA_TO_COVERAGE)}function qe(B){E!==B&&(B?i.frontFace(i.CW):i.frontFace(i.CCW),E=B)}function Ne(B){B!==jp?(ae(i.CULL_FACE),B!==I&&(B===gh?i.cullFace(i.BACK):B===Zp?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Te(i.CULL_FACE),I=B}function Ut(B){B!==k&&(j&&i.lineWidth(B),k=B)}function Oe(B,de,pe){B?(ae(i.POLYGON_OFFSET_FILL),(z!==de||Y!==pe)&&(i.polygonOffset(de,pe),z=de,Y=pe)):Te(i.POLYGON_OFFSET_FILL)}function nt(B){B?ae(i.SCISSOR_TEST):Te(i.SCISSOR_TEST)}function jt(B){B===void 0&&(B=i.TEXTURE0+$-1),me!==B&&(i.activeTexture(B),me=B)}function zt(B,de,pe){pe===void 0&&(me===null?pe=i.TEXTURE0+$-1:pe=me);let Ee=ve[pe];Ee===void 0&&(Ee={type:void 0,texture:void 0},ve[pe]=Ee),(Ee.type!==B||Ee.texture!==de)&&(me!==pe&&(i.activeTexture(pe),me=pe),i.bindTexture(B,de||ie[B]),Ee.type=B,Ee.texture=de)}function N(){const B=ve[me];B!==void 0&&B.type!==void 0&&(i.bindTexture(B.type,null),B.type=void 0,B.texture=void 0)}function A(){try{i.compressedTexImage2D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function X(){try{i.compressedTexImage3D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function te(){try{i.texSubImage2D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function oe(){try{i.texSubImage3D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Z(){try{i.compressedTexSubImage2D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Ve(){try{i.compressedTexSubImage3D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function ge(){try{i.texStorage2D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Ue(){try{i.texStorage3D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function ke(){try{i.texImage2D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function he(){try{i.texImage3D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function ye(B){mt.equals(B)===!1&&(i.scissor(B.x,B.y,B.z,B.w),mt.copy(B))}function $e(B){At.equals(B)===!1&&(i.viewport(B.x,B.y,B.z,B.w),At.copy(B))}function Be(B,de){let pe=l.get(de);pe===void 0&&(pe=new WeakMap,l.set(de,pe));let Ee=pe.get(B);Ee===void 0&&(Ee=i.getUniformBlockIndex(de,B.name),pe.set(B,Ee))}function Me(B,de){const Ee=l.get(de).get(B);c.get(de)!==Ee&&(i.uniformBlockBinding(de,Ee,B.__bindingPointIndex),c.set(de,Ee))}function Qe(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},me=null,ve={},u={},d=new WeakMap,f=[],g=null,y=!1,m=null,p=null,x=null,b=null,M=null,R=null,C=null,w=new ze(0,0,0),L=0,S=!1,E=null,I=null,k=null,z=null,Y=null,mt.set(0,0,i.canvas.width,i.canvas.height),At.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:ae,disable:Te,bindFramebuffer:He,drawBuffers:Ce,useProgram:at,setBlending:Nt,setMaterial:je,setFlipSided:qe,setCullFace:Ne,setLineWidth:Ut,setPolygonOffset:Oe,setScissorTest:nt,activeTexture:jt,bindTexture:zt,unbindTexture:N,compressedTexImage2D:A,compressedTexImage3D:X,texImage2D:ke,texImage3D:he,updateUBOMapping:Be,uniformBlockBinding:Me,texStorage2D:ge,texStorage3D:Ue,texSubImage2D:te,texSubImage3D:oe,compressedTexSubImage2D:Z,compressedTexSubImage3D:Ve,scissor:ye,viewport:$e,reset:Qe}}function jy(i,e,t,n,s,r,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new xe,h=new WeakMap;let u;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(N,A){return f?new OffscreenCanvas(N,A):To("canvas")}function y(N,A,X){let te=1;const oe=zt(N);if((oe.width>X||oe.height>X)&&(te=X/Math.max(oe.width,oe.height)),te<1)if(typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&N instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&N instanceof ImageBitmap||typeof VideoFrame<"u"&&N instanceof VideoFrame){const Z=Math.floor(te*oe.width),Ve=Math.floor(te*oe.height);u===void 0&&(u=g(Z,Ve));const ge=A?g(Z,Ve):u;return ge.width=Z,ge.height=Ve,ge.getContext("2d").drawImage(N,0,0,Z,Ve),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+oe.width+"x"+oe.height+") to ("+Z+"x"+Ve+")."),ge}else return"data"in N&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+oe.width+"x"+oe.height+")."),N;return N}function m(N){return N.generateMipmaps}function p(N){i.generateMipmap(N)}function x(N){return N.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:N.isWebGL3DRenderTarget?i.TEXTURE_3D:N.isWebGLArrayRenderTarget||N.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function b(N,A,X,te,oe=!1){if(N!==null){if(i[N]!==void 0)return i[N];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+N+"'")}let Z=A;if(A===i.RED&&(X===i.FLOAT&&(Z=i.R32F),X===i.HALF_FLOAT&&(Z=i.R16F),X===i.UNSIGNED_BYTE&&(Z=i.R8)),A===i.RED_INTEGER&&(X===i.UNSIGNED_BYTE&&(Z=i.R8UI),X===i.UNSIGNED_SHORT&&(Z=i.R16UI),X===i.UNSIGNED_INT&&(Z=i.R32UI),X===i.BYTE&&(Z=i.R8I),X===i.SHORT&&(Z=i.R16I),X===i.INT&&(Z=i.R32I)),A===i.RG&&(X===i.FLOAT&&(Z=i.RG32F),X===i.HALF_FLOAT&&(Z=i.RG16F),X===i.UNSIGNED_BYTE&&(Z=i.RG8)),A===i.RG_INTEGER&&(X===i.UNSIGNED_BYTE&&(Z=i.RG8UI),X===i.UNSIGNED_SHORT&&(Z=i.RG16UI),X===i.UNSIGNED_INT&&(Z=i.RG32UI),X===i.BYTE&&(Z=i.RG8I),X===i.SHORT&&(Z=i.RG16I),X===i.INT&&(Z=i.RG32I)),A===i.RGB_INTEGER&&(X===i.UNSIGNED_BYTE&&(Z=i.RGB8UI),X===i.UNSIGNED_SHORT&&(Z=i.RGB16UI),X===i.UNSIGNED_INT&&(Z=i.RGB32UI),X===i.BYTE&&(Z=i.RGB8I),X===i.SHORT&&(Z=i.RGB16I),X===i.INT&&(Z=i.RGB32I)),A===i.RGBA_INTEGER&&(X===i.UNSIGNED_BYTE&&(Z=i.RGBA8UI),X===i.UNSIGNED_SHORT&&(Z=i.RGBA16UI),X===i.UNSIGNED_INT&&(Z=i.RGBA32UI),X===i.BYTE&&(Z=i.RGBA8I),X===i.SHORT&&(Z=i.RGBA16I),X===i.INT&&(Z=i.RGBA32I)),A===i.RGB&&(X===i.UNSIGNED_INT_5_9_9_9_REV&&(Z=i.RGB9_E5),X===i.UNSIGNED_INT_10F_11F_11F_REV&&(Z=i.R11F_G11F_B10F)),A===i.RGBA){const Ve=oe?Na:pt.getTransfer(te);X===i.FLOAT&&(Z=i.RGBA32F),X===i.HALF_FLOAT&&(Z=i.RGBA16F),X===i.UNSIGNED_BYTE&&(Z=Ve===Rt?i.SRGB8_ALPHA8:i.RGBA8),X===i.UNSIGNED_SHORT_4_4_4_4&&(Z=i.RGBA4),X===i.UNSIGNED_SHORT_5_5_5_1&&(Z=i.RGB5_A1)}return(Z===i.R16F||Z===i.R32F||Z===i.RG16F||Z===i.RG32F||Z===i.RGBA16F||Z===i.RGBA32F)&&e.get("EXT_color_buffer_float"),Z}function M(N,A){let X;return N?A===null||A===Is||A===xo?X=i.DEPTH24_STENCIL8:A===ii?X=i.DEPTH32F_STENCIL8:A===vo&&(X=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):A===null||A===Is||A===xo?X=i.DEPTH_COMPONENT24:A===ii?X=i.DEPTH_COMPONENT32F:A===vo&&(X=i.DEPTH_COMPONENT16),X}function R(N,A){return m(N)===!0||N.isFramebufferTexture&&N.minFilter!==Qt&&N.minFilter!==Fn?Math.log2(Math.max(A.width,A.height))+1:N.mipmaps!==void 0&&N.mipmaps.length>0?N.mipmaps.length:N.isCompressedTexture&&Array.isArray(N.image)?A.mipmaps.length:1}function C(N){const A=N.target;A.removeEventListener("dispose",C),L(A),A.isVideoTexture&&h.delete(A)}function w(N){const A=N.target;A.removeEventListener("dispose",w),E(A)}function L(N){const A=n.get(N);if(A.__webglInit===void 0)return;const X=N.source,te=d.get(X);if(te){const oe=te[A.__cacheKey];oe.usedTimes--,oe.usedTimes===0&&S(N),Object.keys(te).length===0&&d.delete(X)}n.remove(N)}function S(N){const A=n.get(N);i.deleteTexture(A.__webglTexture);const X=N.source,te=d.get(X);delete te[A.__cacheKey],o.memory.textures--}function E(N){const A=n.get(N);if(N.depthTexture&&(N.depthTexture.dispose(),n.remove(N.depthTexture)),N.isWebGLCubeRenderTarget)for(let te=0;te<6;te++){if(Array.isArray(A.__webglFramebuffer[te]))for(let oe=0;oe<A.__webglFramebuffer[te].length;oe++)i.deleteFramebuffer(A.__webglFramebuffer[te][oe]);else i.deleteFramebuffer(A.__webglFramebuffer[te]);A.__webglDepthbuffer&&i.deleteRenderbuffer(A.__webglDepthbuffer[te])}else{if(Array.isArray(A.__webglFramebuffer))for(let te=0;te<A.__webglFramebuffer.length;te++)i.deleteFramebuffer(A.__webglFramebuffer[te]);else i.deleteFramebuffer(A.__webglFramebuffer);if(A.__webglDepthbuffer&&i.deleteRenderbuffer(A.__webglDepthbuffer),A.__webglMultisampledFramebuffer&&i.deleteFramebuffer(A.__webglMultisampledFramebuffer),A.__webglColorRenderbuffer)for(let te=0;te<A.__webglColorRenderbuffer.length;te++)A.__webglColorRenderbuffer[te]&&i.deleteRenderbuffer(A.__webglColorRenderbuffer[te]);A.__webglDepthRenderbuffer&&i.deleteRenderbuffer(A.__webglDepthRenderbuffer)}const X=N.textures;for(let te=0,oe=X.length;te<oe;te++){const Z=n.get(X[te]);Z.__webglTexture&&(i.deleteTexture(Z.__webglTexture),o.memory.textures--),n.remove(X[te])}n.remove(N)}let I=0;function k(){I=0}function z(){const N=I;return N>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+N+" texture units while this GPU supports only "+s.maxTextures),I+=1,N}function Y(N){const A=[];return A.push(N.wrapS),A.push(N.wrapT),A.push(N.wrapR||0),A.push(N.magFilter),A.push(N.minFilter),A.push(N.anisotropy),A.push(N.internalFormat),A.push(N.format),A.push(N.type),A.push(N.generateMipmaps),A.push(N.premultiplyAlpha),A.push(N.flipY),A.push(N.unpackAlignment),A.push(N.colorSpace),A.join()}function $(N,A){const X=n.get(N);if(N.isVideoTexture&&nt(N),N.isRenderTargetTexture===!1&&N.isExternalTexture!==!0&&N.version>0&&X.__version!==N.version){const te=N.image;if(te===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(te.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ie(X,N,A);return}}else N.isExternalTexture&&(X.__webglTexture=N.sourceTexture?N.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,X.__webglTexture,i.TEXTURE0+A)}function j(N,A){const X=n.get(N);if(N.isRenderTargetTexture===!1&&N.version>0&&X.__version!==N.version){ie(X,N,A);return}t.bindTexture(i.TEXTURE_2D_ARRAY,X.__webglTexture,i.TEXTURE0+A)}function Q(N,A){const X=n.get(N);if(N.isRenderTargetTexture===!1&&N.version>0&&X.__version!==N.version){ie(X,N,A);return}t.bindTexture(i.TEXTURE_3D,X.__webglTexture,i.TEXTURE0+A)}function K(N,A){const X=n.get(N);if(N.version>0&&X.__version!==N.version){ae(X,N,A);return}t.bindTexture(i.TEXTURE_CUBE_MAP,X.__webglTexture,i.TEXTURE0+A)}const me={[Rr]:i.REPEAT,[rs]:i.CLAMP_TO_EDGE,[Ia]:i.MIRRORED_REPEAT},ve={[Qt]:i.NEAREST,[vf]:i.NEAREST_MIPMAP_NEAREST,[ao]:i.NEAREST_MIPMAP_LINEAR,[Fn]:i.LINEAR,[Ta]:i.LINEAR_MIPMAP_NEAREST,[ki]:i.LINEAR_MIPMAP_LINEAR},De={[Tm]:i.NEVER,[Pm]:i.ALWAYS,[Em]:i.LESS,[Rf]:i.LEQUAL,[wm]:i.EQUAL,[Cm]:i.GEQUAL,[Am]:i.GREATER,[Rm]:i.NOTEQUAL};function Je(N,A){if(A.type===ii&&e.has("OES_texture_float_linear")===!1&&(A.magFilter===Fn||A.magFilter===Ta||A.magFilter===ao||A.magFilter===ki||A.minFilter===Fn||A.minFilter===Ta||A.minFilter===ao||A.minFilter===ki)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(N,i.TEXTURE_WRAP_S,me[A.wrapS]),i.texParameteri(N,i.TEXTURE_WRAP_T,me[A.wrapT]),(N===i.TEXTURE_3D||N===i.TEXTURE_2D_ARRAY)&&i.texParameteri(N,i.TEXTURE_WRAP_R,me[A.wrapR]),i.texParameteri(N,i.TEXTURE_MAG_FILTER,ve[A.magFilter]),i.texParameteri(N,i.TEXTURE_MIN_FILTER,ve[A.minFilter]),A.compareFunction&&(i.texParameteri(N,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(N,i.TEXTURE_COMPARE_FUNC,De[A.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(A.magFilter===Qt||A.minFilter!==ao&&A.minFilter!==ki||A.type===ii&&e.has("OES_texture_float_linear")===!1)return;if(A.anisotropy>1||n.get(A).__currentAnisotropy){const X=e.get("EXT_texture_filter_anisotropic");i.texParameterf(N,X.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,s.getMaxAnisotropy())),n.get(A).__currentAnisotropy=A.anisotropy}}}function mt(N,A){let X=!1;N.__webglInit===void 0&&(N.__webglInit=!0,A.addEventListener("dispose",C));const te=A.source;let oe=d.get(te);oe===void 0&&(oe={},d.set(te,oe));const Z=Y(A);if(Z!==N.__cacheKey){oe[Z]===void 0&&(oe[Z]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,X=!0),oe[Z].usedTimes++;const Ve=oe[N.__cacheKey];Ve!==void 0&&(oe[N.__cacheKey].usedTimes--,Ve.usedTimes===0&&S(A)),N.__cacheKey=Z,N.__webglTexture=oe[Z].texture}return X}function At(N,A,X){return Math.floor(Math.floor(N/X)/A)}function ft(N,A,X,te){const Z=N.updateRanges;if(Z.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,A.width,A.height,X,te,A.data);else{Z.sort((he,ye)=>he.start-ye.start);let Ve=0;for(let he=1;he<Z.length;he++){const ye=Z[Ve],$e=Z[he],Be=ye.start+ye.count,Me=At($e.start,A.width,4),Qe=At(ye.start,A.width,4);$e.start<=Be+1&&Me===Qe&&At($e.start+$e.count-1,A.width,4)===Me?ye.count=Math.max(ye.count,$e.start+$e.count-ye.start):(++Ve,Z[Ve]=$e)}Z.length=Ve+1;const ge=i.getParameter(i.UNPACK_ROW_LENGTH),Ue=i.getParameter(i.UNPACK_SKIP_PIXELS),ke=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,A.width);for(let he=0,ye=Z.length;he<ye;he++){const $e=Z[he],Be=Math.floor($e.start/4),Me=Math.ceil($e.count/4),Qe=Be%A.width,B=Math.floor(Be/A.width),de=Me,pe=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,Qe),i.pixelStorei(i.UNPACK_SKIP_ROWS,B),t.texSubImage2D(i.TEXTURE_2D,0,Qe,B,de,pe,X,te,A.data)}N.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,ge),i.pixelStorei(i.UNPACK_SKIP_PIXELS,Ue),i.pixelStorei(i.UNPACK_SKIP_ROWS,ke)}}function ie(N,A,X){let te=i.TEXTURE_2D;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&(te=i.TEXTURE_2D_ARRAY),A.isData3DTexture&&(te=i.TEXTURE_3D);const oe=mt(N,A),Z=A.source;t.bindTexture(te,N.__webglTexture,i.TEXTURE0+X);const Ve=n.get(Z);if(Z.version!==Ve.__version||oe===!0){t.activeTexture(i.TEXTURE0+X);const ge=pt.getPrimaries(pt.workingColorSpace),Ue=A.colorSpace===ss?null:pt.getPrimaries(A.colorSpace),ke=A.colorSpace===ss||ge===Ue?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,A.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,A.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ke);let he=y(A.image,!1,s.maxTextureSize);he=jt(A,he);const ye=r.convert(A.format,A.colorSpace),$e=r.convert(A.type);let Be=b(A.internalFormat,ye,$e,A.colorSpace,A.isVideoTexture);Je(te,A);let Me;const Qe=A.mipmaps,B=A.isVideoTexture!==!0,de=Ve.__version===void 0||oe===!0,pe=Z.dataReady,Ee=R(A,he);if(A.isDepthTexture)Be=M(A.format===Mo,A.type),de&&(B?t.texStorage2D(i.TEXTURE_2D,1,Be,he.width,he.height):t.texImage2D(i.TEXTURE_2D,0,Be,he.width,he.height,0,ye,$e,null));else if(A.isDataTexture)if(Qe.length>0){B&&de&&t.texStorage2D(i.TEXTURE_2D,Ee,Be,Qe[0].width,Qe[0].height);for(let ue=0,se=Qe.length;ue<se;ue++)Me=Qe[ue],B?pe&&t.texSubImage2D(i.TEXTURE_2D,ue,0,0,Me.width,Me.height,ye,$e,Me.data):t.texImage2D(i.TEXTURE_2D,ue,Be,Me.width,Me.height,0,ye,$e,Me.data);A.generateMipmaps=!1}else B?(de&&t.texStorage2D(i.TEXTURE_2D,Ee,Be,he.width,he.height),pe&&ft(A,he,ye,$e)):t.texImage2D(i.TEXTURE_2D,0,Be,he.width,he.height,0,ye,$e,he.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){B&&de&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Ee,Be,Qe[0].width,Qe[0].height,he.depth);for(let ue=0,se=Qe.length;ue<se;ue++)if(Me=Qe[ue],A.format!==qn)if(ye!==null)if(B){if(pe)if(A.layerUpdates.size>0){const Pe=ud(Me.width,Me.height,A.format,A.type);for(const Ze of A.layerUpdates){const vt=Me.data.subarray(Ze*Pe/Me.data.BYTES_PER_ELEMENT,(Ze+1)*Pe/Me.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ue,0,0,Ze,Me.width,Me.height,1,ye,vt)}A.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ue,0,0,0,Me.width,Me.height,he.depth,ye,Me.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ue,Be,Me.width,Me.height,he.depth,0,Me.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else B?pe&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,ue,0,0,0,Me.width,Me.height,he.depth,ye,$e,Me.data):t.texImage3D(i.TEXTURE_2D_ARRAY,ue,Be,Me.width,Me.height,he.depth,0,ye,$e,Me.data)}else{B&&de&&t.texStorage2D(i.TEXTURE_2D,Ee,Be,Qe[0].width,Qe[0].height);for(let ue=0,se=Qe.length;ue<se;ue++)Me=Qe[ue],A.format!==qn?ye!==null?B?pe&&t.compressedTexSubImage2D(i.TEXTURE_2D,ue,0,0,Me.width,Me.height,ye,Me.data):t.compressedTexImage2D(i.TEXTURE_2D,ue,Be,Me.width,Me.height,0,Me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):B?pe&&t.texSubImage2D(i.TEXTURE_2D,ue,0,0,Me.width,Me.height,ye,$e,Me.data):t.texImage2D(i.TEXTURE_2D,ue,Be,Me.width,Me.height,0,ye,$e,Me.data)}else if(A.isDataArrayTexture)if(B){if(de&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Ee,Be,he.width,he.height,he.depth),pe)if(A.layerUpdates.size>0){const ue=ud(he.width,he.height,A.format,A.type);for(const se of A.layerUpdates){const Pe=he.data.subarray(se*ue/he.data.BYTES_PER_ELEMENT,(se+1)*ue/he.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,se,he.width,he.height,1,ye,$e,Pe)}A.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,he.width,he.height,he.depth,ye,$e,he.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Be,he.width,he.height,he.depth,0,ye,$e,he.data);else if(A.isData3DTexture)B?(de&&t.texStorage3D(i.TEXTURE_3D,Ee,Be,he.width,he.height,he.depth),pe&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,he.width,he.height,he.depth,ye,$e,he.data)):t.texImage3D(i.TEXTURE_3D,0,Be,he.width,he.height,he.depth,0,ye,$e,he.data);else if(A.isFramebufferTexture){if(de)if(B)t.texStorage2D(i.TEXTURE_2D,Ee,Be,he.width,he.height);else{let ue=he.width,se=he.height;for(let Pe=0;Pe<Ee;Pe++)t.texImage2D(i.TEXTURE_2D,Pe,Be,ue,se,0,ye,$e,null),ue>>=1,se>>=1}}else if(Qe.length>0){if(B&&de){const ue=zt(Qe[0]);t.texStorage2D(i.TEXTURE_2D,Ee,Be,ue.width,ue.height)}for(let ue=0,se=Qe.length;ue<se;ue++)Me=Qe[ue],B?pe&&t.texSubImage2D(i.TEXTURE_2D,ue,0,0,ye,$e,Me):t.texImage2D(i.TEXTURE_2D,ue,Be,ye,$e,Me);A.generateMipmaps=!1}else if(B){if(de){const ue=zt(he);t.texStorage2D(i.TEXTURE_2D,Ee,Be,ue.width,ue.height)}pe&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,ye,$e,he)}else t.texImage2D(i.TEXTURE_2D,0,Be,ye,$e,he);m(A)&&p(te),Ve.__version=Z.version,A.onUpdate&&A.onUpdate(A)}N.__version=A.version}function ae(N,A,X){if(A.image.length!==6)return;const te=mt(N,A),oe=A.source;t.bindTexture(i.TEXTURE_CUBE_MAP,N.__webglTexture,i.TEXTURE0+X);const Z=n.get(oe);if(oe.version!==Z.__version||te===!0){t.activeTexture(i.TEXTURE0+X);const Ve=pt.getPrimaries(pt.workingColorSpace),ge=A.colorSpace===ss?null:pt.getPrimaries(A.colorSpace),Ue=A.colorSpace===ss||Ve===ge?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,A.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,A.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ue);const ke=A.isCompressedTexture||A.image[0].isCompressedTexture,he=A.image[0]&&A.image[0].isDataTexture,ye=[];for(let se=0;se<6;se++)!ke&&!he?ye[se]=y(A.image[se],!0,s.maxCubemapSize):ye[se]=he?A.image[se].image:A.image[se],ye[se]=jt(A,ye[se]);const $e=ye[0],Be=r.convert(A.format,A.colorSpace),Me=r.convert(A.type),Qe=b(A.internalFormat,Be,Me,A.colorSpace),B=A.isVideoTexture!==!0,de=Z.__version===void 0||te===!0,pe=oe.dataReady;let Ee=R(A,$e);Je(i.TEXTURE_CUBE_MAP,A);let ue;if(ke){B&&de&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Ee,Qe,$e.width,$e.height);for(let se=0;se<6;se++){ue=ye[se].mipmaps;for(let Pe=0;Pe<ue.length;Pe++){const Ze=ue[Pe];A.format!==qn?Be!==null?B?pe&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,Pe,0,0,Ze.width,Ze.height,Be,Ze.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,Pe,Qe,Ze.width,Ze.height,0,Ze.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):B?pe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,Pe,0,0,Ze.width,Ze.height,Be,Me,Ze.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,Pe,Qe,Ze.width,Ze.height,0,Be,Me,Ze.data)}}}else{if(ue=A.mipmaps,B&&de){ue.length>0&&Ee++;const se=zt(ye[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Ee,Qe,se.width,se.height)}for(let se=0;se<6;se++)if(he){B?pe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,0,0,ye[se].width,ye[se].height,Be,Me,ye[se].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,Qe,ye[se].width,ye[se].height,0,Be,Me,ye[se].data);for(let Pe=0;Pe<ue.length;Pe++){const vt=ue[Pe].image[se].image;B?pe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,Pe+1,0,0,vt.width,vt.height,Be,Me,vt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,Pe+1,Qe,vt.width,vt.height,0,Be,Me,vt.data)}}else{B?pe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,0,0,Be,Me,ye[se]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,Qe,Be,Me,ye[se]);for(let Pe=0;Pe<ue.length;Pe++){const Ze=ue[Pe];B?pe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,Pe+1,0,0,Be,Me,Ze.image[se]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,Pe+1,Qe,Be,Me,Ze.image[se])}}}m(A)&&p(i.TEXTURE_CUBE_MAP),Z.__version=oe.version,A.onUpdate&&A.onUpdate(A)}N.__version=A.version}function Te(N,A,X,te,oe,Z){const Ve=r.convert(X.format,X.colorSpace),ge=r.convert(X.type),Ue=b(X.internalFormat,Ve,ge,X.colorSpace),ke=n.get(A),he=n.get(X);if(he.__renderTarget=A,!ke.__hasExternalTextures){const ye=Math.max(1,A.width>>Z),$e=Math.max(1,A.height>>Z);oe===i.TEXTURE_3D||oe===i.TEXTURE_2D_ARRAY?t.texImage3D(oe,Z,Ue,ye,$e,A.depth,0,Ve,ge,null):t.texImage2D(oe,Z,Ue,ye,$e,0,Ve,ge,null)}t.bindFramebuffer(i.FRAMEBUFFER,N),Oe(A)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,te,oe,he.__webglTexture,0,Ut(A)):(oe===i.TEXTURE_2D||oe>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&oe<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,te,oe,he.__webglTexture,Z),t.bindFramebuffer(i.FRAMEBUFFER,null)}function He(N,A,X){if(i.bindRenderbuffer(i.RENDERBUFFER,N),A.depthBuffer){const te=A.depthTexture,oe=te&&te.isDepthTexture?te.type:null,Z=M(A.stencilBuffer,oe),Ve=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ge=Ut(A);Oe(A)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ge,Z,A.width,A.height):X?i.renderbufferStorageMultisample(i.RENDERBUFFER,ge,Z,A.width,A.height):i.renderbufferStorage(i.RENDERBUFFER,Z,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Ve,i.RENDERBUFFER,N)}else{const te=A.textures;for(let oe=0;oe<te.length;oe++){const Z=te[oe],Ve=r.convert(Z.format,Z.colorSpace),ge=r.convert(Z.type),Ue=b(Z.internalFormat,Ve,ge,Z.colorSpace),ke=Ut(A);X&&Oe(A)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,ke,Ue,A.width,A.height):Oe(A)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ke,Ue,A.width,A.height):i.renderbufferStorage(i.RENDERBUFFER,Ue,A.width,A.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Ce(N,A){if(A&&A.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,N),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const te=n.get(A.depthTexture);te.__renderTarget=A,(!te.__webglTexture||A.depthTexture.image.width!==A.width||A.depthTexture.image.height!==A.height)&&(A.depthTexture.image.width=A.width,A.depthTexture.image.height=A.height,A.depthTexture.needsUpdate=!0),$(A.depthTexture,0);const oe=te.__webglTexture,Z=Ut(A);if(A.depthTexture.format===yo)Oe(A)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,oe,0,Z):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,oe,0);else if(A.depthTexture.format===Mo)Oe(A)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,oe,0,Z):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,oe,0);else throw new Error("Unknown depthTexture format")}function at(N){const A=n.get(N),X=N.isWebGLCubeRenderTarget===!0;if(A.__boundDepthTexture!==N.depthTexture){const te=N.depthTexture;if(A.__depthDisposeCallback&&A.__depthDisposeCallback(),te){const oe=()=>{delete A.__boundDepthTexture,delete A.__depthDisposeCallback,te.removeEventListener("dispose",oe)};te.addEventListener("dispose",oe),A.__depthDisposeCallback=oe}A.__boundDepthTexture=te}if(N.depthTexture&&!A.__autoAllocateDepthBuffer){if(X)throw new Error("target.depthTexture not supported in Cube render targets");const te=N.texture.mipmaps;te&&te.length>0?Ce(A.__webglFramebuffer[0],N):Ce(A.__webglFramebuffer,N)}else if(X){A.__webglDepthbuffer=[];for(let te=0;te<6;te++)if(t.bindFramebuffer(i.FRAMEBUFFER,A.__webglFramebuffer[te]),A.__webglDepthbuffer[te]===void 0)A.__webglDepthbuffer[te]=i.createRenderbuffer(),He(A.__webglDepthbuffer[te],N,!1);else{const oe=N.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Z=A.__webglDepthbuffer[te];i.bindRenderbuffer(i.RENDERBUFFER,Z),i.framebufferRenderbuffer(i.FRAMEBUFFER,oe,i.RENDERBUFFER,Z)}}else{const te=N.texture.mipmaps;if(te&&te.length>0?t.bindFramebuffer(i.FRAMEBUFFER,A.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,A.__webglFramebuffer),A.__webglDepthbuffer===void 0)A.__webglDepthbuffer=i.createRenderbuffer(),He(A.__webglDepthbuffer,N,!1);else{const oe=N.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Z=A.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,Z),i.framebufferRenderbuffer(i.FRAMEBUFFER,oe,i.RENDERBUFFER,Z)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function Kt(N,A,X){const te=n.get(N);A!==void 0&&Te(te.__webglFramebuffer,N,N.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),X!==void 0&&at(N)}function O(N){const A=N.texture,X=n.get(N),te=n.get(A);N.addEventListener("dispose",w);const oe=N.textures,Z=N.isWebGLCubeRenderTarget===!0,Ve=oe.length>1;if(Ve||(te.__webglTexture===void 0&&(te.__webglTexture=i.createTexture()),te.__version=A.version,o.memory.textures++),Z){X.__webglFramebuffer=[];for(let ge=0;ge<6;ge++)if(A.mipmaps&&A.mipmaps.length>0){X.__webglFramebuffer[ge]=[];for(let Ue=0;Ue<A.mipmaps.length;Ue++)X.__webglFramebuffer[ge][Ue]=i.createFramebuffer()}else X.__webglFramebuffer[ge]=i.createFramebuffer()}else{if(A.mipmaps&&A.mipmaps.length>0){X.__webglFramebuffer=[];for(let ge=0;ge<A.mipmaps.length;ge++)X.__webglFramebuffer[ge]=i.createFramebuffer()}else X.__webglFramebuffer=i.createFramebuffer();if(Ve)for(let ge=0,Ue=oe.length;ge<Ue;ge++){const ke=n.get(oe[ge]);ke.__webglTexture===void 0&&(ke.__webglTexture=i.createTexture(),o.memory.textures++)}if(N.samples>0&&Oe(N)===!1){X.__webglMultisampledFramebuffer=i.createFramebuffer(),X.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,X.__webglMultisampledFramebuffer);for(let ge=0;ge<oe.length;ge++){const Ue=oe[ge];X.__webglColorRenderbuffer[ge]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,X.__webglColorRenderbuffer[ge]);const ke=r.convert(Ue.format,Ue.colorSpace),he=r.convert(Ue.type),ye=b(Ue.internalFormat,ke,he,Ue.colorSpace,N.isXRRenderTarget===!0),$e=Ut(N);i.renderbufferStorageMultisample(i.RENDERBUFFER,$e,ye,N.width,N.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ge,i.RENDERBUFFER,X.__webglColorRenderbuffer[ge])}i.bindRenderbuffer(i.RENDERBUFFER,null),N.depthBuffer&&(X.__webglDepthRenderbuffer=i.createRenderbuffer(),He(X.__webglDepthRenderbuffer,N,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(Z){t.bindTexture(i.TEXTURE_CUBE_MAP,te.__webglTexture),Je(i.TEXTURE_CUBE_MAP,A);for(let ge=0;ge<6;ge++)if(A.mipmaps&&A.mipmaps.length>0)for(let Ue=0;Ue<A.mipmaps.length;Ue++)Te(X.__webglFramebuffer[ge][Ue],N,A,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Ue);else Te(X.__webglFramebuffer[ge],N,A,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0);m(A)&&p(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ve){for(let ge=0,Ue=oe.length;ge<Ue;ge++){const ke=oe[ge],he=n.get(ke);let ye=i.TEXTURE_2D;(N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(ye=N.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ye,he.__webglTexture),Je(ye,ke),Te(X.__webglFramebuffer,N,ke,i.COLOR_ATTACHMENT0+ge,ye,0),m(ke)&&p(ye)}t.unbindTexture()}else{let ge=i.TEXTURE_2D;if((N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(ge=N.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ge,te.__webglTexture),Je(ge,A),A.mipmaps&&A.mipmaps.length>0)for(let Ue=0;Ue<A.mipmaps.length;Ue++)Te(X.__webglFramebuffer[Ue],N,A,i.COLOR_ATTACHMENT0,ge,Ue);else Te(X.__webglFramebuffer,N,A,i.COLOR_ATTACHMENT0,ge,0);m(A)&&p(ge),t.unbindTexture()}N.depthBuffer&&at(N)}function Nt(N){const A=N.textures;for(let X=0,te=A.length;X<te;X++){const oe=A[X];if(m(oe)){const Z=x(N),Ve=n.get(oe).__webglTexture;t.bindTexture(Z,Ve),p(Z),t.unbindTexture()}}}const je=[],qe=[];function Ne(N){if(N.samples>0){if(Oe(N)===!1){const A=N.textures,X=N.width,te=N.height;let oe=i.COLOR_BUFFER_BIT;const Z=N.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ve=n.get(N),ge=A.length>1;if(ge)for(let ke=0;ke<A.length;ke++)t.bindFramebuffer(i.FRAMEBUFFER,Ve.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ke,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Ve.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ke,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Ve.__webglMultisampledFramebuffer);const Ue=N.texture.mipmaps;Ue&&Ue.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ve.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ve.__webglFramebuffer);for(let ke=0;ke<A.length;ke++){if(N.resolveDepthBuffer&&(N.depthBuffer&&(oe|=i.DEPTH_BUFFER_BIT),N.stencilBuffer&&N.resolveStencilBuffer&&(oe|=i.STENCIL_BUFFER_BIT)),ge){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Ve.__webglColorRenderbuffer[ke]);const he=n.get(A[ke]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,he,0)}i.blitFramebuffer(0,0,X,te,0,0,X,te,oe,i.NEAREST),c===!0&&(je.length=0,qe.length=0,je.push(i.COLOR_ATTACHMENT0+ke),N.depthBuffer&&N.resolveDepthBuffer===!1&&(je.push(Z),qe.push(Z),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,qe)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,je))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ge)for(let ke=0;ke<A.length;ke++){t.bindFramebuffer(i.FRAMEBUFFER,Ve.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ke,i.RENDERBUFFER,Ve.__webglColorRenderbuffer[ke]);const he=n.get(A[ke]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Ve.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ke,i.TEXTURE_2D,he,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ve.__webglMultisampledFramebuffer)}else if(N.depthBuffer&&N.resolveDepthBuffer===!1&&c){const A=N.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[A])}}}function Ut(N){return Math.min(s.maxSamples,N.samples)}function Oe(N){const A=n.get(N);return N.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function nt(N){const A=o.render.frame;h.get(N)!==A&&(h.set(N,A),N.update())}function jt(N,A){const X=N.colorSpace,te=N.format,oe=N.type;return N.isCompressedTexture===!0||N.isVideoTexture===!0||X!==xn&&X!==ss&&(pt.getTransfer(X)===Rt?(te!==qn||oe!==_i)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",X)),A}function zt(N){return typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement?(l.width=N.naturalWidth||N.width,l.height=N.naturalHeight||N.height):typeof VideoFrame<"u"&&N instanceof VideoFrame?(l.width=N.displayWidth,l.height=N.displayHeight):(l.width=N.width,l.height=N.height),l}this.allocateTextureUnit=z,this.resetTextureUnits=k,this.setTexture2D=$,this.setTexture2DArray=j,this.setTexture3D=Q,this.setTextureCube=K,this.rebindTextures=Kt,this.setupRenderTarget=O,this.updateRenderTargetMipmap=Nt,this.updateMultisampleRenderTarget=Ne,this.setupDepthRenderbuffer=at,this.setupFrameBufferTexture=Te,this.useMultisampledRTT=Oe}function Zy(i,e){function t(n,s=ss){let r;const o=pt.getTransfer(s);if(n===_i)return i.UNSIGNED_BYTE;if(n===mu)return i.UNSIGNED_SHORT_4_4_4_4;if(n===gu)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Mf)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Sf)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===xf)return i.BYTE;if(n===yf)return i.SHORT;if(n===vo)return i.UNSIGNED_SHORT;if(n===pu)return i.INT;if(n===Is)return i.UNSIGNED_INT;if(n===ii)return i.FLOAT;if(n===gi)return i.HALF_FLOAT;if(n===bf)return i.ALPHA;if(n===Tf)return i.RGB;if(n===qn)return i.RGBA;if(n===yo)return i.DEPTH_COMPONENT;if(n===Mo)return i.DEPTH_STENCIL;if(n===_u)return i.RED;if(n===vu)return i.RED_INTEGER;if(n===Ef)return i.RG;if(n===xu)return i.RG_INTEGER;if(n===yu)return i.RGBA_INTEGER;if(n===Ea||n===wa||n===Aa||n===Ra)if(o===Rt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Ea)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===wa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Aa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ra)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Ea)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===wa)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Aa)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ra)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Ml||n===Sl||n===bl||n===Tl)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Ml)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Sl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===bl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Tl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===El||n===wl||n===Al)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===El||n===wl)return o===Rt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Al)return o===Rt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Rl||n===Cl||n===Pl||n===Ll||n===Dl||n===Il||n===Nl||n===Ul||n===Fl||n===Ol||n===kl||n===Bl||n===zl||n===Hl)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Rl)return o===Rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Cl)return o===Rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Pl)return o===Rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Ll)return o===Rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Dl)return o===Rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Il)return o===Rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Nl)return o===Rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Ul)return o===Rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Fl)return o===Rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Ol)return o===Rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===kl)return o===Rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Bl)return o===Rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===zl)return o===Rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Hl)return o===Rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Vl||n===Gl||n===Wl)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Vl)return o===Rt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Gl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Wl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Xl||n===ql||n===$l||n===Yl)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Xl)return r.COMPRESSED_RED_RGTC1_EXT;if(n===ql)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===$l)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Yl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===xo?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}const Jy=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Qy=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class eM{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new Gf(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new vn({vertexShader:Jy,fragmentShader:Qy,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Xe(new as(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class tM extends Or{constructor(e,t){super();const n=this;let s=null,r=1,o=null,a="local-floor",c=1,l=null,h=null,u=null,d=null,f=null,g=null;const y=typeof XRWebGLBinding<"u",m=new eM,p={},x=t.getContextAttributes();let b=null,M=null;const R=[],C=[],w=new xe;let L=null;const S=new wn;S.viewport=new Mt;const E=new wn;E.viewport=new Mt;const I=[S,E],k=new f0;let z=null,Y=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ie){let ae=R[ie];return ae===void 0&&(ae=new kc,R[ie]=ae),ae.getTargetRaySpace()},this.getControllerGrip=function(ie){let ae=R[ie];return ae===void 0&&(ae=new kc,R[ie]=ae),ae.getGripSpace()},this.getHand=function(ie){let ae=R[ie];return ae===void 0&&(ae=new kc,R[ie]=ae),ae.getHandSpace()};function $(ie){const ae=C.indexOf(ie.inputSource);if(ae===-1)return;const Te=R[ae];Te!==void 0&&(Te.update(ie.inputSource,ie.frame,l||o),Te.dispatchEvent({type:ie.type,data:ie.inputSource}))}function j(){s.removeEventListener("select",$),s.removeEventListener("selectstart",$),s.removeEventListener("selectend",$),s.removeEventListener("squeeze",$),s.removeEventListener("squeezestart",$),s.removeEventListener("squeezeend",$),s.removeEventListener("end",j),s.removeEventListener("inputsourceschange",Q);for(let ie=0;ie<R.length;ie++){const ae=C[ie];ae!==null&&(C[ie]=null,R[ie].disconnect(ae))}z=null,Y=null,m.reset();for(const ie in p)delete p[ie];e.setRenderTarget(b),f=null,d=null,u=null,s=null,M=null,ft.stop(),n.isPresenting=!1,e.setPixelRatio(L),e.setSize(w.width,w.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ie){r=ie,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ie){a=ie,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(ie){l=ie},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u===null&&y&&(u=new XRWebGLBinding(s,t)),u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(ie){if(s=ie,s!==null){if(b=e.getRenderTarget(),s.addEventListener("select",$),s.addEventListener("selectstart",$),s.addEventListener("selectend",$),s.addEventListener("squeeze",$),s.addEventListener("squeezestart",$),s.addEventListener("squeezeend",$),s.addEventListener("end",j),s.addEventListener("inputsourceschange",Q),x.xrCompatible!==!0&&await t.makeXRCompatible(),L=e.getPixelRatio(),e.getSize(w),y&&"createProjectionLayer"in XRWebGLBinding.prototype){let Te=null,He=null,Ce=null;x.depth&&(Ce=x.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Te=x.stencil?Mo:yo,He=x.stencil?xo:Is);const at={colorFormat:t.RGBA8,depthFormat:Ce,scaleFactor:r};u=this.getBinding(),d=u.createProjectionLayer(at),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),M=new $n(d.textureWidth,d.textureHeight,{format:qn,type:_i,depthTexture:new Vf(d.textureWidth,d.textureHeight,He,void 0,void 0,void 0,void 0,void 0,void 0,Te),stencilBuffer:x.stencil,colorSpace:e.outputColorSpace,samples:x.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{const Te={antialias:x.antialias,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,Te),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),M=new $n(f.framebufferWidth,f.framebufferHeight,{format:qn,type:_i,colorSpace:e.outputColorSpace,stencilBuffer:x.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),ft.setContext(s),ft.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function Q(ie){for(let ae=0;ae<ie.removed.length;ae++){const Te=ie.removed[ae],He=C.indexOf(Te);He>=0&&(C[He]=null,R[He].disconnect(Te))}for(let ae=0;ae<ie.added.length;ae++){const Te=ie.added[ae];let He=C.indexOf(Te);if(He===-1){for(let at=0;at<R.length;at++)if(at>=C.length){C.push(Te),He=at;break}else if(C[at]===null){C[at]=Te,He=at;break}if(He===-1)break}const Ce=R[He];Ce&&Ce.connect(Te)}}const K=new U,me=new U;function ve(ie,ae,Te){K.setFromMatrixPosition(ae.matrixWorld),me.setFromMatrixPosition(Te.matrixWorld);const He=K.distanceTo(me),Ce=ae.projectionMatrix.elements,at=Te.projectionMatrix.elements,Kt=Ce[14]/(Ce[10]-1),O=Ce[14]/(Ce[10]+1),Nt=(Ce[9]+1)/Ce[5],je=(Ce[9]-1)/Ce[5],qe=(Ce[8]-1)/Ce[0],Ne=(at[8]+1)/at[0],Ut=Kt*qe,Oe=Kt*Ne,nt=He/(-qe+Ne),jt=nt*-qe;if(ae.matrixWorld.decompose(ie.position,ie.quaternion,ie.scale),ie.translateX(jt),ie.translateZ(nt),ie.matrixWorld.compose(ie.position,ie.quaternion,ie.scale),ie.matrixWorldInverse.copy(ie.matrixWorld).invert(),Ce[10]===-1)ie.projectionMatrix.copy(ae.projectionMatrix),ie.projectionMatrixInverse.copy(ae.projectionMatrixInverse);else{const zt=Kt+nt,N=O+nt,A=Ut-jt,X=Oe+(He-jt),te=Nt*O/N*zt,oe=je*O/N*zt;ie.projectionMatrix.makePerspective(A,X,te,oe,zt,N),ie.projectionMatrixInverse.copy(ie.projectionMatrix).invert()}}function De(ie,ae){ae===null?ie.matrixWorld.copy(ie.matrix):ie.matrixWorld.multiplyMatrices(ae.matrixWorld,ie.matrix),ie.matrixWorldInverse.copy(ie.matrixWorld).invert()}this.updateCamera=function(ie){if(s===null)return;let ae=ie.near,Te=ie.far;m.texture!==null&&(m.depthNear>0&&(ae=m.depthNear),m.depthFar>0&&(Te=m.depthFar)),k.near=E.near=S.near=ae,k.far=E.far=S.far=Te,(z!==k.near||Y!==k.far)&&(s.updateRenderState({depthNear:k.near,depthFar:k.far}),z=k.near,Y=k.far),k.layers.mask=ie.layers.mask|6,S.layers.mask=k.layers.mask&3,E.layers.mask=k.layers.mask&5;const He=ie.parent,Ce=k.cameras;De(k,He);for(let at=0;at<Ce.length;at++)De(Ce[at],He);Ce.length===2?ve(k,S,E):k.projectionMatrix.copy(S.projectionMatrix),Je(ie,k,He)};function Je(ie,ae,Te){Te===null?ie.matrix.copy(ae.matrixWorld):(ie.matrix.copy(Te.matrixWorld),ie.matrix.invert(),ie.matrix.multiply(ae.matrixWorld)),ie.matrix.decompose(ie.position,ie.quaternion,ie.scale),ie.updateMatrixWorld(!0),ie.projectionMatrix.copy(ae.projectionMatrix),ie.projectionMatrixInverse.copy(ae.projectionMatrixInverse),ie.isPerspectiveCamera&&(ie.fov=Cr*2*Math.atan(1/ie.projectionMatrix.elements[5]),ie.zoom=1)}this.getCamera=function(){return k},this.getFoveation=function(){if(!(d===null&&f===null))return c},this.setFoveation=function(ie){c=ie,d!==null&&(d.fixedFoveation=ie),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=ie)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(k)},this.getCameraTexture=function(ie){return p[ie]};let mt=null;function At(ie,ae){if(h=ae.getViewerPose(l||o),g=ae,h!==null){const Te=h.views;f!==null&&(e.setRenderTargetFramebuffer(M,f.framebuffer),e.setRenderTarget(M));let He=!1;Te.length!==k.cameras.length&&(k.cameras.length=0,He=!0);for(let O=0;O<Te.length;O++){const Nt=Te[O];let je=null;if(f!==null)je=f.getViewport(Nt);else{const Ne=u.getViewSubImage(d,Nt);je=Ne.viewport,O===0&&(e.setRenderTargetTextures(M,Ne.colorTexture,Ne.depthStencilTexture),e.setRenderTarget(M))}let qe=I[O];qe===void 0&&(qe=new wn,qe.layers.enable(O),qe.viewport=new Mt,I[O]=qe),qe.matrix.fromArray(Nt.transform.matrix),qe.matrix.decompose(qe.position,qe.quaternion,qe.scale),qe.projectionMatrix.fromArray(Nt.projectionMatrix),qe.projectionMatrixInverse.copy(qe.projectionMatrix).invert(),qe.viewport.set(je.x,je.y,je.width,je.height),O===0&&(k.matrix.copy(qe.matrix),k.matrix.decompose(k.position,k.quaternion,k.scale)),He===!0&&k.cameras.push(qe)}const Ce=s.enabledFeatures;if(Ce&&Ce.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&y){u=n.getBinding();const O=u.getDepthInformation(Te[0]);O&&O.isValid&&O.texture&&m.init(O,s.renderState)}if(Ce&&Ce.includes("camera-access")&&y){e.state.unbindTexture(),u=n.getBinding();for(let O=0;O<Te.length;O++){const Nt=Te[O].camera;if(Nt){let je=p[Nt];je||(je=new Gf,p[Nt]=je);const qe=u.getCameraImage(Nt);je.sourceTexture=qe}}}}for(let Te=0;Te<R.length;Te++){const He=C[Te],Ce=R[Te];He!==null&&Ce!==void 0&&Ce.update(He,ae,l||o)}mt&&mt(ie,ae),ae.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ae}),g=null}const ft=new Zf;ft.setAnimationLoop(At),this.setAnimationLoop=function(ie){mt=ie},this.dispose=function(){}}}const vs=new vi,nM=new tt;function iM(i,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,Uf(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,x,b,M){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),u(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p)):p.isMeshStandardMaterial?(r(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,M)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),y(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?c(m,p,x,b):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===An&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===An&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const x=e.get(p),b=x.envMap,M=x.envMapRotation;b&&(m.envMap.value=b,vs.copy(M),vs.x*=-1,vs.y*=-1,vs.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(vs.y*=-1,vs.z*=-1),m.envMapRotation.value.setFromMatrix4(nM.makeRotationFromEuler(vs)),m.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,x,b){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*x,m.scale.value=b*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,x){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===An&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=x.texture,m.transmissionSamplerSize.value.set(x.width,x.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function y(m,p){const x=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(x.matrixWorld),m.nearDistance.value=x.shadow.camera.near,m.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function sM(i,e,t,n){let s={},r={},o=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(x,b){const M=b.program;n.uniformBlockBinding(x,M)}function l(x,b){let M=s[x.id];M===void 0&&(g(x),M=h(x),s[x.id]=M,x.addEventListener("dispose",m));const R=b.program;n.updateUBOMapping(x,R);const C=e.render.frame;r[x.id]!==C&&(d(x),r[x.id]=C)}function h(x){const b=u();x.__bindingPointIndex=b;const M=i.createBuffer(),R=x.__size,C=x.usage;return i.bindBuffer(i.UNIFORM_BUFFER,M),i.bufferData(i.UNIFORM_BUFFER,R,C),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,b,M),M}function u(){for(let x=0;x<a;x++)if(o.indexOf(x)===-1)return o.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(x){const b=s[x.id],M=x.uniforms,R=x.__cache;i.bindBuffer(i.UNIFORM_BUFFER,b);for(let C=0,w=M.length;C<w;C++){const L=Array.isArray(M[C])?M[C]:[M[C]];for(let S=0,E=L.length;S<E;S++){const I=L[S];if(f(I,C,S,R)===!0){const k=I.__offset,z=Array.isArray(I.value)?I.value:[I.value];let Y=0;for(let $=0;$<z.length;$++){const j=z[$],Q=y(j);typeof j=="number"||typeof j=="boolean"?(I.__data[0]=j,i.bufferSubData(i.UNIFORM_BUFFER,k+Y,I.__data)):j.isMatrix3?(I.__data[0]=j.elements[0],I.__data[1]=j.elements[1],I.__data[2]=j.elements[2],I.__data[3]=0,I.__data[4]=j.elements[3],I.__data[5]=j.elements[4],I.__data[6]=j.elements[5],I.__data[7]=0,I.__data[8]=j.elements[6],I.__data[9]=j.elements[7],I.__data[10]=j.elements[8],I.__data[11]=0):(j.toArray(I.__data,Y),Y+=Q.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,k,I.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(x,b,M,R){const C=x.value,w=b+"_"+M;if(R[w]===void 0)return typeof C=="number"||typeof C=="boolean"?R[w]=C:R[w]=C.clone(),!0;{const L=R[w];if(typeof C=="number"||typeof C=="boolean"){if(L!==C)return R[w]=C,!0}else if(L.equals(C)===!1)return L.copy(C),!0}return!1}function g(x){const b=x.uniforms;let M=0;const R=16;for(let w=0,L=b.length;w<L;w++){const S=Array.isArray(b[w])?b[w]:[b[w]];for(let E=0,I=S.length;E<I;E++){const k=S[E],z=Array.isArray(k.value)?k.value:[k.value];for(let Y=0,$=z.length;Y<$;Y++){const j=z[Y],Q=y(j),K=M%R,me=K%Q.boundary,ve=K+me;M+=me,ve!==0&&R-ve<Q.storage&&(M+=R-ve),k.__data=new Float32Array(Q.storage/Float32Array.BYTES_PER_ELEMENT),k.__offset=M,M+=Q.storage}}}const C=M%R;return C>0&&(M+=R-C),x.__size=M,x.__cache={},this}function y(x){const b={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(b.boundary=4,b.storage=4):x.isVector2?(b.boundary=8,b.storage=8):x.isVector3||x.isColor?(b.boundary=16,b.storage=12):x.isVector4?(b.boundary=16,b.storage=16):x.isMatrix3?(b.boundary=48,b.storage=48):x.isMatrix4?(b.boundary=64,b.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),b}function m(x){const b=x.target;b.removeEventListener("dispose",m);const M=o.indexOf(b.__bindingPointIndex);o.splice(M,1),i.deleteBuffer(s[b.id]),delete s[b.id],delete r[b.id]}function p(){for(const x in s)i.deleteBuffer(s[x]);o=[],s={},r={}}return{bind:c,update:l,dispose:p}}class rM{constructor(e={}){const{canvas:t=$m(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=o;const g=new Uint32Array(4),y=new Int32Array(4);let m=null,p=null;const x=[],b=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=os,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const M=this;let R=!1;this._outputColorSpace=Yt;let C=0,w=0,L=null,S=-1,E=null;const I=new Mt,k=new Mt;let z=null;const Y=new ze(0);let $=0,j=t.width,Q=t.height,K=1,me=null,ve=null;const De=new Mt(0,0,j,Q),Je=new Mt(0,0,j,Q);let mt=!1;const At=new wu;let ft=!1,ie=!1;const ae=new tt,Te=new U,He=new Mt,Ce={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let at=!1;function Kt(){return L===null?K:1}let O=n;function Nt(P,V){return t.getContext(P,V)}try{const P={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${du}`),t.addEventListener("webglcontextlost",pe,!1),t.addEventListener("webglcontextrestored",Ee,!1),t.addEventListener("webglcontextcreationerror",ue,!1),O===null){const V="webgl2";if(O=Nt(V,P),O===null)throw Nt(V)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(P){throw console.error("THREE.WebGLRenderer: "+P.message),P}let je,qe,Ne,Ut,Oe,nt,jt,zt,N,A,X,te,oe,Z,Ve,ge,Ue,ke,he,ye,$e,Be,Me,Qe;function B(){je=new mx(O),je.init(),Be=new Zy(O,je),qe=new cx(O,je,e,Be),Ne=new Ky(O,je),qe.reversedDepthBuffer&&d&&Ne.buffers.depth.setReversed(!0),Ut=new vx(O),Oe=new Fy,nt=new jy(O,je,Ne,Oe,qe,Be,Ut),jt=new ux(M),zt=new px(M),N=new T0(O),Me=new ox(O,N),A=new gx(O,N,Ut,Me),X=new yx(O,A,N,Ut),he=new xx(O,qe,nt),ge=new lx(Oe),te=new Uy(M,jt,zt,je,qe,Me,ge),oe=new iM(M,Oe),Z=new ky,Ve=new Wy(je),ke=new rx(M,jt,zt,Ne,X,f,c),Ue=new $y(M,X,qe),Qe=new sM(O,Ut,qe,Ne),ye=new ax(O,je,Ut),$e=new _x(O,je,Ut),Ut.programs=te.programs,M.capabilities=qe,M.extensions=je,M.properties=Oe,M.renderLists=Z,M.shadowMap=Ue,M.state=Ne,M.info=Ut}B();const de=new tM(M,O);this.xr=de,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){const P=je.get("WEBGL_lose_context");P&&P.loseContext()},this.forceContextRestore=function(){const P=je.get("WEBGL_lose_context");P&&P.restoreContext()},this.getPixelRatio=function(){return K},this.setPixelRatio=function(P){P!==void 0&&(K=P,this.setSize(j,Q,!1))},this.getSize=function(P){return P.set(j,Q)},this.setSize=function(P,V,q=!0){if(de.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}j=P,Q=V,t.width=Math.floor(P*K),t.height=Math.floor(V*K),q===!0&&(t.style.width=P+"px",t.style.height=V+"px"),this.setViewport(0,0,P,V)},this.getDrawingBufferSize=function(P){return P.set(j*K,Q*K).floor()},this.setDrawingBufferSize=function(P,V,q){j=P,Q=V,K=q,t.width=Math.floor(P*q),t.height=Math.floor(V*q),this.setViewport(0,0,P,V)},this.getCurrentViewport=function(P){return P.copy(I)},this.getViewport=function(P){return P.copy(De)},this.setViewport=function(P,V,q,F){P.isVector4?De.set(P.x,P.y,P.z,P.w):De.set(P,V,q,F),Ne.viewport(I.copy(De).multiplyScalar(K).round())},this.getScissor=function(P){return P.copy(Je)},this.setScissor=function(P,V,q,F){P.isVector4?Je.set(P.x,P.y,P.z,P.w):Je.set(P,V,q,F),Ne.scissor(k.copy(Je).multiplyScalar(K).round())},this.getScissorTest=function(){return mt},this.setScissorTest=function(P){Ne.setScissorTest(mt=P)},this.setOpaqueSort=function(P){me=P},this.setTransparentSort=function(P){ve=P},this.getClearColor=function(P){return P.copy(ke.getClearColor())},this.setClearColor=function(){ke.setClearColor(...arguments)},this.getClearAlpha=function(){return ke.getClearAlpha()},this.setClearAlpha=function(){ke.setClearAlpha(...arguments)},this.clear=function(P=!0,V=!0,q=!0){let F=0;if(P){let G=!1;if(L!==null){const le=L.texture.format;G=le===yu||le===xu||le===vu}if(G){const le=L.texture.type,be=le===_i||le===Is||le===vo||le===xo||le===mu||le===gu,Le=ke.getClearColor(),we=ke.getClearAlpha(),Re=Le.r,Ie=Le.g,Ge=Le.b;be?(g[0]=Re,g[1]=Ie,g[2]=Ge,g[3]=we,O.clearBufferuiv(O.COLOR,0,g)):(y[0]=Re,y[1]=Ie,y[2]=Ge,y[3]=we,O.clearBufferiv(O.COLOR,0,y))}else F|=O.COLOR_BUFFER_BIT}V&&(F|=O.DEPTH_BUFFER_BIT),q&&(F|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),O.clear(F)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",pe,!1),t.removeEventListener("webglcontextrestored",Ee,!1),t.removeEventListener("webglcontextcreationerror",ue,!1),ke.dispose(),Z.dispose(),Ve.dispose(),Oe.dispose(),jt.dispose(),zt.dispose(),X.dispose(),Me.dispose(),Qe.dispose(),te.dispose(),de.dispose(),de.removeEventListener("sessionstart",kn),de.removeEventListener("sessionend",Oo),Zn.stop()};function pe(P){P.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),R=!0}function Ee(){console.log("THREE.WebGLRenderer: Context Restored."),R=!1;const P=Ut.autoReset,V=Ue.enabled,q=Ue.autoUpdate,F=Ue.needsUpdate,G=Ue.type;B(),Ut.autoReset=P,Ue.enabled=V,Ue.autoUpdate=q,Ue.needsUpdate=F,Ue.type=G}function ue(P){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",P.statusMessage)}function se(P){const V=P.target;V.removeEventListener("dispose",se),Pe(V)}function Pe(P){Ze(P),Oe.remove(P)}function Ze(P){const V=Oe.get(P).programs;V!==void 0&&(V.forEach(function(q){te.releaseProgram(q)}),P.isShaderMaterial&&te.releaseShaderCache(P))}this.renderBufferDirect=function(P,V,q,F,G,le){V===null&&(V=Ce);const be=G.isMesh&&G.matrixWorld.determinant()<0,Le=pc(P,V,q,F,G);Ne.setMaterial(F,be);let we=q.index,Re=1;if(F.wireframe===!0){if(we=A.getWireframeAttribute(q),we===void 0)return;Re=2}const Ie=q.drawRange,Ge=q.attributes.position;let ct=Ie.start*Re,bt=(Ie.start+Ie.count)*Re;le!==null&&(ct=Math.max(ct,le.start*Re),bt=Math.min(bt,(le.start+le.count)*Re)),we!==null?(ct=Math.max(ct,0),bt=Math.min(bt,we.count)):Ge!=null&&(ct=Math.max(ct,0),bt=Math.min(bt,Ge.count));const Vt=bt-ct;if(Vt<0||Vt===1/0)return;Me.setup(G,F,Le,q,we);let Dt,Tt=ye;if(we!==null&&(Dt=N.get(we),Tt=$e,Tt.setIndex(Dt)),G.isMesh)F.wireframe===!0?(Ne.setLineWidth(F.wireframeLinewidth*Kt()),Tt.setMode(O.LINES)):Tt.setMode(O.TRIANGLES);else if(G.isLine){let We=F.linewidth;We===void 0&&(We=1),Ne.setLineWidth(We*Kt()),G.isLineSegments?Tt.setMode(O.LINES):G.isLineLoop?Tt.setMode(O.LINE_LOOP):Tt.setMode(O.LINE_STRIP)}else G.isPoints?Tt.setMode(O.POINTS):G.isSprite&&Tt.setMode(O.TRIANGLES);if(G.isBatchedMesh)if(G._multiDrawInstances!==null)Eo("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Tt.renderMultiDrawInstances(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount,G._multiDrawInstances);else if(je.get("WEBGL_multi_draw"))Tt.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else{const We=G._multiDrawStarts,Ot=G._multiDrawCounts,gt=G._multiDrawCount,yn=we?N.get(we).bytesPerElement:1,wi=Oe.get(F).currentProgram.getUniforms();for(let Mn=0;Mn<gt;Mn++)wi.setValue(O,"_gl_DrawID",Mn),Tt.render(We[Mn]/yn,Ot[Mn])}else if(G.isInstancedMesh)Tt.renderInstances(ct,Vt,G.count);else if(q.isInstancedBufferGeometry){const We=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,Ot=Math.min(q.instanceCount,We);Tt.renderInstances(ct,Vt,Ot)}else Tt.render(ct,Vt)};function vt(P,V,q){P.transparent===!0&&P.side===Un&&P.forceSinglePass===!1?(P.side=An,P.needsUpdate=!0,Hs(P,V,q),P.side=Gi,P.needsUpdate=!0,Hs(P,V,q),P.side=Un):Hs(P,V,q)}this.compile=function(P,V,q=null){q===null&&(q=P),p=Ve.get(q),p.init(V),b.push(p),q.traverseVisible(function(G){G.isLight&&G.layers.test(V.layers)&&(p.pushLight(G),G.castShadow&&p.pushShadow(G))}),P!==q&&P.traverseVisible(function(G){G.isLight&&G.layers.test(V.layers)&&(p.pushLight(G),G.castShadow&&p.pushShadow(G))}),p.setupLights();const F=new Set;return P.traverse(function(G){if(!(G.isMesh||G.isPoints||G.isLine||G.isSprite))return;const le=G.material;if(le)if(Array.isArray(le))for(let be=0;be<le.length;be++){const Le=le[be];vt(Le,q,G),F.add(Le)}else vt(le,q,G),F.add(le)}),p=b.pop(),F},this.compileAsync=function(P,V,q=null){const F=this.compile(P,V,q);return new Promise(G=>{function le(){if(F.forEach(function(be){Oe.get(be).currentProgram.isReady()&&F.delete(be)}),F.size===0){G(P);return}setTimeout(le,10)}je.get("KHR_parallel_shader_compile")!==null?le():setTimeout(le,10)})};let xt=null;function jn(P){xt&&xt(P)}function kn(){Zn.stop()}function Oo(){Zn.start()}const Zn=new Zf;Zn.setAnimationLoop(jn),typeof self<"u"&&Zn.setContext(self),this.setAnimationLoop=function(P){xt=P,de.setAnimationLoop(P),P===null?Zn.stop():Zn.start()},de.addEventListener("sessionstart",kn),de.addEventListener("sessionend",Oo),this.render=function(P,V){if(V!==void 0&&V.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(R===!0)return;if(P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),V.parent===null&&V.matrixWorldAutoUpdate===!0&&V.updateMatrixWorld(),de.enabled===!0&&de.isPresenting===!0&&(de.cameraAutoUpdate===!0&&de.updateCamera(V),V=de.getCamera()),P.isScene===!0&&P.onBeforeRender(M,P,V,L),p=Ve.get(P,b.length),p.init(V),b.push(p),ae.multiplyMatrices(V.projectionMatrix,V.matrixWorldInverse),At.setFromProjectionMatrix(ae,mi,V.reversedDepth),ie=this.localClippingEnabled,ft=ge.init(this.clippingPlanes,ie),m=Z.get(P,x.length),m.init(),x.push(m),de.enabled===!0&&de.isPresenting===!0){const le=M.xr.getDepthSensingMesh();le!==null&&zs(le,V,-1/0,M.sortObjects)}zs(P,V,0,M.sortObjects),m.finish(),M.sortObjects===!0&&m.sort(me,ve),at=de.enabled===!1||de.isPresenting===!1||de.hasDepthSensing()===!1,at&&ke.addToRenderList(m,P),this.info.render.frame++,ft===!0&&ge.beginShadows();const q=p.state.shadowsArray;Ue.render(q,P,V),ft===!0&&ge.endShadows(),this.info.autoReset===!0&&this.info.reset();const F=m.opaque,G=m.transmissive;if(p.setupLights(),V.isArrayCamera){const le=V.cameras;if(G.length>0)for(let be=0,Le=le.length;be<Le;be++){const we=le[be];Ei(F,G,P,we)}at&&ke.render(P);for(let be=0,Le=le.length;be<Le;be++){const we=le[be];ko(m,P,we,we.viewport)}}else G.length>0&&Ei(F,G,P,V),at&&ke.render(P),ko(m,P,V);L!==null&&w===0&&(nt.updateMultisampleRenderTarget(L),nt.updateRenderTargetMipmap(L)),P.isScene===!0&&P.onAfterRender(M,P,V),Me.resetDefaultState(),S=-1,E=null,b.pop(),b.length>0?(p=b[b.length-1],ft===!0&&ge.setGlobalState(M.clippingPlanes,p.state.camera)):p=null,x.pop(),x.length>0?m=x[x.length-1]:m=null};function zs(P,V,q,F){if(P.visible===!1)return;if(P.layers.test(V.layers)){if(P.isGroup)q=P.renderOrder;else if(P.isLOD)P.autoUpdate===!0&&P.update(V);else if(P.isLight)p.pushLight(P),P.castShadow&&p.pushShadow(P);else if(P.isSprite){if(!P.frustumCulled||At.intersectsSprite(P)){F&&He.setFromMatrixPosition(P.matrixWorld).applyMatrix4(ae);const be=X.update(P),Le=P.material;Le.visible&&m.push(P,be,Le,q,He.z,null)}}else if((P.isMesh||P.isLine||P.isPoints)&&(!P.frustumCulled||At.intersectsObject(P))){const be=X.update(P),Le=P.material;if(F&&(P.boundingSphere!==void 0?(P.boundingSphere===null&&P.computeBoundingSphere(),He.copy(P.boundingSphere.center)):(be.boundingSphere===null&&be.computeBoundingSphere(),He.copy(be.boundingSphere.center)),He.applyMatrix4(P.matrixWorld).applyMatrix4(ae)),Array.isArray(Le)){const we=be.groups;for(let Re=0,Ie=we.length;Re<Ie;Re++){const Ge=we[Re],ct=Le[Ge.materialIndex];ct&&ct.visible&&m.push(P,be,ct,q,He.z,Ge)}}else Le.visible&&m.push(P,be,Le,q,He.z,null)}}const le=P.children;for(let be=0,Le=le.length;be<Le;be++)zs(le[be],V,q,F)}function ko(P,V,q,F){const G=P.opaque,le=P.transmissive,be=P.transparent;p.setupLightsView(q),ft===!0&&ge.setGlobalState(M.clippingPlanes,q),F&&Ne.viewport(I.copy(F)),G.length>0&&ui(G,V,q),le.length>0&&ui(le,V,q),be.length>0&&ui(be,V,q),Ne.buffers.depth.setTest(!0),Ne.buffers.depth.setMask(!0),Ne.buffers.color.setMask(!0),Ne.setPolygonOffset(!1)}function Ei(P,V,q,F){if((q.isScene===!0?q.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[F.id]===void 0&&(p.state.transmissionRenderTarget[F.id]=new $n(1,1,{generateMipmaps:!0,type:je.has("EXT_color_buffer_half_float")||je.has("EXT_color_buffer_float")?gi:_i,minFilter:ki,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:pt.workingColorSpace}));const le=p.state.transmissionRenderTarget[F.id],be=F.viewport||I;le.setSize(be.z*M.transmissionResolutionScale,be.w*M.transmissionResolutionScale);const Le=M.getRenderTarget(),we=M.getActiveCubeFace(),Re=M.getActiveMipmapLevel();M.setRenderTarget(le),M.getClearColor(Y),$=M.getClearAlpha(),$<1&&M.setClearColor(16777215,.5),M.clear(),at&&ke.render(q);const Ie=M.toneMapping;M.toneMapping=os;const Ge=F.viewport;if(F.viewport!==void 0&&(F.viewport=void 0),p.setupLightsView(F),ft===!0&&ge.setGlobalState(M.clippingPlanes,F),ui(P,q,F),nt.updateMultisampleRenderTarget(le),nt.updateRenderTargetMipmap(le),je.has("WEBGL_multisampled_render_to_texture")===!1){let ct=!1;for(let bt=0,Vt=V.length;bt<Vt;bt++){const Dt=V[bt],Tt=Dt.object,We=Dt.geometry,Ot=Dt.material,gt=Dt.group;if(Ot.side===Un&&Tt.layers.test(F.layers)){const yn=Ot.side;Ot.side=An,Ot.needsUpdate=!0,Bo(Tt,q,F,We,Ot,gt),Ot.side=yn,Ot.needsUpdate=!0,ct=!0}}ct===!0&&(nt.updateMultisampleRenderTarget(le),nt.updateRenderTargetMipmap(le))}M.setRenderTarget(Le,we,Re),M.setClearColor(Y,$),Ge!==void 0&&(F.viewport=Ge),M.toneMapping=Ie}function ui(P,V,q){const F=V.isScene===!0?V.overrideMaterial:null;for(let G=0,le=P.length;G<le;G++){const be=P[G],Le=be.object,we=be.geometry,Re=be.group;let Ie=be.material;Ie.allowOverride===!0&&F!==null&&(Ie=F),Le.layers.test(q.layers)&&Bo(Le,V,q,we,Ie,Re)}}function Bo(P,V,q,F,G,le){P.onBeforeRender(M,V,q,F,G,le),P.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,P.matrixWorld),P.normalMatrix.getNormalMatrix(P.modelViewMatrix),G.onBeforeRender(M,V,q,F,P,le),G.transparent===!0&&G.side===Un&&G.forceSinglePass===!1?(G.side=An,G.needsUpdate=!0,M.renderBufferDirect(q,V,F,G,P,le),G.side=Gi,G.needsUpdate=!0,M.renderBufferDirect(q,V,F,G,P,le),G.side=Un):M.renderBufferDirect(q,V,F,G,P,le),P.onAfterRender(M,V,q,F,G,le)}function Hs(P,V,q){V.isScene!==!0&&(V=Ce);const F=Oe.get(P),G=p.state.lights,le=p.state.shadowsArray,be=G.state.version,Le=te.getParameters(P,G.state,le,V,q),we=te.getProgramCacheKey(Le);let Re=F.programs;F.environment=P.isMeshStandardMaterial?V.environment:null,F.fog=V.fog,F.envMap=(P.isMeshStandardMaterial?zt:jt).get(P.envMap||F.environment),F.envMapRotation=F.environment!==null&&P.envMap===null?V.environmentRotation:P.envMapRotation,Re===void 0&&(P.addEventListener("dispose",se),Re=new Map,F.programs=Re);let Ie=Re.get(we);if(Ie!==void 0){if(F.currentProgram===Ie&&F.lightsStateVersion===be)return zo(P,Le),Ie}else Le.uniforms=te.getUniforms(P),P.onBeforeCompile(Le,M),Ie=te.acquireProgram(Le,we),Re.set(we,Ie),F.uniforms=Le.uniforms;const Ge=F.uniforms;return(!P.isShaderMaterial&&!P.isRawShaderMaterial||P.clipping===!0)&&(Ge.clippingPlanes=ge.uniform),zo(P,Le),F.needsLights=qr(P),F.lightsStateVersion=be,F.needsLights&&(Ge.ambientLightColor.value=G.state.ambient,Ge.lightProbe.value=G.state.probe,Ge.directionalLights.value=G.state.directional,Ge.directionalLightShadows.value=G.state.directionalShadow,Ge.spotLights.value=G.state.spot,Ge.spotLightShadows.value=G.state.spotShadow,Ge.rectAreaLights.value=G.state.rectArea,Ge.ltc_1.value=G.state.rectAreaLTC1,Ge.ltc_2.value=G.state.rectAreaLTC2,Ge.pointLights.value=G.state.point,Ge.pointLightShadows.value=G.state.pointShadow,Ge.hemisphereLights.value=G.state.hemi,Ge.directionalShadowMap.value=G.state.directionalShadowMap,Ge.directionalShadowMatrix.value=G.state.directionalShadowMatrix,Ge.spotShadowMap.value=G.state.spotShadowMap,Ge.spotLightMatrix.value=G.state.spotLightMatrix,Ge.spotLightMap.value=G.state.spotLightMap,Ge.pointShadowMap.value=G.state.pointShadowMap,Ge.pointShadowMatrix.value=G.state.pointShadowMatrix),F.currentProgram=Ie,F.uniformsList=null,Ie}function Ki(P){if(P.uniformsList===null){const V=P.currentProgram.getUniforms();P.uniformsList=Ca.seqWithValue(V.seq,P.uniforms)}return P.uniformsList}function zo(P,V){const q=Oe.get(P);q.outputColorSpace=V.outputColorSpace,q.batching=V.batching,q.batchingColor=V.batchingColor,q.instancing=V.instancing,q.instancingColor=V.instancingColor,q.instancingMorph=V.instancingMorph,q.skinning=V.skinning,q.morphTargets=V.morphTargets,q.morphNormals=V.morphNormals,q.morphColors=V.morphColors,q.morphTargetsCount=V.morphTargetsCount,q.numClippingPlanes=V.numClippingPlanes,q.numIntersection=V.numClipIntersection,q.vertexAlphas=V.vertexAlphas,q.vertexTangents=V.vertexTangents,q.toneMapping=V.toneMapping}function pc(P,V,q,F,G){V.isScene!==!0&&(V=Ce),nt.resetTextureUnits();const le=V.fog,be=F.isMeshStandardMaterial?V.environment:null,Le=L===null?M.outputColorSpace:L.isXRRenderTarget===!0?L.texture.colorSpace:xn,we=(F.isMeshStandardMaterial?zt:jt).get(F.envMap||be),Re=F.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,Ie=!!q.attributes.tangent&&(!!F.normalMap||F.anisotropy>0),Ge=!!q.morphAttributes.position,ct=!!q.morphAttributes.normal,bt=!!q.morphAttributes.color;let Vt=os;F.toneMapped&&(L===null||L.isXRRenderTarget===!0)&&(Vt=M.toneMapping);const Dt=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,Tt=Dt!==void 0?Dt.length:0,We=Oe.get(F),Ot=p.state.lights;if(ft===!0&&(ie===!0||P!==E)){const qt=P===E&&F.id===S;ge.setState(F,P,qt)}let gt=!1;F.version===We.__version?(We.needsLights&&We.lightsStateVersion!==Ot.state.version||We.outputColorSpace!==Le||G.isBatchedMesh&&We.batching===!1||!G.isBatchedMesh&&We.batching===!0||G.isBatchedMesh&&We.batchingColor===!0&&G.colorTexture===null||G.isBatchedMesh&&We.batchingColor===!1&&G.colorTexture!==null||G.isInstancedMesh&&We.instancing===!1||!G.isInstancedMesh&&We.instancing===!0||G.isSkinnedMesh&&We.skinning===!1||!G.isSkinnedMesh&&We.skinning===!0||G.isInstancedMesh&&We.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&We.instancingColor===!1&&G.instanceColor!==null||G.isInstancedMesh&&We.instancingMorph===!0&&G.morphTexture===null||G.isInstancedMesh&&We.instancingMorph===!1&&G.morphTexture!==null||We.envMap!==we||F.fog===!0&&We.fog!==le||We.numClippingPlanes!==void 0&&(We.numClippingPlanes!==ge.numPlanes||We.numIntersection!==ge.numIntersection)||We.vertexAlphas!==Re||We.vertexTangents!==Ie||We.morphTargets!==Ge||We.morphNormals!==ct||We.morphColors!==bt||We.toneMapping!==Vt||We.morphTargetsCount!==Tt)&&(gt=!0):(gt=!0,We.__version=F.version);let yn=We.currentProgram;gt===!0&&(yn=Hs(F,V,G));let wi=!1,Mn=!1,ds=!1;const kt=yn.getUniforms(),Rn=We.uniforms;if(Ne.useProgram(yn.program)&&(wi=!0,Mn=!0,ds=!0),F.id!==S&&(S=F.id,Mn=!0),wi||E!==P){Ne.buffers.depth.getReversed()&&P.reversedDepth!==!0&&(P._reversedDepth=!0,P.updateProjectionMatrix()),kt.setValue(O,"projectionMatrix",P.projectionMatrix),kt.setValue(O,"viewMatrix",P.matrixWorldInverse);const rn=kt.map.cameraPosition;rn!==void 0&&rn.setValue(O,Te.setFromMatrixPosition(P.matrixWorld)),qe.logarithmicDepthBuffer&&kt.setValue(O,"logDepthBufFC",2/(Math.log(P.far+1)/Math.LN2)),(F.isMeshPhongMaterial||F.isMeshToonMaterial||F.isMeshLambertMaterial||F.isMeshBasicMaterial||F.isMeshStandardMaterial||F.isShaderMaterial)&&kt.setValue(O,"isOrthographic",P.isOrthographicCamera===!0),E!==P&&(E=P,Mn=!0,ds=!0)}if(G.isSkinnedMesh){kt.setOptional(O,G,"bindMatrix"),kt.setOptional(O,G,"bindMatrixInverse");const qt=G.skeleton;qt&&(qt.boneTexture===null&&qt.computeBoneTexture(),kt.setValue(O,"boneTexture",qt.boneTexture,nt))}G.isBatchedMesh&&(kt.setOptional(O,G,"batchingTexture"),kt.setValue(O,"batchingTexture",G._matricesTexture,nt),kt.setOptional(O,G,"batchingIdTexture"),kt.setValue(O,"batchingIdTexture",G._indirectTexture,nt),kt.setOptional(O,G,"batchingColorTexture"),G._colorsTexture!==null&&kt.setValue(O,"batchingColorTexture",G._colorsTexture,nt));const pn=q.morphAttributes;if((pn.position!==void 0||pn.normal!==void 0||pn.color!==void 0)&&he.update(G,q,yn),(Mn||We.receiveShadow!==G.receiveShadow)&&(We.receiveShadow=G.receiveShadow,kt.setValue(O,"receiveShadow",G.receiveShadow)),F.isMeshGouraudMaterial&&F.envMap!==null&&(Rn.envMap.value=we,Rn.flipEnvMap.value=we.isCubeTexture&&we.isRenderTargetTexture===!1?-1:1),F.isMeshStandardMaterial&&F.envMap===null&&V.environment!==null&&(Rn.envMapIntensity.value=V.environmentIntensity),Mn&&(kt.setValue(O,"toneMappingExposure",M.toneMappingExposure),We.needsLights&&Vs(Rn,ds),le&&F.fog===!0&&oe.refreshFogUniforms(Rn,le),oe.refreshMaterialUniforms(Rn,F,K,Q,p.state.transmissionRenderTarget[P.id]),Ca.upload(O,Ki(We),Rn,nt)),F.isShaderMaterial&&F.uniformsNeedUpdate===!0&&(Ca.upload(O,Ki(We),Rn,nt),F.uniformsNeedUpdate=!1),F.isSpriteMaterial&&kt.setValue(O,"center",G.center),kt.setValue(O,"modelViewMatrix",G.modelViewMatrix),kt.setValue(O,"normalMatrix",G.normalMatrix),kt.setValue(O,"modelMatrix",G.matrixWorld),F.isShaderMaterial||F.isRawShaderMaterial){const qt=F.uniformsGroups;for(let rn=0,ji=qt.length;rn<ji;rn++){const Ai=qt[rn];Qe.update(Ai,yn),Qe.bind(Ai,yn)}}return yn}function Vs(P,V){P.ambientLightColor.needsUpdate=V,P.lightProbe.needsUpdate=V,P.directionalLights.needsUpdate=V,P.directionalLightShadows.needsUpdate=V,P.pointLights.needsUpdate=V,P.pointLightShadows.needsUpdate=V,P.spotLights.needsUpdate=V,P.spotLightShadows.needsUpdate=V,P.rectAreaLights.needsUpdate=V,P.hemisphereLights.needsUpdate=V}function qr(P){return P.isMeshLambertMaterial||P.isMeshToonMaterial||P.isMeshPhongMaterial||P.isMeshStandardMaterial||P.isShadowMaterial||P.isShaderMaterial&&P.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return L},this.setRenderTargetTextures=function(P,V,q){const F=Oe.get(P);F.__autoAllocateDepthBuffer=P.resolveDepthBuffer===!1,F.__autoAllocateDepthBuffer===!1&&(F.__useRenderToTexture=!1),Oe.get(P.texture).__webglTexture=V,Oe.get(P.depthTexture).__webglTexture=F.__autoAllocateDepthBuffer?void 0:q,F.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(P,V){const q=Oe.get(P);q.__webglFramebuffer=V,q.__useDefaultFramebuffer=V===void 0};const mc=O.createFramebuffer();this.setRenderTarget=function(P,V=0,q=0){L=P,C=V,w=q;let F=!0,G=null,le=!1,be=!1;if(P){const we=Oe.get(P);if(we.__useDefaultFramebuffer!==void 0)Ne.bindFramebuffer(O.FRAMEBUFFER,null),F=!1;else if(we.__webglFramebuffer===void 0)nt.setupRenderTarget(P);else if(we.__hasExternalTextures)nt.rebindTextures(P,Oe.get(P.texture).__webglTexture,Oe.get(P.depthTexture).__webglTexture);else if(P.depthBuffer){const Ge=P.depthTexture;if(we.__boundDepthTexture!==Ge){if(Ge!==null&&Oe.has(Ge)&&(P.width!==Ge.image.width||P.height!==Ge.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");nt.setupDepthRenderbuffer(P)}}const Re=P.texture;(Re.isData3DTexture||Re.isDataArrayTexture||Re.isCompressedArrayTexture)&&(be=!0);const Ie=Oe.get(P).__webglFramebuffer;P.isWebGLCubeRenderTarget?(Array.isArray(Ie[V])?G=Ie[V][q]:G=Ie[V],le=!0):P.samples>0&&nt.useMultisampledRTT(P)===!1?G=Oe.get(P).__webglMultisampledFramebuffer:Array.isArray(Ie)?G=Ie[q]:G=Ie,I.copy(P.viewport),k.copy(P.scissor),z=P.scissorTest}else I.copy(De).multiplyScalar(K).floor(),k.copy(Je).multiplyScalar(K).floor(),z=mt;if(q!==0&&(G=mc),Ne.bindFramebuffer(O.FRAMEBUFFER,G)&&F&&Ne.drawBuffers(P,G),Ne.viewport(I),Ne.scissor(k),Ne.setScissorTest(z),le){const we=Oe.get(P.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+V,we.__webglTexture,q)}else if(be){const we=V;for(let Re=0;Re<P.textures.length;Re++){const Ie=Oe.get(P.textures[Re]);O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0+Re,Ie.__webglTexture,q,we)}}else if(P!==null&&q!==0){const we=Oe.get(P.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,we.__webglTexture,q)}S=-1},this.readRenderTargetPixels=function(P,V,q,F,G,le,be,Le=0){if(!(P&&P.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let we=Oe.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&be!==void 0&&(we=we[be]),we){Ne.bindFramebuffer(O.FRAMEBUFFER,we);try{const Re=P.textures[Le],Ie=Re.format,Ge=Re.type;if(!qe.textureFormatReadable(Ie)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!qe.textureTypeReadable(Ge)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}V>=0&&V<=P.width-F&&q>=0&&q<=P.height-G&&(P.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+Le),O.readPixels(V,q,F,G,Be.convert(Ie),Be.convert(Ge),le))}finally{const Re=L!==null?Oe.get(L).__webglFramebuffer:null;Ne.bindFramebuffer(O.FRAMEBUFFER,Re)}}},this.readRenderTargetPixelsAsync=async function(P,V,q,F,G,le,be,Le=0){if(!(P&&P.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let we=Oe.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&be!==void 0&&(we=we[be]),we)if(V>=0&&V<=P.width-F&&q>=0&&q<=P.height-G){Ne.bindFramebuffer(O.FRAMEBUFFER,we);const Re=P.textures[Le],Ie=Re.format,Ge=Re.type;if(!qe.textureFormatReadable(Ie))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!qe.textureTypeReadable(Ge))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ct=O.createBuffer();O.bindBuffer(O.PIXEL_PACK_BUFFER,ct),O.bufferData(O.PIXEL_PACK_BUFFER,le.byteLength,O.STREAM_READ),P.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+Le),O.readPixels(V,q,F,G,Be.convert(Ie),Be.convert(Ge),0);const bt=L!==null?Oe.get(L).__webglFramebuffer:null;Ne.bindFramebuffer(O.FRAMEBUFFER,bt);const Vt=O.fenceSync(O.SYNC_GPU_COMMANDS_COMPLETE,0);return O.flush(),await Ym(O,Vt,4),O.bindBuffer(O.PIXEL_PACK_BUFFER,ct),O.getBufferSubData(O.PIXEL_PACK_BUFFER,0,le),O.deleteBuffer(ct),O.deleteSync(Vt),le}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(P,V=null,q=0){const F=Math.pow(2,-q),G=Math.floor(P.image.width*F),le=Math.floor(P.image.height*F),be=V!==null?V.x:0,Le=V!==null?V.y:0;nt.setTexture2D(P,0),O.copyTexSubImage2D(O.TEXTURE_2D,q,0,0,be,Le,G,le),Ne.unbindTexture()};const gc=O.createFramebuffer(),Ht=O.createFramebuffer();this.copyTextureToTexture=function(P,V,q=null,F=null,G=0,le=null){le===null&&(G!==0?(Eo("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),le=G,G=0):le=0);let be,Le,we,Re,Ie,Ge,ct,bt,Vt;const Dt=P.isCompressedTexture?P.mipmaps[le]:P.image;if(q!==null)be=q.max.x-q.min.x,Le=q.max.y-q.min.y,we=q.isBox3?q.max.z-q.min.z:1,Re=q.min.x,Ie=q.min.y,Ge=q.isBox3?q.min.z:0;else{const pn=Math.pow(2,-G);be=Math.floor(Dt.width*pn),Le=Math.floor(Dt.height*pn),P.isDataArrayTexture?we=Dt.depth:P.isData3DTexture?we=Math.floor(Dt.depth*pn):we=1,Re=0,Ie=0,Ge=0}F!==null?(ct=F.x,bt=F.y,Vt=F.z):(ct=0,bt=0,Vt=0);const Tt=Be.convert(V.format),We=Be.convert(V.type);let Ot;V.isData3DTexture?(nt.setTexture3D(V,0),Ot=O.TEXTURE_3D):V.isDataArrayTexture||V.isCompressedArrayTexture?(nt.setTexture2DArray(V,0),Ot=O.TEXTURE_2D_ARRAY):(nt.setTexture2D(V,0),Ot=O.TEXTURE_2D),O.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,V.flipY),O.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),O.pixelStorei(O.UNPACK_ALIGNMENT,V.unpackAlignment);const gt=O.getParameter(O.UNPACK_ROW_LENGTH),yn=O.getParameter(O.UNPACK_IMAGE_HEIGHT),wi=O.getParameter(O.UNPACK_SKIP_PIXELS),Mn=O.getParameter(O.UNPACK_SKIP_ROWS),ds=O.getParameter(O.UNPACK_SKIP_IMAGES);O.pixelStorei(O.UNPACK_ROW_LENGTH,Dt.width),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,Dt.height),O.pixelStorei(O.UNPACK_SKIP_PIXELS,Re),O.pixelStorei(O.UNPACK_SKIP_ROWS,Ie),O.pixelStorei(O.UNPACK_SKIP_IMAGES,Ge);const kt=P.isDataArrayTexture||P.isData3DTexture,Rn=V.isDataArrayTexture||V.isData3DTexture;if(P.isDepthTexture){const pn=Oe.get(P),qt=Oe.get(V),rn=Oe.get(pn.__renderTarget),ji=Oe.get(qt.__renderTarget);Ne.bindFramebuffer(O.READ_FRAMEBUFFER,rn.__webglFramebuffer),Ne.bindFramebuffer(O.DRAW_FRAMEBUFFER,ji.__webglFramebuffer);for(let Ai=0;Ai<we;Ai++)kt&&(O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Oe.get(P).__webglTexture,G,Ge+Ai),O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Oe.get(V).__webglTexture,le,Vt+Ai)),O.blitFramebuffer(Re,Ie,be,Le,ct,bt,be,Le,O.DEPTH_BUFFER_BIT,O.NEAREST);Ne.bindFramebuffer(O.READ_FRAMEBUFFER,null),Ne.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else if(G!==0||P.isRenderTargetTexture||Oe.has(P)){const pn=Oe.get(P),qt=Oe.get(V);Ne.bindFramebuffer(O.READ_FRAMEBUFFER,gc),Ne.bindFramebuffer(O.DRAW_FRAMEBUFFER,Ht);for(let rn=0;rn<we;rn++)kt?O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,pn.__webglTexture,G,Ge+rn):O.framebufferTexture2D(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,pn.__webglTexture,G),Rn?O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,qt.__webglTexture,le,Vt+rn):O.framebufferTexture2D(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,qt.__webglTexture,le),G!==0?O.blitFramebuffer(Re,Ie,be,Le,ct,bt,be,Le,O.COLOR_BUFFER_BIT,O.NEAREST):Rn?O.copyTexSubImage3D(Ot,le,ct,bt,Vt+rn,Re,Ie,be,Le):O.copyTexSubImage2D(Ot,le,ct,bt,Re,Ie,be,Le);Ne.bindFramebuffer(O.READ_FRAMEBUFFER,null),Ne.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else Rn?P.isDataTexture||P.isData3DTexture?O.texSubImage3D(Ot,le,ct,bt,Vt,be,Le,we,Tt,We,Dt.data):V.isCompressedArrayTexture?O.compressedTexSubImage3D(Ot,le,ct,bt,Vt,be,Le,we,Tt,Dt.data):O.texSubImage3D(Ot,le,ct,bt,Vt,be,Le,we,Tt,We,Dt):P.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,le,ct,bt,be,Le,Tt,We,Dt.data):P.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,le,ct,bt,Dt.width,Dt.height,Tt,Dt.data):O.texSubImage2D(O.TEXTURE_2D,le,ct,bt,be,Le,Tt,We,Dt);O.pixelStorei(O.UNPACK_ROW_LENGTH,gt),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,yn),O.pixelStorei(O.UNPACK_SKIP_PIXELS,wi),O.pixelStorei(O.UNPACK_SKIP_ROWS,Mn),O.pixelStorei(O.UNPACK_SKIP_IMAGES,ds),le===0&&V.generateMipmaps&&O.generateMipmap(Ot),Ne.unbindTexture()},this.initRenderTarget=function(P){Oe.get(P).__webglFramebuffer===void 0&&nt.setupRenderTarget(P)},this.initTexture=function(P){P.isCubeTexture?nt.setTextureCube(P,0):P.isData3DTexture?nt.setTexture3D(P,0):P.isDataArrayTexture||P.isCompressedArrayTexture?nt.setTexture2DArray(P,0):nt.setTexture2D(P,0),Ne.unbindTexture()},this.resetState=function(){C=0,w=0,L=null,Ne.reset(),Me.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return mi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=pt._getDrawingBufferColorSpace(e),t.unpackColorSpace=pt._getUnpackColorSpace()}}const go=4,ka=4,Ba=["walk","attack","hurt","death"],Ps=32,za=Ba.length*ka,oM={body:"#3a4157",light:"#596078",dark:"#25283a",accent:"#a63d50",skin:"#e4b18b",hood:"#282638",eye:"#ff4d4d",boot:"#171923",metal:"#c19a55"};function aM(i,e,t,n){const{kind:s="humanoid",palette:r={},direction:o=0,frame:a=0,state:c="walk",boss:l=!1,variant:h=""}=n,u={...oM,...r},d=o===1||o===3,f=o===3,g=c==="death"?a*2:0,y=c==="walk"?a===1?-1:a===3?1:0:0,m=c==="walk"&&(a===1||a===3)?-1:0,p=c==="attack";i.save(),i.translate(e+(f?Ps:0),t),f&&i.scale(-1,1),i.beginPath(),i.rect(0,0,Ps,Ps),i.clip(),i.globalAlpha=c==="death"?Math.max(.2,1-a*.26):1;const x=(b,M,R,C,w)=>{i.fillStyle=w,i.fillRect(b,M+m+g,R,Math.max(1,C-g))};if(s==="humanoid")x(9,14,14,11,u.body),x(11,15,10,8,u.light),x(13,17,6,6,u.accent),x(9,25,5,5,u.dark),x(18,25,5,5,u.dark),x(9+y,29,6,2,u.boot),x(18-y,29,6,2,u.boot),x(7,16,4,8,u.body),x(21,16,4,8,u.body),x(7,22,4,3,u.skin),x(21,22,4,3,u.skin),x(10,4,12,4,u.hood),x(8,7,16,8,u.hood),x(10,9,12,6,u.skin),x(7,7,5,5,u.dark),x(20,7,5,5,u.dark),o===0?(x(11,11,3,2,u.eye),x(18,11,3,2,u.eye),x(14,14,4,1,u.dark)):d?(x(18,11,3,2,u.eye),x(23,12,1,3,u.skin)):x(10,9,12,7,u.hood),l&&(x(13,0,3,4,u.accent),x(16,1,3,5,u.accent),x(19,0,3,4,u.accent),x(16,3,2,2,u.eye)),h==="sage"&&x(12,2,8,3,u.accent),h==="smith"&&(x(10,18,12,7,"#6d4a2f"),x(23,14,2,12,"#8a8f99")),h==="merchant"&&(x(7,17,4,9,"#3e6c60"),x(21,17,4,9,"#3e6c60")),p&&(x(d?23:6,15,9,3,u.metal),x(d?29:4,14,2,5,u.light));else if(s==="wraith")x(9,8,14,14,u.body),x(11,9,10,11,u.light),x(8,6,16,5,u.hood),x(10,4,12,3,u.dark),x(9,21,4,a%2?4:6,u.body),x(14,21,4,a%2?6:4,u.dark),x(19,21,4,a%2?5:7,u.body),o===0?(x(12,12,3,2,u.eye),x(18,12,3,2,u.eye)):d?x(18,12,3,2,u.eye):x(10,9,12,6,u.hood),l&&(x(13,1,3,4,u.accent),x(16,0,3,5,u.accent),x(19,1,3,4,u.accent),x(16,3,2,2,u.eye)),p&&x(d?22:4,14,8,3,u.eye);else if(s==="brute")x(7,13,18,14,u.body),x(10,15,12,10,u.light),x(9,16,4,3,u.accent),x(19,20,4,3,u.accent),x(9,26,5,4,u.dark),x(18,26,5,4,u.dark),x(5,16,5,9,u.body),x(22,16,5,9,u.body),x(11,7,10,6,u.dark),x(12,9,8,3,u.light),o===0?(x(13,10,2,2,u.eye),x(18,10,2,2,u.eye)):d&&x(18,10,3,2,u.eye),p&&x(d?24:3,15,8,5,u.light);else{const b=s==="deer";x(6,16,18,8,u.body),x(9,18,11,4,u.light),x(9,24,3,6,u.dark),x(18,24,3,6,u.dark),x(9+y,29,4,2,u.boot),x(18-y,29,4,2,u.boot),d||o===0?(x(20,11,8,8,u.body),x(21,13,6,4,u.light),x(19,10,3,3,u.dark),x(25,10,3,3,u.dark),x(24,14,2,2,u.eye),x(27,16,4,2,u.dark),b&&(x(21,5,2,6,u.accent),x(23,4,2,7,u.accent),x(26,5,2,6,u.accent),x(28,4,2,7,u.accent))):(x(11,11,10,9,u.body),x(13,14,6,4,u.light),x(11,10,3,4,u.dark),x(18,10,3,4,u.dark),x(13,15,2,2,u.eye),x(18,15,2,2,u.eye),b&&(x(12,5,2,6,u.accent),x(18,5,2,6,u.accent))),o===2&&x(3,15,4,4,u.dark),p&&x(d?24:9,18,7,3,u.boot)}c==="hurt"&&(i.fillStyle="rgba(255, 220, 220, 0.55)",i.fillRect(5,5,22,25)),i.restore()}function np(i){const e=document.createElement("canvas");e.width=Ps*go,e.height=Ps*za;const t=e.getContext("2d");for(let s=0;s<Ba.length;s++)for(let r=0;r<ka;r++)for(let o=0;o<go;o++)aM(t,o*Ps,(s*ka+r)*Ps,{...i,direction:r,frame:o,state:Ba[s]});const n=new kr(e);return n.magFilter=Qt,n.minFilter=Qt,n.generateMipmaps=!1,n.colorSpace=Yt,n.repeat.set(1/go,1/za),n}function ip(i,e=1.55,t=2.05){const n=i.clone();n.needsUpdate=!0;const s=new Lr(new Ns({map:n,transparent:!0,alphaTest:.05,depthWrite:!1}));return s.scale.set(e,t,1),s.position.y=t/2,s}function sp(i,e=0){const t=Math.atan2(Math.sin(i-e),Math.cos(i-e));return t>Math.PI/4&&t<Math.PI*3/4?1:t>-Math.PI*3/4&&t<-Math.PI/4?3:Math.abs(t)>=Math.PI*3/4?2:0}function Fu(i,e,t,n="walk"){const s=Ba.indexOf(n)*ka+e;i.material.map.offset.set(t/go,(za-1-s)/za)}function eu(i,e,t,n){if(!i.sprite)return;i.animTime=(i.animTime||0)+e,i.hurtTimer=Math.max(0,(i.hurtTimer||0)-e),i.attackTimer=Math.max(0,(i.attackTimer||0)-e);let s="walk";i.deathTimer>0?s="death":i.hurtTimer>0?s="hurt":i.attackTimer>0&&(s="attack");const r=sp(n,t);i.directionRow=r;const o=s==="death"?10:s==="hurt"?14:s==="attack"?12:i.moving?8:0,c=s!=="walk"||i.moving?Math.floor(i.animTime*o)%go:0;if(Fu(i.sprite,r,c,s),s==="death"){const l=i.deathDuration||.55;i.sprite.material.opacity=Math.max(0,i.deathTimer/l)}else i.sprite.material.opacity=1;i.hurtTimer>0?i.sprite.material.color.setRGB(1,.55,.55):i.sprite.material.color.setHex(i.baseTint||16777215)}const gr={minX:-320,maxX:320,minZ:-320,maxZ:320},Ou=[{id:"wasteland",name:"ทุ่งรกร้างโบราณ",center:{x:0,z:0},radius:96,color:"#c9a86a",description:"ซากปราสาท หลุมศพ และแม่น้ำลาวาที่ไหลผ่านใจกลางดินแดน"},{id:"ravenhold",name:"ราเวนโฮลด์",center:{x:-45,z:-45},radius:72,color:"#d8b878",description:"หมู่บ้านค้าขายเก่าแก่ที่มองลงไปยังหุบเขาเถ้าถ่าน"},{id:"deadwood",name:"ป่าแห้งตาย",center:{x:-165,z:-155},radius:110,color:"#7aa6f0",description:"ป่าต้นไม้ตาย วงหินโบราณ และซากอารามที่ถูกลืม"},{id:"varnhal",name:"นครวาร์นฮัล",center:{x:160,z:50},radius:108,color:"#e2b45c",description:"เมืองหลวงอันยิ่งใหญ่ มีตลาด ร้านตีเหล็ก และหน้าต่างที่ส่องสว่างในยามค่ำคืน"},{id:"emberpeak",name:"ภูเขาไฟเอ็มเบอร์พีค",center:{x:160,z:-177},radius:112,color:"#ff7a4d",description:"ยอดเขาแหลมคม ถ้ำถ่านไฟ และทะเลลาวาที่พุ่งขึ้นจากเดือด"},{id:"mirefall",name:"ทะเลสาบมิเรฟอลล์",center:{x:-170,z:160},radius:112,color:"#7fd4e8",description:"ทะเลสาบต้องสาป หมู่บ้านหนองน้ำ และถ้ำใต้รากหิน"}],cM=[{id:"castle",name:"ซากปราสาท",position:{x:9,z:-8},region:"wasteland",color:"#d8a86a",size:5},{id:"graveyard",name:"สุสานเงียบ",position:{x:-12,z:11},region:"wasteland",color:"#9d9fb4",size:3.5},{id:"bridge",name:"สะพานข้ามลาวา",position:{x:-5,z:2},region:"wasteland",color:"#ff8a4d",size:3},{id:"ravenhold",name:"หมู่บ้านราเวนโฮลด์",position:{x:-45,z:-45},region:"ravenhold",color:"#d8b878",size:5},{id:"ashford",name:"เมืองแอชฟอร์ด",position:{x:45,z:-50},region:"wasteland",color:"#c9a86a",size:4.5},{id:"grimmoor",name:"เมืองกริมมัวร์",position:{x:55,z:0},region:"wasteland",color:"#c9a86a",size:4.5},{id:"duskvale",name:"เมืองดัสก์เวล",position:{x:42,z:50},region:"wasteland",color:"#c9a86a",size:4.5},{id:"blackmere",name:"เมืองแบล็กเมียร์",position:{x:-48,z:42},region:"mirefall",color:"#9fb0c8",size:4.5},{id:"varnhal",name:"นครวาร์นฮัล",position:{x:160,z:50},region:"varnhal",color:"#e2b45c",size:7},{id:"thornwick",name:"หมู่บ้านธอร์นวิก",position:{x:-150,z:-40},region:"ravenhold",color:"#d8b878",size:4},{id:"wolfden",name:"หมู่บ้านวูล์ฟเดน",position:{x:50,z:-200},region:"emberpeak",color:"#c9a86a",size:4},{id:"mirefall-village",name:"หมู่บ้านมิเรฟอลล์",position:{x:-50,z:205},region:"mirefall",color:"#7fd4e8",size:4},{id:"stone-circle",name:"วงหินโบราณ",position:{x:-70,z:-140},region:"deadwood",color:"#c992f0",size:5},{id:"abbey",name:"ซากอาราม",position:{x:-130,z:120},region:"mirefall",color:"#9d9fb4",size:4},{id:"giant-bones",name:"ซากกระดูกยักษ์",position:{x:83,z:158},region:"varnhal",color:"#d9d3c2",size:4},{id:"volcano",name:"ปล่องภูเขาไฟ",position:{x:159,z:-177},region:"emberpeak",color:"#ff5b3d",size:7},{id:"cursed-lake",name:"ทะเลสาบต้องสาป",position:{x:-170,z:160},region:"mirefall",color:"#7fd4e8",size:6},{id:"dead-forest",name:"ป่าแห้งตาย",position:{x:-165,z:-155},region:"deadwood",color:"#7aa6f0",size:6},{id:"cave-shadow",name:"ถ้ำเงาลืมเลือน",position:{x:95,z:-120},region:"emberpeak",color:"#c992f0",size:4},{id:"cave-root",name:"ถ้ำรากหิน",position:{x:-110,z:-190},region:"deadwood",color:"#c992f0",size:4},{id:"cave-mire",name:"ถ้ำใต้ก้นบึง",position:{x:-205,z:195},region:"mirefall",color:"#c992f0",size:4},{id:"cave-ember",name:"ถ้ำถ่านไฟ",position:{x:205,z:-205},region:"emberpeak",color:"#ff8a4d",size:4}],lM=[{id:"s-castle",name:"หีบใต้ฐานปราสาท",kind:"cache",position:{x:4,z:-18},region:"wasteland",loot:{crystals:2,gold:45,xp:30,items:{bone:2}}},{id:"s-grave",name:"พอกศพถูกลืม",kind:"cache",position:{x:-18,z:16},region:"wasteland",loot:{gold:60,xp:35,items:{darkShard:1}}},{id:"s-bridge",name:"ของขวัญคนข้ามสะพาน",kind:"cache",position:{x:-9,z:-7},region:"wasteland",loot:{crystals:1,potions:1,xp:20}},{id:"s-raven",name:"คลังลับราเวนโฮลด์",kind:"cache",position:{x:-58,z:-56},region:"ravenhold",loot:{crystals:3,gold:90,xp:60,items:{ore:2}}},{id:"s-thorn",name:"ซองจดหมายธอร์นวิก",kind:"cache",position:{x:-162,z:-50},region:"ravenhold",loot:{gold:75,xp:45,items:{herb:3}}},{id:"s-ashen",name:"เตาลับแอชฟอร์ด",kind:"cache",position:{x:52,z:-60},region:"ravenhold",loot:{crystals:2,gold:80,items:{ore:3}}},{id:"s-circle",name:"แท่นบูชาวงหิน",kind:"ruin",position:{x:-70,z:-148},region:"deadwood",loot:{crystals:4,xp:90,items:{darkShard:2,essence:1}}},{id:"s-bones",name:"กระดูกยักษ์แตกสลาย",kind:"cache",position:{x:83,z:168},region:"varnhal",loot:{gold:120,xp:70,items:{bone:4}}},{id:"s-abbey",name:"หีบศักดิ์สิทธิ์อาราม",kind:"ruin",position:{x:-138,z:128},region:"mirefall",loot:{crystals:3,potions:2,xp:80,items:{herb:4}}},{id:"s-varnhal",name:"คลังใต้พระราชวัง",kind:"cache",position:{x:172,z:62},region:"varnhal",loot:{crystals:5,gold:200,xp:120,items:{bossRelic:1}}},{id:"s-market",name:"ตู้เงินตลาดวาร์นฮัล",kind:"cache",position:{x:136,z:80},region:"varnhal",loot:{gold:160,xp:60,items:{stoneHeart:1}}},{id:"s-volcano",name:"แก่นไฟภูเขา",kind:"ruin",position:{x:168,z:-188},region:"emberpeak",loot:{crystals:4,gold:140,xp:110,items:{stoneHeart:2,darkShard:2}}},{id:"s-wolfden",name:"ถุงของพรานวูล์ฟเดน",kind:"cache",position:{x:58,z:-208},region:"emberpeak",loot:{gold:100,xp:55,items:{bone:3}}},{id:"s-lake",name:"หีบใต้ทะเลสาบ",kind:"cache",position:{x:-182,z:170},region:"mirefall",loot:{crystals:4,potions:2,xp:90,items:{essence:2}}},{id:"c-shadow",name:"ถ้ำเงาลืมเลือน",kind:"cave",position:{x:95,z:-120},region:"emberpeak",loot:{crystals:5,gold:180,xp:130,items:{bossRelic:1,darkShard:3}}},{id:"c-root",name:"ถ้ำรากหิน",kind:"cave",position:{x:-110,z:-190},region:"deadwood",loot:{crystals:5,potions:2,xp:140,items:{essence:3,wood:3}}},{id:"c-mire",name:"ถ้ำใต้ก้นบึง",kind:"cave",position:{x:-205,z:195},region:"mirefall",loot:{crystals:6,gold:220,xp:160,items:{essence:4,stoneHeart:2}}},{id:"c-ember",name:"ถ้ำถ่านไฟ",kind:"cave",position:{x:205,z:-205},region:"emberpeak",loot:{crystals:6,gold:240,xp:180,items:{stoneHeart:4,darkShard:4}}}];function rp(i,e){let t=null,n=1/0;for(const s of Ou){const r=i-s.center.x,o=e-s.center.z,a=r*r+o*o;a<=s.radius*s.radius&&a<n&&(t=s,n=a)}return t}const Fi={common:{name:"ธรรมดา",color:"#c9c9c9"},uncommon:{name:"หายาก",color:"#7fd47f"},rare:{name:"หายากมาก",color:"#7aa6f0"},epic:{name:"ตำนาน",color:"#c992f0"}},Jt={herb:{name:"สมุนไพร",color:6927723},ore:{name:"แร่เหล็ก",color:10200756},wood:{name:"ไม้โบราณ",color:9133628},bone:{name:"กระดูกผู้พิทักษ์",color:14275522},meat:{name:"เนื้อสด",color:12870490},darkShard:{name:"เศษเงามืด",color:10253012},essence:{name:"แก่นวิญญาณ",color:7653846},stoneHeart:{name:"หัวใจศิลา",color:13798236},bossRelic:{name:"เศษชิ้นส่วนโบราณ",color:14857308}},Ud=[{id:"potion",name:"ยาฟื้นฟู",cost:{herb:3},give:{potions:1},repeatable:!0},{id:"greatsword",name:"ดาบใหญ่",cost:{ore:3,bone:2},give:{item:"greatsword"}},{id:"staff",name:"คทาเวท",cost:{wood:2,darkShard:2},give:{item:"staff"}},{id:"axe",name:"ขวาน",cost:{ore:2,wood:2},give:{item:"axe"}},{id:"bow",name:"ธนูพรานป่า",cost:{wood:3,bone:2},give:{item:"bow"}},{id:"froststaff",name:"คทาเหมันต์",cost:{wood:2,essence:2,darkShard:2},give:{item:"froststaff"},rarity:"rare"},{id:"iron",name:"เกราะเหล็ก",cost:{ore:4,bone:1},give:{item:"iron"}},{id:"ranger",name:"เกราะพราน",cost:{wood:2,bone:2},give:{item:"ranger"}},{id:"shadow",name:"เกราะเงา",cost:{darkShard:3,wood:2},give:{item:"shadow"}},{id:"runerobe",name:"ผ้าคลุมรูน",cost:{essence:3,darkShard:2},give:{item:"runerobe"},rarity:"rare"},{id:"spellFire",name:"เวทลูกไฟ",cost:{darkShard:2,bone:1},give:{spell:"firebolt"}},{id:"spellHeal",name:"เวทรักษา",cost:{herb:4,bone:1},give:{spell:"heal"}},{id:"voidblade",name:"ดาบเงาว่าง",cost:{bossRelic:1,stoneHeart:2,darkShard:4},give:{item:"voidblade"},rarity:"epic"},{id:"dragonplate",name:"เกราะมังกรร้าง",cost:{bossRelic:1,stoneHeart:3,ore:5},give:{item:"dragonplate"},rarity:"epic"}],xs={firebolt:{name:"ลูกไฟ",cost:15,power:4,range:12},heal:{name:"การรักษา",cost:25,power:35,range:0}},xa=[{id:"potion",name:"ยาฟื้นฟู",price:25},{id:"herb",name:"สมุนไพร",price:12},{id:"wood",name:"ไม้โบราณ",price:20},{id:"ore",name:"แร่เหล็ก",price:40},{id:"bone",name:"กระดูกผู้พิทักษ์",price:28},{id:"meat",name:"เนื้อสด",price:16},{id:"darkShard",name:"เศษเงามืด",price:60},{id:"essence",name:"แก่นวิญญาณ",price:55},{id:"stoneHeart",name:"หัวใจศิลา",price:90},{id:"axe",name:"ขวาน",price:150},{id:"bow",name:"ธนูพรานป่า",price:170},{id:"staff",name:"คทาเวท",price:220,rarity:"uncommon"},{id:"froststaff",name:"คทาเหมันต์",price:420,rarity:"rare"},{id:"iron",name:"เกราะเหล็ก",price:180},{id:"ranger",name:"เกราะพราน",price:210,rarity:"uncommon"},{id:"shadow",name:"เกราะเงา",price:320,rarity:"rare"},{id:"runerobe",name:"ผ้าคลุมรูน",price:360,rarity:"rare"},{id:"voidblade",name:"ดาบเงาว่าง",price:900,rarity:"epic"},{id:"dragonplate",name:"เกราะมังกรร้าง",price:1e3,rarity:"epic"}],As={herb:{title:"สมุนไพรเพื่อชีวิต",desc:"เก็บสมุนไพร 5 ชิ้นให้นักพรต",target:5,reward:{potions:2,xp:50}},hunt:{title:"ล่าผู้พิทักษ์",desc:"กำจัดผู้พิทักษ์ 3 ตัว",target:3,reward:{ore:3,xp:100}}},Fd=5,uM=[null,{gold:90,ore:2,crystals:1},{gold:180,ore:3,crystals:2},{gold:320,ore:4,crystals:3},{gold:520,ore:5,crystals:5},{gold:800,ore:7,crystals:8}],Od=[{type:"guardian",name:"ล่าผู้พิทักษ์ซากโบราณ",items:["bone","ore"]},{type:"wraith",name:"ขับไล่ผีร้าย",items:["essence","darkShard"]},{type:"brute",name:"ปราบยักษ์หิน",items:["stoneHeart","ore"]},{type:"wolf",name:"กำจัดหมาป่ามืด",items:["meat","bone"]}],kd=60,Bd={guardian:[{id:"bone",chance:1,min:1,max:2},{id:"darkShard",chance:.45,min:1,max:1}],wraith:[{id:"essence",chance:.85,min:1,max:2},{id:"darkShard",chance:.3,min:1,max:1}],brute:[{id:"stoneHeart",chance:1,min:1,max:1},{id:"ore",chance:.7,min:1,max:2}],boss:[{id:"bossRelic",chance:1,min:1,max:2},{id:"stoneHeart",chance:1,min:2,max:3},{id:"darkShard",chance:1,min:3,max:5}],dungeonBoss:[{id:"bossRelic",chance:1,min:2,max:3},{id:"essence",chance:1,min:3,max:5},{id:"darkShard",chance:1,min:4,max:6}],wolf:[{id:"meat",chance:1,min:1,max:2},{id:"bone",chance:.9,min:1,max:2},{id:"darkShard",chance:.25,min:1,max:1}],deer:[{id:"meat",chance:.8,min:1,max:2},{id:"herb",chance:1,min:1,max:2},{id:"wood",chance:.6,min:1,max:1}]},hM={essence:"uncommon",stoneHeart:"rare",bossRelic:"epic",voidblade:"epic",dragonplate:"epic",staff:"uncommon",axe:"uncommon",bow:"uncommon",ranger:"uncommon",froststaff:"rare",runerobe:"rare",shadow:"rare"};function ya(i){return hM[i]||"common"}const ys={kingdom:{name:"ราชอาณาจักรราเวนฮอลด์",short:"ราชอาณาจักร",color:"#d8b878"},church:{name:"ศาสนจักรแห่งแสงจันทร์",short:"ศาสนจักร",color:"#cfc8a8"},merchants:{name:"สมาคมพ่อค้าเร่ร่อน",short:"พ่อค้า",color:"#d8a86a"},outcasts:{name:"กลุ่มผู้ถูกเนรเทศ",short:"ผู้ถูกเนรเทศ",color:"#9ad6c2"},ancient:{name:"องค์กรโบราณ",short:"องค์กรโบราณ",color:"#b58ce0"}},nl=[{min:40,label:"ผู้มีพระคุณ",tone:"ally"},{min:15,label:"มิตร",tone:"friend"},{min:5,label:"ไว้เนื้อเชื่อใจ",tone:"trust"},{min:-4,label:"เป็นกลาง",tone:"neutral"},{min:-19,label:"ระแวง",tone:"wary"},{min:-100,label:"เป็นศัตรู",tone:"enemy"}],ur=[{id:"camp",name:"ค่ายทุ่งรกร้าง",x:0,z:14,region:"wasteland"},{id:"ravenhold",name:"ราเวนโฮลด์",x:-45,z:-45,region:"ravenhold"},{id:"thornwick",name:"ธอร์นวิก",x:-150,z:-40,region:"ravenhold"},{id:"stonecircle",name:"วงหินโบราณ",x:-70,z:-140,region:"deadwood"},{id:"varnhal",name:"นครวาร์นฮัล",x:160,z:50,region:"varnhal"},{id:"embercamp",name:"เชิงเอ็มเบอร์พีค",x:150,z:-150,region:"emberpeak"},{id:"mirefall",name:"หมู่บ้านมิเรฟอลล์",x:-50,z:205,region:"mirefall"}],Ma=[{id:"sage",name:"นักพรตผู้ลืมเลือน",title:"ผู้เฝ้าศาลเจ้า · ศาสนจักร",faction:"church",position:[5.5,0,1],color:7636664,quest:"herb",schedule:[{from:0,to:.45,position:[5.5,0,1]},{from:.45,to:.75,position:[1.5,0,-43]},{from:.75,to:1,position:[5.5,0,1]}],greet:({tier:i})=>i==="enemy"?"เจ้ากล้าดีที่กลับมาที่ศาลนี้ ทั้งที่มือเปื้อนเลือด...":i==="wary"?"เจ้ายังไม่เป็นที่ไว้วางใจ แต่ศาลเจ้าไม่ปิดประตูต่อผู้ใด":"เจ้าเดินเข้ามาในดินแดนที่แม้แต่ความทรงจำยังลืมไปแล้ว...",lines:["เจ้าเดินเข้ามาในดินแดนที่แม้แต่ความทรงจำยังลืมไปแล้ว...","สมุนไพรในป่ายังมีชีวิต เก็บมาให้ข้า 5 ชิ้นเถิด ข้าจะตอบแทนด้วยยาฟื้นฟู","เมื่อฟ้าสาง ข้าจะไปยืนสวดที่ศาลเจ้า ตามหาข้าได้ที่นั่น"],topics:[{id:"forest",label:"เกิดอะไรขึ้นในป่าแห้งตาย?",keys:["ป่า","deadwood","แห้งตาย","เกิดอะไร"],reply:"เสียงกระซิบในป่าไม่ใช่ลม ตั้งแต่หอคอยร้างล่ม เงาบางอย่างก็เดินออกมาจากใต้ดิน ผู้พิทักษ์ที่เจ้าฆ่าได้นั้น... มันคือวิญญาณของคนที่เคยสวดที่นี่"},{id:"guardians",label:"ผู้พิทักษ์ซากโบราณคืออะไร?",keys:["ผู้พิทักษ์","ซาก","วิญญาณ","กระดูก"],reply:"เมื่อองค์กรโบราณผนึกประตู พวกเขาผูกวิญญาณผู้เฝ้าประตูไว้กับกระดูกของตัวเอง ผู้พิทักษ์จึงยังเฝ้าซากที่ไม่มีใครเหลืออยู่"},{id:"kingdom",label:"เล่าเรื่องอาณาจักรนี้ให้ฟังหน่อย",keys:["อาณาจักร","ราชา","ประวัติ","เล่า"],reply:"ราชอาณาจักรราเวนฮอลด์เคยแผ่จากปราสาทตรงนี้ไปถึงภูเขาไฟ แต่กษัตริย์องค์สุดท้ายห้ามกองทัพจุดไฟบนยอดเขา แล้ววาร์นฮัลก็ไม่ส่งทหารมาอีกเลย"},{id:"donate",label:"บริจาค 30 ทองเพื่อจุดตะเกียง",keys:["บริจาค","ตะเกียง","ทอง"],once:!1,effect:{gold:-30,rep:{church:6},toast:"ศาสนจักรจดจำความเอื้อเฟื้อนี้"},reply:"ขอบใจเจ้า แสงเดียวก็พอทำให้คนที่หลงทางมองเห็นศาลนี้"}],secretTopic:{id:"order",label:"ถามถึงแท่นบูชาใต้ศาล (ความลับ)",requiresRep:{faction:"church",min:12},effect:{rep:{ancient:4},flag:"secret-shrine"},reply:'ใต้แท่นบูชามีแผ่นศิลาจารึกขององค์กรโบราณ เจ้าอ่านมันได้... มันบอกว่าผู้พิทักษ์ไม่ได้ถูกผูกไว้กับประตู แต่ผูกไว้กับ "คำสัญญา"'}},{id:"smith",name:"ช่างตีเหล็กเร่ร่อน",title:"ช่างตีเหล็ก · สมาคมพ่อค้า",faction:"merchants",nameColor:"#d8a86a",position:[9,0,-44],color:11040842,quest:"hunt",schedule:[{from:0,to:.35,position:[9,0,-44]},{from:.35,to:.7,position:[15,0,-56]},{from:.7,to:1,position:[9,0,-44]}],greet:({tier:i})=>i==="enemy"?"เจ้ามีเรื่องอะไรกับข้า? ข้าไม่ยุ่งกับคนที่ราชอาณาจักรหมายหัว":"เฮ้ นักร่อนเร่! ช่วงนี้ป่า Blackwood ไม่ปลอดภัยเลย มีบางอย่างกำลังออกล่าในยามค่ำคืน",lines:["เฮ้ นักร่อนเร่! เหล็กและกระดูกที่เจ้าเก็บมาได้ ฉันเปลี่ยนเป็นอาวุธให้ได้","ฆ่าผู้พิทักษ์ซะ 3 ตัว แล้วเอาแร่มาให้ฉัน แล้วฉันจะสอนวิธีคราฟต์ให้","ตอนเย็นฉันย้ายเตาไปใกล้เหมืองแร่ อย่าลืมแวะไปหา"],topics:[{id:"blackwood",label:"เกิดอะไรขึ้นในป่า Blackwood?",keys:["blackwood","ป่า","อันตราย","คืน"],reply:"สามคืนแล้วที่มีคนได้ยินเสียงกระดูกเดิน ฉันไม่ใช่คนขี้ขลาด แต่เตาของฉันไม่เคยดับเลยตั้งแต่คืนนั้น ถ้าจะเข้าไป เอาไฟติดมือไปด้วย"},{id:"work",label:"มีภารกิจอะไรให้ทำบ้าง?",keys:["ภารกิจ","งาน","ช่วย","อะไรให้ทำ"],reply:"เก็บกระดูกผู้พิทักษ์มาให้ข้า แล้วข้าจะสอนตีเหล็กให้ ไม่ต้องกลัวเปื้อนเลือด ข้าก็เปื้อนทุกวัน"},{id:"weapons",label:"ขอดูอาวุธที่ขายหน่อย",keys:["อาวุธ","ขาย","ดาบ","ดูของ"],effect:{action:"openShop"},reply:"เข้ามาดูสิ เหล็กทุกชิ้นข้าตีเองกับมือ ไม่มีของปลอมจากตลาดล่าง"},{id:"guild",label:"ฝากเงิน 50 ทองกับสมาคมพ่อค้า",keys:["สมาคม","ฝาก","พ่อค้า","เงิน"],effect:{gold:-50,rep:{merchants:6},toast:"สมาคมพ่อค้าเปิดบัญชีให้เจ้าแล้ว"},reply:"ดี! สมาคมจำหน้าคนที่จ่ายตรงเวลา เจ้าจะได้ราคาที่ดีขึ้นในอีกไม่ช้า"}],secretTopic:{id:"cursedOre",label:"ถามเรื่องแร่ที่ติดคำสาป (ความลับ)",requiresRep:{faction:"merchants",min:10},effect:{rep:{ancient:4},flag:"secret-ore"},reply:'ในเหมืองใต้ป่ามีแร่ที่เคาะแล้วร้องไห้ องค์กรโบราณเรียกมันว่า "โลหะแห่งคำสัญญา" ข้าเคยขายไปชิ้นหนึ่ง... แล้วลูกค้าคนนั้นก็หายไป'}},{id:"merchant",name:"พ่อค้าในหมอก",title:"พ่อค้าเร่ร่อน · สมาคมพ่อค้า",faction:"merchants",nameColor:"#9ad6c2",position:[12,0,4],color:5083006,shop:!0,schedule:[{from:0,to:.4,position:[12,0,4]},{from:.4,to:.72,position:[18,0,-66]},{from:.72,to:1,position:[12,0,4]}],greet:({tier:i})=>i==="friend"||i==="ally"?"เจ้ามาอีกแล้วหรือ? ข้าวางของดีไว้ให้แล้ว ดูสิ ราคาเป็นมิตรกว่าคนอื่นแน่นอน":"ทองไม่มีวันเน่าในดินแดนนี้ ของวิญญาณนั่นต่างหากที่เน่าได้",lines:["ทองไม่มีวันเน่าในดินแดนนี้ ของวิญญาณนั่นต่างหากที่เน่าได้","ของข้าล้วนมาจากผู้ที่เดินทางไม่ถึงปลายทาง ซื้อไปเถิด อย่าถามที่มา","กด B เมื่อใดก็ได้เพื่อเปิดร้านของข้า แม้ข้าจะเดินทางไปยังแม่น้ำ"],topics:[{id:"prices",label:"ราคาของข้าจะถูกลงไหม?",keys:["ราคา","ลด","ถูก","ส่วนลด"],dynamic:"price",reply:"ยิ่งเจ้าช่วยเหลือสมาคมมากเท่าไร ราคาก็ยิ่งนุ่มนวลขึ้นเท่านั้น"},{id:"oldmap",label:"ซื้อแผนที่เก่า (120 ทอง)",keys:["แผนที่","map","ซื้อ","เก่า"],effect:{gold:-120,rep:{merchants:4},action:"buyMap",toast:"พ่อค้าคลี่แผนที่เก่าให้เจ้าดู"},reply:"แผนที่นี้ข้าซื้อมาจากคนที่กลับมาไม่ได้ มันยังบอกทางไปดินแดนที่เจ้ายังไม่เคยเหยียบ"},{id:"rumor",label:"มีข่าวลืออะไรในวาร์นฮัลบ้าง?",keys:["ข่าว","ลือ","วาร์นฮัล","เมือง"],reply:"ว่ากันว่ากองทหารวาร์นฮัลกำลังมองหาคนที่จุดไฟบนยอดเอ็มเบอร์พีค ใครจุดไฟ คนนั้นได้เป็นวีรบุรุษหรือเป็นเถ้าถ่าน"},{id:"smuggle",label:"รับของเถื่อนไปส่ง (ได้ 40 ทอง)",keys:["เถื่อน","ขนของ","ส่งของ"],effect:{gold:40,rep:{outcasts:6,kingdom:-4},toast:"กลุ่มผู้ถูกเนรเทศรู้จักชื่อเจ้าแล้ว"},reply:"ไม่ถามว่าในห่อคืออะไร ขอบใจ เอาไปส่งที่หมู่บ้านมิเรฟอลล์ ผู้ถูกเนรเทศที่นั่นจะจำน้ำใจเจ้า"}],secretTopic:{id:"realname",label:"ถามถึงชื่อจริงของเขา (ความลับ)",requiresRep:{faction:"merchants",min:14},effect:{rep:{ancient:4},flag:"secret-merchant"},reply:"ชื่อจริงข้า? ...ข้าเคยเป็นผู้เก็บกวาดซากขององค์กรโบราณ ก่อนจะพบว่าของที่พวกเขาฝังไว้ ขายได้ดีกว่าความภักดี"}},{id:"ravenkeeper",name:"นายกองราเวนโฮลด์",title:"นายกองรักษาเมือง · ราชอาณาจักร",faction:"kingdom",nameColor:"#d8b878",position:[-45,0,-45],color:9333322,schedule:[{from:0,to:1,position:[-45,0,-45]}],greet:({tier:i})=>i==="ally"||i==="friend"?"ผู้เดินทาง! ประตูราเวนโฮลด์เปิดให้เจ้าเสมอ ว่ามาสิ ต้องการให้ข้าช่วยอะไร":"ราเวนโฮลด์ยังอยู่ได้เพราะผู้เดินทางอย่างเจ้า",lines:["ราเวนโฮลด์ยังอยู่ได้เพราะผู้เดินทางอย่างเจ้า","ถัดไปทางตะวันตกคือป่าแห้งตาย อย่าเดินลึกเกินกว่าจะเห็นวงหิน"],topics:[{id:"ravenhold",label:"เล่าเรื่องราเวนโฮลด์ให้ฟังหน่อย",keys:["ราเวนโฮลด์","เมือง","บ้าน"],reply:"ราเวนโฮลด์เคยเป็นด่านหน้าของราชอาณาจักร ตอนนี้เหลือแค่ค่ายทหารกับคนที่ไม่มีที่ไป ข้ายังถือธงอยู่เพราะไม่มีใครบอกให้ปลด"},{id:"war",label:"ราชอาณาจักรกำลังทำสงครามหรือ?",keys:["สงคราม","ทหาร","ราฟ","ศัตรู"],reply:'วาร์นฮัลเรียกมันว่า "การรักษาความสงบ" กลุ่มผู้ถูกเนรเทศเรียกมันว่า "การล่า" ข้าเรียกมันว่าฤดูเก็บศพ'},{id:"oath",label:"สาบานตนรับใช้ราชอาณาจักร",keys:["สาบาน","รับใช้","เข้าร่วม"],effect:{rep:{kingdom:10,merchants:-2},flag:"oath-kingdom",toast:"เจ้ากลายเป็นพันธมิตรของราชอาณาจักร"},reply:"คุกเข่าลง. ...ลุกขึ้นเถิด ทหารของราฟ ข้ามอบตรานี้ให้เจ้า ใช้มันเข้าประตูวาร์นฮัลได้โดยไม่ถูกตรวจ"},{id:"deadwood",label:"วงหินโบราณคืออะไร?",keys:["วงหิน","deadwood","ป่า"],reply:"อย่าไปแตะหินพวกนั้น มันไม่ใช่หินบูชา มันคือหลักผนึก สิ่งที่อยู่ใต้มันยังหายใจอยู่"}],secretTopic:{id:"king",label:"ถามถึงกษัตริย์องค์สุดท้าย (ความลับ)",requiresRep:{faction:"kingdom",min:12},effect:{rep:{ancient:4},flag:"secret-king"},reply:"กษัตริย์องค์สุดท้ายไม่ได้สวรรคตบนเตียง พระองค์เสด็จลงไปใต้ปราสาทพร้อมองค์กรโบราณ แล้วประตูก็ปิดจากด้านใน"}},{id:"varnhalguard",name:"ทหารรักษาพระนคร",title:"ทหารวาร์นฮัล · ราชอาณาจักร",faction:"kingdom",nameColor:"#e2b45c",position:[160,0,50],color:8227750,schedule:[{from:0,to:1,position:[160,0,50]}],greet:({tier:i})=>i==="enemy"?"หยุด! เจ้าคือคนที่สมาคมพ่อค้าร้องเรียนเรื่องของเถื่อนใช่ไหม":"วาร์นฮัลไม่เคยหลับ แสงไฟในหน้าต่างคือสัญญาณว่ายังมีชีวิตอยู่",lines:["วาร์นฮัลไม่เคยหลับ แสงไฟในหน้าต่างคือสัญญาณว่ายังมีชีวิตอยู่","ระวังภูเขาไฟทางใต้ ไฟที่นั่นไม่เคยมอด"],topics:[{id:"city",label:"วาร์นฮัลมีอะไรให้สำรวจบ้าง?",keys:["วาร์นฮัล","ตลาด","เมือง","สำรวจ"],reply:"ตลาดกลางคึกคักทั้งวัน แต่ระวังกระเป๋า ยิ่งใกล้ตลาดล่าง ราคายิ่งถูก... และของก็ยิ่ง questionable"},{id:"volcano",label:"ภูเขาไฟเอ็มเบอร์พีคอันตรายแค่ไหน?",keys:["ภูเขา","ไฟ","emberpeak","ลาวา"],reply:"ห่างจากปากปล่องสามร้อยก้าว อากาศก็ร้อนจนเกราะบางๆ ของเจ้าละลายได้ อย่าเข้าไปโดยไม่มีหัวใจศิลา"},{id:"report",label:"แจ้งเบาะแสกลุ่มโจร (ได้ 30 ทอง)",keys:["โจร","เบาะแส","แจ้ง","รางวัล"],effect:{gold:30,rep:{kingdom:5},toast:"กองทหารจดบันทึกเบาะแสของเจ้า"},reply:"ดีมาก ข้าจะส่งคนไปตรวจ เอานี่ไปเป็นค่าเหนื่อย ราชอาณาจักรไม่ลืมคนที่ช่วยเหลือ"}],secretTopic:{id:"underpalace",label:"ถามเรื่องคลังใต้พระราชวัง (ความลับ)",requiresRep:{faction:"kingdom",min:12},effect:{rep:{ancient:4},flag:"secret-vault"},reply:'ใต้พระราชวังมีประตูที่ไม่มีลูกกุญแจ ทหารรุ่นก่อนบอกว่ามันเปิดด้วย "คำสัญญา" ไม่ใช่กุญแจ... ข้าไม่เคยกล้าลอง'}},{id:"mirefarmer",name:"ชาวประมงมิเรฟอลล์",title:"ชาวประมง · ผู้ถูกเนรเทศ",faction:"outcasts",nameColor:"#7fd4e8",position:[-50,0,205],color:6266270,schedule:[{from:0,to:1,position:[-50,0,205]}],greet:({tier:i})=>i==="enemy"?"กลับไปซะ ชาวบ้านที่นี่ไม่ต้อนรับคนของราชอาณาจักร":"ทะเลสาบนี้คืนสิ่งที่เราทิ้งไว้เสมอ แต่ไม่เคยคืนคน",lines:["ทะเลสาบนี้คืนสิ่งที่เราทิ้งไว้เสมอ แต่ไม่เคยคืนคน","หากเจ้าพบหีบใต้น้ำ อย่าเปิดตอนฝนตก"],topics:[{id:"lake",label:"ทะเลสาบนี้มีตำนานอะไร?",keys:["ทะเลสาบ","มิเรฟอลล์","น้ำ","ตำนาน"],reply:"ก่อนน้ำจะท่วม ที่นี่เคยเป็นอารามของศาสนจักร คนแก่บอกว่ากระดิ่งยังดังใต้น้ำทุกคืนพระจันทร์เต็มดวง"},{id:"drowned",label:"คนที่หายไปในทะเลสาบไปไหน?",keys:["จม","หาย","คน","วิญญาณ"],reply:"บางคนว่าพวกเขากลับมาดำรงอยู่ใต้ผืนน้ำ ไม่แก่ ไม่ตาย แต่ก็ไม่มีความสุข ฟังดูเหมือนคำสาปขององค์กรโบราณ"},{id:"boat",label:"ช่วยซ่อมเรือ 40 ทอง",keys:["เรือ","ซ่อม","ช่วย","ทอง"],effect:{gold:-40,rep:{outcasts:6},toast:"ชาวมิเรฟอลล์เริ่มไว้ใจเจ้า"},reply:"ขอบใจ ไม้ในหมู่บ้านนี้หายาก แต่เจ้ากลับเอาไม้มาซ่อมให้โดยไม่ขออะไร... ชาวบ้านจะจำเจ้า"},{id:"smuggler",label:"รู้จักพ่อค้าในหมอกไหม?",keys:["พ่อค้า","หมอก","สมาคม"],reply:"พ่อค้าในหมอก? เขาไม่เคยโกหกเรื่องสินค้า แต่ก็ไม่เคยบอกว่าของมาจากไหน ถ้าเขาส่งของมาให้เจ้า ก็อย่าเปิดห่อกลางน้ำ"}],secretTopic:{id:"abbey",label:"ถามเรื่องอารามที่จมอยู่ (ความลับ)",requiresRep:{faction:"outcasts",min:10},effect:{rep:{ancient:4},flag:"secret-abbey"},reply:'อารามที่จมนั้นไม่มีพระอยู่เลย มีแต่แผ่นศิลาที่จารชื่อกษัตริย์ทุกองค์ องค์กรโบราณจดชื่อทุกคนที่ "สัญญา" ไว้กับประตู... ชื่อสุดท้ายยังว่างอยู่'}}],dM={sage:{kind:"humanoid",variant:"sage",palette:{body:"#7486b8",light:"#97a7d2",dark:"#3e4a70",accent:"#9b3547",skin:"#d5a47e",hood:"#46527a",eye:"#e8e2c8",boot:"#25283a",metal:"#c19a55"}},smith:{kind:"humanoid",variant:"smith",palette:{body:"#a8784a",light:"#c99a68",dark:"#5c3d25",accent:"#6d4a2f",skin:"#c9936f",hood:"#7a5436",eye:"#2a2020",boot:"#33251c",metal:"#c8cbd0"}},merchant:{kind:"humanoid",variant:"merchant",palette:{body:"#4d8f7e",light:"#6fb5a2",dark:"#2c574d",accent:"#c9a86a",skin:"#d5a47e",hood:"#3e6c60",eye:"#243a38",boot:"#25283a",metal:"#d8b45c"}}},fM={herb:[[3,-4],[-5,-12],[6,-20],[-4,-28],[5,-36],[-6,-44],[4,-55],[-48,-42],[-62,-58],[-156,-148],[-182,-172],[-132,118],[-182,172],[-58,212],[136,74],[178,38],[46,-196]],ore:[[10,-40],[15,-52],[8,-58],[16,-62],[-38,-66],[52,-58],[146,60],[182,28],[152,-168],[198,-196],[-198,186],[-132,132],[-76,-152]],wood:[[-11,-8],[-13,-18],[12,-26],[-12,-34],[11,-48],[-58,-38],[-172,-160],[-146,-190],[-114,-176],[-132,128],[-188,148],[124,42],[142,78]],bone:[[-18,12],[80,165],[55,-205],[-14,15]],darkShard:[[-72,-147],[168,-188],[96,-120],[-160,-52]],essence:[[-180,168],[-135,125],[-108,-190],[-205,194]],stoneHeart:[[158,-178],[202,-203],[136,80],[-200,188]]};function pM(i){const{scene:e,player:t,state:n,toast:s,gainXp:r,updateHud:o,refreshEquipmentUI:a,defeatEnemy:c,enemies:l,staticLandmarks:h,regions:u,getTerrainHeight:d,audio:f,worldBounds:g=gr}=i;function y(_,T,v=0){if(typeof d!="function")return v;const D=d(_,T,v);return Number.isFinite(D)?D:v}const m=_=>document.querySelector(_),p=[],x=[],b=[],M=[],R=[],C=new Map;let w=null,L=!1,S=null;function E(){(!n.inventory||typeof n.inventory!="object")&&(n.inventory={sword:1,leather:1}),Number.isFinite(n.gold)||(n.gold=60),typeof n.mana!="number"&&(n.mana=100),typeof n.maxMana!="number"&&(n.maxMana=100),typeof n.maxHp!="number"&&(n.maxHp=100),(!n.skills||typeof n.skills!="object")&&(n.skills={might:0,vitality:0,arcana:0}),Array.isArray(n.spells)||(n.spells=[]),typeof n.activeSpell!="string"&&(n.activeSpell=null),(!n.quests||typeof n.quests!="object")&&(n.quests={}),Array.isArray(n.discoveredSecrets)||(n.discoveredSecrets=[]),typeof n.classId!="string"&&(n.classId=null),(!n.upgrades||typeof n.upgrades!="object")&&(n.upgrades={}),Array.isArray(n.bounties)||(n.bounties=[]),(!n.reputation||typeof n.reputation!="object")&&(n.reputation={});for(const _ of Object.keys(ys))n.reputation[_]=Pt.clamp(Math.round(Number(n.reputation[_])||0),-100,100);(!n.flags||typeof n.flags!="object")&&(n.flags={}),Array.isArray(n.waypoints)||(n.waypoints=[]),Array.isArray(n.explored)||(n.explored=[]),n.cartographer=Math.max(0,Math.round(Number(n.cartographer)||0))}function I(_){return Pt.clamp(Math.round(Number(n.reputation&&n.reputation[_])||0),-100,100)}function k(_=0){return nl.find(T=>_>=T.min)||nl[nl.length-1]}function z(){return Pt.clamp(-I("merchants")*.005,-.2,.2)}function Y(_){return Math.max(1,Math.round(_.price*(1+z())))}function $(_,T,v=""){if(!ys[_]||!T)return;const D=I(_),W=Pt.clamp(D+Math.round(T),-100,100);if(n.reputation[_]=W,W===D)return;n.repLog=Array.isArray(n.repLog)?n.repLog:[],n.repLog.push({faction:_,amount:W-D,reason:v}),n.repLog.length>12&&n.repLog.shift();const J=W-D>0?"+":"";s(`${ys[_].short} ${J}${W-D}`+(v?` · ${v}`:"")),j(),w&&Ei()}function j(){const _=m("#rep-list");_&&(_.innerHTML=Object.entries(ys).map(([T,v])=>{const D=I(T),W=k(D),J=Math.round((D+100)/2);return`<div class="rep-row" data-tone="${W.tone}"><span class="rep-name">${v.short}</span><span class="rep-track"><i style="width:${J}%"></i></span><span class="rep-value">${D>0?"+":""}${D} · ${W.label}</span></div>`}).join(""))}const Q=16,K=Math.ceil((g.maxX-g.minX)/Q),me=Math.ceil((g.maxZ-g.minZ)/Q);let ve=null,De=0,Je=0;function mt(){ve||(ve=new Set((n.explored||[]).map(_=>Number(_))))}function At(){ve=null,mt()}function ft(){mt();const _=2,T=Math.floor((t.position.x-g.minX)/Q),v=Math.floor((t.position.z-g.minZ)/Q);let D=!1;for(let W=-_;W<=_;W++)for(let J=-_;J<=_;J++){const ne=T+J,ee=v+W;if(ne<0||ee<0||ne>=K||ee>=me||J*J+W*W>_*_+1)continue;const Ae=ee*K+ne;ve.has(Ae)||(ve.add(Ae),n.explored.push(Ae),D=!0)}return D}function ie(){return mt(),Math.min(100,Math.round(ve.size/(K*me)*100))}function ae(){for(const _ of ur){if(n.waypoints.includes(_.id))continue;Math.hypot(t.position.x-_.x,t.position.z-_.z)<16&&(n.waypoints.push(_.id),s(`บันทึกจุดเดินทาง: ${_.name}`))}}function Te(_){return Array.isArray(n.discoveredRegions)&&n.discoveredRegions.includes(_)}function He(_){return Math.max(0,Number(n.inventory[_])||0)}function Ce(_,T=1){const v=["sword","greatsword","staff","voidblade","axe","bow","froststaff","leather","iron","shadow","dragonplate","ranger","runerobe"];!Jt[_]&&!v.includes(_)||(n.inventory[_]=He(_)+T,pe(),typeof a=="function"&&a())}function at(_){return He(_)>0}function Kt(_){const T=_==="armor"?n.armor:n.weapon;return Pt.clamp(Math.round(Number(n.upgrades&&n.upgrades[T])||0),0,Fd)}function O(_){const T=Kt(_);return T>=Fd?null:uM[T+1]}function Nt(_){const T=_==="armor"?n.armor:n.weapon,v=O(_);if(!v)return s("อุปกรณ์ชิ้นนี้อัปเกรดถึงระดับสูงสุดแล้ว");if(n.gold<v.gold||He("ore")<v.ore||n.crystals<v.crystals)return s(`ต้องใช้ ${v.gold} ทอง · แร่ ${v.ore} · ผลึก ${v.crystals}`);n.gold-=v.gold,n.inventory.ore=Math.max(0,He("ore")-v.ore),n.crystals=Math.max(0,n.crystals-v.crystals);const D=Kt(_)+1;n.upgrades[T]=D,f&&f.play("craft"),pe(),typeof a=="function"&&a(),o(),s(`อัปเกรดสำเร็จ: ${T} +${D}`)}function je(){const _=Od.slice(),T=Math.max(1,Number(n.level)||1),v=Math.min(2,Math.floor(T/4)),D=[];for(let W=0;W<3&&_.length>0;W++){const J=_.splice(Math.floor(Math.random()*_.length),1)[0],ne=3+Math.floor(Math.random()*3)+v;D.push({id:`${J.type}-${W}-${Math.floor(Math.random()*1e6)}`,type:J.type,title:J.name,target:ne,count:0,done:!1,reward:{gold:Math.round(ne*(18+T*3)),xp:Math.round(ne*(10+T*2)),item:J.items[Math.floor(Math.random()*J.items.length)],amount:ne>=5?2:1}})}n.bounties=D}function qe(){if(!Array.isArray(n.bounties)||n.bounties.length!==3)je();else for(const _ of n.bounties)if(!Od.some(T=>T.type===_.type)){je();break}}function Ne(){const T=n.bounties.length>0&&n.bounties.every(v=>v.done)?0:kd;if(n.gold<T)return s(`ต้องมี ${T} ทองเพื่อรับสัญญาชุดใหม่`);n.gold-=T,je(),Ee(),o(),s(T?`สัญญาชุดใหม่ (-${T} ทอง)`:"สัญญาชุดใหม่พร้อมแล้ว")}function Ut(_){let T=!1;for(const v of n.bounties)v.done||v.type!==_||(v.count=Math.min(v.target,v.count+1),T=!0,v.count>=v.target&&(v.done=!0,n.gold+=v.reward.gold,v.reward.xp&&r(v.reward.xp),v.reward.item&&Ce(v.reward.item,v.reward.amount||1),f&&f.play("quest"),s(`สัญญาสำเร็จ: ${v.title} · +${v.reward.gold} ทอง`),o()));T&&Ee()}function Oe(_){const T=new Wt;if(_==="herb"){const v=new Gt({color:5217116,roughness:1});for(let D=0;D<3;D++){const W=new Xe(new ks(.22,.75,5),v);W.position.set((D-1)*.24,.38,D%2*.18),W.rotation.z=(D-1)*.3,W.castShadow=!0,T.add(W)}}else if(_==="ore"){const v=new Xe(new Qa(.62,0),new Gt({color:10200756,roughness:.7,metalness:.35,emissive:2503489}));v.position.y=.5,v.castShadow=!0,T.add(v)}else if(_==="wood"){const v=new Xe(new Xi(.3,.34,1.5,7),new Gt({color:8015922,roughness:1}));v.rotation.z=Math.PI/2,v.position.y=.35,T.add(v)}else{const v=new Xe(new Mr(.55,0),new Gt({color:Jt[_]?Jt[_].color:16777215,emissive:Jt[_]?Jt[_].color:16777215,emissiveIntensity:.5,roughness:.4}));v.position.y=.65,T.add(v)}return T}function nt(_,T,v){const D=Oe(_),W=y(T,v,0);D.position.set(T,W,v),D.userData={kind:"resource",type:_,amount:2,maxAmount:2,respawn:0,baseY:W},e.add(D),p.push(D)}function jt(_,T=ya(_)){const v=Jt[_]?Jt[_].color:16777215,D={common:.22,uncommon:.26,rare:.3,epic:.38}[T]||.22,W=new Xe(new Mr(D),new Gt({color:v,emissive:v,emissiveIntensity:T==="epic"?1.6:.9,roughness:.3}));return W.userData={kind:"drop",type:_,rarity:T,baseY:.6,phase:Math.random()*6},W}function zt(_,T,v=.8,D=ya(_)){const W=jt(_,D),J=T.x+(Math.random()-.5)*v,ne=T.z+(Math.random()-.5)*v,ee=y(J,ne,T.y||0)+.6;W.position.set(J,ee,ne),W.userData.baseY=ee,e.add(W),x.push(W)}function N(_){const T=_.kind==="cave"?8377576:_.kind==="ruin"?13210352:14857308,v=new Wt,D=new Gt({color:T,emissive:T,emissiveIntensity:.65,roughness:.4});if(_.kind==="cave"){const ne=new Xe(new Dr(.85,.16,8,24),D);ne.position.y=1.1,v.add(ne)}else{const ne=new Xe(new xi(1.15,.65,.85),D);ne.position.y=.45,v.add(ne);const ee=new Xe(new xi(1.25,.18,.95),D);ee.position.y=.86,v.add(ee)}const W=new Xe(new Mr(.32),D);W.position.y=_.kind==="cave"?1.1:1.5,v.add(W);const J=y(_.position.x,_.position.z,0);return v.position.set(_.position.x,J,_.position.z),v.userData={kind:"secret",secretId:_.id,secretKind:_.kind,secretData:_,color:T,baseY:J,phase:Math.random()*Math.PI*2,spark:W},v.visible=!n.discoveredSecrets.includes(_.id),e.add(v),v}function A(_){const T=_.userData.secretData;if(!T||n.discoveredSecrets.includes(T.id))return!1;n.discoveredSecrets.push(T.id);const v=T.loot||{};v.crystals&&(n.crystals+=v.crystals),v.gold&&(n.gold+=v.gold),v.potions&&(n.potions+=v.potions),v.xp&&r(v.xp);for(const[D,W]of Object.entries(v.items||{}))Ce(D,W);return ge(_.position,_.userData.color),_.visible=!1,s(`ค้นพบ ${T.name}${v.gold?` · ทองคำ +${v.gold}`:""}`),$("ancient",2,"ค้นพบความลับ"),pe(),Ee(),o(),!0}function X(){let _=null,T=1/0;for(const v of b){if(!v.visible)continue;const D=t.position.distanceTo(v.position);D<4&&D<T&&(_=v.userData.secretData,T=D)}return _?_.name:null}function te(_){const T=performance.now()*.001;for(const v of b){if(!v.visible)continue;const D=v.userData.spark;D.rotation.y+=_*1.8,D.position.y=(v.userData.secretKind==="cave"?1.1:1.5)+Math.sin(T*2+v.userData.phase)*.14}}function oe(_){return C.has(_.id)||C.set(_.id,np(dM[_.id]||{kind:"humanoid",palette:{body:`#${_.color.toString(16).padStart(6,"0")}`}})),C.get(_.id)}function Z(_){const T=new Wt,v=ip(oe(_),1.5,2);T.add(v);const D=new Xe(new Br(.42,16),new cn({color:0,transparent:!0,opacity:.25,depthWrite:!1}));D.rotation.x=-Math.PI/2,D.position.y=.025,T.add(D);const W=new Xe(new Dr(.5,.035,6,20),new cn({color:_.color}));W.rotation.x=Math.PI/2,W.position.y=.06,T.add(W);const J=y(_.position[0],_.position[2],_.position[1]);return T.position.set(_.position[0],J,_.position[2]),T.userData={kind:"npc",npcId:_.id,baseY:J,sprite:v,animTime:0,hurtTimer:0,attackTimer:0,deathTimer:0,directionRow:0,moving:!1,baseTint:16777215,target:new U(_.position[0],J,_.position[2])},e.add(T),T}function Ve(_,T,v){const D=new Xt().setFromPoints([_,T]),W=new Au({color:v,transparent:!0,opacity:1}),J=new ja(D,W);e.add(J),M.push({mesh:J,life:.28,maxLife:.28,kind:"beam"})}function ge(_,T){const v=new Xe(new Lo(.5,12,8),new cn({color:T,transparent:!0,opacity:.8,depthWrite:!1}));v.position.copy(_),v.position.y+=1,e.add(v),M.push({mesh:v,life:.5,maxLife:.5,kind:"burst"})}function Ue(_,T=1){const v=As[_],D=n.quests[_];if(!(!v||!D||D.status!=="active")){if(D.count=Math.min(v.target,D.count+T),D.count>=v.target){D.status="done";const W=v.reward;W.potions&&(n.potions+=W.potions),W.ore&&Ce("ore",W.ore),W.xp&&r(W.xp),f&&f.play("quest"),s(`ภารกิจรอบสำเร็จ: ${v.title}`),o()}Ee()}}function ke(_){const T=_.userData.type||"guardian",v=Bd[T]||Bd.guardian;for(const D of v){if(Math.random()>D.chance)continue;const W=D.min+Math.floor(Math.random()*(D.max-D.min+1)),J=ya(D.id);for(let ne=0;ne<W;ne++)zt(D.id,_.position,.9,J);J!=="common"&&s(`ดรอป${Fi[J].name}: ${Jt[D.id].name}`)}T==="guardian"&&Ue("hunt",1),Ut(T)}function he(_){return Object.entries(_.cost).every(([T,v])=>He(T)>=v)}function ye(_){return _.repeatable?!1:_.give.item?at(_.give.item):_.give.spell?n.spells.includes(_.give.spell):!1}function $e(_){const T=Ud.find(v=>v.id===_);if(T){if(ye(T))return s("ครอบครองอยู่แล้ว");if(!he(T))return s("วัตถุดิบไม่เพียงพอ");for(const[v,D]of Object.entries(T.cost))n.inventory[v]=He(v)-D;T.give.potions&&(n.potions+=T.give.potions,o()),T.give.item&&Ce(T.give.item,1),T.give.spell&&(n.spells.push(T.give.spell),n.activeSpell||(n.activeSpell=T.give.spell)),f&&f.play("craft"),s(`คราฟต์สำเร็จ: ${T.name}`),pe()}}function Be(_){if(!n.spells.includes(_))return s("ยังไม่ได้เรียนเวทนี้");n.activeSpell=_,pe(),s(`เลือกเวท: ${xs[_].name}`)}function Me(){const _=n.activeSpell;if(!_||!n.spells.includes(_))return s("ยังไม่ได้เลือกเวทมนตร์");const T=xs[_];if(n.mana<T.cost)return s("มนตรากำลังไม่เพียงพอ");if(_==="heal"&&n.hp>=(n.maxHp||100))return s("พลังชีวิตเต็มอยู่แล้ว");n.mana-=T.cost,f&&f.play("spell");const v=Math.max(0,Number(n.skills&&n.skills.arcana)||0),D=n.classId==="mage"?1.25:1,W=Math.round(T.power*(1+v*.1)*D);if(_==="heal")n.hp=Math.min(n.maxHp||100,n.hp+W),ge(t.position,9234083),s(`เวทรักษา +${W} HP`),o();else{const J=Math.sin(t.rotation.y),ne=Math.cos(t.rotation.y);let ee=null,Ae=-1/0;for(const lt of l){if(!lt.userData.alive)continue;const mn=lt.position.x-t.position.x,Jn=lt.position.z-t.position.z,hi=Math.hypot(mn,Jn);if(hi>T.range||hi<.001)continue;const Fe=(mn*J+Jn*ne)/hi;if(Fe<.2)continue;const et=Fe-hi*.03;et>Ae&&(Ae=et,ee=lt)}const ce=t.position.clone().add(new U(0,1.35,0)),_e=ee?ee.position.clone().add(new U(0,1.2,0)):t.position.clone().add(new U(J*T.range,1.2,ne*T.range));Ve(ce,_e,16751181),ee?(ge(ee.position,16742973),ee.userData.hurtTimer=.3,ee.userData.hp-=W,ee.userData.hp<=0?c(ee):s(`ลูกไฟโดนศัตรู -${W}`)):s("ลูกไฟพุ่งเข้าสู่ความมืด")}pe()}function Qe(){const _=m("#material-list");_&&(_.innerHTML=Object.entries(Jt).map(([T,v])=>`<span>${v.name} <strong id="material-${T}">${He(T)}</strong></span>`).join(""))}function B(){const _=m("#craft-list");_&&(_.innerHTML=Ud.map(T=>{const v=Object.entries(T.cost).map(([ne,ee])=>`${Jt[ne].name}×${ee}`).join(" · "),D=ye(T)||!he(T)?" disabled":"",W=ye(T)?"มีแล้ว":T.name,J=T.rarity?` <em class="rarity ${T.rarity}">[${Fi[T.rarity].name}]</em>`:"";return`<button type="button" class="craft-btn" data-recipe="${T.id}"${D}><b>${W}${J}</b><small>${v}</small></button>`}).join(""))}function de(){for(const T of Object.keys(xs)){const v=m(`#spell-${T}`);if(!v)continue;const D=n.spells.includes(T);v.disabled=!D,v.classList.toggle("selected",n.activeSpell===T),v.title=D?`${xs[T].name} · ใช้มนตรา ${xs[T].cost}`:"ยังไม่ได้เรียนเวทนี้"}const _=m("#cast");_&&(_.disabled=!n.activeSpell)}function pe(){Qe(),B(),de()}function Ee(){const _=m("#quest-list");if(!_)return;const T=n.questStage===0?"เดินทางไปยังหอคอยร้าง":n.questStage===1?"กำจัดผู้พิทักษ์ที่เฝ้าซากโบราณ":"สำเร็จ! สำรวจดินแดนต่อไป",v=Object.entries(As).filter(([ee])=>n.quests[ee]&&n.quests[ee].status!=="locked").map(([ee,Ae])=>{const ce=n.quests[ee],_e=ce.status==="done"?"✓ สำเร็จ":"กำลังทำ";return`<div class="quest-entry"><b>${Ae.title}</b><small>${Ae.desc} (${ce.count}/${Ae.target})</small><small>${_e}</small></div>`}).join(""),D=(n.discoveredSecrets||[]).length,W=`<div class="quest-entry hidden-quest"><b>🗝 ภารกิจลับ</b><small>ค้นพบความลับในโลก ${D}/18 · ค่าชื่อเสียงองค์กรโบราณ ${I("ancient")}</small><small>${D?"ความลับที่พบถูกบันทึกบนแผนที่":"ยังไม่มีผู้ค้นพบความลับนี้"}</small></div>`;_.innerHTML=`<div class="quest-entry main-quest"><b>✦ ภารกิจหลัก</b><small>${T}</small></div>`+v+W,qe();const J=m("#bounty-list");J&&(J.innerHTML=n.bounties.map(ee=>{const Ae=ee.done?"✓ สำเร็จ":`${Math.min(ee.count,ee.target)}/${ee.target}`,ce=ee.reward.item&&Jt[ee.reward.item]?Jt[ee.reward.item].name:"-";return`<div class="bounty-entry${ee.done?" done":""}"><b>${ee.title}</b><small>${Ae} · +${ee.reward.gold} ทอง · +${ee.reward.xp} XP · ${ce} x${ee.reward.amount||1}</small></div>`}).join(""));const ne=m("#bounty-reroll");if(ne){const ee=n.bounties.length>0&&n.bounties.every(Ae=>Ae.done);ne.textContent=ee?"รับสัญญาชุดใหม่":`สัญญาใหม่ (${kd} ทอง)`}j()}function ue(_){const T=As[_];if(!T)return;const v=n.quests[_];v&&v.status!=="locked"||(n.quests[_]={status:"active",count:0},s(`รับภารกิจ: ${T.title}`),Ee())}function se(_){if(!_.quest)return!1;const T=n.quests[_.quest];return!T||T.status==="locked"}function Pe(_){return k(I(_.faction||"outcasts"))}function Ze(_){const T=Pe(_);return{rep:I(_.faction),tier:T.tone,label:T.label,flags:n.flags,questStage:n.questStage}}function vt(_){return _?_.requiresRep?I(_.requiresRep.faction)>=_.requiresRep.min:!(_.once&&n.flags[`topic-${_.id}`]):!1}function xt(_){return _.requiresRep?`🔒 ${_.label}`:_.label}function jn(){const _=I("merchants"),T=Math.round(z()*100);return T===0?"ตอนนี้ข้าขายราคาปกติให้เจ้า ถ้าช่วยสมาคมมากขึ้น ข้าอาจลดให้":T<0?`ตอนนี้เจ้าซื้อถูกลง ${Math.abs(T)}% จากราคาปกติ (ชื่อเสียงพ่อค้า ${_})`:`ตอนนี้เจ้าซื้อแพงขึ้น ${T}% จากราคาปกติ (ชื่อเสียงพ่อค้า ${_})`}function kn(){const _=u.filter(v=>!Te(v.id));if(!_.length){s("เจ้ารู้จักทุกภูมิภาคในแผนที่นี้แล้ว");return}_.sort((v,D)=>{const W=Math.hypot(v.center.x-t.position.x,v.center.z-t.position.z),J=Math.hypot(D.center.x-t.position.x,D.center.z-t.position.z);return W-J});const T=_[0];n.discoveredRegions.push(T.id),n.cartographer+=1,s(`แผนที่เก่าผยให้เห็น: ${T.name}`),f&&f.play("pickup")}function Oo(_,T){const v=T.effect;if(!v)return!0;if(v.gold&&v.gold<0&&n.gold<-v.gold)return s(`ต้องมี ${-v.gold} ทองก่อน`),!1;if(v.gold&&(n.gold=Math.max(0,n.gold+v.gold),o()),v.rep)for(const[D,W]of Object.entries(v.rep))$(D,W,T.label);return v.flag&&(n.flags[v.flag]=!0),v.once!==!1&&(n.flags[`topic-${T.id}`]=!0),v.action==="openShop"?(ui(),Vs(),!0):(v.action==="buyMap"&&kn(),v.toast&&!v.rep&&s(v.toast),!0)}function Zn(_){if(!w)return;if(!vt(_)){s(_.requiresRep?`ต้องมีความสัมพันธ์กับ${ys[_.requiresRep.faction].short}อย่างน้อย ${_.requiresRep.min}`:"หัวข้อนี้ถูกใช้ไปแล้ว");return}if(!Oo(w.npc,_))return;let T=_.reply;_.dynamic==="price"&&(T=`${T}

${jn()}`),w.mode="reply",w.text=T,w.topicId=_.id,Ei()}function zs(){w&&(w.mode="topics",w.text=w.npc.greet?w.npc.greet(Ze(w.npc)):w.npc.lines&&w.npc.lines[0]||"",Ei())}function ko(_){if(!w)return;const T=String(_||"").trim().toLowerCase().replace(/\s+/g,"");if(!T)return;const v=w.npc,D=[...v.topics||[],...vt(v.secretTopic)?[v.secretTopic]:[]];let W=null,J=0;for(const ee of D){let Ae=0;for(const ce of ee.keys||[])T.includes(String(ce).toLowerCase().replace(/\s+/g,""))&&(Ae+=Math.max(1,ce.length));Ae>J&&(W=ee,J=Ae)}if(W){if(W.requiresRep&&!vt(W)){w.mode="reply",w.text="เรื่องนั้น... เจ้ายังไม่ใช่คนที่ข้าจะไว้ใจได้",Ei();return}Zn(W);return}const ne=Pe(v);w.mode="reply",w.text=`ข้าไม่รู้เรื่องนั้นดีพอ (${ne.label}ต่อ${ys[v.faction].short}) ลองถามเรื่องที่ข้ารู้ เช่น ${(v.topics||[]).slice(0,2).map(ee=>`“${ee.label}”`).join(" หรือ ")}`,Ei()}function Ei(){if(!w)return;const _=m("#dialogue-name"),T=m("#dialogue-title"),v=m("#dialogue-rep"),D=m("#dialogue-text"),W=m("#dialogue-choices"),J=m("#dialogue-next"),ne=m(".dialogue-ask");if(!_||!D||!J)return;const ee=w.npc,Ae=Pe(ee);if(_.textContent=ee.name,T&&(T.textContent=ee.title||"ชาวเมือง"),v&&(v.textContent=`${ys[ee.faction].short} · ${Ae.label}`,v.dataset.tone=Ae.tone,v.title=`ชื่อเสียง ${I(ee.faction)}`),D.textContent=w.text,W)if(W.innerHTML="",w.mode==="reply"){const _e=document.createElement("button");_e.type="button",_e.className="dialogue-back",_e.textContent="↩ กลับไปถามเรื่องอื่น",_e.addEventListener("click",zs),W.appendChild(_e)}else{if(se(ee)){const _e=document.createElement("button");_e.type="button",_e.className="dialogue-topic quest",_e.innerHTML=`<span>✦ รับภารกิจ: ${As[ee.quest].title}</span>`,_e.addEventListener("click",()=>{ue(ee.quest),zs()}),W.appendChild(_e)}for(const _e of ee.topics||[]){if(!vt(_e))continue;const lt=document.createElement("button");lt.type="button",lt.className="dialogue-topic",lt.innerHTML=`<span>${xt(_e)}</span>`,lt.addEventListener("click",()=>Zn(_e)),W.appendChild(lt)}if(vt(ee.secretTopic)){const _e=document.createElement("button");_e.type="button",_e.className="dialogue-topic secret",_e.innerHTML=`<span>🗝 ${ee.secretTopic.label}</span>`,_e.addEventListener("click",()=>Zn(ee.secretTopic)),W.appendChild(_e)}}ne&&ne.classList.toggle("hidden",w.mode!=="topics");const ce=m("#dialogue-ask");ce&&(ce.value=""),J.textContent=se(ee)?"รับภารกิจ":"จบการสนทนา"}function ui(){w=null;const _=m("#dialogue-panel");_&&_.classList.add("hidden")}function Bo(_){w={npc:_,mode:"topics",text:_.greet?_.greet(Ze(_)):_.lines&&_.lines[0]||""};const T=m("#dialogue-panel");T&&T.classList.remove("hidden"),Ei()}function Hs(){if(w)return ui(),!0;let _=null,T=1/0;for(const W of R){const J=t.position.distanceTo(W.position);J<4&&J<T&&(_=W,T=J)}if(_){const W=Ma.find(J=>J.id===_.userData.npcId);return W&&Bo(W),!0}for(const W of p){if(W.userData.amount<=0)continue;const J=t.position.distanceTo(W.position);J<2.5&&J<T&&(_=W,T=J)}if(_&&_.userData.kind==="resource"){const W=_.userData.type,J=_.userData.amount;return _.userData.amount=0,_.userData.respawn=50,_.visible=!1,Ce(W,J),W==="herb"&&Ue("herb",J),s(`เก็บ${Jt[W].name} +${J}`),!0}let v=null,D=1/0;for(const W of b){if(!W.visible)continue;const J=t.position.distanceTo(W.position);J<3.2&&J<D&&(v=W,D=J)}return v?A(v):!1}function Ki(){const _=Math.max(0,Math.floor(n.gold||0)),T=m("#shop-buy"),v=m("#shop-sell"),D=m("#shop-gold");if(D&&(D.textContent=String(_)),T&&(T.innerHTML=xa.map(ne=>{const ee=ne.id!=="potion"&&at(ne.id)&&!["herb","ore","wood","bone","meat","darkShard","essence","stoneHeart"].includes(ne.id),Ae=Y(ne),ce=_<Ae||ee?" disabled":"",_e=ee?"มีแล้ว":ne.name,lt=ne.rarity?` <em class="rarity ${ne.rarity}">[${Fi[ne.rarity].name}]</em>`:"";return`<button type="button" data-buy="${ne.id}"${ce}><span>${_e}${lt}</span><strong>${Ae} ◈</strong></button>`}).join("")),v){const ne=xa.filter(ee=>Jt[ee.id]&&He(ee.id)>0);v.innerHTML=ne.length?ne.map(ee=>`<button type="button" data-sell="${ee.id}"><span>${ee.name} ×${He(ee.id)}</span><strong>+${Math.max(1,Math.floor(ee.price*.5))} ◈</strong></button>`).join(""):"<small>ไม่มีวัตถุดิบสำหรับขาย</small>"}const W=m("#gold-count");W&&(W.textContent=String(_));const J=m("#shop-rep");if(J){const ne=I("merchants"),ee=Math.round(z()*100),Ae=k(ne);J.textContent=ee===0?`ชื่อเสียงพ่อค้า ${ne} · ${Ae.label}`:`ชื่อเสียงพ่อค้า ${ne} · ${Ae.label} · ราคา ${ee>0?"+":""}${ee}%`,J.dataset.tone=Ae.tone}}function zo(_){const T=xa.find(D=>D.id===_);if(!T)return;const v=Y(T);if(n.gold<v)return s("ทองไม่เพียงพอ");n.gold-=v,_==="potion"?n.potions++:Ce(_,1),f&&f.play("coin"),s(`ซื้อ${T.name}แล้ว`),o(),Ki(),pe()}function pc(_){const T=xa.find(D=>D.id===_);if(!T||!Jt[_]||He(_)<=0)return;const v=Math.max(1,Math.floor(T.price*.5));n.inventory[_]=He(_)-1,n.gold+=v,f&&f.play("coin"),s(`ขาย${T.name} ได้ ${v} ทอง`),o(),Ki(),pe()}function Vs(){L=!0;const _=m("#shop-panel");_&&_.classList.remove("hidden");const T=m("#shop-open");T&&T.setAttribute("aria-expanded","true"),Ki()}function qr(){L=!1;const _=m("#shop-panel");_&&_.classList.add("hidden");const T=m("#shop-open");T&&T.setAttribute("aria-expanded","false")}function mc(){L?qr():Vs()}function gc(_){const T=m("#minimap");if(!T)return;S||(S=T.getContext("2d"));const v=S,D=T.width/2,W=T.height/2,J=Math.min(D,W)-6,ne=1.5;v.clearRect(0,0,T.width,T.height),v.save(),v.beginPath(),v.arc(D,W,J,0,Math.PI*2),v.clip(),v.fillStyle="rgba(9, 13, 22, 0.88)",v.fillRect(0,0,T.width,T.height),v.strokeStyle="rgba(210, 190, 140, 0.12)",v.lineWidth=1;for(let ce=-J;ce<=J;ce+=18)v.beginPath(),v.moveTo(D+ce,0),v.lineTo(D+ce,T.height),v.stroke(),v.beginPath(),v.moveTo(0,W+ce),v.lineTo(T.width,W+ce),v.stroke();const ee=(ce,_e,lt=3)=>{if(!ce)return;const mn=ce.x-t.position.x,Jn=ce.z-t.position.z,hi=Math.cos(_),Fe=Math.sin(_),et=mn*hi+Jn*Fe,Et=-mn*Fe+Jn*hi,yt=D+et*ne,Sn=W+Et*ne;Math.hypot(yt-D,Sn-W)>J-lt||(v.fillStyle=_e,v.beginPath(),v.arc(yt,Sn,lt,0,Math.PI*2),v.fill())};for(const ce of h)ee(ce.position,ce.color,ce.size||4);for(const ce of b)ce.visible&&ee(ce.position,"#f0d69a",2.8);for(const ce of R)ee(ce.position,"#7fd4e8",4);for(const ce of p)ce.userData.amount>0&&ee(ce.position,`#${Jt[ce.userData.type].color.toString(16).padStart(6,"0")}`,2.5);for(const ce of x)ee(ce.position,"#f0d69a",2);for(const ce of l)ce.userData.alive&&ee(ce.position,"#ff5b52",3.5);v.restore(),v.strokeStyle="#c9a86a",v.lineWidth=2,v.beginPath(),v.arc(D,W,J,0,Math.PI*2),v.stroke(),v.fillStyle="#f5e3b3",v.beginPath(),v.moveTo(D,W-7),v.lineTo(D-5,W+5),v.lineTo(D+5,W+5),v.closePath(),v.fill();const Ae=m("#compass-text");if(Ae){const ce=(_*180/Math.PI%360+360)%360,_e=ce<45||ce>=315?"N":ce<135?"E":ce<225?"S":"W";Ae.textContent=`${_e} · ${String(Math.round(ce)).padStart(3,"0")}°`}}const Ht=900,P=48,V=Ht-P*2,q=5,F={scale:1,tx:0,ty:0,bound:!1,lastYaw:0,dragging:!1,moved:0,lastX:0,lastY:0,pointers:new Map,pinchDist:0,selected:null};let G=null,le=null;const be=[[[-45,-45],[9,-8],[45,-50],[55,0],[42,50]],[[-45,-45],[-70,-140]],[[9,-8],[42,50],[-50,205]],[[55,0],[160,50]],[[160,50],[150,-150],[159,-177]],[[-45,-45],[-150,-40],[-165,-155]]];function Le(_){let T=2166136261;for(let v=0;v<_.length;v++)T^=_.charCodeAt(v),T=Math.imul(T,16777619);return(T>>>0)/4294967296}function we(_){let T=Math.floor(_*2147483647)||1;return()=>(T=T*16807%2147483647,T/2147483647)}function Re(_){return P+(_-g.minX)/(g.maxX-g.minX)*V}function Ie(_){return P+(_-g.minZ)/(g.maxZ-g.minZ)*V}function Ge(){if(G)return G;const _=document.createElement("canvas");_.width=_.height=Ht;const T=_.getContext("2d"),v=T.createRadialGradient(Ht*.46,Ht*.38,Ht*.05,Ht*.5,Ht*.5,Ht*.78);v.addColorStop(0,"#f3e3bd"),v.addColorStop(.55,"#e8d3a7"),v.addColorStop(.85,"#d8bd8b"),v.addColorStop(1,"#b8935f"),T.fillStyle=v,T.fillRect(0,0,Ht,Ht);const D=we(.42);for(let W=0;W<5200;W++){const J=D()*Ht,ne=D()*Ht,ee=D()*1.7+.3,Ae=D()>.45;T.fillStyle=Ae?`rgba(94,66,32,${.02+D()*.07})`:`rgba(255,246,218,${.02+D()*.08})`,T.beginPath(),T.arc(J,ne,ee,0,Math.PI*2),T.fill()}for(let W=0;W<220;W++){const J=D()*Ht,ne=D()*Ht;T.strokeStyle=`rgba(120,88,48,${.02+D()*.04})`,T.lineWidth=.5+D(),T.beginPath(),T.moveTo(J,ne),T.quadraticCurveTo(J+(D()-.5)*80,ne+(D()-.5)*30,J+(D()-.5)*160,ne+(D()-.5)*40),T.stroke()}return T.strokeStyle="rgba(82,52,24,0.55)",T.lineWidth=10,T.strokeRect(14,14,Ht-28,Ht-28),T.strokeStyle="rgba(255,244,214,0.35)",T.lineWidth=2,T.strokeRect(26,26,Ht-52,Ht-52),G=_,_}function ct(_){if(le)return le;const T=document.createElement("canvas");T.width=T.height=12;const v=T.getContext("2d");return v.fillStyle="rgba(74,50,24,0.30)",v.fillRect(0,0,12,12),v.strokeStyle="rgba(50,32,14,0.28)",v.lineWidth=1,v.beginPath(),v.moveTo(-2,10),v.lineTo(10,-2),v.moveTo(4,16),v.lineTo(16,4),v.stroke(),le=_.createPattern(T,"repeat"),le}function bt(_,T){const v=Re(T.center.x),D=Ie(T.center.z),W=T.radius/(g.maxX-g.minX)*V,J=Le(T.id)*20,ne=54;_.beginPath();for(let ee=0;ee<=ne;ee++){const Ae=ee/ne*Math.PI*2,ce=1+Math.sin(Ae*3+J)*.1+Math.sin(Ae*7+J*1.7)*.05+Math.sin(Ae*13+J*.6)*.025,_e=v+Math.cos(Ae)*W*ce,lt=D+Math.sin(Ae)*W*ce;ee===0?_.moveTo(_e,lt):_.lineTo(_e,lt)}return _.closePath(),{cx:v,cy:D,radius:W}}function Vt(_,T,v,D){_.strokeStyle="#5a4326",_.lineWidth=Math.max(.8,D*.16),_.beginPath(),_.moveTo(T,v),_.lineTo(T,v-D*.55),_.stroke(),_.fillStyle="#5c6b3c",_.beginPath(),_.moveTo(T,v-D),_.lineTo(T-D*.42,v-D*.5),_.lineTo(T+D*.42,v-D*.5),_.closePath(),_.fill()}function Dt(_,T,v,D){_.strokeStyle="#5a4326",_.lineWidth=Math.max(.9,D*.14),_.beginPath(),_.moveTo(T-D*.8,v),_.lineTo(T,v-D),_.lineTo(T+D*.8,v),_.stroke(),_.strokeStyle="rgba(90,67,38,.55)",_.beginPath(),_.moveTo(T-D*.18,v-D*.7),_.lineTo(T+D*.22,v-D*.25),_.stroke()}function Tt(_,T,v,D){_.strokeStyle="rgba(56,92,108,.65)",_.lineWidth=Math.max(.8,D*.14),_.beginPath(),_.moveTo(T-D,v),_.quadraticCurveTo(T-D*.5,v-D*.5,T,v),_.quadraticCurveTo(T+D*.5,v+D*.5,T+D,v),_.stroke()}function We(_,T,v,D,W){_.fillStyle=W?"#7a4a22":"#6b4526",_.strokeStyle="#4a2f17",_.lineWidth=1.3,_.beginPath(),_.rect(T-D*.55,v-D*.5,D*1.1,D*.9),_.fill(),_.stroke(),_.beginPath(),_.moveTo(T-D*.75,v-D*.5),_.lineTo(T,v-D*1.1),_.lineTo(T+D*.75,v-D*.5),_.closePath(),_.fillStyle="#8a5a2c",_.fill(),_.stroke(),W&&(_.beginPath(),_.moveTo(T+D*.25,v-D*.95),_.lineTo(T+D*.25,v-D*1.7),_.strokeStyle="#4a2f17",_.stroke(),_.beginPath(),_.moveTo(T+D*.25,v-D*1.7),_.lineTo(T+D*.85,v-D*1.5),_.lineTo(T+D*.25,v-D*1.3),_.closePath(),_.fillStyle="#a3121c",_.fill())}function Ot(_,T,v,D){_.fillStyle="#4d3a26",_.beginPath(),_.arc(T,v,D*.7,Math.PI,Math.PI*2),_.closePath(),_.fill(),_.fillStyle="#e8d3a7",_.beginPath(),_.arc(T,v,D*.34,Math.PI,Math.PI*2),_.closePath(),_.fill()}function gt(_,T,v,D){_.strokeStyle="#5d4a33",_.lineWidth=D*.22,_.beginPath(),_.moveTo(T-D*.6,v),_.lineTo(T-D*.6,v-D),_.moveTo(T,v),_.lineTo(T,v-D*.7),_.moveTo(T+D*.6,v),_.lineTo(T+D*.6,v-D*.9),_.stroke(),_.beginPath(),_.moveTo(T-D*.8,v),_.lineTo(T+D*.8,v),_.stroke()}function yn(_,T,v,D){_.fillStyle="rgba(150,22,32,.92)",_.beginPath(),_.arc(T,v-D*.1,D*.62,0,Math.PI*2),_.fill(),_.fillRect(T-D*.34,v+D*.34,D*.68,D*.38),_.fillStyle="#f3e3bd",_.beginPath(),_.arc(T-D*.24,v-D*.16,D*.15,0,Math.PI*2),_.arc(T+D*.24,v-D*.16,D*.15,0,Math.PI*2),_.fill()}function wi(_,T,v,D,W){_.fillStyle=W,_.beginPath();for(let J=0;J<10;J++){const ne=J%2?D*.45:D,ee=-Math.PI/2+J*Math.PI/5,Ae=T+Math.cos(ee)*ne,ce=v+Math.sin(ee)*ne;J?_.lineTo(Ae,ce):_.moveTo(Ae,ce)}_.closePath(),_.fill()}function Mn(_,T,v,D,W){_.strokeStyle=W?"#5b3c18":"rgba(80,60,36,.55)",_.lineWidth=2,_.beginPath(),_.moveTo(T,v+D*.9),_.lineTo(T,v-D),_.stroke(),_.fillStyle=W?"#d9a63c":"rgba(120,96,64,.45)",_.beginPath(),_.moveTo(T,v-D),_.lineTo(T+D*.95,v-D*.72),_.lineTo(T,v-D*.4),_.closePath(),_.fill(),W&&(_.strokeStyle="rgba(74,47,23,.8)",_.lineWidth=1,_.stroke())}function ds(_,T,v,D){_.fillStyle="#8a5a24",_.fillRect(T-D*.5,v-D*.25,D,D*.55),_.fillStyle="#c89b45",_.fillRect(T-D*.5,v-D*.42,D,D*.2),_.fillStyle="#5a3a18",_.fillRect(T-D*.08,v-D*.4,D*.16,D*.7)}function kt(){return n.questStage===0?{x:0,z:-48,label:"หอคอยร้าง"}:n.questStage===1?{x:0,z:-86,label:"ซากโบราณ"}:null}function Rn(_){const T=kt();if(T&&Te("wasteland")){const v=Re(T.x),D=Ie(T.z);_.save(),_.shadowColor="rgba(246,206,110,.9)",_.shadowBlur=12,wi(_,v,D,13,"#e8a92a"),_.restore(),F.scale>=1.45&&(_.font='700 15px Georgia, "Noto Serif Thai", serif',_.fillStyle="#4a2f17",_.textAlign="center",_.fillText(T.label,v,D-20))}for(const v of R){const D=Ma.find(ce=>ce.id===v.userData.npcId);if(!D||!D.quest)continue;const W=n.quests[D.quest],J=W&&W.status==="active",ne=!W||W.status==="locked";if(!J&&!ne||!Te(pn(v.position.x,v.position.z)))continue;const ee=Re(v.position.x),Ae=Ie(v.position.z);wi(_,ee,Ae-16,7,J?"#c98a1e":"#e8c14a")}}function pn(_,T){for(const v of u)if(Math.hypot(_-v.center.x,T-v.center.z)<=v.radius)return v.id;return null}function qt(_){const T=m("#world-map");if(!T)return;mt(),Wp(T),F.lastYaw=Number.isFinite(_)?_:F.lastYaw;const v=T.getContext("2d"),D=T.width;v.setTransform(1,0,0,1,0,0),v.clearRect(0,0,D,D),v.drawImage(Ge(),0,0),v.save(),v.translate(F.tx,F.ty),v.scale(F.scale,F.scale);const W=F.scale>=1.45,J=F.scale>=1.85;F.labelBoxes=[];const ne=(Fe,et,Et,yt,Sn)=>{v.font=yt;const bn=v.measureText(Fe).width,Dn=parseFloat((yt.match(/([\d.]+)px/)||[0,14])[1])*1.1,on={x:et-bn/2-3,y:Et-Dn,w:bn+6,h:Dn+4};for(const Gs of F.labelBoxes)if(!(on.x+on.w<Gs.x||on.x>Gs.x+Gs.w||on.y+on.h<Gs.y||on.y>Gs.y+Gs.h))return!1;return F.labelBoxes.push(on),v.fillStyle=Sn,v.textAlign="center",v.fillText(Fe,et,Et),!0};for(const Fe of u){const et=Te(Fe.id),{cx:Et,cy:yt,radius:Sn}=bt(v,Fe);v.globalAlpha=et?.3:.16,v.fillStyle=Fe.color,v.fill(),v.globalAlpha=1,v.strokeStyle=et?"rgba(88,60,30,.65)":"rgba(88,60,30,.3)",v.lineWidth=et?2:1.2,v.setLineDash(et?[]:[5,6]),v.stroke(),v.setLineDash([]);const bn=we(Le(Fe.id+"glyph"));if(Fe.id==="deadwood"||Fe.id==="ravenhold")for(let Bn=0;Bn<16;Bn++){const Dn=bn()*Math.PI*2,on=Math.sqrt(bn())*Sn*.82;Vt(v,Et+Math.cos(Dn)*on,yt+Math.sin(Dn)*on,7+bn()*4)}if(Fe.id==="emberpeak")for(let Bn=0;Bn<7;Bn++){const Dn=bn()*Math.PI*2,on=Math.sqrt(bn())*Sn*.7;Dt(v,Et+Math.cos(Dn)*on,yt+Math.sin(Dn)*on,12+bn()*8)}if(Fe.id==="mirefall")for(let Bn=0;Bn<9;Bn++){const Dn=bn()*Math.PI*2,on=Math.sqrt(bn())*Sn*.75;Tt(v,Et+Math.cos(Dn)*on,yt+Math.sin(Dn)*on,6+bn()*4)}F.scale<1.8&&ne(et?Fe.name:"· · ·",Et,yt-Sn*.12,`700 ${et?F.scale<1.45?20:24:18}px Georgia, "Noto Serif Thai", serif`,et?"rgba(58,39,23,.92)":"rgba(90,70,44,.55)")}v.strokeStyle="rgba(122,86,46,.55)",v.lineWidth=1.6,v.setLineDash([7,5]);for(const Fe of be)v.beginPath(),Fe.forEach(([et,Et],yt)=>{yt?v.lineTo(Re(et),Ie(Et)):v.moveTo(Re(et),Ie(Et))}),v.stroke();v.setLineDash([]);for(const Fe of h){if(!Te(Fe.region))continue;const et=Re(Fe.position.x),Et=Ie(Fe.position.z),yt=Fe.name||"";/ปราสาท|วาร์นฮัล|ราเวนโฮลด์|เมือง|หมู่บ้าน/.test(yt)?We(v,et,Et,Fe.size?6.5:5,/วาร์นฮัล|ปราสาท/.test(yt)):/ถ้ำ/.test(yt)?Ot(v,et,Et,9):/วงหิน|อาราม/.test(yt)?gt(v,et,Et,10):/ภูเขา|ปล่อง/.test(yt)?Dt(v,et,Et,16):/ทะเลสาบ/.test(yt)?Tt(v,et,Et,9):(v.fillStyle="#6b4526",v.beginPath(),v.arc(et,Et,3.4,0,Math.PI*2),v.fill()),J&&ne(yt,et,Et+20,'600 13px Georgia, "Noto Serif Thai", serif',"rgba(48,32,18,.9)")}for(const Fe of ur){const et=n.waypoints.includes(Fe.id);if(!et&&!Te(Fe.region))continue;const Et=Re(Fe.x),yt=Ie(Fe.z);Mn(v,Et,yt,10,et),F.selected===Fe.id&&(v.strokeStyle="#c8891c",v.lineWidth=2.5,v.beginPath(),v.arc(Et,yt-2,19,0,Math.PI*2),v.stroke()),W&&ne(et?Fe.name:"???",Et,yt+30,`600 ${et?13:12}px Georgia, "Noto Serif Thai", serif`,et?"#3f2a14":"rgba(70,52,30,.6)")}for(const Fe of b){const et=Fe.userData.secretData.id;n.discoveredSecrets.includes(et)&&Te(Fe.userData.secretData.region)&&ds(v,Re(Fe.position.x),Ie(Fe.position.z),11)}for(const Fe of R){const et=pn(Fe.position.x,Fe.position.z);if(!Te(et))continue;const Et=Re(Fe.position.x),yt=Ie(Fe.position.z);v.fillStyle="#2f6d80",v.beginPath(),v.arc(Et,yt,4.6,0,Math.PI*2),v.fill(),v.strokeStyle="#f3e3bd",v.lineWidth=1.4,v.stroke()}for(const Fe of l){if(!Fe.userData.alive)continue;const et=pn(Fe.position.x,Fe.position.z);if(!Te(et))continue;const Et=Fe.userData.type==="boss"||Fe.userData.type==="dungeonBoss",yt=Re(Fe.position.x),Sn=Ie(Fe.position.z);Et?yn(v,yt,Sn,16):(v.fillStyle="rgba(156,34,34,.55)",v.beginPath(),v.arc(yt,Sn,2.8,0,Math.PI*2),v.fill())}Rn(v),v.save(),v.globalAlpha=.85,v.fillStyle=ct(v);for(let Fe=0;Fe<me;Fe++)for(let et=0;et<K;et++){const Et=Fe*K+et;if(ve.has(Et))continue;const yt=g.minX+et*Q,Sn=g.minZ+Fe*Q,bn=Math.round(Re(yt)),Bn=Math.round(Ie(Sn)),Dn=Math.round(Re(yt+Q)),on=Math.round(Ie(Sn+Q));v.fillRect(bn,Bn,Dn-bn,on-Bn)}v.restore();const ee=Re(t.position.x),Ae=Ie(t.position.z);v.save(),v.translate(ee,Ae),v.rotate(F.lastYaw+Math.PI),v.fillStyle="#8a1f1f",v.strokeStyle="#f7e7bf",v.lineWidth=2,v.beginPath(),v.moveTo(0,-13),v.lineTo(-9,9),v.lineTo(0,4),v.lineTo(9,9),v.closePath(),v.fill(),v.stroke(),v.restore(),v.strokeStyle="rgba(138,31,31,.5)",v.lineWidth=1.5,v.beginPath(),v.arc(ee,Ae,17,0,Math.PI*2),v.stroke();const ce=Ht-96,_e=96;v.save(),v.translate(ce,_e),v.strokeStyle="rgba(74,47,23,.6)",v.lineWidth=1.6,v.beginPath(),v.arc(0,0,34,0,Math.PI*2),v.stroke(),v.beginPath(),v.arc(0,0,24,0,Math.PI*2),v.stroke(),v.fillStyle="rgba(86,54,26,.85)";for(let Fe=0;Fe<4;Fe++)v.save(),v.rotate(Fe*Math.PI/2),v.beginPath(),v.moveTo(0,-58),v.lineTo(5,-34),v.lineTo(-5,-34),v.closePath(),v.fill(),v.restore();v.fillStyle="#4a2f17",v.font="700 15px Georgia, serif",v.textAlign="center",v.fillText("N",0,-64),v.restore(),v.restore(),v.strokeStyle="rgba(58,38,18,.75)",v.lineWidth=3,v.strokeRect(10,10,D-20,D-20);const lt=m("#map-coords");lt&&(lt.textContent=`ตำแหน่ง: X ${Math.round(t.position.x)} · Z ${Math.round(t.position.z)} · สำรวจแล้ว ${ie()}% · จุดเดินทาง ${n.waypoints.length}/${ur.length}`);const mn=ur.find(Fe=>Fe.id===F.selected),Jn=m("#map-wp"),hi=m("#map-wp-name");Jn&&hi&&(Jn.classList.toggle("hidden",!mn),mn&&(hi.textContent=`⚑ ${mn.name}`))}function rn(_){const T=_?_.width:Ht;if(F.scale<=1.01){F.scale=1,F.tx=0,F.ty=0;return}const v=T-T*F.scale;F.tx=Pt.clamp(F.tx,v,0),F.ty=Pt.clamp(F.ty,v,0)}function ji(_,T,v){const D=m("#world-map");if(!D)return;const W=D.getBoundingClientRect(),J=W.width?D.width/W.width:1;let ne=D.width/2,ee=D.height/2;Number.isFinite(T)&&(ne=(T-W.left)*J,ee=(v-W.top)*J);const Ae=Pt.clamp(F.scale*_,1,q);if(Ae===F.scale)return;const ce=Ae/F.scale;F.tx=ne-(ne-F.tx)*ce,F.ty=ee-(ee-F.ty)*ce,F.scale=Ae,rn(D),qt(F.lastYaw)}function Ai(_,T){const v=m("#world-map");if(!v)return;const D=v.getBoundingClientRect(),W=D.width?v.width/D.width:1,J=((_-D.left)*W-F.tx)/F.scale,ne=((T-D.top)*W-F.ty)/F.scale;let ee=null;for(const ce of ur){if(!n.waypoints.includes(ce.id))continue;const _e=J-Re(ce.x),lt=ne-(Ie(ce.z)-6);if(Math.hypot(_e,lt)<26/F.scale+8){ee=ce;break}}F.selected=ee?ee.id:null;const Ae=m("#map-wp-travel");Ae&&(Ae.disabled=!ee),qt(F.lastYaw)}function Gp(){const _=m("#map-panel");_&&_.classList.add("hidden");const T=m("#map-open");T&&T.setAttribute("aria-expanded","false")}function oh(){const _=ur.find(T=>T.id===F.selected);!_||!n.waypoints.includes(_.id)||typeof i.teleportTo=="function"&&(i.teleportTo(_.x,_.z),s(`เดินทางถึง: ${_.name}`),Gp())}function Wp(_){if(F.bound)return;F.bound=!0;const T=m("#map-zoom-in"),v=m("#map-zoom-out"),D=m("#map-recenter"),W=m("#map-wp-travel");T&&T.addEventListener("click",()=>ji(1.45)),v&&v.addEventListener("click",()=>ji(1/1.45)),D&&D.addEventListener("click",()=>{F.scale=2.4,F.tx=Ht/2-Re(t.position.x)*F.scale,F.ty=Ht/2-Ie(t.position.z)*F.scale,rn(_),qt(F.lastYaw)}),W&&W.addEventListener("click",oh),_.addEventListener("contextmenu",ne=>ne.preventDefault()),_.addEventListener("wheel",ne=>{ne.preventDefault(),ji(ne.deltaY<0?1.18:1/1.18,ne.clientX,ne.clientY)},{passive:!1}),_.addEventListener("pointerdown",ne=>{if(_.setPointerCapture(ne.pointerId),F.pointers.set(ne.pointerId,{x:ne.clientX,y:ne.clientY}),F.pointers.size===1)F.dragging=!0,F.moved=0,F.lastX=ne.clientX,F.lastY=ne.clientY,_.style.cursor="grabbing";else if(F.pointers.size===2){const[ee,Ae]=[...F.pointers.values()];F.pinchDist=Math.hypot(ee.x-Ae.x,ee.y-Ae.y)}}),_.addEventListener("pointermove",ne=>{if(!F.pointers.has(ne.pointerId))return;if(F.pointers.set(ne.pointerId,{x:ne.clientX,y:ne.clientY}),F.pointers.size===2){const[lt,mn]=[...F.pointers.values()],Jn=Math.hypot(lt.x-mn.x,lt.y-mn.y);F.pinchDist>0&&ji(Jn/F.pinchDist,(lt.x+mn.x)/2,(lt.y+mn.y)/2),F.pinchDist=Jn;return}if(!F.dragging)return;const ee=_.getBoundingClientRect(),Ae=ee.width?_.width/ee.width:1,ce=(ne.clientX-F.lastX)*Ae,_e=(ne.clientY-F.lastY)*Ae;F.moved+=Math.abs(ce)+Math.abs(_e),F.lastX=ne.clientX,F.lastY=ne.clientY,F.scale>1.01&&(F.tx+=ce*F.scale,F.ty+=_e*F.scale,rn(_),qt(F.lastYaw))});const J=ne=>{if(F.pointers.delete(ne.pointerId),F.pointers.size<2&&(F.pinchDist=0),F.pointers.size===0){const ee=F.moved>6;F.dragging=!1,_.style.cursor="grab",ee||Ai(ne.clientX,ne.clientY)}};_.addEventListener("pointerup",J),_.addEventListener("pointercancel",J)}function Xp(_,T){const v=Number(n.dayTime)||0;for(const D of R){const W=Ma.find(_e=>_e.id===D.userData.npcId);if(!W||!Array.isArray(W.schedule))continue;const J=W.schedule.find(_e=>v>=_e.from&&v<_e.to)||W.schedule[0],ne=D.userData.target;ne.set(J.position[0],y(J.position[0],J.position[2],J.position[1]),J.position[2]);const ee=ne.x-D.position.x,Ae=ne.z-D.position.z,ce=Math.hypot(ee,Ae);if(D.userData.moving=ce>.35,ce>.35){const _e=Math.min(ce,_*.85);D.position.x+=ee/ce*_e,D.position.z+=Ae/ce*_e,D.position.y=y(D.position.x,D.position.z,ne.y),D.rotation.y=Math.atan2(ee,Ae)}else{const _e=t.position.x-D.position.x,lt=t.position.z-D.position.z;Math.hypot(_e,lt)<5&&(D.rotation.y=Math.atan2(_e,lt))}eu(D.userData,_,T,D.rotation.y)}}function qp(_,T){Xp(_,T),te(_);const v=n.maxMana||100,D=n.classId==="mage"?4.5:3;n.mana=Math.min(v,n.mana+D*_);const W=m("#mana-fill"),J=m("#mana-text");W&&(W.style.width=`${n.mana/v*100}%`),J&&(J.textContent=`${Math.ceil(n.mana)} / ${v}`);for(const ce of p)ce.userData.amount>0||(ce.userData.respawn-=_,ce.userData.respawn<=0&&(ce.userData.amount=ce.userData.maxAmount,ce.userData.respawn=0,ce.visible=!0));const ne=performance.now()*.003;for(let ce=x.length-1;ce>=0;ce--){const _e=x[ce];if(_e.rotation.y+=_*1.6,_e.position.y=_e.userData.baseY+Math.sin(ne+_e.userData.phase)*.16,t.position.distanceTo(_e.position)<1.6){Ce(_e.userData.type,1);const lt=_e.userData.rarity||"common",mn=lt==="common"?"":`[${Fi[lt].name}] `;f&&f.play("pickup"),s(`เก็บ${mn}${Jt[_e.userData.type].name} +1`),e.remove(_e),_e.geometry.dispose(),_e.material.dispose(),x.splice(ce,1)}}for(let ce=M.length-1;ce>=0;ce--){const _e=M[ce];_e.life-=_;const lt=Math.max(0,_e.life/_e.maxLife);_e.mesh.material.opacity=lt,_e.kind==="burst"&&_e.mesh.scale.setScalar(1+(1-lt)*2.2),_e.life<=0&&(e.remove(_e.mesh),_e.mesh.geometry.dispose(),_e.mesh.material.dispose(),M.splice(ce,1))}const ee=m("#interaction-hint");if(ee&&!w){let ce="";for(const _e of R)if(t.position.distanceTo(_e.position)<4){ce=_e.userData.npcId==="merchant"?"กด E คุย · B เปิดร้านค้า":"กด E / ใช้ เพื่อสนทนา";break}if(!ce){for(const _e of p)if(_e.userData.amount>0&&t.position.distanceTo(_e.position)<2.5){ce=`กด E / ใช้ เพื่อเก็บ${Jt[_e.userData.type].name}`;break}}ee.textContent=ce}gc(T),De+=_,De>.4&&(De=0,ft(),ae());const Ae=m("#map-panel");Ae&&!Ae.classList.contains("hidden")&&(Je+=_,Je>.25&&(Je=0,qt(T))),de()}function $p(){return{nodes:p.map(_=>({type:_.userData.type,x:_.position.x,z:_.position.z,amount:_.userData.amount,respawn:_.userData.respawn})),drops:x.map(_=>({type:_.userData.type,rarity:_.userData.rarity,x:_.position.x,z:_.position.z})),secrets:n.discoveredSecrets.slice()}}function Yp(_){if(_){Array.isArray(_.secrets)&&(n.discoveredSecrets=_.secrets.filter(T=>typeof T=="string"));for(const T of b)T.visible=!n.discoveredSecrets.includes(T.userData.secretId);if(Array.isArray(_.nodes)&&p.forEach((T,v)=>{const D=_.nodes[v];if(!D||D.type!==T.userData.type)return;const W=Pt.clamp(Math.round(Number(D.amount)||0),0,T.userData.maxAmount);T.userData.amount=W,T.userData.respawn=Math.max(0,Number(D.respawn)||0),T.visible=W>0}),Array.isArray(_.drops)){for(const T of x)e.remove(T),T.geometry.dispose(),T.material.dispose();x.length=0;for(const T of _.drops){if(!Jt[T.type]||!Number.isFinite(T.x)||!Number.isFinite(T.z))continue;const v=Fi[T.rarity]?T.rarity:ya(T.type);zt(T.type,new U(T.x,0,T.z),0,v)}}}}function Kp(){E();const _={};for(const[W,J]of Object.entries(n.inventory)){const ne=Math.floor(Number(J));Number.isFinite(ne)&&ne>0&&(_[W]=ne)}n.inventory=_,n.gold=Math.max(0,Math.floor(Number(n.gold)||0)),n.inventory.sword||(n.inventory.sword=1),n.inventory.leather||(n.inventory.leather=1);const T={might:5,vitality:3,arcana:3},v={};for(const[W,J]of Object.entries(T)){const ne=n.skills&&n.skills[W];v[W]=Pt.clamp(Math.round(Number(ne)||0),0,J)}n.skills=v,n.maxHp=100+v.vitality*15,n.maxMana=100+v.arcana*12,n.hp=Pt.clamp(n.hp,0,n.maxHp),n.mana=Pt.clamp(Number(n.mana)||0,0,n.maxMana),n.spells=n.spells.filter(W=>xs[W]),n.activeSpell=xs[n.activeSpell]&&n.spells.includes(n.activeSpell)?n.activeSpell:null;const D={};for(const W of Object.keys(As)){const J=n.quests[W];if(!J)continue;const ne=["active","done"].includes(J.status)?J.status:"locked";D[W]={status:ne,count:Pt.clamp(Math.round(Number(J.count)||0),0,As[W].target)}}n.quests=D}E();for(const[_,T]of Object.entries(fM))for(const[v,D]of T)nt(_,v,D);for(const _ of lM)b.push(N(_));for(const _ of Ma)R.push(Z(_));const ah=m("#dialogue-next");ah&&ah.addEventListener("click",()=>{if(!w)return;const _=w.npc;se(_)&&ue(_.quest),ui(),_.shop&&Vs()});const ch=m("#dialogue-ask-btn"),Ho=m("#dialogue-ask");if(ch&&Ho){const _=()=>{w&&(ko(Ho.value),Ho.value="")};ch.addEventListener("click",_),Ho.addEventListener("keydown",T=>{T.key==="Enter"&&(T.preventDefault(),_())})}const lh=m("#dialogue-close");lh&&lh.addEventListener("click",ui);const uh=m("#craft-list");uh&&uh.addEventListener("click",_=>{const T=_.target.closest("[data-recipe]");T&&$e(T.dataset.recipe)});const hh=m("#spell-list");hh&&hh.addEventListener("click",_=>{const T=_.target.closest("[data-spell]");T&&Be(T.dataset.spell)});const dh=m("#shop-buy");dh&&dh.addEventListener("click",_=>{const T=_.target.closest("[data-buy]");T&&!T.disabled&&zo(T.dataset.buy)});const fh=m("#shop-sell");fh&&fh.addEventListener("click",_=>{const T=_.target.closest("[data-sell]");T&&pc(T.dataset.sell)});const ph=m("#shop-close");ph&&ph.addEventListener("click",qr);const mh=m("#bounty-reroll");return mh&&mh.addEventListener("click",Ne),pe(),Ki(),Ee(),{owns:at,getCount:He,addItem:Ce,interact:Hs,getNearbySecretName:X,castSpell:Me,onEnemyKilled:ke,advanceQuest:Ue,update:qp,serializeWorld:$p,deserializeWorld:Yp,restoreState:Kp,drawWorldMap:qt,refreshInventoryUI:pe,refreshQuestUI:Ee,gearTier:Kt,gearUpgradeCost:O,upgradeGear:Nt,rerollBounties:Ne,ensureBounties:qe,closeDialogue:ui,openShop:Vs,closeShop:qr,toggleShop:mc,renderShop:Ki,addReputation:$,repValue:I,repTier:k,exploredPercent:ie,resetExploration:At,teleportToWaypoint:oh}}function mM(){let i=null,e=null,t=null,n=null,s=!1,r=!1,o=!0,a=!0,c=!0;function l(){if(i)return i;const R=window.AudioContext||window.webkitAudioContext;return R?(i=new R,e=i.createGain(),e.gain.value=o?.32:0,e.connect(i.destination),h(),u(),i):null}function h(){if(r||!i||!e)return;r=!0;const R=i.createGain();R.gain.value=.035,R.connect(e);for(const z of[55,82.5,110]){const Y=i.createOscillator();Y.type="sine",Y.frequency.value=z,Y.connect(R),Y.start()}const C=i.createOscillator(),w=i.createGain();C.frequency.value=.08,w.gain.value=.018,C.connect(w),w.connect(R.gain),C.start();const L=i.sampleRate*2,S=i.createBuffer(1,L,i.sampleRate),E=S.getChannelData(0);for(let z=0;z<L;z++)E[z]=Math.random()*2-1;const I=i.createBufferSource();I.buffer=S,I.loop=!0;const k=i.createBiquadFilter();k.type="bandpass",k.frequency.value=1800,k.Q.value=.4,t=i.createGain(),t.gain.value=a?.018:0,I.connect(k),k.connect(t),t.connect(e),I.start()}function u(){if(s||!i||!e)return;s=!0,n=i.createGain(),n.gain.value=0,n.connect(e);const R=i.createBiquadFilter();R.type="lowpass",R.frequency.value=850,R.Q.value=.6,R.connect(n),[110,164.81,220,277.18].forEach((w,L)=>{const S=i.createOscillator();S.type=L%2?"triangle":"sine",S.frequency.value=w;const E=i.createGain();E.gain.value=.055/(L+1),S.connect(E),E.connect(R),S.start();const I=i.createOscillator();I.frequency.value=.03+L*.011;const k=i.createGain();k.gain.value=2.2,I.connect(k),k.connect(S.detune),I.start()}),d()}function d(){if(!n||!i)return;const R=c&&o?.75:0;n.gain.setTargetAtTime(R,i.currentTime,.6)}function f(R){c=!!R,d()}function g(R,C,w,L,S){if(!i||!e)return;const E=i.currentTime,I=i.createOscillator(),k=i.createGain();I.type=w||"sine",I.frequency.setValueAtTime(R,E),S&&I.frequency.exponentialRampToValueAtTime(Math.max(20,S),E+C),k.gain.setValueAtTime(1e-4,E),k.gain.exponentialRampToValueAtTime(L,E+.012),k.gain.exponentialRampToValueAtTime(1e-4,E+C),I.connect(k),k.connect(e),I.start(E),I.stop(E+C+.02)}function y(R,C){if(!i||!e)return;const w=Math.floor(i.sampleRate*R),L=i.createBuffer(1,w,i.sampleRate),S=L.getChannelData(0);for(let z=0;z<w;z++)S[z]=(Math.random()*2-1)*(1-z/w);const E=i.createBufferSource();E.buffer=L;const I=i.createBiquadFilter();I.type="lowpass",I.frequency.value=1200;const k=i.createGain();k.gain.value=C,E.connect(I),I.connect(k),k.connect(e),E.start()}function m(R,C,w){R.forEach((L,S)=>{setTimeout(()=>g(L,C,"triangle",w),S*95)})}function p(R){if(!o)return;const C=l();if(C)switch(C.state==="suspended"&&C.resume(),R){case"attack":g(260,.13,"sawtooth",.075,110),y(.09,.045);break;case"hit":g(100,.16,"square",.06,55),y(.14,.09);break;case"pickup":g(640,.12,"sine",.07,980);break;case"coin":g(880,.1,"triangle",.06),setTimeout(()=>g(1320,.12,"triangle",.05),70);break;case"potion":g(420,.24,"sine",.07,760);break;case"spell":g(320,.3,"sine",.08,920);break;case"craft":m([392,523,659],.16,.05);break;case"blood":g(190,.26,"sine",.075,84),y(.13,.05);break;case"quest":m([523,659,784],.2,.06);break;case"level":m([523,659,784,1046],.24,.07);break;case"boss":g(110,.55,"sawtooth",.09,65),y(.35,.07);break;case"dodge":y(.12,.05);break;case"thunder":y(1.3,.14),g(52,1.1,"sine",.09,30);break}}function x(){const R=l();R&&R.state==="suspended"&&R.resume()}function b(R){o=!!R,e&&i&&e.gain.setTargetAtTime(o?.32:0,i.currentTime,.05),d()}function M(R){a=!!R,t&&i&&t.gain.setTargetAtTime(a?.018:0,i.currentTime,.2)}return{play:p,unlock:x,setEnabled:b,setWeather:M,setMusic:f}}function zd(i,e){if(e===ym)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),i;if(e===Kl||e===wf){let t=i.getIndex();if(t===null){const o=[],a=i.getAttribute("position");if(a!==void 0){for(let c=0;c<a.count;c++)o.push(c);i.setIndex(o),t=i.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),i}const n=t.count-2,s=[];if(e===Kl)for(let o=1;o<=n;o++)s.push(t.getX(0)),s.push(t.getX(o)),s.push(t.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(s.push(t.getX(o)),s.push(t.getX(o+1)),s.push(t.getX(o+2))):(s.push(t.getX(o+2)),s.push(t.getX(o+1)),s.push(t.getX(o)));s.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const r=i.clone();return r.setIndex(s),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),i}class gM extends Vr{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new MM(t)}),this.register(function(t){return new SM(t)}),this.register(function(t){return new LM(t)}),this.register(function(t){return new DM(t)}),this.register(function(t){return new IM(t)}),this.register(function(t){return new TM(t)}),this.register(function(t){return new EM(t)}),this.register(function(t){return new wM(t)}),this.register(function(t){return new AM(t)}),this.register(function(t){return new yM(t)}),this.register(function(t){return new RM(t)}),this.register(function(t){return new bM(t)}),this.register(function(t){return new PM(t)}),this.register(function(t){return new CM(t)}),this.register(function(t){return new vM(t)}),this.register(function(t){return new NM(t)}),this.register(function(t){return new UM(t)})}load(e,t,n,s){const r=this;let o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){const l=mo.extractUrlBase(e);o=mo.resolveURL(l,this.path)}else o=mo.extractUrlBase(e);this.manager.itemStart(e);const a=function(l){s?s(l):console.error(l),r.manager.itemError(e),r.manager.itemEnd(e)},c=new Kf(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(l){try{r.parse(l,o,function(h){t(h),r.manager.itemEnd(e)},a)}catch(h){a(h)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,s){let r;const o={},a={},c=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(c.decode(new Uint8Array(e,0,4))===op){try{o[ht.KHR_BINARY_GLTF]=new FM(e)}catch(u){s&&s(u);return}r=JSON.parse(o[ht.KHR_BINARY_GLTF].content)}else r=JSON.parse(c.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const l=new KM(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){const u=this.pluginCallbacks[h](l);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[u.name]=u,o[u.name]=!0}if(r.extensionsUsed)for(let h=0;h<r.extensionsUsed.length;++h){const u=r.extensionsUsed[h],d=r.extensionsRequired||[];switch(u){case ht.KHR_MATERIALS_UNLIT:o[u]=new xM;break;case ht.KHR_DRACO_MESH_COMPRESSION:o[u]=new OM(r,this.dracoLoader);break;case ht.KHR_TEXTURE_TRANSFORM:o[u]=new kM;break;case ht.KHR_MESH_QUANTIZATION:o[u]=new BM;break;default:d.indexOf(u)>=0&&a[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}l.setExtensions(o),l.setPlugins(a),l.parse(n,s)}parseAsync(e,t){const n=this;return new Promise(function(s,r){n.parse(e,t,s,r)})}}function _M(){let i={};return{get:function(e){return i[e]},add:function(e,t){i[e]=t},remove:function(e){delete i[e]},removeAll:function(){i={}}}}const ht={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class vM{constructor(e){this.parser=e,this.name=ht.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,s=t.length;n<s;n++){const r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let s=t.cache.get(n);if(s)return s;const r=t.json,c=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e];let l;const h=new ze(16777215);c.color!==void 0&&h.setRGB(c.color[0],c.color[1],c.color[2],xn);const u=c.range!==void 0?c.range:0;switch(c.type){case"directional":l=new Du(h),l.target.position.set(0,0,-1),l.add(l.target);break;case"point":l=new Lu(h),l.distance=u;break;case"spot":l=new c0(h),l.distance=u,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,l.angle=c.spot.outerConeAngle,l.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,l.target.position.set(0,0,-1),l.add(l.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return l.position.set(0,0,0),di(l,c),c.intensity!==void 0&&(l.intensity=c.intensity),l.name=t.createUniqueName(c.name||"light_"+e),s=Promise.resolve(l),t.cache.add(n,s),s}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,r=n.json.nodes[e],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(c){return n._getNodeRef(t.cache,a,c)})}}class xM{constructor(){this.name=ht.KHR_MATERIALS_UNLIT}getMaterialType(){return cn}extendParams(e,t,n){const s=[];e.color=new ze(1,1,1),e.opacity=1;const r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){const o=r.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],xn),e.opacity=o[3]}r.baseColorTexture!==void 0&&s.push(n.assignTexture(e,"map",r.baseColorTexture,Yt))}return Promise.all(s)}}class yM{constructor(e){this.parser=e,this.name=ht.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=s.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}}class MM{constructor(e){this.parser=e,this.name=ht.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ti}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){const a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new xe(a,a)}return Promise.all(r)}}class SM{constructor(e){this.parser=e,this.name=ht.KHR_MATERIALS_DISPERSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ti}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=s.extensions[this.name];return t.dispersion=r.dispersion!==void 0?r.dispersion:0,Promise.resolve()}}class bM{constructor(e){this.parser=e,this.name=ht.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ti}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(r)}}class TM{constructor(e){this.parser=e,this.name=ht.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ti}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[];t.sheenColor=new ze(0,0,0),t.sheenRoughness=0,t.sheen=1;const o=s.extensions[this.name];if(o.sheenColorFactor!==void 0){const a=o.sheenColorFactor;t.sheenColor.setRGB(a[0],a[1],a[2],xn)}return o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&r.push(n.assignTexture(t,"sheenColorMap",o.sheenColorTexture,Yt)),o.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(r)}}class EM{constructor(e){this.parser=e,this.name=ht.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ti}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&r.push(n.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(r)}}class wM{constructor(e){this.parser=e,this.name=ht.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ti}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&r.push(n.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;const a=o.attenuationColor||[1,1,1];return t.attenuationColor=new ze().setRGB(a[0],a[1],a[2],xn),Promise.all(r)}}class AM{constructor(e){this.parser=e,this.name=ht.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ti}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=s.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}}class RM{constructor(e){this.parser=e,this.name=ht.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ti}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&r.push(n.assignTexture(t,"specularIntensityMap",o.specularTexture));const a=o.specularColorFactor||[1,1,1];return t.specularColor=new ze().setRGB(a[0],a[1],a[2],xn),o.specularColorTexture!==void 0&&r.push(n.assignTexture(t,"specularColorMap",o.specularColorTexture,Yt)),Promise.all(r)}}class CM{constructor(e){this.parser=e,this.name=ht.EXT_MATERIALS_BUMP}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ti}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];return t.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&r.push(n.assignTexture(t,"bumpMap",o.bumpTexture)),Promise.all(r)}}class PM{constructor(e){this.parser=e,this.name=ht.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ti}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];return o.anisotropyStrength!==void 0&&(t.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(t.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&r.push(n.assignTexture(t,"anisotropyMap",o.anisotropyTexture)),Promise.all(r)}}class LM{constructor(e){this.parser=e,this.name=ht.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,s=n.textures[e];if(!s.extensions||!s.extensions[this.name])return null;const r=s.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,o)}}class DM{constructor(e){this.parser=e,this.name=ht.EXT_TEXTURE_WEBP}loadTexture(e){const t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;const o=r.extensions[t],a=s.images[o.source];let c=n.textureLoader;if(a.uri){const l=n.options.manager.getHandler(a.uri);l!==null&&(c=l)}return n.loadTextureImage(e,o.source,c)}}class IM{constructor(e){this.parser=e,this.name=ht.EXT_TEXTURE_AVIF}loadTexture(e){const t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;const o=r.extensions[t],a=s.images[o.source];let c=n.textureLoader;if(a.uri){const l=n.options.manager.getHandler(a.uri);l!==null&&(c=l)}return n.loadTextureImage(e,o.source,c)}}class NM{constructor(e){this.name=ht.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const s=n.extensions[this.name],r=this.parser.getDependency("buffer",s.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){const c=s.byteOffset||0,l=s.byteLength||0,h=s.count,u=s.byteStride,d=new Uint8Array(a,c,l);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(h,u,d,s.mode,s.filter).then(function(f){return f.buffer}):o.ready.then(function(){const f=new ArrayBuffer(h*u);return o.decodeGltfBuffer(new Uint8Array(f),h,u,d,s.mode,s.filter),f})})}else return null}}class UM{constructor(e){this.name=ht.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const s=t.meshes[n.mesh];for(const l of s.primitives)if(l.mode!==Hn.TRIANGLES&&l.mode!==Hn.TRIANGLE_STRIP&&l.mode!==Hn.TRIANGLE_FAN&&l.mode!==void 0)return null;const o=n.extensions[this.name].attributes,a=[],c={};for(const l in o)a.push(this.parser.getDependency("accessor",o[l]).then(h=>(c[l]=h,c[l])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(l=>{const h=l.pop(),u=h.isGroup?h.children:[h],d=l[0].count,f=[];for(const g of u){const y=new tt,m=new U,p=new us,x=new U(1,1,1),b=new Eu(g.geometry,g.material,d);for(let M=0;M<d;M++)c.TRANSLATION&&m.fromBufferAttribute(c.TRANSLATION,M),c.ROTATION&&p.fromBufferAttribute(c.ROTATION,M),c.SCALE&&x.fromBufferAttribute(c.SCALE,M),b.setMatrixAt(M,y.compose(m,p,x));for(const M in c)if(M==="_COLOR_0"){const R=c[M];b.instanceColor=new Zl(R.array,R.itemSize,R.normalized)}else M!=="TRANSLATION"&&M!=="ROTATION"&&M!=="SCALE"&&g.geometry.setAttribute(M,c[M]);It.prototype.copy.call(b,g),this.parser.assignFinalMaterial(b),f.push(b)}return h.isGroup?(h.clear(),h.add(...f),h):f[0]}))}}const op="glTF",so=12,Hd={JSON:1313821514,BIN:5130562};class FM{constructor(e){this.name=ht.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,so),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==op)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const s=this.header.length-so,r=new DataView(e,so);let o=0;for(;o<s;){const a=r.getUint32(o,!0);o+=4;const c=r.getUint32(o,!0);if(o+=4,c===Hd.JSON){const l=new Uint8Array(e,so+o,a);this.content=n.decode(l)}else if(c===Hd.BIN){const l=so+o;this.body=e.slice(l,l+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class OM{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=ht.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,s=this.dracoLoader,r=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},c={},l={};for(const h in o){const u=tu[h]||h.toLowerCase();a[u]=o[h]}for(const h in e.attributes){const u=tu[h]||h.toLowerCase();if(o[h]!==void 0){const d=n.accessors[e.attributes[h]],f=Sr[d.componentType];l[u]=f.name,c[u]=d.normalized===!0}}return t.getDependency("bufferView",r).then(function(h){return new Promise(function(u,d){s.decodeDracoFile(h,function(f){for(const g in f.attributes){const y=f.attributes[g],m=c[g];m!==void 0&&(y.normalized=m)}u(f)},a,l,xn,d)})})}}class kM{constructor(){this.name=ht.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class BM{constructor(){this.name=ht.KHR_MESH_QUANTIZATION}}class ap extends Do{constructor(e,t,n,s){super(e,t,n,s)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s*3+s;for(let o=0;o!==s;o++)t[o]=n[r+o];return t}interpolate_(e,t,n,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=a*2,l=a*3,h=s-t,u=(n-t)/h,d=u*u,f=d*u,g=e*l,y=g-l,m=-2*f+3*d,p=f-d,x=1-m,b=p-d+u;for(let M=0;M!==a;M++){const R=o[y+M+a],C=o[y+M+c]*h,w=o[g+M+a],L=o[g+M]*h;r[M]=x*R+b*C+m*w+p*L}return r}}const zM=new us;class HM extends ap{interpolate_(e,t,n,s){const r=super.interpolate_(e,t,n,s);return zM.fromArray(r).normalize().toArray(r),r}}const Hn={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},Sr={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Vd={9728:Qt,9729:Fn,9984:vf,9985:Ta,9986:ao,9987:ki},Gd={33071:rs,33648:Ia,10497:Rr},il={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},tu={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},is={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},VM={CUBICSPLINE:void 0,LINEAR:bo,STEP:So},sl={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function GM(i){return i.DefaultMaterial===void 0&&(i.DefaultMaterial=new Gt({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Gi})),i.DefaultMaterial}function Ms(i,e,t){for(const n in t.extensions)i[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function di(i,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(i.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function WM(i,e,t){let n=!1,s=!1,r=!1;for(let l=0,h=e.length;l<h;l++){const u=e[l];if(u.POSITION!==void 0&&(n=!0),u.NORMAL!==void 0&&(s=!0),u.COLOR_0!==void 0&&(r=!0),n&&s&&r)break}if(!n&&!s&&!r)return Promise.resolve(i);const o=[],a=[],c=[];for(let l=0,h=e.length;l<h;l++){const u=e[l];if(n){const d=u.POSITION!==void 0?t.getDependency("accessor",u.POSITION):i.attributes.position;o.push(d)}if(s){const d=u.NORMAL!==void 0?t.getDependency("accessor",u.NORMAL):i.attributes.normal;a.push(d)}if(r){const d=u.COLOR_0!==void 0?t.getDependency("accessor",u.COLOR_0):i.attributes.color;c.push(d)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c)]).then(function(l){const h=l[0],u=l[1],d=l[2];return n&&(i.morphAttributes.position=h),s&&(i.morphAttributes.normal=u),r&&(i.morphAttributes.color=d),i.morphTargetsRelative=!0,i})}function XM(i,e){if(i.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)i.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(i.morphTargetInfluences.length===t.length){i.morphTargetDictionary={};for(let n=0,s=t.length;n<s;n++)i.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function qM(i){let e;const t=i.extensions&&i.extensions[ht.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+rl(t.attributes):e=i.indices+":"+rl(i.attributes)+":"+i.mode,i.targets!==void 0)for(let n=0,s=i.targets.length;n<s;n++)e+=":"+rl(i.targets[n]);return e}function rl(i){let e="";const t=Object.keys(i).sort();for(let n=0,s=t.length;n<s;n++)e+=t[n]+":"+i[t[n]]+";";return e}function nu(i){switch(i){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function $M(i){return i.search(/\.jpe?g($|\?)/i)>0||i.search(/^data\:image\/jpeg/)===0?"image/jpeg":i.search(/\.webp($|\?)/i)>0||i.search(/^data\:image\/webp/)===0?"image/webp":i.search(/\.ktx2($|\?)/i)>0||i.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const YM=new tt;class KM{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new _M,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,s=-1,r=!1,o=-1;if(typeof navigator<"u"){const a=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(a)===!0;const c=a.match(/Version\/(\d+)/);s=n&&c?parseInt(c[1],10):-1,r=a.indexOf("Firefox")>-1,o=r?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&s<17||r&&o<98?this.textureLoader=new r0(this.options.manager):this.textureLoader=new d0(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Kf(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,s=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){const a={scene:o[0][s.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:s.asset,parser:n,userData:{}};return Ms(r,a,s),di(a,s),Promise.all(n._invokeAll(function(c){return c.afterRoot&&c.afterRoot(a)})).then(function(){for(const c of a.scenes)c.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let s=0,r=t.length;s<r;s++){const o=t[s].joints;for(let a=0,c=o.length;a<c;a++)e[o[a]].isBone=!0}for(let s=0,r=e.length;s<r;s++){const o=e[s];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const s=n.clone(),r=(o,a)=>{const c=this.associations.get(o);c!=null&&this.associations.set(a,c);for(const[l,h]of o.children.entries())r(h,a.children[l])};return r(n,s),s.name+="_instance_"+e.uses[t]++,s}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const s=e(t[n]);if(s)return s}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let s=0;s<t.length;s++){const r=e(t[s]);r&&n.push(r)}return n}getDependency(e,t){const n=e+":"+t;let s=this.cache.get(n);if(!s){switch(e){case"scene":s=this.loadScene(t);break;case"node":s=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":s=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":s=this.loadAccessor(t);break;case"bufferView":s=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":s=this.loadBuffer(t);break;case"material":s=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":s=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":s=this.loadSkin(t);break;case"animation":s=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":s=this.loadCamera(t);break;default:if(s=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!s)throw new Error("Unknown type: "+e);break}this.cache.add(n,s)}return s}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,s=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(s.map(function(r,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[ht.KHR_BINARY_GLTF].body);const s=this.options;return new Promise(function(r,o){n.load(mo.resolveURL(t.uri,s.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const s=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+s)})}loadAccessor(e){const t=this,n=this.json,s=this.json.accessors[e];if(s.bufferView===void 0&&s.sparse===void 0){const o=il[s.type],a=Sr[s.componentType],c=s.normalized===!0,l=new a(s.count*o);return Promise.resolve(new ln(l,o,c))}const r=[];return s.bufferView!==void 0?r.push(this.getDependency("bufferView",s.bufferView)):r.push(null),s.sparse!==void 0&&(r.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(r).then(function(o){const a=o[0],c=il[s.type],l=Sr[s.componentType],h=l.BYTES_PER_ELEMENT,u=h*c,d=s.byteOffset||0,f=s.bufferView!==void 0?n.bufferViews[s.bufferView].byteStride:void 0,g=s.normalized===!0;let y,m;if(f&&f!==u){const p=Math.floor(d/f),x="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+p+":"+s.count;let b=t.cache.get(x);b||(y=new l(a,p*f,s.count*f/h),b=new kf(y,f/h),t.cache.add(x,b)),m=new Ao(b,c,d%f/h,g)}else a===null?y=new l(s.count*c):y=new l(a,d,s.count*c),m=new ln(y,c,g);if(s.sparse!==void 0){const p=il.SCALAR,x=Sr[s.sparse.indices.componentType],b=s.sparse.indices.byteOffset||0,M=s.sparse.values.byteOffset||0,R=new x(o[1],b,s.sparse.count*p),C=new l(o[2],M,s.sparse.count*c);a!==null&&(m=new ln(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let w=0,L=R.length;w<L;w++){const S=R[w];if(m.setX(S,C[w*c]),c>=2&&m.setY(S,C[w*c+1]),c>=3&&m.setZ(S,C[w*c+2]),c>=4&&m.setW(S,C[w*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=g}return m})}loadTexture(e){const t=this.json,n=this.options,r=t.textures[e].source,o=t.images[r];let a=this.textureLoader;if(o.uri){const c=n.manager.getHandler(o.uri);c!==null&&(a=c)}return this.loadTextureImage(e,r,a)}loadTextureImage(e,t,n){const s=this,r=this.json,o=r.textures[e],a=r.images[t],c=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[c])return this.textureCache[c];const l=this.loadImageSource(t,n).then(function(h){h.flipY=!1,h.name=o.name||a.name||"",h.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(h.name=a.uri);const d=(r.samplers||{})[o.sampler]||{};return h.magFilter=Vd[d.magFilter]||Fn,h.minFilter=Vd[d.minFilter]||ki,h.wrapS=Gd[d.wrapS]||Rr,h.wrapT=Gd[d.wrapT]||Rr,h.generateMipmaps=!h.isCompressedTexture&&h.minFilter!==Qt&&h.minFilter!==Fn,s.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[c]=l,l}loadImageSource(e,t){const n=this,s=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(u=>u.clone());const o=s.images[e],a=self.URL||self.webkitURL;let c=o.uri||"",l=!1;if(o.bufferView!==void 0)c=n.getDependency("bufferView",o.bufferView).then(function(u){l=!0;const d=new Blob([u],{type:o.mimeType});return c=a.createObjectURL(d),c});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const h=Promise.resolve(c).then(function(u){return new Promise(function(d,f){let g=d;t.isImageBitmapLoader===!0&&(g=function(y){const m=new en(y);m.needsUpdate=!0,d(m)}),t.load(mo.resolveURL(u,r.path),g,void 0,f)})}).then(function(u){return l===!0&&a.revokeObjectURL(c),di(u,o),u.userData.mimeType=o.mimeType||$M(o.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),u});return this.sourceCache[e]=h,h}assignTexture(e,t,n,s){const r=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),r.extensions[ht.KHR_TEXTURE_TRANSFORM]){const a=n.extensions!==void 0?n.extensions[ht.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const c=r.associations.get(o);o=r.extensions[ht.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,c)}}return s!==void 0&&(o.colorSpace=s),e[t]=o,o})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const s=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){const a="PointsMaterial:"+n.uuid;let c=this.cache.get(a);c||(c=new Po,ri.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,c.sizeAttenuation=!1,this.cache.add(a,c)),n=c}else if(e.isLine){const a="LineBasicMaterial:"+n.uuid;let c=this.cache.get(a);c||(c=new Au,ri.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,this.cache.add(a,c)),n=c}if(s||r||o){let a="ClonedMaterial:"+n.uuid+":";s&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let c=this.cache.get(a);c||(c=n.clone(),r&&(c.vertexColors=!0),o&&(c.flatShading=!0),s&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(a,c),this.associations.set(c,this.associations.get(n))),n=c}e.material=n}getMaterialType(){return Gt}loadMaterial(e){const t=this,n=this.json,s=this.extensions,r=n.materials[e];let o;const a={},c=r.extensions||{},l=[];if(c[ht.KHR_MATERIALS_UNLIT]){const u=s[ht.KHR_MATERIALS_UNLIT];o=u.getMaterialType(),l.push(u.extendParams(a,r,t))}else{const u=r.pbrMetallicRoughness||{};if(a.color=new ze(1,1,1),a.opacity=1,Array.isArray(u.baseColorFactor)){const d=u.baseColorFactor;a.color.setRGB(d[0],d[1],d[2],xn),a.opacity=d[3]}u.baseColorTexture!==void 0&&l.push(t.assignTexture(a,"map",u.baseColorTexture,Yt)),a.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,a.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(l.push(t.assignTexture(a,"metalnessMap",u.metallicRoughnessTexture)),l.push(t.assignTexture(a,"roughnessMap",u.metallicRoughnessTexture))),o=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),l.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,a)})))}r.doubleSided===!0&&(a.side=Un);const h=r.alphaMode||sl.OPAQUE;if(h===sl.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,h===sl.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==cn&&(l.push(t.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new xe(1,1),r.normalTexture.scale!==void 0)){const u=r.normalTexture.scale;a.normalScale.set(u,u)}if(r.occlusionTexture!==void 0&&o!==cn&&(l.push(t.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==cn){const u=r.emissiveFactor;a.emissive=new ze().setRGB(u[0],u[1],u[2],xn)}return r.emissiveTexture!==void 0&&o!==cn&&l.push(t.assignTexture(a,"emissiveMap",r.emissiveTexture,Yt)),Promise.all(l).then(function(){const u=new o(a);return r.name&&(u.name=r.name),di(u,r),t.associations.set(u,{materials:e}),r.extensions&&Ms(s,u,r),u})}createUniqueName(e){const t=Lt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,s=this.primitiveCache;function r(a){return n[ht.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(c){return Wd(c,a,t)})}const o=[];for(let a=0,c=e.length;a<c;a++){const l=e[a],h=qM(l),u=s[h];if(u)o.push(u.promise);else{let d;l.extensions&&l.extensions[ht.KHR_DRACO_MESH_COMPRESSION]?d=r(l):d=Wd(new Xt,l,t),s[h]={primitive:l,promise:d},o.push(d)}}return Promise.all(o)}loadMesh(e){const t=this,n=this.json,s=this.extensions,r=n.meshes[e],o=r.primitives,a=[];for(let c=0,l=o.length;c<l;c++){const h=o[c].material===void 0?GM(this.cache):this.getDependency("material",o[c].material);a.push(h)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(c){const l=c.slice(0,c.length-1),h=c[c.length-1],u=[];for(let f=0,g=h.length;f<g;f++){const y=h[f],m=o[f];let p;const x=l[f];if(m.mode===Hn.TRIANGLES||m.mode===Hn.TRIANGLE_STRIP||m.mode===Hn.TRIANGLE_FAN||m.mode===void 0)p=r.isSkinnedMesh===!0?new yg(y,x):new Xe(y,x),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),m.mode===Hn.TRIANGLE_STRIP?p.geometry=zd(p.geometry,wf):m.mode===Hn.TRIANGLE_FAN&&(p.geometry=zd(p.geometry,Kl));else if(m.mode===Hn.LINES)p=new wg(y,x);else if(m.mode===Hn.LINE_STRIP)p=new ja(y,x);else if(m.mode===Hn.LINE_LOOP)p=new Ag(y,x);else if(m.mode===Hn.POINTS)p=new Za(y,x);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(p.geometry.morphAttributes).length>0&&XM(p,r),p.name=t.createUniqueName(r.name||"mesh_"+e),di(p,r),m.extensions&&Ms(s,p,m),t.assignFinalMaterial(p),u.push(p)}for(let f=0,g=u.length;f<g;f++)t.associations.set(u[f],{meshes:e,primitives:f});if(u.length===1)return r.extensions&&Ms(s,u[0],r),u[0];const d=new Wt;r.extensions&&Ms(s,d,r),t.associations.set(d,{meshes:e});for(let f=0,g=u.length;f<g;f++)d.add(u[f]);return d})}loadCamera(e){let t;const n=this.json.cameras[e],s=n[n.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new wn(Pt.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):n.type==="orthographic"&&(t=new ec(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),di(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let s=0,r=t.joints.length;s<r;s++)n.push(this._loadNodeShallow(t.joints[s]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(s){const r=s.pop(),o=s,a=[],c=[];for(let l=0,h=o.length;l<h;l++){const u=o[l];if(u){a.push(u);const d=new tt;r!==null&&d.fromArray(r.array,l*16),c.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[l])}return new Tu(a,c)})}loadAnimation(e){const t=this.json,n=this,s=t.animations[e],r=s.name?s.name:"animation_"+e,o=[],a=[],c=[],l=[],h=[];for(let u=0,d=s.channels.length;u<d;u++){const f=s.channels[u],g=s.samplers[f.sampler],y=f.target,m=y.node,p=s.parameters!==void 0?s.parameters[g.input]:g.input,x=s.parameters!==void 0?s.parameters[g.output]:g.output;y.node!==void 0&&(o.push(this.getDependency("node",m)),a.push(this.getDependency("accessor",p)),c.push(this.getDependency("accessor",x)),l.push(g),h.push(y))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c),Promise.all(l),Promise.all(h)]).then(function(u){const d=u[0],f=u[1],g=u[2],y=u[3],m=u[4],p=[];for(let b=0,M=d.length;b<M;b++){const R=d[b],C=f[b],w=g[b],L=y[b],S=m[b];if(R===void 0)continue;R.updateMatrix&&R.updateMatrix();const E=n._createAnimationTracks(R,C,w,L,S);if(E)for(let I=0;I<E.length;I++)p.push(E[I])}const x=new Jg(r,void 0,p);return di(x,s),x})}createNodeMesh(e){const t=this.json,n=this,s=t.nodes[e];return s.mesh===void 0?null:n.getDependency("mesh",s.mesh).then(function(r){const o=n._getNodeRef(n.meshCache,s.mesh,r);return s.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let c=0,l=s.weights.length;c<l;c++)a.morphTargetInfluences[c]=s.weights[c]}),o})}loadNode(e){const t=this.json,n=this,s=t.nodes[e],r=n._loadNodeShallow(e),o=[],a=s.children||[];for(let l=0,h=a.length;l<h;l++)o.push(n.getDependency("node",a[l]));const c=s.skin===void 0?Promise.resolve(null):n.getDependency("skin",s.skin);return Promise.all([r,Promise.all(o),c]).then(function(l){const h=l[0],u=l[1],d=l[2];d!==null&&h.traverse(function(f){f.isSkinnedMesh&&f.bind(d,YM)});for(let f=0,g=u.length;f<g;f++)h.add(u[f]);return h})}_loadNodeShallow(e){const t=this.json,n=this.extensions,s=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const r=t.nodes[e],o=r.name?s.createUniqueName(r.name):"",a=[],c=s._invokeOne(function(l){return l.createNodeMesh&&l.createNodeMesh(e)});return c&&a.push(c),r.camera!==void 0&&a.push(s.getDependency("camera",r.camera).then(function(l){return s._getNodeRef(s.cameraCache,r.camera,l)})),s._invokeAll(function(l){return l.createNodeAttachment&&l.createNodeAttachment(e)}).forEach(function(l){a.push(l)}),this.nodeCache[e]=Promise.all(a).then(function(l){let h;if(r.isBone===!0?h=new zf:l.length>1?h=new Wt:l.length===1?h=l[0]:h=new It,h!==l[0])for(let u=0,d=l.length;u<d;u++)h.add(l[u]);if(r.name&&(h.userData.name=r.name,h.name=o),di(h,r),r.extensions&&Ms(n,h,r),r.matrix!==void 0){const u=new tt;u.fromArray(r.matrix),h.applyMatrix4(u)}else r.translation!==void 0&&h.position.fromArray(r.translation),r.rotation!==void 0&&h.quaternion.fromArray(r.rotation),r.scale!==void 0&&h.scale.fromArray(r.scale);if(!s.associations.has(h))s.associations.set(h,{});else if(r.mesh!==void 0&&s.meshCache.refs[r.mesh]>1){const u=s.associations.get(h);s.associations.set(h,{...u})}return s.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],s=this,r=new Wt;n.name&&(r.name=s.createUniqueName(n.name)),di(r,n),n.extensions&&Ms(t,r,n);const o=n.nodes||[],a=[];for(let c=0,l=o.length;c<l;c++)a.push(s.getDependency("node",o[c]));return Promise.all(a).then(function(c){for(let h=0,u=c.length;h<u;h++)r.add(c[h]);const l=h=>{const u=new Map;for(const[d,f]of s.associations)(d instanceof ri||d instanceof en)&&u.set(d,f);return h.traverse(d=>{const f=s.associations.get(d);f!=null&&u.set(d,f)}),u};return s.associations=l(r),r})}_createAnimationTracks(e,t,n,s,r){const o=[],a=e.name?e.name:e.uuid,c=[];is[r.path]===is.weights?e.traverse(function(d){d.morphTargetInfluences&&c.push(d.name?d.name:d.uuid)}):c.push(a);let l;switch(is[r.path]){case is.weights:l=Ir;break;case is.rotation:l=Nr;break;case is.translation:case is.scale:l=Ur;break;default:n.itemSize===1?l=Ir:l=Ur;break}const h=s.interpolation!==void 0?VM[s.interpolation]:bo,u=this._getArrayFromAccessor(n);for(let d=0,f=c.length;d<f;d++){const g=new l(c[d]+"."+is[r.path],t.array,u,h);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),o.push(g)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=nu(t.constructor),s=new Float32Array(t.length);for(let r=0,o=t.length;r<o;r++)s[r]=t[r]*n;t=s}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const s=this instanceof Nr?HM:ap;return new s(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function jM(i,e,t){const n=e.attributes,s=new Wi;if(n.POSITION!==void 0){const a=t.json.accessors[n.POSITION],c=a.min,l=a.max;if(c!==void 0&&l!==void 0){if(s.set(new U(c[0],c[1],c[2]),new U(l[0],l[1],l[2])),a.normalized){const h=nu(Sr[a.componentType]);s.min.multiplyScalar(h),s.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const r=e.targets;if(r!==void 0){const a=new U,c=new U;for(let l=0,h=r.length;l<h;l++){const u=r[l];if(u.POSITION!==void 0){const d=t.json.accessors[u.POSITION],f=d.min,g=d.max;if(f!==void 0&&g!==void 0){if(c.setX(Math.max(Math.abs(f[0]),Math.abs(g[0]))),c.setY(Math.max(Math.abs(f[1]),Math.abs(g[1]))),c.setZ(Math.max(Math.abs(f[2]),Math.abs(g[2]))),d.normalized){const y=nu(Sr[d.componentType]);c.multiplyScalar(y)}a.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(a)}i.boundingBox=s;const o=new bi;s.getCenter(o.center),o.radius=s.min.distanceTo(s.max)/2,i.boundingSphere=o}function Wd(i,e,t){const n=e.attributes,s=[];function r(o,a){return t.getDependency("accessor",o).then(function(c){i.setAttribute(a,c)})}for(const o in n){const a=tu[o]||o.toLowerCase();a in i.attributes||s.push(r(n[o],a))}if(e.indices!==void 0&&!i.index){const o=t.getDependency("accessor",e.indices).then(function(a){i.setIndex(a)});s.push(o)}return pt.workingColorSpace!==xn&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${pt.workingColorSpace}" not supported.`),di(i,e),jM(i,e,t),Promise.all(s).then(function(){return e.targets!==void 0?WM(i,e.targets,t):i})}const ZM=190,JM=240,QM={Ash_Ground:{color:6050882,roughness:1},Dirt_Road:{color:6837566,roughness:1},Farm_Soil:{color:5586992,roughness:1},Cobblestone:{color:6512473,roughness:.95},Castle_Stone:{color:7236206,roughness:.9},Cliff_Rock:{color:6183772,roughness:1},Mountain_Rock:{color:5460303,roughness:1},Dark_Rock:{color:4473411,roughness:1},Grave_Stone:{color:8157816,roughness:.88},Dead_Wood:{color:4930090,roughness:1},Old_Wood:{color:7031857,roughness:.95},Timber:{color:4929317,roughness:1},Iron:{color:7829119,roughness:.42,metalness:.55},Roof_Slate:{color:4013386,roughness:.78},Roof_Tile:{color:8273453,roughness:.85},Plaster:{color:11510411,roughness:.95},Market_Cloth:{color:8336436,roughness:1},Old_Bone:{color:14010792,roughness:.8},Well_Water:{color:1451310,roughness:.1,metalness:.4},Cursed_Lake:{color:1319210,roughness:.08,metalness:.45},Dark_Window:{color:724245,roughness:.3},Window_Glow:{color:2364933,emissive:16754234,emissiveIntensity:1.9,roughness:.5},Lava:{color:3805445,emissive:16734750,emissiveIntensity:2.8,roughness:.55},Cursed_Crystal:{color:3084616,emissive:9387240,emissiveIntensity:1.1,roughness:.28,metalness:.3}},eS=new Set(["Ash_Ground","Dirt_Road","Farm_Soil","Plaster","Cursed_Lake","Well_Water","Lava","Window_Glow","Dark_Window"]),tS=new Set(["Ash_Ground","Dirt_Road","Farm_Soil","Cobblestone","Cursed_Lake","Well_Water","Lava"]),nS=new Set(["Dark_Rock"]),iS=new Set(["Ash_Ground","Dirt_Road","Farm_Soil","Cobblestone","Cliff_Rock","Mountain_Rock","Cursed_Lake","Well_Water","Lava","Window_Glow","Dark_Window","Roof_Slate","Roof_Tile","Market_Cloth","Dark_Rock"]),Xd=.85,fr=1;function sS(i,e,t){const n=fr,s=Math.max(1,Math.ceil((e.maxX-e.minX)/n)),r=Math.max(1,Math.ceil((e.maxZ-e.minZ)/n)),o=new Uint8Array(s*r),a=new Float32Array(s*r).fill(NaN),c=new tt,l=new U;let h=0;const u=(g,y)=>{const m=Math.min(s-1,Math.max(0,g)),p=Math.min(r-1,Math.max(0,y)),x=p*s+m;let b=a[x];return Number.isNaN(b)?(b=t(e.minX+(m+.5)*n,e.minZ+(p+.5)*n),a[x]=Number.isFinite(b)?b:0,a[x]):b},d=(g,y,m)=>{const p=Math.floor((g-e.minX)/n),x=Math.floor((y-e.minZ)/n);if(p<0||x<0||p>=s||x>=r)return;const b=x*s+p;o[b]||m-u(p,x)<Xd||(o[b]=1,h+=1)},f=(g,y,m,p,x)=>{const b=Math.hypot(m-g,p-y),M=Math.min(240,Math.ceil(b/(n*.5))+1);for(let R=0;R<=M;R++){const C=R/M,w=g+(m-g)*C,L=y+(p-y)*C;d(w,L,x);const S=(w-e.minX)/n-Math.floor((w-e.minX)/n),E=(L-e.minZ)/n-Math.floor((L-e.minZ)/n);S<.35?d(w-n*.55,L,x):S>.65&&d(w+n*.55,L,x),E<.35?d(w,L-n*.55,x):E>.65&&d(w,L+n*.55,x)}};return i.traverse(g=>{if(!g.isMesh||!g.visible||(Array.isArray(g.material)?g.material:[g.material]).some(M=>M&&iS.has(M.name)))return;const m=g.geometry;if(!m||!m.attributes||!m.attributes.position)return;c.copy(g.matrixWorld);const p=m.attributes.position,x=m.index,b=x?x.count:p.count;for(let M=0;M<b;M+=3){const R=x?x.getX(M):M,C=x?x.getX(M+1):M+1,w=x?x.getX(M+2):M+2;l.fromBufferAttribute(p,R).applyMatrix4(c);const L=l.x,S=l.y,E=l.z;l.fromBufferAttribute(p,C).applyMatrix4(c);const I=l.x,k=l.y,z=l.z;l.fromBufferAttribute(p,w).applyMatrix4(c);const Y=l.x,$=l.y,j=l.z,Q=Math.max(S,k,$),K=Math.min(S,k,$),me=u(Math.floor(((L+I+Y)/3-e.minX)/n),Math.floor(((E+z+j)/3-e.minZ)/n));if(!(Q-me<Xd)&&!(K-me>1.8)&&(f(L,E,I,z,Q),f(I,z,Y,j,Q),f(Y,j,L,E,Q),h>s*r))break}}),{minX:e.minX,minZ:e.minZ,cell:n,cols:s,rows:r,blocked:o,stamped:h}}function rS(i,e){i.onBeforeCompile=t=>{t.vertexShader=t.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vWorldDetailPos;`).replace("#include <begin_vertex>",`#include <begin_vertex>
  vWorldDetailPos = (modelMatrix * vec4(transformed, 1.0)).xyz;`),t.fragmentShader=t.fragmentShader.replace("#include <common>",`#include <common>
        varying vec3 vWorldDetailPos;
        float frHash(vec2 p) {
          p = fract(p * vec2(123.34, 456.21));
          p += dot(p, p + 45.32);
          return fract(p.x * p.y);
        }
        float frNoise(vec2 p) {
          vec2 i = floor(p);
          vec2 f = fract(p);
          f = f * f * (3.0 - 2.0 * f);
          float a = frHash(i);
          float b = frHash(i + vec2(1.0, 0.0));
          float c = frHash(i + vec2(0.0, 1.0));
          float d = frHash(i + vec2(1.0, 1.0));
          return mix(mix(a, b, f.x), mix(c, d, f.x), f.y);
        }`).replace("#include <color_fragment>",`#include <color_fragment>
        float macro = frNoise(vWorldDetailPos.xz * 0.16 + 3.0);
        float dA = frNoise(vWorldDetailPos.xz * 1.1 + vWorldDetailPos.y * 0.6);
        float dB = frNoise(vWorldDetailPos.xz * 5.3 + 11.0);
        ${e>2?"float dC = frNoise(vWorldDetailPos.xz * 19.0 + 41.0);":""}
        float detail = macro * 0.34 + dA * 0.34 + dB * 0.22${e>2?" + dC * 0.12":""};
        float shade = 0.48 + 1.05 * detail;
        diffuseColor.rgb *= vec3(
          shade,
          shade * (0.96 + 0.06 * detail),
          shade * (0.90 + 0.14 * detail)
        );`)},i.customProgramCacheKey=()=>"world-detail-surface"}function oS(i,e){if(!i||!i.isMeshStandardMaterial)return;const t=QM[i.name];t&&(i.color.setHex(t.color),t.roughness!==void 0&&(i.roughness=t.roughness),t.metalness!==void 0&&(i.metalness=t.metalness),t.emissive!==void 0&&(i.emissive.setHex(t.emissive),i.emissiveIntensity=t.emissiveIntensity??1),eS.has(i.name)||(i.flatShading=!0),e&&t.emissive===void 0&&t.metalness===void 0&&rS(i,e),i.needsUpdate=!0)}function aS({scene:i,baseUrl:e="assets/world/",detail:t=3}){const n=new gM,s=new Wt;s.name="StreamedWorld",i.add(s);const r=new Map,o=new Set,a=new Map;let c=null,l=null,h=!1,u=!1,d=-1;async function f(){try{const[M,R]=await Promise.all([fetch(`${e}world-meta.json`),fetch(`${e}heightmap.bin`)]);if(!M.ok||!R.ok)throw new Error("world assets unavailable");return c=await M.json(),l=new Float32Array(await R.arrayBuffer()),h=!0,!0}catch(M){return u=!0,console.error("WORLD STREAM ERROR:",M),!1}}function g(M,R){if(!h||!l||!c)return null;const C=c.heightmap;if(M<C.min||M>C.max||R<C.min||R>C.max)return null;const w=(M-C.min)/C.step,L=(R-C.min)/C.step,S=Math.floor(w),E=Math.floor(L),I=Math.min(C.grid,S+1),k=Math.min(C.grid,E+1),z=w-S,Y=L-E,$=C.grid+1,j=l[E*$+S],Q=l[E*$+I],K=l[k*$+S],me=l[k*$+I],ve=j+(Q-j)*z,De=K+(me-K)*z;return ve+(De-ve)*Y}function y(M){const R=M%c.grid,C=Math.floor(M/c.grid);return{x:-c.worldSize/2+(R+.5)*c.chunkSize,z:-c.worldSize/2+(C+.5)*c.chunkSize}}function m(M){M.traverse(R=>{R.isMesh&&(R.geometry&&R.geometry.dispose(),Array.isArray(R.material)?R.material.forEach(C=>C.dispose()):R.material&&R.material.dispose())})}function p(M,R,C){const w=`chunk-${R}-${C}`;o.add(w),n.load(`${e}chunks/${w}.glb`,L=>{if(o.delete(w),!h||r.has(w))return;L.scene.name=w,L.scene.traverse(I=>{if(!I.isMesh)return;I.receiveShadow=!0;const k=Array.isArray(I.material)?I.material:[I.material];if(k.forEach(z=>oS(z,t)),k.some(z=>z&&nS.has(z.name))){I.visible=!1;return}I.castShadow=!k.some(z=>z&&tS.has(z.name)),I.frustumCulled=!0}),s.add(L.scene),r.set(w,L.scene),L.scene.updateMatrixWorld(!0);const S=-c.worldSize/2+R*c.chunkSize,E=-c.worldSize/2+C*c.chunkSize;a.set(w,sS(L.scene,{minX:S,maxX:S+c.chunkSize,minZ:E,maxZ:E+c.chunkSize},(I,k)=>g(I,k)))},void 0,()=>o.delete(w))}function x(M){if(!h||!c)return;const R=Math.max(0,Math.min(c.grid-1,Math.floor((M.x+c.worldSize/2)/c.chunkSize))),w=Math.max(0,Math.min(c.grid-1,Math.floor((M.z+c.worldSize/2)/c.chunkSize)))*c.grid+R;if(w!==d){d=w;for(let L=0;L<c.grid;L++)for(let S=0;S<c.grid;S++){const E=L*c.grid+S,I=y(E),k=Math.hypot(I.x-M.x,I.z-M.z),z=`chunk-${S}-${L}`;if(k<=ZM&&!r.has(z)&&!o.has(z))p(E,S,L);else if(k>JM&&r.has(z)){const Y=r.get(z);s.remove(Y),m(Y),r.delete(z),a.delete(z)}}}}function b(M,R,C=.55){const L=C+fr*.15;for(const S of a.values()){if(M<S.minX-fr||R<S.minZ-fr||M>S.minX+S.cols*S.cell+fr||R>S.minZ+S.rows*S.cell+fr)continue;const E=Math.floor((M-S.minX)/S.cell),I=Math.floor((R-S.minZ)/S.cell);if(E>=0&&I>=0&&E<S.cols&&I<S.rows&&S.blocked[I*S.cols+E])return!0;for(let k=-1;k<=1;k++)for(let z=-1;z<=1;z++){const Y=E+k,$=I+z;if(Y<0||$<0||Y>=S.cols||$>=S.rows||!S.blocked[$*S.cols+Y])continue;const j=M-(S.minX+(Y+.5)*S.cell),Q=R-(S.minZ+($+.5)*S.cell);if(j*j+Q*Q<=L*L)return!0}}return!1}return{init:f,update:x,getHeight:g,blocked:b,getRegion:(M,R)=>rp(M,R),get loadedCount(){return r.size},get pendingCount(){return o.size},get collisionCells(){let M=0,R=0;for(const C of a.values())M+=C.blocked.length,R+=C.stamped;return{chunks:a.size,cells:M,solid:R}},get ready(){return h},get failed(){return u},root:s}}const Pa={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};class Wr{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const cS=new ec(-1,1,1,-1,0,1);class lS extends Xt{constructor(){super(),this.setAttribute("position",new wt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new wt([0,2,0,0,2,0],2))}}const uS=new lS;class ku{constructor(e){this._mesh=new Xe(uS,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,cS)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class cp extends Wr{constructor(e,t="tDiffuse"){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof vn?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=wo.clone(e.uniforms),this.material=new vn({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new ku(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class qd extends Wr{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){const s=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}}class hS extends Wr{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class dS{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const n=e.getSize(new xe);this._width=n.width,this._height=n.height,t=new $n(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:gi}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new cp(Pa),this.copyPass.material.blending=Hi,this.clock=new jf}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let n=!1;for(let s=0,r=this.passes.length;s<r;s++){const o=this.passes[s];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),o.needsSwap){if(n){const a=this.renderer.getContext(),c=this.renderer.state.buffers.stencil;c.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),c.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}qd!==void 0&&(o instanceof qd?n=!0:o instanceof hS&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new xe);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class fS extends Wr{constructor(e,t,n=null,s=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new ze}render(e,t,n){const s=e.autoClear;e.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),e.autoClear=s}}const pS={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new ze(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};class Fr extends Wr{constructor(e,t=1,n,s){super(),this.strength=t,this.radius=n,this.threshold=s,this.resolution=e!==void 0?new xe(e.x,e.y):new xe(256,256),this.clearColor=new ze(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new $n(r,o,{type:gi}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){const u=new $n(r,o,{type:gi});u.texture.name="UnrealBloomPass.h"+h,u.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(u);const d=new $n(r,o,{type:gi});d.texture.name="UnrealBloomPass.v"+h,d.texture.generateMipmaps=!1,this.renderTargetsVertical.push(d),r=Math.round(r/2),o=Math.round(o/2)}const a=pS;this.highPassUniforms=wo.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new vn({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];const c=[3,5,7,9,11];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(c[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new xe(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;const l=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=l,this.bloomTintColors=[new U(1,1,1),new U(1,1,1),new U(1,1,1),new U(1,1,1),new U(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=wo.clone(Pa.uniforms),this.blendMaterial=new vn({uniforms:this.copyUniforms,vertexShader:Pa.vertexShader,fragmentShader:Pa.fragmentShader,blending:Ds,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new ze,this._oldClearAlpha=1,this._basic=new cn,this._fsQuad=new ku(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),s=Math.round(t/2);this.renderTargetBright.setSize(n,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,s),this.renderTargetsVertical[r].setSize(n,s),this.separableBlurMaterials[r].uniforms.invSize.value=new xe(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(e,t,n,s,r){e.getClearColor(this._oldClearColor),this._oldClearAlpha=e.getClearAlpha();const o=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=n.texture,e.setRenderTarget(null),e.clear(),this._fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this._fsQuad.render(e);let a=this.renderTargetBright;for(let c=0;c<this.nMips;c++)this._fsQuad.material=this.separableBlurMaterials[c],this.separableBlurMaterials[c].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[c].uniforms.direction.value=Fr.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[c]),e.clear(),this._fsQuad.render(e),this.separableBlurMaterials[c].uniforms.colorTexture.value=this.renderTargetsHorizontal[c].texture,this.separableBlurMaterials[c].uniforms.direction.value=Fr.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[c]),e.clear(),this._fsQuad.render(e),a=this.renderTargetsVertical[c];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(n),this._fsQuad.render(e)),e.setClearColor(this._oldClearColor,this._oldClearAlpha),e.autoClear=o}_getSeparableBlurMaterial(e){const t=[];for(let n=0;n<e;n++)t.push(.39894*Math.exp(-.5*n*n/(e*e))/e);return new vn({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new xe(.5,.5)},direction:{value:new xe(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {
					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`})}_getCompositeMaterial(e){return new vn({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`})}}Fr.BlurDirectionX=new xe(1,0);Fr.BlurDirectionY=new xe(0,1);const Sa={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#elif defined( CUSTOM_TONE_MAPPING )

				gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};class mS extends Wr{constructor(){super(),this.uniforms=wo.clone(Sa.uniforms),this.material=new Gg({name:Sa.name,uniforms:this.uniforms,vertexShader:Sa.vertexShader,fragmentShader:Sa.fragmentShader}),this._fsQuad=new ku(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},pt.getTransfer(this._outputColorSpace)===Rt&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===hf?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===df?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===ff?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===fu?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===mf?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===gf?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===pf&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}const gS={uniforms:{tDiffuse:{value:null},uTime:{value:0},uVignette:{value:1},uGrain:{value:1},uAberration:{value:1},uSharpen:{value:1}},vertexShader:`
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,fragmentShader:`
    uniform sampler2D tDiffuse;
    uniform float uTime;
    uniform float uVignette;
    uniform float uGrain;
    uniform float uAberration;
    uniform float uSharpen;
    varying vec2 vUv;

    float hash(vec2 p) {
      return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453);
    }

    vec3 sampleAt(vec2 uv) {
      return texture2D(tDiffuse, uv).rgb;
    }

    void main() {
      vec2 dir = vUv - 0.5;
      float radius = dot(dir, dir);

      /* Subtle lens dispersion: colours separate towards the frame edge */
      vec2 shift = dir * radius * 0.010 * uAberration;
      vec3 c;
      c.r = sampleAt(vUv + shift).r;
      c.g = sampleAt(vUv).g;
      c.b = sampleAt(vUv - shift).b;

      /* Unsharp mask keeps the pixel-art subjects crisp after bloom */
      vec2 texel = vec2(1.0 / 1280.0, 1.0 / 720.0) * uSharpen;
      vec3 blur = (
        sampleAt(vUv + vec2(texel.x, 0.0)) +
        sampleAt(vUv - vec2(texel.x, 0.0)) +
        sampleAt(vUv + vec2(0.0, texel.y)) +
        sampleAt(vUv - vec2(0.0, texel.y))
      ) * 0.25;
      c += (c - blur) * 0.55 * uSharpen;

      float luma = dot(c, vec3(0.2126, 0.7152, 0.0722));

      /* Split toning: cold moonlight shadows, warm sunlit highlights */
      vec3 shadowTint = vec3(0.92, 0.97, 1.10);
      vec3 highlightTint = vec3(1.12, 1.03, 0.86);
      float weight = smoothstep(0.015, 0.55, luma);
      c *= mix(shadowTint, highlightTint, weight);

      /* Gentle colour lift so night scenes keep readable mid-tones */
      c = mix(vec3(luma), c, 1.16);
      c = pow(max(c, 0.0), vec3(1.12)) * 1.05;
      c += vec3(0.004, 0.005, 0.010);

      /* Shoulder soft-clip: keeps bright lava / windows from hard clipping */
      c = c / (1.0 + max(c - 1.0, 0.0) * 0.32);

      /* Vignette */
      c *= 1.0 - smoothstep(0.06, 0.36, radius) * 0.40 * uVignette;

      /* Animated film grain + dithering to kill gradient banding */
      float g = hash(vUv * vec2(1920.0, 1080.0) + fract(uTime) * 17.0) - 0.5;
      c += g * 0.014 * uGrain;
      c += (hash(vUv * 947.0) - 0.5) / 255.0;

      gl_FragColor = vec4(c, 1.0);
    }
  `};function _S(){const i=document.createElement("canvas");i.width=i.height=128;const e=i.getContext("2d"),t=e.createRadialGradient(64,64,0,64,64,64);return t.addColorStop(0,"rgba(255,255,255,0.85)"),t.addColorStop(.45,"rgba(255,255,255,0.28)"),t.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=t,e.fillRect(0,0,128,128),new kr(i)}function vS(){const i=document.createElement("canvas");i.width=256,i.height=128;const e=i.getContext("2d");for(let t=0;t<24;t++){const n=34+Math.random()*188,s=42+Math.random()*46,r=14+Math.random()*26,o=e.createRadialGradient(n,s,0,n,s,r);o.addColorStop(0,"rgba(255,255,255,0.42)"),o.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=o,e.beginPath(),e.arc(n,s,r,0,Math.PI*2),e.fill()}return new kr(i)}function xS({renderer:i,scene:e,camera:t,touch:n=!1}){const s=new $n(Math.max(1,innerWidth),Math.max(1,innerHeight),{type:gi,samples:n?0:4,colorSpace:xn}),r=new dS(i,s),o=new fS(e,t),a=new Fr(new xe(innerWidth,innerHeight),.46,.62,.82),c=new cp(gS),l=new mS;r.addPass(o),r.addPass(a),r.addPass(c),r.addPass(l);let h=!0;const u=vS(),d=[],f=n?6:12;for(let b=0;b<f;b++){const M=new Ns({map:u,transparent:!0,opacity:.2,depthWrite:!1,fog:!1,color:14148334}),R=new Lr(M),C=Math.random()*Math.PI*2,w=110+Math.random()*210;R.userData={a:C,r:w,y:62+Math.random()*48,speed:.004+Math.random()*.009,base:.08+Math.random()*.1,scale:70+Math.random()*90},e.add(R),d.push(R)}const g=_S(),y=[],m=n?10:20;for(let b=0;b<m;b++){const M=new Ns({map:g,transparent:!0,opacity:.06,depthWrite:!1,fog:!1,color:12175581}),R=new Lr(M);R.userData={ox:(Math.random()-.5)*56,oz:(Math.random()-.5)*56,oy:.7+Math.random()*1.8,phase:Math.random()*Math.PI*2,scale:13+Math.random()*15},e.add(R),y.push(R)}let p=0;function x(b,M,R){c.uniforms.uTime.value+=b;for(const C of d){const w=C.userData;w.a+=w.speed*b,C.position.set(R.x+Math.cos(w.a)*w.r,w.y,R.z+Math.sin(w.a)*w.r),C.scale.set(w.scale,w.scale*.26,1);const L=Math.max(0,1-Math.abs(M-.18)*3.2);C.material.opacity=w.base*(.5+.5*M)+L*.1,C.material.color.setHSL(.08-.5*(1-L),.28*L+.04,.62+.1*M)}for(const C of y){const w=C.userData,L=c.uniforms.uTime.value;C.position.set(R.x+w.ox+Math.sin(L*.12+w.phase)*2.5,w.oy,R.z+w.oz+Math.cos(L*.1+w.phase)*2.5),C.scale.set(w.scale,w.scale*.42,1),C.material.opacity=.035+.075*(1-M)}p=Math.max(0,p-b*2.6)}return{composer:r,bloom:a,getFlash:()=>p,strike(){p=1},setEnabled(b){h=!!b},setQuality(b){a.strength=b==="high"?.46:b==="medium"?.3:0,c.uniforms.uGrain.value=b==="low"?0:.85,c.uniforms.uVignette.value=b==="low"?0:1,c.uniforms.uAberration.value=b==="high"?1:b==="medium"?.5:0,c.uniforms.uSharpen.value=b==="high"?1:b==="medium"?.6:0},render(){h?r.render():i.render(e,t)},resize(b,M,R){r.setPixelRatio(R),r.setSize(b,M),a.setSize(b,M)},update:x}}const iu={tileSize:32,renderRadius:2,density:{mobile:{near:220,middle:120,far:48},desktop:{near:520,middle:280,far:120}}};function yS(i=!0){return i?iu.density.mobile:iu.density.desktop}const $d={wasteland:{name:"Wasteland",colors:[6249276,7301188,4804401],densityMultiplier:.65,heightMultiplier:.75},ravenhold:{name:"Ravenhold",colors:[4875064,6190402,3756080],densityMultiplier:1,heightMultiplier:1},deadwood:{name:"Deadwood",colors:[4216111,5727798,3097897],densityMultiplier:1.15,heightMultiplier:1.1},varnhal:{name:"Varnhal",colors:[5268282,7305797,4017709],densityMultiplier:.95,heightMultiplier:.9},emberpeak:{name:"Emberpeak",colors:[6250311,7564115,4936e3],densityMultiplier:.55,heightMultiplier:.65},mirefall:{name:"Mirefall",colors:[4873284,6122832,3754300],densityMultiplier:1.05,heightMultiplier:.85}};function MS(i){return $d[i]||$d.ravenhold}function SS(){const i=[],e=[];for(let o=0;o<5;o++){const a=o/5*Math.PI*2,c=.055+Math.random()*.035,l=.5+Math.random()*.62,h=i.length/3;for(let u=0;u<=3;u++){const d=u/3,f=l*d,g=d*d*(.14+o*.014),y=Math.cos(a)*g,m=Math.sin(a)*g,p=c*(1-d*.85);i.push(y-Math.sin(a)*p,f,m-Math.cos(a)*p),i.push(y+Math.sin(a)*p,f,m+Math.cos(a)*p)}for(let u=0;u<3;u++){const d=h+u*2,f=d+1,g=d+2,y=d+3;e.push(d,f,g,f,y,g)}}const s=new Xt;s.setAttribute("position",new wt(i,3)),s.setIndex(e),s.computeVertexNormals();const r=s.attributes.normal;for(let o=0;o<r.count;o++){const a=r.getX(o)*.35,c=r.getY(o)*.35+.65,l=r.getZ(o)*.35,h=Math.hypot(a,c,l)||1;r.setXYZ(o,a/h,c/h,l/h)}return r.needsUpdate=!0,s}function bS(){const i=new Gt({color:16777215,roughness:.95,metalness:0,side:Un,vertexColors:!1});return i.onBeforeCompile=e=>{e.uniforms.uGrassTime={value:0},e.vertexShader=e.vertexShader.replace("#include <common>",`#include <common>
       uniform float uGrassTime;
       varying float vGrassHeight;`),e.vertexShader=e.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>

       float grassHeight = position.y;

       
       float windWave =
         sin(uGrassTime * 1.8
         + instanceMatrix[3][0] * 0.15
         + instanceMatrix[3][2] * 0.15) * 0.7
         + sin(uGrassTime * 0.9
         + instanceMatrix[3][0] * 0.08) * 0.3;

       transformed.x += windWave * grassHeight * 0.18;
       transformed.z += windWave * grassHeight * 0.10;

       vGrassHeight = clamp(grassHeight, 0.0, 1.1);
      `),e.fragmentShader=e.fragmentShader.replace("#include <common>",`#include <common>
       varying float vGrassHeight;`),e.fragmentShader=e.fragmentShader.replace("#include <color_fragment>",`#include <color_fragment>
       float tip = smoothstep(0.0, 0.95, vGrassHeight);
       diffuseColor.rgb *= mix(0.76, 1.14, tip);`),i.userData.shader=e},i}function TS({centerX:i,centerZ:e,tileSize:t,count:n,getHeight:s,biome:r}){const o=SS(),a=bS(),c=new Eu(o,a,n),l=new It,h=r?.colors||[5401404,7439178,4085813];for(let u=0;u<n;u++){const d=i+(Math.random()-.5)*t,f=e+(Math.random()-.5)*t,g=s(d,f);if(g===null||!Number.isFinite(g)){l.position.set(0,-1e3,0),l.scale.setScalar(0),l.updateMatrix(),c.setMatrixAt(u,l.matrix);continue}const y=.55+Math.random()*.6;l.position.set(d,g,f),l.rotation.y=Math.random()*Math.PI*2,l.scale.setScalar(y),l.updateMatrix(),c.setMatrixAt(u,l.matrix);const m=new ze(h[Math.floor(Math.random()*h.length)]);m.multiplyScalar(.95+Math.random()*.32),m.offsetHSL((Math.random()-.5)*.02,0,0),c.setColorAt(u,m)}return c.instanceMatrix.needsUpdate=!0,c.instanceColor&&(c.instanceColor.needsUpdate=!0),c.computeBoundingSphere(),c}function ES(i,e){const t=i?.material?.userData?.shader;t?.uniforms?.uGrassTime&&(t.uniforms.uGrassTime.value=e)}function wS({scene:i,getHeight:e,getRegion:t,mobile:n=!0}){if(!i||typeof e!="function")throw new Error("VegetationManager requires scene and getHeight");const s=new Wt;s.name="ProceduralVegetation",i.add(s);const r=new Map,o=iu,a=yS(n);let c=0,l=NaN,h=NaN;const u=o.tileSize,d=o.renderRadius;function f(x,b){return`${x},${b}`}function g(x,b){const M=f(x,b);if(r.has(M))return;const R=x*u+u/2,C=b*u+u/2,w=e(R,C);if(w===null||!Number.isFinite(w))return;const L=Math.max(Math.abs(x-Math.floor(l/u)),Math.abs(b-Math.floor(h/u)));let S=a.far;L<=1?S=a.near:L<=2&&(S=a.middle);const E=t?t(R,C):null,I=typeof E=="string"?E:E?.id,k=MS(I);S=Math.max(0,Math.floor(S*k.densityMultiplier));const z=TS({centerX:R,centerZ:C,tileSize:u,count:S,getHeight:e,biome:k});z.name=`Grass_${M}`,z.castShadow=!1,z.receiveShadow=!1,z.frustumCulled=!0,s.add(z),r.set(M,z)}function y(x,b){for(const[M,R]of r){const[C,w]=M.split(",").map(Number);(Math.abs(C-x)>d||Math.abs(w-b)>d)&&(s.remove(R),R.geometry.dispose(),R.material.dispose(),r.delete(M))}}function m(x,b=0){if(!x)return;c+=Math.max(0,b);const M=Math.floor(x.x/u),R=Math.floor(x.z/u);if(M!==Math.floor(l/u)||R!==Math.floor(h/u)||r.size===0){l=x.x,h=x.z,y(M,R);for(let w=-d;w<=d;w++)for(let L=-d;L<=d;L++)g(M+w,R+L)}for(const w of r.values())ES(w,c)}function p(){for(const x of r.values())s.remove(x),x.geometry.dispose(),x.material.dispose();r.clear(),i.remove(s)}return{update:m,dispose:p,root:s,get tileCount(){return r.size}}}const fe=i=>document.querySelector(i),lp=fe("#game");if(!lp)throw new Error("Missing #game mount element");const ut={hp:fe("#hp-fill"),hpText:fe("#hp-text"),stamina:fe("#stamina-fill"),staminaText:fe("#stamina-text"),level:fe("#level-text"),crystals:fe("#crystal-count"),potions:fe("#potion-count"),quest:fe("#quest-text"),clock:fe("#clock"),toast:fe("#toast"),hint:fe("#interaction-hint"),settings:fe("#settings-panel"),inventory:fe("#inventory"),shop:fe("#shop-panel"),gold:fe("#gold-count"),hudGold:fe("#hud-gold"),hudCrystal:fe("#hud-crystal"),sideQuest:fe("#side-quest-text")},$t={chip:fe("#combo-chip"),count:fe("#combo-count"),tier:fe("#combo-tier"),bonus:fe("#combo-bonus"),fill:fe("#combo-fill"),best:fe("#combo-best"),layer:fe("#float-layer")},Ln=matchMedia("(pointer: coarse)").matches,Ye={quality:"medium",sensitivity:5,weather:!0,sound:!0,music:!0,postfx:!0,dayNightMode:"auto",fpsLimit:"auto",mobileLayout:"right"},Bt=mM();let yi=1,Pn="auto";const oi={sword:{name:"ดาบ",damage:1,range:3,cooldown:.55,rarity:"common",kind:"melee"},greatsword:{name:"ดาบใหญ่",damage:2,range:3.4,cooldown:.9,rarity:"common",kind:"melee"},axe:{name:"ขวาน",damage:1.7,range:2.9,cooldown:.72,rarity:"uncommon",kind:"melee"},staff:{name:"คทาเวท",damage:1.5,range:4.8,cooldown:.8,rarity:"uncommon",kind:"melee"},bow:{name:"ธนูพรานป่า",damage:1.4,range:18,cooldown:.62,rarity:"uncommon",kind:"ranged",projectile:"arrow",stamina:4},froststaff:{name:"คทาเหมันต์",damage:2.1,range:15,cooldown:1,rarity:"rare",kind:"ranged",projectile:"frost",stamina:7,slow:2.5},voidblade:{name:"ดาบเงาว่าง",damage:3.5,range:3.8,cooldown:.7,rarity:"epic",kind:"melee"}},ai={leather:{name:"เกราะหนัง",reduction:0,rarity:"common"},iron:{name:"เกราะเหล็ก",reduction:.25,rarity:"common"},ranger:{name:"เกราะพราน",reduction:.32,rarity:"uncommon"},shadow:{name:"เกราะเงา",reduction:.5,rarity:"rare"},runerobe:{name:"ผ้าคลุมรูน",reduction:.45,rarity:"rare"},dragonplate:{name:"เกราะมังกรร้าง",reduction:.65,rarity:"epic"}},Us={warrior:{name:"นักรบ",desc:"โจมตีระยะประชิด +20% · ลดความเสียหาย 10%",melee:1.2,damageReduction:.1},ranger:{name:"พราน",desc:"โจมตีระยะไกล +25% · ฟื้นพละกำลังเร็วขึ้น 60%",ranged:1.25,staminaRegen:1.6},mage:{name:"จอมเวท",desc:"พลังเวท +25% · ฟื้นมนตราเร็วขึ้น 50%",spell:1.25,manaRegen:1.5}},H={hp:100,stamina:100,crystals:0,potions:2,gold:60,level:1,xp:0,questStage:0,weapon:"sword",armor:"leather",classId:null,attackBonus:0,skillPoints:0,maxHp:100,maxMana:100,skills:{might:0,vitality:0,arcana:0},inventory:{sword:1,leather:1},mana:100,spells:[],activeSpell:null,quests:{},upgrades:{},bounties:[],dayTime:.72,weatherTime:0,weatherOn:!0,dead:!1,discoveredRegions:[],discoveredSecrets:[],reputation:{},flags:{},waypoints:[],explored:[],cartographer:0,dungeonCleared:!1,respawnPoint:null,comboBest:0};let Yd=0;function Ke(i){ut.toast.textContent=i,ut.toast.classList.add("show"),clearTimeout(Yd),Yd=setTimeout(()=>ut.toast.classList.remove("show"),2200)}function up(i=yi){return`forgotten-realm-save-v1-slot-${i}`}function un(){const i=H.maxHp>0?Pt.clamp(H.hp/H.maxHp*100,0,100):0;ut.hp.style.width=`${i}%`,ut.hpText.textContent=`${Math.ceil(H.hp)} / ${H.maxHp}`,ut.stamina.style.width=`${Math.ceil(H.stamina)}%`,ut.staminaText.textContent=`${Math.ceil(H.stamina)} / 100`,ut.level.textContent=String(H.level),ut.crystals.textContent=String(H.crystals),ut.potions.textContent=String(H.potions),ut.gold&&(ut.gold.textContent=String(H.gold)),ut.hudGold&&(ut.hudGold.textContent=String(H.gold)),ut.hudCrystal&&(ut.hudCrystal.textContent=String(H.crystals)),ut.sideQuest&&(ut.sideQuest.textContent=AS()),ut.quest.textContent=H.questStage===0?"เดินทางไปยังหอคอยร้าง":H.questStage===1?"กำจัดผู้พิทักษ์ที่เฝ้าซากโบราณ":"สำเร็จ! สำรวจดินแดนต่อไป"}function AS(){for(const[e,t]of Object.entries(H.quests||{})){const n=As[e];if(!(!n||!t||t.status!=="active"))return`${n.title} · ${Math.min(t.count||0,n.target)}/${n.target}`}const i=(H.bounties||[]).find(e=>e&&!e.done);return i?`${i.title} · ${Math.min(i.count||0,i.target)}/${i.target}`:""}const hp=.1,dp=.04;function su(){return 1+hp*it.gearTier("weapon")}function fp(){const i=ai[H.armor]||ai.leather;return Math.min(.85,i.reduction+dp*it.gearTier("armor"))}function RS(){for(const i of["weapon","armor"]){const e=fe(`#upgrade-${i}-info`),t=fe(`#upgrade-${i}`);if(!e&&!t)continue;const n=it.gearTier(i),s=it.gearUpgradeCost(i),r=i==="armor"?ai[H.armor]||ai.leather:oi[H.weapon]||oi.sword,o=i==="armor"?`ลดดาเมจ +${Math.round(dp*100)}%/ระดับ`:`พลังโจมตี +${Math.round(hp*100)}%/ระดับ`;e&&(e.textContent=s?`${r.name} +${n} · ${s.gold} ทอง · แร่ ${s.ore} · ผลึก ${s.crystals} (${o})`:`${r.name} +${n} · ระดับสูงสุด`),t&&(t.disabled=!s||!it.owns(i==="armor"?H.armor:H.weapon),t.textContent=s?`อัปเกรด +${n+1}`:"เต็มระดับ")}}function $i(){const i=oi[H.weapon]||oi.sword,e=ai[H.armor]||ai.leather,t=it.gearTier("weapon"),n=it.gearTier("armor"),s=fe("#equipped-weapon"),r=fe("#equipped-armor"),o=fe("#attack-stat"),a=fe("#defense-stat"),c=fe("#skill-points"),l=u=>u>0?` +${u}`:"";s&&(s.textContent=`${i.name}${l(t)} [${Fi[i.rarity||"common"].name}]`,s.style.color=Fi[i.rarity||"common"].color),r&&(r.textContent=`${e.name}${l(n)} [${Fi[e.rarity||"common"].name}]`,r.style.color=Fi[e.rarity||"common"].color),o&&(o.textContent=((i.damage+H.attackBonus)*su()).toFixed(1)),a&&(a.textContent=`${Math.round(fp()*100)}%`),c&&(c.textContent=String(H.skillPoints));const h=fe("#combo-best");h&&(h.textContent=String(H.comboBest||0)),RS();for(const u of Object.keys(oi)){const d=fe(`#weapon-${u}`);d&&(d.classList.toggle("selected",H.weapon===u),d.disabled=!it.owns(u))}for(const u of Object.keys(ai)){const d=fe(`#armor-${u}`);d&&(d.classList.toggle("selected",H.armor===u),d.disabled=!it.owns(u))}}function CS(i){!oi[i]||!it.owns(i)||(H.weapon=i,$i(),Ke(`เปลี่ยนอาวุธ: ${oi[i].name}`))}function PS(i){!ai[i]||!it.owns(i)||(H.armor=i,$i(),Ke(`สวมใส่: ${ai[i].name}`))}function Bu(){for(const i of Object.keys(Us)){const e=document.querySelector(`[data-class="${i}"]`);e&&(e.classList.toggle("selected",H.classId===i),e.title=Us[i].desc)}}function LS(i){const e=Us[i];e&&(H.classId=H.classId===i?null:i,Bu(),$i(),un(),Ke(H.classId?`สายอาชีพ: ${e.name} — ${e.desc}`:"ยกเลิกสายอาชีพแล้ว"))}const pp={might:{name:"พลังโจมตี",max:5,desc:"เพิ่มพลังโจมตี +0.5 ต่อระดับ"},vitality:{name:"ความทนทาน",max:3,desc:"เพิ่ม HP สูงสุด +15 ต่อระดับ"},arcana:{name:"พลังเวท",max:3,desc:"เพิ่ม MP สูงสุด +12 และพลังเวท +10% ต่อระดับ"}};function DS(i){const e=pp[i];if(!e)return;const t=H.skills[i]||0;if(t>=e.max)return Ke("อัปเกรดถึงขีดจำกัดแล้ว");if(H.skillPoints<=0)return Ke("ไม่มีแต้มทักษะ");H.skillPoints--,H.skills[i]=t+1,i==="might"?H.attackBonus=Math.min(5,H.skills.might*.5):i==="vitality"?(H.maxHp=100+H.skills.vitality*15,H.hp=Math.min(H.maxHp,H.hp+15)):i==="arcana"&&(H.maxMana=100+H.skills.arcana*12,H.mana=Math.min(H.maxMana,H.mana+12)),nc(),$i(),un(),Ke(`อัปเกรด ${e.name} เป็นระดับ ${H.skills[i]}`)}function nc(){const i=fe("#skill-points");i&&(i.textContent=String(H.skillPoints));const e=fe("#skill-points-tree");e&&(e.textContent=String(H.skillPoints));const t=fe("#skill-tree");t&&(t.innerHTML=Object.entries(pp).map(([n,s])=>{const r=H.skills[n]||0,o=Array.from({length:s.max},(c,l)=>`<i class="${l<r?"on":""}"></i>`).join(""),a=r>=s.max||H.skillPoints<=0?" disabled":"";return`<div class="skill-node"><b>${s.name}</b><div class="pips">${o}</div><small>${s.desc}</small><button type="button" data-skill="${n}"${a}>อัปเกรด</button></div>`}).join(""))}const dt=new vg;dt.background=new ze(527640);dt.fog=new bu(1779252,.0032);const hn=new wn(62,innerWidth/innerHeight,.1,800),sn=new rM({antialias:!0,powerPreference:"high-performance"});sn.outputColorSpace=Yt;sn.toneMapping=fu;sn.toneMappingExposure=1.32;sn.setPixelRatio(Math.min(devicePixelRatio||1,Ln?1.35:1.75));sn.setSize(innerWidth,innerHeight);sn.shadowMap.enabled=!0;sn.shadowMap.type=lf;sn.domElement.style.touchAction="none";sn.domElement.setAttribute("aria-label","Game view");lp.appendChild(sn.domElement);const Fs=xS({renderer:sn,scene:dt,camera:hn,touch:Ln}),mp=new U(-24,40,30).normalize(),gp=new U(-18,28,12).normalize(),zi=new Xe(new Lo(520,40,28),new vn({uniforms:{uSun:{value:0},uSunDir:{value:mp},uMoonDir:{value:gp},uPost:{value:1},uExposure:{value:1.32}},side:An,depthWrite:!1,fog:!1,vertexShader:`
      varying vec3 vDir;
      void main() {
        vDir = normalize(position);
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,fragmentShader:`
  uniform float uSun;
  uniform float uPost;
  uniform float uExposure;
  uniform vec3 uSunDir;
  uniform vec3 uMoonDir;
  varying vec3 vDir;

  float hash3(vec3 p) {
    p = fract(p * 0.3183099 + vec3(0.1, 0.17, 0.13));
    p *= 17.0;
    return fract(p.x * p.y * p.z * (p.x + p.y + p.z));
  }

  void main() {
    vec3 d = normalize(vDir);
    float h = d.y;

    vec3 nightHorizon = vec3(.075,.095,.17);
    vec3 nightZenith  = vec3(.010,.015,.040);
    vec3 dayHorizon   = vec3(.38,.47,.60);
    vec3 dayZenith    = vec3(.06,.145,.34);

    float dusk = max(0.0, 1.0 - abs(uSun - 0.18) * 3.2);

    vec3 horizon = mix(nightHorizon, dayHorizon, uSun);
    vec3 zenith  = mix(nightZenith,  dayZenith,  uSun);
    horizon = mix(horizon, vec3(.78,.40,.22), dusk * .55);

    vec3 col = mix(horizon, zenith, smoothstep(-.05, .78, h));

    // Warm sun halo and disc, anchored to the real light direction
    float sunDot = max(dot(d, normalize(uSunDir)), 0.0);
    float halo = pow(sunDot, 7.0) * .26 + pow(sunDot, 60.0) * .55;
    col += vec3(1.0, .74, .45) * halo * uSun;
    float sunDisc = smoothstep(.9994, .9998, sunDot);
    col = mix(col, vec3(1.0, .95, .82), sunDisc * uSun);

    // Moon halo and disc
    float moonDot = max(dot(d, normalize(uMoonDir)), 0.0);
    col += vec3(.26, .33, .52) * pow(moonDot, 26.0) * (1.0 - uSun);
    float moonDisc = smoothstep(.9992, .9998, moonDot);
    col = mix(col, vec3(.90, .94, 1.0), moonDisc * (1.0 - uSun));

    // Procedural stars twinkling at night
    if (h > 0.02) {
      vec3 cell = floor(d * 240.0);
      float star = step(0.9972, hash3(cell));
      float twinkle = 0.55 + 0.45 * sin(uSun * 40.0 + hash3(cell + 7.0) * 40.0);
      float fade = smoothstep(0.0, 0.28, h);
      col += vec3(.85,.92,1.0) * star * twinkle * (1.0 - uSun) * fade * 1.6;
    }

    // Horizon haze so the sky melts into the fog instead of banding
    col = mix(col, horizon, pow(1.0 - clamp(h, 0.0, 1.0), 6.0) * 0.35);

    // Authored in display space. With the HDR composer the value must be
    // linearised for OutputPass; on the direct path the sky is the only
    // material skipping that pass, so tone map and encode it here instead.
    vec3 linear = pow(max(col, vec3(0.0)), vec3(2.2));
    if (uPost > 0.5) {
      gl_FragColor = vec4(linear, 1.0);
    } else {
      vec3 c = linear * uExposure;
      c = clamp((c * (2.51 * c + 0.03)) / (c * (2.43 * c + 0.59) + 0.14), 0.0, 1.0);
      gl_FragColor = vec4(pow(c, vec3(1.0 / 2.2)), 1.0);
    }
  }
`}));zi.renderOrder=-1;dt.add(zi);const _p=new o0(11124957,2827549,1.2);dt.add(_p);const vp=new h0(10465996,.55);dt.add(vp);const dn=new Du(12571903,1.8);dn.position.set(-18,28,12);dn.castShadow=!0;dn.shadow.mapSize.set(Ln?1024:2048,Ln?1024:2048);Object.assign(dn.shadow.camera,{left:-34,right:34,top:34,bottom:-34,near:.5,far:140});dn.shadow.bias=-4e-4;dn.shadow.normalBias=.045;dt.add(dn);dt.add(dn.target);const fn=new Du(16767400,2.2);fn.position.set(-24,40,30);fn.castShadow=!0;fn.shadow.mapSize.set(Ln?1024:2048,Ln?1024:2048);Object.assign(fn.shadow.camera,{left:-34,right:34,top:34,bottom:-34,near:.5,far:140});fn.shadow.bias=-4e-4;fn.shadow.normalBias=.045;dt.add(fn);dt.add(fn.target);const ic=new Lu(10204653,1,65);ic.position.set(-16,12,-18);dt.add(ic);const li=new Wt;li.name="FallbackWorld";dt.add(li);const sc=new Xe(new as(180,180),new Gt({color:3422770,roughness:1}));sc.rotation.x=-Math.PI/2;sc.receiveShadow=!0;li.add(sc);const Vn=aS({scene:dt,baseUrl:"/assets/world/",detail:Ln?2:3}),IS=wS({scene:dt,getHeight:(i,e)=>Vn.getHeight(i,e),getRegion:(i,e)=>Vn.getRegion(i,e),mobile:Ln});let Kd=!1;Vn.init().then(i=>{i||Ke("ไม่พบข้อมูลโลกกว้าง ใช้แผนที่ต้นแบบแทน")});const NS=new ze(5002563),US=new ze(6121814),cs={stone:new Gt({color:4540231,roughness:1}),bark:new Gt({color:3351836,roughness:1}),leaves:new Gt({color:2505515,roughness:1}),ruin:new Gt({color:5592666,roughness:1})};for(let i=0;i<24;i++){const e=new Xe(new xi(2.2,.12,1.5),cs.stone);e.position.set(Math.sin(i*.32)*1.4,.04,-i*2.5),e.rotation.y=Math.sin(i)*.12,e.receiveShadow=!0,e.castShadow=!0,li.add(e)}const Oi=[];function jd(i,e,t=1){const n=new Wt,s=new Xe(new Xi(.18*t,.32*t,3.2*t,6),cs.bark);s.position.y=1.6*t,s.castShadow=!0,n.add(s);for(let r=0;r<3;r++){const o=new Xe(new ks((1.25-r*.18)*t,2.4*t,7),cs.leaves);o.position.set((r-1)*.25*t,(3.1+r*.52)*t,0),o.castShadow=!0,n.add(o)}n.position.set(i,0,e),li.add(n),Oi.push({x:i,z:e,radius:.85*t,fallback:!0})}let ol=417;function St(){return ol=ol*16807%2147483647,(ol-1)/2147483646}for(let i=0;i<92;i++){const e=10-i*3.2;jd(-7-St()*10,e,.7+St()*.8),jd(7+St()*10,e-1,.7+St()*.8)}const FS=new Gt({color:4811581,roughness:1,side:Un,emissive:1451023,emissiveIntensity:.35}),OS=new as(.16,.7),xp=Ln?900:1800,rc=new Eu(OS,FS,xp),hr=new It;for(let i=0;i<xp;i++){const e=(St()-.5)*150,t=(St()-.5)*150;Math.abs(e)<2.5&&t>-65&&t<12?hr.position.set(e+5,.32,t):hr.position.set(e,.32,t),hr.rotation.set(0,St()*Math.PI,(St()-.5)*.25);const n=.5+St()*1.1;hr.scale.set(n,n,n),hr.updateMatrix(),rc.setMatrixAt(i,hr.matrix)}rc.instanceMatrix.needsUpdate=!0;rc.frustumCulled=!0;li.add(rc);const kS=new Gt({color:4278615,roughness:1});for(let i=0;i<18;i++){const e=new Xe(new ks(7+St()*9,15+St()*18,7),kS),t=i%2===0?-1:1;e.position.set(t*(48+St()*28),5,20-i*8),e.rotation.y=St()*Math.PI,e.castShadow=!0,e.receiveShadow=!0,li.add(e)}const BS=new Xf([new U(-75,.08,-72),new U(-35,.08,-68),new U(0,.08,-74),new U(35,.08,-67),new U(75,.08,-73)]),zS=new Xe(new Cu(BS,80,2.8,8,!1),new Gt({color:2506585,roughness:.2,metalness:.25,transparent:!0,opacity:.88}));li.add(zS);const oc=new Wt;for(let i=0;i<4;i++){const e=new Xe(new xi(1.1,5,1.1),cs.ruin);e.position.set(i%2*7-3.5,2.5,Math.floor(i/2)*7-3.5),e.rotation.z=(St()-.5)*.08,e.castShadow=!0,e.receiveShadow=!0,oc.add(e)}const zu=new Xe(new xi(10,.35,10),cs.stone);zu.position.y=.15;zu.receiveShadow=!0;oc.add(zu);oc.position.set(13,0,-48);li.add(oc);for(let i=0;i<4;i++)Oi.push({x:13+i%2*7-3.5,z:-48+Math.floor(i/2)*7-3.5,radius:.9,fallback:!0});const ac=new Wt,Hu=new Xe(new Xi(2.2,2.7,8,8),cs.ruin);Hu.position.y=4;Hu.castShadow=!0;ac.add(Hu);const yp=new Xe(new ks(2.1,2.8,8),new Gt({color:2369073}));yp.position.y=9.1;ac.add(yp);ac.position.set(0,0,-48);li.add(ac);Oi.push({x:0,z:-48,radius:2.7,fallback:!0});const Bs=new Xe(new Dr(1,.12,8,20),new Gt({color:7102865,emissive:3353176,emissiveIntensity:.9,roughness:.34}));Bs.position.set(31,2,17);Bs.rotation.y=-.5;dt.add(Bs);const cc=new Wt,Vu=new Xe(new Xi(9,9.6,.4,12),new Gt({color:2435891,roughness:1}));Vu.position.y=.2;Vu.receiveShadow=!0;cc.add(Vu);for(let i=0;i<8;i++){const e=i/8*Math.PI*2,t=new Xe(new Xi(.65,.9,4.5,6),cs.ruin);t.position.set(Math.cos(e)*8.2,2.25,Math.sin(e)*8.2),t.castShadow=!0,t.receiveShadow=!0,cc.add(t),Oi.push({x:-28+t.position.x,z:-87+t.position.z,radius:.9})}cc.position.set(-28,0,-87);dt.add(cc);const Mi=new Wt,Gu=new Xe(new Dr(1.8,.22,10,28),new Gt({color:10250968,emissive:6171296,emissiveIntensity:1.8,roughness:.3}));Gu.position.y=2.1;Mi.add(Gu);const Wu=new Xe(new Br(1.62,28),new cn({color:1772846,transparent:!0,opacity:.82,side:Un}));Wu.position.y=2.1;Mi.add(Wu);for(let i=0;i<4;i++){const e=new Xe(new Qa(.8+i*.12,0),cs.ruin),t=i/4*Math.PI*2;e.position.set(Math.cos(t)*2.6,.45,Math.sin(t)*2.6),e.castShadow=!0,Mi.add(e)}Mi.position.set(-24,0,-77);dt.add(Mi);const re=new Wt,_r=new Wt;re.add(_r);const lc=document.createElement("canvas");lc.width=128;lc.height=128;const HS=lc.getContext("2d");function VS(i,e,t,n,s){const r=(c,l,h,u,d)=>{i.fillStyle=d,i.fillRect(e+c,t+l,h,u)},o=s===1?-1:s===3?1:0,a=n===1||n===3;r(7,14,5,12,"#70283d"),r(9,20,4,9,"#9b3547"),r(20,14,5,12,"#70283d"),r(11,25,4,5,"#25283a"),r(18,25,4,5,"#25283a"),r(10+o,29,6,2,"#171923"),r(18-o,29,6,2,"#171923"),r(10,14,13,12,"#343b50"),r(12,15,9,8,"#596078"),r(14,17,5,7,"#252b3c"),r(15,21,3,3,"#c19a55"),r(7,16,4,8,"#343b50"),r(22,16,4,8,"#343b50"),r(7,22,4,3,"#d5a47e"),r(22,22,4,3,"#d5a47e"),r(9,3,14,4,"#171722"),r(6,7,20,9,"#282638"),r(8,5,16,3,"#3c354b"),r(8,9,16,8,"#e4b18b"),r(7,7,5,5,"#211e2c"),r(11,5,5,4,"#211e2c"),r(17,6,6,4,"#211e2c"),r(22,8,4,5,"#211e2c"),n===0?(r(11,11,3,2,"#20202b"),r(19,11,3,2,"#20202b"),r(15,14,3,1,"#a96e65")):a?(r(19,11,3,2,"#20202b"),r(23,13,2,2,"#d99b79")):r(8,10,16,6,"#292638"),r(8,25,3,4,"#a63d50")}for(let i=0;i<4;i++)for(let e=0;e<4;e++)VS(HS,e*32,i*32,i,e);const hs=new kr(lc);hs.magFilter=Qt;hs.minFilter=Qt;hs.generateMipmaps=!1;hs.colorSpace=Yt;hs.repeat.set(.25,.25);hs.offset.set(0,.75);const br=new Lr(new Ns({map:hs,transparent:!0,alphaTest:.05,depthWrite:!1}));br.scale.set(1.55,2.05,1);br.position.y=1.03;_r.add(br);const Xu=new Xe(new Br(.48,16),new cn({color:0,transparent:!0,opacity:.28,depthWrite:!1}));Xu.rotation.x=-Math.PI/2;Xu.position.y=.025;re.add(Xu);re.position.set(18,0,12);dt.add(re);function On(i,e,t){return Vn.getHeight(i,e)}const uc=[],GS=new Gt({color:8087752,emissive:3877504,emissiveIntensity:1.5,roughness:.25}),WS=(()=>{const i=document.createElement("canvas");i.width=i.height=64;const e=i.getContext("2d"),t=e.createRadialGradient(32,32,0,32,32,32);return t.addColorStop(0,"rgba(190,225,255,0.85)"),t.addColorStop(.45,"rgba(140,180,255,0.28)"),t.addColorStop(1,"rgba(140,180,255,0)"),e.fillStyle=t,e.fillRect(0,0,64,64),new kr(i)})(),XS=new Ns({map:WS,transparent:!0,opacity:.55,blending:Ds,depthWrite:!1,fog:!1});for(let i=0;i<8;i++){const e=new Xe(new Mr(.38),GS),t=new Lr(XS);t.scale.set(1.5,1.5,1),e.add(t);const n=(i%2?1:-1)*(3.5+St()*2),s=-8-i*6,r=On(n,s)??0;e.position.set(n,r+.8,s),e.userData.baseY=r,e.castShadow=!0,dt.add(e),uc.push(e)}const Si=[],qS={guardian:{name:"ผู้พิทักษ์",hp:3,damage:8,speed:1.65,aggro:12,reach:1.5,cooldown:1.25,xp:35,scale:1,color:3353142,emissive:2296610,eye:16729150},wraith:{name:"วิญญาณร้าย",hp:2,damage:6,speed:2.4,aggro:14,reach:1.4,cooldown:1,xp:25,scale:.85,color:2898762,emissive:1191999,eye:9234687},brute:{name:"อสูรศิลา",hp:6,damage:12,speed:1.05,aggro:10,reach:2,cooldown:1.6,xp:60,scale:1.35,color:4861738,emissive:3805448,eye:16753226},boss:{name:"เจ้าแห่งซากปรัก",hp:20,damage:16,speed:1.25,aggro:18,reach:2.8,cooldown:1.5,xp:300,scale:2.1,color:3809862,emissive:4000594,eye:16732120},dungeonBoss:{name:"ผู้คุมถ้ำต้องสาป",hp:28,damage:15,speed:1.45,aggro:22,reach:3,cooldown:1.35,xp:420,scale:2.3,color:2503495,emissive:1260111,eye:9234687},wolf:{name:"หมาป่ามืด",hp:3,damage:5,speed:2.7,aggro:9,reach:1.6,cooldown:1.4,xp:40,scale:.9,color:3159101,emissive:1053468,eye:16757596},deer:{name:"กวางวิญญาณ",hp:2,damage:0,speed:3.2,aggro:7,reach:1,cooldown:2,xp:15,scale:.7,color:5796188,emissive:1780767,eye:12255121}},Zd={guardian:{kind:"humanoid",palette:{body:"#332a36",light:"#514052",dark:"#1d1a24",accent:"#7d2e40",skin:"#8c6f70",hood:"#241e2b",eye:"#ff443e",boot:"#15131b",metal:"#a9906a"}},wraith:{kind:"wraith",palette:{body:"#2c3b4a",light:"#406075",dark:"#18242f",accent:"#6fa8c4",hood:"#23323e",eye:"#8ce8ff"}},brute:{kind:"brute",palette:{body:"#4a2f2a",light:"#6b4535",dark:"#2a1b19",accent:"#a85d34",eye:"#ffa24a"}},boss:{kind:"humanoid",boss:!0,palette:{body:"#3a2246",light:"#6a3a78",dark:"#21132c",accent:"#c05ba8",skin:"#8e6c92",hood:"#2c1938",eye:"#ff4fd8",boot:"#180f21",metal:"#e2b45c"}},dungeonBoss:{kind:"humanoid",boss:!0,palette:{body:"#263347",light:"#3c5873",dark:"#151e2c",accent:"#5aa6c8",skin:"#7d94ad",hood:"#1c2838",eye:"#8ce8ff",boot:"#0f1621",metal:"#9fd8e8"}},wolf:{kind:"wolf",palette:{body:"#30343d",light:"#4a505c",dark:"#1c1f27",accent:"#6b6f78",eye:"#ffb35c"}},deer:{kind:"deer",palette:{body:"#58715c",light:"#7c9a7f",dark:"#314434",accent:"#b6d9a2",eye:"#baff91"}}},al=new Map;function $S(i){return al.has(i)||al.set(i,np(Zd[i]||Zd.guardian)),al.get(i)}function Mp(i,e,t){const n=qS[i],s=new Wt,r=ip($S(i));s.add(r);const o=new Xe(new Br(.48,16),new cn({color:0,transparent:!0,opacity:.28,depthWrite:!1}));o.rotation.x=-Math.PI/2,o.position.y=.025,s.add(o);const a=new Wt,c=new Xe(new as(1,.12),new cn({color:1576212,transparent:!0,opacity:.85,depthTest:!0})),l=new Xe(new as(.92,.07),new cn({color:i==="boss"?16732120:4384363,depthTest:!0}));l.position.z=.01,a.add(c),a.add(l),a.position.y=2.25,s.add(a);const h=On(e,t)??0;return s.position.set(e,h,t),s.scale.setScalar(n.scale),s.userData={type:i,name:n.name,stats:n,hp:n.hp,maxHp:n.hp,alive:!0,homeX:e,homeZ:t,baseY:h,baseScale:n.scale,cooldown:0,phase:1,phaseMultiplier:1,crown:null,healthBar:a,healthFill:l,sprite:r,animTime:0,hurtTimer:0,attackTimer:0,deathTimer:0,deathDuration:.55,directionRow:0,moving:!1,baseTint:16777215,kind:["wolf","deer"].includes(i)?"animal":"enemy",dungeon:!1},dt.add(s),Si.push(s),s}const YS=[["guardian",-4,-30],["guardian",0,-36],["guardian",4,-42],["wraith",-9,-16],["wraith",9,-24],["wraith",-10,-52],["brute",10,-50],["brute",15,-58],["boss",0,-86],["wolf",-14,-22],["wolf",14,-34],["deer",-19,-9],["deer",18,-17],["guardian",-42,-48],["guardian",-52,-38],["wraith",-58,-56],["brute",-36,-62],["wolf",-150,-148],["wolf",-178,-168],["wraith",-162,-132],["brute",-188,-180],["deer",-138,-172],["guardian",150,48],["guardian",172,62],["wraith",142,72],["brute",178,32],["deer",128,40],["brute",150,-170],["wraith",174,-188],["guardian",138,-196],["wolf",192,-154],["wraith",-170,152],["brute",-192,178],["wolf",-146,188],["deer",-188,132],["guardian",20,10],["deer",-8,24],["boss",160,-177],["dungeonBoss",-170,160]];for(const[i,e,t]of YS)Mp(i,e,t);const KS=[["wraith",-32,-83],["wraith",-24,-83],["brute",-28,-92],["dungeonBoss",-28,-88]],Sp=KS.map(([i,e,t])=>{const n=Mp(i,e,t);return n.userData.dungeon=!0,n.userData.alive=!1,dt.remove(n),n}),it=pM({scene:dt,player:re,state:H,enemies:Si,toast:Ke,gainXp:Uo,updateHud:un,refreshEquipmentUI:$i,defeatEnemy:Dp,getTerrainHeight:On,teleportTo:(i,e)=>{const t=On(i,e,re.position.y);re.position.set(i,Number.isFinite(t)?t:re.position.y,e),fi=0,Ui=!0,lu=!1,lo=null,dc(),Vn.update(re.position)},audio:Bt,worldBounds:gr,staticLandmarks:[...cM.map(i=>({...i,position:new U(i.position.x,0,i.position.z)})),{position:Bs.position,color:"#d6a8f0",size:3.5,name:"ศาลเจ้าแห่งคำสาป",region:"wasteland"},{position:Mi.position,color:"#b57ce8",size:5,name:"ประตูถ้ำต้องสาป",region:"deadwood"},{position:new U(-28,0,-87),color:"#7cd9e8",size:4,name:"ถ้ำต้องสาป",region:"deadwood"}],regions:Ou}),qu=Ln?180:420,La=new Float32Array(qu*3);for(let i=0;i<qu;i++)La[i*3]=(St()-.5)*70,La[i*3+1]=St()*24,La[i*3+2]=(St()-.5)*70;const $u=new Xt;$u.setAttribute("position",new ln(La,3));const ru=new Za($u,new Po({color:10205404,size:.055,transparent:!0,opacity:.45}));dt.add(ru);const Yu=Ln?24:55,jS=new Float32Array(Yu*3),bp=[];for(let i=0;i<Yu;i++)bp.push({x:(St()-.5)*38,y:1.2+St()*5,z:(St()-.5)*38,phase:St()*Math.PI*2});const Ku=new Xt;Ku.setAttribute("position",new ln(jS,3));const Tp=new Po({color:12255121,size:Ln?.13:.16,transparent:!0,opacity:0,depthWrite:!1,blending:Ds}),ju=new Za(Ku,Tp);ju.visible=!1;dt.add(ju);const Zu=Ln?26:64,ZS=new Float32Array(Zu*3),Ep=[];for(let i=0;i<Zu;i++)Ep.push({x:(St()-.5)*26,y:.6+St()*4.2,z:(St()-.5)*26,phase:St()*Math.PI*2,drift:.4+St()*.9});const Ju=new Xt;Ju.setAttribute("position",new ln(ZS,3));const JS=(()=>{const i=document.createElement("canvas");i.width=i.height=32;const e=i.getContext("2d"),t=e.createRadialGradient(16,16,0,16,16,16);t.addColorStop(0,"rgba(255,255,255,1)"),t.addColorStop(.4,"rgba(255,240,214,0.55)"),t.addColorStop(1,"rgba(255,240,214,0)"),e.fillStyle=t,e.fillRect(0,0,32,32);const n=new kr(i);return n.colorSpace=Yt,n})(),wp=new Po({color:16770744,size:Ln?.22:.18,map:JS,transparent:!0,opacity:0,depthWrite:!1,blending:Ds}),No=new Za(Ju,wp);No.visible=!1;No.frustumCulled=!1;dt.add(No);addEventListener("pointerdown",()=>Bt.unlock(),{once:!0});const Ft=Object.create(null),_t={x:0,y:0,run:!1,jumpPressed:!1,attackPressed:!1,interactPressed:!1,dodgePressed:!1};function Qu(){for(const e of Object.keys(Ft))Ft[e]=!1;_t.x=0,_t.y=0,_t.run=!1,_t.jumpPressed=!1,_t.attackPressed=!1,_t.interactPressed=!1,_t.dodgePressed=!1;const i=fe("#stick");i&&(i.style.transform="translate(0,0)")}addEventListener("keydown",i=>{if(Bt.unlock(),["ArrowUp","ArrowDown","ArrowLeft","ArrowRight","Space"].includes(i.code)&&i.preventDefault(),!Ft[i.code]){if(i.code==="Escape"){Kn(),Fo(),it.closeDialogue(),Ft[i.code]=!0;return}if(i.code==="KeyG"){Op(),Ft[i.code]=!0;return}if(i.code==="KeyM"){Hp(),Ft[i.code]=!0;return}if(i.code==="KeyB"){const e=ut.shop.classList.contains("hidden");Kn(e?"shop":null),e&&it.openShop(),Ft[i.code]=!0;return}if(zp()){Ft[i.code]=!0;return}i.code==="Space"&&(_t.jumpPressed=!0),i.code==="KeyF"&&(_t.attackPressed=!0),i.code==="KeyE"&&(_t.interactPressed=!0),i.code==="KeyQ"&&nb(),i.code==="KeyC"&&(_t.dodgePressed=!0),i.code==="KeyR"&&it.castSpell()}Ft[i.code]=!0});addEventListener("keyup",i=>{Ft[i.code]=!1});addEventListener("blur",Qu);document.addEventListener("visibilitychange",()=>{document.hidden&&(ih(!1),Qu())});const Os=fe("#stick-zone"),Ap=fe("#stick");let Ha=null;function Rp(i){const e=Os.getBoundingClientRect(),t=e.left+e.width/2,n=e.top+e.height/2;let s=i.clientX-t,r=i.clientY-n;const o=34,a=Math.hypot(s,r);a>o&&(s=s/a*o,r=r/a*o),_t.x=s/o,_t.y=r/o,Ap.style.transform=`translate(${s}px,${r}px)`}function eh(i){i&&i.pointerId!==Ha||(Ha=null,_t.x=0,_t.y=0,Ap.style.transform="translate(0,0)")}Os.addEventListener("pointerdown",i=>{i.preventDefault(),Ha=i.pointerId,Os.setPointerCapture(i.pointerId),Rp(i)});Os.addEventListener("pointermove",i=>{i.pointerId===Ha&&Rp(i)});Os.addEventListener("pointerup",eh);Os.addEventListener("pointercancel",eh);Os.addEventListener("lostpointercapture",eh);function Xr(i,e,t=()=>{}){const n=fe(i);n.addEventListener("pointerdown",s=>{s.preventDefault(),e(),n.setPointerCapture(s.pointerId)});for(const s of["pointerup","pointercancel","lostpointercapture"])n.addEventListener(s,t)}Xr("#run",()=>_t.run=!0,()=>_t.run=!1);Xr("#jump",()=>{_t.jumpPressed=!0});Xr("#attack",()=>{_t.attackPressed=!0});Xr("#interact",()=>{_t.interactPressed=!0});Xr("#dodge",()=>{_t.dodgePressed=!0});Xr("#cast",()=>{it.castSpell()});let Cn=0,Va=.22,Ga=9.2,ou=.005,Wa=null,au=0,cu=0;const ls=sn.domElement;ls.addEventListener("pointerdown",i=>{const e=i.pointerType==="mouse"&&i.button===0,t=i.pointerType==="touch"&&i.clientX>innerWidth*.38&&i.clientY<innerHeight-125;!e&&!t||(Wa=i.pointerId,au=i.clientX,cu=i.clientY,ls.setPointerCapture(i.pointerId),i.preventDefault())});ls.addEventListener("pointermove",i=>{i.pointerId===Wa&&(Cn-=(i.clientX-au)*ou,Va=Pt.clamp(Va+(i.clientY-cu)*ou,-.12,.82),au=i.clientX,cu=i.clientY)});function th(i){i.pointerId===Wa&&(Wa=null)}ls.addEventListener("pointerup",th);ls.addEventListener("pointercancel",th);ls.addEventListener("lostpointercapture",th);ls.addEventListener("contextmenu",i=>i.preventDefault());ls.addEventListener("wheel",i=>{Ga=Pt.clamp(Ga+Math.sign(i.deltaY)*.7,6,14)},{passive:!0});let fi=0,cl=0,Ui=!0,_o=0,ba=0,dr=0,Tr=0,vr=0,pr=0;const Ss=new U;let ll=0,Yn=!1,nh=!1,Jd=Cn,Cp=1;const QS=new ze(16751196),eb=new ze(16773590),hc=new jf,ro=new U,bs=new U,Ts=new U;let lu=!1,lo=null;function ih(i=!0,e=yi){typeof i!="boolean"&&(i=!0),yi=e;const t={version:10,slot:e,dungeonActive:Yn,player:[re.position.x,re.position.y,re.position.z],state:{...H},settings:{...Ye},systems:it.serializeWorld(),collectibles:uc.map(n=>n.visible),enemies:Si.map(n=>({type:n.userData.type,position:[n.position.x,n.position.y,n.position.z],hp:n.userData.hp,alive:n.userData.alive}))};try{const n=JSON.stringify(t);localStorage.setItem(up(e),n),e===1&&localStorage.setItem("forgotten-realm-save-v1",n),i&&Ke(`บันทึกความคืบหน้าช่อง ${e} แล้ว`)}catch(n){console.error(n),Ke("ไม่สามารถบันทึกได้ในอุปกรณ์นี้")}}function tb(i=yi){try{const e=localStorage.getItem(up(i))||(i===1?localStorage.getItem("forgotten-realm-save-v1"):null);if(!e)return Ke(`ยังไม่มีข้อมูลบันทึกช่อง ${i}`);const t=JSON.parse(e);if(!Array.isArray(t.player)||t.player.length!==3||!t.state||!t.player.every(Number.isFinite))throw new Error("Invalid save format");yi=i,re.position.set(...t.player),Yn=!!t.dungeonActive;const n=["hp","stamina","crystals","potions","gold","level","xp","questStage","dayTime"];for(const r of n)Number.isFinite(Number(t.state[r]))&&(H[r]=Number(t.state[r]));if(H.dungeonCleared=!!t.state.dungeonCleared,t.state.inventory&&typeof t.state.inventory=="object"&&(H.inventory={...t.state.inventory}),t.state.skills&&typeof t.state.skills=="object"&&(H.skills={...t.state.skills}),Array.isArray(t.state.spells)&&(H.spells=t.state.spells.slice()),H.activeSpell=typeof t.state.activeSpell=="string"?t.state.activeSpell:null,t.state.quests&&typeof t.state.quests=="object"&&(H.quests={...t.state.quests}),t.state.upgrades&&typeof t.state.upgrades=="object"){const r={};for(const[o,a]of Object.entries(t.state.upgrades)){const c=Math.round(Number(a));Number.isFinite(c)&&c>0&&(r[o]=Math.min(5,c))}H.upgrades=r}if(Array.isArray(t.state.bounties)&&(H.bounties=t.state.bounties.filter(r=>r&&typeof r.type=="string").map(r=>({...r,count:Math.max(0,Math.round(Number(r.count)||0)),target:Math.max(1,Math.round(Number(r.target)||1))}))),Number.isFinite(Number(t.state.mana))&&(H.mana=Number(t.state.mana)),it.restoreState(),it.deserializeWorld(t.systems),H.hp=Pt.clamp(H.hp,0,H.maxHp),H.stamina=Pt.clamp(H.stamina,0,100),H.gold=Math.max(0,Math.floor(H.gold)),H.weapon=oi[t.state.weapon]?t.state.weapon:"sword",H.armor=ai[t.state.armor]?t.state.armor:"leather",H.attackBonus=Pt.clamp(Number(t.state.attackBonus)||0,0,5),H.skillPoints=Math.max(0,Number(t.state.skillPoints)||0),H.comboBest=Math.max(0,Math.round(Number(t.state.comboBest)||0)),dc(),$t.best&&($t.best.textContent=String(H.comboBest)),H.potions=Math.max(0,H.potions),H.crystals=Math.max(0,H.crystals),H.level=Math.max(1,H.level),H.questStage=Pt.clamp(H.questStage,0,2),H.discoveredRegions=Array.isArray(t.state.discoveredRegions)?t.state.discoveredRegions.filter(r=>typeof r=="string"):[],H.discoveredSecrets=Array.isArray(t.state.discoveredSecrets)?t.state.discoveredSecrets.filter(r=>typeof r=="string"):[],t.state.reputation&&typeof t.state.reputation=="object"&&(H.reputation={...t.state.reputation}),t.state.flags&&typeof t.state.flags=="object"&&(H.flags={...t.state.flags}),Array.isArray(t.state.waypoints)&&(H.waypoints=t.state.waypoints.filter(r=>typeof r=="string")),Array.isArray(t.state.explored)&&(H.explored=t.state.explored.map(r=>Math.round(Number(r))).filter(r=>Number.isFinite(r)&&r>=0&&r<4e3)),Number.isFinite(Number(t.state.cartographer))&&(H.cartographer=Math.max(0,Math.round(Number(t.state.cartographer)))),typeof it.resetExploration=="function"&&it.resetExploration(),H.classId=Us[t.state.classId]?t.state.classId:null,H.respawnPoint=Array.isArray(t.state.respawnPoint)&&t.state.respawnPoint.length===2&&t.state.respawnPoint.every(Number.isFinite)?t.state.respawnPoint.slice():null,H.respawnPoint){const[r,o]=H.respawnPoint;Xn.position.set(r,On(r,o,0)??0,o),Xn.visible=!0}Array.isArray(t.collectibles)&&uc.forEach((r,o)=>{r.visible=t.collectibles[o]!==!1}),Array.isArray(t.enemies)&&Si.forEach((r,o)=>{const a=t.enemies[o];if(!a||a.type&&a.type!==r.userData.type)return;Array.isArray(a.position)&&a.position.length===3&&a.position.every(Number.isFinite)&&r.position.set(...a.position),r.userData.homeX=r.position.x,r.userData.homeZ=r.position.z;const c=r.userData.maxHp;r.userData.hp=Pt.clamp(Number(a.hp)||0,0,c),r.userData.alive=a.alive!==!1&&r.userData.hp>0,r.userData.healthFill.scale.x=r.userData.hp/c,r.userData.healthFill.position.x=-(1-r.userData.hp/c)*.46,kp(r),r.userData.alive?dt.add(r):dt.remove(r),r.userData.cooldown=0,r.userData.phase=1,r.userData.phaseMultiplier=1}),t.settings&&(["low","medium","high"].includes(t.settings.quality)&&(Ye.quality=t.settings.quality),Number.isFinite(Number(t.settings.sensitivity))&&(Ye.sensitivity=Pt.clamp(Number(t.settings.sensitivity),1,12)),Ye.weather=!!t.settings.weather,Ye.sound=!!t.settings.sound,Ye.music=t.settings.music!==!1,["auto","30","45","60"].includes(String(t.settings.fpsLimit))&&(Ye.fpsLimit=String(t.settings.fpsLimit)),["left","right"].includes(t.settings.mobileLayout)&&(Ye.mobileLayout=t.settings.mobileLayout),["auto","day","night"].includes(t.settings.dayNightMode)&&(Ye.dayNightMode=t.settings.dayNightMode)),Pn=Ye.dayNightMode||"auto";const s=fe("#save-slot");s&&(s.value=String(i)),Yi(),un(),$i(),nc(),Bu(),it.refreshInventoryUI(),it.refreshQuestUI(),it.renderShop(),Ke(`โหลดเกมช่อง ${i} แล้ว`)}catch(e){console.error(e),Ke("ข้อมูลบันทึกเสียหายหรือไม่ถูกต้อง")}}function nb(){if(H.potions<=0)return Ke("ไม่มียาฟื้นฟู");if(H.hp>=H.maxHp)return Ke("พลังชีวิตเต็มแล้ว");H.potions--,H.hp=Math.min(H.maxHp,H.hp+45),Bt.play("potion"),un(),Ke("ใช้ยาฟื้นฟู +45 HP")}const sh=2.8,ib=20,Qd=[{min:0,tier:0,name:"สงบ",mult:1,leech:0},{min:5,tier:1,name:"ไหลเวียน",mult:1.08,leech:1},{min:10,tier:2,name:"คลั่ง",mult:1.18,leech:2},{min:15,tier:3,name:"กระหายเลือด",mult:1.3,leech:3}];let Wn=0,Ls=0;const oo=new U;function Ro(i=Wn){let e=Qd[0];for(const t of Qd)i>=t.min&&(e=t);return e}function sb(i){return i.tier===0?`อีก ${Math.max(1,5-Wn)} ครั้ง → ไหลเวียน`:`+${Math.round((i.mult-1)*100)}% ดาเมจ · ดูดเลือด ${i.leech} HP/ครั้ง`}function Pp(i=!1){const e=$t.chip;if(!e)return;if(Wn<=0){e.classList.add("hidden"),e.classList.remove("tier-1","tier-2","tier-3","pop","tier-up"),$t.fill&&($t.fill.style.width="0%");return}const t=Ro();e.classList.remove("hidden","tier-1","tier-2","tier-3"),t.tier>0&&e.classList.add(`tier-${t.tier}`),$t.count&&($t.count.textContent=String(Wn)),$t.tier&&($t.tier.textContent=t.name),$t.bonus&&($t.bonus.textContent=sb(t)),$t.fill&&($t.fill.style.width=`${Math.max(0,Ls/sh*100)}%`),i&&(e.classList.remove("pop"),e.offsetWidth,e.classList.add("pop"))}function rb(i){Bt.play("blood"),Ke(`พันธะเลือด · ${i.name}! +${Math.round((i.mult-1)*100)}% ดาเมจ · ดูดเลือด ${i.leech} HP/ครั้ง`),Lp("พันธะเลือด!","burst");const e=$t.chip;e&&(e.classList.remove("tier-up"),e.offsetWidth,e.classList.add("tier-up"))}function ob(){const i=Ro().tier;Wn=Math.min(ib,Wn+1),Ls=sh,Wn>H.comboBest&&(H.comboBest=Wn,$t.best&&($t.best.textContent=String(Wn)));const e=Ro();e.tier>i&&rb(e),Pp(!0)}function ab(i){if(i<=0||H.dead)return;const e=H.hp;H.hp=Math.min(H.maxHp,H.hp+i);const t=H.hp-e;t<=0||(Lp(`+${Math.round(t*10)/10}`,"leech"),un())}function cb(i){if(!(Wn<=0)){if(Ls-=i,Ls<=0){dc();return}$t.fill&&($t.fill.style.width=`${Math.max(0,Ls/sh*100)}%`)}}function dc(){if(Wn===0&&Ls===0){$t.chip&&$t.chip.classList.add("hidden");return}Wn=0,Ls=0,Pp(!1)}function Lp(i,e="leech"){const t=$t.layer;if(!t)return;const n=document.createElement("span");if(n.className=`float-text${e==="burst"?" burst":""}`,n.textContent=i,t.appendChild(n),oo.set(re.position.x,re.position.y+2.35,re.position.z),oo.project(hn),oo.z>1){n.remove();return}const s=sn.domElement.getBoundingClientRect();n.style.left=`${s.left+(oo.x*.5+.5)*s.width}px`,n.style.top=`${s.top+(-oo.y*.5+.5)*s.height}px`,n.addEventListener("animationend",()=>n.remove(),{once:!0}),setTimeout(()=>n.remove(),1200)}function Uo(i){for(H.xp+=i;H.xp>=100;)H.xp-=100,H.level++,H.skillPoints++,Bt.play("level"),$i(),nc(),Ke(`เลเวลเพิ่มเป็น ${H.level} · ได้แต้มทักษะ 1`)}function lb(){if(!Yn||!Sp.every(e=>!e.userData.alive))return;Yn=!1,H.dungeonCleared=!0,H.crystals+=6,H.gold+=180,Uo(250);const i=On(-24,-70)??0;re.position.set(-24,i,-70),Bt.play("quest"),Ke("ถ้ำต้องสาปสงบแล้ว · ได้ผลึก 6 · ทอง 180"),un()}function Dp(i){if(!i.userData.alive)return;const e=i.userData.type,t=i.userData;t.hp=0,t.alive=!1,t.deathTimer=t.deathDuration,t.hurtTimer=0,t.attackTimer=0,t.moving=!1,t.healthBar.visible=!1,Fu(t.sprite,t.directionRow||0,0,"death");const n=e==="boss"?5:e==="dungeonBoss"?6:e==="deer"?0:1,s=e==="deer"?8:e==="wolf"?14:e==="boss"?120:e==="dungeonBoss"?200:20;H.crystals+=n,H.gold+=s,Uo(i.userData.stats.xp),it.onEnemyKilled(i),Bt.play(e==="boss"||e==="dungeonBoss"?"boss":"hit"),Ke(`${i.userData.name}พ่ายแพ้ · ได้ผลึก ${n} · ทอง ${s}`),lb(),un()}const Da=[];function Ip(i,e,t={}){const n=i.userData;if(!n.alive)return 0;const s=e*Ro().mult;n.hp-=s,n.hurtTimer=.3,t.slow&&(n.slowTimer=Math.max(n.slowTimer||0,t.slow)),ob();const r=Ro();return r.leech>0&&ab(r.leech),n.hp<=0&&Dp(i),s}function ub(i,e){const t=Math.sin(re.rotation.y),n=Math.cos(re.rotation.y),s=i.projectile==="frost",r=new Xe(new Lo(s?.16:.1,8,6),new cn({color:s?10479871:16765562})),o=new Lr(new Ns({color:s?10479871:16765562,transparent:!0,opacity:.55,blending:Ds,depthWrite:!1}));o.scale.set(s?1.1:.8,s?1.1:.8,1),r.add(o),r.position.set(re.position.x+t*1,re.position.y+1.15,re.position.z+n*1),dt.add(r),Da.push({mesh:r,forwardX:t,forwardZ:n,speed:s?30:38,traveled:0,maxRange:i.range,damage:e,slow:i.slow||0})}function hb(i){for(let e=Da.length-1;e>=0;e--){const t=Da[e],n=t.speed*i;t.mesh.position.x+=t.forwardX*n,t.mesh.position.z+=t.forwardZ*n,t.traveled+=n;let s=null;for(const r of Si){if(!r.userData.alive)continue;const o=r.position.x-t.mesh.position.x,a=r.position.z-t.mesh.position.z;if(o*o+a*a<1.2*1.2){s=r;break}}if(s){const r=Ip(s,t.damage,{slow:t.slow});s.userData.alive&&(Ke(`โจมตีโดน ${s.userData.name} -${Math.round(r*10)/10}`),Bt.play("hit"))}(s||t.traveled>=t.maxRange)&&(dt.remove(t.mesh),t.mesh.geometry.dispose(),t.mesh.material.dispose(),Da.splice(e,1))}}function db(){H.hp=H.maxHp,H.stamina=100,H.mana=H.maxMana,Tr=1.5,dc();const i=Array.isArray(H.respawnPoint)?H.respawnPoint:[0,3],e=Number.isFinite(i[0])?i[0]:0,t=Number.isFinite(i[1])?i[1]:3;re.position.set(e,On(e,t)??0,t),fi=0,Ui=!0;let n="คุณล้มสลบ · กลับไปยังจุดพัก";if(Yn&&(Yn=!1,Bp(!1),n="คุณถูกขับออกจากถ้ำต้องสาป"),H.gold>0){const s=Math.min(H.gold,10);H.gold-=s,n+=` · สูญเสียทอง ${s}`}Qu(),Bt.play("boss"),Ke(n),un()}const Co=fe("#camp-panel"),fb=fe("#dialogue-panel"),Xn=new Wt;{const i=new Gt({color:4862756,roughness:1});for(let n=0;n<3;n++){const s=new Xe(new Xi(.09,.11,1.1,6),i);s.rotation.z=Math.PI/2,s.rotation.y=n/3*Math.PI,s.position.y=.12,s.castShadow=!0,Xn.add(s)}const e=new Xe(new ks(.3,.8,7),new cn({color:16753226,transparent:!0,opacity:.85}));e.position.y=.45,Xn.add(e);const t=new Lu(16751178,2.2,14);t.position.y=.9,Xn.add(t),Xn.visible=!1,dt.add(Xn)}function Np(i=12){return Si.some(e=>e.userData.alive&&Math.hypot(e.position.x-re.position.x,e.position.z-re.position.z)<i)}function Up(){return Yn||Np(12)}function Fp(){const i=fe("#camp-status");if(!i)return;const e=it.getCount("meat"),t=it.getCount("herb");Yn?i.textContent="ในถ้ำต้องสาปไม่สามารถตั้งแคมป์ได้":Np(12)?i.textContent="มีศัตรูอยู่ใกล้เกินไป · กำจัดให้หมดก่อนจึงจะพักได้":i.textContent=`กองไฟพร้อมสำหรับพักผ่อน · เนื้อสด ${e} · สมุนไพร ${t}`;const n=fe("#camp-rest");n&&(n.disabled=Up());const s=fe("#camp-cook");s&&(s.disabled=e<1||t<1)}function pb(){if(!Co)return;if(Yn)return Ke("ในถ้ำต้องสาปตั้งแคมป์ไม่ได้");H.respawnPoint=[Math.round(re.position.x*10)/10,Math.round(re.position.z*10)/10];const i=On(re.position.x,re.position.z,re.position.y)??0;Xn.position.set(re.position.x+Math.sin(re.rotation.y)*1.4,i,re.position.z+Math.cos(re.rotation.y)*1.4),Xn.visible=!0,Kn("camp"),nh=!0,Co.classList.remove("hidden"),Fp()}function Fo(){nh=!1,Co&&Co.classList.add("hidden")}function Op(){nh?Fo():pb()}function mb(){if(Up())return Ke("ยังพักไม่ได้ · มีศัตรูอยู่ใกล้");H.dayTime=.28,Pn="auto",Ye.dayNightMode="auto",H.hp=H.maxHp,H.stamina=100,H.mana=H.maxMana,Tr=1.5,Bt.play("quest"),un(),$i(),Ke("พักผ่อนจนรุ่งเช้า · ฟื้นฟูเต็มหลอด"),Fo()}function gb(){if(it.getCount("meat")<1||it.getCount("herb")<1)return Ke("ต้องใช้เนื้อสด 1 + สมุนไพร 1");H.inventory.meat=it.getCount("meat")-1,H.inventory.herb=it.getCount("herb")-1,H.potions+=2,Bt.play("craft"),it.refreshInventoryUI(),un(),Fp(),Ke("ปรุงสตูว์ป่า · ได้ยาฟื้นฟู 2")}function _b(){if(_o>0)return;const i=oi[H.weapon]||oi.sword,e=Us[H.classId]||{};if(i.kind==="ranged"){if(i.stamina&&H.stamina<i.stamina){Ke("พละกำลังไม่พอสำหรับการยิง");return}_o=i.cooldown,vr=.24,i.stamina&&(H.stamina=Math.max(0,H.stamina-i.stamina)),Bt.play("attack");const a=(i.damage+H.attackBonus)*su()*(e.ranged||1);ub(i,a),un();return}_o=i.cooldown,vr=.24,Bt.play("attack");const t=Math.sin(re.rotation.y),n=Math.cos(re.rotation.y),s=(i.damage+H.attackBonus)*su()*(e.melee||1);let r=null,o=1/0;for(const a of Si){if(!a.userData.alive)continue;const c=a.position.x-re.position.x,l=a.position.z-re.position.z,h=Math.hypot(c,l);h>i.range||h<.001||(c*t+l*n)/h<.15||h<o&&(o=h,r=a)}if(r){const a=Ip(r,s);Bt.play("hit"),r.userData.alive&&Ke(`โจมตี ${r.userData.name} -${Math.round(a*10)/10}`)}else Ke("ไม่มีศัตรูอยู่ในระยะ");un()}function kp(i){const e=i.userData;e.deathTimer=0,e.hurtTimer=0,e.attackTimer=0,e.moving=!1,e.baseTint=16777215,e.healthBar.visible=!0,e.sprite.material.opacity=1,e.sprite.material.color.setHex(16777215),Fu(e.sprite,e.directionRow||0,0,"walk")}function Bp(i){for(const e of Sp)kp(e),e.userData.hp=i?e.userData.maxHp:0,e.userData.alive=i,e.userData.cooldown=0,e.userData.phase=1,e.userData.phaseMultiplier=1,e.userData.healthFill.scale.x=i?1:0,e.userData.healthFill.position.x=0,e.position.set(e.userData.homeX,e.userData.baseY,e.userData.homeZ),i?dt.add(e):dt.remove(e)}function vb(){Yn=!0,Bp(!0);const i=On(-28,-90)??0;re.position.set(-28,i,-90),Bt.play("boss"),Ke("คุณเข้าสู่ถ้ำต้องสาป · กำจัดผู้คุมถ้ำให้หมด")}function xb(){if(it.interact())return;if(Math.hypot(re.position.x-Mi.position.x,re.position.z-Mi.position.z)<5){Yn?Ke("กำจัดสิ่งมีชีวิตในถ้ำให้หมดก่อนออกไป"):vb();return}if(re.position.distanceTo(Bs.position)<5){H.questStage===0?(H.questStage=1,Ke("ภารกิจใหม่: กำจัดผู้พิทักษ์")):H.questStage===1&&Si.filter(e=>e.userData.type==="guardian").every(e=>!e.userData.alive)?(H.questStage=2,Uo(100),H.potions++,Ke("ภารกิจสำเร็จ · ได้รับยาฟื้นฟู")):Ke("พลังบางอย่างยังปกป้องซากโบราณอยู่"),un();return}Ke("ไม่มีสิ่งใดให้โต้ตอบใกล้ตัว")}function yb(){const i=re.position;fn.position.copy(i).addScaledVector(mp,72),fn.target.position.copy(i),fn.target.updateMatrixWorld(),dn.position.copy(i).addScaledVector(gp,-72),dn.target.position.copy(i),dn.target.updateMatrixWorld()}function Mb(i){Pn==="auto"&&(H.dayTime=(H.dayTime+i*.0035)%1);let e;Pn==="day"?e=1:Pn==="night"?e=0:e=Math.max(0,Math.sin(H.dayTime*Math.PI*2)),dn.intensity=2.8*(1-e),fn.intensity=2.55*e,_p.intensity=.98+.74*e,vp.intensity=.76+.06*e+Fs.getFlash()*1.7,ic.intensity=.85*(1-e),sn.toneMappingExposure=1.32+.16*(1-e),zi.material.uniforms.uExposure&&(zi.material.uniforms.uExposure.value=sn.toneMappingExposure),fn.color.lerpColors(QS,eb,e),Cp=e,dn.castShadow=e<.5,fn.castShadow=e>=.5,sc.material.color.copy(US).lerp(NS,e);const t=new ze(1120811).lerp(new ze(8229805),e),n=Math.max(0,1-Math.abs(e-.18)*3.4);t.lerp(new ze(15239770),n*.3),zi.visible=!0,zi.material.uniforms.uSun.value=e,dt.background.copy(t),dt.fog.color.copy(t),ju.visible=e<.65,Tp.opacity=.75*(1-e),No.visible=e>.18,wp.opacity=.3*Pt.clamp((e-.18)*2.4,0,1);const s=1-e;dt.fog.density=Pt.lerp(.0026,.0042,s),Fs.update(i,e,re.position);const r=e>.58?"DAY":e>.2?"DUSK":"NIGHT";ut.clock&&(ut.clock.textContent=r);const o=fe("#time-toggle");o&&(o.textContent=Pn==="auto"?"◷ AUTO":Pn==="day"?"☀ SUN":"☾ NIGHT")}function Sb(i){if(!Ye.weather){ru.visible=!1;return}ru.visible=!0;const e=$u.attributes.position;for(let t=0;t<qu;t++)e.array[t*3+1]-=i*15,e.array[t*3]-=i*1.8,e.array[t*3+1]<0&&(e.array[t*3+1]=18+St()*8,e.array[t*3]=(St()-.5)*70,e.array[t*3+2]=(St()-.5)*70);e.needsUpdate=!0,Cp<.35&&St()<i*.055&&(Fs.strike(),Bt.play("thunder"))}function bb(){const i=Ju.attributes.position,e=hc.elapsedTime;for(let t=0;t<Zu;t++){const n=Ep[t];i.array[t*3]=re.position.x+n.x+Math.sin(e*.22*n.drift+n.phase)*2.2,i.array[t*3+1]=n.y+Math.sin(e*.35*n.drift+n.phase*1.7)*.4,i.array[t*3+2]=re.position.z+n.z+Math.cos(e*.19*n.drift+n.phase)*2.2}i.needsUpdate=!0}function Tb(i){const e=Ku.attributes.position;for(let t=0;t<Yu;t++){const n=bp[t],s=hc.elapsedTime+n.phase;e.array[t*3]=re.position.x+n.x+Math.sin(s*.7)*.7,e.array[t*3+1]=n.y+Math.sin(s*1.4)*.35,e.array[t*3+2]=re.position.z+n.z+Math.cos(s*.6)*.7}e.needsUpdate=!0}const Eb=Ou.map(i=>({id:i.id,name:i.name,isInside:()=>rp(re.position.x,re.position.z)?.id===i.id}));function wb(){const i=Eb.find(e=>e.isInside());!i||H.discoveredRegions.includes(i.id)||(H.discoveredRegions.push(i.id),Ke(`ค้นพบพื้นที่ใหม่: ${i.name}`))}function Ab(i){const e=Math.max(0,i.hp/i.maxHp),t=e>.65?1:e>.3?2:3;t!==i.phase&&(i.phase=t,i.phaseMultiplier=t===1?1:t===2?1.18:1.42,i.healthFill.material.color.setHex(t===3?16724016:t===2?16751165:16732120),i.baseTint=t===3?16743034:t===2?16757626:16777215,t>1&&(Ke(`${i.name} เข้าเฟส ${t} · โจมตีรุนแรงขึ้น`),Bt.play("boss")))}function Rb(i,e){wb(),Gu.rotation.z+=i*.35,Wu.material.opacity=.72+Math.sin(hc.elapsedTime*2)*.12,Bs.rotation.y+=i*.4;for(const t of uc)t.visible&&(t.rotation.y+=i*.8,t.position.y=(t.userData.baseY||0)+.8+Math.sin(performance.now()*.002+t.position.z)*.12,re.position.distanceTo(t.position)<1.45&&(t.visible=!1,H.crystals++,Uo(10),Bt.play("pickup"),Ke("เก็บผลึกวิญญาณ +1"),un()));for(const t of Si){const n=t.userData;if(n.deathTimer>0){n.deathTimer=Math.max(0,n.deathTimer-i),n.moving=!1,eu(n,i,e,t.rotation.y),n.deathTimer<=0&&dt.remove(t);continue}if(!n.alive)continue;const s=n.stats,r=re.position.x-t.position.x,o=re.position.z-t.position.z,a=Math.hypot(r,o),c=n.type==="boss"||n.type==="dungeonBoss";c&&Ab(n),n.slowTimer=Math.max(0,(n.slowTimer||0)-i);const l=n.slowTimer>0?.55:1,h=s.speed*n.phaseMultiplier*l,u=s.damage*n.phaseMultiplier,d=Math.max(0,n.hp/n.maxHp);n.healthFill.scale.x=d,n.healthFill.position.x=-(1-d)*.46;const f=hn.quaternion.clone();if(f.premultiply(t.quaternion.clone().invert()),n.healthBar.quaternion.copy(f),n.healthBar.visible=a<s.aggro+2,n.cooldown=Math.max(0,n.cooldown-i),n.moving=!1,n.kind==="animal"&&n.type==="deer")if(a<s.aggro){const y=new U(-r,0,-o).normalize();t.position.addScaledVector(y,i*h),t.rotation.y=Math.atan2(y.x,y.z),n.moving=!0}else{const y=performance.now()*4e-4+n.homeZ;t.position.x=n.homeX+Math.sin(y)*1.6,t.position.z=n.homeZ+Math.cos(y*.7)*1.2}else if(a<s.aggro){const y=new U(r,0,o).normalize();if(t.rotation.y=Math.atan2(y.x,y.z),a>s.reach)t.position.addScaledVector(y,i*h),n.moving=!0;else if(n.cooldown<=0&&Tr<=0){const m=Us[H.classId]||{},p=u*(1-fp())*(1-(m.damageReduction||0));H.hp=Math.max(0,H.hp-p),n.cooldown=s.cooldown,n.attackTimer=.4,pr=.3,Bt.play("hit"),Ke(`${n.name}โจมตีคุณ -${Math.round(p)}`),H.hp<=0&&db(),un()}}else{const y=performance.now()*5e-4+n.homeZ;t.position.x=n.homeX+Math.sin(y)*1.2,t.position.z=n.homeZ+Math.cos(y*.7)*.8}const g=On(t.position.x,t.position.z,n.baseY);if(t.position.y=g===null?n.baseY:g,!c)for(const y of Si){if(y===t||!y.userData.alive)continue;const m=t.position.x-y.position.x,p=t.position.z-y.position.z,x=Math.hypot(m,p);if(x>.001&&x<1){const b=(1-x)*.5;t.position.x+=m/x*b,t.position.z+=p/x*b}}eu(n,i,e,t.rotation.y)}}function Yi(){ou=Number(Ye.sensitivity)*.001;const i=Ye.quality==="high"?Math.min(devicePixelRatio||1,2):Ye.quality==="low"?1:Math.min(devicePixelRatio||1,1.5);sn.setPixelRatio(i),sn.shadowMap.enabled=Ye.quality!=="low",dn.shadow.mapSize.setScalar(Ye.quality==="high"?1536:1024),Ye.weather=!!Ye.weather,Ye.sound=!!Ye.sound,Bt.setEnabled(Ye.sound),Bt.setWeather(Ye.weather),Bt.setMusic(Ye.music);const e=!!(Ye.postfx&&Ye.quality!=="low");Fs.setEnabled(e),Fs.setQuality(Ye.quality),zi.material.uniforms.uPost&&(zi.material.uniforms.uPost.value=e?1:0);const t=fe("#postfx-toggle");t&&(t.checked=Ye.postfx),document.body.classList.toggle("layout-left",Ye.mobileLayout==="left"),fe("#quality").value=Ye.quality,fe("#sensitivity").value=String(Ye.sensitivity),fe("#rain-toggle").checked=Ye.weather;const n=fe("#sound-toggle");n&&(n.checked=Ye.sound);const s=fe("#music-toggle");s&&(s.checked=Ye.music);const r=fe("#fps-limit");r&&(r.value=Ye.fpsLimit);const o=fe("#mobile-layout");o&&(o.value=Ye.mobileLayout)}function Cb(i){ll+=i,ll>=30&&(ih(!1),ll=0);let e=_t.x,t=_t.y;(Ft.KeyA||Ft.ArrowLeft)&&(e-=1),(Ft.KeyD||Ft.ArrowRight)&&(e+=1),(Ft.KeyW||Ft.ArrowUp)&&(t-=1),(Ft.KeyS||Ft.ArrowDown)&&(t+=1);const n=Math.hypot(e,t),s=n>.08;if(ba=Math.max(0,ba-i),dr=Math.max(0,dr-i),Tr=Math.max(0,Tr-i),vr=Math.max(0,vr-i),pr=Math.max(0,pr-i),cb(i),_t.dodgePressed)if(_t.dodgePressed=!1,ba<=0&&H.stamina>=20){let C=e,w=t;const L=Math.hypot(C,w);if(L>.08){C/=L,w/=L;const S=Math.cos(Cn),E=Math.sin(Cn);Ss.set(C*S+w*E,0,-C*E+w*S)}else Ss.set(Math.sin(re.rotation.y),0,Math.cos(re.rotation.y));Ss.normalize(),dr=.24,Tr=.48,ba=.85,H.stamina=Math.max(0,H.stamina-20),Bt.play("dodge")}else H.stamina<20&&Ke("พละกำลังไม่เพียงพอสำหรับหลบหลีก");if(dr>0){const C=Ss.x*8.5*i,w=Ss.z*8.5*i,L=Vn.blocked(re.position.x,re.position.z,.55),S=(k,z)=>!L&&Vn.blocked(k,z,.55)?!1:Oi.every(Y=>{const $=k-Y.x,j=z-Y.z,Q=.55+Y.radius;return $*$+j*j>=Q*Q}),E=re.position.x+C,I=re.position.z+w;S(E,re.position.z)&&(re.position.x=E),S(re.position.x,I)&&(re.position.z=I),re.rotation.y=Math.atan2(Ss.x,Ss.z),_r.rotation.z=Math.sin(performance.now()*.04)*.11}else if(s){e/=Math.max(n,1),t/=Math.max(n,1);const C=Math.cos(Cn),w=Math.sin(Cn),L=e*C+t*w,S=-e*w+t*C,I=(_t.run||Ft.ShiftLeft||Ft.ShiftRight)&&H.stamina>1,k=I?7.5:4,z=L*k*i,Y=S*k*i,$=.55,j=Vn.blocked(re.position.x,re.position.z,$),Q=(ve,De)=>!j&&Vn.blocked(ve,De,$)?!1:Oi.every(Je=>{const mt=ve-Je.x,At=De-Je.z,ft=$+Je.radius;return mt*mt+At*At>=ft*ft}),K=re.position.x+z,me=re.position.z+Y;Q(K,re.position.z)&&(re.position.x=K),Q(re.position.x,me)&&(re.position.z=me),re.rotation.y=Math.atan2(L,S),_r.rotation.z=Math.sin(performance.now()*.012)*.045,I&&(H.stamina=Math.max(0,H.stamina-24*i))}else _r.rotation.z=0;cl+=i;const r=sp(re.rotation.y,Cn),o=dr>0,a=s&&(_t.run||Ft.ShiftLeft||Ft.ShiftRight)&&H.stamina>1,c=s||o,l=o?14:a?11:7,h=vr>0?1:c?Math.floor(cl*l)%4:0;hs.offset.set(h*.25,(3-r)*.25),br.position.y=1.03+(c?0:Math.sin(cl*2)*.015);const u=vr/.24,d=pr/.3;if(br.material.color.setRGB(1+d*.5,1-d*.4,1-d*.4),br.scale.set(1.55+u*.16,2.05,1),_r.rotation.x=-u*.22,!s||!(_t.run||Ft.ShiftLeft||Ft.ShiftRight)){const C=15*((Us[H.classId]||{}).staminaRegen||1);H.stamina=Math.min(100,H.stamina+C*i)}_t.jumpPressed&&Ui&&dr<=0&&(fi=7,Ui=!1),_t.jumpPressed=!1;const f=Ui;fi-=18*i,re.position.y+=fi*i;const g=On(re.position.x,re.position.z,re.position.y);if(g!==null){const C=g-re.position.y,w=f&&fi<=0&&C>=-1&&C<=1,L=fi<=0&&re.position.y<=g+.2;if(w){const S=g-re.position.y,E=1-Math.pow(1e-6,i);re.position.y+=S*Math.min(1,E*1.6),Math.abs(S)<.02&&(re.position.y=g),fi=0,Ui=!0}else L?(re.position.y=g,fi=0,Ui=!0):Ui=!1}else re.position.y<0&&(re.position.y=0,fi=0,Ui=!0);if(re.position.x=Pt.clamp(re.position.x,gr.minX+10,gr.maxX-10),re.position.z=Pt.clamp(re.position.z,gr.minZ+10,gr.maxZ-10),Vn.update(re.position),IS.update(re.position,i),!Kd&&Vn.loadedCount>0){Kd=!0,li.visible=!1;for(let C=Oi.length-1;C>=0;C--)Oi[C].fallback&&Oi.splice(C,1);Ke("เปิดโลกกว้าง 6 เขต · ค้นพบจุดลับและสมบัติได้ทั่วแผนที่")}if((_t.attackPressed||Ft.KeyF)&&(_b(),_t.attackPressed=!1),(_t.interactPressed||Ft.KeyE)&&(xb(),_t.interactPressed=!1),_o=Math.max(0,_o-i),ro.set(re.position.x,re.position.y+1.25,re.position.z),!lu)bs.copy(ro),lo=ro.y,lu=!0;else{bs.lerp(ro,Math.min(.55,1-Math.pow(1e-10,i)));const w=ro.y-lo;if(Math.abs(w)>.06){const L=1-Math.pow(.001,Math.min(i,.05));lo+=w*L}bs.y=lo}const y=Math.cos(Va)*Ga,m=Cn-Jd;Jd=Cn,Ts.set(bs.x+Math.sin(Cn)*y,bs.y+Math.sin(Va)*Ga,bs.z+Math.cos(Cn)*y);const p=On(Ts.x,Ts.z,Ts.y);p!==null&&(Ts.y=Math.max(Ts.y,p+.7));const x=Math.min(i,1/30);hn.position.lerp(Ts,1-Math.pow(.001,x)),hn.lookAt(bs);const b=On(hn.position.x,hn.position.z,hn.position.y);b!==null&&hn.position.y<b+.2&&(hn.position.y=b+.2);const M=Pt.clamp(-m*.9,-.02,.02);if(hn.rotation.z+=(M-hn.rotation.z)*Math.min(1,i*5),pr>0){const C=pr*.06;hn.position.x+=(Math.random()-.5)*C,hn.position.y+=(Math.random()-.5)*C}if(zi.position.copy(hn.position),fn.position.set(re.position.x+25,35,re.position.z-20),fn.target.position.copy(re.position),fn.target.updateMatrixWorld(),dn.position.set(re.position.x-18,28,re.position.z+12),dn.target.position.copy(re.position),dn.target.updateMatrixWorld(),ic.position.set(re.position.x-16,12,re.position.z-18),ut.hint.textContent="",Vn.pendingCount>0&&(ut.hint.textContent="กำลังโหลดพื้นที่..."),Mb(i),yb(),Sb(i),Tb(),No.visible&&bb(),hb(i),Xn.visible){const C=Xn.children[3],w=Xn.children[4],L=performance.now()*.001;C.scale.setScalar(.92+Math.sin(L*9)*.08),C.material.opacity=.72+Math.sin(L*13)*.14,w.intensity=2.1+Math.sin(L*7.3)*.5}if(Rb(i,Cn),it.update(i,Cn),Math.hypot(re.position.x-Mi.position.x,re.position.z-Mi.position.z)<5)ut.hint.textContent=Yn?"กำจัดสิ่งมีชีวิตในถ้ำให้หมดก่อนออกไป":"กด E / ใช้เพื่อเข้าถ้ำต้องสาป";else if(re.position.distanceTo(Bs.position)<5)ut.hint.textContent="กด E / ใช้ เพื่อโต้ตอบ";else{const C=it.getNearbySecretName();C&&(ut.hint.textContent=`กด E / ใช้เพื่อค้นพบ ${C}`)}un()}fe("#time-toggle").addEventListener("click",()=>{Pn==="auto"?(Pn="day",Ke("เปลี่ยนเป็นกลางวัน")):Pn==="day"?(Pn="night",Ke("เปลี่ยนเป็นกลางคืน")):(Pn="auto",Ke("เปิดระบบเวลาอัตโนมัติ")),Ye.dayNightMode=Pn});const uu=fe("#inventory-open"),Pb=fe("#inventory-close"),hu=fe("#quest-open"),Xa=fe("#quest-panel"),rh=fe("#map-open"),qa=fe("#map-panel");function Kn(i=null){i!=="inventory"&&(ut.inventory.classList.add("hidden"),uu.setAttribute("aria-expanded","false")),i!=="quest"&&(Xa.classList.add("hidden"),hu.setAttribute("aria-expanded","false")),i!=="map"&&(qa.classList.add("hidden"),rh.setAttribute("aria-expanded","false")),i!=="settings"&&ut.settings.classList.add("hidden"),i!=="shop"&&it.closeShop(),i!=="camp"&&Fo(),i!=="dialogue"&&it.closeDialogue()}function zp(){return!ut.settings.classList.contains("hidden")||!ut.inventory.classList.contains("hidden")||!Xa.classList.contains("hidden")||!qa.classList.contains("hidden")||!ut.shop.classList.contains("hidden")||!Co.classList.contains("hidden")||!fb.classList.contains("hidden")}uu.addEventListener("click",()=>{const i=ut.inventory.classList.contains("hidden");Kn(i?"inventory":null),ut.inventory.classList.toggle("hidden",!i),uu.setAttribute("aria-expanded",String(i))});Pb.addEventListener("click",()=>{Kn()});hu.addEventListener("click",()=>{const i=Xa.classList.contains("hidden");Kn(i?"quest":null),Xa.classList.toggle("hidden",!i),hu.setAttribute("aria-expanded",String(i)),i&&it.refreshQuestUI()});fe("#quest-close").addEventListener("click",()=>{Kn()});function Hp(){const i=qa.classList.contains("hidden");Kn(i?"map":null),qa.classList.toggle("hidden",!i),rh.setAttribute("aria-expanded",String(i)),i&&it.drawWorldMap(Cn)}rh.addEventListener("click",Hp);fe("#map-close").addEventListener("click",()=>{Kn()});fe("#settings-open").addEventListener("click",()=>{Kn("settings"),ut.settings.classList.remove("hidden")});fe("#settings-close").addEventListener("click",()=>{Kn()});fe("#quality").addEventListener("change",i=>{Ye.quality=i.target.value,Yi()});fe("#sensitivity").addEventListener("input",i=>{Ye.sensitivity=Number(i.target.value),Yi()});fe("#rain-toggle").addEventListener("change",i=>{Ye.weather=i.target.checked,Yi()});const ef=fe("#postfx-toggle");ef&&ef.addEventListener("change",i=>{Ye.postfx=i.target.checked,Yi()});fe("#sound-toggle").addEventListener("change",i=>{Ye.sound=i.target.checked,Yi(),Ye.sound&&Bt.play("pickup")});const $a=fe("#save-slot");$a&&$a.addEventListener("change",i=>{yi=Pt.clamp(Math.round(Number(i.target.value))||1,1,3),Ke(`เลือกช่องบันทึก ${yi}`)});fe("#shop-open").addEventListener("click",()=>{const i=ut.shop.classList.contains("hidden");Kn(i?"shop":null),i&&it.openShop(),ut.shop.setAttribute("aria-expanded",String(i))});fe("#camp").addEventListener("click",Op);fe("#camp-close").addEventListener("click",Fo);fe("#camp-rest").addEventListener("click",mb);fe("#camp-cook").addEventListener("click",gb);fe("#fps-limit").addEventListener("change",i=>{Ye.fpsLimit=i.target.value,Ke(i.target.value==="auto"?"ปลดล็อกเฟรมเรต":`จำกัดที่ ${i.target.value} FPS`)});fe("#mobile-layout").addEventListener("change",i=>{Ye.mobileLayout=i.target.value,Yi()});const tf=fe("#music-toggle");tf&&tf.addEventListener("change",i=>{Ye.music=i.target.checked,Yi()});const nf=fe("#inventory");nf&&nf.addEventListener("click",i=>{const e=i.target.closest("[data-class]");e&&LS(e.dataset.class)});fe("#save-button").addEventListener("click",()=>ih(!0,yi));fe("#load-button").addEventListener("click",()=>tb(yi));for(const i of Object.keys(oi)){const e=fe(`#weapon-${i}`);e&&e.addEventListener("click",()=>CS(i))}for(const i of Object.keys(ai)){const e=fe(`#armor-${i}`);e&&e.addEventListener("click",()=>PS(i))}const sf=fe("#skill-tree");sf&&sf.addEventListener("click",i=>{const e=i.target.closest("[data-skill]");e&&DS(e.dataset.skill)});const rf=fe("#upgrade-weapon");rf&&rf.addEventListener("click",()=>it.upgradeGear("weapon"));const of=fe("#upgrade-armor");of&&of.addEventListener("click",()=>it.upgradeGear("armor"));function fc(){const i=Math.max(1,window.innerWidth),e=Math.max(1,window.innerHeight);hn.aspect=i/e,hn.updateProjectionMatrix(),sn.setSize(i,e);const t=Ye.quality==="high"?Math.min(devicePixelRatio||1,2):Ye.quality==="low"?1:Math.min(devicePixelRatio||1,1.5);sn.setPixelRatio(t),Fs.resize(i,e,t)}addEventListener("resize",fc);addEventListener("orientationchange",()=>{setTimeout(fc,150)});window.visualViewport&&window.visualViewport.addEventListener("resize",fc);Pn=Ye.dayNightMode||"auto";$a&&($a.value=String(yi));Yi();un();$i();nc();Bu();it.refreshQuestUI();fc();let af=0;function Vp(i=performance.now()){requestAnimationFrame(Vp);const e=Number(Ye.fpsLimit);if(e>0&&i-af<1e3/e-1.5)return;af=i;const t=Math.min(hc.getDelta(),.05);zp()||Cb(t),Fs.render()}Vp();
