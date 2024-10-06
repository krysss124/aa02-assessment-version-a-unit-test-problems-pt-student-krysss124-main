/***********************************************************************
Write a function called `dynamicAdder(num)`. The dynamicAdder function will
return a new function that will allow us to create new separate custom
adding functions.


Look below to see how this function is invoked:

const addTwo = dynamicAdder(2); // returns a function
console.log(addTwo(5)); // 7

const addTen = dynamicAdder(10); // returns a function
console.log(addTen(5)); // 15

const addNinety = dynamicAdder(90); // returns a function
console.log(addNinety(5)); // 95
***********************************************************************/

function dynamicAdder(num) {
  // Return a new function that takes another number as an argument
  return function(innerNum) {
    return num + innerNum; // Add the two numbers together
  };
}

// Example usage
const addTwo = dynamicAdder(2); // returns a function
console.log(addTwo(5)); // 7

const addTen = dynamicAdder(10); // returns a function
console.log(addTen(5)); // 15

const addNinety = dynamicAdder(90); // returns a function
console.log(addNinety(5)); // 95


/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
try {
  module.exports = dynamicAdder;
} catch (e) {
  module.exports = null;
}
