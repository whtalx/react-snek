import React from 'react';
import { shallow, configure } from 'enzyme';
import LevelValue from '../index';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

const level = 123456;
const wrapper = shallow(<LevelValue level={level} />);

test('renders node with proper className', () => {
  expect(wrapper.prop('className')).toEqual('display__level-value');
});

test('take number passed in props.level and trim to 2 digits', () => {
  expect(wrapper.text()).toEqual((`00${level}`).slice(-2));
});