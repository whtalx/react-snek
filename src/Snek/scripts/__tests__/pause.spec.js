import React, { Component } from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import pause from '../pause';

configure({ adapter: new Adapter() });

window.clearTimeout = jest.fn();

class TestObj extends Component {
  constructor() {
    super();

    this.state = {
      condition: {
        isPaused: false,
      },
    }

    this.gameTimeout = 'not a timeout';
    this.playSound = jest.fn();
    this.pause = pause.bind(this);
  }
  
  render() {
    return;
  }
}

const wrapper = shallow(<TestObj />);

test('setting isPaused state', () => {
  expect(wrapper.state().condition.isPaused).toBeFalsy();
  wrapper.instance().pause();
  expect(wrapper.state().condition.isPaused).toBeTruthy();
});

test('clearTimeout called', () => {
  expect(window.clearTimeout).toHaveBeenCalledWith(wrapper.instance().gameTimeout);
});

test('playSound called', () => {
  expect(wrapper.instance().playSound).toHaveBeenCalledWith('pause');
});
