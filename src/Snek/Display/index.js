import React from 'react'
import './index.css'
import Side from './__side'

function Display (props) {
  return (
    <div className = 'display'>
      <fieldset className = 'display__edging'>
        <legend className = 'display__legend'></legend>
        <div className = 'display__borders'>
          <div className = 'display__glass'>
            <div className = 'display__frame'>
              {props.children}
            </div>
            <Side
              paused = {props.paused}
              score = {props.score}
              hiScore = {props.hiScore}
              level = {props.level}
              speed = {props.speed}
            />
          </div>
        </div>
      </fieldset>
    </div>
  )
}

export default Display