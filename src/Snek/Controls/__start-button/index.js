import React from 'react'

export default function StartButton(props) {
  return (
    <div id = 'start' className = {'controls__start-button button'+ (props.button === 'start'? ' button_pressed' : '')}></div>
  );
}