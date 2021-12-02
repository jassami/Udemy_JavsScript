'use strict';

// const Person = function (firstName, birthYear) {
//     // create a property on this keyword
//     // Instance poroperties
//     this.firstName = firstName;
//     this.birthYear = birthYear;
// };

// const jonas = new Person('Jonas', 1991);
// console.log(jonas);

// //  1. new {} is created
// //  2. function is called, this= {}
// //  3. {} linked to prototype
// //  4. function automatically return {} but filled 
// const may = new Person('May', 2013);
// const jack = new Person('Jack', 1987);
// console.log(may, jack);
// console.log(jonas instanceof Person);

// Person.hey = function () {
//     console.log('Hey there 👋');
//     console.log(this);
// }

// Person.hey();

// // Prototypes
// console.log(Person.prototype);
// Person.prototype.calcAge = function () {
//     console.log(2037 - this.birthYear);
// };

// jonas.calcAge();

// console.log(jonas.__proto__);
// console.log(jonas.__proto__ === Person.prototype);
// console.log(Person.prototype.isPrototypeOf(jonas));
// console.log(Person.prototype.isPrototypeOf(Person));

// Person.prototype.species = 'Homo Sapiens';
// console.log(jonas.species);

// console.log(jonas.hasOwnProperty('firstName'));
// console.log(jonas.hasOwnProperty('species'));

// console.log(jonas.__proto__.__proto__);
// console.log(Person.prototype.__proto__);

// console.dir(Person.prototype.constructor);

// const arr = [3, 6, 6, 9, 4, 5, 6, 9, 3];
// console.log(arr.__proto__);
// console.log(arr.__proto__ === Array.prototype);
// console.log(arr.__proto__.__proto__);

// Array.prototype.unique = function () {
//     return [...new Set(this)];
// }
// console.log(arr.unique());

// const h1 = document.querySelector('h1');
// console.dir(h1);


// class PersonCl {
//     constructor(fullName, birthYear) {
//         this.fullName = fullName;
//         this.birthYear = birthYear;
//     }
//     // Instance methods
//     // Methods will ba added to the .prototype property
//     calcAge() {
//         console.log(2037 - this.birthYear);
//     }
//     greet() {
//         console.log(`Hey ${this.firstName}`);
//     }

//     get age() {
//         return 2037 - this.birthYear;
//     }
//     set fullName(name) {
//         console.log(name);
//         if (name.includes(' ')) this._fullName = name;
//         else alert(`${name} is not a full name!`)
//     }
//     get fullName() {
//         return this._fullName;
//     }
//     // Static method
//     static hey() {
//         console.log('Hey there 👋');
//         console.log(this);
//     }

// }
// const jessica = new PersonCl('Jessica Davis', 1996);
// console.log(jessica);
// jessica.calcAge();
// console.log(jessica.age);

// // PersonCl.prototype.greet = function () {
// //     console.log(`Hey ${this.firstName}`);
// // }
// jessica.greet();

// const walter = new PersonCl('Walter White', 1965);

// const account = {
//     owner: 'Jonas',
//     movements: [200, 530, 120, 300],

//     get latest() {
//         return this.movements.slice(-1).pop();
//     },

//     set latest(mov) {
//         this.movements.push(mov)
//     }
// };

// console.log(account.latest);
// account.latest = 50;
// console.log(account.movements);


// const PersonProto = {
//     calcAge() {
//         console.log(2037 - this.birthYear);
//     },
// init(firstName, birthYear){
// this.firstName=firstName;
// this.birthYear= birthYear;
// },
// };

// const steven = Object.create(PersonProto);
// console.log(steven);
// steven.name = "Steven";
// steven.birthYear = 2002;
// steven.calcAge();



// class PersonCl {
//     constructor(fullName, birthYear) {
//         this.fullName = fullName;
//         this.birthYear = birthYear;
//     }
//     // Instance methods
//     // Methods will ba added to the .prototype property
//     calcAge() {
//         console.log(2037 - this.birthYear);
//     }
//     greet() {
//         console.log(`Hey ${this.fullName}`);
//     }

//     get age() {
//         return 2037 - this.birthYear;
//     }
//     set fullName(name) {
//         console.log(name);
//         if (name.includes(' ')) this._fullName = name;
//         else alert(`${name} is not a full name!`)
//     }
//     get fullName() {
//         return this._fullName;
//     }
//     // Static method
//     static hey() {
//         console.log('Hey there 👋');
//         console.log(this);
//     }
// };

