"use strict"

//Task 1

// let sum = 0;
// function getSum(x) {
//     for (let i = 0; i <= x; i++) {
//         sum += i;
//     }

//     console.log(sum);
// }

// getSum(100);

//Task 2

const getCredit = function(sumOfCredit) {
    let needToReturn = sumOfCredit * 1.17;
    let overPaid = needToReturn - sumOfCredit;
    console.log(overPaid);
}

getCredit(5000);

//Task 3

// function trimString(string, from, before) {
//     console.log(string.slice(from, before));
// }

// trimString('JS лучший язык', 3, 9);

//Task 4

let sum = 0;
function getSumNumbers(chislo) {
    let arr = chislo.toString().split('');
    for (let i = 0; i < arr.length; i++) {
        let arrChisla = Number(arr[i]);
        sum += arrChisla;
    }
    console.log(sum);
}

getSumNumbers(2021); 

//Task 5

// let sum = 0;
// function getSum(a, b) {
//     while (a <= b) {
//         sum += a;
//         a++;
//     }
//     console.log(sum);
// }

// getSum(1, 5);

//Task 6

// function fooboo(boolean, foo, boo) {
//     if (boolean) {
//         let foo = function(name) {
//             console.log(name);
//         }
//     } else {
//         let boo = function(surname) {
//             console.log(surname);
//         }
//     }
// }

// fooboo(true, foo, boo);

//Task 7

// let car = {
//     brand: 'Mercedes',
//     color: 'white',
// }
// delete car.brand;
// delete car.color;
// console.log(car);

//Task 9

// const student = {
//     name: 'John',
//     age: 19,
//     isHappy: true
// }

// for(let key in student) {
//     console.log(key);
//     console.log(student[key]);
// }

//Task 8

let car = {
    brand: 'Mercedes',
    color: 'white',
}

if(car.brand) {
    console.log('true');
}

//Task 10

// const colors = {
//     'ru pum pu ru rum': {
//         red: 'красный',
//         green: 'зеленый',
//         blue: 'синий'
//     },
// };

// console.log(colors['ru pum pu ru rum'].red, colors['ru pum pu ru rum'].blue);

//Task 11

// let salaries = {
//     andrey: 500,
//     sveta: 413,
//     anton: 987,
//     andrei: 664,
//     alexandra: 199
// }

// let sumOf = (+salaries.andrey + +salaries.sveta + +salaries.anton + 
//     +salaries.andrei + +salaries.alexandra) / 5;

// console.log(sumOf);

//Task 12

// let login = prompt('Write your login');
// let password = prompt('Write your password');

// let user = {
//     login: `${login}`,
//     password: `${password}`
// }

// let accept = confirm(`Login: ${user.login};\nPassword: ${user.password}`);
// if (accept) {
//     alert('Добро пожаловать!');
// }

//Task 13

const colors = ['red', 'green', 'blue'];

console.log(colors.length);

//Task 14

const animals = ['monkey', 'dog', 'cat'];
console.log(animals.at(-1));

//Task 15

const numbers = [5, 43, 63, 23, 90];

for (let number in numbers) {
    delete numbers[number];
}

console.log(numbers);

//Task 16

const students = ['Polina', 'Dasha', 'Masha'];

students.pop();
students.push('Borya');
students.shift();
students.unshift('Andrey');

console.log(students);

//Task 17

const cats = ['Gachito', 'Tom', 'Batman'];

for (let i = 0; i < cats.length; i++) {
    console.log(cats[i]);
}

for (let cat of cats) {
    console.log(cat);
}

//Task 18

const evenNumbers = [2, 4, 6, 8, 10];
const oddNumbers = [1, 3, 5, 7, 9];

let sumOfArrays = evenNumbers + ',' + oddNumbers;
console.log(sumOfArrays);
console.log(sumOfArrays.indexOf('8'));

//Task 19

const binary = [0, 0, 0, 0];

let sumOfBinariesWith = 0;
let sumOfBinaries = 0;

for (let i = 0; i < binary.length; i++) {
    sumOfBinariesWith = binary[i] + '1';
    sumOfBinaries += sumOfBinariesWith;    
}

console.log(sumOfBinaries);

//Task 1

function getTriangle(a, b, c) {
    if ((a + b > c) && (a + c > b) && (b + c > a)) {
        return true;
    } else {
        return false;
    }
}

console.log(getTriangle(5, 6, 2));

//Task 2

function checkWord(word) {
    let firstArr = word.split('');
    console.log(firstArr);
    let secondArr = firstArr.slice(0);
    secondArr.reverse();
    console.log(secondArr);
    let first = firstArr.join('');
    let second = secondArr.join('');

    if (first === second) {
        console.log('Палиндром');
    } else {
        console.log('Не палиндром');
    }
}

checkWord('saippuakivikauppias');

//Task 3

const matrix = [
    [12, 98, 78, 65, 23],
    [54, 76, 98, 43, 65],
    [13, 324, 65, 312],
    [9092, 22, 45, 90000],
];

//Task 4

const mixedNumbers = [-14, 24, -89, 43, 0 , -1, 412, 4];

let positiveNumbers = [];
let negativeNumbers = [];

for (let i = 0; i < mixedNumbers.length; i++) {
    if (mixedNumbers[i] >= 0) {
        positiveNumbers.push(mixedNumbers[i]);
    } else {
        negativeNumbers.push(mixedNumbers[i]);
    } 
}

console.log(positiveNumbers);
console.log(negativeNumbers);