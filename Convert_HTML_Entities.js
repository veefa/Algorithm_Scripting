//Problem
/*
Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.
*/
//
////Solution
//
function convertHTML(str) {
  return String(str)
  .replace(/&/g, '&amp;')
  .replace(/</g, '&lt;')
  .replace(/>/g, '&gt;')
  .replace(/'/g,'&apos;')
  .replace(/"/g, '&quot;');
}

console.log(convertHTML("Schindler's List"));

//return : Schindler&apos;s List
