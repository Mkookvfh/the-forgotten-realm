# THE FORGOTTEN REALM — Multiplayer Relay

This is a small WebSocket relay for two-player rooms. It does not host the game world; GitHub Pages still hosts the game client.

## Deploy (Render)

1. Push this folder to the repository.
2. Open Render and create a **New Web Service** from this repository.
3. Set **Root Directory** to `server`, **Build Command** to `npm install`, and **Start Command** to `npm start`.
4. Deploy. Copy the service URL (for example `https://your-service.onrender.com`).
5. In the game's multiplayer panel, use the secure WebSocket URL: change `https://` to `wss://` (for example `wss://your-service.onrender.com`).

The included `render.yaml` is a deployment blueprint. If Render asks for confirmation, review the service settings before creating it.

## Test

Open `/health` on the service URL. It should return JSON with `"ok": true`.

Then open the game on two devices/browsers:
- Player 1: Multiplayer → Create room; share the 6-character code.
- Player 2: Multiplayer → enter the code → Join.
- Both players must use the same `wss://` server URL.

Free hosting may sleep when idle, so the first connection can take a little time. This relay is a prototype: it relays player movement only; combat, quests, loot, NPC/world authority and anti-cheat are not yet synchronized.
