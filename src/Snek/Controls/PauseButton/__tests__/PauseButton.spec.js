import React from 'react';
import { shallow, configure } from 'enzyme';
import PauseButton from '../index';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

test('sets className depending on props.button', () => {
  let wrapper = shallow(<PauseButton />);
  expect(wrapper.prop('className')).toEqual('controls__pause-button button');
  wrapper.setProps({ button: 'pause' });
  expect(wrapper.prop('className')).toEqual('controls__pause-button button button_pressed');
});