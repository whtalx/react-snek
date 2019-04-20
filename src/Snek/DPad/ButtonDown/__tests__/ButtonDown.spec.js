import React from 'react';
import { shallow, configure } from 'enzyme';
import ButtonDown from '../index';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

test('sets className depending on props.button', () => {
  let wrapper = shallow(<ButtonDown />);
  expect(wrapper.prop('className')).toEqual('d-pad__button-down button');
  wrapper.setProps({ button: 'down' });
  expect(wrapper.prop('className')).toEqual('d-pad__button-down button button_pressed');
});