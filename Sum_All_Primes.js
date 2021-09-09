//Problem
/*
A prime number is a whole number greater than 1 with exactly two divisors: 1 and itself.
For example, 2 is a prime number because it is only divisible by 1 and 2.
In contrast, 4 is not prime since it is divisible by 1, 2 and 4.
*/
//
////Solution
//
//create a function to sum prime numbers
function sumPrimes(num) {
  let sum = 0;
  //create function to check if num is prime
  function checkPrime(val){
    //loop up rom 2 to value
    for(let i = 2; i < val; i++){
      //if num is prime
      if(val % i === 0){
        return false;
      }
    }
    return true;
  }
  //loop through 2 till num
  for(let i = 2; i <= num; i++){
      //if current number is prime sum it
    if(checkPrime(i)){
      sum += i
    }
  }
  //return sum
  return sum;
}

console.log(sumPrimes(10));
//return : 17
