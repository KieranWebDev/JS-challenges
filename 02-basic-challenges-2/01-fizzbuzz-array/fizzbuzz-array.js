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

function fizzBuzzArray(num) {
  const arr = [];

  for (let i = 1; i <= num; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      arr.push('FizzBuzz');
    } else if (i % 3 === 0) {
      arr.push('Fizz');
    } else if (i % 5 === 0) {
      arr.push('Buzz');
    } else {
      arr.push(i);
    }
  }

  return arr;
}
module.exports = fizzBuzzArray;
