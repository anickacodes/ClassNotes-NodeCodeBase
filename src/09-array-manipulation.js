/**
 * Removes the last element of the inputted `array`. Then, returns the removed element.
 * @param {*[]} array - an array of elements
 * @returns {*[]} the last element of the array
 */
function removeElementFromEndOfArray(array) {
 return array.pop()
}

/**
 * Adds an `element` to the front of the inputted `array`. Then, returns the array.
 * @param {*[]} array - an array
 * @param {*} element - a value to be added
 * @returns {*[]} the original array
 */
function addElementToFrontOfArray(array,element) {
  array.unshift(element)
  return array
}

/**
 * Removes the first element of the inputted `array`. Then, returns the removed element.
 * @param {*[]} array - an array of elements
 * @returns {*[]}
 */
function removeElementFromFrontOfArray(array) {
return array.shift()
}

/**
 * Returns the element in the middle of the array.
 *
 * NOTE: Inputted arrays will always be of odd length.
 *
 * @param {*[]} array
 * @returns {*}
 *
 * EXAMPLE:
 *  getMiddleElement([ 10, null, "30" ]);
 *  //> null
 */
function getMiddleElement(array) {
let middle = Math.floor(array.length /2)
  return array[middle]
  
}

module.exports = {
  removeElementFromEndOfArray,
  addElementToFrontOfArray,
  removeElementFromFrontOfArray,
  getMiddleElement,
};
