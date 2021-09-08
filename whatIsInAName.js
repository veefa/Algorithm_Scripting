//Problem
/*
Make a function that looks through an array of objects (first argument) and returns an array of all objects that have matching name and value pairs (second argument). 
Each name and value pair of the source object has to be present in the object from the collection if it is to be included in the returned array.
*/
//
////Solution
//
//function that take an object and array as arguments
function whatIsInAName(collection, source) {
  //iterat through the array of objects for any number of objects that mach te key/value pair in the collection
  let arr = [];
  let sourceKeys = Object.keys(source);

 arr =  collection.filter(item => sourceKeys.every
 // check if every key in the item exist as property
 (key =>  item.hasOwnProperty(key) && item[key] === source[key]
 ))

//return the found objects in an array
  return arr;
}

console.log(whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" }));

//return [ { first: 'Tybalt', last: 'Capulet' } ]
