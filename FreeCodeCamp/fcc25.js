//1. This challenge can be solved with the .endsWith() method, which was introduced in ES2015. But for the purpose of this challenge, we would like you to use one of the JavaScript substring methods instead.
function confirmEnding(str, target) {
    return str.slice(str.length - target.length) === target;
}
  
confirmEnding("Bastian", "n");

//2. Repeat a given string str (first argument) for num times (second argument). Return an empty string if num is not a positive number. For the purpose of this challenge, do not use the built-in .repeat() method.
function repeatStringNumTimes(str, num) {
    let accumulate = "";
    for (let i = 0; i < num; i++){
      accumulate += str;
    }
    return accumulate;
}
  
//3. Truncate a string (first argument) if it is longer than the given maximum string length (second argument). Return the truncated string with a ... ending.
function truncateString(str, num) {
    if (str.length > num) {
      return str.slice(0, num) + "...";
    } else {
      return str;
    }
}
  
