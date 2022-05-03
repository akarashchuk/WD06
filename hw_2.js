"use strict";
//NORMAL level

//task 1
let x = 20;
let y = 58;
let z = 42;

console.log(x + y + z);

//task 2
let secInMinute = 60;
let minInHour = 60;
let hourInDay = 24;
let dayInYear = 365;

let myAgeInSeconds = 39 * dayInYear * hourInDay * minInHour * secInMinute;

//task 3
let count = 42;
let userName = '42';

let my_let1_variant1 = String(count);
let my_let1_variant2 = `${count}`;

let my_let2_variant1 = Number(userName);
let my_let2_variant2 = +userName;

//task 4
let a = 1;
let b = 2;
let c = 'белых медведей';

console.log(`${a}` +  `${b}` + ' ' + c);

//task 5
let word1 = 'доступ';
let word2 = 'морпех';
let word3 = 'наледь';
let word4 = 'попрек';
let word5 = 'рубило';

let lengthWords = (word1 + word2 + word3 + word4 + word5).length;

//task 6
 let my_string = 'Hello';
 let my_number = 12;
 const my_object = {
     bookName: 'Муха-Цокотуха',
     bookAuthor: 'К.И. Чуковский'
 }; 

 console.log(`Variable: %my_string% have type: %${typeof(my_string)}%`);
 console.log(`Variable: %my_number% have type: %${typeof(my_number)}%`);
 console.log(`Variable: %my_object% have type: %${typeof(my_object)}%`);

 //task 7
 let currentUserName = prompt('Введите Ваше имя ', '');
 console.log(currentUserName);

 let currentUserAge = prompt('Введите Ваш возраст', '');
 console.log(currentUserAge); 

 //ADVANCED level

 //task 1
 let a1 = 4;
 let b1 = 3;

 a1 += b1;
 b1 = a1 - b1;
 a1 -= b1;

 //task 2
 let codeWord1 = "обернись";
 let codeWord2 = "неужели";
 let codeWord3 = "огурцы";
 let codeWord4 = "липкие";
 let codeWord5 = "?!";

 let cipher = codeWord1[1] + codeWord2[1] + codeWord3[1] + codeWord4[1] + codeWord5[1];

