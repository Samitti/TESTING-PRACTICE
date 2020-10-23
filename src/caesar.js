const caesar = (str, key) => {
  const alphabets = 'abcdefghijklmnopqrstuvwxyz';

  let result = '';
  for (let i = 0; i < str.length; i += 1) {
    if (checkChar(str.charAt(i))) {
      result += alphabets.charAt((alphabets.indexOf(str.charAt(i)) + key) % 26);
    } else {
      result += str.charAt(i);
    };
  }
  return result;
}

const checkChar = (char) => {
  let reg = /[a-zA-Z]/;
  if (reg.test(char)) {
    return true;
  } else {
    return false;
  }
}

module.exports = caesar;
