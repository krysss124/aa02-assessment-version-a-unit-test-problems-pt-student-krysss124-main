/***********************************************************************
Write a function `mostFrequentLetter(string)` that takes a
string as an argument and returns the character that appears the
most often. In case of a tie, you may return any of the characters.
The string will have at least one character.

Examples:

console.log(mostFrequentLetter("apple")); // "p"
console.log(mostFrequentLetter("banana")); // "a"
console.log(mostFrequentLetter("What about a longer string?")); // " "
***********************************************************************/

// function mostFrequentLetter(string) {
//   // Your code here 
// }

function mostFrequentLetter(string) {
  const frequency = {}; // Object to keep track of character frequency

  // Loop through each character in the string
  for (let char of string) {
    // Increment the count for each character in the frequency object
    frequency[char] = (frequency[char] || 0) + 1;
  }

  let maxCount = 0; // Variable to track the maximum frequency
  let mostFrequentChar = ''; // Variable to store the most frequent character

  // Iterate over the frequency object to find the character with the highest frequency
  for (let char in frequency) {
    if (frequency[char] > maxCount) {
      maxCount = frequency[char];
      mostFrequentChar = char; // Update the most frequent character
    }
  }

  return mostFrequentChar; // Return the most frequent character
}

// Examples
console.log(mostFrequentLetter("apple")); // "p"
console.log(mostFrequentLetter("banana")); // "a"
console.log(mostFrequentLetter("What about a longer string?")); // " "


/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
try {
  module.exports = mostFrequentLetter;
} catch (e) {
  module.exports = null;
}
