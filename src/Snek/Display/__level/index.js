import React from 'react'
import './index.css'
import LevelValue from '../__level-value'

function Level (props) {
  return (
    <div className = 'display__level'>
      LEVEL
      <LevelValue level = {props.level} />
    </div>
  )
}

export default Level