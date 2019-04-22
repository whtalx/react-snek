import explode from '../explode';

window.setTimeout = (f, t) => { f && f(); };

class Obj {
  constructor() {
    this.state = {
      area: {
        obstacle: null,
        snake: null,
      },
    };
    this.switchPixels = jest.fn();
    this.setState = jest.fn();
    this.playSound = jest.fn();
    this.spiral = jest.fn();
    this.start = jest.fn();
    this.explode = explode.bind(this);
  }
}

const obj = new Obj();

describe('with game over: ', () => {
  obj.explode([{ x: 0, y: 0 }]);

  test('spiral called', () => {
    expect(obj.spiral).toHaveBeenCalled();
  });
  
  test('playSound called with \'gameOver\' property', () => {
    expect(obj.playSound).toHaveBeenCalledWith('gameOver');
  });
});

describe('with level restart: ', () => {
  obj.explode([{ x: 0, y: 0 }], false);

  test('start called', () => {
    expect(obj.start).toHaveBeenCalledWith(true);
  });
  
  test('playSound called with \'levelRestart\' property', () => {
    expect(obj.playSound).toHaveBeenCalledWith('levelRestart');
  });
});