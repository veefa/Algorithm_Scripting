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
  let union = [];
  //loop through the arguments
  for (let i = 0; i < arguments.length; i++) {
    let newArgs = arguments[i];
    //loop through the array of arguments
    for (var j = 0; j < newArgs.length; j++) {
            var finalArgs = newArgs[j]
      //checking if each value exists in union. If it returns true, we can push() it into union. If the if it returns false, we move on to the next item
      if (union.indexOf(finalArgs) < 0) {
                union.push(finalArgs); 
      }
    }
  }
  return union;
}
console.log(([1, 3, 2], [5, 2, 1, 4], [2, 1]));

// return : [1, 3, 2, 5, 4]
