'use strict';
//////////////////////////////////////////////////
///// Constructor Functions and new Operator /////
//////////////////////////////////////////////////

/*

// Constructor
const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;

  // Never create method in constructor function
  //   this.calcAge = function () {
  //     console.log(2037 - this.birthYear);
  //   };
};

const james = new Person('James', 1986);

console.log(james);

const matilda = new Person('Matilda', 2017);
const jack = new Person('Jack', 1975);
console.log(matilda, jack);
// instanceof
console.log(james instanceof Person);

*/

//////////////////////////////////////////////
///////////////// Prototypes /////////////////
//////////////////////////////////////////////

/*

// Uses code from previous section

console.log(Person.prototype);

Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

james.calcAge();
matilda.calcAge();
jack.calcAge();

console.log(james.__proto__);
console.log(james.__proto__ === Person.prototype);

console.log(Person.prototype.isPrototypeOf(james));
console.log(Person.prototype.isPrototypeOf(matilda));
console.log(Person.prototype.isPrototypeOf(Person));

Person.prototype.species = 'Homo Sapiens';
console.log(james.species, matilda.species, jack);

console.log(james.hasOwnProperty('firstName'));
console.log(james.hasOwnProperty('species'));

*/

////////////////////////////////////////////////////
////////////// Prototypal Inheritance //////////////
////////////////////////////////////////////////////

/*

// Uses code from previous sections

console.log(james.__proto__);
console.log(james.__proto__.__proto__);
console.log(james.__proto__.__proto__.__proto__);

console.dir(Person.prototype.constructor);

const arr = [3, 6, 4, 5, 6, 9, 3, 5, 4, 6, 7, 8, 9, 1, 2, 3, 4, 5];
console.log(arr.__proto__);
console.log(arr.__proto__ === Array.prototype);

console.log(arr.__proto__.__proto__);

Array.prototype.unique = function () {
  return [...new Set(this)];
};

console.log(arr.unique().sort());

const h1 = document.querySelector('h1');
console.log(h1);

*/

/////////////////////////////////////////
////////////// ES6 Classes //////////////
/////////////////////////////////////////

/*

// class expression
// const PersonCl = class {};

// class declaration
class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  calcAge() {
    console.log(2037 - this.birthYear);
  }

  greet() {
    console.log(`Hey ${this.fullName}`);
  }

  set fullName(name) {
    if (name.includes(' ')) this._fullName = name;
    else alert(`${name} is not a full name!`);
  }

  get fullName() {
    return this._fullName;
  }

  // Static method
  static hey() {
    console.log('hola senor');
  }
}

// const jessica = new PersonCl('Jessica', 1996);

*/

///////////////////////////////////////////////
////////////// Getters & Setters //////////////
///////////////////////////////////////////////

/*

const account = {
  owner: 'James',
  movements: [200, 530, 120, 300],

  // get is needed to define it as a getter method
  get latest() {
    return this.movements.slice(-1).pop();
  },

  // set is needed to define it as a setter method
  set latest(mov) {
    this.movements.push(mov);
  },
};

console.log(account.latest);
account.latest = 640;
console.log(account.movements);
console.log(account.latest);

*/

/////////////////////////////////////////////
////////////// Object.create() //////////////
/////////////////////////////////////////////

/*

const PersonProto = {
  calcAge() {
    console.log(2037 - this.birthYear);
  },
  // not a constructor, just a manual way of initializing the object
  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const steven = Object.create(PersonProto);
console.log(steven);
steven.name = 'Steven';
steven.birthYear = 2002;
steven.calcAge();

console.log(steven.__proto__ === PersonProto);

const sarah = Object.create(PersonProto);
sarah.init('Sarah', 1979);
sarah.calcAge();
console.log(sarah);

*/

/////////////////////////////////////////////
//////// Inheritance Between Classes ////////
/////////////////////////////////////////////

/*

const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

const Student = function (firstName, birthYear, course) {
  Person.call(this, firstName, birthYear);
  this.course = course;
};

// Linking Prototypes
Student.prototype = Object.create(Person.prototype);

Student.prototype.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
};

const mike = new Student('Mike', 2020, 'Computer Science');
mike.introduce();
mike.calcAge();

console.log(mike.__proto__);
console.log(mike.__proto__.__proto__);

console.log(mike instanceof Student);
console.log(mike instanceof Person);
console.log(mike instanceof Object);

Student.prototype.constructor = Student;
console.dir(Student.prototype.constructor);

// Freeze testing (I got intrigued)
// Can't unfreeze an object once it is frozen
/*
Object.freeze(mike);
console.log(Object.isFrozen(mike));
mike.firstName = 'Michael';
Object.freeze(mike);
console.log(mike.firstName);

*/

