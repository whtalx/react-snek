import React from 'react'
import './index.css'
import Pixel from '../__pixel'

function Frame (props) {
  let list = props.pixels.map((item, index) => {
    return <Pixel key = {index} x = {item.x} y = {item.y} status = {item.status} />
  })

  return (
    <div className = 'display__frame'>
      {list}
    </div>
  )
}

export default Frame