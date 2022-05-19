//hw_4_5.js - Балахомская Настя
//каждый task в отдельных /*  */

///////////////////// NORMAL level ////////////////////////

"use strict"

/*
//Task 1

function getSum(a) {
    let sum = 0
        for (let i = 0; i <= a; i++){
            sum += i;
        }
        return sum;
}
console.log(getSum(100));
*/

//-----------------------------------------------------------------

/*
//Task 2

function getCredit(sumCredit) {
    return sumCredit * 17 * 0.01 * 5;
}
console.log(getCredit(3000));
*/

//-----------------------------------------------------------------

/*
//Task 3

//Метод slice вырезает и возвращает указанную часть
function trimString(str, znOt, znDo) {
    return str.slice(znOt,znDo)
}
console.log(trimString('Группа WD06', 7, 12))
*/

//-----------------------------------------------------------------

/*
//Task 4

function getSumNumbers(num) {
    num = String(num);
    let a = 0;
//length - число элементов для установки длины массива
    for (let i = 0; i < num.length; i++) {
       a += Number(num[i]);
    }
    return a;
}
console.log(getSumNumbers(2021));
*/

//-----------------------------------------------------------------

/*
//Task 5

function getSum(a, b) {
    let sum = 0;
    let c = a;
            a < b ? c = b : a = b;
            for (let i = a; i <= c; i++) sum += i;
    return sum;
}
console.log(getSum(-5,1));
//(-5)+(-4)+(-3)+(-2)+(-1)+0+1
*/

//-----------------------------------------------------------------

/*
//Task 6

function fooboo(isBoolean, foo, boo) {
    isBoolean ? foo() : boo();
}

function foo() {
    console.log(foo.name);
}

function boo() {
    console.log(boo.name);
}

fooboo(true, foo, boo);
*/

//-----------------------------------------------------------------

/*
//Task 7

const objectStudy = {
    group: 'WB06',
    lesson: 'Java Script',
}
console.log(`group: ${objectStudy.group}`);
console.log(`lesson ${objectStudy.lesson}`);

//удаление ключей из объекта
delete objectStudy.group;
delete objectStudy.lesson;

console.log(`group: ${objectStudy.group}`);
console.log(`lesson ${objectStudy.lesson}`);
*/

//-----------------------------------------------------------------

/*
//Task 8

const objectStudy = {
    group: 'WB06',
    lesson: 'Java Script',
}

console.log("group" in objectStudy); // есть ли ключ "group" в объекте objectStudy
*/

//-----------------------------------------------------------------

/*
//Task 9

const student = {
    name: 'John',
    age: 19,
    isHappy: true
}

for (let key in student) {
    console.log(key);//вывод ключей
}

for (let key in student) {
    console.log(student[key]);// вывод значений ключей объектов
}
//console.log(Object.key(student));
*/

//-----------------------------------------------------------------

/*
//Task 10

const colors = {
    'ru pum pu ru rum': {
        red: 'красный',
        green: 'зеленый',
        blue: 'синий',
    },
};

console.log(colors['ru pum pu ru rum'].red);
console.log(colors['ru pum pu ru rum'].blue);
*/

//-----------------------------------------------------------------

/*
//Task 11

let salaries = {
    andrey: 500,
    sveta: 413,
    anton: 987,
    nastya: 664,
    alexandra: 199,
}

let sum = 0;

for (let key in salaries) {
    sum += salaries[key]; //sum значений ключей объекта salaries
}

let avgsalary = sum / Object.keys(salaries).length;

console.log(avgsalary);
*/

//-----------------------------------------------------------------

/*
//Task 12

let login = prompt('Введите логин');
let password = prompt('Введите пароль');

let userBase = {
    login,
    password
}

let validUser = prompt(`Подтвердите данные? 
Логин: ${userBase.login} 
Пароль: ${userBase.password}`,
`Введите да или нет`);

if (validUser === 'да') {
    alert('Добро пожаловать!');
} else if (validUser === 'нет') {
    alert('Попробуйте еще раз');
}
*/

