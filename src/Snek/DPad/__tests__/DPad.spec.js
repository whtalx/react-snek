import React from 'react';
import { shallow, configure } from 'enzyme';
import DPad from '../index';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

const button = 'eheueueheue';
const wrapper = shallow(<DPad button={button} />);

test('renders d-pad node with proper className', () => {
  expect(wrapper.prop('className')).toEqual('d-pad');
});

test('renders d-pad__left node with proper className', () => {
  expect(wrapper.childAt(0).prop('className')).toEqual('d-pad__left');
});

test('renders d-pad__button-left node', () => {
  expect(wrapper.find('.d-pad__left').childAt(0).name())
    .toEqual('ButtonLeft'); 
});

test('passes d-pad__button-left node proper value', () => {
  expect(wrapper.find('ButtonLeft').prop('button'))
    .toEqual(button); 
});

test('renders d-pad__center node with proper className', () => {
  expect(wrapper.childAt(1).prop('className')).toEqual('d-pad__center');
});

test('renders d-pad__button-up node', () => {
  expect(wrapper.find('.d-pad__center').childAt(0).name())
    .toEqual('ButtonUp'); 
});

test('passes d-pad__button-up node proper value', () => {
  expect(wrapper.find('ButtonUp').prop('button'))
    .toEqual(button); 
});

test('renders d-pad__arrows node', () => {
  expect(wrapper.find('.d-pad__center').childAt(1).prop('className'))
    .toEqual('d-pad__arrows'); 
});

test('renders d-pad__button-down node', () => {
  expect(wrapper.find('.d-pad__center').childAt(2).name())
    .toEqual('ButtonDown'); 
});

test('passes d-pad__button-down node proper value', () => {
  expect(wrapper.find('ButtonDown').prop('button'))
    .toEqual(button); 
});

test('renders d-pad__right node with proper className', () => {
  expect(wrapper.childAt(2).prop('className')).toEqual('d-pad__right');
});

test('renders d-pad__button-right node', () => {
  expect(wrapper.find('.d-pad__right').childAt(0).name())
    .toEqual('ButtonRight'); 
});

test('passes d-pad__button-right node proper value', () => {
  expect(wrapper.find('ButtonRight').prop('button'))
    .toEqual(button); 
});