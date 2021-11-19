'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

const displayMovements = function (movements, sort = false) {
  containerMovements.innerHTML = '';

  const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;
  movs.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    const html = `<div class="movements__row">
    <div class="movements__type movements__type--${type}">${i + 1} ${type}</div>
    <div class="movements__value">${mov}€</div>
    </div>`;
    containerMovements.insertAdjacentHTML('afterbegin', html);

  });
};
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// displayMovements(account1.movements);
// console.log(containerMovements.innerHTML);

const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, cur) => acc += cur, 0);
  labelBalance.textContent = `${acc.balance}€`;
};
// calcDisplayBalance(account1.movements);

const calcDisplaySummary = function (account) {
  const incomes = account.movements.filter(mov => mov > 0).reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = incomes;
  const out = account.movements.filter(mov => mov < 0).reduce((acc, mov) => acc + Math.abs(mov), 0);
  labelSumOut.textContent = `${out}€`;
  const interest = account.movements.filter(mov => mov > 0).map(mov => mov * account.interestRate / 100).filter(mov => mov >= 1).reduce((acc, mov) => acc + mov, 0);
  labelSumInterest.textContent = `${interest}€`;
};
// calcDisplaySummary(account1.movements)


// compute the usernames
const createUsername = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner.toLowerCase().split(' ').map(name => name[0]).join('');
  });
};
createUsername(accounts);
console.log(accounts);

const updateUI = function (acc) {
  displayMovements(acc.movements);
  calcDisplayBalance(acc);
  calcDisplaySummary(acc);
};

// Event handler (inlog)
let currentAccount;
btnLogin.addEventListener('click', function (e) {
  e.preventDefault();
  currentAccount = accounts.find(acc => acc.username === inputLoginUsername.value);

  // console.log(currentAccount);
  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    labelWelcome.textContent = `Welcome back, ${currentAccount.owner.split(' ')[0]}`;
    containerApp.style.opacity = 100;
    // clear input fields
    inputLoginUsername.value = inputLoginPin.value = '';
    // get rid of the curser
    inputLoginPin.blur();
    updateUI(currentAccount);
  };
});

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const recieverAcc = accounts.find(acc => acc.username === inputTransferTo.value);
  console.log(amount, recieverAcc);
  inputTransferAmount.value = inputTransferTo.value = '';
  if (amount > 0 && currentAccount.balance >= amount && recieverAcc && recieverAcc?.username !== currentAccount.username) {
    currentAccount.movements.push(-amount);
    recieverAcc.movements.push(amount);
    updateUI(currentAccount);
  }
});

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(inputLoanAmount.value);
  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    currentAccount.movements.push(amount);
    updateUI(currentAccount);
  }
  inputLoanAmount.value = '';
})

btnClose.addEventListener('click', function (e) {
  e.preventDefault();
  if (currentAccount.username === inputCloseUsername.value && currentAccount && currentAccount.pin === Number(inputClosePin.value)) {
    const index = accounts.findIndex(acc => acc.username === currentAccount.username);
    // delete account
    accounts.splice(index, 1);
    // hide UI
    containerApp.style.opacity = 0;
  }
})

let sorted = false;
btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  displayMovements(currentAccount.movements, !sorted);
  sorted = !sorted;
});
// the reduce method

// const balance = movements.reduce(function (acc, cur, i, arr) {
//   console.log(`Iteration ${i}: ${acc}`);
//   return acc + cur
// }, 0);
// console.log(balance);



// const balance = movements.reduce((acc, cur, i, arr) => acc + cur, 0);
// console.log(balance);

// let balance2 = 0;
// for (const mov of movements) balance2 += mov;
// console.log(balance2);

// maximum value
// const max = movements.reduce((acc, mov) => {
//   if (acc > mov) return acc;
//   else return mov;
// }, movements[0]);
// console.log(max);
// const max = movements.reduce((acc, mov) => acc > mov ? acc : mov, movements[0]);
// console.log(max);

// const deposits = movements.filter(function (mov) {
//   return mov > 0;
// });
// console.log(movements);
// console.log(deposits);

// const withdrawals = movements.filter(mov => mov < 0);
// console.log(withdrawals);
// const user = 'Steven Thomas Williams';
// const username = user.toLowerCase().split(' ').map(name => name[0]).join('');

// console.log(username);

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);



/////////////////////////////////////////////////

// let arr = ['a', 'b', 'c', 'd', 'e'];

// console.log(arr.slice(2));
// console.log(arr.slice(2, 4));
// console.log(arr.slice(-2));
// console.log(arr.slice(-1));
// console.log(arr.slice(1, -2));
// console.log(arr.slice());
// console.log([...arr]);

