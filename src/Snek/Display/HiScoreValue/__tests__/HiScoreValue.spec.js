import React from 'react';
import { shallow, configure } from 'enzyme';
import HiScoreValue from '../index';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

const hiScore = 123456;
const wrapper = shallow(<HiScoreValue hiScore={hiScore} />);

test('renders node with proper className', () => {
  expect(wrapper.prop('className')).toEqual('display__hi-score-value');
});

test('take number passed in props.score and trim to 6 digits', () => {
  expect(wrapper.text()).toEqual((`000000${hiScore}`).slice(-6));
});