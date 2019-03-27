import React, {Component} from 'react'
import './index.css'
import Display from './Display'
import Controls from './Controls'
import DPad from './DPad'
import handleMouseDown from '../scripts/handleMouseDown'
import handleButtonUp from '../scripts/handleButtonUp'
import handleKeyDown from '../scripts/handleKeyDown'
import switchPixels from '../scripts/switchPixels'
import slither from '../scripts/slither'
import clrScr from '../scripts/clrScr'

export default class Snek extends Component {
  constructor (props) {
    super(props)
    let i = 0
    let grid = []
    for (let y = 0; y < 20; y++) {
      for (let x = 0; x < 10; x++) {
        grid[i] = {'x' : x, 'y' : y, 'status' : 'off' }
        i++
      }
    }
    this.state = {
      pixels : grid,
      button : null,
      snake : [{x : 1, y : 9, status : 'on'}, {x : 2, y : 9, status : 'on'}, {x : 3, y : 9, status : 'blink'}],
      isAlive : false
    }
    this.handleMouseDown = handleMouseDown.bind(this)
    this.handleButtonUp = handleButtonUp.bind(this)
    this.handleKeyDown = handleKeyDown.bind(this)
    this.switchPixels = switchPixels.bind(this)
    this.slither = slither.bind(this)
    this.clrScr = clrScr.bind(this)
  }

 

  componentDidMount() {
    document.addEventListener('mousedown', this.handleMouseDown)
    document.addEventListener('mouseup', this.handleButtonUp)
    document.addEventListener('keydown', this.handleKeyDown)
    document.addEventListener('keyup', this.handleButtonUp)
    this.slither()
    setTimeout(()=>{this.setState({isAlive : true}); this.clrScr()}, 10000)
    //this.switchPixels(this.state.snake)
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleMouseDown)
    document.removeEventListener('mouseup', this.handleButtonUp)
    document.removeEventListener('keydown', this.handleKeyDown)
    document.removeEventListener('keyup', this.handleButtonUp)
  }

  render() {
    return (
      <div className = 'snek'>
        <Display pixels = {this.state.pixels} />
        <DPad button = {this.state.button} />
        <Controls button = {this.state.button} />
      </div>
    )
  }
}