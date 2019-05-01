import React, { Component } from 'react';
import { mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import handleMouseDown from '../handleMouseDown';
import handleMouseUp from '../handleMouseUp';

configure({ adapter: new Adapter() });

const getElementById = jest.fn(() => {
  return {
    dispatchEvent: jest.fn(),
  }
});

const clearTimeout= jest.fn();

document.getElementById = getElementById;
document.clearTimeout = clearTimeout;

class TestObj extends Component {
  constructor() {
    super();

    this.display = {
      snake: [{ x: 0, y: 5 }],
    };

    this.condition = {
      direction: 'right',
      nextDirection: null,
      isAlive: true,
      isCelebrating: true,
      isMuted: false,
      isPaused: false,
      isPlaying: true,
      isWaiting: true,
    }

    this.state = {
      display: this.display,
      condition: this.condition,
      data: {
        speed: 0,
        speedCoefficient: 25,
        subtrahend: 0,
      },
    };
    
    this.pause = jest.fn();
    this.play = jest.fn();
    this.playSound = jest.fn();
    this.resume = jest.fn();
    this.reverse = jest.fn();
    this.spiral = jest.fn();
    this.start = jest.fn();
    this.turboSpeed = jest.fn();
    this.handleMouseDown = handleMouseDown.bind(this);
    this.handleMouseUp = handleMouseUp.bind(this);
  }
  
  render() {
    return(
      <div
        onMouseDown={this.handleMouseDown}
        onMouseUp={this.handleMouseUp}
        onTouchStart={this.handleMouseDown}
        onTouchEnd={this.handleMouseUp}
      >
        <div id="start" />
        <div id="pause" />
        <div id="sound" />
        <div id="left" />
        <div id="up" />
        <div id="down" />
        <div id="right" />
      </div>
    );
  }
}

const wrapper = mount(<TestObj />);
const touchstart = jest.fn();
const touchend = jest.fn();

describe('handleMouseDown', () => {
  test('preventDefault on touchstart event', () => {
    wrapper.simulate('touchstart', { preventDefault: touchstart });
    expect(touchstart).toBeCalled();
  });

  describe('start button', () => {
    test('call slither animation', () => {
      wrapper.find('#start').simulate('mousedown');
      expect(wrapper.instance().spiral).toBeCalled();
    });

    test('set isPlaying state', () => {
      expect(wrapper.state().condition.isPlaying).toBeFalsy();
    });

    test('set isCelebrating state', () => {
      expect(wrapper.state().condition.isCelebrating).toBeFalsy();
    });

    test('start game', () => {
      wrapper.find('#start').simulate('mousedown');
      expect(wrapper.instance().start).toBeCalled();
    });
  });

  describe('pause button', () => {
    test('pausing', () => {
      wrapper.find('#pause').simulate('mousedown');
      expect(wrapper.instance().pause).toBeCalled();
      wrapper.instance().condition.isPaused = true;
    });

    test('resuming', () => {
      wrapper.find('#pause').simulate('mousedown');
      expect(wrapper.instance().resume).toBeCalled();
      wrapper.instance().condition.isPaused = false;
    });
  });
  
  describe('sound button', () => {
    test('switching off', () => {
      wrapper.find('#sound').simulate('mousedown');
      expect(wrapper.state().condition.isMuted).toBeTruthy();
    });
    
    test('call playSound without arguments', () => {
      expect(wrapper.instance().playSound.mock.calls[0][0]).toBeUndefined();
    });

    test('switching on', () => {
      wrapper.find('#sound').simulate('mousedown');
      expect(wrapper.state().condition.isMuted).toBeFalsy();
    });
    
    test('call playSound with \'resume\'', () => {
      expect(wrapper.instance().playSound).toBeCalledWith('resume');
    });
  });
  
  describe('direction buttons', () => {
    test('prevent move over border', () => {
      wrapper.find('#left').simulate('mousedown');
      expect(wrapper.state().condition.nextDirection).toEqual(null);
    });

    test('turn up', () => {
      wrapper.find('#up').simulate('mousedown');
      expect(wrapper.state().condition.nextDirection).toEqual('up');
      wrapper.instance().condition.nextDirection = null;
    });

    test('call turboSpeed', () => {
      expect(wrapper.instance().turboSpeed).toBeCalled();
    });

    test('call play', () => {
      expect(wrapper.instance().play).toBeCalled();
    });

    test('set isWaiting state', () => {
      expect(wrapper.state().condition.isWaiting).toBeFalsy();
    });

    test('turn right', () => {
      wrapper.find('#right').simulate('mousedown');
      expect(wrapper.state().condition.nextDirection).toEqual('right');
      wrapper.instance().condition.nextDirection = null;
    });

    test('reverse', () => {
      wrapper.instance().display.snake[0].x = 5;
      wrapper.find('#left').simulate('mousedown');
      expect(wrapper.instance().reverse).toBeCalled();
    });

    test('turn down', () => {
      wrapper.find('#down').simulate('mousedown');
      expect(wrapper.state().condition.nextDirection).toEqual('down');
    });
  });
});

describe('handleMouseUp', () => {
  test('preventDefault on touchend event', () => {
    wrapper.simulate('touchend', { preventDefault: touchend });
    expect(touchend).toBeCalled();
  });
  
  test('clear turboTimeout', () => {
    wrapper.simulate('mouseup');
    expect(wrapper.instance().turboTimeout).toBeNull();
  });
  
  test('reset speed', () => {
    expect(wrapper.state().data.subtrahend).toEqual(25);
  });
});
