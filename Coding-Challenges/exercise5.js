/* Given an array of forecasted maximum temperatures, the thermometer displays a string with these temperatures. */

//Example: [17, 21, 23] will print "... 17°C in 1 days... 21°C in 2 days... 23°C in 3 days..."

//Create a function 'printForecast' which takes in an array 'arr' and logs a string like the above to the console.

//TEST DATA 1: [17, 21, 23]
//TEST DATA 2: [12, 5, -5, 0, 4]

const data1 = [17, 21, 23];
const data2 = [12, 5, -5, 0, 4];

console.log(`...${data1[0]}°C ... ${data1[1]}°C ... ${data1[2]}°C ...`);

const printForecast = function(arr){
    let str = '';
    for (let i = 0; i < arr.length; i++){
        str = str + `${arr[i]}°C in ${i + 1} days ... `;
    }
    console.log("..." + str);
};
printForecast(data1);
