function titleCase(str) {
  function titledWord(word) {
    return word[0].toUpperCase() + word.slice(1);
  }
  let capitalisedStr = str
    .toLowerCase()
    .split(' ')
    .map((word) => titledWord(word))
    .join(' ');
  return capitalisedStr;
}
// function titleCase(str) {

//   let capitalisedStr = str
//     .toLowerCase()
//     .split(' ')
//     .map((word) => word[0].toUpperCase() + word.slice(1))
//     .join(' ');
//   return capitalisedStr;
// }
// function titleCase(str) {
//   let titledArr = [];

//   for (let word of str.split(' ')) {
//     let titledWord = word[0].toUpperCase() + word.slice(1).toLowerCase();
//     titledArr.push(titledWord);
//   }

//   return titledArr.join(' ');
// }

module.exports = titleCase;
