//Problem
/*
Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. 
In other words, return the symmetric difference of the two arrays.
*/
//
////Solution
//
function diffArray(arr1, arr2) {
  let result = [];
  let sortedArr = arr2.concat(arr1).sort();
  //retuen [1,1,2,2,3,3,4,5,5]

 for(let i = 0; i < arr1.length; i++) {
    for(let j = 0; j < arr2.length; j++) {
      if(arr1[i] === arr2[j]) {
          result.push(arr1[i],arr2[j]);
        //return result = [1,1,2,2,3,3,5,5] array of dublcate elements
      }
    }
  }
   return sortedArr.filter( function( el ) {return result.indexOf( el ) < 0;} );
  //simply remove remove result from sortedArr
}

console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));
//return : [4]
