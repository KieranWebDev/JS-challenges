// function countVowels(str) {
//   // create regex to check for vowels, uppercase and lowercase
//   // created vowels arr and use match method
//   // return vowelsArr.length
//   let vowel = /[aeiouAEIOU]/g;
//   const vowelsArr = str.match(vowel);
//   return vowelsArr.length;
// }

function countVowels(str) {
  // convert str to lowercase
  // create count var
  // for loop on str
  // if str matches a,e,i,o,u then add 1 to count
  let count = 0;
  let formattedStr = str.toLowerCase();
  for (let char of formattedStr) {
    if (
      char === 'a' ||
      char === 'e' ||
      char === 'i' ||
      char === 'o' ||
      char === 'u'
    ) {
      count++;
    }
  }
  return count;
}

module.exports = countVowels;
