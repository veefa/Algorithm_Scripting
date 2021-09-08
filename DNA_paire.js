//Problem
/*
The DNA strand is missing the pairing element. Take each character, get its pair, and return the results as a 2d array.

Base pairs are a pair of A T and C G. Match the missing element to the provided character.

Return the provided character as the first element in each array.
*/
//
////Solution
//
function pairElement(str) {
  //creat an empty array to push result to it
  let arr = [];
  //loop through the string array 
  for(let i = 0; i < str.length; i++){
    //if statment to push the paire
    if(str[i] === 'A'){arr.push([str[i], "T"])}
    if(str[i] === 'T'){arr.push([str[i], "A"])}
    if(str[i] === 'C'){arr.push([str[i], "G"])}
    if(str[i] === 'G'){arr.push([str[i], "C"])}
  }
  //return the result array
  return arr;
}

console.log(pairElement("GCG"));
//return : [ [ 'G', 'C' ], [ 'C', 'G' ], [ 'G', 'C' ] ]
