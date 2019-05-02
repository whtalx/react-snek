import React, { Component } from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import turboSpeed from '../turboSpeed';

configure({ adapter: new Adapter() });

window.setTimeout = jest.fn((f, t) => {
  f();
  return t;
});

class TestObj extends Component {
  constructor() {
    super();

    this.state = {
      data: {
        subtrahend: 25,
      },
    }

    this.turboTimeout = 'э';
    this.turboSpeed = turboSpeed.bind(this);
  }
  
  render() {
    return;
  }
}

const wrapper = shallow(<TestObj />);

test('do nothing if there is timeout already', () => {
  wrapper.instance().turboSpeed();
  expect(window.setTimeout).not.toBeCalled();
});

test('setTimeout called', () => {
  wrapper.instance().turboTimeout = null;
  wrapper.instance().turboSpeed();
  expect(window.setTimeout).toBeCalled();
});

test('timeout delay is 400', () => {
  expect(wrapper.instance().turboTimeout).toEqual(400);
});

test('subtrahend state setting', () => {
  expect(wrapper.state().data.subtrahend).toEqual(325);
});
