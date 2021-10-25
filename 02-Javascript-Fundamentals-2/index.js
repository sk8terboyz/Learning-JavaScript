/**
 * Shane Kennedy
 * Javascript Fundamentals 2
 */


// strict mode
// protects the user from using variable names that may be used already or are planned to be used
// 'use strict';

let hasDriversLicense = false;
const passTest = true;
// const interface = 'Audio';       // won't work
if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log('I can drive');

// functions
function logger() {
    console.log('My name is Jonas');
}
// calling the function
logger();

function fruitProcessor(apples, oranges) {
    console.log(apples, oranges);
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}
console.log(fruitProcessor(5, 8));


// Function Declarations vs Expressions
// Function Declaration
function calcAge(birthYear) {
    return 2037 - birthYear;
}
console.log(calcAge(2000));

// Function Expression
const age = function (birthYear) {
    return 2037 - birthYear
}
console.log(age(2000));

// Arrow function
const calcAge3 = birthYear => 2037 - birthYear;
console.log(calcAge3(37));

const yearsUntilRetirement = (birthYear, firstName) => {
    const age = calcAge3(birthYear);
    const retirement = 65 - age;
    // return retirement;
    return `${firstName} retires in ${retirement} years`;
}
console.log(yearsUntilRetirement(2000, 'Jeff'));

// Function calling other functions
function cutFruit(fruit) {
    return fruit * 4;
}
function fruitProcessor(apples, oranges) {
    const applePieces = cutFruit(apples);
    const orangePieces = cutFruit(oranges);
    const juice = `Juice with ${applePieces} pieces of apples and ${orangePieces} pieces of oranges.`;
    return juice;
}
console.log(fruitProcessor(5, 8));

// Introduction to Arrays
const friends = ['Michael', 'Steven', 'Peter'];
console.log(friends);

const years = new Array(1992, 1996, 1998, 2000, 2020, 2022)
console.log(years);

console.log(friends[0], years[5]);
console.log(friends.length, years.length);
console.log(years[friends.length]);

// Basic Array Operations (Methods)

const friends = ['Michael', 'Steven', 'Peter'];
const newLength = friends.push('Jay');
console.log(friends, newLength);
// unshift will add a new entry to the beginning of the array
friends.unshift('John');
console.log(friends);
// Remove elements
friends.pop();
const popped = friends.pop();  // Removes Last
console.log(friends, popped);
friends.shift();  // Removes First
console.log(friends);

console.log(friends.indexOf('Steven'));
console.log(friends.indexOf('Bob'));

friends.push(23);
console.log(friends.includes('Steven'));
console.log(friends.includes('Bob'));
console.log(friends.includes(23));

if (friends.includes('Steven')) {
    console.log('You have a friend called Steven');
}

// Introduction to Objects
const jonas = {
    firstName: 'Jonas',
    lastName: 'Brothers',
    age: 2037 - 2000,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven']
};
// Able to print all of it or just a single element of the object
console.log(jonas);
console.log(jonas.friends);


// Dot vs. Bracket Notation  --  use previous object

console.log(jonas.lastName);
console.log(jonas['lastName']);

const nameKey = 'Name';
// only able to concatenate with brackets, will not work with dot notation
console.log(jonas['first' + nameKey]);
console.log(jonas['last' + nameKey]);

const crisis = prompt('What do you want?');
if (jonas[crisis]) {
    console.log(jonas[crisis]);
} else {
    console.log('Out of luck!');
}

jonas.location = 'Bali';
jonas['twitter'] = '@fluffyguy'
console.log(jonas);

// In video challenge
// "Jonas has 3 friends, and his best friend is called Michael"
// print this statement without hardcoding 'Jonas', '3', and 'Michael
// must use the Object above

console.log(`${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[jonas.friends.indexOf('Michael')]}`);

// Object Methods

const jonas = {
    firstName: 'Jonas',
    lastName: 'Brothers',
    birthYear: 2005,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven'],
    hasDriversLicense: true,

    // calcAge: function (birthYear) { return 2037 - birthYear }

    // calcAge: function () {
    //     console.log(this);
    //     return 2037 - this.birthYear
    // }

    calcAge: function () {
        this.age = 2037 - this.birthYear;
        return this.age;
    }
};

// console.log(jonas.calcAge(jonas.birthYear));
// console.log(jonas['calcAge'](jonas.birthYear));

// This is for the 2nd calcAge function
// console.log(jonas.calcAge());

// This is for the 3rd calcAge function
console.log(jonas.calcAge());
console.log(jonas.age);

// Another video challenge
// "Jonas is a 46-year old teacher, and he has a driver's license"
// print out this statement without hardcoding the data

if (jonas.hasDriversLicense === true) {
    console.log(`${jonas.firstName} is a ${jonas.age}-year old ${jonas.job}, and he has a driver's license`);
} else {
    console.log(`${jonas.firstName} is a ${jonas.age}-year old ${jonas.job}, and he has no driver's license`);
}

