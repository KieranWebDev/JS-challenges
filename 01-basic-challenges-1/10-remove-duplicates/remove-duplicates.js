function removeDuplicates(arr) {
  let set = new Set(arr);
  return [...set];
}

module.exports = removeDuplicates;
