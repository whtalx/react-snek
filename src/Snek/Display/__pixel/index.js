import React, {PureComponent} from 'react'
import './index.css'

export default class Pixel extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      fillRule: 'evenodd'
    }
  }
  render() {
    return (
      <div className = {'display__pixel display__pixel_' + this.props.status}>
        <svg viewBox = '0 0 11 11'>
          <path style = {this.state} d = 'M1,1h9v9H1V1ZM2,2H9V9H2V2ZM3,3H8V8H3V3Z' />
        </svg>
      </div>
    )
  }
}