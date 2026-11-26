# Player character model

Optional player model path:
`public/assets/characters/player.glb`

Use a glTF 2.0 binary (.glb) character with a rigged Skeleton and embedded animation clips. Recommended clip names: Idle, Walk, Run, Attack, Dodge, Hurt, Jump.

The game checks whether this file exists at runtime. If it is absent or fails to load, the built-in procedural 3D character is used. The model should face +Z and have its feet near the bottom of its bounding box.
