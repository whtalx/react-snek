import React, {Component} from 'react'
import './index.css'
import Display from './Display'
import Pixel from './Display/__pixel'
import Legend from './Display/__legend'
import Side from './Display/__side'
import Controls from './Controls'
import DPad from './DPad'
import handleMouseDown from '../scripts/handleMouseDown'
import handleButtonUp from '../scripts/handleButtonUp'
import handleKeyDown from '../scripts/handleKeyDown'
import switchPixels from '../scripts/switchPixels'
import slither from '../scripts/slither'
import explode from '../scripts/explode'
import spiral from '../scripts/spiral'

export default class Snek extends Component {
  constructor (props) {
    super(props);
    this.state = {
      button : null,
      snake : [{x: 1, y: 9, status : 'on'}, {x: 2, y: 9, status: 'on'}, {x: 3, y: 9, status: 'blink'}],
      isAlive : false
    }

    this.clrScr = () => {
      let grid = []
      for (let i = 0; i < 200; i++) {
        grid[i] = <Pixel key = {i} status = 'off' />
      }
      this.state.pixels = grid;
    }

    this.handleMouseDown = handleMouseDown.bind(this);
    this.handleButtonUp = handleButtonUp.bind(this);
    this.handleKeyDown = handleKeyDown.bind(this);
    this.switchPixels = switchPixels.bind(this);
    this.slither = slither.bind(this);
    this.explode = explode.bind(this);
    this.spiral = spiral.bind(this);
  }

  componentDidMount() {
    this.clrScr();
    document.addEventListener('mousedown', this.handleMouseDown);
    document.addEventListener('mouseup', this.handleButtonUp);
    document.addEventListener('keydown', this.handleKeyDown);
    document.addEventListener('keyup', this.handleButtonUp);
    this.explode(this.state.snake[2]);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleMouseDown);
    document.removeEventListener('mouseup', this.handleButtonUp);
    document.removeEventListener('keydown', this.handleKeyDown);
    document.removeEventListener('keyup', this.handleButtonUp);
  }

  componentDidUpdate() {
    if (!this.state.isAlive && this.state.button === 'start') {
      this.clrScr();
      this.setState({isAlive : true});
    }
  }
  
  render() {
    return (
      <div className = 'snek'>
        <Display>
          <fieldset className = 'display__edging'>
            <Legend />
            <div className = 'display__borders'>
              <div className = 'display__glass'>
                <div className = 'display__frame'>
                  {this.state.pixels}
                </div>
                <Side />
              </div>
            </div>
          </fieldset>
        </Display>
        <DPad button = {this.state.button} />
        <Controls button = {this.state.button} />
      </div>
    )
  }
}