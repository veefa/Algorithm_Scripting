//Problem
/*
Pig Latin is a way of altering English Words. The rules are as follows:

- If a word begins with a consonant, take the first consonant or consonant cluster, move it to the end of the word, and add ay to it.

- If a word begins with a vowel, just add way at the end.
Translate the provided string to Pig Latin. Input strings are guaranteed to be English words in all lowercase.
*/
//
////Solution
//
function translatePigLatin(str) {
  //check if srting start with consonant
    //convert str to array
    let arr = [...str.toLowerCase()];
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    let firstConsonants = [];
       //if str strat with vowle add 'way' to the end
      if(vowels.indexOf(arr[0]) !== -1){
        return str + "way";
      }

      for (let char in arr) {
        if (!vowels.includes(arr[char])) {
          firstConsonants.push(arr[char]);
        } else {
         return  arr.splice(char).join("") + firstConsonants.join("") + "ay";
          
        }
      } 
    //if str start with consonant move the character to the end and add "ay" to the end of it 

}

console.log(translatePigLatin("consonsnt"));
