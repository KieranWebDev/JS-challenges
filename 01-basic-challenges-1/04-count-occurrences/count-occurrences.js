function countOccurrences(str, char) {
  //   approach 1
  // create let to store count
  // loop through string
  // if str[i] === char then count +1
  // return count

  //   const lowerCaseStr = str.toLowerCase();
  //   let count = 0;

  //   for (let item of lowerCaseStr) {
  //     if (item === char) {
  //       count += 1;
  //     }
  //   }
  //   return count;

  //   appeoach 2
  // split str
  // use map method to loop through array and compare each item to char
  //   add 1 to count if equal
  // return count
  let count = 0;
  let lowercaseStrArr = str
    .toLowerCase()
    .split('')
    .map((item) => (item === char ? count++ : item));
  //   console.log(lowercaseStrArr);
  return count;
}

module.exports = countOccurrences;
