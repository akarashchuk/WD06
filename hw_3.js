"use strict";

// Task 1

let comparisonString = 'true';
let comparisonFalse = false;
let age = 17;
let stranger = undefined;
let stranger2 = null;

console.log(typeof comparisonString, typeof comparisonFalse, typeof age, typeof stranger, typeof stranger2);

// Task 2

let height = 15;
let width = 20;

if (height > width) {
    console.log(height);
} else {
    console.log(width);
}

// Task 3

for (let i = 1; i < 20; i++) {
    if (i % 3 == 0) {
        console.log(i);
    }  
}

// Task 4

let key = true;
let documents = true;
let pen = true;
let apple = false;
let orange = true;

let shouldGoToWork = documents && key && pen && (apple || orange);
console.log(shouldGoToWork);

// Task 5

let anumber = prompt('Введите число:');

if (anumber % 3 === 0 && anumber % 5 === 0) {
    console.log('FizBuz');
} else if (anumber % 3 === 0) {
    console.log('Buz');
} else if (anumber % 5 === 0) {
    console.log('Fiz');
} else {
    console.log('Число');
}


// Task 6

let age2 = +prompt('Введите ваш возраст:');

if (age2 > 18) {
    console.log('Попей пивка.')
} else if (age2 <= 18 && age2 >= 16) {
    console.log('Можешь выкурить сигаретку, только маме не говори.')
} else {
    console.log('Пей колу.')
}

// Task 7

let a = prompt('В какую сторону вы хотите направиться?')

switch (a) {
  case 'юг':
    alert( 'на юг пойдешь счастье найдешь' );
    break;
  case 'север':
    alert( 'на север пойдешь много денег найдешь' );
    break;
  case 'запад':
    alert( 'на запад пойдешь верного друга найдешь' );
    break;
  case 'восток':
    alert( 'на восток пойдешь разработчиком станешь' );
    break;
  default:
    alert( "А когда я поеду в Египет????" );
}

// Advanced
// Task 2

let num = +prompt('Введите ваше число:');
let takeAway = +prompt('cколько отнятьот предыдущего результата');
let add = +prompt('cколько прибавить к предыдущему результату');
let multiple = +prompt('на cколько умножить предыдущий результат');
let divide = +prompt('на cколько разделить предыдущий результат');

let answer = ((((num - takeAway) + add) * multiple) / divide);

console.log(answer);
