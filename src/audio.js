export function createAudio() {
  let context = null;
  let master = null;
  let enabled = true;
  let weatherEnabled = true;
  let weatherType = 'clear';
  let biome = 'meadow';
  let isNight = false;
  let campNearby = false;
  let musicEnabled = true;
  let musicMode = 'explore';
  let musicBus = null;
  let musicVoices = [];
  let musicTimer = null;
  let musicStep = 0;
  let owlTimer = null;

  const base = import.meta.env?.BASE_URL || '/';
  const makeAudio = (file, loop = true) => {
    if (typeof Audio === 'undefined') return null;
    const element = new Audio(`${base}assets/audio/${file}`);
    element.preload = 'none';
    element.loop = loop;
    element.volume = 0;
    return element;
  };

  // Ogg tracks stream from disk and are only started when their world layer is audible.
  const loops = {
    forest: makeAudio('forest-ambience.ogg'),
    birds: makeAudio('birds.ogg'),
    rain: makeAudio('rain.ogg'),
    river: makeAudio('river.ogg'),
    campfire: makeAudio('campfire.ogg'),
    crypt: makeAudio('dungeon-wind.ogg'),
    insects: makeAudio('night-insects.ogg')
  };
  const thunderTrack = makeAudio('thunder.ogg', false);
  const owlTrack = makeAudio('owl.ogg', false);

  const musicChords = {
    explore: [110, 164.81, 220],
    village: [130.81, 164.81, 196],
    dungeon: [73.42, 110, 146.83],
    battle: [98, 146.83, 196]
  };
  const musicScales = {
    explore: [220, 261.63, 329.63, 392, 329.63, 261.63],
    village: [261.63, 329.63, 392, 523.25, 392, 329.63],
    dungeon: [146.83, 174.61, 220, 261.63, 220, 174.61],
    battle: [196, 233.08, 293.66, 349.23, 392, 349.23]
  };

  function scheduleOwl() {
    if (!enabled || !isNight || biome === 'dungeon' || !owlTrack || owlTimer) return;
    owlTimer = setTimeout(() => {
      owlTimer = null;
      if (!enabled || !isNight || biome === 'dungeon') return;
      owlTrack.currentTime = 0;
      owlTrack.volume = .08;
      owlTrack.play().catch(() => {});
      owlTrack.onended = scheduleOwl;
    }, 16000 + Math.random() * 24000);
  }

  function stopOwl() {
    if (owlTimer) clearTimeout(owlTimer);
    owlTimer = null;
    if (owlTrack) {
      owlTrack.pause();
      owlTrack.onended = null;
    }
  }

  function scheduleMusicNote() {
    if (!context || !musicEnabled || !musicBus) return;
    const scale = musicScales[musicMode] || musicScales.explore;
    const frequency = scale[musicStep++ % scale.length];
    const now = context.currentTime;
    const oscillator = context.createOscillator();
    const envelope = context.createGain();
    oscillator.type = 'sine';
    oscillator.frequency.value = frequency;
    envelope.gain.setValueAtTime(.0001, now);
    envelope.gain.exponentialRampToValueAtTime(.085, now + .09);
    envelope.gain.exponentialRampToValueAtTime(.0001, now + (musicMode === 'battle' ? .62 : 1.05));
    oscillator.connect(envelope);
    envelope.connect(musicBus);
    oscillator.start(now);
    oscillator.stop(now + (musicMode === 'battle' ? .65 : 1.08));
    musicTimer = setTimeout(scheduleMusicNote, musicMode === 'battle' ? 650 : musicMode === 'dungeon' ? 1450 : 1180);
  }

  function startMusic() {
    if (!context || !master || musicBus) return;
    musicBus = context.createGain();
    musicBus.gain.value = musicEnabled ? .34 : 0;
    musicBus.connect(master);
    for (const [index, frequency] of (musicChords[musicMode] || musicChords.explore).entries()) {
      const oscillator = context.createOscillator();
      const voiceGain = context.createGain();
      oscillator.type = index === 0 ? 'sine' : 'triangle';
      oscillator.frequency.value = frequency;
      voiceGain.gain.value = index === 0 ? .055 : .022;
      oscillator.connect(voiceGain);
      voiceGain.connect(musicBus);
      oscillator.start();
      musicVoices.push(oscillator);
    }
    if (musicEnabled) scheduleMusicNote();
  }

  function ensureContext() {
    if (context) return context;
    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    if (!AudioContextClass) return null;
    context = new AudioContextClass();
    master = context.createGain();
    master.gain.value = enabled ? 0.32 : 0;
    master.connect(context.destination);
    startMusic();
    return context;
  }

  function updateAmbience() {
    const indoor = biome === 'dungeon';
    const heavyWeather = weatherType === 'storm' || weatherType === 'rain';
    const targets = {
      forest: indoor ? 0 : biome === 'forest' ? .105 : biome === 'river' ? .035 : .05,
      birds: indoor || isNight || heavyWeather ? 0 : biome === 'village' ? .12 : .085,
      rain: weatherEnabled && heavyWeather ? (indoor ? .035 : weatherType === 'storm' ? .16 : .12) : 0,
      river: !indoor && biome === 'river' ? .15 : 0,
      campfire: campNearby ? .16 : biome === 'village' ? .025 : indoor ? .045 : 0,
      crypt: indoor ? .12 : 0,
      insects: !indoor && isNight ? (weatherType === 'storm' ? .035 : .08) : 0
    };
    for (const [name, element] of Object.entries(loops)) {
      if (!element) continue;
      const volume = enabled ? targets[name] : 0;
      element.volume = volume;
      if (volume > 0 && element.paused) element.play().catch(() => {});
      else if (volume <= 0 && !element.paused) element.pause();
    }
    if (enabled && isNight && !indoor) scheduleOwl();
    else stopOwl();
  }

  function setEnvironment(nextBiome, night, nearCamp = false) {
    const next = nextBiome || 'meadow';
    const nextNight = Boolean(night);
    const nextCamp = Boolean(nearCamp);
    if (biome === next && isNight === nextNight && campNearby === nextCamp) return;
    biome = next;
    isNight = nextNight;
    campNearby = nextCamp;
    updateAmbience();
  }

  function setMusicMode(mode) {
    const next = musicChords[mode] ? mode : 'explore';
    if (musicMode === next) return;
    musicMode = next;
    musicStep = 0;
    if (musicBus && context) {
      musicVoices.forEach((voice, index) => voice.frequency.setTargetAtTime(musicChords[musicMode][index], context.currentTime, .65));
      if (musicTimer) clearTimeout(musicTimer);
      musicTimer = null;
      if (musicEnabled) scheduleMusicNote();
    }
  }

  function setMusicEnabled(value) {
    musicEnabled = Boolean(value);
    if (musicBus && context) musicBus.gain.setTargetAtTime(musicEnabled ? .34 : 0, context.currentTime, .25);
    if (!musicEnabled && musicTimer) { clearTimeout(musicTimer); musicTimer = null; }
    if (musicEnabled && context && musicBus && !musicTimer) scheduleMusicNote();
  }

  function tone(frequency, duration, type, volume, endFrequency) {
    if (!context || !master) return;
    const now = context.currentTime;
    const oscillator = context.createOscillator();
    const gain = context.createGain();
    oscillator.type = type || 'sine';
    oscillator.frequency.setValueAtTime(frequency, now);
    if (endFrequency) oscillator.frequency.exponentialRampToValueAtTime(Math.max(20, endFrequency), now + duration);
    gain.gain.setValueAtTime(.0001, now);
    gain.gain.exponentialRampToValueAtTime(volume, now + .012);
    gain.gain.exponentialRampToValueAtTime(.0001, now + duration);
    oscillator.connect(gain);
    gain.connect(master);
    oscillator.start(now);
    oscillator.stop(now + duration + .02);
  }

  function noise(duration, volume, cutoff = 1200) {
    if (!context || !master) return;
    const length = Math.floor(context.sampleRate * duration);
    const buffer = context.createBuffer(1, length, context.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < length; i++) data[i] = (Math.random() * 2 - 1) * (1 - i / length);
    const source = context.createBufferSource();
    source.buffer = buffer;
    const filter = context.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.value = cutoff;
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
    updateAmbience();
    if (name === 'thunder') {
      if (thunderTrack) {
        thunderTrack.currentTime = 0;
        thunderTrack.volume = .28;
        thunderTrack.play().catch(() => {});
      }
      return;
    }
    const contextRef = ensureContext();
    if (!contextRef) return;
    if (contextRef.state === 'suspended') contextRef.resume();
    switch (name) {
      case 'attack': tone(260, .13, 'sawtooth', .075, 110); noise(.09, .045); break;
      case 'hit': tone(100, .16, 'square', .06, 55); noise(.14, .09); break;
      case 'pickup': tone(640, .12, 'sine', .07, 980); break;
      case 'coin': tone(880, .1, 'triangle', .06); setTimeout(() => tone(1320, .12, 'triangle', .05), 70); break;
      case 'potion': tone(420, .24, 'sine', .07, 760); break;
      case 'spell': tone(320, .3, 'sine', .08, 920); break;
      case 'ui': tone(520, .055, 'sine', .025, 680); break;
      case 'chest': chord([392, 523, 659], .16, .045); break;
      case 'enemy': tone(150, .12, 'triangle', .04, 85); break;
      case 'craft': chord([392, 523, 659], .16, .05); break;
      case 'quest': chord([523, 659, 784], .2, .06); break;
      case 'level': chord([523, 659, 784, 1046], .24, .07); break;
      case 'boss': tone(110, .55, 'sawtooth', .09, 65); noise(.35, .07); break;
      case 'dodge': noise(.12, .05); break;
      default: break;
    }
  }

  function unlock() {
    const contextRef = ensureContext();
    if (contextRef && contextRef.state === 'suspended') contextRef.resume();
    updateAmbience();
  }

  function playFootstep(surface = 'grass') {
    if (!enabled) return;
    const contextRef = ensureContext();
    if (!contextRef) return;
    if (contextRef.state === 'suspended') contextRef.resume();
    const profiles = { grass: [620, .025], dirt: [1050, .03], stone: [1900, .032], wet: [430, .028], wood: [1350, .026] };
    const [cutoff, volume] = profiles[surface] || profiles.grass;
    noise(.075, volume, cutoff);
  }

  function setEnabled(value) {
    enabled = Boolean(value);
    if (master && context) master.gain.setTargetAtTime(enabled ? .32 : 0, context.currentTime, .05);
    if (!enabled && thunderTrack) thunderTrack.pause();
    updateAmbience();
  }

  function setWeather(value, type = weatherType) {
    if (weatherEnabled === Boolean(value) && weatherType === (type || 'clear')) return;
    weatherEnabled = Boolean(value);
    weatherType = type || 'clear';
    updateAmbience();
  }

  return { play, playFootstep, unlock, setEnabled, setWeather, setEnvironment, setMusicMode, setMusicEnabled };
}
