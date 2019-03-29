import React from 'react'
import './index.css'

function Display (props) {
  return (
    <div className = 'display'>
      {props.children}
    </div>
  )
}

export default Display