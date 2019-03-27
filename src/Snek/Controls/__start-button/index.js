import React from 'react'
import './index.css'

function StartButton (props) {
  return (
    <div id = 'start' className = {'controls__start-button button '+ (props.button === 'start'? 'button_pressed' : null)}></div>
  )
}

export default StartButton