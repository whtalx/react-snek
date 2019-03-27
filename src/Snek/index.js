import React, {Component} from 'react'
import './index.css'
import Display from './Display'
import Controls from './Controls'
import DPad from './DPad'
import handleMouseDown from './handleMouseDown'
import handleButtonUp from './handleButtonUp'
import handleKeyDown from './handleKeyDown'
import switchPixels from './switchPixels'
import clrScr from './clrScr'
import slitherJSON from './slither.json'

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
      pixels: grid,
      button: null
    }
    this.handleMouseDown = handleMouseDown.bind(this)
    this.handleButtonUp = handleButtonUp.bind(this)
    this.handleKeyDown = handleKeyDown.bind(this)
    this.switchPixels = switchPixels.bind(this)
    this.slither = this.slither.bind(this)
    this.clrScr = clrScr.bind(this)
  }

  slither() {
    let frame1 = slitherJSON["1"]
    let frame2 = slitherJSON["2"]
    this.setState({pixels : frame1})
    setTimeout(() => {
      this.setState({pixels : frame2})
      setTimeout(this.slither, 500)
    }, 500)
  }

  componentDidMount() {
    document.addEventListener('mousedown', this.handleMouseDown)
    document.addEventListener('mouseup', this.handleButtonUp)
    document.addEventListener('keydown', this.handleKeyDown)
    document.addEventListener('keyup', this.handleButtonUp)
    this.slither()
    //this.switchPixels([{x : 1, y : 9, status : 'on'}, {x : 2, y : 9, status : 'on'}, {x : 3, y : 9, status : 'blink'}])
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