import React from 'react'
import './index.css'
import HiScoreValue from '../__hi-score-value'

function HiScore () {
  return (
    <div className = 'display__hi-score'>
      HI-SCORE
      <HiScoreValue />
    </div>
  )
}

export default HiScore