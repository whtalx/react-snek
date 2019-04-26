import React, { Component } from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import spiral from '../spiral';

configure({ adapter: new Adapter() });

window.requestAnimationFrame = (f) => { f && f(); };

class TestObj extends Component {
  constructor() {
    super();

    this.state = {
      condition: {
        isPlaying: true,
      },
    };

    this.slither = jest.fn();
    this.switchPixels = jest.fn();
    this.spiral = spiral.bind(this);
  }

  componentDidMount() {
    this.spiral();
  }

  render() {
    return;
  }
}

const wrapper = shallow(<TestObj />);

test('switchPixels called 200 times', () => {
  expect(wrapper.instance().switchPixels).toHaveBeenCalledTimes(200);
});

test('slither callback', () => {
  expect(wrapper.instance().slither).toHaveBeenCalled();
});

test('setting state isPlaying', () => {
  expect(wrapper.state().condition.isPlaying).toBeFalsy();
});
