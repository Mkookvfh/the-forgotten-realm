# THE FORGOTTEN REALM

Playable 3D dark-fantasy third-person prototype for web and Android.

See [README_TH.md](README_TH.md) for Thai setup instructions, included systems, limitations, and the GitHub Actions Android debug APK workflow.
See [CHANGELOG_0.13.1.md](CHANGELOG_0.13.1.md) for companion follow/hold commands in update 0.13.1, and [CHANGELOG_0.13.md](CHANGELOG_0.13.md) for the NPC/enemy expansion and companion pass in update 0.13, [CHANGELOG_0.12.md](CHANGELOG_0.12.md) for the Blood Pact combo pass in update 0.12, [CHANGELOG_0.11.md](CHANGELOG_0.11.md) for the living world map, NPC Q&A and reputation pass in update 0.11, [CHANGELOG_0.10.md](CHANGELOG_0.10.md) for the HUD/UI refresh, [CHANGELOG_0.7.md](CHANGELOG_0.7.md) for the systems upgrade in update 0.7, [CHANGELOG_0.8.md](CHANGELOG_0.8.md) for the visual pass in update 0.8, [CHANGELOG_0.9.md](CHANGELOG_0.9.md) for the stability and progression pass in update 0.9, and earlier passes in the changelog archive.

Update 0.15 foundation: mobile pinch-to-zoom camera control, quality-scaled sun/moon shadow maps, and an isolated two-player session protocol with sanitized snapshots and interpolation hooks. Online play still requires a server/transport adapter and remote-player rendering.

Update 0.13.1 highlights: companions can now switch between follow and hold-position guard modes; the order is saved, and older saves default safely to follow.

Update 0.13 highlights: 17 new talkable NPCs across all seven regions (23 total) plus three hireable mercenaries; three new enemy types (raider, revenant, warlord) and 24 new spawns forming raider camps and patrols; and the Wayfarer's Bond companion system — hire one sellsword, ranger or warden who follows, fights and slows enemies, shown on a parchment companion card. Companion hits do not feed the Blood Pact. Bounties and loot cover the new enemies, and saves move to v11 while still loading v7–v10.

Update 0.12 highlights: the Blood Pact combo system — consecutive weapon hits within 2.8 seconds build up to 20 stacks; at 5/10/15 stacks damage rises by 8/18/30% and every hit restores 1/2/3 HP. A parchment combo card shows the count, tier, countdown bar and bonuses, with floating heal numbers, tier colours and a new sound cue. Best combo is tracked per save, and saves move to v10 while still loading v7–v9.

Update 0.11 highlights: a parchment world map with zoom/pan, fog of war, seven waypoints and fast travel; NPC dialogue with scripted topics plus typed free-text questions that work offline; a five-faction reputation system that changes greetings, secret topics and merchant prices; and a camera stabilization pass that eases the feet over voxel steps so walking on rough ground no longer shakes the view. Save schema v9 loads v7/v8 saves.

Update 0.7 highlights: seven weapons and six armors (axe, bow, frost staff, ranger gear, rune robe and more), three classes, a camp/rest/cook system with respawn point, real projectiles, directional melee, pause-on-panel, working shop button / FPS limit / mobile layout / music toggle, and save-load fixes that keep inventory, skills, spells and quests.

Update 0.8 highlights: the distracting cone-shaped `Dark_Rock` spires are removed, the sky gradient is deeper and renders correctly with and without post-processing (including low-quality mobile), night lighting is readable again, grass gets a base-to-tip gradient, glowing motes are soft sprites, and an empty interaction-hint pill no longer sits over the scene.

Update 0.9 highlights: walking no longer shakes the camera (smoothed look target, dt-capped follow, terrain clearance), streamed GLB chunks now build a 1 m collision grid so buildings, walls and tree trunks actually block the player, and two repeatable progression systems are added: three-slot bounty contracts (gold + XP + materials, 60-gold reroll or free when all done) and per-item blacksmith upgrades up to +5 (+10% weapon damage and +4% armor reduction per tier). Saves move to version 8 and still load older slots.

Update 0.10 highlights: a warm wood-and-parchment HUD replaces the dark glass panels — the top bar becomes five large menu buttons plus a time toggle, the status card packs level, HP/STA/MP and gold/crystals into one row, the minimap moves clear of the action pad, and the seven touch controls become gold-rimmed circular buttons in a compact 4+3 layout with attack under the thumb. Landscape uses a right-hand side sheet for panels, and all dialogs, shop, camp and settings screens share the same readable theme. No gameplay logic changed; every id and save still works.

This is a prototype, not a production-ready open-world game. Android builds from the included workflow are debug APKs for testing only.

Update 0.14.0: the player now uses a lightweight procedural 3D humanoid rig with idle, walk, run, attack, dodge and hurt poses. A rigged GLB with embedded animation clips can be placed at `public/assets/characters/player.glb`; it is loaded automatically when present, while the built-in rig remains the safe fallback. Existing movement, combat, equipment, save data and touch controls are preserved.
