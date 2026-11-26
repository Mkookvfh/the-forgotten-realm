# โครงสร้างผู้เล่น 2 คน (เตรียมระบบ Multiplayer)

ตอนนี้เกมยังเป็น Single-player และยังไม่มีเซิร์ฟเวอร์/การเชื่อมต่อจริง ไฟล์ `src/multiplayer/session.js` จึงเป็น **ชั้น session/protocol ที่เตรียมไว้** ไม่ใช่ระบบออนไลน์ที่เล่นด้วยกันได้แล้ว

## ส่วนที่เตรียมไว้
- จำกัดห้องไม่เกิน 2 ผู้เล่น
- Player ID แยกกัน และ protocol version
- ข้อความ join / snapshot / leave
- ตรวจสอบข้อมูลตำแหน่งและค่าผู้เล่นก่อนรับ
- เก็บ snapshot แบบจำกัดจำนวน และ interpolate ตำแหน่งผู้เล่นอีกคนเพื่อลดการกระตุก
- แยก transport adapter ออกจาก gameplay เพื่อให้เกมเดิมทำงานได้โดยไม่ต้องมีเซิร์ฟเวอร์

## ขั้นตอนถัดไปเพื่อให้เล่นออนไลน์ได้จริง
1. ทำ WebSocket server หรือบริการ relay ที่รองรับห้อง 2 คน
2. ทำ adapter ที่มี `send(message)` และ `subscribe(handler)`
3. สร้างตัวละคร remote player และนำค่าจาก `getRemotePlayers()` ไปขยับโมเดล
4. เพิ่มระบบ host authority สำหรับ combat, loot, quests และ save เพื่อป้องกันข้อมูลไม่ตรงกัน
5. ทดสอบ reconnect, latency, disconnect และ validation ฝั่ง server

**หมายเหตุ:** ห้ามเชื่อค่าดาเมจ/ไอเทม/เควสต์ที่ส่งจาก client โดยตรงเมื่อมี server จริง ต้องให้ host/server เป็นผู้ตัดสิน gameplay สำคัญ
