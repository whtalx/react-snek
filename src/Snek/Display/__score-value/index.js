import React from 'react'
import './index.css'

export default function ScoreValue (props) {
  return (
    <p className = 'display__score-value'>
      {("000000" + props.score).slice(-6)}
    </p>
  )
}