//hw-2.js - Балахомская Настя
//каждый task в отдельных /*  */


//task 1
 let x = 20;
 let y = 58;
 let z = 42;

 console.log(x+y+z);
 

//-----------------------------------------------------------------
 
/*
 //task 2
 let count_second_in_min = 60;
 let count_min_in_hour = 60;
 let count_hour_in_day = 24;
 let count_day_in_year = 365;
 let age = 18;

 let myAgeInSeconds = age * count_day_in_year * count_hour_in_day * count_min_in_hour * count_second_in_min;
 
 console.log(myAgeInSeconds);
 */

//-----------------------------------------------------------------
 
/*
 //task 3
 let count = 42;
 let userName = '42';

 console.log(typeof count);
 console.log(typeof userName);

// 1 способ - преобразования
 count = String(count);
 userName = Number(userName);

 console.log(typeof count);
 console.log(typeof userName);

// 2 способ - преобразования
count = count.toString();
userName = +count;

console.log(typeof count);
console.log(typeof userName);
*/

//-----------------------------------------------------------------

/*
//task 4
let a = 1;
let b = 2;
let c = "белых медведей";

a = String(a);
b = String(b);

console.log(a+b+' '+c);
*/
//-----------------------------------------------------------------

/*
//task 5
let a = 'доступ';
let b = 'морпех';
let c = 'наледь';
let d = 'попрек'; 
let f = 'рубило';
let lengthWords = (a+b+c+d+f);

console.log (`Слово "${a}" содержит `+ a.length + ` символов`);
console.log (`Слово "${b}" содержит `+ a.length + ` символов`);
console.log (`Слово "${c}" содержит `+ a.length + ` символов`);
console.log (`Слово "${d}" содержит `+ a.length + ` символов`);
console.log (`Слово "${f}" содержит `+ a.length + ` символов`);
console.log(`Длина всех слов равна ` + lengthWords.length + ` символов`);
*/

//-----------------------------------------------------------------

/*
//task 6
let firstName = 'Nastya'; //string
let task = 6;//number
let isActive = true; //boolean

console.log (`Variable: "${firstName}" have type: ${typeof(firstName)}`);
console.log (`Variable: "${task}" have type: ${typeof(task)}`);
console.log (`Variable: "${isActive}" have type: ${typeof(isActive)}`);
//*/

//-----------------------------------------------------------------

/*
//task 7
let firstName ='';
let age = '';

console.log(prompt ('Введите ваше имя',firstName));
console.log(prompt ('Введите ваш возраст',age));
*/

//-----------------------------------------------------------------

///////////////////// ADVANCED level /////////////////////////////////
//task 1
/*
let a = 4
let b = 3

a = a + b;
b = a - b;
a = a - b;

console.log(a);
console.log(b);
*/

//-----------------------------------------------------------------

//task 2
/*
let codeWord1 = "обернись";
let codeWord2 = "неужели";
let codeWord3 = "огурцы";
let codeWord4 = "липкие";
let codeWord5 = "?!";
let cipher = '';

cipher = codeWord1[1] + codeWord2[1] + codeWord3[1] + codeWord4[1] +codeWord5 [1];

console.log(cipher);
*/