//Problem
/*
Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.
*/
//
////Solution
//
function spinalCase(str) {
  let newStr = str
  //find UpperCase and replece them by space
  .replace(/([A-Z])/g,' $1')
  //replace all non alpha numeric using ( ^ )to get the opposite, with space
  .replace(/[^A-Za-z0-9]/g,' ')
   //replace space with dash()hypen
  .replace(/\s{1,}/g, "-")
  //remove - from the start ^ and the end $
  .replace(/^\-|[\-]$/g,'')
  //convert to lowercase
  .toLowerCase();

  return newStr;
}

console.log(spinalCase("thisIsSpinalTap"));
//return : this-is-spinal-tap
