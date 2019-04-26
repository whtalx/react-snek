import removeEventListeners from '../removeEventListeners';

const removeEventListener = jest.fn((name) => {
  return { name: name };
});

document.removeEventListener = removeEventListener;

const remove = removeEventListeners.bind({});
remove();
const result = removeEventListener.mock.results.map((item) => {
  return item.value['name'];
});

test('keydown', () => {
  expect(result).toEqual(expect.arrayContaining(['keydown']));
});

test('keyup', () => {
  expect(result).toEqual(expect.arrayContaining(['keyup']));
});

test('mousedown', () => {
  expect(result).toEqual(expect.arrayContaining(['mousedown']));
});

test('mouseup', () => {
  expect(result).toEqual(expect.arrayContaining(['mouseup']));
});

test('touchstart', () => {
  expect(result).toEqual(expect.arrayContaining(['touchstart']));
});

test('touchend', () => {
  expect(result).toEqual(expect.arrayContaining(['touchend']));
});
