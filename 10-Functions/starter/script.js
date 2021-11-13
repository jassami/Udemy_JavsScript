'use strict';

// const bookings = [];
// const createBooking = function (flightNum, numPassengers = 3, price = 199 * 1.2) {
//     const booking = {
//         flightNum,
//         numPassengers,
//         price
//     };
//     console.log(booking);
//     bookings.push(booking);
// };
// createBooking('LH123');
// createBooking('LH123', 3, 800);
// createBooking('LH123', undefined, 1000);


// const flight = 'LH234';
// const jonas = {
//     fullName: 'Jonas Schmedtmann',
//     passport: 123456789
// };

// const checkIn = function (flightNum, passenger) {
//     flightNum = 'LH999';
//     passenger.fullName = 'Mr. ' + passenger.fullName;
//     if (passenger.passport === 123456789) {
//         alert('Checked in!')
//     } else {
//         alert('Wrong Passport!')
//     };
// };
// checkIn(flight, jonas);
// console.log(flight);
// console.log(jonas);

// // the result is because this is the same as doing:
// const flightNum = flight;
// const passenger = jonas;

// const oneWord = function (str) {
//     return str.replaceAll(' ', '').toLowerCase();
// };

// const upperFirstWord = function (str) {
//     const [first, ...other] = str.split(' ');
//     return [first.toUpperCase(), ...other].join(' ');
// };

// const transformer = function (str, fn) {
//     console.log(str);
//     console.log(fn(str));
//     console.log(fn.name);
// };

// transformer('JavaScript is the best!', upperFirstWord);
// transformer('JavaScript is the best!', oneWord);

// const high5 = function () {
//     console.log(':D');
// };

// document.body.addEventListener('click', high5);
// ['jay', 'sam', 'tom'].forEach(high5);

// const greet = function (greeting) {
//     return function (name) {
//         console.log(`${greeting} ${name}`);
//     };
// };
// const greeterHay = greet('Hay');
// greeterHay('Jonas');
// greet('Hello')('Hado');

// const greetArr = (greeting) => (name) => console.log(`${greeting} ${name}`);
// greetArr('Salam')('Emily');



const lufthansa = {
    airline: 'Lufthansa',
    iataCode: 'LH',
    bookings: [],
    // book: function(){}
    book(flightNum, name) {
        console.log(`${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`);
        this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
    },
};
// lufthansa.book(239, 'Jonas Schmedtmann');
// lufthansa.book(653, 'Sally Super');
// console.log(lufthansa);

const eurowings = {
    airline: 'Eurowings',
    iataCode: 'EW',
    bookings: [],

};
// const book = lufthansa.book;
// the following will be undefined because the book function is now a regular function call, and the this keyword points to undefined
// book(23, 'Sarah Williams');

// the call method
// book.call(eurowings, 23, 'Sam One');
// console.log(eurowings);

// book.call(lufthansa, 239, 'Mary Cooper');
// console.log(lufthansa);

const swiss = {
    airline: 'Swiss Air Lines',
    iataCode: 'LX',
    bookings: [],
};

// book.call(swiss, 245, 'Sarah Lee');
// console.log(swiss);

// the apply method
// const flightData = [235, 'Hana Three'];
// book.apply(swiss, flightData);
// console.log(swiss);
// better:
// book.call(swiss, ...flightData);


// the bind method:
// book.call(eurowings, 23, 'Sam One');
// const bookEW = book.bind(eurowings);
// bookEW(23, 'Hadi Oaks');

// const bookLH = book.bind(lufthansa);
// const bookLX = book.bind(swiss);

// const bookEW23 = book.bind(eurowings, 23);
// bookEW23('Jay Sab');
// bookEW23('Sally Five');

// with event listener
// lufthansa.planes = 300;
// lufthansa.buyPlane = function () {
//     console.log(this);
//     this.planes++;
//     console.log(this.planes);
// };
// lufthansa.buyPlane();
// document.querySelector('.buy').addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

// partial application
// const addTax = (rate, value) => value + value * rate;
// console.log(addTax(0.1, 200));

// const addVAT = addTax.bind(null, 0.23);
// // addVAT = value => value + value * rate

// console.log(addVAT(100));
// console.log(23);

