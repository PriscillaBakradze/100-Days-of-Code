//1. Add a numLegs property to the prototype of Dog
function Dog(name) {
    this.name = name;
}
Dog.prototype.numLegs = 4;
  
let beagle = new Dog("Snoopy");

//2. Add all of the own properties of beagle to the array ownProps. Add all of the prototype properties of Dog to the array prototypeProps.
function Dog(name) {
    this.name = name;
}
  
Dog.prototype.numLegs = 4;
  
let beagles = new Dog("Snoopy");
  
let ownProps = [];
let prototypeProps = [];
  
for (let property in beagles){
    if(Dog.hasOwnProperty(property)){
      ownProps.push(property);
    } else {
      prototypeProps.push(property);
    }
}

//3. Write a joinDogFraternity function that takes a candidate parameter and, using the constructor property, return true if the candidate is a Dog, otherwise return false.
function Dog(name) {
    this.name = name;
}
  
function joinDogFraternity(candidate) {
    if (candidate.constructor === Dog){
        return true;
    } else {
        return false;
    }
}
