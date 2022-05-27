//1. Create a function that looks through an array arr and returns the first element in it that passes a 'truth test'. This means that given an element x, the 'truth test' is passed if func(x) is true. If no element passes the test, return undefined.
function findElement(arr, func) {
    let num = 0;
  
    for (let i = 0; i < arr.length; i++){
      num = arr[i];
      if (func(num)){
        return num;
      }
    }
    return undefined;
}
  
//2. Check if a value is classified as a boolean primitive. Return true or false.
function booWho(bool) {
    return typeof bool === "boolean";
}

booWho(null);

//3. Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.
function titleCase(str) {
    const n = str.split(" ");
    const update = [];
    for (let st in n){
      update[st] = n[st][0].toUpperCase() + n[st].slice(1).toLowerCase();
    }
    return update.join(" ");
}
