import React, {Component} from 'react'
import './index.css'
//TODO: передать возможность setState родителю
//честно, хз как. мне такое сложно
class Pixel extends Component {
  state = {
      status: this.props.status,
      x: this.props.x,
      y: this.props.y
  }
  makeBlink() {
    this.setState({status: 'blink'})
  }
  render () {
    return (
      <div className = {'display__pixel display__pixel_' + this.state.status} x = {this.state.x} y = {this.state.y}>
        <svg viewBox = '0 0 11 11'>
          <path style = {{'fillRule': 'evenodd'}} d = 'M1,1h9v9H1V1ZM2,2H9V9H2V2ZM3,3H8V8H3V3Z' />
        </svg>
      </div>
    )
  }
}

export default Pixel