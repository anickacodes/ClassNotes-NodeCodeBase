/**
 * Takes in an array and returns a new array, adding "!" to each string.
 *
 * NOTE: You must use a `for` loop.
 *
 * @param {string[]} array - an array of strings
 * @returns {string[]} an array of modified strings
 *
 * EXAMPLE:
 *  shoutForLoop([ "A", "Very", "Happy", "Array" ]);
 *  //> [ "A!", "Very!", "Happy!", "Array!" ];
 */
function shoutForLoop(array) {
let modS = []
for (let i =0; i<array.length;i++){
  modS.push(array[i] + "!")
  }
  return modS 
}

/**
 * Takes in an array and returns a new array, adding "!" to each string.
 *
 * NOTE: You must use a `while` loop.
 *
 * @param {string[]} array - an array of strings
 * @returns {string[]} an array of modified strings
 *
 * EXAMPLE:
 *  shoutWhileLoop([ "A", "Very", "Happy", "Array" ]);
 *  //> [ "A!", "Very!", "Happy!", "Array!" ];
 */
function shoutWhileLoop(arr) {
  let result = [];
  let i = 0; 
  while (i <arr.length) {
    result.push(arr[i] + "!");
    i++;
  }
  return result;
}

/**
 * Takes in an array and returns a new array, adding "!" to each string.
 *
 * NOTE: You must use a `for...of` loop.
 *
 * @param {string[]} array - an array of strings
 * @returns {string[]} an array of modified strings
 *
 * EXAMPLE:
 *  shoutForOfLoop([ "A", "Very", "Happy", "Array" ]);
 *  //> [ "A!", "Very!", "Happy!", "Array!" ];
 */
function shoutForOfLoop(array) {
  let oxyClean = []
  for (let i of array) {
    oxyClean.push(i + "!")
                  }
      return oxyClean
}

// let i = 0; 
//   while (i <arr.length) {
//     result.push(arr[i] + "!");
//     i++;
//   }
//   return result;





/**
 * Takes in an array and returns a string, joining each string with a space and adding a "!" at the very end.
 *
 * NOTE: You may NOT use the `.join()` method.
 *
 * @param {string[]} array - an array of strings
 * @returns {string} a single string
 *
 * EXAMPLE:
 *  shoutJoinLoop([ "A", "Very", "Happy", "Array" ]);
 *  //> "A Very Happy Array!"
 */
function shoutJoinLoop(array) {
// let indeed = "";
//   for (let i = 0; i< array.length; i++) {
//    if (i !== array.length -1) {
//      indeed += " " + "!";
//   }
//    return indeed ;
//   }
// }
   let oxyClean = "";
  for(let i = 0; i < array.length; i++) {
     oxyClean += array[i]; 
      if(i !== array.length -1) {
       oxyClean += " ";
}
}
  return oxyClean + "!";
}

module.exports = {
  shoutForLoop,
  shoutWhileLoop,
  shoutForOfLoop,
  shoutJoinLoop,
};
