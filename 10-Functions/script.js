'use strict';

/*
///////////////////////////////////
//////// Default Parameters ///////
///////////////////////////////////

const bookings = [];

const createBooking = function (
  flightNum,
  passengerNum = 1,
  price = 199 * passengerNum
) {
  const booking = {
    flightNum,
    passengerNum,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};

createBooking('LH123');
createBooking('HI897', 20, 900);
createBooking('asdf54', 5);
createBooking('as415', undefined, 1000);
*/

///////////////////////////////////
/////// Value vs. Reference ///////
///////////////////////////////////
/*
const flight = 'LH234';
const person = {
  name: 'James Bond',
  passport: Math.trunc(Math.random() * 11000000),
};

const checkIn = function (flightNum, passenger) {
  // flightNum is the reference
  flightNum = 'AS666';
  passenger.name = 'Mr. ' + passenger.name;

  if (passenger.passport === person.passport) {
    alert('Checked in');
  } else {
    alert('Wrong passport');
  }
};
// flight is still its original value because it was only changed in the function using a reference variable
// checkIn(flight, person);
// console.log(flight);
// console.log(person);

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 1000000000);
};
newPassport(person);
checkIn(flight, person);
console.log(person.passport);
*/

////////////////////////////////////
///// Accepting Callback Funcs /////
////////////////////////////////////
/*
const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};

// Higher-order function
const transformer = function (str, fn) {
  console.log(`Original string: ${str}`);
  console.log(`Transformed string: ${fn(str)}`);

  console.log(`Transformed by: ${fn.name}`);
};
transformer('JavaScrit is the best!', upperFirstWord);
transformer('JavaScrit is the best!', oneWord);

// JS uses callbacks all the time
const high5 = function () {
  console.log('🦓🐦');
};

// Examples of callbacks built-in to JS
document.body.addEventListener('click', high5);

['James', 'Will', 'Jason'].forEach(high5);
*/

/////////////////////////////////////
///// Functions Returning Funcs /////
/////////////////////////////////////
/*
const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};
const greeterHello = greet('Hello');
greeterHello('James');
greeterHello('John');

greet('Hey')('Bruce');

// Challenge - Turn greet into arrow functions
const greeter = greeting => {
  return name => console.log(`${greeting} ${name}`);
};
greeter('Hello')('Mr. Bond');
*/

/////////////////////////////////////
///// Functions Returning Funcs /////
/////////////////////////////////////
/*
const Leonardo = {
  airline: 'Leon',
  iataCode: 'LH',
  bookings: [],
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};

Leonardo.book(1234, 'DaVinci');
Leonardo.book(566, 'DiCaprio');
console.log(Leonardo);

const angel = {
  airline: 'Haven',
  iataCode: 'HV',
  bookings: [],
};

const book = Leonardo.book;

// book(23, 'Mark');  DOESN'T WORK

// Call method
book.call(angel, 55, 'Michael');
book.call(Leonardo, 566, 'DiCaprio');

const swiss = {
  airline: 'Swiss Air Lines',
  iataCode: 'LX',
  bookings: [],
};

book.call(swiss, 88, 'Felix');

// Apply method
const flightData = [744, 'George Lopez'];
book.apply(swiss, flightData);

book.call(swiss, ...flightData);

/////////////////////////////////////
////////// The Bind Method //////////
/////////////////////////////////////
// Use data from previous section
const bookAH = book.bind(angel);
const bookSW = book.bind(swiss);
const bookLO = book.bind(Leonardo);

bookAH(23, 'Jack The Ripper');

// Pre-defining parts of a function with the bind method
// const bookAH66 = book.bind(angel, 66);
// bookAH66('Jason');

// With Event Listeners
Leonardo.planes = 300;
Leonardo.buyPlane = function () {
  console.log(this);
  this.planes++;
  console.log(this.planes);
};
document
  .querySelector('.buy')
  .addEventListener('click', Leonardo.buyPlane.bind(Leonardo));

// Partial application

const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

const addVAT = addTax.bind(null, 0.23);
console.log(addVAT(100));

// Challenge - Rewrite the example but using a func to return another func
const challengeAT = function (rate) {
  return function (value) {
    return value + value * rate;
  };
};
const addVAT2 = challengeAT(0.23);
console.log(addVAT2(100));
*/

/////////////////////////////////////
//////////////// IIFE ///////////////
/////////////////////////////////////
// Immediately Invoked Function Expressions
/*
// Normal function
// const runOnce = function () {
//   console.log('I buried it in the ...');
// };

// IIFE
(function () {
  console.log('I buried it in the ...');
})();

(() => console.log('treeeaaasssuuuurrrrreeeeee'))();

// secure block for consts and accessible values defined by var
{
  const isPrivate = 23;
  var notPrivate = 46;
}

// console.log(isPrivate);
console.log(notPrivate);
*/

////////////////////////////////////
///////////// Closures /////////////
////////////////////////////////////
// A closure gives a function access to all the variables of its parent function, even after that parent function has returned. The function keeps a reference to its outer scope, which preserves the scope chain throughout time
/*
const secureBooking = function () {
  let passengerCount = 0;

  return function () {
    passengerCount++;
    console.log(`${passengerCount} passengers`);
  };
};

const booker = secureBooking();

booker();
booker();
booker();
booker();

console.dir(booker);


// Example 1
let f;
const g = function () {
  const a = 23;
  f = function () {
    console.log(a * 2);
  };
};

const h = function () {
  const b = 777;
  f = function () {
    console.log(b * 2);
  };
};

g();
f();
// Re-assigning f
h();
f();

// Example 2
const boardPassengers = function (n, wait) {
  const pergroup = n / 3;

  setTimeout(function () {
    console.log(`We are now boarding all ${n} passengers`);
    console.log(`There are 3 groups, each with ${pergroup} passengers`);
  }, wait * 1000);

  console.log(`Will start boarding in ${wait} seconds`);
};

boardPassengers(180, 10);
*/
/*******************************
 *******CODING CHALLENGES*******
 ******************************/

// Challenge #1
/*

const poll = {
  question: 'What is your favorite programming language?',
  options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
  // This generates [0,0,0,0]. More in the next section
  answers: new Array(4).fill(0),
  registerNewAnswer() {
    const answer = Number(
      prompt(`${this.question}\n${this.options.join('\n')}`)
    );

    if (Number.isInteger(answer) && 0 <= answer && answer <= 3) {
      this.answers[answer]++;
      displayResults(this.answers);
    } else {
      alert("You didn't answer with a valid number");
    }
  },
};

const displayResults = function (type = []) {
  if (typeof type === 'object') {
    console.log(type);
  } else if (typeof type === 'string') {
    console.log(`Poll results are ${type}`);
  } else {
    console.log('Invalid Input. Terminating...');
  }
};

const testData1 = [5, 2, 3];
displayResults(testData1);
displayResults('1, 5, 3, 9, 6, 1');

document
  .querySelector('.poll')
  .addEventListener('click', poll.registerNewAnswer.bind(poll));
*/

// Challenge #2
/*
(function () {
  const header = document.querySelector('h1');
  header.style.color = 'red';

  document.querySelector('body').addEventListener('click', function () {
    header.style.color = 'blue';
  });
})();
*/
