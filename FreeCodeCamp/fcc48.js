//1. Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.
function convertHTML(str) {

    const htmlEntities = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&apos;"
    };
  
    return str.replace(/([&<>\"'])/g, match => htmlEntities[match]);
}
convertHTML("Dolce & Gabbana");

//2. Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num.
//The first two numbers in the Fibonacci sequence are 1 and 1. Every additional number in the sequence is the sum of the two previous numbers. The first six numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8.
function sumFibs(num) {

    let previous = 0;
    let current = 1;
    let result = 0;
  
    while (current <= num){
      if (current % 2 !== 0) {
        result += current;
      }
      current += previous;
      previous = current - previous;
    }
    return result;
}
sumFibs(4);
