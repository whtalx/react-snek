import React from 'react';
import './index.css';
import ButtonLeft from './ButtonLeft';
import ButtonUp from './ButtonUp';
import ButtonDown from './ButtonDown';
import ButtonRight from './ButtonRight';

export default function DPad(props) {
  return (
    <div className="d-pad">
      <div className="d-pad__left">
        <ButtonLeft button={props.button} />
      </div>
      <div className="d-pad__center">
        <ButtonUp button={props.button} />
        <div className="d-pad__arrows" />
        <ButtonDown button={props.button} />
      </div>
      <div className="d-pad__right">
        <ButtonRight button={props.button} />
      </div>
    </div>
  );
}
