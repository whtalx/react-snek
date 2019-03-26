import React from 'react'
import './index.css'
import Glass from '../__glass'

function Borders(props) {
  return (
    <div className = 'display__borders'>
      <Glass pixels = {props.pixels} />
    </div>
  )
}

export default Borders