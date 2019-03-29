import React from 'react'
import './index.css'

function PauseButton (props) {
  return (
    <div id = 'pause' className = {'controls__pause-button button'+ (props.button === 'pause'? ' button_pressed' : '')}></div>
  )
}

export default PauseButton