import React from 'react'
import './index.css'

export default function SpeedValue (props) {
  return (
    <p className = 'display__speed-value'>
      {("0" + props.speed).slice(-2)}
    </p>
  )
}