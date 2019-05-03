import React, { Component } from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import start from '../start';

configure({ adapter: new Adapter() });

window.clearTimeout = jest.fn();

class TestObj extends Component {
  constructor() {
    super();

    this.state = {
      condition: {
        direction: null,
        isPaused: false,
        isPlaying: false,
      },
      data: {
        level: 1,
        lives: 1,
        score: 99,
        speed: 1,
        speedCoefficient: 25,
        subtrahend: 400,
      },
      display: {
        obstacle: [],
        snake: [],
      },
    }

    this.animationTimeout = 'not a timeout';
    this.gameTimeout = 'not a timeout';
    this.turboTimeout = 'not a timeout';

    this.newFood = jest.fn();
    this.playSound = jest.fn();
    this.wipe = jest.fn();
    this.start = start.bind(this);
  }
  
  render() {
    return;
  }
}

const wrapper = shallow(<TestObj />);

describe('level start', () => {
  beforeAll(() => {
    wrapper.instance().start(true);
  });

  test('clearTimeout called', () => {
    expect(window.clearTimeout).toBeCalledWith('not a timeout');
  });

  test('gameTimeout is null', () => {
    expect(wrapper.instance().gameTimeout).toBeNull();
  });

  test('animationTimeout is null', () => {
    expect(wrapper.instance().animationTimeout).toBeNull();
  });

  test('turboTimeout is null', () => {
    expect(wrapper.instance().turboTimeout).toBeNull();
  });

  test('direction state setting', () => {
    expect(wrapper.state().condition.direction).toEqual('right');
  });

  test('subtrahend state setting', () => {
    expect(wrapper.state().data.subtrahend).toEqual(wrapper.state().data.speedCoefficient);
  });

  test('obstacle state setting', () => {
    wrapper.state().display.obstacle.forEach((item) => {
      expect(item.status).toEqual('on');
    });
  });

  test('snake state setting', () => {
    expect(wrapper.state().display.snake).toEqual([
      { x: 1, y: 5, status: 'on' },
      { x: 2, y: 5, status: 'on' },
      { x: 3, y: 5, status: 'blink' }
    ]);
  });

  test('newFood called', () => {
    expect(wrapper.instance().newFood).toBeCalledWith(false);
  });

  test('wipe called', () => {
    expect(wrapper.instance().wipe).toBeCalled();
  });
});

describe('game start', () => {
  beforeAll(() => {
    wrapper.instance().start();
  });

  test('score state setting', () => {
    expect(wrapper.state().data.score).toEqual(0);
  });

  test('level state setting', () => {
    expect(wrapper.state().data.level).toEqual(0);
  });

  test('speed state setting', () => {
    expect(wrapper.state().data.speed).toEqual(0);
  });

  test('lives state setting', () => {
    expect(wrapper.state().data.lives).toEqual(3);
  });

  test('isPlaying state setting', () => {
    expect(wrapper.state().condition.isPlaying).toBeTruthy();
  });

  test('playSound called', () => {
    expect(wrapper.instance().playSound).toBeCalledWith('start');
  });  
});
