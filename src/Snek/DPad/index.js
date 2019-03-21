import React from 'react'
import './index.css'
import Left from './__left'
import Center from './__center'
import Right from './__right'

function DPad () {
  return (
    <div className='d-pad'>
      <Left />
      <Center />
      <Right />
    </div>
  )
}

export default DPad