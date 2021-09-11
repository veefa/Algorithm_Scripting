//Problem
/*
Return an English translated sentence of the passed binary string.
*/
//
////Solution
//

function binaryAgent(str) {
  let binStr = '';
  //split. the string to array
  let arr = str.split(' ');
  //loop through the arrayto convert each element to int
    //  //than convert each int to string
  arr.forEach(bin => binStr += String.fromCharCode(parseInt(bin, 2)))
  //return the new string
  return binStr;
}

console.log(binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111
01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111"));
                        
//reurn : Aren't bonfires fun!?
