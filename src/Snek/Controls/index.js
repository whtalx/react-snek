import React from 'react'
import './index.css'
import Start from './__start'
import Pause from './__pause'

function Controls () {
  return (
    <div className='controls'>
      <Start />
      <Pause />
    </div>
  )
}

export default Controls