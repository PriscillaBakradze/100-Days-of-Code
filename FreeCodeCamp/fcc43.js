//1. We'll pass you an array of two numbers. Return the sum of those two numbers plus the sum of all the numbers between them. The lowest number will not always come first.
function sumAll(arr) {
    let max = Math.max(arr[0], arr[1]);
    let min = Math.min(arr[0], arr[1]);
    let sum = 0;
    for (let i = min; i <= max; i++) {
      sum += i;
    }
    return sum;
}
sumAll([1, 4]);

//2. Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other words, return the symmetric difference of the two arrays.
function diffArray(arr1, arr2) {
    const newArr = [];
  
    function first(one, two) {
      for (let i = 0; i < one.length; i++){
        if (two.indexOf(one[i]) === -1) {
          newArr.push(one[i]);
        }
      }
    }
    first(arr1, arr2);
    first(arr2, arr1);
    return newArr;
}
diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
