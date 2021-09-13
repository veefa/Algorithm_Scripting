//Problem
/*
Find the smallest common multiple of the provided parameters that can be evenly divided by both, 
as well as by all sequential numbers in the range between these parameters.

The range will be an array of two numbers that will not necessarily be in numerical order.

For example, if given 1 and 3, find the smallest common multiple of both 1 and 3 that is also evenly divisible by all numbers between 1 and 3.
The answer here would be 6.
*/
//
////Slution
//
ction smallestCommons(arr) {
  let sortArr = arr.sort();
  let newArr = [];
  for (let i = sortArr[0]; i <= sortArr[1]; i++) {
     newArr.push(i);
  }
  //create a gcd (grand common divisor)function 
  function gcd(a,b){
     return a ? gcd(b % a, a) : b;
  };
  //creat a lmc (last common multiple)function
  function lcm(a,b){
    return a * b / gcd(a, b);
  };
  // walks through the array element-by-elemen and calculat their lmc 
  return newArr.reduce(lcm); 
}
console.log(smallestCommons([1,10]));
// return : 2520
