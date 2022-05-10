"use strict"

//Task 1

let a = 'true';
let b = false;
let c = 17;
let d = undefined;
let e = null;
console.log(typeof a, typeof b, typeof c, typeof d, typeof e);

//Task 2

let height = 15;
let width = 20;
if (height > width) {
    console.log(height);
} else {
    console.log(width);
}

//Task 3

let i = 1;
while (i < 20) {
    if (i % 3 == 0) {
        console.log(i);
    }
    i++;
}

//Task 4

let key = true;
let documents = true;
let pen = true;
let apple = false;
let orange = true;
let shouldGoToWork;
shouldGoToWork = (key && documents && pen) && apple || orange;
if (shouldGoToWork) {
    console.log('We can go to work');
}

//Task 5

// let chislo = prompt('Введите число');
// if (chislo % 3 == 0 && chislo % 5 == 0) {
//     alert('FizBuz');
// } else if (chislo % 3 == 0) {
//     alert('Buz');
// } else if (chislo % 5 == 0) {
//     alert('Fiz');
// }

//Task 6

// let age = prompt('Введите ваш возраст');
// if (age >= 16 && age < 18){
//     alert('Можешь выкурить сигаретку, только мамочке об этом не говори');
// } else if (age >= 18) {
//     alert('Попей пивка, братик');
// } else if (age < 18) {
//     alert('Попей колу');
// }

//Task 7

// let pole = prompt('Введите предпочитаемую сторону света');
// switch (pole) {
//     case 'юг':
//         console.log('на юг пойдешь - счастье найдешь');
//         break;
//     case 'север':
//         console.log('на север пойдешь - много денег найдешь');
//         break;
//     case 'запад':
//         console.log('на запад пойдешь - верного друга найдешь');
//         break;
//     case 'восток':
//         console.log('на восток пойдешь - разработчиком станешь');
//         break;            
// }

// Advanced Task 1

// let firstName = prompt('Введите ваше Имя');
// let lastName = prompt('Введите вашу фамилию');



//Task 2

// let chislo = prompt('Введите число');
// let question1 = prompt('Сколько отнять?');
// let question2 = prompt('Сколько прибавить?');
// let question3 = prompt('На сколько умножить?');
// let question4 = prompt('Разделить от предыдущего результата?');
// let result = (((chislo - question1) + question2) * question3) / question4;
// alert(`Формула: (((${chislo} - ${question1}) + ${question2}) * ${question3}) / ${question4} = ${result}`);

//Task 3

let x;
let j = '';
for (x = 0; x < 6; x++) {
    j+= '#';
    console.log(`${j}\n`);
}