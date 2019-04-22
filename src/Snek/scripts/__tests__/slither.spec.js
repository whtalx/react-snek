import slither from '../slither';

window.setTimeout = (f, t) => { t < 800 && f(); };

jest.mock('../../../data/slither', ()=>({
  "1": "frame1",
  "2": "frame2"
}), { virtual: true });

class TestObj {
  constructor() {
    this.state = {
      condition: {
        isPlaying: false,
      },
    };
    this.switchPixels = jest.fn();
    this.slither = slither.bind(this);
  }
}

const testObj = new TestObj();
testObj.slither();

test('draw frame 1', () => {
  expect(testObj.switchPixels).toHaveBeenCalledWith('frame1');
});

test('draw frame 2', () => {
  expect(testObj.switchPixels).toHaveBeenCalledWith('frame2');
});
