import React from 'react'
import './index.css'
import Edging from'./__edging'

function Display (props) {
  return (
    <div className = 'display'>
      <Edging pixels = {props.pixels} />
    </div>
  )
}

export default Display