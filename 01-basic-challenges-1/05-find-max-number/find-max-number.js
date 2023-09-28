// solution 1
// function findMaxNumber(arr) {
//   // use sort method to sort array lowest to highest
//   // return last item in array
//   let sortedArr = arr.sort((a, b) => a - b);
//   return sortedArr[sortedArr.length - 1];
// }

// solution 2
function findMaxNumber(arr) {
  let highestNum = 0;
  for (let item of arr) {
    if (item > highestNum) {
      highestNum = item;
    }
  }
  return highestNum;
}

module.exports = findMaxNumber;
