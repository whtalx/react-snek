import React from 'react'
import './index.css'
import ScoreValue from './__score-value'
import HiScoreValue from './__hi-score-value'
import LevelValue from './__level-value'
import SpeedValue from './__speed-value'
import Pause from './__pause'
import Sound from './__sound'
import LivesValue from './__lives-value';

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