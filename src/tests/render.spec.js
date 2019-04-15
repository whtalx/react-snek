import React from 'react'
import chai, { expect } from 'chai'
import chaiEnzyme from 'chai-enzyme'
import { shallow, configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Pixel from '../Snek/Display/Pixel'
import Display from '../Snek/Display'
import Controls from '../Snek/Controls'
import DPad from '../Snek/DPad'

configure({ adapter: new Adapter() });

describe('Rendering:', function() {
  it('display', function() {
    const display = shallow(<Display sound = {true} paused = {true}><a /></Display>);
    expect(display).to.include.prop('className', 'display');
    
    expect(display.childAt(0)).to.include.prop('className', 'display__edging');

    expect(display.find('.display__edging').childAt(0))
      .to.include.prop('className', 'display__legend');

    expect(display.find('.display__edging').childAt(1))
      .to.include.prop('className', 'display__borders');

    expect(display.find('.display__borders').childAt(0))
      .to.include.prop('className', 'display__glass');

    expect(display.find('.display__glass').childAt(0))
      .to.include.prop('className', 'display__frame');

    expect(display.find('.display__frame').containsMatchingElement(<a />)).to.be.true;

    expect(display.find('.display__glass').childAt(1))
      .to.include.prop('className', 'display__side');

    expect(display.find('.display__side').childAt(0))
      .to.include.prop('className', 'display__score');
    expect(display.find('ScoreValue').dive())
      .to.include.prop('className', 'display__score-value');

    expect(display.find('.display__side').childAt(1))
      .to.include.prop('className', 'display__hi-score');
    expect(display.find('HiScoreValue').dive())
      .to.include.prop('className', 'display__hi-score-value');

    expect(display.find('.display__side').childAt(2))
      .to.include.prop('className', 'display__level');
    expect(display.find('LevelValue').dive())
      .to.include.prop('className', 'display__level-value');

    expect(display.find('.display__side').childAt(3))
      .to.include.prop('className', 'display__speed');
    expect(display.find('SpeedValue').dive())
      .to.include.prop('className', 'display__speed-value');

    expect(display.find('.display__side').childAt(4))
      .to.include.prop('className', 'display__lives');
    expect(display.find('LivesValue').dive())
      .to.include.prop('className', 'display__lives-value');
    expect(display.find('LivesValue').dive().children()).to.have.lengthOf(9);

    expect(display.find('Pause').dive())
      .to.include.prop('className', 'display__pause display__pause_on');

    expect(display.find('Sound').dive())
      .to.include.prop('className', 'display__sound display__sound_on');
  });

  it('pixels', function() {
    let pixel = shallow(<Pixel status = 'off' />);
    expect(pixel).to.include.prop('className', 'display__pixel display__pixel_off');
    pixel = shallow(<Pixel status = 'on' />);
    expect(pixel).to.include.prop('className', 'display__pixel display__pixel_on');
  });

  it('control buttons', function() {
    let controls = shallow(<Controls button = 'start' />);
    expect(controls).to.include.prop('className', 'controls');

    expect(controls.childAt(0)).to.include.prop('className', 'controls__start');
    expect(controls.childAt(1)).to.include.prop('className', 'controls__pause');
    expect(controls.childAt(2)).to.include.prop('className', 'controls__sound');
    
    expect(controls.find('StartButton').dive())
      .to.include.prop('className', 'controls__start-button button button_pressed');
    controls = shallow(<Controls button = 'pause' />);

    expect(controls.find('PauseButton').dive())
      .to.include.prop('className', 'controls__pause-button button button_pressed');
    controls = shallow(<Controls button = 'sound' />);

    expect(controls.find('SoundButton').dive())
      .to.include.prop('className', 'controls__sound-button button button_pressed');
  });

  it('direction buttons', function() {
    let dpad = shallow(<DPad button = 'left' />);
    expect(dpad).to.include.prop('className', 'd-pad');

    expect(dpad.childAt(0)).to.include.prop('className', 'd-pad__left');
    expect(dpad.childAt(1)).to.include.prop('className', 'd-pad__center');
    expect(dpad.childAt(2)).to.include.prop('className', 'd-pad__right');

    expect(dpad.find('.d-pad__center').childAt(1))
      .to.include.prop('className', 'd-pad__arrows');

    expect(dpad.find('ButtonLeft').dive())
      .to.include.prop('className', 'd-pad__button-left button button_pressed');

    dpad = shallow(<DPad button = 'up' />);
    expect(dpad.find('ButtonUp').dive())
      .to.include.prop('className', 'd-pad__button-up button button_pressed');

    dpad = shallow(<DPad button = 'right' />);
    expect(dpad.find('ButtonRight').dive())
      .to.include.prop('className', 'd-pad__button-right button button_pressed');

    dpad = shallow(<DPad button = 'down' />);
    expect(dpad.find('ButtonDown').dive())
      .to.include.prop('className', 'd-pad__button-down button button_pressed');
  });

  chai.use(chaiEnzyme());
});