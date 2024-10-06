/***********************************************************************
Write a function `keyValueDuplicates(obj)` that takes an object as
an argument and returns an array containing all keys that are also
values in that object.

Examples:

obj1 = { orange: "juice", apple: "sauce", sauce: "pan" };
console.log(keyValueDuplicates(obj1)); // ["sauce"]

obj2 = { big: "foot", foot: "ball", ball: "boy", boy: "scout" };
console.log(keyValueDuplicates(obj2)); // ["foot", "ball", "boy"]

obj3 = { pizza: "pie", apple: "pie", pumpkin: "pie" };
console.log(keyValueDuplicates(obj3)); // []
***********************************************************************/

// function keyValueDuplicates(obj) {
//   // Your code here 
// }

function keyValueDuplicates(obj) {
  // Create an array of the object's values
  let values = Object.values(obj);
  
  // Use Object.keys() to iterate over the keys and filter those that are also in the values array
  return Object.keys(obj).filter(key => values.includes(key));
}

// Examples
let obj1 = { orange: "juice", apple: "sauce", sauce: "pan" };
console.log(keyValueDuplicates(obj1)); // ["sauce"]

let obj2 = { big: "foot", foot: "ball", ball: "boy", boy: "scout" };
console.log(keyValueDuplicates(obj2)); // ["foot", "ball", "boy"]

let obj3 = { pizza: "pie", apple: "pie", pumpkin: "pie" };
console.log(keyValueDuplicates(obj3)); // []


/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
try {
  module.exports = keyValueDuplicates;
} catch (e) {
  module.exports = null;
}
