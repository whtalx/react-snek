import React from 'react'
import './index.css'
import Frame from '../__frame'
import Side from '../__side'

function Glass(props) {
  return (
    <div className = 'display__glass'>
      <Frame pixels = {props.pixels} />
      <Side />
    </div>
  )
}


export default Glass