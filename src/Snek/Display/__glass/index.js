import React, {Component} from 'react'
import './index.css'
import Frame from '../__frame'
import Side from '../__side'
/* keypoint #1
* первый родитель.  пока только он передаёт массив пикселей, которые нужно изменить
*/
class Glass extends Component {
  constructor(props) {
    super(props)
    this.state = {
      p: [{x: 0, y: 0, status: 'on'}]
    }
    setTimeout(() => {
      this.setState({p: [{x: 0, y: 0, status: 'off'}, {x: 9, y: 19, status: 'blink'}]})
      console.log('sent '+this.state.p)
    }, 3000)

  }
  render() {
    return (
      <div className = 'display__glass'>
        <Frame pixels={this.state.p} />
        <Side />
      </div>
    )
  }
}
export default Glass