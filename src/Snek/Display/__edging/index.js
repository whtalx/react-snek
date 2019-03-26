import React from 'react'
import './index.css'
import Legend from '../__legend'
import Borders from '../__borders'

function Edging(props) {
  return (
    <fieldset className = 'display__edging'>
      <Legend />
      <Borders pixels = {props.pixels} />
    </fieldset>
  )
}

export default Edging