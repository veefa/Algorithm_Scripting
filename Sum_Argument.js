//Problem
/*
Create a function that sums two arguments together. If only one argument is provided, then return a function that expects one argument and returns the sum.

For example, addTogether(2, 3) should return 5, and addTogether(2) should return a function.

Calling this returned function with a single argument will then return the sum:

var sumTwoAnd = addTogether(2);
sumTwoAnd(3) returns 5.
*/
//
////Solution
//
function addTogether(a,b) {
  let args = [...arguments];
  //check if argement each number of array is number
  for(let i = 0; i < args.length; i++){
    //if not return undefin
    if(typeof args[i] !== "number"){
      return undefined;
      //if it is calculate the sum
    } else {
      if(args.length >= 2){
        if(typeof b !== "number"){
          return;
        }
        return a + b;
      } else {
        //if one argument passed return function 
        return (b) =>{
          if(typeof b !== "number"){
             return
            }
            return a + b
          };
      }
    }
  }
}

console.log(addTogether(2,3));
//return : 5
console.log(addTogether(2,"3"));
//return : undefined
