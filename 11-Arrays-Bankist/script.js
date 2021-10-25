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

////////////////////////////////////
/////////// DOM Elements ///////////
////////////////////////////////////

const displayMovements = function (movements, sort = false) {
  containerMovements.innerHTML = '';

  const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;

  movs.forEach((movement, i) => {
    const type = movement > 0 ? 'deposit' : 'withdrawal';

    const html = `
    <div class="movements__row">
      <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
      <div class="movements__value">${movement}€</div>
    </div>
    `;
    // insert html updates
    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${acc.balance}€`;
};

const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${incomes}€`;

  const out = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc - mov, 0);
  labelSumOut.textContent = `${out}€`;

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter(inter => inter >= 1)
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = `${interest}€`;
};

const createUsernames = function (user) {
  user.forEach(acc => {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};
createUsernames(accounts);

const updateUI = function (acc) {
  // Display movements
  displayMovements(acc.movements);

  // Display balance
  calcDisplayBalance(acc);

  // Display summary
  calcDisplaySummary(acc);
};

// Event handler
let currentAccount;

btnLogin.addEventListener('click', function (e) {
  // Prevent form from submitting
  e.preventDefault();

  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );

  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    // Display UI and welcome message
    labelWelcome.textContent = `Welcome back ${
      currentAccount.owner.split(' ')[0]
    }`;
    containerApp.style.opacity = 100;

    // Clear input fields
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();

    // Update UI
    updateUI(currentAccount);
  }
});

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();

  const amount = Number(inputTransferAmount.value);
  const transferTo = accounts.find(
    acc => acc.username === inputTransferTo.value
  );
  inputTransferAmount.value = inputTransferTo.value = '';

  if (
    amount > 0 &&
    transferTo &&
    currentAccount.balance >= amount &&
    transferTo.username !== currentAccount.username
  ) {
    // Do the transfer
    currentAccount.movements.push(-amount);
    transferTo.movements.push(amount);

    // Update UI
    updateUI(currentAccount);
  }
});

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();

  const amount = Number(inputLoanAmount.value);

  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    // Add movement
    currentAccount.movements.push(amount);

    // Update UI
    updateUI(currentAccount);

    inputLoanAmount.value = '';
  }
});

// Closing the account
btnClose.addEventListener('click', function (e) {
  e.preventDefault();

  if (
    inputCloseUsername.value === currentAccount.username &&
    Number(inputClosePin.value) === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      acc => acc.username === currentAccount.username
    );

    // Delete account
    accounts.splice(index, 1);

    // Clear inputs
    inputClosePin.value = inputCloseUsername.value = '';

    // Hide UI
    containerApp.style.opacity = 0;
  }
});

let sorted = false;
btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  displayMovements(currentAccount.movements, !sorted);
  sorted = !sorted;
});

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////
/*

////////////////////////////////////
/////// Simple Array Methods ///////
////////////////////////////////////
let arr = ['a', 'b', 'c', 'd', 'e'];

console.log(arr.slice(0, 3));
console.log(arr.slice(2));
console.log(arr.slice(-2));

// neither is necessarily better, just preference
console.log(arr.slice());
console.log([...arr]);

// SPLICE
// console.log(arr.splice(3));
console.log(arr.splice(-1));
console.log(arr.splice(1, 2));
console.log(arr);

// REVERSE
arr = ['a', 'b', 'c', 'd', 'e'];
const arr2 = ['j', 'i', 'h', 'g', 'f'];
console.log(arr2.reverse());
console.log(arr2);

// CONCAT
const letters = arr.concat(arr2);
console.log(letters);
// concat pushes 2 arrays together, spreading just prints out their contents
console.log(...arr, ...arr2);

// JOIN
console.log(letters.join('-'));
*/

