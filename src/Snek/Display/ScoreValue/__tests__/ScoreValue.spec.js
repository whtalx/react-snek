import React from 'react';
import { shallow, configure } from 'enzyme';
import ScoreValue from '../index';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

const score = 123456;
const wrapper = shallow(<ScoreValue score={score} />);

test('renders node with proper className', () => {
  expect(wrapper.prop('className')).toEqual('display__score-value');
});

test('take number passed in props.score and trim to 6 digits', () => {
  expect(wrapper.text()).toEqual((`000000${score}`).slice(-6));
});