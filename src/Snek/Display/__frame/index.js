import React, {Component} from 'react'
import './index.css'
import Pixel from '../__pixel'

class Frame extends Component {
  constructor (props) {
    super(props)
    let i = 0
    let grid = []
    for (let y = 0; y < 20; y++) {
      for (let x = 0; x < 10; x++) {
        grid[i] = {'x' : x, 'y' : y, 'status' : 'off' }
        i++
      }
    }
    this.state = {p : grid}
  }

  static getDerivedStateFromProps(nextProps, prevState){
    let newState = {}
    nextProps.pixels.map((propsItem) => {
      let index = prevState.p.findIndex(stateItem => {
        return stateItem.x === propsItem.x && stateItem.y === propsItem.y
      })
      
      if (prevState.p[index].status !== propsItem.status) {
        prevState.p[index].status = propsItem.status
        newState = prevState
      }
      return null
    })

    if (Object.getOwnPropertyNames(newState).length === 0) {
      return null
    } else {
      return {newState}
    }
  }

  render() {
    let list = this.state.p.map((item, index) => {
      return <Pixel key = {index} x = {item.x} y = {item.y} status = {item.status} />
    })

    return (
      <div className = 'display__frame'>
        {list}
      </div>
    )
  }
}

export default Frame