/////////////////////////////////////////////
////// Inheritance Between ES6 Classes //////
/////////////////////////////////////////////

/*

class StudentCl extends PersonCl {
  constructor(fullName, birthYear, course) {
    // Always first to allow "this" to work properly
    super(fullName, birthYear);
    this.course = course;
  }

  introduce() {
    console.log(`My name is ${this.fullName} and I study ${this.course}`);
  }

  calcAge() {
    console.log(
      `I'm ${
        2037 - this.birthYear
      } years old, but as a student I feel more like ${
        2037 - this.birthYear + 10
      }`
    );
  }
}

const martha = new StudentCl('Martha Jones', 2012, 'Computer Science');
console.log(martha);
martha.introduce();
martha.calcAge();

*/

///////////////////////////////////////////////
////// Inheritance Between Object.create //////
///////////////////////////////////////////////

/*

// Taken from previous section
const PersonProto = {
  calcAge() {
    console.log(2037 - this.birthYear);
  },
  // not a constructor, just a manual way of initializing the object
  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const steven = Object.create(PersonProto);

const StudentProto = Object.create(PersonProto);

StudentProto.init = function (firstName, birthYear, course) {
  PersonProto.init.call(this, firstName, birthYear);
  this.course = course;
};

StudentProto.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
};

const jay = Object.create(StudentProto);
jay.init('Jay', 2010, 'Computer Science');
jay.introduce();
jay.calcAge();

*/

////////////////////////////////////////
///////////// More Classes /////////////
////////////////////////////////////////

/*

class Account {
  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this.pin = pin;
    this.total = 0;
    this.movements = [];
    this.locale = navigator.language;

    console.log(`Thanks for opening an account, ${owner}`);
  }

  deposit(val) {
    this.total += val;
    this.movements.push(val);
  }

  withdraw(val) {
    this.total -= val;
    this.movements.push(-val);
  }

  approveLoan(val) {
    if (val < this.total * 100) return true;
    else return false;
  }

  requestLoan(val) {
    if (this.approveLoan(val)) {
      this.deposit(val);
      console.log(`Loan approved`);
    } else {
      console.log(`Loan is too high, not approved`);
    }
  }
}

const acc1 = new Account('Jonas', 'EUR', 1111);
acc1.deposit(250);
acc1.withdraw(140);
console.log(acc1);
console.log(acc1.movements);

acc1.requestLoan(10000);
console.log(acc1);

*/

///////////////////////////////////////////////////
///////////// Protected Encapsulation /////////////
///////////////////////////////////////////////////

/*

// stole some code from previous section to make it easier
// yes it is more annoying uncommenting everything above rather than just copy and pasting the parts I need
class Account {
  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this._pin = pin;
    // Protected property (yes the '_' means it's protected)
    this._movements = [];
    this.locale = navigator.language;

    console.log(`Thanks for opening an account, ${owner}`);
  }

  // Public interface
  getMovements() {
    return this._movements;
  }

  deposit(val) {
    this._movements.push(val);
  }

  withdraw(val) {
    this._movements.push(-val);
  }
}

const acc1 = new Account('Jonas', 'EUR', 1111);
acc1.deposit(250);
acc1.withdraw(140);
console.log(acc1);
console.log(acc1.getMovements());

*/

/////////////////////////////////////////////////
///////////// Private Encapsulation /////////////
/////////////////////////////////////////////////

/*

// 4 different types
// Private fields
// Private static fields
// Private methods
// Private static methods

class Account {
  // Public fields (instances)
  locale = navigator.language;

  // Private fields (instances)
  #movements = [];
  #pin;

  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this.#pin = pin;
    // Protected property (yes the '_' means it's protected)
    // this._movements = [];
    // this.locale = navigator.language;

    console.log(`Thanks for opening an account, ${owner}`);
  }

  // Public interface
  getMovements() {
    return this.#movements;
  }

  deposit(val) {
    this.#movements.push(val);
  }

  withdraw(val) {
    this.#movements.push(-val);
  }

  // Private method
  // it works, but it is stored as an instance rather than a method
  #approveLoan(val) {
    return true;
  }

  requestLoan(val) {
    return this.#approveLoan(val);
  }
}

const acc1 = new Account('Jonas', 'EUR', 1111);
acc1.deposit(250);
acc1.withdraw(140);
console.log(acc1);
console.log(acc1.getMovements());

console.log(acc1.requestLoan(150));

// this will now throw an error because movements is private
// console.log(acc1.#movements);
// console.log(acc1.#pin);
// console.log(acc1.#approveLoan(2000));

*/

