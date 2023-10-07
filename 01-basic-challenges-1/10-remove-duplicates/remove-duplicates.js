// function removeDuplicates(arr) {
//   let set = new Set(arr);
//   return [...set];
// }
function removeDuplicates(arr) {
  // create empty arr to hold uniqe vals
  // loop though original arr
  // use includes method. if uniquevals arr !== arr[i] then push value into new array
  // return new arr

  let uniqueItems = [];
  for (let item of arr) {
    if (!uniqueItems.includes(item)) {
      uniqueItems.push(item);
    }
  }
  return uniqueItems;
}

module.exports = removeDuplicates;
