# THE FORGOTTEN REALM — PS2 Edition

This directory is a **separate PS2 port foundation** for the existing web game. It does not replace or modify the current browser/Android game.

## Current status

- [x] Separate PS2 port directory and branch
- [x] PS2SDK Makefile starter
- [x] Basic DualShock 2 input initialization scaffold
- [ ] Graphics and 3D scene
- [ ] Third-person player and camera
- [ ] Convert/replace Three.js assets and runtime
- [ ] Audio, save data, scene streaming
- [ ] Build and test on PCSX2 / real PS2

The current web game uses JavaScript and Three.js. PS2 cannot run that runtime directly, so gameplay systems and rendering must be reimplemented using PS2-compatible code and assets.

## Build (requires a computer with PS2SDK installed)

From this directory, run:

```sh
make
```

The expected output is `tfr_ps2.elf`. This is only a starter executable once a compatible PS2SDK toolchain is configured; the project has **not** been built or tested yet.

## Next milestone

Create a simple 3D test scene with a ground plane, one low-poly player placeholder, and a controllable third-person camera. Keep the first map small to fit PS2 memory and performance limits.
