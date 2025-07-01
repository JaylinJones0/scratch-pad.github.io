// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: stringy.js
 */

/**
 * Given an input String, return its length.
 *
 * TIP: In JavaScript, how can we decipher the length of a String?
 * work?
 */
/*
I: Create function that takes a string as an input
O: Return the length of the string
C: N/a
E: N/a
*/
function length(string) {
  // YOUR CODE BELOW HERE //
  // return the length of string
return string.length;
  // YOUR CODE ABOVE HERE //
}

/**
 * Given an input String, return a new String forced to lowercase.
 */

/*
I: Create a function that takes a string as the parameter
O: Return a new string that is lowercase only
C: N/a
E: N/a
*/
function toLowerCase(string) {
  // YOUR CODE BELOW HERE //
  // return lowercase string
return string.toLowerCase()
  // YOUR CODE ABOVE HERE //
}

/**
 * Given an input String, return a new String forced to uppercase.
 */

/*
I: Create a function that takes a string as the parameter
O: Return a new string that is uppercase only
C: N/a
E: N/a
*/
function toUpperCase(string) {
  // YOUR CODE BELOW HERE //
// return uppercase string
return string.toUpperCase()
  // YOUR CODE ABOVE HERE //
}

/**
 * Given an input String, return a new String forced to dash-case.
 *
 * Examples:
 *
 *      toDashCase('Hello World'); // => 'hello-world'
 *
 * TIP: How can you look for and replace a space in a String? How can you
 *      enforce lowercase? Look at the global replace link below, or, try String
 *      methods split and join?
 *
 *      See: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace#Using_global_and_ignore_with_replace()
 */
/*
I: Create a function that takes a string as the parameter
O: Return a new string that is in dash-case
C: N/a
E: N/a
*/
function toDashCase(string) {
  // YOUR CODE BELOW HERE //
  // set your newly joined string to lowercase 
let lowercaseJoinedString = string.toLowerCase()
// replace all instances of white space with a dash
let removeWhiteSpace = lowercaseJoinedString.replace(/\s/g, '-')
// return the removeWhiteSpace variable
return removeWhiteSpace
}

/**
 * Given an input String and a single character, return true if the String
 * begins with the character, false otherwise. The Function is case insensitive.
 *
 * Example:
 *
 *      beginsWith('Max', 'm'); // => true;
 *      beginsWith('Max', 'z'); // => false;
 *
 * TIP: How can you use Array access to your advantage here? How can you
 *      ensure uppercase and lowercase can be compared equally?
 */

/*
I: Create a function that takes a string and character as a parameter
O: Return true if the string begins with the character, return false if not
C: Must be case insensitive
E: N/a
*/
function beginsWith(string, char) {
  // YOUR CODE BELOW HERE //
  // Make first character of string uppercase and store it in a variable
let fixedStr = string[0].toUpperCase()
// Make character uppercase and store it in a variable
let fixedChar = char.toUpperCase()
// Check if first Character of string matches character
if (fixedStr === fixedChar){
  // return true if true
  return true 
} else {
  // otherwise return false
  return false;
  }
  // YOUR CODE ABOVE HERE //
}

/**
 * Given an input String and a single character, return true if the String
 * ends with the character, false otherwise. The Function is case insensitive.
 *
 * Example:
 *
 *      endsWith('Max', 'X'); // => true;
 *      endsWith('Max', 'z'); // => false;
 *
 * TIP: How can you use Array access to your advantage here? How can you
 *      ensure uppercase and lowercase can be compared equally?
 */

/*
I: Create a function that takes a string and character as parameters
O: Return true if the string ends with the character, return false if not
C: Must be case insenstive
E: N/a
*/
function endsWith(string, char) {
  // YOUR CODE BELOW HERE //
  // Make last character of string uppercase and store it in a variable
  let fixedStr = string[string.length-1].toUpperCase()
  // Make character uppercase and store it in a variable
  let fixedChar = char.toUpperCase()
  // Check if first Character of string matches character
  if (fixedStr === fixedChar){
    // return true if true
    return true 
  } else {
    // otherwise return false
    return false;
    }
    // YOUR CODE ABOVE HERE //
  }

/**
 * Given two input Strings, return the Strings concatenated into one.
 *
 * TIP: What's the operator to concatenate two Strings?
 */

