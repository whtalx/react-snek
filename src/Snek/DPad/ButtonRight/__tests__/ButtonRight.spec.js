import React from 'react';
import { shallow, configure } from 'enzyme';
import ButtonRight from '../index';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

test('sets className depending on props.button', () => {
  let wrapper = shallow(<ButtonRight />);
  expect(wrapper.prop('className')).toEqual('d-pad__button-right button');
  wrapper.setProps({ button: 'right' });
  expect(wrapper.prop('className')).toEqual('d-pad__button-right button button_pressed');
});