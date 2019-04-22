import React, { Component } from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import clrScr from '../clrScr';
import Pixel from '../../Display/Pixel'

configure({ adapter: new Adapter() });

class Comp extends Component {
  constructor() {
    super();
    this.state = {
      area: {
        field: [],
      },
    };
    this.clrScr = clrScr.bind(this);
  }
  componentDidMount() {
    this.clrScr();
  }
  render() {
    return;
  }
}

const wrapper = shallow(<Comp />);

test('fill area[\'field\'] state with 200 elements', () => {
  expect(wrapper.state('area').field).toHaveLength(200);
});

test('elemets are Pixel components with status="off"', () => {
  wrapper.state('area').field.forEach((item, index) => {
    expect(item).toMatchObject(<Pixel key={`pixel${index}`} status="off" />);
  });
});
