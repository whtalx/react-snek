import React from 'react';
import Pixel from '../Display/Pixel';

export default function clrScr() {
  /* fill screen with pixels switched off */
  this.setState((state) => {
    if (state.display.area.length !== 200) {
      state.display.area.length = 200;
    }
    for (let i = 0; i < 200; i++) {
      state.display.area[i] = <Pixel key={`pixel${i}`} status="off" />;
    }
    return state;
  });
}
