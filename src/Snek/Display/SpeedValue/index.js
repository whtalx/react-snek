import React from 'react'

export default function SpeedValue (props) {
  return (
    <p className = 'display__speed-value'>
      {('00' + props.speed).slice(-2)}
    </p>
  )
}