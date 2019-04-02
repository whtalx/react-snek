import React from 'react'
import './index.css'

export default function LevelValue (props) {
  return (
    <p className = 'display__level-value'>
      {("0" + props.level).slice(-2)}
    </p>
  );
}