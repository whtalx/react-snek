import React/*, {Component}*/ from 'react'
import './index.css'

/* class Pixel extends Component {
  constructor (props) {
    super(props)
    this.state = {
        status: props.status,
        x: props.x,
        y: props.y
    }
  } 
  componentWillReceiveProps(nextProps) {
    if (nextProps.status !== this.props.status) this.setState({status: nextProps.status})
  }
  render () { */
  function Pixel(props) {
    return (
      <div className = {'display__pixel display__pixel_' + props.status} x = {props.x} y = {props.y}>
        <svg viewBox = '0 0 11 11'>
          <path style = {{'fillRule': 'evenodd'}} d = 'M1,1h9v9H1V1ZM2,2H9V9H2V2ZM3,3H8V8H3V3Z' />
        </svg>
      </div>
    )
  }
//}

export default Pixel