// // function returns a function:
// const addTax2 = function (rate) {
//     return function (value) {
//         console.log(value + value * rate);
//     };
// };
// const addVAT2 = addTax2(0.23);
// addVAT2(100);
// addVAT2(23);

// Coding Challenge #1:
// const poll = {
//     question: "What is your favourite programming language?",
//     options: ["0: JavaScript", "1: Python", "2: Rust", "3:C++"],
//     // This generates [0, 0, 0, 0]. More in the next section!
//     answers: new Array(4).fill(0),
//     registerNewAnswer() {
//         const answer = Number(prompt(`${this.question}\n${this.options.join('\n')}\n(Write option number)`));
//         // this.answers[answer]++;
//         typeof answer === 'number' && answer < this.answers.length && this.answers[answer]++;
//         // console.log(this.answers);
//         this.displayResults();
//         this.displayResults('string');

//     },
//     displayResults: function (type = 'array') {
//         if (type === 'array') {
//             console.log(this.answers);
//         } else if (typeof type === 'string') {
//             console.log(`Poll results are ${this.answers.join(', ')}`);
//         };
//     },
// };

// document.querySelector('.poll').addEventListener('click', poll.registerNewAnswer.bind(poll));

// // [5, 2, 3];
// // [1, 5, 3, 9, 6, 1]
// // we don't want the this kw to go to the answer array, instead we want it to point to [5,2,3] array:
// poll.displayResults.call({ answers: [5, 2, 3] });
// poll.displayResults.call({ answers: [1, 5, 3, 9, 6, 1] });
// poll.displayResults.call({ answers: [5, 2, 3] }, 'string');
// poll.displayResults.call({ answers: [5, 2, 3] }, 'string');

// redo coding challenge#1:
// const poll = {
//     question: "What is your favourite programming language?",
//     options: ["0: JavaScript", "1: Python", "2: Rust", "3:C++"],
//     // This generates [0, 0, 0, 0]. More in the next section!
//     answers: new Array(4).fill(0),
//     registerNewAnswer() {
//         const answer = Number(prompt(`${this.question}\n${this.options.join('\n')}\n(Write option number)`));
//         typeof answer === 'number' && answer < this.answers.length && this.answers[answer]++;
//         // console.log(this.answers);
//         this.displayResults();
//         this.displayResults('string');
//     },
//     displayResults(type = 'array') {
//         if (type === 'array') {
//             console.log(this.answers);
//         } else if (type === 'string') {
//             console.log(`Poll results are ${this.answers.join(', ')}`);
//         };
//     },
// };
// // poll.registerNewAnswer();
// document.querySelector('.poll').addEventListener('click', poll.registerNewAnswer.bind(poll));

// // [5, 2, 3];
// // // [1, 5, 3, 9, 6, 1]
// poll.displayResults.call({ answers: [5, 2, 3] });
// poll.displayResults.call({ answers: [5, 2, 3] }, 'string');
// poll.displayResults.call({ answers: [1, 5, 3, 9, 6, 1] });
// poll.displayResults.call({ answers: [1, 5, 3, 9, 6, 1] }, 'string');

//Closures:

// const secureBooking = function () {
//     let passengerCount = 0;
//     return function () {
//         passengerCount++;
//         console.log(`${passengerCount} passengers`);
//     };
// };

// const booker = secureBooking();

// booker();
// booker();
// booker();
// // to see the closure:
// console.dir(booker);


// let f;
// const g = function () {
//     const a = 23;
//     f = function () {
//         console.log(a * 2);
//     };
// };
// g();
// f();
// const h = function () {
//     const b = 777;
//     f = function () {
//         console.log(b * 2);
//     };
// };
// h();
// f();

// // example 2 with timers
// const boardPassengers = function (n, wait) {
//     // const perGroup = n / 3;

//     setTimeout(function () {
//         console.log(`We are now boarding all ${n} passengers`);
//         console.log(`There are 3 groups, each with ${perGroup} passengers`);
//     }, wait * 1000);

//     console.log(`Will start boarding in ${wait} seconds`);
// };
// const perGroup = 1000;
// boardPassengers(180, 3);


// Coding Challenge #2:

(function () {
    const header = document.querySelector('h1');
    header.style.color = 'red';
    document.body.addEventListener('click', function () {
        header.style.color = 'blue';
    })
})();
