import React from 'react'
import './index.css'
import Display from './Display'
import Controls from './Controls'
import DPad from './DPad'

function Snek () {
  return (
    <div className = 'snek'>
      <Display />
      <DPad />
      <Controls />
    </div>
  )
}

export default Snek