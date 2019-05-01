import React, { Component } from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import wipe from '../wipe';

configure({ adapter: new Adapter() });

window.requestAnimationFrame = (f) => { f && f(); };

class TestObj extends Component {
  constructor() {
    super();

    this.state = {
      display: {
        food: [{ x: 0, y: 1, status: 'blink' }],
        snake: [{ x: 4, y: 4, status: 'blink' }],
        obstacle: [{ x: 8, y: 8, status: 'blink' }],
      },
      condition: {},
    };

    this.switchPixels = jest.fn();
    this.wipe = wipe.bind(this);
  }

  componentDidMount() {
    this.wipe();
  }

  render() {
    return;
  }
}

const wrapper = shallow(<TestObj />);

test('switchPixels called 40 times', () => {
  expect(wrapper.instance().switchPixels).toHaveBeenCalledTimes(40);
});

test('setting state isAlive', () => {
  expect(wrapper.state().condition.isAlive).toBeTruthy();
});

test('setting state isWaiting', () => {
  expect(wrapper.state().condition.isWaiting).toBeTruthy();
});
