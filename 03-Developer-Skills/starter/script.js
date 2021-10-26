// Remember, we're gonna use strict mode in all scripts now!
'use strict';

// const x = "23";

// const calcAge = birthYear => 2037 - birthYear;
// console.log(calcAge(1995));

// We work for a company building a smart home thermometer. Our most recent task is this: "Given an array of temperatures of one day, calculate the temperature amplitude. Keep in mind that sometimes there might be a sensor error."

const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];
// temp amplitude is the difference between the highest an lowest temps.


// const calcTepmAmplitude = function (temps) {
//     let max = temps[0];
//     let min = temps[0];
//     for (let i = 0; i < temps.length; i++) {
//         const currTemp = temps[i];
//         if (typeof temps[i] !== "number") continue;
//         if (currTemp > max) max = currTemp;
//         if (currTemp < min) min = currTemp;
//     }
//     console.log(max, min);
//     return max - min;
// };
// const amplitude = calcTepmAmplitude(temperatures);
// console.log(amplitude);

//  function should recieve 2 arrays:

// const calcTepmAmplitude = function (temps1, temps2) {
//     const temps = temps1.concat(temps2);
//     console.log(temps);
//     let max = temps[0];
//     let min = temps[0];
//     for (let i = 0; i < temps.length; i++) {
//         const currTemp = temps[i];
//         if (typeof temps[i] !== "number") continue;
//         if (currTemp > max) max = currTemp;
//         if (currTemp < min) min = currTemp;
//     }
//     console.log(max, min);
//     return max - min;
// };
// const amplitude = calcTepmAmplitude([3, 5, 1], [9, 0, 5]);
// console.log(amplitude);


// using debugger
// const calcTepmAmplitudeBug = function (temps1, temps2) {
//     const temps = temps1.concat(temps2);
//     console.log(temps);
//     let max = temps[0];
//     let min = temps[0];
//     for (let i = 0; i < temps.length; i++) {
//         const currTemp = temps[i];
//         if (typeof temps[i] !== "number") continue;
//         if (currTemp > max) max = currTemp;
//         if (currTemp < min) min = currTemp;
//     }
//     console.log(max, min);
//     return max - min;
// };
// const amplitudeBug = calcTepmAmplitudeBug([3, 5, 1], [9, 4, 5]);
// console.log(amplitudeBug);

/*
Given an array of forecasted maximum temperatures, the thermometer displays a string with these temperatures.

Example: [17, 21, 23] will print "... 17ºC in 1 days ... 21ºC in 2 days ... 23ºC in 3 days ..."

Create a function 'printForecast' which takes in an array 'arr' and logs a string like the above to the console.

Use the problem-solving framework: Understand the problem and break it up into sub-problems!

TEST DATA 1: [17, 21, 23]
TEST DATA 2: [12, 5, -5, 0, 4]
*/
const printForecast = function (arr) {
    let forcastString = "... ";
    for (let i = 0; i < arr.length; i++) {
        // forcastString += arr[i] + ' ºC in ' + (i + 1) + " days ...";
        forcastString += `${arr[i]} ºC in ${i + 1} days ...`;
    }
    return forcastString;
};
console.log(printForecast([17, 21, 23]));
