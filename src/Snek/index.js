import React, {Component} from 'react'
import './index.css'
import Display from './Display'
import Controls from './Controls'
import DPad from './DPad'
import handleMouseDown from './handleMouseDown'
import handleButtonUp from './handleButtonUp'
import handleKeyDown from './handleKeyDown'

class Snek extends Component {
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
  }

  componentDidMount() {
    document.addEventListener('mousedown', this.handleMouseDown)
    document.addEventListener('mouseup', this.handleButtonUp)
    document.addEventListener('keydown', this.handleKeyDown)
    document.addEventListener('keyup', this.handleButtonUp)
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleMouseDown)
    document.removeEventListener('mouseup', this.handleButtonUp)
    document.removeEventListener('keydown', this.handleKeyDown)
    document.removeEventListener('keyup', this.handleButtonUp)
  }
  /* componentDidMount() {
    setTimeout(() => {
      this.setState(state => {
        state.pixels[15].status = 'on'
        return state 
      })
    }, 5000)
  } */

  render() {
    console.log(this.state.button)
    return (
      <div className = 'snek'>
        <Display pixels = {this.state.pixels}/>
        <DPad />
        <Controls />
      </div>
    )
  }
}

export default Snek