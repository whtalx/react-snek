import React from 'react'
import './index.css'
import ButtonLeft from './__button-left'
import ButtonUp from './__button-up'
import ButtonDown from './__button-down'
import ButtonRight from './__button-right'

export default function DPad (props) {
  return (
    <div className='d-pad'>
      <div className = 'd-pad__left'>
        <ButtonLeft button = {props.button} />
      </div>
      <div className = 'd-pad__center'>
        <ButtonUp button = {props.button} />
        <div className = 'd-pad__arrows'></div>
        <ButtonDown button = {props.button} />
      </div>
      <div className = 'd-pad__right'>
        <ButtonRight button = {props.button} />
      </div>
    </div>
  );
}