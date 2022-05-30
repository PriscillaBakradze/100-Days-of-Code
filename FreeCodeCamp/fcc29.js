//1. Create another Dog constructor. This time, set it up to take the parameters name and color, and have the property numLegs fixed at 4. Then create a new Dog saved in a variable terrier. Pass it two strings as arguments for the name and color properties.
function Dog(name, color) {
    this.name = name;
    this.color = color;
    this.numLegs = 4;
}
  
let terrier = new Dog("Max", "Grey");

//2. Create a new instance of the House constructor, calling it myHouse and passing a number of bedrooms. Then, use instanceof to verify that it is an instance of House.
function House(numBedrooms) {
    this.numBedrooms = numBedrooms;
}
  
let myHouse = new House(3, 5);
myHouse instanceof House;

//3. Add the own properties of canary to the array ownProps.
function Bird(name) {
    this.name = name;
    this.numLegs = 2;
}
  
let canary = new Bird("Tweety");
let ownProps = [];
  
for (let property in canary){
    if(canary.hasOwnProperty(property)) {
      ownProps.push(property);
    }
}
console.log(ownProps);
