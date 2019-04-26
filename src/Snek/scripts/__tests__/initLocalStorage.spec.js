import React, { Component } from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import initLocalStorage from '../initLocalStorage';

configure({ adapter: new Adapter() });

class LocalStorageMock {
  constructor() {
    this.store = {};
  }

  clear() {
    this.store = {};
  }

  getItem(key) {
    return this.store[key] || null;
  }

  setItem(key, value) {
    this.store[key] = value.toString();
  }

  removeItem(key) {
    delete this.store[key];
  }
};

global.localStorage = new LocalStorageMock;

class TestObj extends Component {
  constructor() {
    super();

    this.state = {
      data: {
        hiScore: 58800,
      },
    };

    this.initLocalStorage = initLocalStorage.bind(this);
  }

  componentDidMount() {
    this.initLocalStorage();
  }

  render() {
    return;
  }
}

const wrapper = shallow(<TestObj />);

test('setItem if localStorage.hiscore < state.data.hiScore', () => {
  expect(parseInt(global.localStorage.getItem('hiscore')))
    .toEqual(wrapper.state().data.hiScore);
});

test('getItem & setState if localStorage.hiscore > state.data.hiScore', () => {
  wrapper.setState({ data: { hiScore: 100 } });
  wrapper.instance().initLocalStorage();
  expect(wrapper.state().data.hiScore)
    .toEqual(parseInt(global.localStorage.getItem('hiscore')));
});