////////////////////////////////////////
/////////////// Chaining ///////////////
////////////////////////////////////////

/*

class Account {
  // Public fields (instances)
  locale = navigator.language;

  // Private fields (instances)
  #movements = [];
  #pin;
  #total = 0;

  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this.#pin = pin;
    // Protected property (yes the '_' means it's protected)
    // this._movements = [];
    // this.locale = navigator.language;

    console.log(`Thanks for opening an account, ${owner}`);
  }

  // Public interface
  getMovements() {
    return this.#movements;
  }

  getTotal() {
    return this.#total;
  }

  deposit(val) {
    this.#movements.push(val);
    this.#total += val;
    return this;
  }

  withdraw(val) {
    this.#movements.push(-val);
    this.#total -= val;
    return this;
  }

  // Private method
  // it works, but it is stored as an instance rather than a method
  #approveLoan(val) {
    if (val < this.#total * 100) {
      this.#total += val;
      return true;
    } else {
      return false;
    }
  }

  requestLoan(val) {
    if (this.#approveLoan(val)) {
      this.deposit(val);
      console.log(`Loan approved`);
      return this;
    } else {
      console.log(`Loan denided`);
    }
  }
}

const acc1 = new Account('James', 'USA', 1234);

// will not work because 'undefined' gets returned
acc1.deposit(300).deposit(500).withdraw(250).requestLoan(5000).withdraw(400);
console.log(acc1.getMovements());
console.log(acc1.getTotal());

*/

/***********************************************/
/////////////////////////////////////////////////
//////////////  Coding Challenges  //////////////
/////////////////////////////////////////////////
/***********************************************/

/*

// #1
const car = function (make, speed) {
  this.make = make;
  this.speed = speed;
  console.log(`${make} is going ${speed} km/hr`);
};

car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(this.speed + ' km/h');
};

car.prototype.brake = function () {
  this.speed -= 5;
  console.log(this.speed + ' km/h');
};
/*
const bmw = new car('BMW', 120);
bmw.accelerate();
bmw.accelerate();
bmw.brake();
bmw.brake();

const merc = new car('Mercedes', 95);
merc.brake();
merc.brake();
merc.accelerate();

*/

// #2

/*

class carCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  accelerate() {
    this.speed += 10;
    console.log(`${this.speed / 1.6} mi/h`);
  }

  brake() {
    this.speed -= 5;
    console.log(`${this.speed / 1.6} mi/h`);
    return this;
  }

  get speedUS() {
    return this.speed / 1.6;
  }

  set speedUS(speed) {
    this.speed = speed * 1.6;
  }
}

const ford = new carCl('Ford', 120);
ford.accelerate();
console.log(ford.speedUS);
ford.speedUS = 100;
console.log(ford.speedUS);
ford.brake();

*/

// #3

/*

const EV = function (make, speed, charge) {
  car.call(this, make, speed);
  this.charge = charge;
};

EV.prototype = Object.create(car.prototype);

EV.prototype.chargeBattery = function (chargeTo) {
  if (chargeTo > 100) {
    console.log(
      `It is impossible to charge a battery to ${chargeTo}% unless you want your ${this.make} to explode.`
    );
  } else {
    this.charge = chargeTo;
    console.log(`Battery charged to ${chargeTo}%`);
  }
};

EV.prototype.accelerate = function () {
  this.speed += 20;
  this.charge -= 1;
  console.log(
    `Tesla going at ${this.speed} km/h, with a charge of ${this.charge}%`
  );
};

const tesla = new EV('Tesla', 120, 23);
tesla.accelerate();
tesla.brake();
tesla.brake();
tesla.chargeBattery(150);
tesla.chargeBattery(90);
tesla.accelerate();

*/

// #4

/*

class EVCl extends carCl {
  #charge;
  constructor(make, speed, charge) {
    super(make, speed);
    this.#charge = charge;
  }

  accelerate() {
    this.speed += 20;
    this.#charge -= 1;
    console.log(
      `Tesla going at ${this.speed} km/h, with a charge of ${this.#charge}%`
    );
    return this;
  }

  chargeBattery(chargeTo) {
    if (chargeTo > 100) {
      console.log(
        `It is impossible to charge a battery to ${chargeTo}% unless you want your ${this.make} to explode.`
      );
    } else {
      this.#charge = chargeTo;
      console.log(`Battery charged to ${this.#charge}%`);
    }
    return this;
  }
}

const Rivian = new EVCl('Rivian', 120, 23);
Rivian.accelerate().accelerate().chargeBattery(50).brake().brake().accelerate();
console.log(Rivian.make);
console.log(Rivian.speed);
// Only one that outputs undefined because it is a private instance
console.log(Rivian.charge);
*/
