//Loops in Loops
for (let exercise = 1; exercise < 4; exercise ++) {
    console.log(`------Starting Exercise ${exercise}`);

    for (let rep = 1; rep < 6; rep++) {
        console.log(`Exercise ${exercise}: Lifting weight repetition ${rep}`);
    }
}

//While Loop
let rep = 1;
while (rep <= 10) {
    console.log(`Lifting weights repetition ${rep}`);
    rep++;
}

//Challenge!!
const calcTip = function (bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}

//1. Create an array 'bills' containing all 10 test bill values
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

//2. Create empty arrays for the tips and the totals ('tips' and 'totals')
const tips = [];
const totals = [];

//3. Use the 'calcTip' function to calculate tips and total values (bill + tip) 
//for every bill value in the bills array. Use a for loop to perform the 10 calculations!
for (let i = 0; i < bills.length; i++){
    const tip = calcTip(bills[i]);
    tips.push(tip);
    totals.push(tip + bills[i]);
}

console.log(bills, tips, totals);

//TEST DATA: 22, 295, 176, 440, 37, 105, 10, 1100, 86 and 52
