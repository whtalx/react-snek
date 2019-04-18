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

describe('Rendering:', () => {
  /* Display */
  it('display', () => {
    /* test values */
    const score = 1;
    const hiScore = 2;
    const level = 3;
    const speed = 4;
    const lives = 5;
    const paused = true;
    const sound = true;
    const children = <p />;

    const display = shallow(
      <Display
        score={ score }
        hiScore={ hiScore }
        level={ level }
        speed={ speed }
        lives={ lives }
        paused={ paused }
        sound={ sound }
        children={ children }
      />
    );

    /* Display static divs classes check*/
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
    
    /* check for passing {props.children} into dosplay__frame div */
    expect(display.find('.display__frame').containsMatchingElement(children),
    'Display component doesn\'t pass {props.children} into <div className = \'display__frame\'>')
      .to.be.true;

    expect(display.find('.display__glass').childAt(1))
      .to.include.prop('className', 'display__side');

    /* check display__score for render and value passing */
    expect(display.find('.display__side').childAt(0))
      .to.include.prop('className', 'display__score');

    expect(display.find('ScoreValue'))
      .to.include.prop('score', score);

    expect(display.find('ScoreValue').dive())
      .to.include.prop('className', 'display__score-value');

    expect(display.find('ScoreValue').dive().text())
      .to.equal(('000000' + score).slice(-6));

      /* check display__hi-score for render and value passing */
    expect(display.find('.display__side').childAt(1))
      .to.include.prop('className', 'display__hi-score');

    expect(display.find('HiScoreValue'))
      .to.include.prop('hiScore', hiScore);

    expect(display.find('HiScoreValue').dive())
      .to.include.prop('className', 'display__hi-score-value');

    expect(display.find('HiScoreValue').dive().text())
      .to.equal(('000000' + hiScore).slice(-6));

    /* check display__level for render and value passing */
    expect(display.find('.display__side').childAt(2))
      .to.include.prop('className', 'display__level');

    expect(display.find('LevelValue'))
      .to.include.prop('level', level);

    expect(display.find('LevelValue').dive())
      .to.include.prop('className', 'display__level-value');

    expect(display.find('LevelValue').dive().text())
      .to.equal(('00' + level).slice(-2));

    /* check display__speed for render and value passing */
    expect(display.find('.display__side').childAt(3))
      .to.include.prop('className', 'display__speed');

    expect(display.find('SpeedValue'))
      .to.include.prop('speed', speed);

    expect(display.find('SpeedValue').dive())
      .to.include.prop('className', 'display__speed-value');

    expect(display.find('SpeedValue').dive().text())
      .to.equal(('00' + speed).slice(-2));

    /* check display__lives for render and 
     * value-based amount of 'switched on' pixels rendering */
    expect(display.find('.display__side').childAt(4))
      .to.include.prop('className', 'display__lives');

    expect(display.find('LivesValue'))
      .to.include.prop('lives', lives);

    expect(display.find('LivesValue').dive())
      .to.include.prop('className', 'display__lives-value');

    expect(display.find('LivesValue').dive().children())
      .to.have.lengthOf(9);

    if (lives > 0 && lives <= 9) {
      expect(display.find('LivesValue').dive().childAt(lives - 1))
        .to.include.prop('status', 'on');
    }

    /* check display__pause for {props.paused}-based render */
    if (paused) {
      expect(display.find('Pause').dive())
        .to.include.prop('className', 'display__pause display__pause_on');
    } else if (!paused) {
      expect(display.find('Pause').dive())
        .to.include.prop('className', 'display__pause');
    }

    /* check display__sound for {props.sound}-based render */
    if (sound) {
      expect(display.find('Sound').dive())
        .to.include.prop('className', 'display__sound display__sound_on');
    } else if (!sound) {
      expect(display.find('Sound').dive())
        .to.include.prop('className', 'display__sound');
    }
  });
  /******************/

  /* Pixels */
  it('pixels', () => {
    /* check Pixel component for status depended render */
    let pixel = shallow(<Pixel status="off" />);
    expect(pixel).to.include.prop('className', 'display__pixel display__pixel_off');

    pixel = shallow(<Pixel status="on" />);
    expect(pixel).to.include.prop('className', 'display__pixel display__pixel_on');
  });
  /******************/

  /* Control buttons */
  it('control buttons', () => {
    let controls = shallow(<Controls button="start" />);

    /* Control buttons static divs classes check */
    expect(controls).to.include.prop('className', 'controls');

    expect(controls.childAt(0)).to.include.prop('className', 'controls__start');
    expect(controls.childAt(1)).to.include.prop('className', 'controls__pause');
    expect(controls.childAt(2)).to.include.prop('className', 'controls__sound');
    
    /* buttons press on props passing check */
    expect(controls.find('StartButton').dive())
      .to.include.prop('className', 'controls__start-button button button_pressed');
    controls = shallow(<Controls button="pause" />);

    expect(controls.find('PauseButton').dive())
      .to.include.prop('className', 'controls__pause-button button button_pressed');
    controls = shallow(<Controls button="sound" />);

    expect(controls.find('SoundButton').dive())
      .to.include.prop('className', 'controls__sound-button button button_pressed');
  });
  /******************/

  /* Direction buttons */
  it('direction buttons', () => {
    let dpad = shallow(<DPad button="left" />);

    /* Direction buttons static divs classes check */
    expect(dpad).to.include.prop('className', 'd-pad');

    expect(dpad.childAt(0)).to.include.prop('className', 'd-pad__left');
    expect(dpad.childAt(1)).to.include.prop('className', 'd-pad__center');
    expect(dpad.childAt(2)).to.include.prop('className', 'd-pad__right');

    /* crossed arrows svg render check */
    expect(dpad.find('.d-pad__center').childAt(1))
      .to.include.prop('className', 'd-pad__arrows');

    /* buttons press on props passing check */
    expect(dpad.find('ButtonLeft').dive())
      .to.include.prop('className', 'd-pad__button-left button button_pressed');

    dpad = shallow(<DPad button="up" />);
    expect(dpad.find('ButtonUp').dive())
      .to.include.prop('className', 'd-pad__button-up button button_pressed');

    dpad = shallow(<DPad button="right" />);
    expect(dpad.find('ButtonRight').dive())
      .to.include.prop('className', 'd-pad__button-right button button_pressed');

    dpad = shallow(<DPad button="down" />);
    expect(dpad.find('ButtonDown').dive())
      .to.include.prop('className', 'd-pad__button-down button button_pressed');
  });

  chai.use(chaiEnzyme());
});
