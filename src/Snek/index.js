import React, { Component } from 'react';
import './index.scss';
import methods from '../scripts/methods';
import Display from './Display';
import Controls from './Controls';
import DPad from './DPad';

export default class Snek extends Component {
  constructor() {
    super();

    this.state = {
      food: [],
      snake: [],
      obstacle: [],
      score: 0,
      hiScore: 0,
      lastScore: 0,
      level: 0,
      speed: 0,
      lives: 0,
      button: null,
      direction: 'right',
      nextDirection: null,
      speedCoefficient: 25,
      scoreCoefficient: 25,
      subtrahend: 0,
      isAlive: false,
      isMuted: false,
      isPaused: false,
      isPlayiyg: false,
      isWaiting: false,
      isCelebrating: false,
    }

    this.methods = methods.bind(this);
    this.methods();
  }

  componentDidMount() {
    this.addEventListeners();
    this.initLocalStorage();
    this.clrScr();
    this.slither();
  }

  componentWillUnmount() {
    this.removeEventListeners();
  }

  render() {
    return (
      <div className="snek">
        <Display
          score={this.state.score}
          hiScore={this.state.hiScore}
          level={this.state.level}
          speed={this.state.speed}
          lives={this.state.lives}
          paused={this.state.isPaused}
          sound={!this.state.isMuted}
          children={this.state.pixels}
        />
        <Controls button={this.state.button} />
        <DPad button={this.state.button} />
      </div>
    );
  }
}
