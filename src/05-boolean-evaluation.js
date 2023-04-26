/**
 * Return true if both boolean values are truthy
 * @param {boolean} val1 - A boolean
 * @param {boolean} val2 - A boolean
 * @return {boolean} true if both values are true
 */
function bothTruthy(val1,val2) {
  if (val1 && val2){
    return true
  } else {
    return false
  }
}

/**
 * Return true if at least one of the boolean values is true
 * @param {boolean} val1 - A boolean
 * @param {boolean} val2 - A boolean
 * @return {boolean} true if at least one value is true
 */
function atLeastOneTruthy(val1,val2) {
  if (val1 || val2){
    return true
  } else {
    return false
  }
}

/**
 * Return true if both of the following statements is true:
 * - `a` or `b` is truthy
 * - `c` or `d` is truthy
 * NOTE: make sure the 'or' statements are evaluated first
 * @param {*} a - Any value
 * @param {*} b - Any value
 * @param {*} c - Any value
 * @param {*} d - Any value
 * @return {boolean}  the result of the evaluation
 */
function returnAorBandCorD(a,b,c,d) {
let lir = a||b
let mnr = c||d
if (lir && mnr){
  return true }
  else {
    return false
  }
}


/**
 * Return the first truthy value
 * @param {*} value1 - Any value
 * @param {*} value2 - Any value
 * @param {*} value3 - Any value
 * @param {*} value4 - Any value
 * @param {*} value5 - Any value
 * @return {*}  the first value that is truthy
 */
function returnFirstTruthyValue(value1,value2,value3,value4,value5) {
  if (!!value1){
    return value1
  } else if (!!value2)
  {
  return value2} 
  else if (!!value3){
    return value3} 
    else if (!! value4) {
      return value4} 
        else {
           !!value5 
      return value5 
        }
      }
    


 
module.exports = {
  bothTruthy,
  atLeastOneTruthy,
  returnAorBandCorD,
  returnFirstTruthyValue,
};
