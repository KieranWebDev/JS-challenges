function findMissingNumber(arr) {
  // set count var to 1
  // sort array in acsending order
  // loop through arr
  // every iteration increase count by 1
  // arr[i] doesn not match count then return arr[i]
  if (arr === undefined) {
    return undefined;
  }
  if (arr === null) {
    return 1;
  }

  let count = 1;
  let sortedArr = arr.sort((a, b) => a - b);
  for (let item of sortedArr) {
    if (count !== item) {
      return count;
    }
    count++;
  }
  return count;
}

module.exports = findMissingNumber;
