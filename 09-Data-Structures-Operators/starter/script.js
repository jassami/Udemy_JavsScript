'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

const getCode = str => str.slice(0, 3).toUpperCase();
for (const flight of flights.split('+')) {
  const [type, from, to, time] = flight.split(';');
  const output = `${type.startsWith('_Delayed') ? '🔴' : ''}${type.replaceAll('_', ' ')} from ${getCode(from)} to ${getCode(to)} (${time.replace(':', 'h')})`.padStart(50);
  console.log(output);
};




// Data needed for first part of the section
// const restaurant = {
//   name: 'Classico Italiano',
//   location: 'Via Angelo Tavanti 23, Firenze, Italy',
//   categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
//   starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
//   mainMenu: ['Pizza', 'Pasta', 'Risotto'],
//   order: function (starteIndex, mainIndex) {
//     return [this.starterMenu[starteIndex], this.mainMenu[mainIndex]];
//   }
// };

// const arr = [2, 3, 4];
// const a = arr[0];
// const b = arr[1];
// const c = arr[2];

// const [x, y, z] = arr;
// console.log(x, y, z);

// const [first, second] = restaurant.categories;
// console.log(first, second);

// const [first, , second] = restaurant.categories;
// console.log(first, second);

// let [main, , secondary] = restaurant.categories;
// console.log(main, secondary);

// const temp = main;
// main = secondary;
// secondary = temp;
// console.log(main, secondary);

// [main, secondary] = [secondary, main];
// console.log(main, secondary);

// console.log(restaurant.order(2, 0));
// const [starter, mainCourse] = restaurant.order(2, 0);
// console.log(starter, mainCourse);


//   openingHours: {
//     thu: {
//       open: 12,
//       close: 22,
//     },
//     fri: {
//       open: 11,
//       close: 23,
//     },
//     sat: {
//       open: 0, // Open 24 hours
//       close: 24,
//     },
//   },
// };

// nested destructuring
// const nested = [2, 4, [5, 6]];
// const [i, , j] = nested;
// console.log(i, j);
// const [i, , [j, k]] = nested;
// console.log(i, j, k);

// Default values
// const [p, q, r] = [8, 9];
// console.log(p, q, r);
// const [p = 1, q = 1, r = 1] = [8];
// console.log(p, q, r);

const weekdays = ['mon', 'tue', 'wed', 'thur', 'fri', 'sat', 'sun'];

const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    open: 0,
    close: 12 + 12,
  },
};

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  openingHours,
  orderDelivery: function ({ starterIndex = 1, mainIndex = 0, address, time = '20:00' }) {
    console.log(`Order resieved! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be deliverd to ${address} at ${time}.`);
  },
  orderPasta: function (ing1, ing2, ing3) {
    console.log(`Your pasta is with ${ing1}, ${ing2}, and ${ing3}`);
  },
  orderPizza: function (mainIngredients, ...otherIngredients) {
    console.log(mainIngredients);
    console.log(otherIngredients);
  }

};

// Strings
// const airline = 'TAP Air Portugal';
// const plane = 'A320';

// console.log(plane[0]);
// console.log('A320'[2]);
// console.log(airline.length);
// console.log('B737'.length);
// console.log(airline.indexOf('r'));
// console.log(airline.lastIndexOf('r'));
// console.log(airline.indexOf('Portugal'));
// console.log(airline.indexOf('portugal'));

// console.log(airline.slice(4));
// console.log(airline.slice(4, 7));

// console.log(airline.slice(0, airline.indexOf(' ')));
// console.log(airline.slice(airline.lastIndexOf(' ') + 1));

// console.log(airline.slice(-2));
// console.log(airline.slice(1, -1));

// // write a function that receives an airplane seat and logs to the console whether it is a middle seat or not.
// const checkMiddleSeat = function (seat) {
//   const s = seat.slice(-1);
//   if (s === 'B' || s === 'E') console.log('Yougot the middle seat :('); else console.log('You are lucky :)');
// };
// checkMiddleSeat('11B');
// checkMiddleSeat('34A');
// checkMiddleSeat('2E');

// Coding Challenge #4:
// document.body.append(document.createElement('textarea'));
// document.body.append(document.createElement('button'));
// document.querySelector('button').addEventListener('click', function () {
//   const text = document.querySelector('textarea').value;
//   const wordArr = text.split('\n');
//   let count = 1;
//   for (const line of wordArr) {
//     const [first, second] = line.trim().toLowerCase().split('_');
//     const outPut = `${first}${second.replace(second[0], second[0].toUpperCase())}`
//     // console.log(`${first}${second[0].toUpperCase()}${second.slice(1)}`);
//     // console.log(`${first}${second.replace(second[0], second[0].toUpperCase())}`);
//     console.log(outPut.padEnd(20, ' ') + '*'.repeat(count));
//     count++;
//   };
// });


