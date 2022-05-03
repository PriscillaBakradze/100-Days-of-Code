//1. Add the numbers 5 through 0 (inclusive) in descending order to myArray using a while loop.
const myArray = [];

let i = 5;

while (i >= 0){
  myArray.push(i);
  i--;
}

//2. Use a for loop to push the values 1 through 5 onto theArray.
const theArray = [];

for (let i = 1; i < 6; i++){
  theArray.push(i);
}

//3. Push the odd numbers from 1 through 9 to array using a for loop.
const array = [];

for (let i = 1; i < 10; i +=2){
  array.push(i);
}

//4. Push the odd numbers from 9 through 1 to arrays using a for loop.
const arrays = [];

for (let i = 9; i > 0; i -= 2){
  arrays.push(i);
}

//5. Declare and initialize a variable total to 0. Use a for loop to add the value of each element of the myArr array to total.
const myArr = [2, 3, 4, 5, 6];

let total = 0;
for ( let i = 0; i < myArr.length; i++){
  total += myArr[i];
}

//6. Modify function multiplyAll so that it returns the product of all the numbers in the sub-arrays of arr.
function multiplyAll(arr) {
    let product = 1;

    for (let i = 0; i < arr.length; i++){
      for (let j = 0; j < arr[i].length; j++){
        product = product * arr[i][j];
      }
    };
    return product;
  }
  
  multiplyAll([[1, 2], [3, 4], [5, 6, 7]]);
