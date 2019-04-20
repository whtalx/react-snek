import React from 'react';
import { shallow, configure } from 'enzyme';
import SpeedValue from '../index';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

const speed = 123456;
const wrapper = shallow(<SpeedValue speed={speed} />);

test('renders node with proper className', () => {
  expect(wrapper.prop('className')).toEqual('display__speed-value');
});

test('take number passed in props.speed and trim to 2 digits', () => {
  expect(wrapper.text()).toEqual((`00${speed}`).slice(-2));
});