import React from 'react'
import './index.css'

function Pixel (props) {
  return (
    <div className = 'display__pixel display__pixel_off' x = {props.coordinates.x} y = {props.coordinates.y}>
      <svg viewBox = '0 0 11 11'>
        <path style = {{'fillRule': 'evenodd'}} d = 'M1,1h9v9H1V1ZM2,2H9V9H2V2ZM3,3H8V8H3V3Z' />
      </svg>
    </div>
  )
}

export default Pixel