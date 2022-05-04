//1. Change the while loop in the code to a do...while loop so the loop will push only the number 10 to myArray, and i will be equal to 11 when your code has finished running.
const myArray = [];
let i = 10;

do {
  myArray.push(i);
  i++;
} while (i < 10);

//2. Write a recursive function, sum(arr, n), that returns the sum of the first n elements of an array arr.
function sum(arr, n) {
    if (n <= 0){
      return 0;
    } else {
      return sum(arr, n - 1) + arr[n - 1];
    }
}

//3. Challenge!
/*The function should check if name is an actual contact's firstName and the given property (prop) is a property of that contact.
If both are true, then return the "value" of that property.
If name does not correspond to any contacts then return the string No such contact.
If prop does not correspond to any valid properties of a contact found to match name then return the string No such property.*/
const contacts = [
    {
      firstName: "Akira",
      lastName: "Laine",
      number: "0543236543",
      likes: ["Pizza", "Coding", "Brownie Points"],
    },
    {
      firstName: "Harry",
      lastName: "Potter",
      number: "0994372684",
      likes: ["Hogwarts", "Magic", "Hagrid"],
    },
    {
      firstName: "Sherlock",
      lastName: "Holmes",
      number: "0487345643",
      likes: ["Intriguing Cases", "Violin"],
    },
    {
      firstName: "Kristian",
      lastName: "Vos",
      number: "unknown",
      likes: ["JavaScript", "Gaming", "Foxes"],
    },
  ];
  
function lookUpProfile(name, prop) {

    for (let i = 0; i < contacts.length; i++){
      if (contacts[i].firstName === name){
        if (contacts[i].hasOwnProperty(prop)){
          return contacts[i][prop];
        } else {
          return "No such property";
        };
      };
      
    };
    return "No such contact";
}
