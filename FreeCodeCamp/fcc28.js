//Object Oriented Programming

//1. Create a dog object with name and numLegs properties, and set them to a string and a number, respectively.
let dog = {
    name: "Maximus",
    numLegs: 4
};

//2. Print both properties of the dog object to your console.
let doggie = {
    name: "Spot",
    numLegs: 4  
};
console.log(doggie.name);
console.log(doggie.numLegs);

//3. Using the dog object, give it a method called sayLegs. The method should return the sentence This dog has 4 legs.
let doggo = {
    name: "Spot",
    numLegs: 4,
    sayLegs: function() {return "This dog has " + doggo.numLegs + " legs.";}
};
doggo.sayLegs();

//4. Modify the dog.sayLegs method to remove any references to dog. Use the duck example for guidance.
let dogg = {
    name: "Spot",
    numLegs: 4,
    sayLegs: function() {return "This dog has " + this.numLegs + " legs.";}
};
dogg.sayLegs();

//5. Create a constructor, Dog, with properties name, color, and numLegs that are set to a string, a string, and a number, respectively.
function Dog() {
    this.name = "Elsa";
    this.color = "brown",
    this.numLegs = 4;
}

//6. Use the Dog constructor from the last lesson to create a new instance of Dog, assigning it to a variable hound.
function Dog() {
    this.name = "Rupert";
    this.color = "brown";
    this.numLegs = 4;
}
let hound = new Dog();
