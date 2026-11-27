# THE FORGOTTEN PATH — Native PS2 2D prototype

This folder is the **PlayStation 2 native project**, separate from the existing web/mobile prototype.

## Game direction
- 2D side-scrolling scenic exploration
- Peaceful walking only; no monsters and no combat
- Landscapes, paths, trees, clouds, a lake, and distant mountains
- PS2 controller support (D-pad left/right)

## Current milestone
The first C prototype draws placeholder scenery with gsKit and moves a placeholder traveler using libpad. It now includes separate cloud/mountain/foreground parallax speeds, corrected world-to-camera positioning, and a simple two-leg walking blockout that returns to an idle pose when the D-pad is released. It estimates footstep distance and maps provisional world zones to subtle, brief DualShock 2 large-motor pulses (grass, wood, shallow water, forest, snow). SELECT toggles rumble. If the controller does not expose a supported motor, movement continues without vibration. The traveler is still primitive geometry, not a finished pixel-art sprite sheet. This is a technical foundation, not final art. Next milestones: authored sprite frames, animated scenery, a proper region layout, sound, and save/checkpoint support.

## Build requirements
A PC or remote Linux build environment with the PS2DEV toolchain, PS2SDK, and gsKit is required. Android can edit this repository, but is not a practical native PS2 compile/test environment.

In a configured PS2DEV shell, install/build gsKit as described by its upstream project, then:

```sh
cd ps2
make
```

Expected output: `forgotten_path.elf`. Test in PCSX2 or on compatible PS2 hardware. The build has not yet been verified in a PS2SDK environment.

## Controls
- D-pad left/right: walk
- SELECT: toggle optional gentle DualShock 2 rumble
- No combat, enemies, or timed challenges

## Notes
- Renderer uses simple GS primitives as placeholder art.
- Video mode uses gsKit's detected default PS2 mode.
