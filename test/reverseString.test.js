const reverseString = require('../src/reverseString');

test('reverse a string with letters', () => {
  expect(reverseString('hello')).toBe('olleh');
});

test('reverse a string with other characters', () => {
  expect(reverseString('!hello world1')).toBe('1dlrow olleh!');
});

test('should not reverse other than strings', () => {
  expect(reverseString(1234)).toBe('Error: not a string');
});