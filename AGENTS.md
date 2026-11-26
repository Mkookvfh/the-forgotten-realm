# Project Notes

## Run / verify
- Dev: `npm run dev` (Vite, port 5173). Dependencies must be installed first: `npm install --no-audit --no-fund --fetch-retries=3`.

## Architecture
- `src/main.js` is the monolithic game entry (player, combat, world, HUD, loop).
- `src/systems.js` holds data tables (items, recipes, shop, quests) and systems logic.
- `src/cinematic.js` / `src/prologue.js` = post-processing pipeline + intro overlay.
- `src/pixelSprites.js` = shared pixel-art sprite atlas generator; the **player** sprite is drawn separately in `main.js` via `drawPixelHero` + `rebuildPlayerAtlas()`.

## Notes / pitfalls
- The player sprite is armor-aware: equipping `plate` or `dragonplate` re-renders the hero atlas with a knight helm (see `rebuildPlayerAtlas`, driven by `state.armor`).
- Knight class (`classDefs.knight`) applies its +20 HP via `selectClass` (adds/removes `hpBonus` from `state.maxHp`).
- The prologue runs once at boot; it is skipped by pressing Enter/Space/click. During it, `animate()` routes to `prologueUpdate()` (ambient systems + camera drift) instead of the full gameplay `update()`.
- Campfire embers are a `THREE.Points` child of `campFire` (index 5), animated in the main `update()` campFire block.
