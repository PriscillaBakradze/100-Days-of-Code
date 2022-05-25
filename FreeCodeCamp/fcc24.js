//Algorithm Scripting

//1.  Use the variable fahrenheit already defined and assign it the Fahrenheit temperature equivalent to the given Celsius temperature. Use the formula mentioned above to help convert the Celsius temperature to Fahrenheit.
function convertToF(celsius) {
    let fahrenheit = celsius * (9/5) + 32;
    return fahrenheit;
}
convertToF(30);

//2. Reverse the provided string.
function reverseString(str) {
    return str
    .split("")
    .reverse()
    .join("");
}
  
//3. Return the factorial of the provided integer.
function factorialize(num) {
    if (num === 0){
      return 1;
    }
    return num * factorialize(num -1);
}
factorialize(5);

//4. Return the length of the longest word in the provided sentence. Your response should be a number.
function findLongestWordLength(str) {
    let words = str.split(" ");
    let lengthMax = 0;

    for (let i = 0; i < words.length; i++){
      if (words[i].length > lengthMax){
        lengthMax = words[i].length;
      }
    }
    return lengthMax;
}

//5. Return an array consisting of the largest number from each provided sub-array. For simplicity, the provided array will contain exactly 4 sub-arrays.
function largestOfFour(arr) {
    const result = [];
    for (let i = 0; i < arr.length; i++){
      let largestNumber = arr[i][0];
      for (let j = 1; j < arr[i].length; j++){
        if (arr[i][j] > largestNumber){
          largestNumber = arr[i][j];
        }
      }
      result[i] = largestNumber;
    } 
    return result;
}
