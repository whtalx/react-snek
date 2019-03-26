import React, {Component} from 'react'
import './index.css'
import Display from './Display'
import Controls from './Controls'
import DPad from './DPad'

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
    this.state = {pixels: grid}
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState(state => {
        state.pixels[15] = {x : 5, y : 1, status : 'blink' }
        return state 
      })
    }, 5000)
  }

  render() {
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