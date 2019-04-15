import React from 'react'

export default function Sound(props) {
  return (
    <div className = {'display__sound' + (props.sound? ' display__sound_on' : '')}>
      SOUND
      <svg className = 'display__sound-svg' viewBox = '0 0 32 32'>
        <path style = {{'fill': 'inherit', 'fillRule': 'evenodd'}} d = 'M28,1.01L8.239,4.242S8.2,23.086,8.2,23.485c-3.79,0-6.2,1.062-6.2,3.229S3.256,30.967,6.727,31s4.291-2.18,4.291-5.294V8.607C11.068,8.6,25.19,6.3,25.19,6.3s0,12.231,0,14.174c-3.6,0-6.642.431-6.642,4.1,0,2,2.364,4.286,4.727,4.286,3.4,0,4.738-2.148,4.738-6.164Z' />
      </svg>
    </div>
  );
}