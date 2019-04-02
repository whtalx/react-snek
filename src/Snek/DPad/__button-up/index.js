import React from 'react'
import './index.css'

export default function ButtonUp (props) {
  return (
    <div id = 'up' className = {'d-pad__button-up button'+ (props.button === 'up'? ' button_pressed' : '')}></div>
  );
}