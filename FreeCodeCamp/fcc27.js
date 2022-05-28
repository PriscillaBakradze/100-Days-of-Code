//1. You are given two arrays and an index. Copy each element of the first array into the second array, in order. Begin inserting elements at index n of the second array. Return the resulting array. The input arrays should remain the same after the function runs.
function frankenSplice(arr1, arr2, n) {
    let array = arr2.slice();
    for (let i = 0; i < arr1.length; i++)  {
      array.splice(n, 0, arr1[i]);
      n++;
    }
    return array;
}

//2. Remove all falsy values from an array. Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.
function bouncer(arr) {
    return arr.filter(Boolean);
}

//3. Return the lowest index at which a value (second argument) should be inserted into an array (first argument) once it has been sorted. The returned value should be a number. 
//For example, getIndexToIns([1,2,3,4], 1.5) should return 1 because it is greater than 1 (index 0), but less than 2 (index 1).
function getIndexToIns(arr, num) {
    arr.sort((a, b) => a - b);
  
    for (let i = 0; i < arr.length; i++){
      if (arr[i] >= num)
      return i;
    }
    return arr.length;
}

//4. Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.
function mutation(arr) {
    let test = arr[1].toLowerCase();
    let target = arr[0].toLowerCase();
    for (let i = 0; i < test.length; i++) {
      if (target.indexOf(test[i]) < 0) return false;
    }
    return true;
}

//5. Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.
function chunkArrayInGroups(arr, size) {
    let newArray = [];
    while (arr.length > 0) {
      newArray.push(arr.splice(0, size));
    }
    return newArray;
}
