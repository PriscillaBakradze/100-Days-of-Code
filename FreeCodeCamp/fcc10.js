//1. Use object property shorthand with object literals to create and return an object with name, age and gender properties.
const createPerson = (name, age, gender) => {
    return {
        name, 
        age,
        gender
    };
   
};

//2. Refactor the function setGear inside the object bicycle to use the shorthand syntax described above.
const bicycle = {
    gear: 2,
    setGear (newGear){
      this.gear = newGear;
    },
};
bicycle.setGear(3);
console.log(bicycle.gear);

//3. Use the class keyword and write a constructor to create the Vegetable class. The Vegetable class allows you to create a vegetable object with a property name that gets passed to the constructor.
class Vegetable {
    constructor(name){
      this.name = name;
    };
};
const carrot = new Vegetable('carrot');
console.log(carrot.name); // Should display 'carrot'

//4. Use the class keyword to create a Thermostat class. The constructor accepts a Fahrenheit temperature. In the class, create a getter to obtain the temperature in Celsius and a setter to set the temperature in Celsius.
class Thermostat {
    constructor(fahrenheit){
      this.fahrenheit = fahrenheit;
    }
  
    get temperature(){
      return (5 / 9) * (this.fahrenheit - 32);
    }
  
    set temperature(celsius){
      this.fahrenheit = (celsius * 9.0) / 5 + 32;
    }
}
  
const thermos = new Thermostat(76); // Setting in Fahrenheit scale
let temp = thermos.temperature; // 24.44 in Celsius
thermos.temperature = 26;
temp = thermos.temperature; // 26 in Celsius
