import React from 'react'
import './index.css'
import Left from './__left'
import Center from './__center'
import Right from './__right'

function DPad (props) {
  return (
    <div className='d-pad'>
      <Left button = {props.button} />
      <Center button = {props.button} />
      <Right button = {props.button} />
    </div>
  )
}

export default DPad