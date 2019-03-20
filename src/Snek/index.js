import React from 'react'
import './index.css'
import Display from './Display'
import Controls from './Controls'

function Snek () {
  return (
    <div className='snek'>
      <Display />
      <Controls />
    </div>
  )
}

export default Snek