// how he did it  --  create a new function within the object, the function is as follows
// getSummary: function () {
//     return `${this.firstName} is a ${this.calcAge()}-year old ${this.job}, and he has ${this.hasDriversLicense ? 'a' : 'no'} driver's license.`
// }
// then call getSummary and print it to console


// Iteration: The for loop

for (i = 1; i <= 10; i++) { console.log(`Lifting weights repetition ${i}`); }


// Looping Arrays, Breaking and Continuing

const stormtrooper = [
    'Forest',
    'Heavy',
    5050 - 2000,
    'stormtrooper',
    ['Red Guard', 'Foot Patrol', 'Snow Troopers', 'James']
];

const types = [];

for (let i = 0; i < stormtrooper.length; i++) {
    // Reading from stormtroopers
    console.log(stormtrooper[i], typeof (stormtrooper[i]))
    // Different methods of filling the array within the loop
    // types[i] = typeof (stormtrooper[i]);
    types.push(typeof (stormtrooper[i]));
}
console.log(types);

const year = [1991, 2005, 2007, 1856, 2021];
const ages = [];

for (let i = 0; i < year.length; i++) {
    ages[i] = 2050 - year[i]
}
console.log(ages);

// continue and break
console.log('--- ONLY STRING ---');
for (let i = 0; i < stormtrooper.length; i++) {
    if (typeof stormtrooper[i] !== 'string') continue;
    console.log(stormtrooper[i], typeof stormtrooper[i]);
}

console.log('--- BREAK WITH NUMBER ---');
for (let i = 0; i < stormtrooper.length; i++) {
    if (typeof stormtrooper[i] === 'number') break;
    console.log(stormtrooper[i], typeof stormtrooper[i]);
}


// Looping Backwards and Loops in Loops

const stormtrooper = [
    'Forest',
    'Heavy',
    5050 - 2000,
    'stormtrooper',
    ['Red Guard', 'Foot Patrol', 'Snow Troopers', 'James'],
    true
];

for (let i = stormtrooper.length - 1; i >= 0; i--) {
    console.log(i, stormtrooper[i]);
}

for (let exercise = 1; exercise < 4; exercise++) {
    console.log(`------ Starting exercise ${exercise} ------`);

    for (let rep = 1; rep < 6; rep++) {
        console.log(`Exercise ${exercise}: Lifting weight repetition ${rep}`);
    }
}


// The While Loop
let x;
while (x !== 6) {
    x = Math.trunc(Math.random() * 6) + 1;
    console.log(`Welcome #${x}`);
}


/*************************************
 *************Assignments*************
 ************************************/


// Assignment 1

function describeCountry(country, population, capitalCity) {
    return `${country} has ${population} million people and its capital city is ${capitalCity}`;
}
console.log(describeCountry('Indonesia', 6, 'No clue'));
console.log(describeCountry('USA', 320, 'Washington D.C.'));
console.log(describeCountry('Australia', 10, 'Kangaroo'));


// Assignment 2

function percentageOfWorld1(population) {
    return ((population / 7900) * 100).toFixed(2);
}
console.log(percentageOfWorld1(320));
console.log(percentageOfWorld1(62));
console.log(percentageOfWorld1(6));

const percentageOfWorld2 = function (population) {
    return ((population / 7900) * 100).toFixed(2);
}
console.log(percentageOfWorld2(320));
console.log(percentageOfWorld2(62));
console.log(percentageOfWorld2(6));


// Assignment 3

const worldPopPercent = population => ((population / 7900) * 100).toFixed(2);
console.log(worldPopPercent(320));
console.log(worldPopPercent(62));
console.log(worldPopPercent(6));


// Assignment 4

const describePopulation = (country, population) => `${country} has ${population} million people, which is about ${worldPopPercent(population)}% of the world.`;
console.log(describePopulation('China', 1441));


// Assignment 5

const populations = [45, 320, 14, 6];
if (populations.length === 4) { console.log(true); }
else { console.log(false); }
var percentages = new Array(populations.length)
for (i = 0; i < populations.length; i++) {
    percentages[i] = worldPopPercent(populations[i]);
}
console.log(percentages);


// Assignment 6

const neighbours = ['Mexico', 'Canada', 'Cuba'];
console.log(neighbours);
neighbours.push('Utopia');
neighbours.pop();
if (!neighbours.includes('Germany')) {
    console.log('Probably not a central European country');
}
if (neighbours.includes('Mexico')) {
    neighbours[neighbours.indexOf('Mexico')] = 'United Mexican States';
}
console.log(neighbours);


// Assignment 7

const myCountry = {
    country: 'USA',
    capital: 'DC',
    language: 'English',
    population: 'too many',
    neighbours: ['Mexico', 'Canada', 'Cuba'],
};
console.log(myCountry);


