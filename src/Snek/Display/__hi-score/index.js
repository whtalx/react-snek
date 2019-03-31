import React from 'react'
import './index.css'
import HiScoreValue from '../__hi-score-value'

function HiScore (props) {
  return (
    <div className = 'display__hi-score'>
      HI-SCORE
      <HiScoreValue hiScore = {props.hiScore} />
    </div>
  )
}

export default HiScore