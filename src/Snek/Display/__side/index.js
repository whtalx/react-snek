import React from 'react'
import './index.css'
import Score from '../__score'
import HiScore from '../__hi-score'
import Level from '../__level'
import Speed from '../__speed'
import Pause from '../__pause'

function Side (props) {
  return (
    <div className = 'display__side'>
      <Score score = {props.score} />
      <HiScore hiScore = {props.hiScore} />
      <Level level = {props.level} />
      <Speed speed = {props.speed} />
      <Pause paused = {props.paused} />
    </div>
  )
}

export default Side