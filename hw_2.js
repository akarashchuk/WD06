"use strict"

// NORMAL level

// Task 1

let x = 20;
let y = 58;
let z = 42;

let value = x + y + z;

console.log(value);

// Task 2

let secondsInMinute = 60;
let minutesInHour = 60;
let hoursInDay = 24;
let daysInYear = 365;
let age = 21;

let myAgeInSeconds = age * daysInYear * hoursInDay * minutesInHour * secondsInMinute;

console.log(myAgeInSeconds);

// Task 3

// variant1

let count = 42;
let userName = '42';

count = String(count);
userName = Number(userName);

console.log(count);
console.log(userName);

console.log(typeof count);
console.log(typeof userName);

// variant2

userName = +userName;
console.log(typeof userName);


// Task 4

let a = 1;
let b = 2;
let c = "белых медведей";

a = String(a);
b = String(b);

let bears = a + b + ' ' + c;

console.log(bears);

// Task 5

let word1 = "доступ"; 
let word2 = "морпех";
let word3 = "наледь";
let word4 = "попрек";
let word5 = "рубило";

let lengthWords = word1 + word2 + word3 + word4 + word5;

console.log(lengthWords.length);

// Task 6

let myName = 'Tanya';
let myAge = 21;
let isGreater = 21 < 31;

let message1 = `${myName}: myName have type: ${typeof myName}`;
let message2 = `${myAge}: myAge have type: ${typeof myAge}`;
let message3 = `${isGreater}: isGreater have type: ${typeof isGreater}`;

console.log(message1);
console.log(message2);
console.log(message3);

// Task 7

let firstName = prompt('Ваше имя?');
console.log(firstName);

let userAge = prompt('Укажите ваш возраст');
console.log(userAge);

// ADVANCED level

// Task 1

let $a = 4;
let $b = 3;

$a = --$a;
$b = ++$b;

console.log($a);
console.log($b);

//Task 2

let codeWord1 = "обернись";
let codeWord2 = "неужели";
let codeWord3 = "огурцы";
let codeWord4 = "липкие";
let codeWord5 = "?!";

let cipher = codeWord1[1] + codeWord2[1] + codeWord3[1] + codeWord4[1] + codeWord5[1];

console.log(cipher);