//1. Create a function that sums two arguments together. If only one argument is provided, then return a function that expects one argument and returns the sum.
//For example, addTogether(2, 3) should return 5, and addTogether(2) should return a function.
function addTogether() {
    const [first, second] = arguments;
    if (typeof(first) !== "number")
      return undefined;
    if (second === undefined)
      return (second) => addTogether(first, second);
    if (typeof(second) !== "number")
      return undefined;
    return first + second;
}
addTogether(2,3);

//2. Fill in the object constructor with the following methods below:
//getFirstName()
//getLastName()
//getFullName()
//setFirstName(first)
//setLastName(last)
//setFullName(firstAndLast)
//Run the tests to see the expected output for each method. The methods that take an argument must accept only one argument and it has to be a string. These methods must be the only available means of interacting with the object.
const Person = function(firstAndLast) {
    let fullName = firstAndLast;

    this.getFirstName = function() {
      return fullName.split(" ")[0];
    };
    this.getLastName = function() {
      return fullName.split(" ")[1];
    };
    this.getFullName = function() {
      return fullName;
    };
    this.setFirstName = function(name) {
      fullName = name + " " + fullName.split(" ")[1];
    };
    this.setLastName = function(name) {
      fullName = fullName.split(" ")[0] + " " + name;
    };
    this.setFullName = function(name) {
      fullName = name;
    };
};
const bob = new Person('Bob Ross');
bob.getFullName();

//3.    a  is the orbit's semi-major axis
//      μ=GM  is the standard gravitational parameter
//      G  is the gravitational constant,
//      M  is the mass of the more massive body.
//Return a new array that transforms the elements' average altitude into their orbital periods (in seconds).
//The array will contain objects in the format {name: 'name', avgAlt: avgAlt}.
//The values should be rounded to the nearest whole number. The body being orbited is Earth.
//The radius of the earth is 6367.4447 kilometers, and the GM value of earth is 398600.4418 km3s-2. 
function orbitalPeriod(arr) {
    const GM = 398600.4418;
    const earthRadius = 6367.4447;
    const a = 2 * Math.PI;
    const newArr = [];
  
    const getOrbPeriod = function(obj) {
      const c = Math.pow(earthRadius + obj.avgAlt, 3);
      const b = Math.sqrt(c / GM);
      const orbPeriod = Math.round(a * b);
  
      return {name: obj.name, orbitalPeriod: orbPeriod};
    };
  
    for (let element in arr) {
      newArr.push(getOrbPeriod(arr[element]));
    }
    return newArr;
}
orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]);
