import React, { Component } from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import newFood from '../newFood';

configure({ adapter: new Adapter() });

class TestObj extends Component {
  constructor() {
    super();

    this.state = {
      display: {
        food: [],
        obstacle: [
          { x: 0, y: 0 },
          { x: 1, y: 1 },
          { x: 2, y: 2 },
          { x: 3, y: 3 },
          { x: 4, y: 4 },
          { x: 5, y: 5 },
          { x: 6, y: 6 },
          { x: 7, y: 7 },
          { x: 8, y: 8 },
          { x: 9, y: 9 },
        ],
        snake: [
          { x: 0, y: 10 },
          { x: 1, y: 11 },
          { x: 2, y: 12 },
          { x: 3, y: 13 },
          { x: 4, y: 14 },
          { x: 5, y: 15 },
          { x: 6, y: 16 },
          { x: 7, y: 17 },
          { x: 8, y: 18 },
          { x: 9, y: 19 },
        ],
      }
    };

    this.switchPixels = jest.fn();
    this.newFood = newFood.bind(this);
  }

  render() {
    return;
  }
}

describe('setting food state:', () => {
  const wrapper = shallow(<TestObj />);

  beforeAll(() => {
    wrapper.instance().newFood(false);
  });

  test('food coordinates !== obstacles coordinates', () => {
    wrapper.state().display.obstacle.forEach((item) => {
      expect(
        wrapper.state().display.food[0].x !== item.x
        || wrapper.state().display.food[0].y !== item.y
      ).toBeTruthy();
    });
  });

  test('food coordinates !== snake coordinates', () => {
    wrapper.state().display.snake.forEach((item) => {
      expect(
        wrapper.state().display.food[0].x !== item.x
        || wrapper.state().display.food[0].y !== item.y
      ).toBeTruthy();
    });
  });

  test('food.status === \'blink\'', () => {
    expect(wrapper.state().display.food[0].status).toEqual('blink');
  });

  test('switchPixels haven\'t been called if argument is false', () => {
    expect(wrapper.instance().switchPixels).not.toBeCalled();
  });

  test('switchPixels have been called if no arguments', () => {
    wrapper.instance().newFood();
    expect(wrapper.instance().switchPixels).toBeCalled();
  });
});