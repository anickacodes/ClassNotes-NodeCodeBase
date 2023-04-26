/**
 * Loop over a string and return an array of all vowels (excluding "y") used in the string.
 *
 * @param {string} text - a list of characters
 * @returns {string[]} an array of all vowels
 *
 * EXAMPLE:
 *  filterVowels("a very happy string");
 *  //> ["a", "e", "a", "i"]
 *
 * EXAMPLE:
 *  filterVowels("MNSTR");
 *  //> []
 */
function filterVowels (text) {
  let result = [];
  let vowels = ["a", "e", "i", "o", "u"];
  let textArray = text.split("");
for(let i = 0; i < text. length; i++) {
  if(vowels. includes (textArray[i])){
result.push(textArray[i])
  } 
}
 
return result ;
}
  
// Shout out to X, Alvin & 
/**
* Checks whether or not the sum of all numbers in two arra








  
/**
 * Checks whether or not the sum of all numbers in two arrays is equal.
 *
 * @param {number[]} array1 - an array of numbers
 * @param {number[]} array2 - an array of numbers
 * @returns {boolean} whether or not the sum of both array values is the same
 *
 * EXAMPLE:
 *  arraysWithSameSum([0,1,3], [1,1,1,1]);
 *  //> true
 *
 * EXAMPLE:
 *  arraysWithSameSum([0,1,3], [4,3,2,1]);
 *  //> false
 */
function arraysWithSameSum(array1,array2) {
let arraySum1 = 0;
let arraySum2 = 0;
  
for(let i of array1){
arraySum1 += i;
}
for(let i of array2){
arraySum2 += i;
}
if (arraySum1 === arraySum2){
return true
} else {
return false
}
}


/**
 * Checks whether the directions are the same in two arrays
 *
 * @param {string[]} array1 - an array of directions
 * @param {string[]} array2 - an array of directions
 * @returns {boolean} whether or not the directions are the same in each array
 *
 * EXAMPLE:
 *  arraysWithSameDirections(["left", "right", "up"], ["left", "right", "up"]);
 *  //> true
 *
 * EXAMPLE:
 *  arraysWithSameDirections(["left", "right", "up"], ["left", "right", "up", "up"]);
 *  //> false
 */
function arraysWithSameDirections(array1,array2) {
  
  if(array1.length !== array2.length){
    return false
  }
  for (let i = 0;i < array1.length; i++) {
    if(array1[i] !== array2[i]) {
      return false
    }
  }
  return true 
  }
  
//im crying inside 


/**
 * Creates a new array where the values of `array1` and `array2` are interwoven, with the values from `array1` coming first. If there are no more values to weave, only the values from the remaining array are added.
 *
 * @param {string[]} array1 - an array of truthy strings
 * @param {string[]} array2 - an array of truthy strings
 * @returns {string[]} an array with all combined values interwoven
 *
 * EXAMPLE:
 *  interweave(["a", "b", "c"], ["d", "e", "f"]);
 *  //> ["a", "d", "b", "e", "c", "f"]
 *
 * EXAMPLE:
 *  interweave(["a", "b", "c", "d"], ["e"]);
 *  //> ["a", "e", "b", "c", "d"]
 *
 * EXAMPLE:
 *  interweave(["a"], ["b", "c", "d"]);
 *  //> ["a", "b", "c", "d"]
 */
function interweave(array1,array2) {
  
const result = [];
let i = 0;
let j = 0;
while(i < array1.length || j < array2.length){
if(i < array1.length){
result.push(array1[i]);
i++
}
if(j < array2.length){
result.push(array2[j])
j++
}
}
return result;
}
//// Alvin's code .. 
// const result = [];
// let i = 0;
// let j = 0;
// while(i < array1.length || j < array2.length){
// if(i < array1.length){
// result.push(array1[i]);
// i++
// }
// if(j < array2.length){
// result.push(array2[j])
// j++
// }
// }
// return result;
// }
///// im not so lost but my brain is fried this code is basss
module.exports = {
  filterVowels,
  arraysWithSameSum,
  arraysWithSameDirections,
  interweave,
};