// const camelCase= function([var1, var2,])



// // strings part 3:
// console.log('a+very+nice+string'.split('+'));
// console.log('jay second'.split(' '));
// const [firstName, lastName] = 'jane two'.split(' ');
// const newName = ['Mr.', firstName, lastName.toUpperCase()];
// console.log(newName.join(' '));

// // eg:
// const capitalizeName = function (name) {
//   const names = name.split(' ');
//   const namesUpper = [];
//   for (const n of names) {
//     // namesUpper.push(n[0].toUpperCase() + n.slice(1));
//     namesUpper.push(n.replace(n[0], n[0].toUpperCase()))
//   };
//   console.log(namesUpper.join(' '));
// };
// capitalizeName('jane sam one');

// // padding
// const maskCreditCard = function (number) {
//   const str = number + '';
//   const last = str.slice(-4);
//   return last.padStart(str.length, '*');
// };
// console.log(maskCreditCard(23456789));
// console.log(maskCreditCard('23456789'));
// console.log(maskCreditCard(2903475675849));

// // Repeat
// const message2 = 'Bad weather... All Departures Delayed... ';
// console.log(message2.repeat(5));



// strings part 2:

// console.log(airline.toLowerCase());
// console.log(airline.toUpperCase());

// const passenger = 'jOnAS';
// const passengerLower = passenger.toLowerCase();
// const passengerCorrect = passengerLower[0].toUpperCase() + passengerLower.slice(1);
// console.log(passengerCorrect);

// // compare emails:
// const email = 'hello@jonas.io';
// const loginEmail = '   Hello@Jonas.Io \n';
// const normalizedEmail = loginEmail.toLowerCase().trim();
// console.log(normalizedEmail);
// console.log(normalizedEmail === email);

// const priceGB = '288,97&';
// const priceUS = priceGB.replace('&', '$').replace(',', '.');
// console.log(priceUS);

// const announcement = 'All passenger come to boarding door 23, door 23';
// console.log(announcement.replaceAll('door', 'gate'));
// console.log(announcement.replace(/door/g, 'gate'));

// // booleans
// const plane = 'Airbus A320neo';
// console.log(plane.includes('A32'));
// console.log(plane.startsWith('Airb'));
// if (plane.startsWith('Airbus') && plane.endsWith('neo')) {
//   console.log('The plane is part of the new family');
// };

// // example
// const checkBaggage = function (items) {
//   const baggage = items.toLowerCase();
//   if (baggage.includes('knife') || baggage.includes('gun')) {
//     console.log('You are NOT allowed on board');
//   } else {
//     console.log('Welcome aboard!');
//   }
// };

// checkBaggage('I have a laptop, Food and a Knife');
// checkBaggage('Socks and camera');
// checkBaggage('Got some snacks and a gun for protection');






// maps:

// const rest = new Map();
// rest.set('name', 'Classico Italiano');
// rest.set(1, 'Firenze, Italy')
// console.log(rest.set(2, 'Lisbon, Potugal'));
// // Chaining:
// rest.set('catigories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic']).set('open', 11).set('close', 23).set(true, 'We are open').set(false, "We are closed");
// console.log(rest);
// console.log(rest.get('name'));
// console.log(rest.get(true));
// console.log(rest.get(false));
// console.log(rest.get(1));

// const time = 21;
// console.log(rest.get(time > rest.get('open') && time < rest.get('close')));
// console.log(rest.has('catigories'));
// rest.delete(2);
// console.log(rest.size);
// // rest.set([1, 2], 'Test');
// // console.log(rest);
// // to get the value of the array, we must do the following in set and get:
// const arr = [1, 2];
// rest.set(arr, 'Test');
// console.log(rest.get(arr));
// rest.set(document.querySelector('h1'), 'Heading');

// const questions = new Map([
//   ['question', 'What is the best programming language in the world?'],
//   [1, 'c'],
//   [2, 'Java'],
//   [3, 'JavaScript'],
//   ['correct', 3],
//   [true, 'Correct'],
//   [false, 'Try again!'],
// ]);
// console.log(questions);

// // convert object to map
// console.log(Object.entries(openingHours));
// const hoursMap = new Map(Object.entries(openingHours));
// console.log(hoursMap);

// console.log(questions.get('question'));
// for (const [key, value] of questions) {
//   if (typeof key === 'number') console.log(`Answer ${key}: ${value}`);
// };
// // const answer = Number(prompt('Your answer'));
// const answer = 3;
// console.log(answer);
// // answer === questions.get('correct') ? console.log(questions.get(true)) : console.log(questions.get(false));
// console.log(questions.get(questions.get('correct') === answer));

// // convert a map to an array:
// console.log([...questions]);
// console.log([...questions.keys()]);
// console.log([...questions.values()]);



