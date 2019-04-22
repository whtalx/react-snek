import spiral from '../spiral';

window.requestAnimationFrame = (f) => { f && f(); };

class TestObj {
  constructor() {
    this.state = {
      condition: {
        isPlaying: false,
      },
    };
    this.slither = jest.fn();
    this.switchPixels = jest.fn();
    this.spiral = spiral.bind(this);
  }
}

const testObj = new TestObj();
testObj.spiral();

test('switchPixels called 200 times', () => {
  expect(testObj.switchPixels).toHaveBeenCalledTimes(200);
});

test('slither callback', () => {
  expect(testObj.slither).toHaveBeenCalled();
});
