import React from 'react';
import Pixel from '../Display/Pixel';

export default function switchPixels(pixelsArray) {
  /* switch passed pixels with valid values */
  this.setState((state) => {
    pixelsArray.forEach((item) => {
      if (
        item.x >= 0 && item.x < 10
        && item.y >= 0 && item.y < 20
        && (item.status === 'on' || item.status === 'off' || item.status === 'blink')
      ) {
        let index = item.x + item.y * 10;
        state.area.field[index] = <Pixel key={`pixel${index}`} status={item.status} />;
      }
    });
    return state;
  });
}
