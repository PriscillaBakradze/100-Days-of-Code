//1. Given the array arr, iterate through and remove each element starting from the first element (the 0 index) until the function func returns true when the iterated element is passed through it.
//Then return the rest of the array once the condition is satisfied, otherwise, arr should be returned as an empty array.
function dropElements(arr, func) {

    while (arr.length > 0 && !func(arr[0])) {
      arr.shift();
    }
    return arr;
}
dropElements([1, 2, 3], function(n) {return n < 3; });

//2. Flatten a nested array. You must account for varying levels of nesting.
function steamrollArray(arr) {

    const flattenedArray = [];
  
    for (let i = 0; i < arr.length; i++) {
      if (Array.isArray(arr[i])) {
        flattenedArray.push(...steamrollArray(arr[i]));
      } else {
        flattenedArray.push(arr[i]);
      }
    }
    return flattenedArray;
}
steamrollArray([1, [2], [3, [[4]]]]);
