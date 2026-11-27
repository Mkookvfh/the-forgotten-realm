# PS2 Port Status

## Source project
- Original: THE FORGOTTEN REALM (JavaScript / Three.js)
- Port target: PlayStation 2 homebrew using PS2SDK
- Port branch: `port/ps2-foundation`

## Milestones
1. Foundation and controller input — code added; not compiled.
2. PS2 graphics test — pending.
3. Player movement and third-person camera — pending.
4. Small outdoor level — pending.
5. Recreate selected game systems and convert assets — pending.
6. Build verification on PCSX2 and/or hardware — pending.

## Current code
- `main.c`: starts the input layer and runs a throttled input loop.
- `tfr_input.c/.h`: reads DualShock 2, applies an analog deadzone, and exposes movement/look axes plus button flags.
- `Makefile`: builds both C source files into the starter ELF.

## Important
A successful GitHub commit is not a successful PS2 build. Do not label an ELF as playable until it has been compiled with PS2SDK and tested.
