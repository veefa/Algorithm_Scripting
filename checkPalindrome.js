//Problem
/*
Return true if the given string is a palindrome. Otherwise, return false.

Note: You'll need to remove all non-alphanumeric characters (punctuation, spaces and symbols) and turn everything into the same case (lower or upper case) in order to check for palindromes.

We'll pass strings with varying formats, such as racecar, RaceCar, and race CAR among others.
*/
//
////Solution
//
function palindrome(str) {
  //remove all non-alphanumeric characters

  let newStr = str.toLowerCase().replace(/[\W_]/g, '');
  console.log(newStr);
  //check if string is palindrome and return true or false
  let reverStr = newStr.split("").reverse().join("")
    return reverStr === newStr
}
console.log(palindrome("My age is 0, 0 si ega ym."));
/* return :
            myageis00siegaym
            true
*/
