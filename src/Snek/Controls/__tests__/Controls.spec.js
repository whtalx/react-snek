import React from 'react';
import { shallow, configure } from 'enzyme';
import Controls from '../index';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

const button = 'eheueueheue';
const wrapper = shallow(<Controls button={button} />);

test('renders controls node with proper className', () => {
  expect(wrapper.prop('className')).toEqual('controls');
});

test('renders controls__start node with proper className', () => {
  expect(wrapper.childAt(0).prop('className')).toEqual('controls__start');
});

test('renders controls__start-button node', () => {
  expect(wrapper.find('.controls__start').childAt(0).name())
    .toEqual('StartButton');
});

test('passes controls__start-button node proper value', () => {
  expect(wrapper.find('StartButton').prop('button'))
    .toEqual(button);
});

test('renders controls__pause node with proper className', () => {
  expect(wrapper.childAt(1).prop('className')).toEqual('controls__pause');
});

test('renders controls__pause-button node', () => {
  expect(wrapper.find('.controls__pause').childAt(0).name())
    .toEqual('PauseButton');
});

test('passes controls__pause-button node proper value', () => {
  expect(wrapper.find('PauseButton').prop('button'))
    .toEqual(button);
});

test('renders controls__sound node with proper className', () => {
  expect(wrapper.childAt(2).prop('className')).toEqual('controls__sound');
});

test('renders controls__sound-button node', () => {
  expect(wrapper.find('.controls__sound').childAt(0).name())
    .toEqual('SoundButton');
});

test('passes controls__sound-button node proper value', () => {
  expect(wrapper.find('SoundButton').prop('button'))
    .toEqual(button);
});