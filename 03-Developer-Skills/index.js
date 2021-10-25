/**
 * Shane Kennedy
 * Developer Skills & Editor Setup
 */

// Learning to look stuff up when you're stuck

// use strict mode in all scripts now
'use strict';

const temp = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

const calcTempAmplitude = function (temps) {
  let max = temps[0];
  let min = temps[0];
  for (let i = 0; i < temps.length; i++) {
    let curTemp = temps[i];
    if (typeof curTemp !== 'number') continue;
    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(max, min);
  return max - min;
};

const amplitude = calcTempAmplitude(temp);
console.log(amplitude);

// Now with 2 arrays

const t1 = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];
const t2 = [8, -4, -1, -1, 'error', 32, 15, 1, 15, 19, 0, 4];

const calcAmplitudeArrays = function (t1, t2) {
  const temps = t1.concat(t2);
  let max = temps[0];
  let min = temps[0];
  for (let i = 0; i < temps.length; i++) {
    let curTemp = temps[i];
    if (typeof curTemp !== 'number') continue;
    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(max, min);
  return max - min;
};

const amplitudeOfTwo = calcAmplitudeArrays(t1, t2);
console.log(amplitudeOfTwo);

//Debugging (Fixing Errors)

const measureKelvin = function () {
  const measurement = {
    type: 'temp',
    unit: 'celsius',
    value: Number(prompt('Degrees celsius:')),
  };

  const kelvin = (measurement.value += 273);
  return kelvin;
};
console.log(measureKelvin());

/***********************************
 *********CODING CHALLENGES*********
 **********************************/

// Coding Challenge 1

const printForecast = function (arr) {
  let str = '';
  for (let i = 0; i < arr.length; i++) {
    str = str + `${arr[i]}°C in ${i + 1} days ... `;
  }
  return '... ' + str;
};
const d1 = [17, 21, 23];
const d2 = [12, 5, -5, 0, 4];
console.log(printForecast(d1));
console.log(printForecast(d2));
