import React from 'react'
import Pixel from '../Snek/Display/__pixel'

/* fill screen with pixels switched off */
export default function clrScr() {
  let grid = [];
  for (let i = 0; i < 200; i++) {
    grid[i] = <Pixel key = {i} status = 'off' />
  }
  this.setState({pixels: grid});
}