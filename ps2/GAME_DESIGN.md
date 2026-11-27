# THE FORGOTTEN PATH — PS2 Game Design

## Vision
A peaceful 2D side-scrolling Atmospheric Exploration / Walking Simulator for PlayStation 2. The player is a nameless traveler crossing beautiful landscapes at their own pace. The game has no combat, monsters, health bar, death, or pressure-driven quests.

## PS2 identity and sensory features
- DualShock 2 subtle vibration: short, low-intensity tactile cues for footfalls on distinct surfaces (wooden bridge, shallow water, snow). Use the controller's supported motor channels conservatively, avoid continuous vibration, and allow the player to disable it.
- Dynamic music: layered acoustic guitar, lo-fi piano, and ambient pads respond gently to movement speed. When the player stops, musical layers fade down gradually, leaving environmental ambience.
- Multi-layer parallax: distant sky and mountains move slowest; middle-ground ruins and trees move more; foreground grass and branches move fastest.
- PS2-friendly 2D rendering: textured sprite layers, palette-conscious high-detail pixel art or hand-painted watercolor-style backgrounds, with carefully budgeted alpha effects.

## Art and atmosphere
Hi-bit pixel art or hand-painted watercolor-inspired scenery. Real-time transitions include sunset, starry night, rain, and drifting snow. Weather and lighting should remain calm and readable rather than dramatic or threatening.

## Four regions
1. Whispering Valley — wide wind-swept grassland, moss-covered ruins, and distant birds.
2. Glowwood Canopy — ancient night forest, softly glowing plants and mushrooms, tiny light motes following footsteps.
3. Mirror Lake Ruins — shallow water around an old city, reflective-looking water and architecture silhouettes.
4. Cloudreach Summit — ascending mountain trail through soft clouds, ending at sunrise above the horizon.

## Movement
- Walk and gentle jog
- Climb low ledges where clearly indicated
- Small jumps across streams
- Responsive but relaxed movement; no difficult platforming or punishment

## Environmental interaction
- Brush foliage aside and trigger falling leaves
- Play a wooden flute to invite nearby birds or glowing insects
- Discover rest points: benches, waterside rocks, quiet scenic spots
- Rest points allow the player to pause, listen, admire the view, and save progress
- Optional hidden murals and notes reveal fragments of the world's history without mandatory quests

## Audio
- Acoustic guitar, lo-fi piano, and ambient music
- Wind, rain, flowing water, footsteps, birds, insects, foliage, and snow/wind layers
- Audio should crossfade smoothly and never startle the player

## Core principles
1. Calm exploration over challenge
2. Beauty and atmosphere over combat
3. Optional discovery, no pressure
4. Accessible controls and no fail states
5. Designed specifically for PS2 hardware and DualShock 2

## Development milestones
1. Native PS2 movement, camera, and placeholder landscape
2. Surface-aware footstep audio and optional gentle rumble
3. Sprite animation and multi-layer parallax
4. First complete region: Whispering Valley
5. Dynamic ambience/music layers and weather transitions
6. Rest points, save system, and optional lore
7. Build the remaining three regions and optimize for PS2

## Implementation caution
The current `ps2/src/main.c` is an early primitive-based prototype. DualShock 2 motor control, audio playback/mixing, weather effects, sprite assets, and a full save system are design goals—not yet implemented or verified. Build and test with a configured PS2SDK/gsKit environment and PCSX2 or hardware before claiming compatibility.
