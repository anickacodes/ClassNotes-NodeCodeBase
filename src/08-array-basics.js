/**
 * Creates and returns an array where the first element is `a` and the second element is `b`.
 * @param {*} a
 * @param {*} b
 * @returns {*[]} an array of two elements
 *
 * EXAMPLE:
 *  createArrayWithTwoElements(true, false);
 *  //> [ true, false ]
 */
function createArrayWithTwoElements(a , b) {
let arr =[a , b]
  return arr
}

/**
 * Returns the length of the array
 * @param {*[]} array
 * @returns {number}
 *
 * EXAMPLE:
 *  getArrayLength([ 10, 20, 30 ]);
 *  //> 3
 */
function getArrayLength(array) {
  return array.length
}
/**
 * Returns the first element of the array.
 * @param {*[]} array
 * @returns {*}
 *
 * EXAMPLE:
 *  getFirstElementOfArray([ 10, 20, 30 ]);
 *  //> 10
 */
function getFirstElementOfArray(array) {
  return array[0]
}

/**
 * Returns the last element of the array.
 * @param {*[]} array
 * @returns {*}
 *
 * EXAMPLE:
 *  getLastElementOfArray([ null, undefined ]);
 *  //> undefined
 */
function getLastElementOfArray(array) {
  return array.pop()
}

module.exports = {
  createArrayWithTwoElements,
  getArrayLength,
  getFirstElementOfArray,
  getLastElementOfArray,
};