//////////////////////////////////
///////////// forEach ////////////
//////////////////////////////////

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
/*
for (const [i, movement] of movements.entries()) {
  if (movement > 0) {
    console.log(`Movement ${i + 1}: You deposited ${movement}`);
  } else {
    console.log(`Movement ${i + 1}: You withdrew ${Math.abs(movement)}`);
  }
}

console.log('---- FOREACH ----');
movements.forEach((mov, index, array) => {
  if (mov > 0) {
    console.log(`Movement ${index + 1}: You deposited ${mov}`);
  } else {
    console.log(`Movement ${index + 1}: You withdrew ${Math.abs(mov)}`);
  }
});
*/
/////////////////////////////////
///// forEach - Maps & Sets /////
/////////////////////////////////
/*
const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

currencies.forEach((value, key, map) => {
  console.log(`${key}: ${value}`);
});

// Set
const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR']);
console.log(currenciesUnique);
currenciesUnique.forEach((value, _, map) => {
  // The second parameter is redundant for sets, but was implemented as such due to following the similar syntax of the forEach() method
  console.log(`${value}: ${value}`);
});
*/
////////////////////////////////
//////// The map Method ////////
////////////////////////////////
/*
const eurToUSD = 1.1;
// Function based way of doing this
// const movementsUSD = movements.map(function (element) {
//   return element * eurToUSD;
// });

const movementsUSD = movements.map(element => element * eurToUSD);

console.log(movements);
console.log(movementsUSD);

// For loop to do it
// let movementsUSDfor = [];
// for (const mov of movements) {
//   movementsUSDfor.push(mov * eurToUSD);
// }
// console.log(movementsUSDfor);

const movementDescriptions = movements.map(
  (mov, i, arr) =>
    `Movement ${i + 1}: You ${mov > 0 ? 'deposited' : 'withdrew'} ${Math.abs(
      mov
    )}`
);

console.log(movementDescriptions);
*/
///////////////////////////////
////// The filter Method //////
///////////////////////////////
/*
const deposits = movements.filter(mov => mov > 0);
const withdrawals = movements.filter(mov => mov < 0);
console.log(movements);
console.log(deposits);
console.log(withdrawals);
*/
///////////////////////////////
////// The reduce Method //////
///////////////////////////////
/*
console.log(movements);
// .reduce(prevValue, curValue, index, array) {...,[starting value]}
// accumulator -> SNOWBALL
const balance = movements.reduce((acc, cur) => acc + cur, 0);
console.log(balance);

// comparison for loop
let bal2 = 0;
for (const mov of movements) bal2 += mov;
console.log(bal2);

// Max value of array
const max = movements.reduce(
  (acc, cur) => (acc > cur ? acc : cur),
  movements[0]
);
console.log(max);
*/
//////////////////////////////
////// Chaining Methods //////
//////////////////////////////
/*
const totalDepositsUSD = movements
  .filter(mov => mov > 0)
  .map(mov => mov * 1.1)
  .reduce((acc, mov) => acc + mov, 0);
console.log(totalDepositsUSD);
*/
/////////////////////////////
////// The find Method //////
/////////////////////////////
/*
const firstWithdrawal = movements.find(mov => mov < 0);
console.log(movements);
console.log(firstWithdrawal);

console.log(accounts);

const account = accounts.find(acc => acc.owner === 'Jessica Davis');
console.log(account);
*/
////////////////////////////
////// some and every //////
////////////////////////////
/*
console.log(movements);

// Equality
console.log(movements.includes(-130));

// Some: Condition
console.log(movements.some(mov => mov === -130));

const anyDeposits = movements.some(mov => mov > 0);
console.log(anyDeposits);

// Every
console.log(movements.every(mov => mov > 0));
console.log(account4.movements.every(mov => mov > 0));

// Separate callback
const deposit = mov => mov < 0;
console.log(movements.some(deposit));
console.log(movements.every(deposit));
console.log(movements.filter(deposit));
*/
//////////////////////////////
////// flat and flatMap //////
//////////////////////////////
/*
const arr = [[1, 2, 3], [4, 5, 6], 7, 8];
console.log(arr.flat());

const arrDeep = [[[1, 2], 3], [4, [5, 6]], 7, 8];
console.log(arrDeep.flat(2));

// flat
const overallBalance = accounts
  .map(acc => acc.movements)
  .flat()
  .reduce((acc, mov) => acc + mov, 0);
console.log(overallBalance);

// flatMap
const overallBalance2 = accounts
  .flatMap(acc => acc.movements)
  .reduce((acc, mov) => acc + mov, 0);
console.log(overallBalance2);
*/
//////////////////////////////
/////// Sorting Arrays ///////
//////////////////////////////
/*
// Strings
const owners = ['John', 'Jack', 'Booth', 'Bob'];
console.log(owners.sort());

// Numbers
console.log(movements);

// return < 0, A before B       (keep order)
// else return > 0, B before A  (switch order)

// Ascending Order
// movements.sort((a, b) => {
//   if (a > b) return 1;
//   if (b > a) return -1;
// });
// Short hand
movements.sort((a, b) => a - b);
console.log(movements);
// Descending Order
// movements.sort((a, b) => {
//   if (a > b) return -1;
//   if (b > a) return 1;
// });
// Short hand
movements.sort((a, b) => b - a);
console.log(movements);
*/
///////////////////////////////////////////
/////// Creating and Filling Arrays ///////
///////////////////////////////////////////
/*
// Empty arrays with fill method
const x = new Array(7);
console.log(x);
x.fill(20);
console.log(x);
x.fill(1, 3, 5);
console.log(x);

// Array.from
const y = Array.from({ length: 7 }, () => 1);
console.log(y);

const z = Array.from({ length: 7 }, (_, i) => i + 1);
console.log(z);

labelBalance.addEventListener('click', function () {
  const movementsUI = Array.from(
    document.querySelectorAll('.movements__value'),
    ele => Number(ele.textContent.replace('€', ''))
  );

  console.log(movementsUI);

  const movementsUI2 = [...document.querySelectorAll('.movements__value')];
});
*/
//////////////////////////////////////
/////// Array Methods Practice ///////
//////////////////////////////////////
/*
// 1.
const bankDepositSum = accounts
  .flatMap(acc => acc.movements)
  .filter(mov => mov > 0)
  .reduce((sum, cur) => sum + cur, 0);
console.log(bankDepositSum);

// 2.
// const numDeposits1000 = accounts
//   .flatMap(acc => acc.movements)
//   .filter(mov => mov > 1000);

const numDeposits1000 = accounts
  .flatMap(acc => acc.movements)
  .reduce((count, cur) => (cur >= 1000 ? ++count : count), 0);
console.log(numDeposits1000);

// 3.
const { deposits, withdrawals } = accounts
  .flatMap(acc => acc.movements)
  .reduce(
    (sums, cur) => {
      // cur > 0 ? (sums.deposits += cur) : (sums.withdrawals += cur);
      sums[cur > 0 ? 'deposits' : 'withdrawals'] += cur;
      return sums;
    },
    { deposits: 0, withdrawals: 0 }
  );

console.log(deposits, withdrawals);

// 4.
// this is a nice title -> This Is a Nice Title
const convertTitleCase = function (title) {
  const capitalize = str => str[0].toUpperCase() + str.slice(1);

  const exceptions = ['a', 'an', 'the', 'but', 'or', 'on', 'in', 'with'];

  const titleCase = title
    .toLowerCase()
    .split(' ')
    .map(word => (exceptions.includes(word) ? word : capitalize(word)))
    .join(' ');

  return capitalize(titleCase);
};
console.log(convertTitleCase('this is a nice title'));
console.log(convertTitleCase('this is a LONG title but not too long'));
console.log(convertTitleCase('EXAMPLEs will always cOnTiNuE'));

*/
/*******************************
 *******CODING CHALLENGES*******
 ******************************/