// Assignment 8     --      Uses Assignment 7 data

console.log(`${myCountry.country} has ${myCountry.population} million ${myCountry.language}-speaking people, ${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry.capital}`);


// Assignment 9     --      Use Assignment 7 data

myCountry.describe = 'Life, Liberty, or Death';
console.log(myCountry.describe);
myCountry.neighbours.length === 0 ? myCountry.checkIsland = true : myCountry.checkIsland = false;
console.log(myCountry.checkIsland);


// Assignment 10

for (i = 1; i <= 50; i++) {
    console.log(`Voter number ${i} is currently voting`);
}


// Assignment 11    --  Uses #2 & #5

const percentages2 = [];
for (let i = 0; i < populations.length; i++) {
    percentages2[i] = percentageOfWorld1(populations[i]);
    if (percentages2[i] !== percentages[i]) {
        console.log("They don't match");
    } else {
        console.log("They passed");
    }
}


// Assignment 12

const listOfNeighbours = [['Canada', 'Mexico'], ['Spain'], ['Norway', 'Sweden', 'Russia']];
for (let i = 0; i < listOfNeighbours.length; i++) {
    //console.log(listOfNeighbours[i]);
    for (let j = 0; j < listOfNeighbours[i].length; j++) {
        console.log(`Neighbour: ${listOfNeighbours[i][j]}`);
    }
}


// Assignment 13

const percentages3 = [];
let i = 0;
while (i < populations.length) {
    percentages3[i] = percentageOfWorld1(populations[i]);
    if (percentages3[i] !== percentages[i]) {
        console.log("They don't match");
    } else {
        console.log("They passed");
    }
    i++;
}


/*************************************
 **********CODING CHALLENGES**********
 ************************************/

// Coding Challenge #1
const averageScore = (num1, num2, num3) => (num1 + num2 + num3) / 3;
// test data 1
// const dolphinScore = averageScore(44, 23, 71);
// const koalaScore = averageScore(65, 54, 49);

// test data 2
const dolphinScore = averageScore(85, 54, 41);
const koalaScore = averageScore(23, 34, 27);

function checkWinner(avgDolphins, avgKoalas) {
    if (avgDolphins > avgKoalas) { console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`); }
    else if (avgKoalas > avgDolphins) { console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`); }
    else { console.log("It's a tie!"); }
}

checkWinner(dolphinScore, koalaScore);

// Coding Challenge #2

function calcTip(bill) {
    if (50 <= bill && bill <= 300) {
        return tip = bill * 0.15;
        //console.log(`The bill was ${bill.toFixed(2)}, the tip was ${tip.toFixed(2)}, and the total value ${(tip + bill).toFixed(2)}`);
    } else {
        return tip = bill * 0.20;
        //console.log(`The bill was ${bill.toFixed(2)}, the tip was ${tip.toFixed(2)}, and the total value ${(tip + bill).toFixed(2)}`)
    }
}
// test data
const bills = [125, 555, 44];
tips = new Array(bills.length);
total = new Array(bills.length);
for (i = 0; i < bills.length; i++) {
    tips[i] = calcTip(bills[i]);
    total[i] = tips[i] + bills[i];
}
console.log(bills);
console.log(tips);
console.log(total);


// Coding Challenge #3

const mark = {
    firstName: 'Mark',
    lastName: 'Miller',
    mass: 78,       //in kg
    height: 1.69,    //in meters
    calcBMI: function () {
        this.bmi = this.mass / (this.height ** 2);
        return this.bmi;
    }
};
const john = {
    firstName: 'John',
    lastName: 'Smith',
    mass: 92,       //in kg
    height: 1.95,    //in meters
    calcBMI: function () {
        this.bmi = this.mass / (this.height ** 2);
        return this.bmi;
    }
};

john.calcBMI() > mark.calcBMI() ? console.log(`John's BMI (${john.bmi.toFixed(2)}) is higher than Mark's (${mark.bmi.toFixed(2)})`) : console.log(`Mark's BMI (${mark.bmi.toFixed(2)}) is higher than John's (${john.bmi.toFixed(2)})`);


// Coding Challenge #4

// test data & array declarations
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

// pulled this function from coding challenge 2
function calcTip(bill) {
    if (50 <= bill && bill <= 300) {
        return tip = (bill * 0.15);
    } else {
        return tip = (bill * 0.20);
    }
}

// loop through the bills and set values to tips and totals
for (let i = 0; i < bills.length; i++) {
    tips[i] = calcTip(bills[i]);
    totals[i] = tips[i] + bills[i];
}

// bonus challenge
function calcAverage(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += Number(arr[i]);
    }
    return (sum / arr.length).toFixed(2);
}
console.log(bills);
console.log(tips);
console.log(totals);
console.log(calcAverage(totals));