'use strict';
// function describeCountry(country, population, capitalCity) {
//     return `${country} has ${population} million people and it's capital city is ${capitalCity}`;
// }
// const country1 = describeCountry('Syria', 23, 'Damascus');
// const country2 = describeCountry('Jordan', 14, 'Amman');
// const country3 = describeCountry('France', 60, 'Paris');
// console.log(country1);
// console.log(country2);
// console.log(country3);

// function percentageOfWorld1(population) {
//     return population / 7900 * 100;
// }
// const case1 = percentageOfWorld1(1441);
// console.log(case1);

// const percentageOfWorld2 = function (population) {
//     return population / 7900 * 100;
// }
// const case2 = percentageOfWorld2(23);
// console.log(case2);
// console.log(percentageOfWorld2(23));

// const percentageOfWorld3 = population => population / 7900 * 100;
// console.log(percentageOfWorld3(1441));


// function percentageOfWorld1(population) {
//     return population / 7900 * 100;
// }

// function describePopulation(country, population) {
//     const caseCountry = percentageOfWorld1(population);
//     return `${country} has ${population} million people, which is about ${caseCountry} of the world.`
// }
// console.log(describePopulation('China', 1441));
// console.log(describePopulation('France', 60));



// const populations = [1441, 23, 60, 34];
// if (populations.length === 4) {
//     console.log(true);
// } else {
//     console.log(false);
// };
// const calcPer = population => population / 7900 * 100;
// const percentages = [calcPer(populations[0]), calcPer(populations[1]), calcPer(populations[2]), calcPer(populations[3])];
// console.log(percentages);


// const neighbours = ['Jordan', 'Iraq', 'Lebanon', 'Turky'];
// neighbours.push('Utopia');
// console.log(neighbours);
// neighbours.pop();
// console.log(neighbours);
// if (!neighbours.includes('Germany')) {
//     console.log('Probably not a central European country');
// }
// neighbours[1] = 'Republic of Iraq';
// console.log(neighbours);
// neighbours[neighbours.indexOf('Jordan')] = 'Jordanian Kingdom';
// console.log(neighbours);


// const myCountry = {
//     country: 'Syria',
//     population: 23,
//     capital: 'Damascus',
//     language: 'Arabic',
//     neighbours: ['Jordan', 'Lebanon', 'Iraq', 'Turky'],
//     describe: function () {
//         return `${this.country} has ${this.population} million ${this.language}-speaking people, ${this.neighbours.length} neighbouring countries and a capital called ${this.capital}.`
//     },
//     checkIland: function () {
//         this.isIsland = this.neighbours.length === 0 ? true : false;
//         return this.isIsland;
//     }
// }
// console.log(myCountry);
// console.log(`${myCountry.country} has ${myCountry.population} million ${myCountry.language}-speaking people, ${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry.capital}.`);

// myCountry.population = 25;
// console.log(myCountry.population);
// myCountry['population'] = myCountry.population - 2;
// console.log(myCountry.population);
// console.log(myCountry['describe']());
// console.log(myCountry.checkIland());
// console.log(myCountry);

// for (let i = 1; i <= 50; i++) {
//     console.log(`Voter number ${i} is currently voting`)
// };

// const populations = [1441, 23, 60, 34];
// const percentage2 = [];
// function percentageOfWorld1(population) {
//     return population / 7900 * 100;
// };
// for (let i = 0; i < populations.length; i++) {
//     percentage2.push(percentageOfWorld1(populations[i]));
// }
// console.log(percentage2);


// const listOfNeighbours = [['Canada', 'Mexico'], ['Spain'], ['Norway', 'Sweden',
//     'Russia']];
// for (let i = 0; i < listOfNeighbours.length; i++) {
//     for (let j = 0; j < listOfNeighbours[i].length; j++) {
//         console.log(`Neighbour: ${listOfNeighbours[i][j]}`);
//     }
// }


// const populations = [1441, 23, 60, 34];
// const percentage2 = [];
// function percentageOfWorld1(population) {
//     return population / 7900 * 100;
// };
// let i = 0;
// while (i < populations.length) {
//     percentage2.push(percentageOfWorld1(populations[i]));
//     i++;
// }
// console.log(percentage2);