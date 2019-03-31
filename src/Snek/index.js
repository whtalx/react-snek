import React, {Component} from 'react'
import './index.css'
import Display from './Display'
import Pixel from './Display/__pixel'
import Controls from './Controls'
import DPad from './DPad'
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
import gameOver from '../scripts/gameOver'

export default class Snek extends Component {
  constructor () {
    super();

    this.state = {
      pixels: [],
      food: [],
      snake: [],
      score: 0,
      hiScore: 0,
      level: 1,
      speed: 1,
      button: null,
      direction: 'right',
      nextDirection: null,
      speedCoefficient: 50,
      scoreCoefficient: 25,
      subtrahend: 50,
      isAlive: false,
      isPaused: false
    }

    this.gameTimeout = null;
    this.turboTimeout = null;

    this.clrScr = () => {
      let grid = []
      for (let i = 0; i < 200; i++) {
        grid[i] = <Pixel key = {i} status = 'off' />
      }
      this.setState({pixels: grid});
    }

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
    this.gameOver = gameOver.bind(this);
  }

  componentDidMount() {
    this.clrScr();
    this.addEventListeners();
    this.slither();
  }

  componentWillUnmount() {
    this.removeEventListeners();
  }

  render() {
    return (
      <div className = 'snek'>
        <Display paused = {this.state.isPaused}>
          {this.state.pixels}
        </Display>
        <DPad button = {this.state.button} />
        <Controls button = {this.state.button} />
      </div>
    )
  }
}