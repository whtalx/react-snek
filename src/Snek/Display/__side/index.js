import React from 'react'
import './index.css'
import Score from '../__score'
import HiScore from '../__hi-score'
import Level from '../__level'
import Speed from '../__speed'
import Pause from '../__pause'

function Side () {
  return (
    <div className = 'display__side'>
      <Score />
      <HiScore />
      <Level />
      <Speed />
      <Pause />
    </div>
  )
}

export default Side