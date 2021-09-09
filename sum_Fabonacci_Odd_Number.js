//Problem
/*
Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num.

The first two numbers in the Fibonacci sequence are 1 and 1. Every additional number in the sequence is the sum of the two previous numbers.
The first six numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8.
*/
//
////Solution
//
//create a function that calculate sum of odd Fibonacci
function sumFibs(num) {
  if(num < 0){return undefined};
//creat variables to calculate  Fibonacci numbers
let start = 0;
let next = 1;
let current;
let sumOdd = 0;
//get the Fib numbers serie
  //loop up from 0 to num
  for(let i = 0; i <= num; i++){
    //claculat Fib
    current = start + next;
    start = next;
    next = current;
    //check if fib is odd and <= num
    if(current % 2 !== 0 && current <= num){
      sumOdd = current + sumOdd;
    }
  }
  return sumOdd + 1;
}

console.log(sumFibs(4));
//return : 5
