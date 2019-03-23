import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import Snek from './Snek'
import switchPixel from './switchPixel'
import clicked from './clicked'

ReactDOM.render(<Snek />, document.getElementsByClassName('root')[0])

switchPixel(1, 1, 'on')
switchPixel(8, 18, 'blink')
document.addEventListener('mousedown', clicked)