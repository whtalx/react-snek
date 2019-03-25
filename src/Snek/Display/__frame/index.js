import React, {Component} from 'react'
import './index.css'
import Pixel from '../__pixel'
/* keypoint #2
* компонент с массивам пикселей. пока смотрит в пропс один раз в componentDidMount,
* а хотелось бы componentWillReceiveProps
*/
class Frame extends Component {
  constructor (props) {
    super(props)
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
    this.props.pixels.map((propsItem) => {
      let index = this.state.p.findIndex(stateItem => {
        return stateItem.x === propsItem.x && stateItem.y === propsItem.y
      })
      this.setState(state =>{
        state.p[index].status = propsItem.status
        return state
      })
      return null
    })
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