'use strict';

// Scope Practice

function calcAge(birthYear) {
  const age = 2035 - birthYear;
  // function within a function
  function printAge() {
    let output = `${firstName}, you are ${age}, born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      var millenial = true;
      // Creating NEW variable with same name as outer scope's variable
      const firstName = 'Steven';

      //Reassigning outer scope's variable
      const output = 'NEW OUTPUT!';

      const str = `Oh, and you're a millenial ${firstName}`;
      console.log(str);

      function add(a, b) {
        return a + b;
      }
    }

    // Some of these will work, some won't
    // console.log(str);
    console.log(millenial);
    // console.log(add(2,3));
    console.log(output);
  }
  printAge();
  return age;
}

const firstName = 'Ralph';
calcAge(1995);

// Hoisting and Temporal Dead Zone Practice

// Hoisting with Variables

console.log(me);
// console.log(job);
// console.log(year);

var me = 'Ralph';
let job = 'work';
const year = 1967;

// Hoisting with Functions

console.log(addDecl(2, 3));
// console.log(addExpr(3,4));
console.log(addArrow);
// console.log(addArrow(4,5));

function addDecl(a, b) {
  return a + b;
}

var addExpr = function (a, b) {
  return a + b;
};

var addArrow = (a, b) => a + b;

// Example

if (!numProducts) deleteShoppingCart();

var numProducts = 10;

function deleteShoppingCart() {
  console.log('All products deleted');
}
var x = 1;
let y = 2;
const z = 3;

console.log(x === window.x); // true
console.log(y === window.y); // false
console.log(z === window.z); // false

// 'this' Keyword

console.log(this);

// gets its own "this" keyword
const calcTimeSinceBirth = function (birthYear) {
  console.log(2037 - birthYear);
  console.log(this);
};
calcTimeSinceBirth(1967);

// doesn't get its own "this keyword"
// uses the parents scope (in this case: window)
const calcTimeSinceBirthAgain = birthYear => {
  console.log(2037 - birthYear);
  console.log(this);
};
calcTimeSinceBirthAgain(1967);

const person = {
  year: 1967,
  life: "he's doomed",
  calcAge: function () {
    console.log(this);
    console.log(2037 - this.year);
  },
};
person.calcAge();

//
const human = {
  year: 2017,
};

human.calcAge = person.calcAge;
human.calcAge();

const f = person.calcAge;
console.log(f);

// Regular Functions vs. Arrow Functions

var firstName = 'human';

const homosepian = {
  firstName: 'Hueman',
  year: 3052,
  calcAge: function () {
    console.log(this);
    console.log(2037 - this.year);

    // Solution 1
    const self = this;
    const isMillenial = function () {
      console.log(self.year >= 1981 && self.year <= 1996);
    };

    // Solution 2
    // const isMillenial = () => {
    //     console.log(this.year >= 1981 && this.year <= 1996);
    // }

    isMillenial();
  },
  greet: function () {
    console.log(`Hey ${this.firstName}`);
  },
};
homosepian.greet();
homosepian.calcAge();

// arguments keyword
const addExpr = function (a, b) {
  console.log(arguments);
  return a + b;
};
addExpr(2, 5);

// arguments don't exist in arrow functions
var addArrow = (a, b) => {
  console.log(arguments);
  return a + b;
};
addArrow(2, 5);

// Primitives vs. Objects (Primitive vs. Reference Types)

let age = 30;
let oldAge = age;
age = 31;
console.log(age);
console.log(oldAge);

const p = {
  name: 'Jonah',
  age: 30,
};
const friend = p;
friend.age = 27;
console.log(friend);
console.log(p);

let lastName = 'Williams';
let oldLastName = lastName;
lastName = 'Davis';
console.log(lastName, oldLastName);

const jessica = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
};
const marriedJessica = jessica;
marriedJessica.lastName = 'Davis';
console.log('Before marriage: ', jessica);
console.log(`After marriage: `, marriedJessica);

// Copying objects
const jessica2 = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
  family: ['Alice', 'Bob'],
};

const jessicaCopy = Object.assign({}, jessica2);
jessicaCopy.lastName = 'Davis';
console.log(`Before marriage:`, jessica2);
console.log(`After marriage:`, jessicaCopy);

jessicaCopy.family.push('Mary');
jessicaCopy.family.push('John');

console.log(jessica2);
console.log(jessicaCopy);
