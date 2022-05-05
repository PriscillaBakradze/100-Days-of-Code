//1. Change randomFraction to return a random number instead of returning 0.
function randomFraction() {  
    return Math.random();  
}

//2.Generate and return a random whole number between 0 and 9.
function randomWholeNum() {  
    return Math.floor(Math.random() * 10);
}

//3. Create a function called randomRange that takes a range myMin and myMax and returns a random whole number that's greater than or equal to myMin, and is less than or equal to myMax, inclusive.
function randomRange(myMin, myMax) {
    return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin;
}

//4. Use parseInt() in the convertToInteger function so it converts the input string str into an integer, and returns it.
function convertToInteger(str) {
    return parseInt(str);
}
convertToInteger("56");

//5. Use parseInt() in the convertToInteger function so it converts a binary number to an integer and returns it.
function convertToInteger(str) {
    return parseInt(str, 2)
}
convertToInteger("10011");

//6. Use the conditional operator in the checkEqual function to check if two numbers are equal or not. The function should return either the string Equal or the string Not Equal.
function checkEqual(a, b) {
    return a === b ? "Equal" : "Not Equal";
}
checkEqual(1, 2);

//7. In the checkSign function, use multiple conditional operators - following the recommended format used in findGreaterOrEqual - to check if a number is positive, negative or zero. The function should return positive, negative or zero.
function checkSign(num) {
    return (num > 0) ? "positive"
    : (num < 0) ? "negative"
    : "zero";
}
checkSign(10);

/*8. Challenge!
We have defined a function called countdown with one parameter (n). The function should use recursion to return an array 
containing the integers n through 1 based on the n parameter. If the function is called with a number less than 1, 
the function should return an empty array. For example, calling this function with n = 5 should return the array [5, 4, 3, 2, 1]. 
Your function must use recursion by calling itself and must not use loops of any kind.*/
function countdown(n){
    if (n < 1){
      return [];
    } else {
      const array = countdown(n - 1);
      array.unshift(n);
      return array;
    };
}

/*9. Challenge! 
We have defined a function named rangeOfNumbers with two parameters. The function should return an array of integers 
which begins with a number represented by the startNum parameter and ends with a number represented by the endNum parameter. 
The starting number will always be less than or equal to the ending number. Your function must use recursion by calling itself 
and not use loops of any kind. It should also work for cases where both startNum and endNum are the same.*/
function rangeOfNumbers(startNum, endNum) {
    if (endNum - startNum === 0){
      return[startNum];
    } else {
      let numbers = rangeOfNumbers(startNum, endNum - 1);
      numbers.push(endNum);
      return numbers;
    };
}
