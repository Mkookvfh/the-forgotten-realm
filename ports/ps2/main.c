/*
 * THE FORGOTTEN REALM — PS2 Edition
 * Input-ready native prototype. Rendering and world are future milestones.
 */

#include <tamtypes.h>
#include <kernel.h>
#include "tfr_input.h"

int main(void)
{
    TFRInput input;

    if (!tfr_input_init()) {
        return 1;
    }

    /* Temporary 60 Hz input loop. A renderer/game loop will replace this. */
    while (1) {
        tfr_input_read(&input);

        /* Placeholder: consume normalized input in future gameplay code. */
        (void)input;

        DelayThread(16667);
    }

    return 0;
}
