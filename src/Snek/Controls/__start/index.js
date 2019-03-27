import React from 'react'
import './index.css'
import StartButton from '../__start-button'

function Start (props) {
  return (
    <div className = 'controls__start'>
      <StartButton button = {props.button} />
      start
    </div>
  )
}

export default Start