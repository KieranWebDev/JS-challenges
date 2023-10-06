// function isPalindrome(str) {
//   let formattedStr = str.toLowerCase().split(' ').join('');

//   formattedStr.includes(',')
//     ? (formattedStr = formattedStr.split(',').join(''))
//     : (formattedStr = formattedStr);

//   const reversedStr = formattedStr.split('').reverse().join('');
//   console.log(formattedStr, reversedStr);
//   return formattedStr === reversedStr;
// }

function isPalindrome(str) {
  // reg expression to remove commas and spaces
  let formattedStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');

  let reversedStr = formattedStr.split('').reverse().join('');

  return formattedStr === reversedStr;
}

module.exports = isPalindrome;