// class StudentCl extends PersonCl {
//     constructor(fullName, birthYear, course) {
//         super(fullName, birthYear);
//         this.course = course;
//     }
//     interduce() {
//         console.log(`My name is ${this.fullName} and I study ${this.course}`);
//     }
//     calcAge() {
//         console.log(`I'm ${2037 - this.birthYear} years old, but i feel more like ${2037 - this.birthYear + 10}`);
//     }
// };

// // const martha = new StudentCl('Martha Jones', 2012);
// const martha = new StudentCl('Martha Jones', 2012, 'Computer science');
// console.log(martha);
// martha.interduce();
// martha.calcAge();


// const PersonProto = {
//     calcAge() {
//         console.log(2037 - this.birthYear);
//     },
//     init(firstName, birthYear) {
//         this.firstName = firstName;
//         this.birthYear = birthYear;
//     },
// };

// const steven = Object.create(PersonProto);

// const StudentProto = Object.create(PersonProto);
// StudentProto.init = function (firstName, birthYear, course) {
//     PersonProto.init.call(this, firstName, birthYear);
//     this.course = course;
// };

// StudentProto.interduce = function () {
//     console.log(`My name is ${this.firstName} and I study ${this.course}`);
// }

// const jay = Object.create(StudentProto);
// jay.init('Jay', 2010, 'Computer Science');
// jay.interduce();
// jay.calcAge();


// const Person = function (firstName, birthYear) {
//     this.firstName = firstName;
//     this.birthYear = birthYear;
// };

// Person.prototype.calcAge = function () {
//     console.log(2037 - this.birthYear);
// };

// const Student = function (firstName, birthYear, course) {
//     Person.call(this, firstName, birthYear);
//     this.course = course;
// };

// Student.prototype = Object.create(Person.prototype);

// Student.prototype.interduce = function () {
//     console.log(`My name is ${this.firstName} and I study ${this.course}`);
// }

// const mike = new Student('Mike', 2020, 'Computer Science');
// mike.interduce();
// mike.calcAge();

// console.log(mike.__proto__);
// console.log(mike.__proto__.__proto__);

// console.log(mike instanceof Student);
// console.log(mike instanceof Person);
// console.log(mike instanceof Object);

// Student.prototype.constructor = Student;
// console.log(Student.prototype.constructor);



// class Account {
//     constructor(owner, currency, pin) {
//         this.owner = owner;
//         this.currency = currency;
//         this._pin = pin;
//         this._movements = [];
//         this.locale = navigator.language;

//         console.log(`Thank you for opening an account ${owner}`);
//     }
//     // Publis interface
//     getMovements() {
//         return this._movements;
//     }

//     deposit(val) {
//         this._movements.push(val);
//     }
//     withdraw(val) {
//         this.deposit(-val);
//     }
//     approveLoan(val) {
//         return true;
//     }
//     requestLoan(val) {
//         if (this.approveLoan(val)) {
//             this.deposit(val);
//             console.log(`Loan Approved for $${val}`);
//         }
//     }
// }

// const acc1 = new Account('Jonas', 'EUR', 1111);
// acc1.deposit(250);
// acc1.withdraw(140);
// acc1.requestLoan(1000);


// console.log(acc1);


// Truly private classes and methods:

// class Account {
//     // 1- public fields
//     locale = navigator.language;

//     // 2- Private fileds
//     #movements = [];
//     #pin;
//     constructor(owner, currency, pin) {
//         this.owner = owner;
//         this.currency = currency;
//         this.#pin = pin;
//         // this._movements = [];
//         // this.locale = navigator.language;

//         console.log(`Thank you for opening an account ${owner}`);
//     }
//     // 3- public methods
//     // Publis interface
//     getMovements() {
//         return this.#movements;
//     }

//     deposit(val) {
//         this.#movements.push(val);
//         return this;
//     }
//     withdraw(val) {
//         this.deposit(-val);
//         return this;
//     }
//     // There is also the static version of them all, the four
//     static helper() {
//         console.log('Helper');
//     }
//     // 4- Private methods
//     // #approveLoan(val) {
//     _approveLoan(val) {
//         return true;
//     }
//     requestLoan(val) {
//         if (this._approveLoan(val)) {
//             this.deposit(val);
//             console.log(`Loan Approved for $${val}`);
//             return this;
//         }
//     }
// }

