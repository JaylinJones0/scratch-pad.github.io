// #!/usr/bin/env node

'use strict';

/**
 * 1: reverseString()
 *
 *  a. Create a function called reverseString that takes a
 *  String as its only input and returns a new String
 *  representing the input String reversed.  For example:
 *
 *      reverseString('hello');  // => 'olleh'
 *
 * TIPS:
 *  a. create something to collect the output you'll return.
 *  b. you'll need a loop, which one is best? How do you know
 *     when to stop looping?
 *  c. how do you access individual characters of a String?
 *  d. how do you concatenate Strings? What operator do we use?
 */
/*
I: Create a function that takes a string as a parameter
O: Return a new string representing the input string reversed
C: N/a
E: N/a
*/
function reverseString(input) {
  // YOUR CODE GOES BELOW HERE //
  // create storage string
  let storageStr = ''
  // use a for loop to iterate over string in reverse
  for (let i = input.length - 1; i >= 0; i--) {
    // use the output of the i to access the index of input and add it to the storage string
storageStr += input[i];
  }
  // return the storage string
  return storageStr
  // YOUR CODE GOES ABOVE HERE //
}

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if (
  typeof process !== 'undefined' &&
  typeof process.versions.node !== 'undefined'
) {
  // here, export any references you need for tests //
  module.exports.reverseString = reverseString;
}
