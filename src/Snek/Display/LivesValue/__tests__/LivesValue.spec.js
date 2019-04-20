import React from 'react';
import { shallow, configure } from 'enzyme';
import LivesValue from '../index';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

const lives = 5;
const wrapper = shallow(<LivesValue lives={lives} />);

test('renders node with proper className', () => {
  expect(wrapper.prop('className')).toEqual('display__lives-value');
});

test('has 9 children nodes', () => {
  expect(wrapper.children()).toHaveLength(9);
});

test('take number passed in props.lives and make children with proper classNames', () => {
  for (let i = 0; i < lives; i++) {
    expect(wrapper.childAt(i).prop('status')).toEqual('on');
  }
});