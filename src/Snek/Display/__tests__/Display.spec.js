import React from 'react';
import { shallow, configure } from 'enzyme';
import Display from '../index';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

const testData = {
  score: 111,
  hiScore: 222,
  level: 33,
  speed: 44,
  lives: 5,
  paused: false,
  sound: true,
  children: [<a key="a" />, <b key="b" />],
}
const wrapper = shallow(<Display
  score={testData.score}
  hiScore={testData.hiScore}
  level={testData.level}
  speed={testData.speed}
  lives={testData.lives}
  paused={testData.paused}
  sound={testData.sound}
  children={testData.children}
/>);

test('renders display node with proper className', () => {
  expect(wrapper.prop('className')).toEqual('display');
});

test('renders display__edging node with proper className', () => {
  expect(wrapper.childAt(0).prop('className')).toEqual('display__edging');
});

test('renders display__legend node with proper className', () => {
  expect(wrapper.find('.display__edging').childAt(0).prop('className'))
    .toEqual('display__legend');
});

test('renders display__borders node with proper className', () => {
  expect(wrapper.find('.display__edging').childAt(1).prop('className'))
    .toEqual('display__borders');
});

test('renders display__glass node with proper className', () => {
  expect(wrapper.find('.display__borders').childAt(0).prop('className'))
    .toEqual('display__glass');
});

test('renders display__frame node with proper className', () => {
  expect(wrapper.find('.display__glass').childAt(0).prop('className'))
    .toEqual('display__frame');
});

test('display__frame has props passed children nodes', () => {
  testData.children.forEach((item, index) => {
    expect(wrapper.find('.display__frame').childAt(index)).toContainEqual(item);
  });
});

test('renders display__side node with proper className', () => {
  expect(wrapper.find('.display__glass').childAt(1).prop('className'))
    .toEqual('display__side');
});

test('renders display__score node with proper className', () => {
  expect(wrapper.find('.display__side').childAt(0).prop('className'))
    .toEqual('display__score');
});

test('renders display__score-value node with proper value', () => {
  expect(wrapper.find('.display__score').childAt(1).name())
    .toEqual('ScoreValue');
});

test('passes display__score-value node proper value', () => {
  expect(wrapper.find('ScoreValue').prop('score'))
    .toEqual(testData.score);
});

test('renders display__hi-score node with proper className', () => {
  expect(wrapper.find('.display__side').childAt(1).prop('className'))
    .toEqual('display__hi-score');
});

test('renders display__hi-score-value node', () => {
  expect(wrapper.find('.display__hi-score').childAt(1).name())
    .toEqual('HiScoreValue');
});

test('passes display__hi-score-value node proper value', () => {
  expect(wrapper.find('HiScoreValue').prop('hiScore'))
    .toEqual(testData.hiScore);
});

test('renders display__level node with proper className', () => {
  expect(wrapper.find('.display__side').childAt(2).prop('className'))
    .toEqual('display__level');
});

test('renders display__level-value node', () => {
  expect(wrapper.find('.display__level').childAt(1).name())
    .toEqual('LevelValue');
});

test('passes display__level-value node proper value', () => {
  expect(wrapper.find('LevelValue').prop('level'))
    .toEqual(testData.level);
});

test('renders display__speed node with proper className', () => {
  expect(wrapper.find('.display__side').childAt(3).prop('className'))
    .toEqual('display__speed');
});

test('renders display__speed-value node', () => {
  expect(wrapper.find('.display__speed').childAt(0).name())
    .toEqual('SpeedValue');
});

test('passes display__speed-value node proper value', () => {
  expect(wrapper.find('SpeedValue').prop('speed'))
    .toEqual(testData.speed);
});

test('renders display__lives node with proper className', () => {
  expect(wrapper.find('.display__side').childAt(4).prop('className'))
    .toEqual('display__lives');
});

test('renders display__lives-value node', () => {
  expect(wrapper.find('.display__lives').childAt(0).name())
    .toEqual('LivesValue');
});

test('passes display__lives-value node proper value', () => {
  expect(wrapper.find('LivesValue').prop('lives'))
    .toEqual(testData.lives);
});

test('renders display__pause node', () => {
  expect(wrapper.find('.display__side').childAt(5).name())
    .toEqual('Pause');
});

test('passes display__pause node proper value', () => {
  expect(wrapper.find('Pause').prop('paused'))
    .toEqual(testData.paused);
});

test('renders display__sound node', () => {
  expect(wrapper.find('.display__side').childAt(6).name())
    .toEqual('Sound');
});

test('passes display__sound node proper value', () => {
  expect(wrapper.find('Sound').prop('sound'))
    .toEqual(testData.sound);
});