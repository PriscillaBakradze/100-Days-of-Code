//1. Complete the code for the squareList function using any combination of map(), filter(), and reduce(). The function should return a new array containing the squares of only the positive integers (decimal numbers are not integers) when an array of real numbers is passed to it. An example of an array of real numbers is [-3, 4.8, 5, 3, -3.2].
const squareList = arr => {
    return arr
      .filter(num => num > 0 && num % parseInt(num) === 0)
      .map(num => Math.pow(num, 2));
};
  
const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2]);
console.log(squaredIntegers);

//2. Use the sort method in the alphabeticalOrder function to sort the elements of arr in alphabetical order. The function should return the sorted array.
function alphabeticalOrder(arr) {  
    return arr.sort(function(a, b){
        return a === b ? 0 : a < b ? -1 : 1;
    });
}
alphabeticalOrder(["a", "d", "c", "a", "z", "g"]);

//3. Use the sort method in the nonMutatingSort function to sort the elements of an array in ascending order. The function should return a new array, and not mutate the globalArray variable.
const globalArray = [5, 6, 3, 2, 9];

function nonMutatingSort(arr) {
    return [].concat(arr).sort(function(a, b){
        return a - b;
    });
}
nonMutatingSort(globalArray);

//4. Use the split method inside the splitify function to split str into an array of words. The function should return the array. Note that the words are not always separated by spaces, and the array should not contain punctuation.
function splitify(str) {  
    return str.split(/\W/);
}
splitify("Hello World,I-am code");
