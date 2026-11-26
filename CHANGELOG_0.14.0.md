# THE FORGOTTEN REALM — Update 0.14.0

## Player character upgrade
- Replaced the visible 4-direction player sprite with a lightweight procedural 3D humanoid rig.
- Added basic idle, walk, run, attack, dodge, jump and hurt poses.
- Added armor-aware color changes for the built-in character.
- Added optional GLB player model loading through Three.js GLTFLoader.
- Embedded GLB animation clips are mapped by clip name and played with AnimationMixer cross-fades.
- Missing or invalid optional model files fall back to the built-in 3D rig.
- Kept the original sprite atlas in place as a hidden compatibility fallback.
- Preserved existing movement, combat, equipment, save/load and touch-control code.

## Add your own rigged model
Place a rigged and animated GLB at:
`public/assets/characters/player.glb`

The model should face +Z, have feet near its origin, and include animation clips named similarly to Idle, Walk, Run, Attack, Dodge, Hurt or Jump. The game scales the model to approximately 2 world units tall.
