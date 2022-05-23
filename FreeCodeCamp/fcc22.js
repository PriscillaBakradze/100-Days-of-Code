//1. Somewhere on the third level, include the string deep, on the fourth level, include the string deeper, and on the fifth level, include the string deepest.
let myNestedArray = [
    ['unshift', false, 1, 2, 3, 'complex', 'nested'],
    ['loop', 'shift', 6, 7, 1000, 'method'],
    ['concat', false, true, 'spread', 'array', ['deep']],
    ['mutate', 1327.98, 'splice', 'slice', 'push', [['deeper']]],
    ['iterate', 1.3849, 7, '8.4876', 'arbitrary', 'depth', [[['deepest']]]]
];

//2. A foods object has been created with three entries. Using the syntax of your choice, add three more entries to it: bananas with a value of 13, grapes with a value of 35, and strawberries with a value of 27.
let foods = {
    apples: 25,
    oranges: 32,
    plums: 28
};
  
foods['bananas'] = 13;
foods['grapes'] = 35;
foods['strawberries'] = 27;
  
console.log(foods);

//3. Here we've defined an object userActivity, which includes another object nested within it. Set the value of the online key to 45.
let userActivity = {
    id: 23894201352,
    date: 'January 1, 2017',
    data: {
      totalUsers: 51,
      online: 42
    }
};
  
userActivity.data.online = 45;
  
console.log(userActivity);
