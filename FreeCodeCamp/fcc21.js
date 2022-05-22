//1. We have defined a function, forecast, that takes an array as an argument. Modify the function using slice() to extract information from the argument array and return a new array that contains the string elements warm and sunny.
function forecast(arr) {
    arr = arr.slice(2, 4);
    return arr;
}
console.log(forecast(['cold', 'rainy', 'warm', 'sunny', 'cool', 'thunderstorms']));

//2. Modify the function using spread syntax so that it works correctly.
function copyMachine(arr, num) {
    let newArr = [];
    while (num >= 1) {
      newArr.push([...arr]);
      num--;
    }
    return newArr;
}
console.log(copyMachine([true, false, true], 2));

//3. We have defined a function spreadOut that returns the variable sentence. Modify the function using the spread operator so that it returns the array ['learning', 'to', 'code', 'is', 'fun'].
function spreadOut() {
    let fragment = ['to', 'code'];
    let sentence = ['learning', ...fragment, 'is', 'fun'];
    return sentence;
}
console.log(spreadOut());
 
//4. Modify the function using indexOf() so that it returns true if the passed element exists on the array, and false if it does not.
function quickCheck(arr, elem) {
    if (arr.indexOf(elem) >= 0){
      return true;
    }
    return false;
}
console.log(quickCheck(['squash', 'onions', 'shallots'], 'mushrooms'));

//5. Modify the function, using a for loop, to return a filtered version of the passed array such that any array nested within arr containing elem has been removed.
function filteredArray(arr, elem) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++){
      if (arr[i].indexOf(elem) == -1) {
        newArr.push(arr[i]);
      }
    }
    return newArr;
}
console.log(filteredArray([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9]], 3));
