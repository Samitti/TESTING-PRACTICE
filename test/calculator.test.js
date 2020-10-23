const calculator = require('../src/calculator');

test('Adds two numbers', () => {
  expect(calculator(2,3,'+')).toBe(5);
});

test('Multiplies two numbers', () => {
  expect(calculator(2,3,'*')).toBe(6);
});

test('Divides two numbers', () => {
  expect(calculator(4,2,'/')).toBe(2);
});

test('Subtracts two numbers', () => {
  expect(calculator(2,3,'-')).toBe(-1);
});

test('Returns Error if wrong parameters', () => {
  expect(calculator(2,3,'!')).toBe('Error:');
});


