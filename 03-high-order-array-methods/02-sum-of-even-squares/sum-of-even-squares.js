function sumOfEvenSquares(arr) {
  const evenNums = arr.filter((item) => item % 2 === 0);
  const squareEvenNums = evenNums.map((item) => item ** 2);
  const sumOfEvenNums = squareEvenNums.reduce((accum, val) => accum + val, 0);
  return sumOfEvenNums;
}

module.exports = sumOfEvenSquares;
