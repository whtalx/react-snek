import React from 'react'
import './index.css'
import ScoreValue from '../__score-value'

function Score (props) {
  return (
    <div className = 'display__score'>
      SCORE
      <ScoreValue score = {props.score} />
    </div>
  )
}

export default Score