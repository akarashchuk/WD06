"use strict"


// Task 1

// let istina = 'true';
// let lozh = false;
// let number = 17;
// let und = undefined;
// let empty = null;

// console.log(typeof istina);
// console.log(typeof lozh);
// console.log(typeof number);
// console.log(typeof und);
// console.log(typeof empty);


// Task 2

// let height = 15;
// let width = 20;

// Вариант 1:

// if(height > width) {
//    console.log(height);
// } else {
//    console.log(width);
// }

// Вариант 2:

// console.log(Math.max(height, width));


// Task 3

// for (let num = 1; num <= 20; num++) {
//    if(num % 3 == 0) {
//        console.log(num);
//    }
// }

// Task 4

// let key = true;
// let documents = true;
// let pen = true;
// let apple = false;
// let orange = true;

// let shouldGoToWork = (key && documents && pen) && (apple || orange);

// if(shouldGoToWork == true) {
//    console.log('К работе готов!');
// } else {
//    console.log('Что-то забыл...');
// }


// Task 5

// let number = 3;

// if(number % 3 == 0 && number % 5 == 0) {
//    console.log('FizBuz');
// } else if(number % 5 == 0) {
//    console.log('Fiz');
// } else if(number % 3 == 0) {
//    console.log('Buz')
// }


// Task 6

// let Age = 18;

// if(Age >= 18) {
//    console.log('Попей пивка');
// } else {
//    console.log('Пей колу');
// }
// if(Age > 16 && Age < 18) {
//    console.log('Можешь выкурить сигаретку, только маме не говори');
// }


// Task 7

// let dir = 'юг';

// switch(dir) {
//    case 'юг':
//       console.log('на юг пойдешь счастье найдешь');
//       break;
//    case 'север':
//       console.log('на север пойдешь много денег найдешь');
//       break;
//    case 'запад':
//          console.log('на запад пойдешь верного друга найдешь');
//       break;   
//    case 'восток':
//          console.log('на восток пойдешь разработчиком станешь');
//       break;
//    default:
//       console.log('попробуй еще раз');
// }


// ADVANCED level


// Task 1

// let Name = 'пОлИнА нАбЕрЕжНаЯ';

// Name = Name.toLowerCase();
// let arr = Name.split(" ");
// for (let i = 0; i < arr.length; i++) {
//    arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
// }
// let Name1 = arr.join(" ");
// alert(`Привет, ${Name1}!`);

// Task 2

// let anyNumber = +prompt("Введите любое число","");
// let summ = +prompt("Сколько прибавить?","");
// let distr = +prompt("Сколько отнять?","");
// let multip = +prompt("На сколько умножить?","");
// let divide = +prompt("На сколько разделить?","");

// let result = (anyNumber + summ - distr) * multip / divide;

// alert(`(${anyNumber}+${summ}-${distr})*${multip}/${divide}=${result}`);


// Task 3

// let lineNumber = 6;

// for (let i = 0; i < lineNumber; i++) {
//    let symbol = '#'
//       for (let I = 0; I < i; I++) {
//          symbol += '#'
//          }
//          console.log(`${symbol}`);
//   }