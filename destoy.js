//Problem
/*
ou will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments.
Remove all elements from the initial array that are of the same value as these arguments
*/
//
////Algorithm
/*
1 - get values fom argument object
2 - Remove the first item (arr first argument)
3 - Save the remianung elements into a new array args
4 - Check whether arguments include elements from an array and return all that 
     do not include(false)
*/
//
////Solution
//
function destroyer(arr) {
  const args = [...arguments].slice(1);

  return arr.filter(e => !args.includes(e));
}

console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));
//return : [1,1]
