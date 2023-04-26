/**
 * Returns whether or not the `target` value exists in the array.
 *
 * NOTE: Must be written with a `while` loop.
 *
 * NOTE: Must NOT contain the `.includes()` method.
 *
 * @param {*[]} array - an array of values
 * @param {number|string} target - a value to find in the array
 * @returns {boolean} whether or not the value is in the array
 *
 * EXAMPLE:
 *  containsWhileLoop([ 5, 2, 4 ], 4);
 *  //> true
 *
 *  containsWhileLoop([ "left", "up", "right" ], "down");
 *  //> false
 */
function containsWhileLoop(array,target) {
 // console.log(array, target, )
  let i = 0;

while (i <= array.length) { 
  if (array[i] === target) {
   // console.log(i)
return true ;
   }  
  else {
   
  } 
  i++
}
    return false}
// let text = ""; // i needed the math to math 

// while (cars[i]) {
//   text += cars[i];
//   i++;
// }
  
/**
 * Returns whether or not the `target` value exists in the array.
 *
 * NOTE: Must be written with a `for` loop.
 *
 * NOTE: Must NOT contain the `.includes()` method.
 *
 * @param {*[]} array - an array of values
 * @param {number|string} target - a value to find in the array
 * @returns {boolean} whether or not the value is in the array
 *
 * EXAMPLE:
 *  containsForLoop([ 5, 2, 4 ], 4);
 *  //> true
 *
 *  containsForLoop([ "left", "up", "right" ], "down");
 *  //> false
 */
function containsForLoop(array, target) {

  for (let i =0; i<array.length; i++ ){
      if (array[i] === target) {
        return true ;
          
      }else {
           }
}return false
}
/**
 * Returns how many times the `target` occurs in the array.
 * @param {*[]} array - an array of values
 * @param {number|string} target - a value to find in the array
 * @returns {number} a count of the number of times the target is in the array
 *
 * EXAMPLE:
 *  targetCount([ 10, 20, 10, 20, 30 ], 10);
 *  //> 2
 */
function targetCount(array,target) {
 let count = 0;
for (let i = 0; i < array.length ; i++){
  if (array[i] === target ){
  count += 1;
  }

}
  return count;
}


/**
 * Returns an array of only the items that match the `target`. If no items match, return an empty array.
 * @param {*[]} array - an array of values
 * @param {number|string} target - a value to find in the array
 * @returns {*[]} an array of only the matching items
 *
 * EXAMPLE:
 *  targetCount([ 10, 20, 10, 20, 30 ], 10);
 *  //> [ 10, 10 ]
 *
 * EXAMPLE:
 *  targetCount([ 10, 20, 10, 20, 30 ], 99);
 *  //> []
 */
function arrayOfMatchingItems(array,target) {
let newArr = [];
   for (let i=0; i<array.length ; i++)
  if (array[i] === target) {
    newArr.push(array[i])
} return newArr }


module.exports = {
  containsWhileLoop,
  containsForLoop,
  targetCount,
  arrayOfMatchingItems,
};
