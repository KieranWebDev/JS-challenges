function isPalindrome(str) {
  let formattedStr = str.toLowerCase().split(' ').join('');

  formattedStr.includes(',')
    ? (formattedStr = formattedStr.split(',').join(''))
    : (formattedStr = formattedStr);

  const reversedStr = formattedStr.split('').reverse().join('');
  console.log(formattedStr, reversedStr);
  return formattedStr === reversedStr;
}

module.exports = isPalindrome;
