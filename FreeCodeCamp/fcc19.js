//1. Fix the two spelling errors in the code so the netWorkingCapital calculation works.
let receivables = 10;
let payables = 8;
let netWorkingCapital = receivables - payables;
console.log(`Net working capital is: ${netWorkingCapital}`);

//2 Fix the two pair errors in the code.
let myArray = [1, 2, 3];
let arraySum = myArray.reduce((previous, current) =>  previous + current);
console.log(`Sum of array values is: ${arraySum}`);

//3. Fix the string so it either uses different quotes for the href value, or escape the existing ones. Keep the double quote marks around the entire string.
let innerHtml = "<p>Click here to <a href='#Home'>return home</a></p>";
console.log(innerHtml);

//4. Fix the condition so the program runs the right branch, and the appropriate value is assigned to result.
let x = 7;
let y = 9;
let result = "to come";

if(x === y) {
  result = "Equal!";
} else {
  result = "Not equal!";
}

console.log(result);

//5. Fix the code so the variable result is set to the value returned from calling the function getNine.
function getNine() {
    let x = 6;
    let y = 3;
    return x + y;
}
let res = getNine();
console.log(result);

//6. The function raiseToPower raises a base to an exponent. Unfortunately, it's not called properly - fix the code so the value of power is the expected 8.
function raiseToPower(b, e) {
    return Math.pow(b, e);
}
let base = 2;
let exp = 3;
let power = raiseToPower(base, exp);
console.log(power);

//7. Fix the two indexing errors in the following function so all the numbers 1 through 5 are printed to the console.
function countToFive() {
    let firstFive = "12345";
    let len = firstFive.length;

    for (let i = 0; i < len; i++) {
      console.log(firstFive[i]);
    }
}
countToFive();

//8. The following function is supposed to create a two-dimensional array with m rows and n columns of zeroes. Unfortunately, it's not producing the expected output because the row variable isn't
//being reinitialized (set back to an empty array) in the outer loop. Fix the code so it returns a correct 3x2 array of zeroes, which looks like [[0, 0], [0, 0], [0, 0]].
function zeroArray(m, n) {
    // Creates a 2-D array with m rows and n columns of zeroes
    let newArray = [];
  
    for (let i = 0; i < m; i++) {
      // Adds the m-th row into newArray
        let row = [];
      for (let j = 0; j < n; j++) {
        // Pushes n zeroes into the current row to create the columns
        row.push(0);
      }
      // Pushes the current row, which now has n zeroes in it, to the array
      newArray.push(row);
    }
    return newArray;
}
let matrix = zeroArray(3, 2);
console.log(matrix);
  
//9. The myFunc() function contains an infinite loop because the terminal condition i != 4 will never evaluate to false (and break the looping) - i will increment by 2 each pass, and jump right over 4 since i is odd to start. Fix the comparison operator in the terminal condition so the loop only runs for i less than or equal to 4.
function myFunc() {
    for (let i = 1; i <= 4; i ++) {
      console.log("Still going!");
    }
}
