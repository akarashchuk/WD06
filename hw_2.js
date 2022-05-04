//Task 1 

let x = 20;
let y = 58;
let z = 42;

x = x + y + z;

console.log(x);

//Task 2

let sec = 60;
let min = 60;
let day = 24;
let year = 365;


let age = 25; 

myAgeInSeconds = age * year * day * min * sec ;

console.log(myAgeInSeconds);

//Task 3

let count = 42;
let userName = '42';

typeof 42;
typeof count;

typeof userName;
typeof '42';

console.log(count , userName)

//Task 4

let a = 1;
let b = 2;
let c = "белых медведей";


+console.log( a + b + c );

//Task 5

let d = "доступ"; 
let m = "морпех";
let n = "наледь";
let p = "попрек";
let r = "рубило";

let lengthWords = (d + m + n + p + r).length;

console.log(lengthWords);

//Task 6

let number = 25;
let boolean = true; 
let title = 'developer';
console.log(`Variable: "${number}" have type: ${typeof(number)}`);
console.log(`Variable: "${boolean}" have type: ${typeof(boolean)}`);
console.log(`Variable: "${title}" have type: ${typeof(title)}`);

//Task7 

let firstName = prompt("Enter your name");
let years = prompt("Enter your age");

console.log(firstName);
console.log(years);

// ADVANCED level

//Task1

let ab = 4;
let bc = 3;

[ab, bc] = [bc, ab];

console.log(ab , bc);


//Task2

let codeWord1 = "обернись";
let codeWord2 = "неужели";
let codeWord3 = "огурцы";
let codeWord4 = "липкие";
let codeWord5 = "?!";

codeWord1 = codeWord1.substring(1,2);
codeWord2 = codeWord2.substring(1,2);
codeWord3 = codeWord3.substring(1,2);
codeWord4 = codeWord4.substring(1,2);
codeWord5 = codeWord5.substring(1,2);

let cipher = codeWord1 + codeWord2 + codeWord3 + codeWord4 + codeWord5;
console.log(cipher); 