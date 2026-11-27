#include "tfr_input.h"

#include <libpad.h>
#include <string.h>

static unsigned char s_pad_buffer[256] __attribute__((aligned(64)));
static padButtonStatus s_pad;
static int s_open = 0;

static int axis_value(unsigned char raw)
{
    int value = (int)raw - 128;
    if (value > -18 && value < 18) return 0;
    if (value > 0) value -= 18;
    else value += 18;
    return value;
}

int tfr_input_init(void)
{
    padInit(0);
    if (padPortOpen(0, 0, s_pad_buffer) == 0) return 0;

    s_open = 1;
    padSetMainMode(0, 0, PAD_MODE_ANALOG, PAD_MODE_LOCK);
    return 1;
}

void tfr_input_read(TFRInput *out)
{
    int state;
    if (!out) return;
    memset(out, 0, sizeof(*out));
    if (!s_open) return;

    state = padGetState(0, 0);
    if (state != PAD_STATE_STABLE && state != PAD_STATE_FINDCTP1) return;
    if (padRead(0, 0, &s_pad) != 0) return;

    out->move_x = axis_value(s_pad.ljoy_h);
    out->move_y = -axis_value(s_pad.ljoy_v);
    out->look_x = axis_value(s_pad.rjoy_h);
    out->look_y = -axis_value(s_pad.rjoy_v);

    out->confirm = !(s_pad.btns & PAD_CROSS);
    out->cancel  = !(s_pad.btns & PAD_CIRCLE);
    out->menu    = !(s_pad.btns & PAD_TRIANGLE);
    out->sprint  = !(s_pad.btns & PAD_L1);
    out->pause   = !(s_pad.btns & PAD_START);
}
