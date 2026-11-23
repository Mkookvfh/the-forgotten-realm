export function createAudio() {
  let context = null;
  let master = null;
  let rainGain = null;
  let ambienceStarted = false;
  let enabled = true;
  let weather = true;

  function ensureContext() {
    if (context) return context;

    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    if (!AudioContextClass) return null;

    context = new AudioContextClass();
    master = context.createGain();
    master.gain.value = enabled ? 0.32 : 0;
    master.connect(context.destination);

    startAmbience();
    return context;
  }

  function startAmbience() {
    if (ambienceStarted || !context || !master) return;
    ambienceStarted = true;

    const droneGain = context.createGain();
    droneGain.gain.value = 0.035;
    droneGain.connect(master);

    for (const frequency of [55, 82.5, 110]) {
      const oscillator = context.createOscillator();
      oscillator.type = 'sine';
      oscillator.frequency.value = frequency;
      oscillator.connect(droneGain);
      oscillator.start();
    }

    const lfo = context.createOscillator();
    const lfoGain = context.createGain();
    lfo.frequency.value = 0.08;
    lfoGain.gain.value = 0.018;
    lfo.connect(lfoGain);
    lfoGain.connect(droneGain.gain);
    lfo.start();

    const length = context.sampleRate * 2;
    const buffer = context.createBuffer(1, length, context.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < length; i++) data[i] = Math.random() * 2 - 1;

    const rain = context.createBufferSource();
    rain.buffer = buffer;
    rain.loop = true;

    const filter = context.createBiquadFilter();
    filter.type = 'bandpass';
    filter.frequency.value = 1800;
    filter.Q.value = 0.4;

    rainGain = context.createGain();
    rainGain.gain.value = weather ? 0.018 : 0;

    rain.connect(filter);
    filter.connect(rainGain);
    rainGain.connect(master);
    rain.start();
  }

  function tone(frequency, duration, type, volume, endFrequency) {
    if (!context || !master) return;

    const now = context.currentTime;
    const oscillator = context.createOscillator();
    const gain = context.createGain();

    oscillator.type = type || 'sine';
    oscillator.frequency.setValueAtTime(frequency, now);
    if (endFrequency) {
      oscillator.frequency.exponentialRampToValueAtTime(
        Math.max(20, endFrequency),
        now + duration
      );
    }

    gain.gain.setValueAtTime(0.0001, now);
    gain.gain.exponentialRampToValueAtTime(volume, now + 0.012);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + duration);

    oscillator.connect(gain);
    gain.connect(master);
    oscillator.start(now);
    oscillator.stop(now + duration + 0.02);
  }

  function noise(duration, volume) {
    if (!context || !master) return;

    const length = Math.floor(context.sampleRate * duration);
    const buffer = context.createBuffer(1, length, context.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < length; i++) {
      data[i] = (Math.random() * 2 - 1) * (1 - i / length);
    }

    const source = context.createBufferSource();
    source.buffer = buffer;

    const filter = context.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.value = 1200;

    const gain = context.createGain();
    gain.gain.value = volume;

    source.connect(filter);
    filter.connect(gain);
    gain.connect(master);
    source.start();
  }

  function chord(frequencies, duration, volume) {
    frequencies.forEach((frequency, index) => {
      setTimeout(() => tone(frequency, duration, 'triangle', volume), index * 95);
    });
  }

  function play(name) {
    if (!enabled) return;

    const contextRef = ensureContext();
    if (!contextRef) return;
    if (contextRef.state === 'suspended') contextRef.resume();

    switch (name) {
      case 'attack':
        tone(260, 0.13, 'sawtooth', 0.075, 110);
        noise(0.09, 0.045);
        break;
      case 'hit':
        tone(100, 0.16, 'square', 0.06, 55);
        noise(0.14, 0.09);
        break;
      case 'pickup':
        tone(640, 0.12, 'sine', 0.07, 980);
        break;
      case 'coin':
        tone(880, 0.1, 'triangle', 0.06);
        setTimeout(() => tone(1320, 0.12, 'triangle', 0.05), 70);
        break;
      case 'potion':
        tone(420, 0.24, 'sine', 0.07, 760);
        break;
      case 'spell':
        tone(320, 0.3, 'sine', 0.08, 920);
        break;
      case 'craft':
        chord([392, 523, 659], 0.16, 0.05);
        break;
      case 'quest':
        chord([523, 659, 784], 0.2, 0.06);
        break;
      case 'level':
        chord([523, 659, 784, 1046], 0.24, 0.07);
        break;
      case 'boss':
        tone(110, 0.55, 'sawtooth', 0.09, 65);
        noise(0.35, 0.07);
        break;
      case 'dodge':
        noise(0.12, 0.05);
        break;
      case 'thunder':
        noise(1.3, 0.14);
        tone(52, 1.1, 'sine', 0.09, 30);
        break;
      default:
        break;
    }
  }

  function unlock() {
    const contextRef = ensureContext();
    if (contextRef && contextRef.state === 'suspended') contextRef.resume();
  }

  function setEnabled(value) {
    enabled = Boolean(value);
    if (master && context) {
      master.gain.setTargetAtTime(enabled ? 0.32 : 0, context.currentTime, 0.05);
    }
  }

  function setWeather(value) {
    weather = Boolean(value);
    if (rainGain && context) {
      rainGain.gain.setTargetAtTime(weather ? 0.018 : 0, context.currentTime, 0.2);
    }
  }

  return { play, unlock, setEnabled, setWeather };
}
