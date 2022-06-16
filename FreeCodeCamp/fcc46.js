//1. Perform a search and replace on the sentence using the arguments provided and return the new sentence.
//First argument is the sentence to perform the search and replace on.
//Second argument is the word that you will be replacing (before).
//Third argument is what you will be replacing the second argument with (after).
function myReplace(str, before, after) {
    var index = str.indexOf(before);
  
    if (str[index] === str[index].toUpperCase()) {
      after = after.charAt(0).toUpperCase() + after.slice(1);
    } else {
      after = after.charAt(0).toLowerCase() + after.slice(1);
    }
    str = str.replace(before, after);
  
    return str;
}
myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");

//2. For example, for the input GCG, return [["G", "C"], ["C","G"], ["G", "C"]]
//The character and its pair are paired up in an array, and all the arrays are grouped into one encapsulating array.
function pairElement(str) {
    var paired = [];
  
    var search = function(char){
      switch(char) {
        case "A":
          paired.push(["A", "T"]);
          break;
        case "T":
          paired.push(["T", "A"]);
          break;
        case "C":
          paired.push(["C", "G"]);
          break;
        case "G":
          paired.push(["G", "C"]);
          break;
      }
    };
  
    for (var i = 0; i < str.length; i++) {
      search(str[i]);
    }
    return paired;
}
pairElement("GCG");