/*
// Challenge #1

// Test Data
const jD1 = [3, 5, 2, 12, 7];
const kD1 = [4, 1, 15, 8, 3];
const jD2 = [9, 16, 6, 8, 3];
const kD2 = [10, 5, 6, 1, 4];

const checkDogs = function (dogsJulia, dogsKate) {
  dogsJulia = dogsJulia.splice(1, 2);
  const dogs = dogsJulia.concat(dogsKate);
  console.log(dogs);
  dogs.forEach((dog, index) => {
    if (dog >= 3) {
      console.log(`Dog number ${index} is an adult, and is ${dog} years old`);
    } else {
      console.log(`Dog number ${index} is still a puppy 🐶`);
    }
  });
};
checkDogs(jD1, kD1);
checkDogs(jD2, kD2);
*/

// Challenge #2
/*
// Test Data
const d1 = [5, 2, 4, 1, 15, 8, 3];
const d2 = [16, 6, 10, 5, 6, 1, 4];

const calcAverageHumanAge = function (ages) {
  const humanAges = ages.map(age => (age <= 2 ? 2 * age : 16 + age * 4));
  const adults = humanAges.filter(age => age >= 18);

  // Another way of doing average
  // const average = adults.reduce(
  //   (acc, age, _, arr) => acc + age / arr.length,
  //   0
  // );

  const average = adults.reduce((acc, age) => acc + age, 0) / adults.length;
  return average;
};

console.log(calcAverageHumanAge(d1));
console.log(calcAverageHumanAge(d2));
*/

// Challenge #3
/*
// Test Data
const d1 = [5, 2, 4, 1, 15, 8, 3];
const d2 = [16, 6, 10, 5, 6, 1, 4];

const calcAverageHumanAgeChained = function (ages) {
  const chainedAges = ages
    .map(age => (age <= 2 ? 2 * age : 16 + age * 4))
    .filter(age => age >= 18)
    .reduce((acc, age, _, arr) => acc + age / arr.length, 0);
  return chainedAges;
};

console.log(calcAverageHumanAgeChained(d1));
console.log(calcAverageHumanAgeChained(d2));
*/

// Challenge #4
/*
// Test Data
const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] },
];

// 1.
dogs.forEach(dog => {
  dog.recommendedFood = Math.round(dog.weight ** 0.75 * 28);
});

// 2.
const sarahDog = dogs.find(dog => dog.owners.includes('Sarah'));

console.log(
  `Sarah's dog is eating too ${
    sarahDog.curFood > sarahDog.recommendedFood ? 'much' : 'little'
  }`
);

// 3.
const ownersEatTooMuch = dogs
  .filter(dog => dog.curFood > dog.recommendedFood)
  .flatMap(dog => dog.owners);

const ownersEatTooLittle = dogs
  .filter(dog => dog.curFood < dog.recommendedFood)
  .flatMap(dog => dog.owners);

// 4.
console.log(`${ownersEatTooMuch.join(' and ')} dogs eat too much!`);
console.log(`${ownersEatTooLittle.join(' and ')} dogs eat too little!`);

// 5.
console.log(dogs.some(dog => dog.curFood === dog.recommendedFood));

// 6.

const checkEating = dog =>
  dog.curFood > dog.recommendedFood * 0.9 &&
  dog.curFood < dog.recommendedFood * 1.1;

console.log(dogs.some(checkEating));

// 7.
console.log(dogs.filter(checkEating));

// 8.
const dogsCopy = dogs
  .slice()
  .sort((a, b) => a.recommendedFood - b.recommendedFood);
console.log(dogsCopy);
*/
