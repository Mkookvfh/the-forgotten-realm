# THE FORGOTTEN REALM — Combat Update 0.3

เกม 3D Dark Fantasy มุมมอง Third Person สำหรับ Android (ต้นแบบ)

## สิ่งที่มีในต้นแบบนี้
- ฉากป่ามืด หมอก แสงจันทร์ และหอคอยร้าง
- ตัวละครต้นแบบ 3D พร้อมกล้องติดตาม
- เดิน วิ่ง กระโดด และหลบหลีก
- ปุ่มควบคุมสัมผัสสำหรับมือถือ และ WASD/ลูกศรสำหรับคอมพิวเตอร์
- ระบบหลบหลีกใช้ Stamina 20 และมีช่วงป้องกันความเสียหายสั้น ๆ
- โครงสร้างพร้อมต่อยอดเป็น Android APK ด้วย Capacitor

## ต้องเข้าใจก่อน
โปรเจกต์นี้เป็นต้นแบบที่เล่นได้ ไม่ใช่เกม Open World เต็มรูปแบบ และยังไม่มีโมเดลตัวละคร/เมืองระดับผลิตจริง
การสร้าง APK ต้องมี Node.js และ Android SDK/Android Studio หรือบริการ build บนคลาวด์ที่รองรับ Capacitor

## รันบนเครื่องที่มี Node.js
```bash
npm install
npm run dev
```
เปิด URL ที่ Vite แสดง (เช่น http://localhost:5173)

## สร้างไฟล์เว็บสำหรับแพ็กแอป
```bash
npm run build
```

## เตรียมโปรเจกต์ Android
```bash
npx cap add android
npm run android:sync
```
จากนั้นเปิดโฟลเดอร์ `android` ด้วย Android Studio แล้ว Build APK

## แผนพัฒนาถัดไป
1. เปลี่ยนตัวละครต้นแบบเป็นโมเดล GLB พร้อมแอนิเมชัน
2. เพิ่มภูมิภาค เมือง อาคารที่เข้าได้ และระบบแผนที่
3. เพิ่ม NPC ภารกิจ เซฟเกม และปรับประสิทธิภาพมือถือ


## Build APK ผ่าน GitHub Actions (เหมาะกับการทำงานจาก Android)
1. อัปโหลดไฟล์ทั้งหมดใน ZIP นี้เข้า GitHub repository โดยให้ `package.json` อยู่ที่ root
2. Commit ลง branch `main`
3. เปิดแท็บ **Actions** ของ repository
4. เลือก workflow **Build Android APK**
5. กด **Run workflow** (หรือรอให้ทำงานหลัง push)
6. เมื่อสำเร็จ เปิดรายการ workflow run แล้วดาวน์โหลด artifact ชื่อ `the-forgotten-realm-debug-apk`
7. แตก ZIP artifact เพื่อรับ `app-debug.apk`

หมายเหตุ: workflow นี้สร้าง Debug APK สำหรับทดสอบ ยังไม่ใช่ APK สำหรับเผยแพร่บน Play Store
