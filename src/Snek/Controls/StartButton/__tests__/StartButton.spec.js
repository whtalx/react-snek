import React from 'react';
import { shallow, configure } from 'enzyme';
import StartButton from '../index';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

test('sets className depending on props.button', () => {
  let wrapper = shallow(<StartButton />);
  expect(wrapper.prop('className')).toEqual('controls__start-button button');
  wrapper.setProps({ button: 'start' });
  expect(wrapper.prop('className')).toEqual('controls__start-button button button_pressed');
});