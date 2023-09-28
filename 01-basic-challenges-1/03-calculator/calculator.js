function calculator(num1, num2, operator) {
  // check correct types of arguments
  if (typeof num1 !== 'number' || typeof num2 !== 'number') {
    return 'numbers must be entered as numbers';
  }
  if (typeof operator !== 'string') {
    return 'operator must be a string';
  }
  // check valid operator

  // perform calculation
  if (operator === '+') {
    return num1 + num2;
  } else if (operator === '-') {
    return num1 - num2;
  } else if (operator === '*') {
    return num1 * num2;
  } else if (operator === '/') {
    return num1 / num2;
  } else {
    return 'operator must be +, -, *, or /';
  }
}

module.exports = calculator;