//-----------------------------------------------------------------

/*
//Task 13

const colors = ['red', 'green', 'blue'];

console.log(colors.length);
*/

//-----------------------------------------------------------------

/*
//Task 14

const animals = ['monkey', 'dog', 'cat'];

console.log(animals.at(-1));
*/

//-----------------------------------------------------------------

/*
//Task 15

const numbers = [5, 43, 63, 23, 90];

// 1 способ
numbers.length = 0;
console.log(numbers);

// 2 способ
numbers.splice(0);
console.log(numbers);
*/

//-----------------------------------------------------------------

/*
//Task 16

const students = ['Polina', 'Dasha', 'Masha']

students.pop();
students.push('Borya');
students.shift();
students.unshift('Andrey');

console.log(students);
*/

//-----------------------------------------------------------------

/*
//Task 17

const cats = ['Gachito', 'Tom', 'Batman'];

// через  for 1 способ
for (let i = 0; i < cats.length; i++) {
    console.log(cats[i]);
}

// через  for 2 способ
function catsFor(catsArray) {
    for (let i = 0; i < catsArray.length; i++) {
        console.log(catsArray[i]);
    }
}
catsFor(cats);

// через  for of 1 способ
for (let cat of cats) {
    console.log(cat);
}

// через  for of 2 способ
function catsForOf(catsArray) {
    for (let i of catsArray) {
        console.log(i);
    }
}
catsForOf(cats);
*/

//-----------------------------------------------------------------

/*
//Task 18

const evenNumbers = [2, 4, 6, 8, 10];
const oddNumbers = [1, 3, 5, 7, 9];

const newMassiv = evenNumbers.concat(oddNumbers);

console.log(newMassiv);
console.log(newMassiv.findIndex(i => i == 8));// поиск индекса элемента
*/

//-----------------------------------------------------------------

/*
// Task 19

const binary = [0, 0, 0, 0];

let str = binary.join('1'); // join - объединяет элементы массива в строку с указанным разделителем (он будет вставлен между элементами массива)

console.log(str);
*/

//-----------------------------------------------------------------

///////////////////// ADVANCED level /////////////////////////////////

/*
// Task 1

function triangleNumber(a, b, c) {

    if ((a + b > c) && (a + c > b) && (c + b > a)) {
        return true;
    } else {
        return false;
    }
}

console.log(triangleNumber(7, 9, 6));
*/

//-----------------------------------------------------------------

/*
// Task 2

function wordPalindrom(word) {
    let rev = '';
    for(let i = word.length - 1; i >= 0; i--) {
        rev += word[i];
    }
    return rev;
    }
    function valid(word) {
        return word === wordPalindrom(word);
    }
    console.log(valid('довод'));
*/

//-----------------------------------------------------------------

/*
// Task 3

const matrix = [
    [12, 98, 78, 65, 23],
    [54, 76, 98, 43, 65],
    [13, 324, 65, 312],
    [9092, 22, 45, 90000],
];

let fullMatrix = matrix.flat();

let sumElemMatrix = fullMatrix.reduce(function(previous, item) {
    return previous + item;
}, 0);

let result = sumElemMatrix / fullMatrix.length;

console.log(result);
*/

//-----------------------------------------------------------------

/*
// Task 4

const mixedNumbers = [-14, 24, -89, 43, 0, -1, 412, 4];

let positiveNumb = [];
let negativeNumb = [];

for (let i = 0; i < mixedNumbers.length; i++) {

//Метод push() добавляет один или более элементов в конец массива и возвращает новую длину массива.
    if (mixedNumbers[i] < 0) {
        negativeNumb.push(mixedNumbers[i]); //меньше 0 - отрицательные
    } else if (mixedNumbers[i] > 0) {
        positiveNumb.push(mixedNumbers[i]); // больше 0 - положительные
    }
}

console.log(negativeNumb);
console.log(positiveNumb); 
*/
