//Problem
/*
Flatten a nested array. You must account for varying levels of nesting.
*/
//
////Solution
//
function steamrollArray(arr) {
  let newArr = [];
  function flatten(arr){
    arr.forEach(function(item){
      if(!Array.isArray(item)){
        newArr.push(item);
      } else {
        flatten(item);
      }
    })
  }
  flatten(arr);
   return newArr;
}

console.log(steamrollArray([1, [2], [3, [[4]]]]));
//return : [ 1, 2, 3, 4 ]
