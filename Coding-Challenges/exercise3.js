//Object Methods
const prisc = {
    firstName: 'Priscilla',
    lastName: 'Bakradze',
    birthYear: 2002,
    student: true,

    calcAge: function () {
        this.age = 2022 - this.birthYear;
        return this.age;
    },

    getSummary: function () {
        return `${this.firstName} is a ${this.calcAge()}-years old, and she is ${this.student ? 'a' : 'no'} student.`
    }
};

console.log(prisc.calcAge());
console.log(prisc.age);

console.log(prisc.getSummary());

//Challenge!!

//BMI = mass / height ** 2 = mass / (height * height). (mass in kg and height in meter).
//1. Create an object with properties for their full name, mass, and height (Mark Miller & John Smith).

/*2. Create a 'calcBMI' method on each object to calculate the BMI (the same method on both objects).
Store the BMI value to a property, and also return it from the method.*/
const mark = {
    fullName: 'Mark Miller',
    mass: 78,
    height: 1.69,
    calcBMI: function () {
        this.bmi = this.mass / this.height ** 2;
        return this.bmi;
    }
};

const john = {
    fullName: 'John Smith',
    mass: 92,
    height: 1.95,
    calcBMI: function () {
        this.bmi = this.mass / this.height ** 2;
        return this.bmi;
    }
};

/*3. Log to the console who has the higher BMI, together with the full name and the respective BMI.
Example: "John's BMI (28.3) is higher than Mark's (23.9)!"*/
mark.calcBMI();
john.calcBMI();

console.log(mark.bmi, john.bmi);

if (mark.bmi > john.bmi) {
    console.log(`${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s (${john.bmi})!`);
}
else if (john.bmi > mark.bmi) {
    console.log(`${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s (${mark.bmi})!`);
}

//TEST DATA: Mark weighs 78 kg and is 1.69 m tall. John weighs 92 kg and is 1.95 m tall.
