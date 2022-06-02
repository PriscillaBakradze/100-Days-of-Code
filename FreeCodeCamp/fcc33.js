//1. Override the fly() method for Penguin so that it returns the string Alas, this is a flightless bird.
function Bird() { }

Bird.prototype.fly = function() { return "I am flying!"; };

function Penguin() { }
Penguin.prototype = Object.create(Bird.prototype);
Penguin.prototype.constructor = Penguin;

Penguin.prototype.fly = function() {
  return "Alas, this is a flightless bird.";
};

let penguin = new Penguin();
console.log(penguin.fly());

//2. Create a mixin named glideMixin that defines a method named glide. Then use the glideMixin to give both bird and boat the ability to glide.
let bird = {
    name: "Donald",
    numLegs: 2
};
  
let boat = {
    name: "Warrior",
    type: "race-boat"
};
  
let glideMixin = function(obj) {
    obj.glide = function() {
      console.log("Let's glide!");
    }
};
  
glideMixin(bird);
glideMixin(boat);

//3. Change how weight is declared in the Bird function so it is a private variable. Then, create a method getWeight that returns the value of weight 15.
function Bird() {
    let weight = 15;
  
    this.getWeight = function() {
      return weight;
    };
}

//4. Rewrite the function makeNest and remove its call so instead it's an anonymous immediately invoked function expression (IIFE).
(function () {
    console.log("You and Me");
})();

//5. Create a module named funModule to wrap the two mixins isCuteMixin and singMixin. funModule should return an object.
let funModule = (function () {
    return {
      isCuteMixin: function(obj){
        obj.isCute = function() {
          console.log("Cuteness that is cute!");
        };
      },
      singMixin: function(obj){
        obj.sing = function() {
          console.log("Singing to an awesome tune");
        };
      }
    }
})();
