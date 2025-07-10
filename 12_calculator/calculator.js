const add = function(a,b) {
	return a + b;
};

const subtract = function(a,b) {
	return a - b;
};

function sum(...numbers) {
  return numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
}

const multiply = function(...numbers) {
  return numbers.reduce((accumulator, currentValue) => accumulator * currentValue, 1);
};

const power = (base, exponent) => Math.pow(base, exponent);

const factorial = function(n) {
  if (n === 0) {
    return 1;
  }
  return n * factorial(n - 1);
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
