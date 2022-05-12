"use strict"

//Task 1

let x = 20;
let y = 58;
let z = 42;
let sum = x + y + z;
console.log (sum);

//Task 2

let secInMin = 60 ; 
let minInHours = 60;
let hoursInDay = 24;
let daysInYear = 360; 
let myAgeInSeconds = 21 * daysInYear * hoursInDay * minInHours * secInMin;
console.log (myAgeInSeconds);

// Task 3

let count = 42;
let userName = '42';
let countToString = String(count);
countToString = count.toString();
let userNameToNumber = parseInt(userName);
userNameToNumber = Number (userName);
console.log(typeof countToString);
console.log(typeof userNameToNumber);

// Task 4

// let a = 1;
// let b = 2;
// let c = 'белых медведей';
// let bToString = String(b);
// let message = a + bToString +` ${c}`;
// console.log (message);

//Task 5

let a = 'доступ'; 
let b = 'морпех';
let c = 'наледь';
let d = 'попрек';
let e = 'рубило';
let summary = a + b + c + d + e;
console.log (summary.length);

//Task 6

let firstVariable = 1;
let secondVariable = true;
let thirdVariable = 1 / 0; 
console.log('Variable: firstVariable has type: ' + typeof(firstVariable));
console.log('Variable: secondVariable has type: ' + typeof(secondVariable));
console.log('Variable: thirdVariable has type: ' + typeof(thirdVariable));

//Task 7

let age = prompt('Введите возраст');
let name = prompt('Введите имя');
console.log(age);
console.log(name);