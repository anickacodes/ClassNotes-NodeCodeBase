/**
 * Return an integer
 * @return {number} an integer
 */
function returnPositiveInteger() {
return 21
}
/**
 * Return a negative numbers
 * @return {number} a negative numbers
 */
function returnNegativeInteger() {
return -21
}
/**
 * Return a decimal number
 * @return {number} a decimal number
 */
function returnDecimalNumber() {
return 0.22
}
/**
 * Perform a calculation and return the value `NaN`.
 * @return {NaN} the `NaN` value.
 */
function calculateNaN() {
 return `dude`/2
}

module.exports = {
  returnPositiveInteger,
  returnNegativeInteger,
  returnDecimalNumber,
  calculateNaN,
};
