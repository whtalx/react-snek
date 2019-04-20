import React from 'react';
import Pixel from '../Pixel';

export default function LivesValue(props) {
  let lives = [];
  for (let i = 1; i <= 9; i++) {
    let status = 'off';
    if (props.lives >= i) {
      status = 'on';
    }
    lives[i - 1] = <Pixel key={`life${i}`} status={status} />;
  }

  return (
    <div className="display__lives-value">
      {lives}
    </div>
  );
}
