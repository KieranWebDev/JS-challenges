function findMissingNumber(arr) {
  // set count var to 1
  // sort array in acsending order
  // loop through arr
  // every iteration increase count by 1
  // arr[i] doesn not match count then return arr[i]

  let count = 0;
  let sortedArr = arr.sort((a, b) => a - b);
  for (let item of sortedArr) {
    count++;
    if (count !== item) {
      return count;
    }
  }
}

module.exports = findMissingNumber;
