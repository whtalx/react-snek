import React from 'react';

export default function SoundButton(props) {
  return (
    <div
      id="sound"
      className={`controls__sound-button button${props.button === 'sound'? ' button_pressed' : ''}`}
    />
  );
}
