const calculator = (a, b, operator) => {
  if (operator === '+') {
    return a + b;
  } if (operator === '-') {
    return a - b;
  } if (operator === '*') {
    return a * b;
  } if (operator === '/') {
    return a / b;
  }
  return 'Error:';
};

module.exports = calculator;
