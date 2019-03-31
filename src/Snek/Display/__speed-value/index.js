import React from 'react'
import './index.css'

function SpeedValue (props) {
  return (
    <p className = 'display__speed-value'>
      {("0" + props.speed).slice(-2)}
    </p>
  )
}

export default SpeedValue