//1. We've defined a function, checkInventory, which receives a scanned item as an argument. Return the current value of the scannedItem key in the foods object. You can assume that only valid keys will be provided as an argument to checkInventory.
let foods = {
    apples: 25,
    oranges: 32,
    plums: 28,
    bananas: 13,
    grapes: 35,
    strawberries: 27
  };
  
  function checkInventory(scannedItem) {
    return foods[scannedItem];
}
console.log(checkInventory("apples"));

//2. Use the delete keyword to remove the oranges, plums, and strawberries keys from the foods object.
let food = {
    apples: 25,
    oranges: 32,
    plums: 28,
    bananas: 13,
    grapes: 35,
    strawberries: 27
};
delete food.oranges;
delete food.plums;
delete food.strawberries;
  
console.log(food);

//3. Finish writing the function so that it returns true if the object passed to it contains all four names, Alan, Jeff, Sarah and Ryan and returns false otherwise.
let users = {
    Alan: {
      age: 27,
      online: true
    },
    Jeff: {
      age: 32,
      online: true
    },
    Sarah: {
      age: 48,
      online: true
    },
    Ryan: {
      age: 19,
      online: true
    }
};
  
function isEveryoneHere(userObj) {
    if (userObj.hasOwnProperty('Alan') &&
        userObj.hasOwnProperty('Jeff') &&
        userObj.hasOwnProperty('Sarah') &&
        userObj.hasOwnProperty('Ryan')){
        return true;
    }
    return false;
}
console.log(isEveryoneHere(users));

//4. Use a for...in statement within this function to loop through the users object passed into the function and return the number of users whose online property is set to true.
const u = {
    Alan: {
      online: false
    },
    Jeff: {
      online: true
    },
    Sarah: {
      online: false
    }
}

function countOnline(usersObj) {
    let result = 0;
    for (let user in usersObj){
      if (usersObj[user].online === true){
        result++;
      }
    }
    return result;
}

//5. Finish writing the getArrayOfUsers function so that it returns an array containing all the properties in the object it receives as an argument.
let use = {
    Alan: {
      age: 27,
      online: false
    },
    Jeff: {
      age: 32,
      online: true
    },
    Sarah: {
      age: 48,
      online: false
    },
    Ryan: {
      age: 19,
      online: true
    }
};
  
function getArrayOfUsers(obj) {
    return Object.keys(obj);
}
console.log(getArrayOfUsers(use));

//6. We've started writing a function addFriend. Finish writing it so that it takes a user object and adds the name of the friend argument to the array stored in user.data.friends and returns that array.
let user = {
    name: 'Kenneth',
    age: 28,
    data: {
      username: 'kennethCodesAllDay',
      joinDate: 'March 26, 2016',
      organization: 'freeCodeCamp',
      friends: [
        'Sam',
        'Kira',
        'Tomo'
      ],
      location: {
        city: 'San Francisco',
        state: 'CA',
        country: 'USA'
      }
    }
};
  
function addFriend(userObj, friend) {
    userObj.data.friends.push(friend);
    return userObj.data.friends;
}
console.log(addFriend(user, 'Pete'));
