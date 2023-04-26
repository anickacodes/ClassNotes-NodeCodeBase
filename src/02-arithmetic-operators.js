/**
 * Add two numbers.
 * @param {number} a - A number
 * @param {number} b - A number
 * @return {number} the sum
 */
function add(a, b) {
  let sum = a+b
  return sum
}

/**
 * Subtract two numbers.
 * @param {number} a - A number
 * @param {number} b - A number
 * @return {number} the difference
 */
function subtract(a, b) {
  let diff = a-b
  return diff
}

/**
 * Multiply two numbers.
 * @param {number} a - A number
 * @param {number} b - A number
 * @return {number} the product
 */
function multiply(a, b) {
  let product = a*b
  return product
}

/**
 * Divide two numbers.
 * @param {number} a - A number
 * @param {number} b - A number
 * @return {number} the quotient
 */
function divide(a, b) {
  let divide2 = a/b
  return divide2 
}

module.exports = {
  add,
  subtract,
  multiply,
  divide,
};
