import victory from '../victory';

let counter = 0;
window.setTimeout = (f) => {
  counter += 1;
  counter < 50 ? f && f() : counter = 0;
};

jest.mock('../../../data/victory', ()=>({
  text: [{x: 10, y: 18}]
}), { virtual: true });

class TestObj {
  constructor() {
    this.state = {
      condition: {
        isCelebrating: true,
      },
    };
    this.playSound = jest.fn();
    this.switchPixels = jest.fn();
    this.victory = victory.bind(this);
  }
}

const testObj = new TestObj();
testObj.victory();

test('call switchPixels', () => {
  expect(testObj.switchPixels).toHaveBeenCalled();
});

test('call playSound with \'victory\'', () => {
  expect(testObj.playSound).toHaveBeenCalledWith('victory');
});

test('return on isCelebrating state', () => {
  const testObj2 = new TestObj();
  testObj2.state.condition.isCelebrating = false;
  testObj2.victory();
  expect(testObj2.switchPixels).not.toHaveBeenCalled();
});
