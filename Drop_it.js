//Problem
/*
Given the array arr, iterate through and remove each element starting from the first element (the 0 index) until the function func returns true
when the iterated element is passed through it.
*/
//
////Solution
//
function dropElements(arr, func) {
  
  while(!func(arr[0])) {     
     arr.shift();
    }
  
    return arr;
}
console.log(dropElements([1, 2, 3], function(n) {return n < 3; }));
//return : [ 1, 2, 3 ]
