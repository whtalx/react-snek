import React, { Component } from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import play from '../play';

configure({ adapter: new Adapter() });

window.clearTimeout = jest.fn();

class TestObj extends Component {
  constructor() {
    super();

    this.state = {
      condition: {
        direction: 'right',
        nextDirection: 'up',
        isAlive: true,
      },
      data: {
        lives: 2,
        subtrahend: 325,
      },
      display: {
        food: [{ x: 3, y: 3, status: 'blink' }],
        obstacle: [{ x: 3, y: 2, status: 'on' }],
        snake: [
          { x: 1, y: 5, status: 'on' },
          { x: 2, y: 5, status: 'on' },
          { x: 3, y: 5, status: 'blink' },
        ],
      },
    }

    this.animationTimeout = 'not a timeout';
    this.gameTimeout = 'not a timeout';
    this.turboTimeout = 'not a timeout';

    this.newFood = jest.fn();
    this.explode = jest.fn();
    this.levelUp = jest.fn();
    this.playSound = jest.fn();
    this.resume = jest.fn();
    this.switchPixels = jest.fn();
    this.play = play.bind(this);
  }
  
  render() {
    return;
  }
}

const wrapper = shallow(<TestObj />);
wrapper.instance().play();

test('setting direction state depending on nextDirection', () => {
  expect(wrapper.state().condition.direction).toEqual('up');
});

test('setting null in nextDirection', () => {
  expect(wrapper.state().condition.nextDirection).toBeNull();
});

test('moving to next coordinate', () => {
  const snake = wrapper.state().display.snake;
  expect(snake[snake.length - 1].y).toEqual(4);
});

test('switching off pixel with previous tail coordinates', () => {
  expect(wrapper.instance().switchPixels.mock.calls[0][0][0])
    .toMatchObject({ x: 1, y: 5, status: 'off' });
});

test('switching on snake pixels with new coordinates', () => {
  const firstTwoPixels = [
    wrapper.state().display.snake[wrapper.state().display.snake.length - 2],
    wrapper.state().display.snake[wrapper.state().display.snake.length - 1],
  ];
  wrapper.instance().switchPixels.mock.calls[1][0].forEach((item, index) => {
    expect(item).toMatchObject(firstTwoPixels[index]);
  });
});

test('playSound called on turbo', () => {
  expect(wrapper.instance().playSound).toBeCalledWith('turbo');
});

test('resume called', () => {
  expect(wrapper.instance().resume).toBeCalled();
});

test('grow when eating food', () => {
  const prevLength = wrapper.state().display.snake.length;
  wrapper.instance().play();
  expect(wrapper.state().display.snake.length).toEqual(prevLength + 1);
});

test('levelUp called', () => {
  expect(wrapper.instance().levelUp).toBeCalled();
});

test('bump an obstacle death', () => {
  wrapper.instance().play();
  expect(wrapper.state().condition.isAlive).toBeFalsy();
});

test('lives amount decreasing', () => {
  expect(wrapper.state().data.lives).toEqual(1);
});

test('explode called with level restart', () => {
  expect(wrapper.instance().explode.mock.calls[0])
    .toMatchObject([wrapper.state().display.obstacle, false]);
});

test('off screen death', () => {
  wrapper.setState({
    condition: {
      direction: 'up',
      nextDirection: null,
      isAlive: true,
    },
    data: {
      lives: 2,
      subtrahend: 0,
    },
    display: {
      food: [{ x: 3, y: 3, status: 'blink' }],
      obstacle: [{ x: 3, y: 2, status: 'on' }],
      snake: [
        { x: 9, y: 2, status: 'on' },
        { x: 9, y: 1, status: 'on' },
        { x: 9, y: 0, status: 'blink' },
      ],
    },
  });
  wrapper.instance().play();
  expect(wrapper.state().condition.isAlive).toBeFalsy();
});

test('explode called with game over', () => {
  expect(wrapper.instance().explode.mock.calls[1][0][0])
    .toMatchObject({ x: 9, y: 0, status: 'on' });
});

test('snake bite itself death', () => {
  wrapper.setState({
    condition: {
      direction: 'up',
      nextDirection: 'right',
      isAlive: true,
    },
    data: {
      lives: 2,
      subtrahend: 0,
    },
    display: {
      food: [{ x: 3, y: 3, status: 'blink' }],
      obstacle: [{ x: 3, y: 2, status: 'on' }],
      snake: [
        { x: 5, y: 3, status: 'on' },
        { x: 5, y: 4, status: 'on' },
        { x: 5, y: 5, status: 'on' },
        { x: 5, y: 4, status: 'on' },
        { x: 4, y: 4, status: 'blink' },
      ],
    },
  });
  wrapper.instance().play();
  expect(wrapper.state().condition.isAlive).toBeFalsy();
});
