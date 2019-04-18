import React from 'react';
import Pixel from '../Snek/Display/Pixel';

export default function clrScr() {
  /* fill screen with pixels switched off */
  let grid = [];
  for (let i = 0; i < 200; i++) {
    grid[i] = <Pixel key={`pixel${i}`} status="off" />
  }
  this.setState({ pixels: grid });
}