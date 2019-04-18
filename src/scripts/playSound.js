/* create context and gain once */
const context = new (window.AudioContext || window.webkitAudioContext)();
const gain = context.createGain();
const master = context.createGain();
gain.connect(master);
master.connect(context.destination);

/* create custom waveforms for oscollators, buffer for noise */
const oscillator1Real = new Float32Array(Array.from({length: 32}, (_, n) => (n === 0 ? 0 : 4 / (n * Math.PI) * Math.sin(Math.PI * n * 0.27))));
const oscillator1Imag = new Float32Array(Array.from({length: 32}, () => 0));
const oscillator1Wave = context.createPeriodicWave(oscillator1Real, oscillator1Imag);
const oscillator2Real = new Float32Array(Array.from({length: 48}, () => Math.random() * 2 - 1));
const oscillator2Imag = new Float32Array(Array.from({length: 48}, () => 0));
const oscillator2Wave = context.createPeriodicWave(oscillator2Real, oscillator2Imag);
const bufferSize = context.sampleRate;
const buffer = context.createBuffer(1, bufferSize, bufferSize);
const output = buffer.getChannelData(0);
for (let i = 0; i < bufferSize; i++) {
  output[i] = Math.random() * 2 - 1;
}

let oscillator2 = null;
let noise = null;

/* oscillator2 and noise are being created in outer function
 * because it used only in one case (explosion) */
const makeNoise = () => {
  oscillator2 = context.createOscillator();
  oscillator2.setPeriodicWave(oscillator2Wave);
  oscillator2.connect(gain);
  noise = context.createBufferSource();
  noise.buffer = buffer;
  noise.connect(gain);
}

