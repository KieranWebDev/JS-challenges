// function arrayIntersection(arr1, arr2) {
//   // loop throught firts array
//   // if second array does not include() arr one item then push to new array
//   // return new array
//   let uniqueArray = [];

//   for (let item of arr1) {
//     if (arr2.includes(item)) {
//       uniqueArray.push(item);
//     }
//   }
//   return uniqueArray;
// }

function arrayIntersection(arr1, arr2) {
  // map through arr1
  // if arr2 includes item in arr push item to new array

  const newArr = [];

  arr1.map((item) => (arr2.includes(item) ? newArr.push(item) : item));

  return newArr;
}

module.exports = arrayIntersection;
