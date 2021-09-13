//Problem
/*
Find the missing letter in the passed letter range and return it.

If all letters are present in the range, return undefined.
*/
//
////Solution
//
function fearNotLetter(str) {
  //creat an array of string elemnets
  let lastValue = str.split('')
      // iterat through the array and convert it's value to numbers
    .map(letter => letter.charCodeAt(0))
     //check if the diffrence between the previous and the current is > 1
    .reduce((acc, letter) => (acc === letter - 1) ? letter : acc);
  //check if the current last value === the end of the string
  if (lastValue !== str.charCodeAt(str.length - 1)) {
    //return the caracter at that value
   return String.fromCharCode(lastValue + 1);
  }
  return undefined;
}

console.log(fearNotLetter("abce"));
//return : d