// // splice
// arr.splice(-1);
// console.log(arr);
// arr.splice(1, 2);
// console.log(arr);

// arr = ['a', 'b', 'c', 'd', 'e'];
// const arr2 = ['j', 'i', 'h', 'g', 'f'];
// console.log(arr2.reverse());
// console.log(arr2);

// const letters = arr.concat(arr2);
// console.log(letters);
// console.log([...arr, ...arr2]);

// console.log(letters.join('-'));

// // the at method
// const arr3 = [23, 11, 64];
// console.log(arr3[0]);
// console.log(arr3.at(0));

// console.log(arr3[arr3.length - 1]);
// console.log(arr3.slice(-1)[0]);
// console.log(arr3.at(-1));

// console.log('jonas'.at(-1));
// console.log('jonas'.at(0));

// Looping arrys: for Each
// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// for (const [i, movement] of movements.entries()) {
//   if (movement > 0) {
//     console.log(`Movement ${i + 1}: You deposited ${movement}`);
//   } else {
//     console.log(`Movement ${i + 1}: You withdrew ${Math.abs(movement)}`);
//   };
// };
// console.log('------------------------');

// movements.forEach(function (movement, i, arr) {
//   if (movement > 0) {
//     console.log(`Movement ${i + 1}: You deposited ${movement}`);
//   } else {
//     console.log(`Movement ${i + 1}: You withdrew ${Math.abs(movement)}`);
//   };
// });

// forEach on map and sets:

// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);
// currencies.forEach(function (value, key, map) {
//   console.log(`${key}: ${value}`);
// });

// // set:
// const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR']);
// console.log(currenciesUnique);
// currenciesUnique.forEach(function (value, _, set) {
//   console.log(`${value}: ${value}`);
// });

// coding challenge #1
// const checkDogs = function (arr1, arr2) {
//   const newarr1 = [...arr1];
//   console.log(newarr1);
//   newarr1.splice(0, 1);
//   newarr1.splice(-2);
//   console.log(newarr1);
//   const dogs = [...newarr1, ...arr2];
//   // const dogs= newarr1.concat(arr2);
//   console.log(dogs);
//   dogs.forEach(function (age, i) {
//     age >= 3 ? console.log(`Dog number ${i + 1} is an adult, and is ${age} years old`) : console.log(`Dog number ${i + 1} is still a puppy`);
//   });
// };

// checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);
// console.log('--------------------------');
// checkDogs([9, 16, 6, 8, 3], [10, 5, 6, 1, 4]);

// The map method
// const eurToUsd = 1.1;

// const movementsArr = movements.map(mov => mov * eurToUsd);
// console.log(movementsArr);

// const movementsUSD = movements.map(function (mov) {
//   return mov * eurToUsd;
// });
// console.log(movements);
// console.log(movementsUSD);

// const movementsUSDfor = [];
// for (const mov of movements) movementsUSDfor.push(mov * eurToUsd);
// console.log(movementsUSDfor);

// const movementsDescriptions = movements.map((mov, i) => `Movement ${i + 1}: You ${mov > 0 ? 'deposited' : 'withdrew'} ${Math.abs(mov)}`);
// console.log(movementsDescriptions);

// Challenge #2

// const calcAverageHumanAge = function (ages) {
//   const humanAges = ages.map(age => (age <= 2 ? 2 * age : 16 + age * 4));
//   const adultDogs = humanAges.filter(age => age >= 18);
//   console.log(humanAges);
//   console.log(adultDogs);
//   const average = adultDogs.reduce((acc, age) => acc + age, 0) / adultDogs.length;
//   return average;
// };
// console.log(calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]));
// console.log('---------------------');
// console.log(calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]));
// // const avg1 = calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
// // const avg2 = calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);

// Coding challenge #3:
// const calcAverageHumanAge = ages => ages.map(age => age <= 2 ? 2 * age : 16 + age * 4).filter(age => age >= 18).reduce((acc, age, i, arr) => acc + age / arr.length, 0);
// const avg1 = calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
// const avg2 = calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);
// console.log(avg1, avg2);

// chaining methods

// const eurToUsd = 1.1;
// const totalDepositUSD = movements.filter(mov => mov > 0).map(mov => mov * eurToUsd).reduce((acc, mov) => acc + mov, 0);
// console.log(totalDepositUSD);

