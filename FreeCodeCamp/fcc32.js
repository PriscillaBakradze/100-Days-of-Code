//1. The eat method is repeated in both Cat and Bear. Edit the code in the spirit of DRY by moving the eat method to the Animal supertype.
function Cat(name) {
    this.name = name;
}
  
Cat.prototype = {
    constructor: Cat,
};
  
function Bear(name) {
    this.name = name;
}
  
Bear.prototype = {
    constructor: Bear,
};
  
function Animal() { }
  
Animal.prototype = {
    constructor: Animal,
      eat: function() {
      console.log("nom nom nom");
    }
};

//2. Use Object.create to make two instances of Animal named duck and beagle.
function Animal() { }

Animal.prototype = {
  constructor: Animal,
  eat: function() {
    console.log("nom nom nom");
  }
};

let duck = Object.create(Animal.prototype); 
let beagle = Object.create(Animal.prototype);

//3. Modify the code so that instances of Dog inherit from Animal.
function Animal() { }

Animal.prototype = {
  constructor: Animal,
  eat: function() {
    console.log("nom nom nom");
  }
};

function Dog() { }

Dog.prototype = Object.create(Animal.prototype);

let beagles = new Dog();

//4. Fix the code so duck.constructor and beagle.constructor return their respective constructors.
function Animal() { }
function Bird() { }
function Dog() { }

Bird.prototype = Object.create(Animal.prototype);
Dog.prototype = Object.create(Animal.prototype);

Bird.prototype.constructor = Bird;
Dog.prototype.constructor = Dog;

let d = new Bird();
let b = new Dog();

//5. Add all necessary code so the Dog object inherits from Animal and the Dog's prototype constructor is set to Dog. Then add a bark() method to the Dog object so that beagle can both eat() and bark(). The bark() method should print Woof! to the console.
function Animal() { }
Animal.prototype.eat = function() { console.log("nom nom nom"); };

function Dog() { }

Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;
Dog.prototype.bark = function(){
  console.log("Woof!");
}

//let beagle = new Dog();
