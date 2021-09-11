//Problem
/*
Check if the predicate (second argument) is truthy on all elements of a collection (first argument).

In other words, you are given an array collection of objects. The predicate pre will be an object property and you need to return true if its value is truthy.
Otherwise, return false.

In JavaScript, truthy values are values that translate to true when evaluated in a Boolean context.
*/
//
////Solution
//
function truthCheck(collection, pre) {
  let newArr = [];
  //loop through the array objects
  for(let i = 0; i < collection.length; i++){
     //push pre to the newArr if pre not exist 
    if(!collection[i][pre]){
      newArr.push(collection[i]);
    }  
  }
  //if newArr.length = 0 it's ture
  if(newArr.length === 0){
    return true;
  }else{
   //else it's false
    return false
  }
}

console.log(truthCheck([{"user": "Tinky-Winky", "sex": "male"},
                        {"user": "Dipsy", "sex": "male"}, 
                        {"user": "Laa-Laa", "sex": "female"},
                        {"user": "Po", "sex": "female"}], "sex"));
//return : true
