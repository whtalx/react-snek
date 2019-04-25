import React, { Component } from 'react';
import { mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import handleKeyDown from '../handleKeyDown';
import handleKeyUp from '../handleKeyUp';

configure({ adapter: new Adapter() });

const getElementById = jest.fn((button) => {
  return {
    button: button,
    dispatchEvent: jest.fn(),
  }
});

document.getElementById = getElementById;

class TestObj extends Component {
  constructor() {
    super();
    this.state = {
      condition: {
        button: '',
      },
    };
    this.handleKeyDown = handleKeyDown.bind(this);
    this.handleKeyUp = handleKeyUp.bind(this);
  }
  render() {
    return(
      <div
        onKeyDown={this.handleKeyDown}
        onKeyUp={this.handleKeyUp}
      />
    );
  }
}

const wrapper = mount(<TestObj />);

describe('handleKeyDown', () => {
  test('enter', () => {
    wrapper.simulate('keydown', { which: 13 });
    expect(wrapper.state().condition.button).toEqual('start');
  });
  
  test('space', () => {
    wrapper.simulate('keydown', { which: 32 });
    expect(wrapper.state().condition.button).toEqual('pause');
  });
  
  test('m', () => {
    wrapper.simulate('keydown', { which: 77 });
    expect(wrapper.state().condition.button).toEqual('sound');
  });
  
  test('w', () => {
    wrapper.simulate('keydown', { which: 87 });
    expect(wrapper.state().condition.button).toEqual('up');
  });
  
  test('a', () => {
    wrapper.simulate('keydown', { which: 65 });
    expect(wrapper.state().condition.button).toEqual('left');
  });
  
  test('s', () => {
    wrapper.simulate('keydown', { which: 83 });
    expect(wrapper.state().condition.button).toEqual('down');
  });
  
  test('d', () => {
    wrapper.simulate('keydown', { which: 68 });
    expect(wrapper.state().condition.button).toEqual('right');
  });
  
  test('↑', () => {
    wrapper.simulate('keydown', { which: 38 });
    expect(wrapper.state().condition.button).toEqual('up');
  });
  
  test('←', () => {
    wrapper.simulate('keydown', { which: 37 });
    expect(wrapper.state().condition.button).toEqual('left');
  });
  
  test('↓', () => {
    wrapper.simulate('keydown', { which: 40 });
    expect(wrapper.state().condition.button).toEqual('down');
  });
  
  test('→', () => {
    wrapper.simulate('keydown', { which: 39 });
    expect(wrapper.state().condition.button).toEqual('right');
  });
});

describe('handleKeyUp', () => {
  test('enter', () => {
    wrapper.simulate('keyup', { which: 13 });
    expect(getElementById).toHaveBeenLastCalledWith('start');
  });
  
  test('space', () => {
    wrapper.simulate('keyup', { which: 32 });
    expect(getElementById).toHaveBeenLastCalledWith('pause');
  });
  
  test('m', () => {
    wrapper.simulate('keyup', { which: 77 });
    expect(getElementById).toHaveBeenLastCalledWith('sound');
  });
  
  test('w', () => {
    wrapper.simulate('keyup', { which: 87 });
    expect(getElementById).toHaveBeenLastCalledWith('up');
  });
  
  test('a', () => {
    wrapper.simulate('keyup', { which: 65 });
    expect(getElementById).toHaveBeenLastCalledWith('left');
  });
  
  test('s', () => {
    wrapper.simulate('keyup', { which: 83 });
    expect(getElementById).toHaveBeenLastCalledWith('down');
  });
  
  test('d', () => {
    wrapper.simulate('keyup', { which: 68 });
    expect(getElementById).toHaveBeenLastCalledWith('right');
  });
  
  test('↑', () => {
    wrapper.simulate('keyup', { which: 38 });
    expect(getElementById).toHaveBeenLastCalledWith('up');
  });
  
  test('←', () => {
    wrapper.simulate('keyup', { which: 37 });
    expect(getElementById).toHaveBeenLastCalledWith('left');
  });
  
  test('↓', () => {
    wrapper.simulate('keyup', { which: 40 });
    expect(getElementById).toHaveBeenLastCalledWith('down');
  });
  
  test('→', () => {
    wrapper.simulate('keyup', { which: 39 });
    expect(getElementById).toHaveBeenLastCalledWith('right');
  });
});
