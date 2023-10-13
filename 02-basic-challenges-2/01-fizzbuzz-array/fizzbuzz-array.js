function fizzBuzzArray(num) {
  // for loop with num as stopping point.
  // create empty array
  // creat count variable
  // each iteration, increate count by one and push to to array.
  // map through array and do fizz buzz logic

  let count = 0;
  let numArray = [];

  for (let i = 0; i <= num - 1; i++) {
    count++;
    numArray.push(count);
  }

  const fizzBuzzArray = numArray.map((item) =>
    item % 3 === 0 && item % 5 === 0
      ? 'FizzBuzz'
      : item % 3 === 0
      ? 'Fizz'
      : item % 5 === 0
      ? 'Buzz'
      : item
  );
  return fizzBuzzArray;
}
module.exports = fizzBuzzArray;