/*
I: Create a function that takes 2 strings as parameters
O: Return the strings concatenated into a single string
C: N/a
E: N/a
*/

function concat(stringOne, stringTwo) {
  // YOUR CODE BELOW HERE //
  // combine string one and string two together and return it
return stringOne + stringTwo
  // YOUR CODE ABOVE HERE //
}

/**
 * Given any number of Strings, return all of them joined together.
 *
 * Example:
 *
 *      join("my", "name", "is", "Ben"); // => "mynameisBen";
 *
 * TIP: This Function pulls out all the arguments passed to it and stores them
 *      in an Array called args.
 */

/*
I: Create a function that takes any number of strings as a parameter
O: Return all strings joined together
C: N/a
E: N/a
*/

function join(stringOne, stringTwo) {
  // YOUR CODE BELOW HERE //
  // declare an args variable that takes any argument and stores it in an array
  var args = Array.from(arguments);
  // return arg concatenated into one
return args.join('')
  // YOUR CODE ABOVE HERE //
}

/**
 * Given two Strings, return the longest of the two.
 *
 * Example:
 *
 *      longest("ben", "maggie");   //-> "maggie"
 *
 * TIP: What property of the String do we need to compare?
 */

/*
I: Create a function that takes 2 strings as parameters
O: Return the string that is longer than the other
C: N/a
E: N/a
*/
function longest(stringOne, stringTwo) {
  // YOUR CODE BELOW HERE //
  // check if string one has more characters than string two
if (stringOne.length > stringTwo.length) {
  // return string one if so
  return stringOne
  // check if string two has more characters than string one
} else if (stringTwo.length > stringOne.length) {
  // return stringTwo if so
  return stringTwo
}
  // YOUR CODE ABOVE HERE //
}

/**
 * Given two Strings, return 1 if the first string is higher in alphabetical order (meaning earlier in the alphabet) than
 * the second, return -1 if the second is higher in alphabetical order than the
 * first, and return 0 if they're equal.
 *
 * TIP: How can we compare Strings? Is 'a' greater than or less than 'b'?
 */
/*
I: Create a function that takes a string and character as parameters
O: Return 1 if first string is higher in alphabetical order, return -1 if second is higher in alphabetical order, return 0 if they're equal
C: N/a
E: N/a
*/
function sortAscending(stringOne, stringTwo) {
  // YOUR CODE BELOW HERE //
  // check if string one is alphabetically higher than string two
if (stringOne < stringTwo) {
  // return 1 if true
  return 1
  // check if string two is alphabetically higher than string one
} else if (stringTwo < stringOne) {
  // return -1 if true
  return -1
  // otherwise return 0
} else {
  // return 0 if equal
  return 0
}
  // YOUR CODE ABOVE HERE //
}

/**
 * Given two Strings, return 1 if the first is lower in alphabetical order (meaning later in the alphabet) than
 * the second, return -1 if the second is lower in alphabetical order than the
 * first, and return 0 if they're equal.
 *
 * TIP: How can we compare Strings? Is 'a' greater than or less than 'b'?
 */
/*
I: Create a function that takes a string and character as parameters
O: Return -1 if first string is lower in alphabetical order, return 1 if second is higher in alphabetical order, return 0 if they're equal
C: N/a
E: N/a
*/
function sortDescending(stringOne, stringTwo) {
  // YOUR CODE BELOW HERE //
  // check if string one is alphabetically lower than string two
  if (stringOne > stringTwo) {
    // return 1
    return 1
    // check if string two is alphabetically lower than string one
  } else if (stringTwo > stringOne) {
    // return -1
    return -1
    // otherwise return 0 if none of the above are true
  } else {
    // return 0
    return 0
  }
  // YOUR CODE ABOVE HERE //
}

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if (
  typeof process !== 'undefined' &&
  typeof process.versions.node !== 'undefined'
) {
  // here, export any references you need for tests //
  module.exports.length = length;
  module.exports.toLowerCase = toLowerCase;
  module.exports.toUpperCase = toUpperCase;
  module.exports.toDashCase = toDashCase;
  module.exports.beginsWith = beginsWith;
  module.exports.endsWith = endsWith;
  module.exports.concat = concat;
  module.exports.join = join;
  module.exports.longest = longest;
  module.exports.sortAscending = sortAscending;
  module.exports.sortDescending = sortDescending;
}
