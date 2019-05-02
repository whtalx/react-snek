import React, { Component } from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import resume from '../resume';

configure({ adapter: new Adapter() });

const timeoutID = Math.floor(Math.random() * 100);
window.setTimeout = jest.fn(() => {
  return timeoutID;
});

class TestObj extends Component {
  constructor() {
    super();

    this.state = {
      condition: {
        isPaused: true,
        isWaiting: false,
      },
      data: {
        subtrahend: 25,
      },
    }

    this.gameTimeout = null;
    this.play = null;
    this.playSound = jest.fn();
    this.resume = resume.bind(this);
  }
  
  render() {
    return;
  }
}

const wrapper = shallow(<TestObj />);

test('setting isPaused state', () => {
  expect(wrapper.state().condition.isPaused).toBeTruthy();
  wrapper.instance().resume();
  expect(wrapper.state().condition.isPaused).toBeFalsy();
});

test('playSound called', () => {
  expect(wrapper.instance().playSound).toHaveBeenCalledWith('resume');
});

test('setTimeout called', () => {
  expect(window.setTimeout)
    .toHaveBeenCalledWith(wrapper.instance().play, 400 - wrapper.state().data.subtrahend);
});

test('timeout id in this.gameTimeout', () => {
  expect(wrapper.instance().gameTimeout).toEqual(timeoutID);
});
