import React from 'react'
import './index.css'

function ButtonUp (props) {
  return (
    <div id = 'up' className = {'d-pad__button-up button '+ (props.button === 'up'? 'button_pressed' : null)}></div>
  )
}

export default ButtonUp