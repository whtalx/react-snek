import removeEventListeners from './removeEventListeners';
import addEventListeners from './addEventListeners';
import initLocalStorage from './initLocalStorage';
import handleMouseDown from './handleMouseDown';
import handleMouseUp from './handleMouseUp';
import handleKeyDown from './handleKeyDown';
import switchPixels from './switchPixels';
import handleKeyUp from './handleKeyUp';
import turboSpeed from './turboSpeed';
import playSound from './playSound';
import reverse from './reverse';
import levelUp from './levelUp';
import newFood from './newFood';
import slither from './slither';
import explode from './explode';
import victory from './victory';
import resume from './resume';
import spiral from './spiral';
import clrScr from './clrScr';
import start from './start';
import pause from './pause';
import play from './play';
import wipe from './wipe';

export default function methods() {
  this.removeEventListeners = removeEventListeners.bind(this);
  this.addEventListeners = addEventListeners.bind(this);
  this.initLocalStorage = initLocalStorage.bind(this);
  this.handleMouseDown = handleMouseDown.bind(this);
  this.handleMouseUp = handleMouseUp.bind(this);
  this.handleKeyDown = handleKeyDown.bind(this);
  this.switchPixels = switchPixels.bind(this);
  this.handleKeyUp = handleKeyUp.bind(this);
  this.turboSpeed = turboSpeed.bind(this);
  this.playSound = playSound.bind(this);
  this.reverse = reverse.bind(this);
  this.levelUp = levelUp.bind(this);
  this.newFood = newFood.bind(this);
  this.slither = slither.bind(this);
  this.victory = victory.bind(this);
  this.explode = explode.bind(this);
  this.resume = resume.bind(this);
  this.spiral = spiral.bind(this);
  this.clrScr = clrScr.bind(this);
  this.start = start.bind(this);
  this.pause = pause.bind(this);
  this.play = play.bind(this);
  this.wipe = wipe.bind(this);
}
