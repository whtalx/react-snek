import React from 'react'
import './index.css'
import SpeedValue from '../__speed-value'

function Score (props) {
  return (
    <div className = 'display__speed'>
      <SpeedValue speed = {props.speed} />
      SPEED
    </div>
  )
}

export default Score