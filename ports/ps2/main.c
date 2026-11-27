/*
 * THE FORGOTTEN REALM — native PS2 graphics prototype
 * Small low-poly exploration scene: ground grid, hills, player marker,
 * and a third-person camera controlled by the DualShock 2.
 *
 * This is a native PS2 test scene, not a conversion of the Three.js runtime.
 */
#include <tamtypes.h>
#include <kernel.h>
#include <math.h>
#include <gsKit.h>
#include <dmaKit.h>
#include <libpad.h>
#include "tfr_input.h"

#define PI 3.14159265f
#define GRID_RADIUS 12
#define GRID_STEP 2.0f
#define FOCAL_LENGTH 250.0f
#define NEAR_CLIP 0.35f

static GSGLOBAL *gsGlobal;
static float player_x = 0.0f, player_z = 0.0f;
static float player_yaw = 0.0f;
static float camera_yaw = 0.0f;
static float camera_pitch = 0.18f;

typedef struct { float x, y, z; } Vec3;
typedef struct { float x, y, z; } ScreenPoint;

static const u64 COLOR_SKY   = GS_SETREG_RGBAQ(18, 32, 58, 0x80, 0);
static const u64 COLOR_GROUND= GS_SETREG_RGBAQ(45, 62, 54, 0x80, 0);
static const u64 COLOR_GRID  = GS_SETREG_RGBAQ(82, 105, 88, 0x80, 0);
static const u64 COLOR_HILL  = GS_SETREG_RGBAQ(62, 82, 74, 0x80, 0);
static const u64 COLOR_PLAYER= GS_SETREG_RGBAQ(225, 188, 112, 0x80, 0);
static const u64 COLOR_WHITE = GS_SETREG_RGBAQ(220, 226, 230, 0x80, 0);

static void graphics_init(void)
{
    gsGlobal = gsKit_init_global();
    gsGlobal->PrimAlphaEnable = GS_SETTING_ON;
    dmaKit_init(D_CTRL_RELE_OFF, D_CTRL_MFD_OFF, D_CTRL_STS_UNSPEC,
                D_CTRL_STD_OFF, D_CTRL_RCYC_8, 1 << DMA_CHANNEL_GIF);
    dmaKit_chan_init(DMA_CHANNEL_GIF);
    gsKit_vram_clear(gsGlobal);
    gsKit_init_screen(gsGlobal);
    gsKit_mode_switch(gsGlobal, GS_ONESHOT);
}

static void present(void)
{
    gsKit_queue_exec(gsGlobal);
    gsKit_sync_flip(gsGlobal);
    gsKit_queue_reset(gsGlobal->Per_Queue);
}

/* Project a world-space point through the third-person camera. */
static int project_point(Vec3 p, ScreenPoint *out)
{
    float forward_x = sinf(camera_yaw);
    float forward_z = cosf(camera_yaw);
    float cam_x = player_x - forward_x * 6.0f;
    float cam_z = player_z - forward_z * 6.0f;
    float cam_y = 3.0f;

    float dx = p.x - cam_x;
    float dy = p.y - cam_y;
    float dz = p.z - cam_z;

    float right_x = cosf(camera_yaw);
    float right_z = -sinf(camera_yaw);
    float view_x = dx * right_x + dz * right_z;
    float view_z = dx * forward_x + dz * forward_z;

    /* Camera looks slightly down toward the player. */
    float view_y = dy * cosf(camera_pitch) - view_z * sinf(camera_pitch);
    float depth = dy * sinf(camera_pitch) + view_z * cosf(camera_pitch);

    if (depth < NEAR_CLIP) return 0;

    out->x = (float)gsGlobal->Width * 0.5f + view_x * FOCAL_LENGTH / depth;
    out->y = (float)gsGlobal->Height * 0.5f - view_y * FOCAL_LENGTH / depth;
    out->z = depth;
    return 1;
}

static void draw_world_line(Vec3 a, Vec3 b, u64 color)
{
    ScreenPoint pa, pb;
    if (!project_point(a, &pa) || !project_point(b, &pb)) return;
    if (pa.x < -100 || pa.x > gsGlobal->Width + 100 ||
        pa.y < -100 || pa.y > gsGlobal->Height + 100 ||
        pb.x < -100 || pb.x > gsGlobal->Width + 100 ||
        pb.y < -100 || pb.y > gsGlobal->Height + 100) return;

    gsKit_prim_line_3d(gsGlobal, pa.x, pa.y, 0x100000,
                       pb.x, pb.y, 0x100000, color);
}

