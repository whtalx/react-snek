const context = new (window.AudioContext || window.webkitAudioContext)();
const gain = context.createGain();
gain.connect(context.destination);
gain.gain.value = .25;

export default function playSound(sound) {
  if (this.state.isMuted) return;
  const real = new Float32Array(Array.from({length: 64}, (_, n) => (n === 0 ? 0 : 4 / (n * Math.PI) * Math.sin(Math.PI * n * 0.27))));
  const imag = new Float32Array(Array.from({length: 64}, () => 0));
  const wave = context.createPeriodicWave(real, imag);
  const oscillator = context.createOscillator();
  oscillator.setPeriodicWave(wave);
  oscillator.connect(gain);

  let now = context.currentTime;
  switch (sound) {
    case 'start':
      oscillator.frequency.setValueAtTime(658, now);
      oscillator.frequency.setValueAtTime(831, now + .18);
      oscillator.frequency.setValueAtTime(980, now + .36);
      oscillator.frequency.setValueAtTime(831, now + .54);
      oscillator.frequency.setValueAtTime(980, now + .72);
      oscillator.frequency.setValueAtTime(1337, now + .9);
      oscillator.start(now);
      oscillator.stop(now + 1.4);
      break;
    case 'pause':
      oscillator.frequency.setValueAtTime(1080, now);
      oscillator.frequency.setValueAtTime(980, now + .1);
      oscillator.frequency.setValueAtTime(880, now + .2);
      oscillator.start(now);
      oscillator.stop(now + .3);
      break;
    case 'resume':
      oscillator.frequency.setValueAtTime(880, now);
      oscillator.frequency.setValueAtTime(980, now + .1);
      oscillator.frequency.setValueAtTime(1080, now + .2);
      oscillator.start(now);
      oscillator.stop(now + .3);
      break;
    case 'move':
      oscillator.frequency.setValueAtTime(311, now);
      oscillator.frequency.linearRampToValueAtTime(699, now + .125);
      oscillator.start(now);
      oscillator.stop(now + .125);
      break;
    case 'turbo':
      oscillator.frequency.setValueAtTime(415, now);
      oscillator.frequency.linearRampToValueAtTime(699, now + .075);
      oscillator.start(now);
      oscillator.stop(now + .075);
      break;
    case 'levelRestart':
      oscillator.frequency.setValueAtTime(1075, now);
      oscillator.frequency.exponentialRampToValueAtTime(377, now + .6);
      oscillator.start(now);
      oscillator.stop(now + .6);
      break;
    case 'levelUp':
      oscillator.frequency.setValueAtTime(630, now);
      oscillator.frequency.exponentialRampToValueAtTime(1422, now + .6);
      oscillator.start(now);
      oscillator.stop(now + .6);
      break;
    default:
      oscillator.disconnect(gain);
  }
}