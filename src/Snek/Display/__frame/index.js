import React, {Component} from 'react'
import './index.css'
import Pixel from '../__pixel'
//TODO: сделать метод с setState и экспортировать
//зачем хранить массив в state?
class Frame extends Component {
  render() {
    let i = 0
    let grid = []

    for (let y = 0; y < 20; y++) {
      for (let x = 0; x < 10; x++) {
        grid[i] = <Pixel key = {i} x = {x} y = {y} status = 'off' />
        i++
      }
    }
    
    return (
      <div className = 'display__frame'>
      {grid}
      </div>
    )
  }
}

export default Frame