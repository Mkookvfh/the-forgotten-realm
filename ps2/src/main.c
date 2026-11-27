#include <math.h>
#include <sifrpc.h>
#include <tamtypes.h>
#include <libpad.h>
#include <gsKit.h>
#include <dmaKit.h>

#define WORLD_LENGTH 3600.0f
#define PLAYER_SPEED 2.2f
#define FOOTSTEP_DISTANCE 48.0f
#define RUMBLE_FRAMES 2

/* Surface zones are provisional until the full level map is authored. */
enum Surface { SURFACE_GRASS, SURFACE_WOOD, SURFACE_WATER, SURFACE_FOREST, SURFACE_SNOW };

static unsigned char pad_buffer[256] __attribute__((aligned(64)));
static int rumble_ready = 0;
static int rumble_enabled = 1;
static int rumble_frames_left = 0;
static float distance_since_step = 0.0f;
static float previous_player_x = 120.0f;
static int previous_select_down = 0;

static u64 color(u8 r, u8 g, u8 b)
{
    return GS_SETREG_RGBAQ(r, g, b, 0x00, 0);
}

static void rect(GSGLOBAL *gs, float x, float y, float w, float h, u64 c)
{
    gsKit_prim_sprite(gs, x, y, x + w, y + h, 1, c);
}

static void triangle(GSGLOBAL *gs, float x1, float y1, float x2, float y2,
                    float x3, float y3, u64 c)
{
    gsKit_prim_triangle(gs, x1, y1, x2, y2, x3, y3, 1, c);
}

static void tree(GSGLOBAL *gs, float x, float ground, float scale)
{
    rect(gs, x - 4 * scale, ground - 42 * scale, 8 * scale, 42 * scale,
         color(91, 62, 43));
    triangle(gs, x - 25 * scale, ground - 24 * scale, x, ground - 78 * scale,
             x + 25 * scale, ground - 24 * scale, color(42, 111, 72));
    triangle(gs, x - 19 * scale, ground - 44 * scale, x, ground - 92 * scale,
             x + 19 * scale, ground - 44 * scale, color(66, 143, 89));
}

static enum Surface surface_at(float world_x)
{
    if (world_x < 750.0f) return SURFACE_GRASS;
    if (world_x < 1050.0f) return SURFACE_WOOD;
    if (world_x < 1700.0f) return SURFACE_WATER;
    if (world_x < 2450.0f) return SURFACE_FOREST;
    return SURFACE_SNOW;
}

static int surface_rumble_strength(enum Surface surface)
{
    switch (surface) {
        case SURFACE_WOOD: return 24;
        case SURFACE_WATER: return 12;
        case SURFACE_FOREST: return 16;
        case SURFACE_SNOW: return 14;
        case SURFACE_GRASS:
        default: return 10;
    }
}

static void stop_rumble(void)
{
    char motors[6] = { 0, 0, (char)0xff, (char)0xff, (char)0xff, (char)0xff };
    if (rumble_ready) padSetActDirect(0, 0, motors);
    rumble_frames_left = 0;
}

static void start_footstep_rumble(enum Surface surface)
{
    char motors[6] = { 0, 0, (char)0xff, (char)0xff, (char)0xff, (char)0xff };
    if (!rumble_ready || !rumble_enabled) return;
    motors[1] = (char)surface_rumble_strength(surface);
    padSetActDirect(0, 0, motors);
    rumble_frames_left = RUMBLE_FRAMES;
}

static void draw_scene(GSGLOBAL *gs, float camera, float player_x, float tick)
{
    float w = (float)gs->Width;
    float h = (float)gs->Height;
    float ground = h * 0.78f;
    float hero_x = w * 0.34f;
    u64 sky = color(151, 205, 224);
    u64 meadow = color(91, 150, 91);
    u64 path = color(190, 166, 126);

    rect(gs, 0, 0, w, h, sky);
    rect(gs, w * 0.76f, h * 0.13f, 40, 40, color(255, 226, 151));

    /* Parallax mountain silhouettes. */
    for (int i = -1; i < 4; ++i) {
        float x = i * 270.0f - fmodf(camera * 0.12f, 270.0f);
        triangle(gs, x, h * 0.65f, x + 145, h * 0.29f,
                x + 300, h * 0.65f, color(101, 145, 165));
        x = i * 340.0f - fmodf(camera * 0.22f, 340.0f);
        triangle(gs, x, h * 0.72f, x + 180, h * 0.44f,
                x + 360, h * 0.72f, color(61, 112, 121));
    }

    rect(gs, 0, ground, w, h - ground, meadow);

    /* The path gently bends across the landscape. */
    for (int i = -1; i < 7; ++i) {
        float world = i * 180.0f;
        float x = world - camera + hero_x;
        float curve = 8.0f * sinf((world + camera) * 0.004f);
        rect(gs, x, ground + 22.0f + curve, 190, 38, path);
    }

    /* Lake visible through the first stretch of the journey. */
    if (player_x > 480.0f && player_x < 1750.0f) {
        rect(gs, w * 0.48f, ground - 42, w * 0.45f, 34,
             color(84, 158, 180));
        for (int i = 0; i < 5; ++i)
            rect(gs, w * 0.52f + i * 45.0f, ground - 24 + (i % 2) * 6,
                 28, 2, color(174, 221, 226));
    }

    for (int i = 0; i < 12; ++i) {
        float world = i * 315.0f + 90.0f;
        float x = world - camera + hero_x;
        if (x > -110 && x < w + 110)
            tree(gs, x, ground + 20, 0.65f + (i % 3) * 0.18f);
    }

    /* Temporary traveler silhouette; custom sprite animation comes next. */
    float bob = sinf(tick * 0.18f) * 2.0f;
    rect(gs, hero_x - 8, ground - 42 + bob, 16, 17, color(45, 47, 55));
    rect(gs, hero_x - 11, ground - 25 + bob, 22, 25, color(83, 83, 112));
    rect(gs, hero_x - 10, ground - 2 + bob, 8, 14, color(45, 47, 55));
    rect(gs, hero_x + 2, ground - 2 + bob, 8, 14, color(45, 47, 55));
}

