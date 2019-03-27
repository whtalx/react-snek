import React from 'react'
import './index.css'
import ButtonUp from '../__button-up'
import Arrows from '../__arrows'
import ButtonDown from '../__button-down'

function Center (props) {
  return (
    <div className = 'd-pad__center'>
     <ButtonUp button = {props.button} />
     <Arrows />
     <ButtonDown button = {props.button} />
    </div>
  )
}

export default Center