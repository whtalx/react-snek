import React from 'react'

export default function HiScoreValue(props) {
  return (
    <p className = 'display__hi-score-value'>
      {('000000' + props.hiScore).slice(-6)}
    </p>
  );
}