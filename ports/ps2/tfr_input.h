/*
 * THE FORGOTTEN REALM — PS2 input layer
 * DualShock 2 input normalization for the first playable prototype.
 */
#ifndef TFR_INPUT_H
#define TFR_INPUT_H

#include <tamtypes.h>

typedef struct {
    int move_x;       /* -127..127 */
    int move_y;       /* -127..127; negative means forward */
    int look_x;       /* -127..127 */
    int look_y;       /* -127..127 */
    int confirm;
    int cancel;
    int menu;
    int sprint;
    int pause;
} TFRInput;

int tfr_input_init(void);
void tfr_input_read(TFRInput *out);

#endif