int main(void)
{
    GSGLOBAL *gs;
    struct padButtonStatus buttons;
    float player_x = 120.0f, camera = 0.0f, tick = 0.0f;
    int pad_open;
    int pad_motor_setup_state = 0; /* 0=not started, 1=align request pending, 2=done */

    SifInitRpc(0);
    padInit(0);
    pad_open = padPortOpen(0, 0, pad_buffer);

    gs = gsKit_init_global();
    if (!gs) return 1;

    dmaKit_init(D_CTRL_RELE_OFF, D_CTRL_MFD_OFF, D_CTRL_STS_UNSPEC,
                D_CTRL_STD_OFF, D_CTRL_RCYC_8, 1 << DMA_CHANNEL_GIF);
    dmaKit_chan_init(DMA_CHANNEL_GIF);

    gs->PSM = GS_PSM_CT16;
    gs->PSMZ = GS_PSMZ_16;
    gs->DoubleBuffering = GS_SETTING_ON;
    gs->ZBuffering = GS_SETTING_OFF;
    gs->PrimAlphaEnable = GS_SETTING_OFF;

    gsKit_init_screen(gs);
    gsKit_mode_switch(gs, GS_PERSISTENT);
    gsKit_set_test(gs, GS_ZTEST_OFF);

    for (;;) {
        u16 pressed = 0;
        if (pad_open && padGetState(0, 0) == PAD_STATE_STABLE) {
            if (pad_motor_setup_state == 0 && padGetReqState(0, 0) == PAD_RSTAT_COMPLETE) {
                /* DualShock 2: enable the large motor; no motor is required for play. */
                const char motor_alignment[6] = { 0, 1, (char)0xff, (char)0xff, (char)0xff, (char)0xff };
                if (padInfoAct(0, 0, -1, 0) > 0 && padSetActAlign(0, 0, motor_alignment))
                    pad_motor_setup_state = 1; /* Wait for libpad's request to finish. */
                else
                    pad_motor_setup_state = 2; /* Unsupported controller: keep playing. */
            }
            if (pad_motor_setup_state == 1 && padGetReqState(0, 0) == PAD_RSTAT_COMPLETE) {
                rumble_ready = 1;
                pad_motor_setup_state = 2;
            }
            if (padRead(0, 0, &buttons) != 0)
                pressed = (u16)(0xFFFFu ^ buttons.btns);
        }

        {
            int select_down = (pressed & PAD_SELECT) != 0;
            if (select_down && !previous_select_down) {
                rumble_enabled = !rumble_enabled;
                if (!rumble_enabled) stop_rumble();
            }
            previous_select_down = select_down;
        }

        previous_player_x = player_x;
        if (pressed & PAD_LEFT)  { player_x -= PLAYER_SPEED; tick += 1.0f; }
        if (pressed & PAD_RIGHT) { player_x += PLAYER_SPEED; tick += 1.0f; }
        if (player_x < 0) player_x = 0;
        if (player_x > WORLD_LENGTH) player_x = WORLD_LENGTH;

        {
            float walked = fabsf(player_x - previous_player_x);
            distance_since_step += walked;
            if (walked > 0.0f && distance_since_step >= FOOTSTEP_DISTANCE) {
                distance_since_step = 0.0f;
                start_footstep_rumble(surface_at(player_x));
            }
        }
        if (rumble_frames_left > 0) {
            --rumble_frames_left;
            if (rumble_frames_left == 0) stop_rumble();
        }

        camera = player_x - (float)gs->Width * 0.34f;
        if (camera < 0) camera = 0;
        if (camera > WORLD_LENGTH - (float)gs->Width)
            camera = WORLD_LENGTH - (float)gs->Width;

        gsKit_clear(gs, color(151, 205, 224));
        draw_scene(gs, camera, player_x, tick);
        gsKit_queue_exec(gs);
        gsKit_sync_flip(gs);
    }

    stop_rumble();
    if (pad_open) padPortClose(0, 0);
    padEnd();
    gsKit_deinit_global(gs);
    return 0;
}
