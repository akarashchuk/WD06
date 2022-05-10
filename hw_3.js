"use strict";

// Task 1

// let a = 'true';
// let b = false
// let c = 17;
// let d = undefined;
// let e = null;

// console.log(typeof a);
// console.log(typeof b);
// console.log(typeof c);
// console.log(typeof d);
// console.log(typeof e);

// Task 2

// let height = 15;
// let width = 20;

// if(height < width) {
//     console.log(width);
// } else if (height == width) {
//     console.log('Ничья');
// } else {
//     console.log(height);
// }

// Task 3

// let num = 0;

// for (; num <= 20; num++) {
//     if (num % 3 !== 0) {
//         continue;
//     }
//     console.log(num);
// }

// Task 4

// let key = true;
// let documents = true;
// let pen = true;
// let apple = false;
// let orange = true;

// let shouldGoToWork = key && documents && pen && (apple || orange);

// console.log(shouldGoToWork);

// Task 5

// let number = prompt ('Укажите число');

// if(number % 3 == 0 && number % 5 == 0) {
//     console.log('FizBuz');
// }
// else if(number % 5 == 0) {
//     console.log('Fiz');
// }
// else if(number % 3 == 0) {
//         console.log('Buz');
// }
// else {
//         console.log('False');
// }

// Task 6

// let age = prompt ('Укажите возраст');

// if(age > 18) {
//     console.log('Попей пивка');
// }
// else if(age >= 16 && age <= 18) {
//     console.log('Можешь выкурить сигаретку, только маме не говори');
// }
// else {
//     console.log('Пей колу');
// }

// Task 7

// let side = prompt ('В какую сторону света хотели бы отправиться?');

// if(side == 'юг') {
//     console.log('На юг пойдешь счастье найдешь');
// }
// else if(side == 'север') {
//     console.log('На север пойдешь много денег найдешь');
// }
// else if(side == 'запад') {
//     console.log('На запад пойдешь верного друга найдешь');
// }
// else if(side == 'восток') {
//     console.log('На восток пойдешь разработчиком станешь');
// }
// else {
//     console.log('Попробуй еще раз!')
// }

///// ADVANCED

// Task 1

// let userName = 'пОлИнА нАбЕрЕжНаЯ';

// let lower = userName.toLowerCase();
// let brk = lower.split(" ");

// for(let i = 0; i < brk.length; i++) {
//     brk[i] = brk[i][0].toUpperCase() + brk[i].slice(1);
// }

// let finishUserName = brk.join(" ");
// alert(`Привет, ${finishUserName}!`);


// Task 2

// let a = +prompt("Введите любое число");

// while (true) {

//   let value = +prompt("Сколько отнять?");
//   a -= value;
  
//   let value1 = +prompt("Сколько прибавить?");
//   a += value1;

//   let value2 = +prompt("На сколько умножить?");
//   a *= value2;

//   let value3 = +prompt("На сколько разделить?");
//   a /= value3;

//   break;
// }

// alert(`Итог ${a}`); //// тут получилось просто итог, без вывода формулы

let a = +prompt("Введите любое число");
let value = +prompt("Сколько отнять?");
let value1 = +prompt("Сколько прибавить?");
let value2 = +prompt("На сколько умножить?");
let value3 = +prompt("На сколько разделить?");

let result = (a - value + value1) * value2 / value3;

alert(`((((${a} - ${value}) + ${value1}) * ${value2}) / ${value3}) = ${result}`);


// Task 3

// let a = ' ';

// for(let i = 0; i < 6; i++) {
//     a+= "#"
//     console.log(a);
// }
