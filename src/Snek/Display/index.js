import React from 'react'
import './index.css'
import ScoreValue from './__score-value'
import HiScoreValue from './__hi-score-value'
import LevelValue from './__level-value'
import SpeedValue from './__speed-value'
import Pause from './__pause'

export default function Display (props) {
  return (
    <div className = 'display'>
      <fieldset className = 'display__edging'>
        <legend className = 'display__legend'></legend>
        <div className = 'display__borders'>
          <div className = 'display__glass'>
            <div className = 'display__frame'>
              {props.children}
            </div>
            <div className = 'display__side'>
              <div className = 'display__score'>
                SCORE
                <ScoreValue score = {props.score} />
              </div>
              <div className = 'display__hi-score'>
                HI-SCORE
                <HiScoreValue hiScore = {props.hiScore} />
              </div>
              <div className = 'display__level'>
                LEVEL
                <LevelValue level = {props.level} />
              </div>
              <div className = 'display__speed'>
                <SpeedValue speed = {props.speed} />
                SPEED
              </div>
              <Pause paused = {props.paused} />
            </div>
          </div>
        </div>
      </fieldset>
    </div>
  );
}