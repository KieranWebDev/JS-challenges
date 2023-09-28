function countOccurrences(str, char) {
  // create let to store count
  // loop through string
  //   if str[i] === char then count +1
  // return count

  let count = 0;

  for (let item of str) {
    if (item === char) {
      count += 1;
    }
  }
  return count;
}

module.exports = countOccurrences;