static void draw_ground(void)
{
    int i;
    Vec3 a, b;
    /* A compact, moving-centered grid gives the scene a visible horizon. */
    for (i = -GRID_RADIUS; i <= GRID_RADIUS; ++i) {
        float offset = (float)i * GRID_STEP;
        a.x = player_x - GRID_RADIUS * GRID_STEP;
        a.y = 0.0f;
        a.z = player_z + offset;
        b.x = player_x + GRID_RADIUS * GRID_STEP;
        b.y = 0.0f;
        b.z = player_z + offset;
        draw_world_line(a, b, (i == 0) ? COLOR_GROUND : COLOR_GRID);

        a.x = player_x + offset;
        a.y = 0.0f;
        a.z = player_z - GRID_RADIUS * GRID_STEP;
        b.x = player_x + offset;
        b.y = 0.0f;
        b.z = player_z + GRID_RADIUS * GRID_STEP;
        draw_world_line(a, b, (i == 0) ? COLOR_GROUND : COLOR_GRID);
    }
}

/* A few angular hills create a simple landscape silhouette. */
static void draw_hills(void)
{
    Vec3 a, b, c;
    int k;
    for (k = 0; k < 4; ++k) {
        float x = player_x + (float)(k - 2) * 13.0f;
        float z = player_z + 24.0f + (float)(k % 2) * 5.0f;
        a.x=x-8; a.y=0; a.z=z;
        b.x=x; b.y=8.0f + (float)(k % 3); b.z=z+3;
        c.x=x+8; c.y=0; c.z=z;
        draw_world_line(a,b,COLOR_HILL);
        draw_world_line(b,c,COLOR_HILL);
        draw_world_line(c,a,COLOR_HILL);
    }
}

static void draw_player_marker(void)
{
    Vec3 a,b,c,d;
    float fx=sinf(player_yaw), fz=cosf(player_yaw);
    float rx=cosf(player_yaw), rz=-sinf(player_yaw);
    a.x=player_x; a.y=1.5f; a.z=player_z;
    b.x=player_x-fx*0.65f+rx*0.45f; b.y=0.0f; b.z=player_z-fz*0.65f+rz*0.45f;
    c.x=player_x-fx*0.65f-rx*0.45f; c.y=0.0f; c.z=player_z-fz*0.65f-rz*0.45f;
    d.x=player_x+fx*0.8f; d.y=0.0f; d.z=player_z+fz*0.8f;
    draw_world_line(a,b,COLOR_PLAYER);
    draw_world_line(a,c,COLOR_PLAYER);
    draw_world_line(a,d,COLOR_PLAYER);
    draw_world_line(b,c,COLOR_PLAYER);
    draw_world_line(b,d,COLOR_PLAYER);
    draw_world_line(c,d,COLOR_PLAYER);
}

static void update_game(const TFRInput *in)
{
    float turn = (float)in->look_x / 127.0f;
    float forward = (float)in->move_y / 127.0f;
    float strafe = (float)in->move_x / 127.0f;
    float speed = in->sprint ? 0.12f : 0.075f;

    camera_yaw += turn * 0.035f;
    player_yaw = camera_yaw;

    player_x += (sinf(player_yaw) * forward +
                 cosf(player_yaw) * strafe) * speed;
    player_z += (cosf(player_yaw) * forward -
                 sinf(player_yaw) * strafe) * speed;
}

int main(void)
{
    TFRInput input;
    graphics_init();

    if (!tfr_input_init()) {
        gsKit_clear(gsGlobal, COLOR_SKY);
        gsKit_prim_sprite(gsGlobal, 24, 24, 616, 48, 1, COLOR_WHITE);
        present();
        while (1) DelayThread(1000000);
    }

    while (1) {
        tfr_input_read(&input);
        update_game(&input);

        gsKit_clear(gsGlobal, COLOR_SKY);
        draw_ground();
        draw_hills();
        draw_player_marker();

        /* Simple HUD frame marks the screen center / camera direction. */
        gsKit_prim_line_3d(gsGlobal, gsGlobal->Width*0.5f-5,
                           gsGlobal->Height*0.5f, 0x100000,
                           gsGlobal->Width*0.5f+5,
                           gsGlobal->Height*0.5f, 0x100000, COLOR_WHITE);
        gsKit_prim_line_3d(gsGlobal, gsGlobal->Width*0.5f,
                           gsGlobal->Height*0.5f-5, 0x100000,
                           gsGlobal->Width*0.5f,
                           gsGlobal->Height*0.5f+5, 0x100000, COLOR_WHITE);
        present();
        DelayThread(16667);
    }
    return 0;
}
