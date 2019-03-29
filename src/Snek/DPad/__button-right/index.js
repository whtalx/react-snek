import React from 'react'
import './index.css'

function ButtonRight (props) {
  return (
    <div id = 'right' className = {'d-pad__button-right button'+ (props.button === 'right'? ' button_pressed' : '')}></div>
  )
}

export default ButtonRight