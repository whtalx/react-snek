import React from 'react'
import './index.css'
import Legend from '../__legend'
import Borders from '../__borders'

function Edging() {
  return (
    <fieldset className ='display__edging'>
      <Legend />
      <Borders />
    </fieldset>
  )
}

export default Edging