// proprety names:
// for (const day of Object.keys(openingHours)) {
// console.log(day);
// }
// const properties = Object.keys(openingHours);
// // console.log(`We are open ${properties.length} days`);
// let openStr = `We are open ${properties.length} days: `;
// for (const day of properties) openStr += `${day}, `;
// console.log(openStr);

// // Property values
// const values = Object.values(openingHours);
// console.log(values);

// // Entire object
// const entries = Object.entries(openingHours);

// for (const [key, { open, close }] of entries) {
//   console.log(`On ${key} we open at ${open} and close at ${close}`);
// }

// optional chaining
// if (restaurant.openingHours.mon) console.log(restaurant.openingHours.mon.open);

// if (restaurant.openingHours && restaurant.openingHours.mon) console.log(restaurant.openingHours.mon.open);

// // console.log(restaurant.openingHours.mon.open);
// console.log(restaurant.openingHours.mon?.open);
// // example
// const days = ['mon', 'tue', 'wed', 'thur', 'fri', 'sat', 'sun'];
// for (const day of days) {
//   const open = restaurant.openingHours[day]?.open ?? "colsed";
//   console.log(`on ${day}, we open at ${open}`);
// };
// // Methods
// console.log(restaurant.order?.(0, 1)) ?? 'Method does not exists';
// console.log(restaurant.orderRissoto?.(0, 1)) ?? 'Method does not exists';

// // Arrays
// const users = [{ name: 'Jay', email: 'jay@names.com' }];
// // const users = [];
// console.log(users[0]?.name ?? 'Users array is empty');
// // used to doing
// if (users.length > 0) console.log(users[0].name); else console.log('users array is empty');







// restaurant.orderDelivery({ time: '22:30', address: 'George Town, 21', mainIndex: 2, starterIndex: 2 });
// restaurant.orderDelivery({ address: 'George Town, 21' });



// const { name, openingHours, categories } = restaurant;
// console.log(name, openingHours, categories);
// const { name: restaurantName, openingHours: hours, categories: tags } = restaurant;
// console.log(restaurantName, hours, tags);
// //  Default values
// const { menu = [], starterMenu: starters = [] } = restaurant;
// console.log(menu, starters);

// // Mutating variables
// let a = 111;
// let b = 999;
// const obj = { a: 23, b: 7, c: 14 };
// // const { a, b } = obj;
// ({ a, b } = obj);
// console.log(a, b);

// //  Nested objects
// const { fri: { open: o, close: c } } = openingHours;
// console.log(o, c);

// const arr = [7, 8, 9];
// const badArr = [1, 2, arr[0], arr[1], arr[2]];
// console.log(badArr);
// const newArr = [1, 2, ...arr];
// console.log(newArr);

// console.log(...newArr);
// const newMenu = [...restaurant.mainMenu, 'Gnocci'];
// console.log(newMenu);
// console.log(restaurant.mainMenu);

// const mainMenuCopy = [...restaurant.mainMenu];
// // console.log(mainMenuCopy);

// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
// console.log(menu);

// const str = 'Jonas';
// const letters = [...str, ' ', 's.'];
// console.log(letters);
// console.log(...str);

// const ingredients = [prompt("Let's make pasta! Ingredient 1?"), prompt('ingredient 2?'), prompt('ingredient 3?')];
// restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);
// restaurant.orderPasta(...ingredients);

// Objects
// const restaurantCopy = { ...restaurant };
// restaurant.name = 'Roma Cafe';
// console.log(restaurant.name);
// console.log(restaurantCopy.name);

// const newRestaurant = { foundedIn: 1996, ...restaurant, founder: 'Jan' };
// console.log(newRestaurant);

// const [pizza, , risotto, ...otherFoods] = [...restaurant.mainMenu, ...restaurant.starterMenu];
// console.log(pizza, risotto, otherFoods);

// const { sat, ...weekdays } = restaurant.openingHours;
// console.log(weekdays);

// const add = function (...numbers) {
//   let sum = 0;
//   for (let i = 0; i < numbers.length; i++) sum += numbers[i];
//   console.log(sum);
// };
// add(2, 3);
// add(23, 5, 7, 1, 9);

// const x = [2, 56, 9];
// add(...x);

// restaurant.orderPizza('mushrooms', 'onion', 'olives', 'spinach');


// console.log(3 || 'jay');
// console.log('' || 'jay');
// console.log(true || 0);
// console.log(undefined || null);
// console.log(undefined || 0 || '' || 'j' || 0 || null);

// restaurant.numGuests = 23;
// const guest1 = restaurant.numGuests ? restaurant.numGuests : 10;
// console.log(guest1);

// const guest2 = restaurant.numGuests || 10;

// restaurant.numGuests = 0;

