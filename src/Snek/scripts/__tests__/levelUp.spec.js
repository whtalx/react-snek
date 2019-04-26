import React, { Component } from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import levelUp from '../levelUp';

configure({ adapter: new Adapter() });

class LocalStorageMock {
  constructor() {
    this.store = {};
  }

  clear() {
    this.store = {};
  }

  getItem(key) {
    return this.store[key] || null;
  }

  setItem(key, value) {
    this.store[key] = value.toString();
  }

  removeItem(key) {
    delete this.store[key];
  }
};

global.localStorage = new LocalStorageMock;

class TestObj extends Component {
  constructor() {
    super();

    this.state = {
      area: {
        snake: [null, null, null],
      },
      condition: {
        isAlive: true,
        isCelebrating: false,
      },
      data: {
        score: 0,
        hiScore: 0,
        lastScore: 0,
        level: 0,
        lives: 0,
        speed: 0,
        speedCoefficient: 25,
        scoreCoefficient: 25,
        subtrahend: 0,
      }
    };

    this.clrScr = jest.fn();
    this.newFood = jest.fn();
    this.playSound = jest.fn();
    this.resume = jest.fn();
    this.start = jest.fn();
    this.victory = jest.fn();
    this.levelUp = levelUp.bind(this);
  }

  render() {
    return;
  }
}


describe('snake growing:', () => {
  const wrapper = shallow(<TestObj />);

  beforeAll(() => {
    wrapper.instance().levelUp();
  });

  test('speed increasing', () => {
    expect(wrapper.state().data.speed).toEqual(1);
  });

  test('subtrahend increasing', () => {
    expect(wrapper.state().data.subtrahend)
      .toEqual(
        (wrapper.state().data.speed + 1)
        * wrapper.state().data.speedCoefficient
      );
  });

  test('score increasing', () => {
    expect(wrapper.state().data.score)
      .toEqual(
        wrapper.state().data.scoreCoefficient
        * (wrapper.state().data.level + 1)
        * (wrapper.state().data.speed + 1)
        );
  });

  test('hiScore increasing', () => {
    expect(wrapper.state().data.hiScore)
      .toEqual(wrapper.state().data.score);
  });

  test('hiScore saving in localStorage', () => {
    expect(parseInt(global.localStorage.getItem('hiscore')))
      .toEqual(wrapper.state().data.score);
  });

  test('playSound called with \'eat\'', () => {
    expect(wrapper.instance().playSound).toBeCalledWith('eat');
  });

  test('newFood called', () => {
    expect(wrapper.instance().newFood).toBeCalled();
  });

  test('resume called', () => {
    expect(wrapper.instance().resume).toBeCalled();
  });
});

describe('level changing:', () => {
  const wrapper = shallow(<TestObj />);

  beforeAll(() => {
    wrapper.instance().setState((state) => {
      state.data.speed = 6;
    });
    wrapper.instance().levelUp();
    global.localStorage.setItem('hiscore', 50);
  });

  test('level increasing', () => {
    expect(wrapper.state().data.level).toEqual(1);
  });

  test('lives amount increasing', () => {
    expect(wrapper.state().data.lives).toEqual(1);
  });

  test('speed resetting', () => {
    expect(wrapper.state().data.speed).toEqual(0);
  });

  test('lastScore state setting', () => {
    expect(wrapper.state().data.lastScore)
      .toEqual(wrapper.state().data.score);
  });

  test('playSound called with \'levelUp\'', () => {
    expect(wrapper.instance().playSound)
      .toHaveBeenLastCalledWith('levelUp');
  });

  test('start called with true', () => {
    expect(wrapper.instance().start).toBeCalledWith(true);
  });
});

describe('victory:', () => {
  const wrapper = shallow(<TestObj />);

  beforeAll(() => {
    wrapper.instance().setState((state) => {
      state.data.level = 6;
      state.data.speed = 6;
    });
    wrapper.instance().levelUp();
    global.localStorage.setItem('hiscore', 50);
  });

  test('speed resetting', () => {
    expect(wrapper.state().data.speed).toEqual(6);
  });

  test('clrScr called', () => {
    expect(wrapper.instance().clrScr).toBeCalled();
  });

  test('victory called', () => {
    expect(wrapper.instance().victory).toBeCalled();
  });
});
