function titleCase(str) {
  let capitalisedStr = str
    .split(' ')
    .map((word) => word[0].toUpperCase() + word.slice(1, word.length))
    .join(' ');
  return capitalisedStr;
}

module.exports = titleCase;
