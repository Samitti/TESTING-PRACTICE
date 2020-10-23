const reverseString = (string) => {
  if (typeof string === 'string') {
    return string.split('').reverse().join('');
  }
  return 'Error: not a string';
};

module.exports = reverseString;
