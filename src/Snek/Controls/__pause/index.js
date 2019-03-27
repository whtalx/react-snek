import React from 'react'
import './index.css'
import PauseButton from '../__pause-button'

function Pause (props) {
  return (
    <div className = 'controls__pause'>
      <PauseButton button = {props.button} />
      pause
    </div>
  )
}

export default Pause