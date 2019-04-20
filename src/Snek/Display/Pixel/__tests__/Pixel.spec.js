import React from 'react';
import { shallow, configure } from 'enzyme';
import Pixel from '../index';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

it('take className passed in props.status', () => {
  const status = 'ыыы';
  const wrapper = shallow(<Pixel status={status} />);
  expect(wrapper.prop('className')).toEqual(`display__pixel display__pixel_${status}`);
});