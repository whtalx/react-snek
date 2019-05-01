import React, { Component } from 'react';
import './index.scss';
import methods from './scripts/methods';
import Display from './Display';
import Controls from './Controls';
import DPad from './DPad';

export default class Snek extends Component {
  constructor() {
    super();

    const condition = {
      button: null,
      direction: 'right',
      nextDirection: null,
      isAlive: false,
      isMuted: false,
      isPaused: false,
      isPlaying: false,
      isWaiting: false,
      isCelebrating: false,
    }

    const data = {
      score: 0,
      hiScore: 0,
      lastScore: 0,
      level: 0,
      speed: 0,
      lives: 0,
      speedCoefficient: 25,
      scoreCoefficient: 25,
      subtrahend: 0,
    }
    
    const display = {
      area: [],
      food: [],
      obstacle: [],
      snake: [],
    }

    this.state = {
      condition,
      data,
      display,
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
          score={this.state.data.score}
          hiScore={this.state.data.hiScore}
          level={this.state.data.level}
          speed={this.state.data.speed}
          lives={this.state.data.lives}
          paused={this.state.condition.isPaused}
          sound={!this.state.condition.isMuted}
          children={this.state.display.area}
        />
        <Controls button={this.state.condition.button} />
        <DPad button={this.state.condition.button} />
      </div>
    );
  }
}