// const acc1 = new Account('Jonas', 'EUR', 1111);
// acc1.deposit(250);
// acc1.withdraw(140);
// acc1.requestLoan(1000);

// Account.helper();
// console.log(acc1);
// // console.log(acc1.#movements);
// // console.log(acc1.#pin);
// // console.log(acc1.#approveLoan);

// acc1.deposit(300).deposit(500).withdraw(35).requestLoan(25000).withdraw(4000);
// console.log(acc1.getMovements());



// Coding chalenge #1
// Data car 1: 'BMW' going at 120 km/h
// Data car 2: 'Mercedes' going at 95 km/h

// const Car = function (make, speed) {
//     this.make = make;
//     this.speed = speed;
// };

// Car.prototype.accelerate = function () {
//     this.speed += 10;
//     console.log(`This ${this.make} is going ${this.speed} k/m per hour.`);
// };

// Car.prototype.break = function () {
//     console.log(this.speed -= 5);
// };
// const bmw = new Car('BMW', 120);
// const mer = new Car('Mercedes', 95);
// bmw.accelerate();
// bmw.break();
// mer.accelerate();
// mer.break();

// // Coding challenge#2

// class CarCl {
//     constructor(make, speed) {
//         this.make = make;
//         this.speed = speed;
//     }
//     accelerate() {
//         this.speed += 10;
//         console.log(`This ${this.make} is going ${this.speed} k/m per hour.`);
//     }
//     break() {
//         this.speed -= 5;
//         console.log(this.speed);
//     }
//     get speedUS() {
//         return this.speed / 1.6;
//     }
//     set speedUS(speed) {
//         this.speed = speed * 1.6;
//     }
// };

// const ford = new CarCl('Ford', 120);
// ford.accelerate();
// ford.break();
// console.log(ford.speedUS);
// ford.speedUS = 50;
// console.log(ford);


// // Coding Challenge#3

// const Car = function (make, speed) {
//     this.make = make;
//     this.speed = speed;
// };

// Car.prototype.accelerate = function () {
//     this.speed += 10;
//     console.log(`This ${this.make} is going ${this.speed} k/m per hour.`);
// };

// Car.prototype.break = function () {
//     console.log(this.speed -= 5);
// };

// const EV = function (make, speed, charge) {
//     Car.call(this, make, speed);
//     this.charge = charge;
// };

// EV.prototype = Object.create(Car.prototype);
// EV.prototype.constructor = EV;

// EV.prototype.chargeBattery = function (chargeTo) {
//     this.charge = chargeTo;
//     console.log(`Charge is ${this.charge}`);
// }

// EV.prototype.accelerate = function () {
//     this.speed += 20;
//     this.charge -= 1;
//     console.log(`${this.make} going at ${this.speed} km/h, with a chrge of ${this.charge}`);
// };

// const tesla = new EV('Tesla', 140, 23);
// tesla.accelerate();
// tesla.break();
// tesla.chargeBattery(50);


// Coding Challenge#4:
class CarCl {
    constructor(make, speed) {
        this.make = make;
        this.speed = speed;
    }
    accelerate() {
        this.speed += 10;
        console.log(`This ${this.make} is going ${this.speed} km/hour.`);
    }
    break() {
        this.speed -= 5;
        console.log(this.speed);
        return this;
    }
    get speedUS() {
        return this.speed / 1.6;
    }
    set speedUS(speed) {
        this.speed = speed * 1.6;
    }
};

class EVCl extends CarCl {
    #charge
    constructor(make, speed, charge) {
        super(make, speed);
        this.#charge = charge;
    }
    chargeBattery(chargeTo) {
        this.#charge = chargeTo;
        console.log(`Charge is ${this.#charge}`);
        return this;
    }
    accelerate() {
        this.speed += 20;
        this.#charge -= 1;
        console.log(`${this.make} going at ${this.speed} km/h, with a charge of ${this.#charge}`);
        return this;
    }
};

const rivian = new EVCl('Rivian', 120, 23);
console.log(rivian);
rivian.accelerate().accelerate().accelerate().break().chargeBattery(50).accelerate();
console.log(rivian.speedUS);