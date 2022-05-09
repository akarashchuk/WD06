"use strict"

// NORMAL level

// Task 1 

let country = 'true';
let city = false;
let age = 17;
let firstName = undefined;
let lastName = null;

console.log(country, typeof country);
console.log(city, typeof city);
console.log(age, typeof age);
console.log(firstName, typeof firstName);
console.log(lastName, typeof lastName);

// Task 2

let height = 15;
let width = 20;

if (height > width) {
    console.log(height);
} else {
    console.log(width);
}

// Task 3

for (let i = 1; i <= 20; i++) {
    if (i % 3 === 0){
        console.log(i);
    }   
}

// Task 4

let key = true;
let documents = true;
let pen = true;
let apple = false;
let orange = true;

let shouldGoToWork = key && documents && pen && (apple || orange);

console.log(shouldGoToWork);

// Task 5

let num = +prompt('Введите число', '0');

if (num % 5 === 0 && num % 3 === 0){
    console.log('FizBuz');
} else if (num % 3 === 0){
    console.log('Buz');
} else if (num % 5 === 0){
    console.log('Fiz');
} else {
    console.log('Число не кратно ни 3, ни 5');
}

// Task 6 

let userAge = prompt('Укажите ваш возраст');

if (userAge > 18) {
    console.log('Попей пивка');
} else if (userAge >= 16 && userAge <= 18) {
    console.log('Можешь выкурить сигаретку, только маме не говори');
} else {
    console.log('Пей колу');
} 

// Task 7 

let travel = prompt('В какую сторону света вы бы хотели отправиться?');

switch (travel) {
    case 'юг':
        console.log('на юг пойдешь счастье найдешь');
        break;
    case 'север':
        console.log('на север пойдешь много денег найдешь');
        break;
    case 'запад':
        console.log('на запад пойдешь верного друга найдешь');
        break;
    case 'восток':
        console.log('на восток пойдешь разработчиком станешь');
        break;
    default:
        console.log('Попробуйте еще раз');
}

// ADVANCED level

// Task 1

// безуспешно

// Task 2 

let number = prompt('Введите число', '0');
let subtraction = prompt('Cколько отнять от предыдущего результата?', '');
let addition = prompt('Cколько прибавить к предыдущему результату?', '');
let multiply = prompt('На сколько умножить предыдущй результат?', '');
let divide = prompt('На сколько разделить предыдущй результат?', '');

let result = (((number - subtraction + addition) * multiply) / divide);

alert(`((((${number} - ${subtraction}) + ${addition}) * ${multiply}) / ${divide}) = ${result}`);

// Task 3

for (let i = 1, symb = ''; i <= 6; i++){
    symb += '#';
    console.log(symb);
};
