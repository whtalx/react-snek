import React from 'react';

export default function ButtonDown(props) {
  return (
    <div
      id="down"
      className={`d-pad__button-down button${props.button === 'down'? ' button_pressed' : ''}`}
    />
  );
}
