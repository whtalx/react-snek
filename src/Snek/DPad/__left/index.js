import React from 'react'
import './index.css'
import ButtonLeft from '../__button-left'

function Left (props) {
  return (
    <div className = 'd-pad__left'>
      <ButtonLeft button = {props.button} />
    </div>
  )
}

export default Left