export default function playSound(sound) {
  let now = context.currentTime;

  /* muting without sound stop */
  if (this.state.isMuted) {
    master.gain.setValueAtTime(0, now);
  } else {
    master.gain.setValueAtTime(1, now);
  }

  const oscillator1 = context.createOscillator();
  oscillator1.setPeriodicWave(oscillator1Wave);
  oscillator1.connect(gain);

  switch (sound) {
    case 'start':
      gain.gain.setValueAtTime(.25, now);
      oscillator1.frequency.setValueAtTime(329.63, now);
      oscillator1.frequency.setValueAtTime(349.23, now + .4);
      oscillator1.frequency.setValueAtTime(392, now + .5);
      oscillator1.frequency.setValueAtTime(440, now + .8);
      oscillator1.frequency.setValueAtTime(493.88, now + 1.1);
      oscillator1.frequency.setValueAtTime(523.25, now + 1.5);
      oscillator1.frequency.setValueAtTime(622.25, now + 1.6);
      oscillator1.frequency.setValueAtTime(523.25, now + 1.9);
      oscillator1.frequency.setValueAtTime(493.88, now + 2.2);
      oscillator1.start(now);
      oscillator1.stop(now + 2.5);
      break;

    case 'pause':
      oscillator1.frequency.setValueAtTime(880, now);
      oscillator1.frequency.setValueAtTime(740, now + .1);
      oscillator1.frequency.setValueAtTime(600, now + .2);
      oscillator1.start(now);
      oscillator1.stop(now + .3);
      break;

    case 'resume':
      oscillator1.frequency.setValueAtTime(600, now);
      oscillator1.frequency.setValueAtTime(740, now + .1);
      oscillator1.frequency.setValueAtTime(880, now + .2);
      oscillator1.start(now);
      oscillator1.stop(now + .3);
      break;

    case 'move':
      oscillator1.frequency.setValueAtTime(300, now);
      oscillator1.frequency.linearRampToValueAtTime(600, now + .125);
      oscillator1.start(now);
      oscillator1.stop(now + .125);
      break;

    case 'turbo':
      oscillator1.frequency.setValueAtTime(360, now);
      oscillator1.frequency.linearRampToValueAtTime(600, now + .075);
      oscillator1.start(now);
      oscillator1.stop(now + .075);
      break;

    case 'eat':
      oscillator1.frequency.setValueAtTime(180, now);
      oscillator1.frequency.exponentialRampToValueAtTime(360, now + .25);
      oscillator1.start(now);
      oscillator1.stop(now + .25);
      break;

    case 'explosion':
      makeNoise();
      oscillator2.frequency.setValueAtTime(220, now);
      oscillator2.frequency.exponentialRampToValueAtTime(440, now + .2);
      oscillator2.frequency.exponentialRampToValueAtTime(55, now + .7);
      oscillator2.start(now);
      oscillator2.stop(now + .75);
      noise.playbackRate.setValueAtTime(.2, now);
      noise.playbackRate.exponentialRampToValueAtTime(.8, now + .2);
      noise.playbackRate.exponentialRampToValueAtTime(.01, now + .7);
      noise.start(now);
      noise.stop(now + .75);
      break;

    case 'levelRestart':
      oscillator1.frequency.setValueAtTime(600, now);
      oscillator1.frequency.exponentialRampToValueAtTime(200, now + .6);
      oscillator1.start(now);
      oscillator1.stop(now + .6);
      break;

    case 'levelUp':
      oscillator1.frequency.setValueAtTime(100, now);
      oscillator1.frequency.exponentialRampToValueAtTime(1000, now + .6);
      oscillator1.start(now);
      oscillator1.stop(now + .6);
      break;

    case 'gameOver':
      gain.gain.setValueAtTime(.001, now);
      oscillator1.frequency.setValueAtTime(261.63, now);
      gain.gain.exponentialRampToValueAtTime(.25, now + .4);
      oscillator1.frequency.exponentialRampToValueAtTime(311.13, now + .45);
      gain.gain.linearRampToValueAtTime(.001, now + .45);
      oscillator1.frequency.setValueAtTime(233.08, now + .5);
      gain.gain.exponentialRampToValueAtTime(.25, now + .9);
      oscillator1.frequency.exponentialRampToValueAtTime(277.18, now + .95);
      gain.gain.linearRampToValueAtTime(.001, now + .95);
      oscillator1.frequency.setValueAtTime(207.65, now + 1);
      gain.gain.exponentialRampToValueAtTime(.25, now + 1.4);
      oscillator1.frequency.exponentialRampToValueAtTime(246.94, now + 1.45);
      gain.gain.linearRampToValueAtTime(.001, now + 1.45);
      oscillator1.frequency.setValueAtTime(174.61, now + 1.5);
      gain.gain.exponentialRampToValueAtTime(.25, now + 2.2);
      oscillator1.frequency.exponentialRampToValueAtTime(207.65, now + 2.25);
      oscillator1.start(now);
      oscillator1.stop(now + 2.3);
      break;

    case 'victory':
      now += 0.5;
      oscillator1.frequency.setValueAtTime(466.16, now);
      oscillator1.frequency.setValueAtTime(587.33, now + .25);
      oscillator1.frequency.setValueAtTime(698.46, now + .5);
      oscillator1.frequency.setValueAtTime(783.99, now + .75);
      gain.gain.setValueAtTime(.001, now + 1.15);
      gain.gain.setValueAtTime(.25, now + 1.25);
      oscillator1.frequency.setValueAtTime(523.25, now + 1.25);
      gain.gain.setValueAtTime(.001, now + 1.5);
      gain.gain.setValueAtTime(.25, now + 1.55);
      gain.gain.setValueAtTime(.001, now + 1.64);
      gain.gain.setValueAtTime(.25, now + 1.65);
      gain.gain.setValueAtTime(.001, now + 1.74);
      gain.gain.setValueAtTime(.25, now + 1.75);
      gain.gain.setValueAtTime(.001, now + 2.05);
      gain.gain.setValueAtTime(.25, now + 2.25);
      oscillator1.frequency.setValueAtTime(523.25, now + 2.25);
      oscillator1.frequency.setValueAtTime(622.25, now + 2.5);
      oscillator1.frequency.setValueAtTime(783.99, now + 2.75);
      oscillator1.frequency.setValueAtTime(932.33, now + 3);
      gain.gain.setValueAtTime(.001, now + 3.4);
      gain.gain.setValueAtTime(.25, now + 3.5);
      oscillator1.frequency.setValueAtTime(622.25, now + 3.5);
      gain.gain.setValueAtTime(.001, now + 3.75);
      gain.gain.setValueAtTime(.25, now + 3.8);
      gain.gain.setValueAtTime(.001, now + 3.89);
      gain.gain.setValueAtTime(.25, now + 3.9);
      gain.gain.setValueAtTime(.001, now + 3.99);
      gain.gain.setValueAtTime(.25, now + 4);
      gain.gain.setValueAtTime(.001, now + 4.19);
      gain.gain.setValueAtTime(.25, now + 4.5);
      oscillator1.frequency.setValueAtTime(523.25, now + 4.5);
      oscillator1.frequency.setValueAtTime(622.25, now + 4.75);
      oscillator1.frequency.setValueAtTime(739.99, now + 5);
      oscillator1.frequency.setValueAtTime(932.33, now + 5.25);
      gain.gain.setValueAtTime(.001, now + 5.65);
      gain.gain.setValueAtTime(.25, now + 5.75);
      oscillator1.frequency.setValueAtTime(698.46, now + 5.75);
      gain.gain.setValueAtTime(.001, now + 6);
      gain.gain.setValueAtTime(.25, now + 6.05);
      oscillator1.frequency.setValueAtTime(587.33, now + 6.05);
      gain.gain.setValueAtTime(.001, now + 6.3);
      gain.gain.setValueAtTime(.25, now + 6.35);
      oscillator1.frequency.setValueAtTime(622.25, now + 6.35);
      gain.gain.setValueAtTime(.001, now + 6.6);
      gain.gain.setValueAtTime(.25, now + 6.65);
      oscillator1.frequency.setValueAtTime(698.46, now + 6.65);
      gain.gain.setValueAtTime(.001, now + 8);
      gain.gain.setValueAtTime(.25, now + 8.01);
      oscillator1.start(now);
      oscillator1.stop(now + 8);
      break;

    /* muting by call function without parameters */
    default:
      oscillator1.disconnect();
      break;
  }
}
