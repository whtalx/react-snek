import React from 'react'
import './index.css'
import ButtonUp from '../__button-up'
import Arrows from '../__arrows'
import ButtonDown from '../__button-down'

function Center () {
  return (
    <div className='d-pad__center'>
     <ButtonUp />
     <Arrows />
     <ButtonDown />
    </div>
  )
}

export default Center