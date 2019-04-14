import React, {PureComponent} from 'react'
import './index.css'
import Pixel from '../Pixel'

export default class LivesValue extends PureComponent {
  render() {
    let lives = [];
    for (let i = 1; i <= 9; i++) {
      let status = 'off';
      /* if (i === 1) {
        status = 'blink';
      } else  */if (this.props.lives >= i) {
        status = 'on';
      }
      lives[i - 1] = <Pixel key = {'life' + i} status = {status} />
    }
    return (
      <div className = 'display__lives-value'>
        {lives}
      </div>
    )
  }
}