/* 1. Write a switch statement to set answer for the following conditions:
//apple, bird, cat, default - stuff....*/
function switchOfStuff(val) {
    let answer = "";
    switch(val){
      case "a":
        answer = "apple";
        break;
      case "b":
        answer = "bird";
        break;
      case "c":
        answer = "cat";
        break;
      default:
        answer = "stuff";
        break;
    }
    return answer;
  }

/* 2. Write a switch statement to set answer for the following ranges:
//1-3 - Low
//4-6 - Mid
7-9 - High*/
function sequentialSizes(val) {
    let answer = "";
    switch (val){
      case 1:
      case 2:
      case 3:
        answer = "Low";
        break;
      case 4:
      case 5:
      case 6:
        answer = "Mid";
        break;
      case 7:
      case 8:
      case 9:
        answer = "High";
        break;
    }
    return answer;
  }
  
//3. Modify the function abTest so that if a or b are less than 0 the function will immediately exit with a value of undefined.
function abTest(a, b) {
    
  if (a < 0 || b < 0) {
    return undefined;
  }
    return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
  }  
  abTest(2,2);

/*4.You will write a card counting function. It will receive a card parameter, which can be a number or a string, and increment or decrement the global count variable 
according to the card's value (see table). The function will then return a string with the current count and the string Bet if the count is positive, or Hold if the count is zero or negative. 
The current count and the player's decision (Bet or Hold) should be separated by a single space.*/
let count = 0;
function cc(card) {
    switch (card) {
      case 2:
      case 3:
      case 4:
      case 5:
      case 6:
        count++;
        break;
      case 10:
      case "J":
      case "Q":
      case "K":
      case "A":
        count--;
        break;
    }
    if (count > 0){
      return count + " Bet";
    } 
    else {
      return count + " Hold";
    }
}  
cc(2); cc(3); cc(7); cc('K'); cc('A');

//5. Read the values of the properties an entree and the drink of testObj using bracket notation and assign them to entreeValue and drinkValue respectively.
const testObj = {
    "an entree": "hamburger",
    "my side": "veggies",
    "the drink": "water"
  };
const entreeValue = testObj["an entree"];   
const drinkValue = testObj["the drink"];   

//6. Set the playerNumber variable to 16. Then, use the variable to look up the player's name and assign it to player.
const testObject = {
  12: "Namath",
  16: "Montana",
  19: "Unitas"
};

const playerNumber = 16;  
const player = testObject[playerNumber];   

//7. Update the myDog object's name property. Let's change her name from Coder to Happy Coder. You can use either dot or bracket notation.
const myDog = {
  "name": "Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["freeCodeCamp Campers"]
};

myDog.name = "Happy Coder";     //Dot Notation 
myDog["name"] = "Happy Coder"; //Bracket Notation

//8. Add a bark property to myDog and set it to a dog sound, such as "woof". You may use either dot or bracket notation.
myDog.bark = "woof";     //Dot Notation 
myDog["bark"] = "woof"; //Bracket Notation

//9. Delete the tails property from myDog. You may use either dot or bracket notation.
delete myDog.tails;     //Dot Notation 
delete myDog["tails"]; //Bracket Notation

//10. Convert the switch statement into an object called lookup. Use it to look up val and assign the associated string to the result variable.
function phoneticLookup(val) {
  let result = "";

  const lookup = {
    "alpha": "Adams",
    "bravo": "Boston",
    "charlie": "Chicago",
    "delta": "Denver",
    "echo": "Easy",
    "foxtrot": "Frank"
  }
  result = lookup[val];

  return result;
};
