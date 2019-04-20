import React from 'react';
import { shallow, configure } from 'enzyme';
import SoundButton from '../index';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

test('sets className depending on props.button', () => {
  let wrapper = shallow(<SoundButton />);
  expect(wrapper.prop('className')).toEqual('controls__sound-button button');
  wrapper.setProps({ button: 'sound' });
  expect(wrapper.prop('className')).toEqual('controls__sound-button button button_pressed');
});