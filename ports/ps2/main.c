/*
 * THE FORGOTTEN REALM — PS2 Edition
 * Early PS2SDK scaffold. No graphics/gameplay yet.
 */

#include <tamtypes.h>
#include <kernel.h>
#include <libpad.h>

static unsigned char pad_buffer[256] __attribute__((aligned(64)));

int main(void)
{
    padButtonStatus buttons;

    padInit(0);

    if (padPortOpen(0, 0, pad_buffer) == 0) {
        return 1;
    }

    /* Starter loop: read DualShock 2 input.
       Rendering and player movement will be added in later milestones. */
    while (1) {
        int state = padGetState(0, 0);

        if (state == PAD_STATE_STABLE && padGetReqState(0, 0) == PAD_REQ_COMPLETE) {
            padRead(0, 0, &buttons);

            /* Buttons are intentionally not mapped to gameplay yet. */
            (void)buttons;
        }

        SleepThread();
    }

    return 0;
}
