# The Forgotten Realm — Cinematic AAA Graphics Upgrade

อัปเกรดภาพเป็นสไตล์ Cinematic โดยไม่แตะระบบเกม/เควส/UI logic เดิม

## ไฟล์ในแพ็กเกจ

| ไฟล์ | สถานะ |
| --- | --- |
| `src/cinematic.js` | ไฟล์ใหม่ — post-processing + ชั้นบรรยากาศ |
| `src/main.js` | แก้ไข — แสง/ฟ้า/กล้อง/ผูก pipeline |
| `src/audio.js` | แก้ไข — เพิ่มเสียงฟ้าร้อง (thunder) |
| `index.html` | แก้ไข — favicon คริสตัล (แก้ 404 favicon.ico) |

## วิธีติดตั้ง

1. คัดลอกไฟล์ทับในโปรเจกต์ตาม path เดิม (`src/`, `index.html`)
2. `npm install` แล้ว `npm run dev` (หรือ `npm run build` สำหรับ production)
3. ในเกมกดปุ่ม **ตั้งค่า** แล้วติ๊ก **"เปิดเอฟเฟกต์ภาพ Cinematic (Bloom / Vignette)"**

## สิ่งที่เพิ่มเข้าไป

**Post-processing pipeline (`src/cinematic.js`)**
- `EffectComposer`: RenderPass → UnrealBloomPass → ShaderPass (สี grade + vignette + film grain) → OutputPass
- เกรดสีเงาโทนเย็น / ไฮไลต์โทนอุ่น, อิ่มสีเล็กน้อย, vignette มุมมืด, grain แบบฟิล์ม
- เกรดปรับตาม quality: high = bloom .42, medium = .26, low = ปิด bloom/grain/vignette และ render ตรง

**ท้องฟ้าและแสง**
- สกายเชเดอร์ใหม่: กลางวัน/พลบค่ำ/กลางคืน, แถบแสงทองพระอาทิตย์ตก, ดวงจันทร์มี glow, ดาว procedural กระพริบตอนกลางคืน
- แสงพระอาทิตย์เปลี่ยนเป็นสีอุ่นชมพู-ส้มเมื่อมุมต่ำ; หมอกติดโทนพลบค่ำ; exposure 1.22; เพิ่ม fill light กลางคืนให้ฉากอ่านชัด

**บรรยากาศ**
- เมฆลอยชั้นบน (sprite เนุ่ม) ลอยช้า ๆ และเปลี่ยนสีตามเวลา
- หมอกพื้นดินกระจายรอบตัวละคร หนาขึ้นตอนกลางคืน
- ฝนฟ้าคะนอง: แฟลชสว่าง + เสียงฟ้าร้อง ตอนฝนตกกลางคืน

**วัสดุและกล้อง**
- คริสตัลวิญญาณ emissive 2.1 + ฮาโล่เรืองแสง additive โดน bloom
- กล้องมี lean/roll ตอนเลี้ยว และสั่นเบา ๆ ตอนโดนโจมตี (ใช้ `hurtAnimTimer` เดิม)
- หญ้าเพิ่ม emissive เล็กน้อย, พื้นดินกลางวันสว่างขึ้น

## หมายเหตุประสิทธิภาพ

- Mobile (`isTouch`) ลดจำนวนเมฆเป็น 8 และหมอกเป็น 10 ชิ้นอัตโนมัติ
- ปิด toggle ได้ทันทีในแผงตั้งค่า โดยไม่ต้องรีเฟรช
- ไฟล์ `dist/` และ `package-lock.json` ใน VM นี้ถูกสร้างตอนทดสอบบิลด์ **ไม่ต้องส่ง** ควรให้ CI/เครื่องผู้ใช้ build เอง
