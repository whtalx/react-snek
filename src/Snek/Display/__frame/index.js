import React, {Component} from 'react'
import './index.css'
import Pixel from '../__pixel'
//TODO: сделать метод с setState и экспортировать
class Frame extends Component {
  constructor () {
    super()
    this.state = {
      p : []
    }
  }
  componentWillMount() {
    let i = 0
    let grid = []
    for (let y = 0; y < 20; y++) {
      for (let x = 0; x < 10; x++) {
        grid[i] = {'x' : x, 'y' : y, 'status' : 'off' }
        i++
      }
    }
    this.setState({p : grid})
  }
  componentDidMount() {
    //TODO: почему стейт меняется, но ребёнку не передаётся?
    //в React Developer Tools стейт показывается "on", но на пикселе атрибуты "off"
    this.setState(state => {state.p[15].status = 'on'})
  }
  render() {
    const list = this.state.p.map((item, index) => {
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