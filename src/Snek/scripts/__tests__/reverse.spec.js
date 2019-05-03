import React, { Component } from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import reverse from '../reverse';

configure({ adapter: new Adapter() });

class TestObj extends Component {
  constructor() {
    super();

    this.state = {
      condition: {
        nextDirection: null,
      },

      display: {
        snake: [
          { x: 1, y: 5, status: 'on' },
          { x: 2, y: 5, status: 'on' },
          { x: 3, y: 5, status: 'blink' },
        ],
      },
    }

    this.turboSpeed = jest.fn();
    this.reverse = reverse.bind(this);
  }
  
  render() {
    return;
  }
}

const wrapper = shallow(<TestObj />);

test('snake reversing', () => {
  const snakeHead = { ...wrapper.state().display.snake[wrapper.state().display.snake.lenght - 1] };
  wrapper.instance().reverse();
  expect(wrapper.state().display.snake[0]).toMatchObject(snakeHead);
});

test('setting \'left\' as nextDirection', () => {
  expect(wrapper.state().condition.nextDirection).toEqual('left');
});

test('setting \'right\' as nextDirection', () => {
  wrapper.setState({
    display: {
      snake: [
        { x: 3, y: 5, status: 'on' },
        { x: 2, y: 5, status: 'on' },
        { x: 1, y: 5, status: 'blink' },
      ],
    },
  });
  wrapper.instance().reverse();
  expect(wrapper.state().condition.nextDirection).toEqual('right');
});

test('setting \'up\' as nextDirection', () => {
  wrapper.setState({
    display: {
      snake: [
        { x: 5, y: 5, status: 'on' },
        { x: 5, y: 6, status: 'on' },
        { x: 5, y: 7, status: 'blink' },
      ],
    },
  });
  wrapper.instance().reverse();
  expect(wrapper.state().condition.nextDirection).toEqual('up');
});

test('setting \'down\' as nextDirection', () => {
  wrapper.setState({
    display: {
      snake: [
        { x: 5, y: 7, status: 'on' },
        { x: 5, y: 6, status: 'on' },
        { x: 5, y: 5, status: 'blink' },
      ],
    },
  });
  wrapper.instance().reverse();
  expect(wrapper.state().condition.nextDirection).toEqual('down');
});

test('don\'t reverse to left if tail head x === 0', () => {
  wrapper.setState({
    condition: {
      nextDirection: null,
    },

    display: {
      snake: [
        { x: 0, y: 5, status: 'on' },
        { x: 1, y: 5, status: 'on' },
        { x: 2, y: 5, status: 'blink' },
      ],
    },
  });
  wrapper.instance().reverse();
  expect(wrapper.state().condition.nextDirection).not.toEqual('left');
});

test('don\'t reverse to right if snake tail x === 9', () => {
  wrapper.setState({
    display: {
      snake: [
        { x: 9, y: 5, status: 'on' },
        { x: 8, y: 5, status: 'on' },
        { x: 7, y: 5, status: 'blink' },
      ],
    },
  });
  wrapper.instance().reverse();
  expect(wrapper.state().condition.nextDirection).not.toEqual('right');
});

test('don\'t reverse to up if snake tail y === 0', () => {
  wrapper.setState({
    display: {
      snake: [
        { x: 5, y: 0, status: 'on' },
        { x: 5, y: 1, status: 'on' },
        { x: 5, y: 2, status: 'blink' },
      ],
    },
  });
  wrapper.instance().reverse();
  expect(wrapper.state().condition.nextDirection).not.toEqual('up');
});

test('don\'t reverse to down if snake tail y === 19', () => {
  wrapper.setState({
    display: {
      snake: [
        { x: 5, y: 19, status: 'on' },
        { x: 5, y: 18, status: 'on' },
        { x: 5, y: 17, status: 'blink' },
      ],
    },
  });
  wrapper.instance().reverse();
  expect(wrapper.state().condition.nextDirection).not.toEqual('down');
});
