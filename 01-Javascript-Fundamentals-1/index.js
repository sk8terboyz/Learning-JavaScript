/**
 * Shane Kennedy
 * JavaScript Fundamentals Part 1
 */

// variables and assignment operators practice
const country = 'USA';
const continent = 'North America';
let population = 328.2;
let isIsland = false;
let language;
language = "English";
// console.log(typeof country);
// console.log(typeof continent);
// console.log(typeof population);
// console.log(typeof isIsland);
// console.log(typeof language);

let isSplit = true;
if (isSplit) {
    console.log(`Population in each half is ${population / 2} million`);
}
let finlandPopulation = 6;
if (population > finlandPopulation) {
    console.log("ha Finland is poor");
}
if (population > 33) {
    console.log("getting close to fat batman level");
}
let description = 'Portugal is in Europe, and its 11 million people speak portuguese';
description = `${country} is in ${continent}, and its ${population} people speak ${language}`;
console.log(description);

const fName = 'Billy';
const job = 'Cowboy';
const birthYear = 1859;
const currentYear = 2037;

console.log(`I'm ${fName}, a ${currentYear - birthYear} year old ${job}!`);

if (population > 33) {
    console.log(`${country} is above average`);
}
else {
    console.log(`${country} is ${(33 - population)} million below average`);
}

// Type Conversion and Coercion
let op1 = '9' - '5';
let op2 = '19' - '13' + '17';
let op3 = '19' - '13' + 17;
let op4 = '123' < 57;
let op5 = 5 + 6 + '4' + 9 - 4 - 2;
console.log(op1);
console.log(op2);
console.log(op3);
console.log(op4);
console.log(op5);

// Equality Operators: == vs ===
// '==' is loose equality (does type conversion/coercion for you)
// '===' is strict equality (does not do type coercion for you)
let numNeighbours = prompt('How many neighbour countries does your country have?');
if (numNeighbours == 1) console.log('Only 1 border!');
else if (numNeighbours > 1) console.log('More than 1 border');
else console.log('No borders');

// Logical Operators
indonesiaPopulation = 270.6;
indonesiaLanguage = 'Indonesian';
indonesiaIsIsland = true;

if (indonesiaLanguage === 'English' && indonesiaPopulation < 50 && indonesiaIsIsland === false) {
    console.log("Indonesia is the place for you!");
} else { console.log('Indonesia does not meet your criteria'); }

// Switch statement
const day = 'thursday';
switch (day) {
    case 'monday':
        console.log("Work from Noon-4PM");
        break;
    case 'tuesday':
        console.log("Class from 9:35AM - 10:50AM");
        console.log("Work from 11:30AM - 1:30PM");
        console.log("Class from 2:00PM - 3:15PM");
        break;
    case 'wednesday':
        console.log("Work from Noon-4PM");
        break;
    case 'thursday':
        console.log("Class from 9:35AM - 10:50AM");
        console.log("Work from 11:30AM - 1:30PM");
        console.log("Class from 2:00PM - 3:15PM");
        break;
    case 'friday':
        console.log("Work from Noon-4PM");
        break;
    case 'saturday':
        console.log("It's Saturday");
        break;
    case 'sunday':
        console.log("It's Sunday");
        break;
    default:
        console.log("Not a valid day!");
        break;
}

// second switch statement
const speakingLanguage = 'spanish';
switch (speakingLanguage) {
    case 'chinese':
    case 'mandarin':
        console.log("MOST number of native speakers!");
        break;
    case 'spanish':
        console.log("2nd place in number of native speakers");
        break;
    case 'english':
        console.log('3rd place');
        break;
    case 'hindi':
        console.log('Number 4');
        break;
    case 'arabic':
        console.log('5th most spoken language');
        break;
    default:
        console.log('Great language too');
        break;
}

// Ternary Operator
let ternPop = 103;
let ternCountry = 'Canada'
ternPop > 33 ? console.log(`${ternCountry}'s population is above average`) : console.log(`${ternCountry}'s population is below average`);


/*******************************
 * Coding Challenges
 *******************************/

// Coding Challenge #1
const markMass = 78;
const markHeight = 1.69;
const johnMass = 92;
const johnHeight = 1.95;

// const markMass = 95;
// const markHeight = 1.88;
// const johnMass = 85;
// const johnHeight = 1.76;

const markBMI = markMass / markHeight ** 2;
const johnBMI = johnMass / johnHeight ** 2;
var markHigherBMI = markBMI > johnBMI;
console.log(markBMI, johnBMI, markHigherBMI);

// Coding Challenge #2
if (markHigherBMI) {
    console.log(`Mark's BMI(${markBMI.toFixed(1)}) is higher than John's(${johnBMI.toFixed(1)})!`);
} else {
    console.log(`John's BMI(${johnBMI.toFixed(1)}) is higher than Mark's(${markBMI.toFixed(1)})!`);
}

// Coding Challenge #3
// test data #1
// const dolphinScore = (96 + 108 + 89) / 3;
// const koalasScore = (88 + 91 + 110) / 3;

// test data #2
// const dolphinScore = (97 + 112 + 101) / 3;
// const koalasScore = (109 + 95 + 123) / 3;

// test data #3
const dolphinScore = (97 + 112 + 101) / 3;
const koalasScore = (109 + 95 + 106) / 3;

if (dolphinScore > koalasScore && dolphinScore > 100 || koalasScore > 100) {
    console.log("DOLPHINS WIN!!!");
}
else if (dolphinScore < koalasScore && dolphinScore > 100 || koalasScore > 100) {
    console.log('KOALAS WIN!!!');
}
else if (dolphinScore === koalasScore && dolphinScore > 100 || koalasScore > 100) {
    console.log("Dolphins and Koalas have tied!");
} else {
    console.log("No team wins, yall suck!");
}

// Coding Challenge #4

var tip;
// var bill = 275;
// var bill = 40;
var bill = 430;
50 <= bill <= 300 ? tip = console.log(`The bill was ${bill.toFixed(2)}, the tip was ${(tip = bill * 0.15).toFixed(2)}, and the total value ${(tip + bill).toFixed(2)}`)
    : console.log(`The bill was ${bill.toFixed(2)}, the tip was ${(tip = bill * 0.20).toFixed(2)}, and the total value ${(tip + bill).toFixed(2)}`);

