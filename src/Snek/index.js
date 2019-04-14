import React, {Component} from 'react'
import './index.css'
import Display from './Display'
import Controls from './Controls'
import DPad from './DPad'
import clrScr from '../scripts/clrScr'
import removeEventListeners from '../scripts/removeEventListeners'
import addEventListeners from '../scripts/addEventListeners'
import handleMouseDown from '../scripts/handleMouseDown'
import handleMouseUp from '../scripts/handleMouseUp'
import handleKeyDown from '../scripts/handleKeyDown'
import handleKeyUp from '../scripts/handleKeyUp'
import switchPixels from '../scripts/switchPixels'
import slither from '../scripts/slither'
import explode from '../scripts/explode'
import spiral from '../scripts/spiral'
import start from '../scripts/start'
import pause from '../scripts/pause'
import resume from '../scripts/resume'
import turboSpeed from '../scripts/turboSpeed'
import newFood from '../scripts/newFood'
import play from '../scripts/play'
import levelUp from '../scripts/levelUp'
import reverse from '../scripts/reverse'
import wipe from '../scripts/wipe'
import victory from '../scripts/victory'
import playSound from '../scripts/playSound'
import setLocalStorage from '../scripts/setLocalStorage'

export default class Snek extends Component {
  constructor () {
    super();

    this.state = {
      food: [],
      snake: [],
      obstacle: [],
      score: 0,
      hiScore: 0,
      lastScore: 0,
      level: 0,
      speed: 0,
      lives: 0,
      button: null,
      direction: 'right',
      nextDirection: null,
      speedCoefficient: 25,
      scoreCoefficient: 25,
      subtrahend: 0,
      isAlive: false,
      isMuted: false,
      isPaused: false,
      isPlayiyg: false,
      isWaiting: false,
      isCelebrating: false
    }

    this.clrScr = clrScr.bind(this);
    this.removeEventListeners = removeEventListeners.bind(this);
    this.addEventListeners = addEventListeners.bind(this);
    this.handleMouseDown = handleMouseDown.bind(this);
    this.handleMouseUp = handleMouseUp.bind(this);
    this.handleKeyDown = handleKeyDown.bind(this);
    this.handleKeyUp = handleKeyUp.bind(this);
    this.switchPixels = switchPixels.bind(this);
    this.slither = slither.bind(this);
    this.explode = explode.bind(this);
    this.spiral = spiral.bind(this);
    this.start = start.bind(this);
    this.pause = pause.bind(this);
    this.resume = resume.bind(this);
    this.turboSpeed = turboSpeed.bind(this);
    this.newFood = newFood.bind(this);
    this.play = play.bind(this);
    this.levelUp = levelUp.bind(this);
    this.reverse = reverse.bind(this);
    this.wipe = wipe.bind(this);
    this.victory = victory.bind(this);
    this.playSound = playSound.bind(this);
    this.setLocalStorage = setLocalStorage.bind(this);
  }

  componentDidMount() {
    this.addEventListeners();
    this.clrScr();
    this.slither();
    this.setLocalStorage();
  }

  componentWillUnmount() {
    this.removeEventListeners();
  }

  render() {
    return (
      <div className = 'snek'>
        <Display
          paused = {this.state.isPaused}
          score = {this.state.score}
          hiScore = {this.state.hiScore}
          level = {this.state.level}
          speed = {this.state.speed}
          lives = {this.state.lives}
          sound = {!this.state.isMuted}
        >
          {this.state.pixels}
        </Display>
        <Controls button = {this.state.button} />
        <DPad button = {this.state.button} />
      </div>
    )
  }
}