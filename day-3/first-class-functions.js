// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: FIRST CLASS FUNCTIONS
 */

/**
 * Given an input base to test against, which could be a String or Number,
 * return a Function that tests whether a given value is greater than the
 * base.
 */

/*
I: Create a function with base parameter representing a string or a number
O: Return a function that tests whether a given value is greater than the base
C:
E:
*/
function createGreaterThanFilter(base) {
  // YOUR CODE BELOW HERE //
  return function(value) {
    return value > base;
  }
  // YOUR CODE ABOVE HERE //
}

/**
 * Given an input base to test against, which could be a String or Number,
 * return a Function that tests whether a given value is less than the
 * base. (test means return true or false)
 *
 */

/*
I:  Create a function with base parameter representing a string or a number
O: Return a function that tests whether a given value is less than the base
C:
E:
*/
function createLessThanFilter(base) {
  // YOUR CODE BELOW HERE //
return function(value) {
  return value < base;
}
  // YOUR CODE ABOVE HERE //
}

/**
 * Given a startsWith character, which will be a single character, return a
 * Function that tests whether a given String starts with the startsWith
 * character.
 *
 * This function needs to be case insensitive.
 */

/*
I: Create a function that takes startsWith as a parameter representing a single character
O: Return a function that tests whether a given string starts with the startsWith character
C:
E:
*/
function createStartsWithFilter(startsWith) {
  // YOUR CODE BELOW HERE //
return function(string) {
let fixedString = string[0].toLowerCase();
let fixedChar = startsWith.toLowerCase();
  return fixedString === fixedChar
  }
  // YOUR CODE ABOVE HERE //
}

/**
 * Given a endsWith character, which will be a single character, return a
 * Function that tests whether a given String ends with the endsWith
 * character.
 *
 * This function needs to be case insensitive.
 */
function createEndsWithFilter(endsWith) {
  // YOUR CODE BELOW HERE //
  return function(string) {
    let fixedString = string[string.length - 1].toLowerCase();
    let fixedChar = endsWith.toLowerCase();
      return fixedString === fixedChar
      }
  // YOUR CODE ABOVE HERE //
}

/**
 * Given an Array of Strings and a Function designed to modify a String,
 * return the Array of the Strings, modified.
 *
 * TIP: You need to loop over the Strings, right? We need to pass each String to
 * the modify Function, but we need to collect the results into some collection.
 */
function modifyStrings(strings, modify) {
  // YOUR CODE BELOW HERE //
let stringsMod = [];
for (let i = 0; i < strings.length; i++) {
  stringsMod.push(modify(strings[i]))
}
  return stringsMod
  // YOUR CODE ABOVE HERE //
}

/**
 * Given an Array of Strings and a Function designed to test the String in some
 * way and return a Boolean on whether it passed, return true if ALL Strings pass the test.
 *
 * Imagine you had a list of names, and you wanted to test they all
 * begin with "C", or they are all exclaimations that end with "!".
 *
 * TIP: You need to loop over the Strings, right? And pass them to the test?
 */
function allStringsPass(strings, test) {
  // YOUR CODE BELOW HERE //
  let testResults = []
  for (let i = 0; i < strings.length; i++) {
  testResults.push(test(strings[i]))
  }
  if (testResults.includes(false)) {
    return false
  } else {
    return true
  }
  // YOUR CODE ABOVE HERE //
}

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if (
  typeof process !== 'undefined' &&
  typeof process.versions.node !== 'undefined'
) {
  // here, export any references you need for tests //
  module.exports.createGreaterThanFilter = createGreaterThanFilter;
  module.exports.createLessThanFilter = createLessThanFilter;
  module.exports.createStartsWithFilter = createStartsWithFilter;
  module.exports.createEndsWithFilter = createEndsWithFilter;
  module.exports.modifyStrings = modifyStrings;
  module.exports.allStringsPass = allStringsPass;
}
