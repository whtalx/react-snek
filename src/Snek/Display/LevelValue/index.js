import React from 'react'

export default function LevelValue (props) {
  return (
    <p className = 'display__level-value'>
      {("0" + props.level).slice(-2)}
    </p>
  );
}