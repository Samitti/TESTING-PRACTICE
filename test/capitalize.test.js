const capitalize = require('../src/capitalize');

test('Capitalizes the string', () => {
  expect(capitalize('sam')).toBe('Sam');
});

test('Capitalizes only the first letter', () => {
  expect(capitalize('hello World')).toBe('Hello world');
});

test('Should not capitalize other than letters', () => {
  expect(capitalize('!what')).toBe('!what');
});