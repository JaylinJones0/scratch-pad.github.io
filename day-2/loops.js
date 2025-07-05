// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: LOOPS
 */

/**
 * Given an input Array, loop forward over the Array and print its values
 * using console.log().
 */
/*
I: Create function that takes an array as a parameter
O: Print values of array by looping forwards
C: Use console.log()
E: N/a
*/
function printArrayValues(array) {
  // YOUR CODE BELOW HERE //
  // loop forward over array
for (let i = 0; i < array.length; i++) {
  // print values of array to the console
  console.log(array[i]);
}
  // YOUR CODE ABOVE HERE //
}

/**
 * Given an input Array, loop backwards over the Array and print its values
 * using console.log().
 */
/*
I: Create function that takes an array as a parameter
O: Print values of array by looping backwards
C: Use console.log()
E: N/a
*/
function printArrayValuesInReverse(array) {
  // YOUR CODE BELOW HERE //
  // create a loop that iterates over array in reverse
for (let i = array.length - 1; i >= 0; i--) {
  // log contents of array to the console
  console.log(array[i])
}
  // YOUR CODE ABOVE HERE //
}

/**
 * Given an input Object, return an Array containing the Object keys.
 */
/*
I: Create a function that takes an object as a parameter  
O: Return an array containing the object keys
C: N/a
E: N/a
*/
function getObjectKeys(object) {
  // YOUR CODE BELOW HERE //
  // Create storage array named tempArray
let tempArray = []
// Use for in loop to iterate over object
for (var key in object) {
  // Move keys into storage array
  tempArray.push(key)
}
// return tempArray
return tempArray
  // YOUR CODE ABOVE HERE //
}

/**
 * Given an input Object, loop over the Object and print its keys
 * using console.log().
 */
/*
I: Create a function that takes an object as a parameter
O: Output the keys after looping over the object
C: Use console.log()
E:
*/
function printObjectKeys(object) {
  // YOUR CODE BELOW HERE //
  // Use for in loop to iterate over object
for (var key in object) {
  // log keys to the console
  console.log(key)
}
  // YOUR CODE ABOVE HERE //
}

/**
 * Given an input Object, return an Array containing the Object's values.
 */
/*
I: Create a function that takes an object as a parameter
O: Return an array containing the object's values
C: N/a
E: N/a
*/
function getObjectValues(object) {
  // YOUR CODE BELOW HERE //
  // create tempArray variable assigned with an empty array
  let tempArray = []
  // use a for in loop to iterate over object
for (var key in object) {
  // move object values into empty array
  tempArray.push(object[key])
}
// return new array
return tempArray
  // YOUR CODE ABOVE HERE //
}

/**
 * Given an input Object, loop over the Object and print its values
 * using console.log().
 */
/*
I: Create a function that takes an object as the parameter
O: Loop over the object to printn it's values
C: Use console.log
E: N/a
*/
function printObjectValues(object) {
  // YOUR CODE BELOW HERE //
  // use a for in loop to iterate over object
for (var key in object) {
  // log object values to console
  console.log(object[key])
}
  // YOUR CODE ABOVE HERE //
}

/**
 * Given an input Object, return the number of key/value pairs stored within that Object.
 */
/*
I: Create a function that takes an object as a parameter
O: Return the number of key/value pairs stored within that object
C: N/a
E: N/a
*/
function getObjectLength(object) {
  // YOUR CODE BELOW HERE //
  // declare count variable to store number
  let keyCount = 0
  // create for in loop to iterate over object
  for (var key in object) {
    // log object values to console
    // create if statement to check if object has property
    if (object.hasOwnProperty(key)) {
      // increment keyCount by 1 if true
      keyCount++
    }
  }
  // return keyCount
  return keyCount
  // YOUR CODE ABOVE HERE //
}

/**
 * Given an input Object, how might we loop over the Object IN REVERSE and
 * print its values using console.log()?
 */
/*
I: Create a function that takes an object as an input
O: Loop over object in reverse and print values
C: Use console.log()
E: N/a
*/
function printObjectValuesInReverse(object) {
  // YOUR CODE BELOW HERE //
  let valueArr = Object.values(object)
  for (let i = valueArr.length - 1; i >= 0; i--) {
console.log(valueArr[i])
  }
  // YOUR CODE ABOVE HERE //
}

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if (
  typeof process !== 'undefined' &&
  typeof process.versions.node !== 'undefined'
) {
  // here, export any references you need for tests //
  module.exports.printArrayValues = printArrayValues;
  module.exports.printArrayValuesInReverse = printArrayValuesInReverse;
  module.exports.printObjectValues = printObjectValues;
  module.exports.getObjectValues = getObjectValues;
  module.exports.getObjectKeys = getObjectKeys;
  module.exports.printObjectKeys = printObjectKeys;
  module.exports.getObjectLength = getObjectLength;
  module.exports.printObjectValuesInReverse = printObjectValuesInReverse;
}
