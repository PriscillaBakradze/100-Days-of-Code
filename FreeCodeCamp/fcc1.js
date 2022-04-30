//1. Use bracket notation to find the second-to-last character in the lastName string.
const lastName = "Lovelace";
const secondToLastLetterOfLastName = lastName[lastName.length - 2]; 

//2. Using bracket notation select an element from myArray such that myData is equal to 8.
const myArray = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [[10, 11, 12], 13, 14],
  ];
  
  const myData = myArray[2][1];

//3. Push ["dog", 3] onto the end of the myArrays variable.
const myArrays = [["John", 23], ["cat", 2]];
myArray.push(["dog", 3])

//4. Write a function nextInLine which takes an array (arr) and a number (item) as arguments.
//Add the number to the end of the array, then remove the first element of the array.
//The nextInLine function should then return the element that was removed.
function nextInLine(arr, item) {
    arr.push(item);
    const removed = arr.shift();
    return removed;
}
  
//5. Write a switch statement which tests val and sets answer for the following conditions:
//alpha, beta, gamma, deta...

function caseInSwitch(val) {
    let answer = "";
    switch(val){
      case 1:
        answer = "alpha";
        break;
      case 2:
        answer = "beta";
        break;
      case 3: 
        answer = "gamma";
        break;
      case 4:
        answer = "delta";
        break;
    }
    return answer;
}
