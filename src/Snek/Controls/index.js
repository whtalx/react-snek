import React from 'react';
import './index.css';
import StartButton from './StartButton';
import PauseButton from './PauseButton';
import SoundButton from './SoundButton';

export default function Controls(props) {
  return (
    <div className="controls">
      <div className="controls__start">
        <StartButton button={props.button} />
        start
      </div>
      <div className="controls__pause">
        <PauseButton button={props.button} />
        pause
      </div>
      <div className="controls__sound">
        <SoundButton button={props.button} />
        sound
      </div>
    </div>
  );
}