// the find method:
// const firstWithdrawal = movements.find(mov => mov < 0);
// console.log(firstWithdrawal);
// console.log(accounts);
// const account = accounts.find(acc => acc.owner === 'Jessica Davis');
// console.log(account);

// for (const acc of accounts) {
//   if (acc.owner === 'Jessica Davis') console.log(account);
// };

//  the some method
// console.log(movements);
// console.log(movements.includes(-130));
// console.log(movements.some(mov => mov > 0));

// const arr = [[1, 2, 3], [4, 5, 6], 7, 8];
// console.log(arr.flat());
// const arrDeep = [[[1, 2], 3], [4, [5, 6]], 7, 8];
// console.log(arrDeep.flat(1));
// console.log(arrDeep.flat(2));

// const accountMovments = accounts.map(acc => acc.movements);
// const allMovments = accountMovments.flat();
// const overallBalance = allMovments.reduce((acc, cur) => acc + cur, 0);
// console.log(overallBalance);

// const overallBalance1 = accounts.map(acc => acc.movements).flat().reduce((acc, cur) => acc + cur, 0);
// console.log(overallBalance1);
// // flatMap method
// const overallBalance2 = accounts.flatMap(acc => acc.movements).reduce((acc, cur) => acc + cur, 0);
// console.log(overallBalance2);

// Sorting Arrays
// const owners = ['Jonas', 'Zack', 'Adam', 'Martha'];
// console.log(owners.sort());
// console.log(owners);
// const nums = [-1, 3, 5, -14, 30];
// console.log(nums.sort());

// // Ascending
// movements.sort((a, b) => {
//   if (a > b) return 1;
//   if (a < b) return -1;
// });
// console.log(movements);

// movements.sort((a, b) => a - b);
// console.log(movements);
// // Descending
// movements.sort((a, b) => {
//   if (a > b) return -1;
//   if (a < b) return 1;
// });
// console.log(movements);

// movements.sort((a, b) => b - a);
// console.log(movements);

// fill method:
// const arr = [1, 2, 3, 4, 5, 6, 7];
// console.log(arr);
// console.log(new Array(1, 2, 3, 4, 5, 6, 7));

// console.log(new Array(7));
// const x = new Array(7);
// x.fill(1, 3, 5);
// console.log(x);

// arr.fill(25, 3, 5);
// console.log(arr);

// const y = Array.from({ length: 7 }, () => 1);
// console.log(y);

// const z = Array.from({ length: 7 }, (_, i) => i + 1);
// console.log(z);

// labelBalance.addEventListener('click', function () {
//   const movementsUI = Array.from(
//     document.querySelectorAll('.movements__value'), mov => Number(mov.textContent.replace('€', ''))
//   );
//   console.log(movementsUI);
// })

// practice:
// 1.
// const bankDepositSum = accounts.flatMap(acc => acc.movements).filter(mov => mov > 0).reduce((acc, cur) => acc + cur, 0);
// console.log(bankDepositSum);

// // 2. 
// const numDeposits1000 = accounts.flatMap(acc => acc.movements).filter(mov => mov >= 1000).length;
// console.log(numDeposits1000);
// const num2Deposits1000 = accounts.flatMap(acc => acc.movements).reduce((acc, mov) => mov >= 1000 ? acc + 1 : acc, 0);
// console.log(num2Deposits1000);
// const num3Deposits1000 = accounts.flatMap(acc => acc.movements).reduce((acc, mov) => mov >= 1000 ? ++acc : acc, 0);
// console.log(num3Deposits1000);

// // 3.
// const { deposits, withdrawals } = accounts.flatMap(acc => acc.movements).reduce((acc, cur) => {
//   // cur > 0 ? (acc.deposits += cur) : (acc.withdrawals += cur);
//   acc[cur > 0 ? 'deposits' : 'withdrawals'] += cur;
//   return acc;
// }, { deposits: 0, withdrawals: 0 });
// console.log(deposits, withdrawals);

// // 4.
// // this is a nice title --> This Is a Nice Title
// const convertTitleCase = function (title) {
//   const capitalize = str => str[0].toUpperCase() + str.slice(1);

//   const exceptiopns = ['a', 'an', 'and', 'but', 'the', 'or', 'on', 'in', 'with'];
//   const titleCase = title.toLowerCase().split(' ')
//     .map(word => exceptiopns.includes(word) ? word : capitalize(word)).join(' ');
//   return capitalize(titleCase);
// };
// console.log(convertTitleCase('this is a nice title'));
// console.log(convertTitleCase('this is a LONG title but not too long'));
// console.log(convertTitleCase('and here is another title with an EXAMPLE'));
