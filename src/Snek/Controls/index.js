import React from 'react'
import './index.css'
import Start from './__start'
import Pause from './__pause'

function Controls (props) {
  return (
    <div className = 'controls'>
      <Start button = {props.button} />
      <Pause button = {props.button} />
    </div>
  )
}

export default Controls