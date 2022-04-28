/* Back to the two gymnastics teams, the Dolphins and the Koalas!
There is a new gymnastics discipline, which works differently.
Each team competes 3 times, and then the average of the 3 scores
is calculated (so one average score per team). A team ONLY wins
if it has at least DOUBLE the average score of the other team.
Otherwise, no team wins!
Test DATA 1: Dolphins score 44, 23, and 71. Koalas score 65, 54, and 49
Test DATA 2: Dolphins score 85, 54, and 41. Koalas score 23, 34, and 27.*/

//TEST 1
//1. Create an arrow function 'calcAverage' to calculate the average of 3 scores.

const calcAverage = (one, two, three) => (one + two + three) / 3;
console.log(calcAverage(2, 3, 4));

//2. Use the function to calculate the average for both teams.

//const dolphinScore = calcAverage(44, 23, 71);
//const koalaScore = calcAverage(65, 54, 49);
let dolphinScore = calcAverage(44, 23, 71);
let koalaScore = calcAverage(65, 54, 49);
console.log(dolphinScore, koalaScore);

//3. Create a function 'checkWinner' that takes the average score of each team as parameters
//('avgDolphins' and 'avgKoalas'), and then logs the winner to the console, together with the victory
//points, according to the rule above. Example: "Koalas win (30 vs. 13)".
const checkWinner = function(avgDolphins, avgKoalas) {
    if (avgDolphins >= 2 * avgKoalas) {
        console.log(`Dolphins Win! (${avgDolphins} vs. ${avgKoalas})`);
    } else if (avgKoalas >= 2 * avgDolphins) {
        console.log(`Koalas Win! (${avgKoalas} vs. ${avgDolphins})`);
    } else {
        console.log("No Team Wins!");
    }
}

//4. Use the 'checkWinner' function to determine the winner for both DATA 1 and DATA 2.
checkWinner(dolphinScore, koalaScore);
checkWinner(231, 823);

//5. Ignore draws this time.

//TEST 2
dolphinScore = calcAverage(85, 54, 41);
koalaScore = calcAverage(23, 34, 27);
console.log(dolphinScore, koalaScore);
checkWinner(dolphinScore, koalaScore);
