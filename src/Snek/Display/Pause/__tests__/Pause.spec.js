import React from 'react';
import { shallow, configure } from 'enzyme';
import Pause from '../index';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

test('take className passed in props.paused', () => {
  const wrapper = shallow(<Pause />);
  expect(wrapper.prop('className')).toEqual('display__pause');
  wrapper.setProps({ paused: true });
  expect(wrapper.prop('className')).toEqual('display__pause display__pause_on');
});