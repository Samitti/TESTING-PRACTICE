const calculator = (a,b,operator) => {
  if (operator == '+') {
    return a + b;
  } else if (operator == '-') {
    return a - b;
  } else if (operator == '*') {
    return a * b;
  } else if (operator == '/') {
    return a / b;
  } else {
    return 'Error:';
  }
};

module.exports = calculator;


