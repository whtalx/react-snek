import React from 'react'
import './index.css'
import Pixel from '../__pixel'

function Frame() {
  let
    i = 0,
    grid = [];

  for (let y = 0; y < 20; y++) {
    for (let x = 0; x < 10; x++) {
      grid[i] = <Pixel coordinates = {{'x' : x, 'y' : y}} />
      i++
    }
  }
  
  return (
    <div className = 'display__frame'>
    {grid}
    </div>
  )
}

export default Frame