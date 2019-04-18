import React, { Component } from 'react'
import chai, { expect } from 'chai'
import chaiEnzyme from 'chai-enzyme'
import { shallow, configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import clrScr from '../scripts/clrScr'
import switchPixels from '../scripts/switchPixels'
import turboSpeed from '../scripts/turboSpeed'

configure({ adapter: new Adapter() });

describe('Functions:', () => {
  /* test values */
  let pixelsToSwitch = [{ x: 5, y: 5, status: 'blink' }, { x: 2, y: 17, status: 'on' }];

  /* test component */
  class App extends Component {
    constructor() {
      super();
      this.clrScr = clrScr.bind(this);
      this.switchPixels = switchPixels.bind(this);
      this.turboSpeed = turboSpeed.bind(this);
      this.state = { pixels: [] }
    }
    render() {
      return;
    }
  }

  const app = shallow(<App />);

  /* clrScr */
  it('clear screen', () => {
    /* check for creating 200 <Pixel /> components in state.pixels array */
    app.instance().clrScr();
    expect(app.state().pixels).to.to.have.lengthOf(200);
  });

  /* switchPixels */
  it('switch pixels status', () => {
    /* check every item in pixelsToSwitch array to set <Pixel /> component
     * with right status in state.pixels array */
    app.instance().switchPixels(pixelsToSwitch);
    pixelsToSwitch.map(item => {
      expect(app.state().pixels[(item.x + item.y * 10)].props.status)
        .to.equal(item.status);
    });
  });

  chai.use(chaiEnzyme());
});
