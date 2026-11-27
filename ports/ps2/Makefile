EE_BIN = tfr_ps2.elf
EE_OBJS = main.o tfr_input.o
EE_LIBS = -lgskit -ldmakit -lpad -lm

all: $(EE_BIN)

clean:
	rm -f $(EE_OBJS) $(EE_BIN)

include $(PS2SDK)/samples/Makefile.pref
include $(PS2SDK)/samples/Makefile.eeglobal
