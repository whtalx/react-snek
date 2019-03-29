import React from 'react'
import Pixel from '../Snek/Display/__pixel'

export default function switchPixels(pixels) {
  let newPixels = this.state.pixels
  pixels.forEach((item) =>{
    if (
      item.x >= 0 &&
      item.x < 10 &&
      item.y >= 0 &&
      item.y < 20 &&
      (item.status === 'on'||
       item.status === 'off' ||
       item.status === 'blink')) {
          let index = item.x + item.y * 10
          newPixels[index] = <Pixel key = {index} status = {item.status} />
    }
  })
  this.setState({'pixels' : newPixels})
}