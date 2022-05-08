"use strict"

// Task 1 

let x = 20;
let y = 58;
let z = 42;

console.log(x + y + z);


// Task 2

const SEC_IN_MIN = 60;
const MIN_IN_HR = 60;
const HR_IN_DAY = 24;
const DAY_IN_YR = 365;
let yearsNumber = 53;

const ageInSeconds = yearsNumber * DAY_IN_YR * HR_IN_DAY * MIN_IN_HR * SEC_IN_MIN

console.log(ageInSeconds);


// Task 3

let count = 42;
let userName = '42';

let count1 = String(count);
console.log(typeof count1);

let userName1 = +userName;
console.log(typeof userName1);


// Task 4

let a = 1;
let b = 2;
let c = "белых медведей";

console.log(`${a}${b} ${c}`);


// Task 5

let d = "доступ"; 
let m = "морпех";
let n = "наледь";
let p = "попрек";
let r = "рубило";

let lengthWords = (d + m + n + p + r).length;

console.log(lengthWords);


// Task 6

let Name = 'Jonh';
let Age = 25;
let Logic = 25 >= 18;

let Name1 = `Variable: Name have type: ${typeof Name}`;
let Age1 = `Variable: Age have type: ${typeof Age}`;
let Logic1 = `Variable: Logic have type: ${typeof Logic}`;


// Task 7

let yourName = prompt("Your name", "");
let yourAge = prompt("Your age", "");
console.log(yourName, yourAge);


// Advanced Task 1

let A = 4
let B = 3

A = A + B;
B = A - B;
A = A - B;

console.log(a, b);


// Advanced Task 2

let codeWord1 = "обернись";
let codeWord2 = "неужели";
let codeWord3 = "огурцы";
let codeWord4 = "липкие";
let codeWord5 = "?!";

let first = codeWord1.charAt(1);
let second = codeWord2.charAt(1);
let third = codeWord3.charAt(1);
let fourth = codeWord4.charAt(1);
let fifth = codeWord5.charAt(1);

let cipher = (first + second + third + fourth + fifth);

console.log(cipher);