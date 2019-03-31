import React from 'react'
import './index.css'

function HiScoreValue (props) {
  return (
    <p className = 'display__hi-score-value'>
      {("000000" + props.hiScore).slice(-6)}
    </p>
  )
}

export default HiScoreValue