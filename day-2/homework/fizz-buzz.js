// #!/usr/bin/env node

'use strict';

/**
 * 2: Fizz Buzz
 *
 *  a. Write a Function called fizzBuzz that prints the numbers from 1 to 100.
 *  b. BUT, for multiples of three print “Fizz” instead of the number.
 *  c. AND for the multiples of five print “Buzz”.
 *  d. FINALLY, for numbers which are multiples of both three and five print “FizzBuzz”.
 */
/*
I: Create function called fizzBuzz without parameters
O: Print numbers from 1 to 100
C: Multiples of 3 must print Fizz, 5 must print Buzz, and multiples of both 3&5 must print FizzBuzz
E: N/a
*/
function fizzBuzz() {
  // YOUR CODE GOES BELOW HERE //
for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log('FizzBuzz')
  } else if (i % 3 === 0) {
    console.log('Fizz');
  } else if (i % 5 === 0) {
    console.log('Buzz');
  } else {
    console.log(i)
  }
}
  // YOUR CODE GOES ABOVE HERE //
}
console.log(fizzBuzz())
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if (
  typeof process !== 'undefined' &&
  typeof process.versions.node !== 'undefined'
) {
  // here, export any references you need for tests //
  module.exports.fizzBuzz = fizzBuzz;
}
