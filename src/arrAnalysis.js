const checkChar = (arr) => {
  const reg = /[0-9]/;
  for (let i = 0; i < arr.length; i += 1) {
    if (!(reg.test(arr[i]))) {
      return false;
    }
  }
  return true;
};

const avrg = (arr) => {
  let result = 0;
  for (let i = 0; i < arr.length; i += 1) {
    result += arr[i];
  }
  return result / arr.length;
};

const arrAnalysis = (arr) => {
  if (!checkChar(arr)) {
    return 'Error:';
  }
  const average = avrg(arr);
  const min = Math.min(...arr);
  const max = Math.max(...arr);
  const { length } = arr;

  return {
    average,
    min,
    max,
    length,
  };
};

module.exports = arrAnalysis;