import React from 'react'
import './index.scss'
import ScoreValue from './ScoreValue'
import HiScoreValue from './HiScoreValue'
import LevelValue from './LevelValue'
import SpeedValue from './SpeedValue'
import Pause from './Pause'
import Sound from './Sound'
import LivesValue from './LivesValue';

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
              <div className = 'display__lives'>
                <LivesValue lives = {props.lives} />
              </div>
              <Pause paused = {props.paused} />
              <Sound sound = {props.sound} />
            </div>
          </div>
        </div>
      </fieldset>
    </div>
  );
}