// const guest2 = restaurant.numGuests || 10;
// console.log(guest2);
// const guest = restaurant.numGuests ?? 10;
// console.log(guest);


// Coding Challenge #1
/*
We're building a football betting app (soccer for my American friends 😅)!

Suppose we get data from a web service about a certain game (below). In this challenge we're gonna work with the data. So here are your tasks:

1. Create one player array for each team (variables 'players1' and 'players2')
2. The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players
3. Create an array 'allPlayers' containing all players of both teams (22 players)
4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
6. Write a function ('printGoals') that receives an arbitrary number of player names (NOT an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)
7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, WITHOUT using an if/else statement or the ternary operator.

TEST DATA FOR 6: Use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. Then, call the function again with players from game.scored

GOOD LUCK 😀
*/

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski',
    'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
  printGoal: function (...players) {
    console.log(`${players.length} goals were scored by:`);
    for (let i = 0; i < players.length; i++) {
      console.log(players[i]);
    }

  },
};

// const [players1, players2] = game.players;
// console.log(players1, players2);

// // const players2 = game.players[1];
// // const gk= player1[0];
// const [gk, ...fieldPlayers] = players1;
// console.log(gk, fieldPlayers);
// const allPlayers = [...players1, ...players2];
// console.log(allPlayers);
// const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
// console.log(players1Final);
// const { team1, x: draw, team2 } = game.odds;
// console.log(team1, draw, team2);

// game.printGoal('Davies', 'Muller', 'Lewandowski', 'Kimmich');
// game.printGoal(...game.scored);

// team1 < team2 && console.log('Team 1 is more likly to win!');
// team1 > team2 && console.log('Team 2 is more likly to win!');


// The for -of loop

// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
// for (const item of menu) console.log(item);

// for (const item of menu.entries()) {
//   console.log(`${item[0] + 1}: ${item[1]}`);
// }
// for (const [i, el] of menu.entries()) {
// console.log(`${i + 1}: ${el}`);
// }
// console.log(menu.entries());
// console.log(typeof menu.entries());


// Coding Challenge #2:
// 1:
// for (const [i, el] of game.scored.entries()) {
//   console.log(`Goal ${i + 1}: ${el}`);
// };

// // 2:
// const values = Object.values(game.odds);
// let sum = 0;
// for (const value of values) {
//   sum += value;
// };
// console.log(sum / values.length);

// 3:
// Print the 3 odds to the console, but in a nice formatted way, exactly like this:
// Odd of victory Bayern Munich: 1.33
// Odd of draw: 3.25
// Odd of victory Borrussia Dortmund: 6.5

// for (const [key, value] of Object.entries(game.odds)) {
//   const teamStr = key === 'x' ? 'draw' : `victory ${game[key]}`
//   console.log(`Odd of ${teamStr}: ${value}`);
// };


// 4: Create an object called 'scorers' which contains the names of the
// players who scored as properties, and the number of goals as the value

// const scorers = {};
// for (const player of game.scored) {
//   scorers[player] ? scorers[player]++ : (scorers[player] = 1);
// };
// console.log(scorers);

// Sets 
// const ordersSet = new Set(['pizza', 'pizza', 'pasta', 'risotto', 'pasta']);
// console.log(ordersSet);
// console.log(new Set('Jonas'));
// console.log(ordersSet.size);
// console.log(ordersSet.has('pizza'));
// console.log(ordersSet.has('bread'));
// ordersSet.add('Garlic Bread');
// ordersSet.delete('Risotto');
// console.log(ordersSet);
// // ordersSet.clear();
// const staff = ['waiter', 'chef', 'chef', 'manager', 'waiter'];
// const staffUnique = new Set(staff);
// console.log(staffUnique);
// console.log(new Set('jassami').size);


// Coding Challenge #3:

// const gameEvents = new Map([
//   [17, '⚽ GOAL'],
//   [36, '🔁 Substitution'],
//   [47, '⚽ GOAL'],
//   [61, '🔁 Substitution'],
//   [64, '🔶 Yellow card'],
//   [69, '🔴 Red card'],
//   [70, '🔁 Substitution'],
//   [72, '🔁 Substitution'],
//   [76, '⚽ GOAL'],
//   [80, '⚽ GOAL'],
//   [92, '🔶 Yellow card'],
// ]);

// // 1. Create an array 'events' of the different game events that happened.
// console.log([...new Set(gameEvents.values())]);

// // 2.
// gameEvents.delete(64);
// console.log(gameEvents);

// // 3. 
// const time = [...gameEvents.keys()].pop();
// console.log(`An event happened, on average, every ${time / gameEvents.size} minutes.`);

// // 4. 
// for (const [key, value] of gameEvents) {
//   key <= 45 ? console.log(`[FIRST HALF] ${key}: ${value}`) : console.log(`[SECOND HALF] ${key}: ${value}`);
// };
