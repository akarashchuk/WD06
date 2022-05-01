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
let yearsNumber = 53; //полных лет
let daysNumber = 110; //дней в неполном году - д.р. 10.01, сегодня 30.04
const ageInSeconds = (yearsNumber * DAY_IN_YR + daysNumber) * HR_IN_DAY * MIN_IN_HR * SEC_IN_MIN

console.log(ageInSeconds);


// Task 3

let count = 42; // число

console.log(count);
console.log(typeof count); 

// // число на строку 1й вариант
count = String(count);
console.log(typeof count);

// // число на строку 2й вариант
let countString = "count";              // новая переменная
console.log(typeof countString); 


let userName = '42'; // строка

console.log(userName);
console.log(typeof userName);

// // строка на число 1й вариант
userName = Number(userName);
console.log(typeof userName);

// // строка на число 2й вариант
let userNameNumber = Number(userName);  // новая переменная
console.log(typeof userNameNumber);


// Task 4

let a = 1;
let b = 2;
let c = "белых медведей";

a = String(a);
b = String(b);
console.log(a, b, c);


// Task 5

let d = "доступ"; 
let m = "морпех";
let n = "наледь";
let p = "попрек";
let r = "рубило";

let lengthWords = (d + m + n + p + r).length;

console.log(lengthWords);


// Task 6

// 1 тип
let line = `Variable: %variable name% have type: %type variable%`;
console.log(line);

// 2 тип
let varName = "%variable name%";
let varType = "%type variable%";
console.log(`Variable: ${varName} have type: ${varType}`);


// 3 тип
let sentence = "sentence";
if (sentence === "sentence") {
   console.log(`Variable: %variable name% have type: %type variable%`)
} else {
   console.log(null);
}


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