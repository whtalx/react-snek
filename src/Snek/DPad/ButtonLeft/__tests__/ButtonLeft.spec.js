import React from 'react';
import { shallow, configure } from 'enzyme';
import ButtonLeft from '../index';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

test('sets className depending on props.button', () => {
  let wrapper = shallow(<ButtonLeft />);
  expect(wrapper.prop('className')).toEqual('d-pad__button-left button');
  wrapper.setProps({ button: 'left' });
  expect(wrapper.prop('className')).toEqual('d-pad__button-left button button_pressed');
});