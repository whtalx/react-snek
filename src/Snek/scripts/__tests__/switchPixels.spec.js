import React, { Component } from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import switchPixels from '../switchPixels';
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
    this.switchPixels = switchPixels.bind(this);
  }
  
  render() {
    return;
  }
}

const wrapper = shallow(<Comp />);
const properObjects = [
  { x: 1, y: 5, status: 'on' },
  { x: 2, y: 5, status: 'on' },
  { x: 3, y: 5, status: 'blink' }
];

const wrongObjects = [
  { x: 11, y: 5, status: 'on' },
  { x: 2, y: 55, status: 'on' },
  { x: 3, y: 5, status: 'fffuuuu' }
];

const properPixels = [
  <Pixel key={'pixel51'} status="on" />,
  <Pixel key={'pixel52'} status="on" />,
  <Pixel key={'pixel53'} status="blink" />,
];

const wrongPixels = [
  <Pixel key={'pixel61'} status="on" />,
  <Pixel key={'pixel552'} status="on" />,
  <Pixel key={'pixel53'} status="fffuuuu" />,
];

test('accept pixels with correct properties', () => {
  wrapper.instance().switchPixels(properObjects);
  expect(wrapper.state('area').field).toEqual(
    expect.arrayContaining(properPixels),
    );
});

test('reject pixels with incorrect properties', () => {
  wrapper.instance().switchPixels(wrongObjects);
  wrongPixels.forEach((item) => {
    expect(wrapper.state('area').field).toEqual(
      expect.not.arrayContaining([item]),
    );
  });
});
