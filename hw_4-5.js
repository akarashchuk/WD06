"use strict"

// NORMAL level

// Task 1 

function getSum(n) {
    let sum = 0;

    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
}

console.log(getSum(100));

// Task 2

let calcOverpay = amount => {
let rate = 0.17;
let years = 5;
let result = amount * rate * years;
return result;
}
console.log(calcOverpay(1000));

// Task 3    

function trimString(str, valueFrom, valueTo) {
    return str.slice(valueFrom, valueTo);
}

console.log(trimString('Я не плачу, это дощь((', 5, 14));

// Task 4

function getSumNumbers(num) {
    let value = 0;
    let numToStr = String(num);

    for (let i = 0; i < numToStr.length; i++) {
        value += +numToStr[i];
    }
    return value;
}

console.log(getSumNumbers(2021));

// Task 5    

function getSum(a, b) {

    let sum = 0;

    for (let i = a; i <= b; i++) {
        if (a === b) {
            return a || b;
        } else {
            sum += i;
        }
    }

    for (let i = b; i <= a; i++) {
        sum += i;
    }

    return sum;
}

console.log(getSum(5, 2));

// Task 6    

function fooboo(boolean, foo, boo) {
    if (boolean === true) {
        foo();
    } else {
        boo();
    }
}

function foo() {
    console.log(foo.name);
}

function boo() {
    console.log(boo.name);
}

fooboo(true, foo, boo);

// Task 7

let user = {
    firstName: 'Tanya',
    lastName: 'Tereschenko',
}

delete user.firstName;
delete user.lastName;

// Task 8

let place = {
    country: 'Belarus',
    city: 'Minsk',
}

console.log("city" in place);

// Task 9

const student = {
    name: 'John',
    age: 19,
    isHappy: true
}

for (let key in student) {
    console.log(key);
}

for (let key in student) {
    console.log(student[key]);
}

// Task 10

const color = {
    'ru pum pu ru rum': {
        red: 'красный',
        green: 'зеленый',
        blue: 'синий'
    },
};

console.log(color['ru pum pu ru rum'].red);
console.log(color['ru pum pu ru rum'].blue);

//Task 11

let salaries = {

    andrey: 500,
    sveta: 413,
    anton: 987,
    kate: 664,
    alexandra: 199,
}

let sum = 0;

for (let key in salaries) {
    sum += salaries[key];
}

let average = sum / Object.keys(salaries).length;

console.log(average);

// Task 12    

let login = prompt('Укажите логин');
let password = prompt('Введите пароль');

let userInfo = {
    login,
    password
}

let validation = prompt(
    `Подтверждаете указанные данные? 

Логин: ${userInfo.login} 
Пароль: ${userInfo.password}`);

if (validation === 'да') {
    alert('Добро пожаловать!');
} else if (validation === 'нет') {
    alert('Отменено');
}

// Task 13

const colors = ['red', 'green', 'blue'];

console.log(colors.length);

// Task 14

const animals = ['monkey', 'dog', 'cat'];

console.log(animals.at(-1));


// Task 15

const numbers = [5, 43, 63, 23, 90];

// v-1

numbers.splice(0);
console.log(numbers);

// v-2

numbers.length = 0;
console.log(numbers);

// Task 16

const students = ['Polina', 'Dasha', 'Masha'];

students.pop();
students.push('Borya');
students.shift();
students.unshift('Andrey');

console.log(students);

// Task 17

const cats = ['Gachito', 'Tom', 'Batman'];

for (let i = 0; i < cats.length; i++) {
    console.log(cats[i]);
}

for (let cat of cats) {
    console.log(cat);
}

// Task 18

const evenNumbers = [2, 4, 6, 8, 10];
const oddNumbers = [1, 3, 5, 7, 9];
const allNumbers = evenNumbers.concat(oddNumbers);


console.log(allNumbers);

const index = allNumbers.findIndex(function (item) {
    return item === 8;
});

console.log(index);

// Task 19

const arr = [0, 0, 0, 0];

let str = arr.join('1');

console.log(str);


// ADVANCED level

// Task 1

function checkTriangle(a, b, c) {
    if ((a + b > c) && (a + c > b) && (c + b > a)) {
        return true;
    } else {
        return false;
    }
}

console.log(checkTriangle(3, 6, 5));

// Task 2 

function checkPalindrom(palindrom) {
    let lengthToCompare = palindrom.length - 1;

    for (let i = 0; i <= lengthToCompare / 2; i++) {
        if (palindrom[i] !== palindrom[lengthToCompare - i]) {
            return false;
        }
    }
    return true;
}

console.log(checkPalindrom('заказ'));

// Task 3  

const matrix = [
    [12, 98, 78, 65, 23],
    [54, 76, 98, 43, 65],
    [13, 324, 65, 312],
    [9092, 22, 45, 90000],
];

let total = matrix.flat().reduce(function (prev, item) {
    return prev + item;
});

let result = total / matrix.flat().length;

console.log(result);

// Task 4

const mixedNumbers = [-14, 24, -89, 43, 0, -1, 412, 4];

let negative = [];
let positive = [];

for (let i = 0; i < mixedNumbers.length; i++) {
    if (mixedNumbers[i] < 0) {
        negative.push(mixedNumbers[i]);
    } else if (mixedNumbers[i] > 0) {
        positive.push(mixedNumbers[i]);
    }
}

console.log(negative);
console.log(positive);