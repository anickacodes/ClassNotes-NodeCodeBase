/**
 * Takes in two numbers and returns the larger number. The numbers are guaranteed to be unique (not equal to each other).
 * @param {number} a - an integer
 * @param {number} b - an integer
 * @returns {number} the larger number
 */
function findLarger(numA,numB) {
if (numA < numB){
  return numB
} else {
  return numA
}
}

/**
 * Takes in two numbers and returns the larger number. Returns the string "tie" if both numbers are the same.
 * @param {number} a - an integer
 * @param {number} b - an integer
 * @returns {number|string} returns the larger number of the word "tie"
 *
 * EXAMPLE:
 *  findLargerOrTie(0, 1);
 *  //> 1
 *
 *  findLargerOrTie(0, 0);
 *  //> "tie"
 */
function findLargerOrTie(a,b) {
if (a > b) {
  return a;
} else if (a < b){
  return b;
} else {
      return `tie`;
    }
  }


/**
 * Takes in a number and returns whether that number is "Positive", "Negative", or "Zero".
 * HINT: Capitalization and spelling count!
 * @param {number} a - an integer
 * @returns {string} the words "Positive", "Negative", or "Zero"
 */
function positiveNegativeOrZero(a) {
  if (Math.sign(a) >= 1) { // I LEARNED SOMETHING NEWWWWW
 return `Positive`
} else if (
    Math.sign(a) < 0) {
    return `Negative`
    } else {
    return `Zero`
    }
}

/**
 * Takes in a `language` (e.g "english", "spanish", or "german") and returns "Hello World" in that language. Must work for at least "english", "spanish", and "german". It should default to English if no argument is passed in.
 *
 * TRANSLATIONS: english -> "Hello World"
 *               spanish -> "Hola Mundo"
 *               german  -> "Hallo Welt"
 * HINT: The function expects lowercase names of languages.
 * @param {string} language - a specific language
 * @returns {string} an introductory phrase
 */
function aroundTheWorldGreeting(language) {
//   let english1 = "Hello World"
//   let spanish1 = "Hola Mundo"
//   let german1 = "Hallo Welt"
// language = ['english', 'spanish', 'german']
  
  if (language === "english") {
    return "Hello World"
  } 
  else if (language === "spanish") {
    return "Hola Mundo"
  } else if (language === "german") {
    return "Hallo Welt"
  } else {
    return "Hello World"
  }
}

module.exports = {
  findLarger,
  findLargerOrTie,
  positiveNegativeOrZero,
  aroundTheWorldGreeting,
};
