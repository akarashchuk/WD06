"use strict"

// Task 1
let x = 20;
let y = 58;
let z = 42;
let w;

w = x + y + z;

console.log(w);

// Task 2 

let SecinMin = 60;
let MininHour = 60;
let HourinDay = 24;
let DayinYear = 365;
let Age = 24;
let myAgeInSeconds = SecinMin * MininHour * HourinDay * DayinYear * Age;

console.log(myAgeInSeconds);

// Task 3

let count = 42;
let userName = '42';

count = String(count);
userName = Number(userName);

console.log(typeof count, typeof userName);

// Task 4

let a = 1;
let b = 2;
let c = "белых медведей";
let result;

a = String(a);
b = String(b);

result = a + b + ' ' + c;

console.log(result);

// Task 5

let w1 = 'доступ';
let w2 = 'морпех';
let w3 = 'наледь';
let w4 = 'попрек';
let w5 = 'рубило';
let lengthWords;

lengthWords = w1 + w2 + w3 + w4 + w5;

console.log(lengthWords.length);  

// Task 6

let word = 'Fckwr';
let num = 21;
let comparison = 2 > 1;

let t61 = `Variable: word have type: ${typeof word}`;
let t62 = `Variable: num have type: ${typeof num}`;
let t63 = `Variable: comparison have type: ${typeof comparison}`;

console.log(t61);
console.log(t62);
console.log(t63);

// Task 7

let firstName = prompt('Name?');
console.log(firstName);

let userAge = prompt('Age?');
console.log(userAge);

// ADVANCED level
// Task 1

let a1 = 4;
let b1 = 3;

a1 = a1 + b1;
b1 = a1 - b1;
a1 = a1 - b1;

console.log(a1, b1);

// Task 2

let codeWord1 = "обернись";
let codeWord2 = "неужели";
let codeWord3 = "огурцы";
let codeWord4 = "липкие";
let codeWord5 = "?!";

codeWord1 = codeWord1.substring(1, 2);
codeWord2 = codeWord2.substring(1, 2);
codeWord3 = codeWord3.substring(1, 2);
codeWord4 = codeWord4.substring(1, 2);
codeWord5 = codeWord5.substring(1, 2);

let cipher = codeWord1 + codeWord2 + codeWord3 + codeWord4 + codeWord5;
console.log(cipher);