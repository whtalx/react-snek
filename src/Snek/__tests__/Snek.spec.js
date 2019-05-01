import React from 'react';
import { shallow, configure } from 'enzyme';
import Snek from '../index';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

jest.mock('../scripts/playSound', () => {
  return function() {
    return;
  };
});

jest.mock('../scripts/clrScr', () => {
  return function() {
    return;
  };
});

jest.mock('../scripts/slither', () => {
  return function() {
    return;
  };
});


const wrapper = shallow(<Snek />);

describe('Rendering:', () => {
  test('Snek component', () => {
    expect(wrapper.prop('className')).toEqual('snek');
  });
  
  test('Display component', () => {
    expect(wrapper.childAt(0).name()).toEqual('Display');
  });
  
  test('Controls component', () => {
    expect(wrapper.childAt(1).name()).toEqual('Controls');
  });
  
  test('DPad component', () => {
    expect(wrapper.childAt(2).name()).toEqual('DPad');
  });
});

describe('States:', () => {
  test('display', () => {
    expect(wrapper.state('display')).toEqual({
      area: [],
      food: [],
      obstacle: [],
      snake: [],
    });
  });
  
  test('condition', () => {
    expect(wrapper.state('condition')).toEqual({
      button: null,
      direction: 'right',
      nextDirection: null,
      isAlive: false,
      isMuted: false,
      isPaused: false,
      isPlaying: false,
      isWaiting: false,
      isCelebrating: false,
    });
  });
  
  test('data', () => {
    expect(wrapper.state('data')).toEqual({
      score: 0,
      hiScore: 0,
      lastScore: 0,
      level: 0,
      speed: 0,
      lives: 0,
      speedCoefficient: 25,
      scoreCoefficient: 25,
      subtrahend: 0,
    });
  });
});

describe('Passing props:', () => {
  describe('to display', () => {
    test('score', () => {
      expect(wrapper.find('Display').prop('score')).toEqual(wrapper.state('data')['score']);
    });
    
    test('hiScore', () => {
      expect(wrapper.find('Display').prop('hiScore')).toEqual(wrapper.state('data')['hiScore']);
    });
    
    test('level', () => {
      expect(wrapper.find('Display').prop('level')).toEqual(wrapper.state('data')['level']);
    });
    
    test('speed', () => {
      expect(wrapper.find('Display').prop('speed')).toEqual(wrapper.state('data')['speed']);
    });
    
    test('lives', () => {
      expect(wrapper.find('Display').prop('lives')).toEqual(wrapper.state('data')['lives']);
    });
    
    test('paused', () => {
      expect(wrapper.find('Display').prop('paused')).toEqual(wrapper.state('condition')['isPaused']);
    });
    
    test('sound', () => {
      expect(wrapper.find('Display').prop('sound')).toEqual(!wrapper.state('condition')['isMuted']);
    });

    test('children', () => {
      const array = [{ u: 'a' }, { a: 'u' }];
      wrapper.setState({ display: { area: array }});
      expect(wrapper.find('Display').prop('children')).toEqual(array);
    });
  });

  describe('to controls', () => {
    beforeEach(() => {
      const button = 'ыыы';
      wrapper.setState({ condition: { button: button }});
    });
    
    test('button', () => {
      expect(wrapper.find('Controls').prop('button')).toEqual(wrapper.state('condition')['button']);
    });
  });

  describe('to d-pad', () => {
    test('button', () => {
      expect(wrapper.find('DPad').prop('button')).toEqual(wrapper.state('condition')['button']);
    });
  });
});
