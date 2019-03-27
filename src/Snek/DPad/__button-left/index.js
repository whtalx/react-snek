import React from 'react'
import './index.css'

function ButtonLeft (props) {
  return (
    <div id = 'left' className = {'d-pad__button-left button '+ (props.button === 'left'? 'button_pressed' : null)}></div>
  )
}

export default ButtonLeft