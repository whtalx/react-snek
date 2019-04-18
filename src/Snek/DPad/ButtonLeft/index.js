import React from 'react';

export default function ButtonLeft(props) {
  return (
    <div
      id="left"
      className={`d-pad__button-left button${props.button === 'left'? ' button_pressed' : ''}`}
    />
  );
}
