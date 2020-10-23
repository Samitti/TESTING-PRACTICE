const arrAnalysis = require('../src/arrAnalysis');

test('returns an object', () => {
  expect(arrAnalysis([2, 2, 2])).toEqual({
    average: 2, min: 2, max: 2, length: 3,
  });
});

test('returns Error: if wrong parameter', () => {
  expect(arrAnalysis(['a', 2, 2])).toBe('Error:');
});