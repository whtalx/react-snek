import React from 'react';
import { shallow, configure } from 'enzyme';
import ButtonUp from '../index';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

test('sets className depending on props.button', () => {
  let wrapper = shallow(<ButtonUp />);
  expect(wrapper.prop('className')).toEqual('d-pad__button-up button');
  wrapper.setProps({ button: 'up' });
  expect(wrapper.prop('className')).toEqual('d-pad__button-up button button_pressed');
});