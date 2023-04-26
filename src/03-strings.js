/**
 * Return a non-empty string
 * @return {number} a non-empty string
 */
function returnNonEmptyString() {
  return `12`
}

/**
 * Return the length of a string
 * @param {string} str - A string
 * @return {number} integer representing the length of the string
 */
function getLengthOfString(string) {
const j = string.length
 
  return j
}

/**
 * Concatenate multiple strings together into one string
 * @param {string} word1 - A word
 * @param {string} word2 - A word
 * @param {string} word3 - A word
 * @return {number} a string
 */
function concatenateStrings(word1,word2,word3) {
 let string = (word1 + word2 + word3)
  return  string
}

/**
 * Return the letter at the given position in a string
 * @param {string} word - A word
 * @param {string} position - An index for the string
 * @return {string} the character at the given position
 */
function accessCharacterInString(word,position) {
 let b = word.split("")
  return b[position]
}

module.exports = {
  returnNonEmptyString,
  getLengthOfString,
  concatenateStrings,
  accessCharacterInString,
};
