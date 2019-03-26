import React, {Component} from 'react'
import './index.css'
import Display from './Display'
import Controls from './Controls'
import DPad from './DPad'

class Snek extends Component {
  constructor() {
    super()
    this.state = {p : [{x: 0, y: 0, status: 'on'}]}
  }
  render() {
    setTimeout(() => {
      this.setState({p : [{x: 0, y: 0, status: 'off'}, {x: 9, y: 19, status: 'blink'}]})
      console.log(this.state.p)
    }, 3000)
    return (
      <div className = 'snek'>
        <Display pixels = {this.state.p} />
        <DPad />
        <Controls />
      </div>
    )
  }
}
export default Snek