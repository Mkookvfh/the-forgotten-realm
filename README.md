# THE FORGOTTEN REALM

Playable 3D dark-fantasy third-person prototype for web and Android.

See [README_TH.md](README_TH.md) for Thai setup instructions, included systems, limitations, and the GitHub Actions Android debug APK workflow.
See [CHANGELOG_0.7.md](CHANGELOG_0.7.md) for the systems upgrade in update 0.7, [CHANGELOG_0.8.md](CHANGELOG_0.8.md) for the visual pass in update 0.8, and [CHANGELOG_0.9.md](CHANGELOG_0.9.md) for the stability and progression pass in update 0.9.

Update 0.7 highlights: seven weapons and six armors (axe, bow, frost staff, ranger gear, rune robe and more), three classes, a camp/rest/cook system with respawn point, real projectiles, directional melee, pause-on-panel, working shop button / FPS limit / mobile layout / music toggle, and save-load fixes that keep inventory, skills, spells and quests.

Update 0.8 highlights: the distracting cone-shaped `Dark_Rock` spires are removed, the sky gradient is deeper and renders correctly with and without post-processing (including low-quality mobile), night lighting is readable again, grass gets a base-to-tip gradient, glowing motes are soft sprites, and an empty interaction-hint pill no longer sits over the scene.

Update 0.9 highlights: walking no longer shakes the camera (smoothed look target, dt-capped follow, terrain clearance), streamed GLB chunks now build a 1 m collision grid so buildings, walls and tree trunks actually block the player, and two repeatable progression systems are added: three-slot bounty contracts (gold + XP + materials, 60-gold reroll or free when all done) and per-item blacksmith upgrades up to +5 (+10% weapon damage and +4% armor reduction per tier). Saves move to version 8 and still load older slots.

This is a prototype, not a production-ready open-world game. Android builds from the included workflow are debug APKs for testing only.
