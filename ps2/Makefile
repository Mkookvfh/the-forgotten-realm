EE_BIN = forgotten_path.elf
EE_OBJS = src/main.o
EE_LIBS = -lgskit -ldmakit -lpad -lm
EE_INCS += -I$(GSKIT)/ee/gs/include -I$(GSKIT)/ee/dma/include
EE_CFLAGS += -O2 -G0 -Wall -Wextra
EE_LDFLAGS += -L$(GSKIT)/lib

include $(PS2SDK)/samples/Makefile.pref
include $(PS2SDK)/samples/Makefile.eeglobal
