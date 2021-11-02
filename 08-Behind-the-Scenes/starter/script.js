'use strict';

// function calcAge(birthYear) {
//     const age = 2037 - birthYear;

//     function printAge() {
//         let output = `${firstName}, you are ${age}, born in ${birthYear}`;
//         console.log(output);

//         if (birthYear >= 1981 && birthYear <= 1996) {
//             var millenial = true;
//             const str = `Oh, and you're a millenial, ${firstName}`;
//             console.log(str);

//             function add(a, b) {
//                 return a + b;
//             }
//             const output = 'New output';
//         }
//         console.log(millenial);
//         console.log(output);
//         // console.log(add(2, 3)); this will only work if the strict mode is of, otherwise the function is not defined here.
//     }
//     printAge();

//     return age;
// }

// const firstName = 'Jonas';
// calcAge(1991);

//  Hoisting and TDZ
//  hosting with variables
// console.log(me);
// // console.log(job);
// console.log(year);

// var me = 'Jonas';
// let job = 'teacher';
// const year = 1991;

//  Hoisting with functions: declarational, expertion, and arrow functions
// console.log(addDecl(2, 3));
// // console.log(addExpr(2, 3));
// console.log(addArrow(2, 3));

// function addDecl(a, b) {
//     return a + b;
// }

// const addExpr = function (a, b) {
//     return a + b;
// }

// var addArrow = (a, b) => a + b;

// example for fitfull of hoisting

// if (!numProducts) deleteShoppingCart();
// var numProducts = 10;
// function deleteShoppingCart() {
//     console.log('All products are deleted!');
// }

// var x = 1;
// let y = 2;
// const z = 3;

// console.log(x === window.x);
// console.log(y === window.y);

// The this keyword

// console.log(this);

// const calcAge = function (birthYear) {
//     console.log(2037 - birthYear);
//     console.log(this);
// }
// calcAge(1991);

// const calcArrow = (birthYear) => {
//     console.log(2037 - birthYear);
//     console.log(this);
// }
// calcArrow(1985);

// const jonas = {
//     year: 1991,
//     calcAge: function () {
//         console.log(this);
//         console.log(2037 - this.year);
//     }
// };
// jonas.calcAge();

// const matilda = {
//     year: 2017,
// }

// matilda.calcAge = jonas.calcAge;
// console.log(matilda);
// // this is method borrowing
// matilda.calcAge();

// const f = jonas.calcAge;
// console.log(f);
// f();


// var firstName = 'Matilda';
// const jonas = {
//     firstName: 'Jonas',
//     year: 1991,
//     calcAge: function () {
//         console.log(this);
//         console.log(2037 - this.year);
//     },
//     greet: () => {
//         console.log(this);
//         console.log(`Hey ${this.firstName}`);
//     },
// };
// jonas.greet();


const jonas = {
    firstName: 'Jonas',
    year: 1991,
    calcAge: function () {
        // console.log(this);
        console.log(2037 - this.year);

        // const self = this;
        // const isMellenial = function () {
        //     console.log(self);
        //     console.log(self.year >= 1981 && self.year <= 1996);
        // };

        const isMellenial = function () {
            console.log(this);
            console.log(this.year >= 1981 && this.year <= 1996);
        };

        isMellenial();
    },
    greet: () => {
        console.log(this);
        console.log(`Hey ${this.firstName}`);
    },
};
jonas.greet();
jonas.calcAge();

