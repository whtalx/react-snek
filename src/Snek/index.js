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

export default class Snek extends Component {
  constructor (props) {
    super(props);
    
    this.state = {
      pixels: [],
      button: null,
      isAlive: false,
      isPaused: false
    }

    this.clrScr = () => {
      let grid = []
      for (let i = 0; i < 200; i++) {
        grid[i] = <Pixel key = {i} status = 'off' />
      }
      this.setState({pixels: grid})? this.setState({pixels: grid}) : this.state.pixels = grid;
    }

    this.game = null;
    this.snake = [{x: 1, y: 9, status : 'on'}, {x: 2, y: 9, status: 'on'}, {x: 3, y: 9, status: 'blink'}];

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
  }

  componentDidMount() {
    this.clrScr();
    this.addEventListeners();
    this.explode(this.snake[2]);
  }

  componentWillUnmount() {
    this.removeEventListeners();
  }

  render() {
    return (
      <div className = 'snek'>
        <Display>
          {this.state.pixels}
        </Display>
        <DPad button = {this.state.button} />
        <Controls button = {this.state.button} />
      </div>
    )
  }
}