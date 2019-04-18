import React from 'react';

export default function ButtonRight(props) {
  return (
    <div
      id="right"
      className={`d-pad__button-right button${props.button === 'right'? ' button_pressed' : ''}`}
    />
  );
}
