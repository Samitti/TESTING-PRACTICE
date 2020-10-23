const caesar = require('../src/caesar');

test('should encrypt', () => {
  expect(caesar('mupa', 1)).toBe('nvqb');
});

test('should wrap from z to a', () => {
  expect(caesar('zmupa', 1)).toBe('anvqb');
});

test('should keep punctuations the same', () => {
  expect(caesar('hello!', 1)).toBe('ifmmp!');
});

test('should not change the case', () => {
  expect(caesar('HELLO!', 1)).not.toBe('ifmmp!');
});
