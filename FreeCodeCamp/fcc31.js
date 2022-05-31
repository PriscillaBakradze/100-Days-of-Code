//1. Add the property numLegs and the two methods eat() and describe() to the prototype of Dog by setting the prototype to a new object.
function Dog(name) {
    this.name = name;
}
  
Dog.prototype = {
    numLegs: 4,
    eat: function() {
      console.log("bark");
    },
    describe: function() {
      console.log("My name is " + this.name);
    }
};

//2. Define the constructor property on the Dog prototype.
function Dog(name) {
    this.name = name;
}
  
Dog.prototype = {
    constructor: Dog,
    numLegs: 4,
    eat: function() {
      console.log("nom nom nom");
    },
    describe: function() {
      console.log("My name is " + this.name);
    }
};

//3. Use isPrototypeOf to check the prototype of beagle.
function Dog(name) {
    this.name = name;
}
let beagle = new Dog("Snoopy");
Dog.prototype.isPrototypeOf(beagle);

//4. Modify the code to show the correct prototype chain.
function Dog(name) {
    this.name = name;
}
let b = new Dog("Snoopy");
  
Dog.prototype.isPrototypeOf(b);  // yields true
Object.prototype.isPrototypeOf(Dog.prototype);
