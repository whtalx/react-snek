import React from 'react'
import './index.css'
import PauseSvg from '../__pause-svg'

function Pause (props) {
  return (
    <div className = {'display__pause' + (props.paused? ' display__pause_on' : '')}>
      PAUSE
      <PauseSvg />
    </div>
  )
}

export default Pause