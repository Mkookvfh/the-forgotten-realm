# THE FORGOTTEN REALM — Complete Prototype 0.2

โปรเจกต์เกม 3D Dark Fantasy บน Three.js + Vite + Capacitor โดยต่อยอดจาก repository เดิม

## สิ่งที่มีในชุดนี้

### ระยะ 1 — Core / Controls / Stability
- กล้องบุคคลที่สาม: ลากเมาส์บน PC และปัดนิ้วด้านขวาบนมือถือ
- การเดินสัมพันธ์กับทิศทางกล้อง
- WASD / ลูกศร, วิ่ง, กระโดด, จอยสติ๊กมือถือ
- รีเซ็ตอินพุตเมื่อหน้าต่างเสียโฟกัสหรือสลับแอป
- ปรับขนาดหน้าจอและจำกัด pixel ratio สำหรับมือถือ
- ตั้งค่าคุณภาพกราฟิกและความไวกล้อง

### ระยะ 2 — Gameplay Prototype
- HP และ Stamina
- ศัตรูผู้พิทักษ์แบบ patrol/chase และโจมตีระยะใกล้
- โจมตีด้วย F หรือปุ่มมือถือ
- เก็บผลึกวิญญาณ
- ภารกิจไปยังแท่นโบราณและกำจัดผู้พิทักษ์
- ยาฟื้นฟูด้วย Q
- XP และ Level
- บันทึก/โหลดด้วย localStorage

### ระยะ 3 — World / Atmosphere Prototype
- วงจรกลางวัน/พลบค่ำ/กลางคืน
- ท้องฟ้า shader และแผ่นดวงจันทร์
- แสงทิศทางและแสงจันทร์
- ฝนแบบ particle ที่เปิด/ปิดได้
- ป่า หอคอย และทางหินแบบ procedural

## ความต้องการ
- Node.js 22+
- npm
- สำหรับ APK: Java 21 และ Android SDK (หรือใช้ GitHub Actions)

## รันบนคอมพิวเตอร์
```bash
npm install
npm run dev
```
เปิด URL ที่ Vite แสดงใน terminal

## ทดสอบ build
```bash
npm run build
npm run preview
```

## สร้าง Android
```bash
npm install
npm run build
npx cap add android
npx cap sync android
```
หากโฟลเดอร์ `android/` มีอยู่แล้ว ไม่ต้องรัน `cap add` ซ้ำ ให้ใช้:
```bash
npx cap sync android
```
จากนั้นเปิด Android Studio หรือ build ผ่าน workflow `Build Android APK`

## GitHub Actions
- `Deploy Web Game`: build และ deploy GitHub Pages เมื่อ push ไป `main`
- `Build Android APK`: สร้าง debug APK และเก็บไว้ใน Actions Artifacts

## การควบคุม
| คำสั่ง | PC | มือถือ |
|---|---|---|
| เดิน | WASD / ลูกศร | จอยซ้าย |
| วิ่ง | Shift | ปุ่มวิ่ง |
| กระโดด | Space | ปุ่มกระโดด |
| หมุนกล้อง | ลากเมาส์ | ปัดด้านขวาของจอ |
| โจมตี | F | ปุ่มโจมตี |
| โต้ตอบ | E | ปุ่มใช้ |
| ใช้ยา | Q | ผ่านคีย์บอร์ดใน prototype |

## ข้อจำกัดที่ต้องทราบ
นี่คือ playable prototype ที่รวมระบบพื้นฐานของทั้งสามระยะ ไม่ใช่เกม Open World เต็มรูปแบบ ยังไม่มีแผนที่ขนาดใหญ่จริง, ระบบ NPC/บทสนทนาเต็มรูปแบบ, ระบบอุปกรณ์/คลังไอเทมแบบละเอียด, เสียง, multiplayer หรือระบบ collision/navigation ขั้นสูง

ต้องทดสอบบน Chrome PC และ Android จริงก่อนเผยแพร่ การ build สำเร็จไม่ได้รับประกันว่าไม่มีบัคด้านการเล่นหรือประสิทธิภาพทุกอุปกรณ์
