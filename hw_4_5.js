"use strict"

// Task 1

// function getSum(number) {
//     let a = 0;
//     for(let i = 0; i <= number; i++) {
//         a += i;
//     }
//     return a;
// }

// alert(getSum(135));

// Task 2

// function creditSum(n) {
//     let sum = (n / 100 * 17) * 5;

//     return sum;
// }

// console.log(creditSum(1000));

// Task 3

// function trimString(str, valueFrom, valueTo) {
//     let trim = str.substr(valueFrom, valueTo);

//     return trim;    
// }

// console.log(trimString("stringstring", 3, 6));

// Task 4

// function getSumNumbers(number) {
//     let sum = 0, x = String(number);
    
//     for(let i = 0; i < x.length; i++) {
//     sum += Number(x[i]);
//     }

//     return(sum);
// }

// console.log(getSumNumbers(2022));

// Task 5

// function getSum(a, b) {

//     let sum = 0;

//     if(a <= b) {
//         while(a <= b) {
//             sum += a;
//             a++;
//         }
//     } else {
//         while(b <= a) {
//             sum += b;
//             b++;
//         }
//     };

//     if(Number.isInteger(a) && Number.isInteger(b)) {
//         console.log(sum);
//     } else {
//         alert('Числа не целые! Введите целое число');
//     }

//     }

//     getSum(27, 27);

// Task 6

//     function foo(name) {
//         console.log(foo.name);
//             }

//     function boo(name) {
//         console.log(boo.name);
//     }

//     function fooboo(boolean, foo, boo) {
//         if (boolean) {
//             foo();
//         } else {
//             boo();
//             }
//         }

// fooboo(false, foo, boo);


// Task 7

// let team = {
//     contry: 'England',
//     division: 'Premier League',
// }

// delete team.contry;
// delete team.division;
// console.log(team);

// Task 8

// let player = {
//     contry: 'Spain',
//     position: 'midfielder',
// }

// if (player.contry) {
//     console.log('True');
// }

// Task 9

// const student = {
//     name: 'John',
//     age: 19,
//     isHappy: true
// };

// for (let key in student) {
//     console.log( key );
// }

// for (let element in student) {
//     console.log( student[element] );
// }

// Task 10

// const colors = {
//     'ru pum pu ru rum': {
//         red: 'красный',
//         green: 'зеленый',
//         blue: 'синий'
//     },
// };

// console.log(colors['ru pum pu ru rum']['red']);
// console.log(colors['ru pum pu ru rum']['blue']);

// Task 11

// let salaries = {
//     andrey: 500,
//     sveta: 413,
//     anton: 987,
//     max: 664,
//     alexandra: 199
// }

// let onlySalaries = Object.values(salaries);
// let averageSalary = onlySalaries.reduce ((sum, current) => sum + current) / onlySalaries.length;

// console.log(averageSalary);

// Task 12

// let login = prompt('Введите логин');
// let password = prompt ('Введите пароль');

// let user = {
//     login: login,
//     password: password,
// }

// let verify = confirm(`Логин: ${user.login}. Подтвердить данные?`);
// let verify2 = confirm(`Пароль: ${user.password}. Подтвердить данные?`);

// alert ('Добро пожалоВать!');

// Task 13

// const colors = ['red', 'green', 'blue'];

// console.log(colors.length);

// // Task 14

// const animals = ['monkey', 'dog', 'cat']

// console.log (animals[animals.length - 1]);

// Task 15

// const numbers = [5, 43, 63, 23, 90] 

// // 1 способ

// numbers.length = 0;
// console.log(numbers);

// // 2 способ

// numbers.splice(0,5);
// console.log(numbers);

// Task 16

// const students = ['Polina', 'Dasha', 'Masha']

// students.pop();
// students.push('Borya');
// students.shift();
// students.unshift('Andrey');

// console.log(students);

// Task 17

// const cats = ['Gachito', 'Tom', 'Batman'];

// for (let i = 0; i < cats.length; i++) {
//     console.log(cats[i]);
// }

// for (let names of cats) {
//     console.log(names);
// }

// Task 18

// const evenNumbers = [2, 4, 6, 8, 10]
// const oddNumbers = [1, 3, 5, 7, 9]

// let sum = evenNumbers.concat(oddNumbers);
// console.log(sum);

// let indexEight = sum.findIndex(item => item == 8);
// console.log(indexEight);

// Task 19

// const binary = [0, 0, 0, 0]

// let sumBinary = binary.join('1');
// console.log(sumBinary);

// ADVANCED //

// Task 1

// let triangle = function(a, b, c) {
//     if ((a + b > c) && (b + c > a) && (c + a > b) && 
//     Number.isInteger(a) && Number.isInteger(b) && Number.isInteger(c)) {
//         return true
//     } else {
//         return false
//     }
// }

// console.log(triangle(3, 8, 7));

// Task 2

// function palindrom (str) {
//     if(str == str.split('').reverse().join('')) {
//     return ('Палиндром!');
//   } else {
//       return ('Не палиндром!');
//   }
// }
//   console.log(palindrom('заказ'));

// Task 3

// const matrix = [
//     [12, 98, 78, 65, 23],
//     [54, 76, 98, 43, 65],
//     [13, 324, 65, 312],
//     [9092, 22, 45, 90000],
// ]

// let lengthMatrix = matrix.flat();
// let sumMatrix = lengthMatrix.reduce((prev, current) => prev + current, 0);
// console.log(sumMatrix);

// Task 4

// const mixedNumbers = [-14, 24, -89, 43, 0 , -1, 412, 4]

// let numbersUnderNull = mixedNumbers.filter(item => item < 0);
// let numbersUpperNull = mixedNumbers.filter(item => item >= 0);

// console.log(numbersUnderNull);
// console.log(numbersUpperNull);
