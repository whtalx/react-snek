import React from 'react';

export default function PauseButton(props) {
  return (
    <div
      id="pause"
      className={`controls__pause-button button${props.button === 'pause'? ' button_pressed' : ''}`}
    />
  );
}
