import React from 'react';
import { shallow, configure } from 'enzyme';
import Sound from '../index';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

test('take className passed in props.sound', () => {
  const wrapper = shallow(<Sound />);
  expect(wrapper.prop('className')).toEqual('display__sound');
  wrapper.setProps({ sound: true });
  expect(wrapper.prop('className')).toEqual('display__sound display__sound_on');
});