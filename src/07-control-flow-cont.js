/**
 * Takes in a language (e.g "english", "spanish", "german") and returns "Hello World" in that language. Must work for at least "english", "spanish", and "german". It should default to English if no argument is passed in.
 *
 * TRANSLATIONS: English -> "Hello World"
 *               Spanish -> "Hola Mundo"
 *               German  -> "Hallo Welt"
 *
 * NOTE: You must use a `switch` statement in solving this.
 *
 * @param {string} language - a specific language
 * @returns {string} an introductory phrase
 */
function aroundTheWorldGreetingWithSwitch(language) {
  
  switch (language) {
  case "english":
  return "Hello World";
  case "spanish" :
  return "Hola Mundo";
  case "german" :
  return "Hallo Welt";
  default: 
  return "Hello World"
}
}
/**
 * Takes in a number and returns the letter grade corresponding to that number. Letter grades consist of "A", "B", "C", "D", or "F".
 *
 * SCORING: 90 and above is an A
 *          80 and above is a B
 *          70 and above is a C
 *          60 and above is a D
 *          Anything lower than 60 is an F
 * @param {number} grade - a score
 * @returns {string} a letter grade
 */
function calculateLetterGrade(grade) {
if (grade >= 90) {
  return "A";}
else if (grade >= 80) {
  return "B";}
else if (grade >= 70) {
  return "C";}
else if (grade >= 60) {
  return "D";}
 else { return "F"}
}


/**
 * Returns the count of animals, properly pluralizing the animal if there is more than one.
 * The animal is guaranteed to be one you can pluralize by adding `s`. (NO geese, fish, deer, oxen, etc.)
 * @param {string} animal
 * @param {number} numberOfAnimals
 * @returns {string}
 *
 * EXAMPLE:
 *  animalCounts("dog", 2);
 *  //> "2 dogs"
 *
 *  animalCounts("pig", 1);
 *  //> "1 pig"
 */
function animalCounts(animal,numberOfAnimals) {
if (numberOfAnimals === 1) {
  return `${numberOfAnimals} ${animal}`
}
else if (numberOfAnimals > 2) {
  return `${numberOfAnimals} ${animal}s`
}
}

/**
 * Takes in a number and returns whether that number is "Even" or "Odd".
 * @param {number} a - a value
 * @returns {string} a word, either "Even" or "Odd"
 */
function evenOrOdd(a) {
if(a%2 === 0){
  return "Even"
} else {
  return "Odd"
}
  
}

module.exports = {
  aroundTheWorldGreetingWithSwitch,
  calculateLetterGrade,
  animalCounts,
  evenOrOdd,
};
