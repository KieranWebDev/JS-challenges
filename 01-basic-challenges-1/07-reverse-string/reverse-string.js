// function reverseString(str) {
//   return str.split('').reverse().join('');
// }
function reverseString(str) {
  let reversedStr = [];

  for (let i = str.length; i >= 0; i--) {
    reversedStr.push(str[i]);
  }
  return reversedStr.join('');
}

module.exports = reverseString;
