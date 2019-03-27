import React from 'react'
import './index.css'
import ButtonRight from '../__button-right'

function Right (props) {
  return (
    <div className = 'd-pad__right'>
      <ButtonRight button = {props.button} />
    </div>
  )
}

export default Right