/**
 * Takes in range (inclusive) and returns the sum of all numbers in that range.
 * @param {number} min - a number above 0
 * @param {number} max - a number greater than `min`
 * @returns {number} sum of all numbers between and including `min` and `max`
 *
 * EXAMPLE:
 *  rangeSum(3, 7);
 *  //> 25
 *  (3 + 4 + 5 + 6 + 7 = 25)
 */
function rangeSum(min,max) {
// return max * (max+1) / 2 - min *(min +1) / 2 }
let sum = 0;
for (let i = min; i <= max; i++) {
  sum += i;
}  
  return sum} 

/**
 * Takes in range (inclusive) and returns an array in decreasing order of only the odd numbers in that range.
 * @param {number} min - a number greater than 0
 * @param {number} max - a number greater than `min`
 * @returns {number[]} - an array of numbers
 *
 * EXAMPLE:
 *  rangeOdd(10, 15);
 *  //> [ 15, 13, 11 ]
 */
function rangeOdd(min,max) {
  let range = [];
for (let i = max; i >= min; i--) {
  if (i%2 !== 0)
    range.push(i);}
  return range
}

  // for (let i =1; i < 21 ; i++ ){
  // if (i%3 === 0 && i%5 === 0)

  //   x.filter(n => n%2)

/**
 * Takes in range (inclusive) and returns an array in increasing order of only every other element. Start by including the first number.
 * @param {number} min - a number greater than 0
 * @param {number} max - a number greater than `min`
 * @returns {number[]} - an array of numbers
 *
 * EXAMPLE:
 *  rangeEveryOther(11, 18);
 *  //> [ 11, 13, 15, 17 ]
 */
function rangeEveryOther(min,max) {
 let arr = [];
for (let i = min; i <= max; i+= 2) {
    arr.push(i);
}
  return arr
}

/**
 * Returns a new array where each element is the cumulative sum in the array, up until that point.
 * @param {number[]} array - an array of numbers
 * @returns {number[]} - a new array
 *
 * EXAMPLE:
 *  cumulativeSum([ 5, 2, 9 ]);
 *  //> [ 5, 5 + 2, 5 + 2 + 9 ]
 *  //> [ 5, 7, 16 ]
 */
function cumulativeSum(array) {
let newArray = []
  let accuCount = 0
  for (let i = 0; i < array.length; i++) {
    accuCount += array[i]
    newArray.push(accuCount);
    }

    return newArray
  }
    
  
//   console.log(newArray)
// return newArray
// }
// }}

  
module.exports = {
  rangeSum,
  rangeOdd,
  rangeEveryOther,
  cumulativeSum,
};
