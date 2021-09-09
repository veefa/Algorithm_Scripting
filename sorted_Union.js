//Problem
/*
Write a function that takes two or more arrays and returns a new array of unique values in the order of the original provided arrays.

In other words, all values present from all arrays should be included in their original order, but with no duplicates in the final array.

The unique numbers should be sorted by their original order, but the final array should not be sorted in numerical order.
*/
//
////Solution
//
function uniteUnique(arr) {
  let args = [...arguments];
  let union = [];
  for(let i = 0; i < args.length; i++){
    for(let j = 0; j < args[i].length; j++){
      //checking if each value exists in union. If it returns true, we can push() it into union. If the if it returns false, we move on to the next item
      if(union.indexOf(args[i][j]) === -1){
        union.push(args[i][j]);
      }
    }
  }
  return union;
}
console.log(([1, 3, 2], [5, 2, 1, 4], [2, 1]));
// return : [1, 3, 2, 5, 4]
