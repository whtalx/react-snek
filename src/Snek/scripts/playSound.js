/* create context and gain once */
const context = new (window.AudioContext || window.webkitAudioContext)();
const gain = context.createGain();
const master = context.createGain();
gain.connect(master);
master.connect(context.destination);
gain.gain.value = .25;

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
  /* muting without sound stop */
  if (this.state.condition.isMuted) {
    master.gain.setValueAtTime(0, context.currentTime);
  } else {
    master.gain.setValueAtTime(1, context.currentTime);
  }

  const oscillator1 = context.createOscillator();
  oscillator1.setPeriodicWave(oscillator1Wave);
  oscillator1.connect(gain);

  switch (sound) {
    case 'start':
      gain.gain.setValueAtTime(.25, context.currentTime);
      oscillator1.frequency.setValueAtTime(329.63, context.currentTime);
      oscillator1.frequency.setValueAtTime(349.23, context.currentTime + .4);
      oscillator1.frequency.setValueAtTime(392, context.currentTime + .5);
      oscillator1.frequency.setValueAtTime(440, context.currentTime + .8);
      oscillator1.frequency.setValueAtTime(493.88, context.currentTime + 1.1);
      oscillator1.frequency.setValueAtTime(523.25, context.currentTime + 1.5);
      oscillator1.frequency.setValueAtTime(622.25, context.currentTime + 1.6);
      oscillator1.frequency.setValueAtTime(523.25, context.currentTime + 1.9);
      oscillator1.frequency.setValueAtTime(493.88, context.currentTime + 2.2);
      oscillator1.start(context.currentTime);
      oscillator1.stop(context.currentTime + 2.5);
      break;

    case 'pause':
      oscillator1.frequency.setValueAtTime(880, context.currentTime);
      oscillator1.frequency.setValueAtTime(740, context.currentTime + .1);
      oscillator1.frequency.setValueAtTime(600, context.currentTime + .2);
      oscillator1.start(context.currentTime);
      oscillator1.stop(context.currentTime + .3);
      break;

    case 'resume':
      oscillator1.frequency.setValueAtTime(600, context.currentTime);
      oscillator1.frequency.setValueAtTime(740, context.currentTime + .1);
      oscillator1.frequency.setValueAtTime(880, context.currentTime + .2);
      oscillator1.start(context.currentTime);
      oscillator1.stop(context.currentTime + .3);
      break;

    case 'move':
      oscillator1.frequency.setValueAtTime(300, context.currentTime);
      oscillator1.frequency.linearRampToValueAtTime(600, context.currentTime + .125);
      oscillator1.start(context.currentTime);
      oscillator1.stop(context.currentTime + .125);
      break;

    case 'turbo':
      oscillator1.frequency.setValueAtTime(360, context.currentTime);
      oscillator1.frequency.linearRampToValueAtTime(600, context.currentTime + .075);
      oscillator1.start(context.currentTime);
      oscillator1.stop(context.currentTime + .075);
      break;

    case 'eat':
      oscillator1.frequency.setValueAtTime(180, context.currentTime);
      oscillator1.frequency.exponentialRampToValueAtTime(360, context.currentTime + .25);
      oscillator1.start(context.currentTime);
      oscillator1.stop(context.currentTime + .25);
      break;

    case 'explosion':
      makeNoise();
      oscillator2.frequency.setValueAtTime(220, context.currentTime);
      oscillator2.frequency.exponentialRampToValueAtTime(440, context.currentTime + .2);
      oscillator2.frequency.exponentialRampToValueAtTime(55, context.currentTime + .7);
      oscillator2.start(context.currentTime);
      oscillator2.stop(context.currentTime + .75);
      noise.playbackRate.setValueAtTime(.2, context.currentTime);
      noise.playbackRate.exponentialRampToValueAtTime(.8, context.currentTime + .2);
      noise.playbackRate.exponentialRampToValueAtTime(.01, context.currentTime + .7);
      noise.start(context.currentTime);
      noise.stop(context.currentTime + .75);
      break;

    case 'levelRestart':
      oscillator1.frequency.setValueAtTime(600, context.currentTime);
      oscillator1.frequency.exponentialRampToValueAtTime(200, context.currentTime + .6);
      oscillator1.start(context.currentTime);
      oscillator1.stop(context.currentTime + .6);
      break;

    case 'levelUp':
      oscillator1.frequency.setValueAtTime(100, context.currentTime);
      oscillator1.frequency.exponentialRampToValueAtTime(1000, context.currentTime + .6);
      oscillator1.start(context.currentTime);
      oscillator1.stop(context.currentTime + .6);
      break;

    case 'gameOver':
      gain.gain.setValueAtTime(.001, context.currentTime);
      oscillator1.frequency.setValueAtTime(261.63, context.currentTime);
      gain.gain.exponentialRampToValueAtTime(.25, context.currentTime + .4);
      oscillator1.frequency.exponentialRampToValueAtTime(311.13, context.currentTime + .45);
      gain.gain.linearRampToValueAtTime(.001, context.currentTime + .45);
      oscillator1.frequency.setValueAtTime(233.08, context.currentTime + .5);
      gain.gain.exponentialRampToValueAtTime(.25, context.currentTime + .9);
      oscillator1.frequency.exponentialRampToValueAtTime(277.18, context.currentTime + .95);
      gain.gain.linearRampToValueAtTime(.001, context.currentTime + .95);
      oscillator1.frequency.setValueAtTime(207.65, context.currentTime + 1);
      gain.gain.exponentialRampToValueAtTime(.25, context.currentTime + 1.4);
      oscillator1.frequency.exponentialRampToValueAtTime(246.94, context.currentTime + 1.45);
      gain.gain.linearRampToValueAtTime(.001, context.currentTime + 1.45);
      oscillator1.frequency.setValueAtTime(174.61, context.currentTime + 1.5);
      gain.gain.exponentialRampToValueAtTime(.25, context.currentTime + 2.2);
      oscillator1.frequency.exponentialRampToValueAtTime(207.65, context.currentTime + 2.25);
      oscillator1.start(context.currentTime);
      oscillator1.stop(context.currentTime + 2.3);
      break;

    case 'victory': {
      gain.gain.setValueAtTime(.25, context.currentTime + .5);
      oscillator1.frequency.setValueAtTime(466.16, context.currentTime +.5);
      oscillator1.frequency.setValueAtTime(587.33, context.currentTime + .75);
      oscillator1.frequency.setValueAtTime(698.46, context.currentTime + 1);
      oscillator1.frequency.setValueAtTime(783.99, context.currentTime + 1.25);
      gain.gain.setValueAtTime(.001, context.currentTime + 1.65);
      gain.gain.setValueAtTime(.25, context.currentTime + 1.75);
      oscillator1.frequency.setValueAtTime(523.25, context.currentTime + 1.75);
      gain.gain.setValueAtTime(.001, context.currentTime + 2);
      gain.gain.setValueAtTime(.25, context.currentTime + 2.05);
      gain.gain.setValueAtTime(.001, context.currentTime + 2.14);
      gain.gain.setValueAtTime(.25, context.currentTime + 2.15);
      gain.gain.setValueAtTime(.001, context.currentTime + 2.24);
      gain.gain.setValueAtTime(.25, context.currentTime + 2.25);
      gain.gain.setValueAtTime(.001, context.currentTime + 2.55);
      gain.gain.setValueAtTime(.25, context.currentTime + 2.75);
      oscillator1.frequency.setValueAtTime(523.25, context.currentTime + 2.75);
      oscillator1.frequency.setValueAtTime(622.25, context.currentTime + 3);
      oscillator1.frequency.setValueAtTime(783.99, context.currentTime + 3.25);
      oscillator1.frequency.setValueAtTime(932.33, context.currentTime + 3.5);
      gain.gain.setValueAtTime(.001, context.currentTime + 3.9);
      gain.gain.setValueAtTime(.25, context.currentTime + 4);
      oscillator1.frequency.setValueAtTime(622.25, context.currentTime + 4);
      gain.gain.setValueAtTime(.001, context.currentTime + 4.25);
      gain.gain.setValueAtTime(.25, context.currentTime + 4.3);
      gain.gain.setValueAtTime(.001, context.currentTime + 4.39);
      gain.gain.setValueAtTime(.25, context.currentTime + 4.4);
      gain.gain.setValueAtTime(.001, context.currentTime + 4.49);
      gain.gain.setValueAtTime(.25, context.currentTime + 4.5);
      gain.gain.setValueAtTime(.001, context.currentTime + 4.69);
      gain.gain.setValueAtTime(.25, context.currentTime + 5);
      oscillator1.frequency.setValueAtTime(523.25, context.currentTime + 5);
      oscillator1.frequency.setValueAtTime(622.25, context.currentTime + 5.25);
      oscillator1.frequency.setValueAtTime(739.99, context.currentTime + 5.5);
      oscillator1.frequency.setValueAtTime(932.33, context.currentTime + 5.75);
      gain.gain.setValueAtTime(.001, context.currentTime + 6.15);
      gain.gain.setValueAtTime(.25, context.currentTime + 6.25);
      oscillator1.frequency.setValueAtTime(698.46, context.currentTime + 6.25);
      gain.gain.setValueAtTime(.001, context.currentTime + 6.5);
      gain.gain.setValueAtTime(.25, context.currentTime + 6.55);
      oscillator1.frequency.setValueAtTime(587.33, context.currentTime + 6.55);
      gain.gain.setValueAtTime(.001, context.currentTime + 6.8);
      gain.gain.setValueAtTime(.25, context.currentTime + 6.85);
      oscillator1.frequency.setValueAtTime(622.25, context.currentTime + 6.85);
      gain.gain.setValueAtTime(.001, context.currentTime + 7.1);
      gain.gain.setValueAtTime(.25, context.currentTime + 7.15);
      oscillator1.frequency.setValueAtTime(698.46, context.currentTime + 7.15);
      gain.gain.setValueAtTime(.001, context.currentTime + 8.5);
      gain.gain.setValueAtTime(.25, context.currentTime + 8.51);
      oscillator1.start(context.currentTime + .5);
      oscillator1.stop(context.currentTime + 8.5);
      break;
    }
    /* muting by call function without parameters */
    default:
      oscillator1.disconnect();
      break;
  }
}
