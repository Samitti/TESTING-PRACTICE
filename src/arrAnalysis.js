const arrAnalysis = (arr) => {
  if (!checkChar(arr)) {
    return 'Error:';
  } else {
    const average = avrg(arr);  
    const min = Math.min(...arr);
    const max = Math.max(...arr);
    const length =  arr.length;

    return {
      average: average,
      min: min,
      max: max,
      length: length,
    }
  }  
}

const checkChar = (arr) => {
  let reg = /[0-9]/;
  for (let i = 0; i < arr.length; i +=1 ) {
    if (!(reg.test(arr[i]))) {
      return false;
    } 
  }
  return true;
}  

const avrg = (arr) => {
  let result = 0;
  for (let i = 0; i < arr.length; i += 1) {
    result += arr[i];
  }
  return result/arr.length;
};

module.exports = arrAnalysis;