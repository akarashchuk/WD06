'use strict'

// Task 1
// function getSum(num) {
//    if (!typeof num === "number") {
//       return;
//    }

//    var numberStack = [];

//    for (var i = 1; i <= num; i++) {
//       numberStack.push(i);
//    }

//    let result = numberStack.reduce(function (acum, currentVal) {
//       return acum + currentVal;
//    }, 0);
//    console.log(result);
// }
// getSum(100);

// Task 2
// let sumCredit = 1000;
// let per = 17;
// let year = 5;

// function credit(sum, percent, year) {
//    let result = (sum / 100 * percent) * year;
//    console.log(result);
// }
// credit(sumCredit, per, year);


// Task 3

// function trimString(string, sliceFrom, sliceTo) {
//    let result = string.slice(sliceFrom, sliceTo);
//    console.log(result);
// }
// trimString('Кирилл', 2, 6);


// Task 4

// function getSumNumbers(number) {

//    number += '';
//    let arr = Array.from(number).reduce((acum, cur) => {
//       return +acum + +cur;
//    }, 0);
//    console.log(arr);

// }
// getSumNumbers(123463463634636562);


// Task 5
// function getSum(a, b) {
//    let sum = 0;
//    if (a == b) {
//       sum = a;
//    } else {
//       while (a <= b) {
//          sum += a;
//          a++;
//       }
//    }
//    return sum;
// }
// console.log(getSum(1, 5));


// Task 6
// const foo = () => { console.log('foo') }
// const boo = () => { console.log('boo') }

// function fooboo(bool, funcTrue, funcFalse) {
//    if (bool) {
//       funcTrue();
//    } else {
//       funcFalse();
//    }
// }
// fooboo(true, foo, boo);


// Task 7
// let obj = {
//    name: 'Kirill',
//    old: 33
// }
// console.log(obj);
// delete obj.name;
// delete obj.old;
// console.log(obj);


// Task 8
// let moto = {
//    marka: 'suzuki',
//    model: 'gsxr'
// };
// if ('marka' in moto) {
//    console.log(true);
// } else {
//    console.log(false);
// };


// Task 9
// const student = {
//    name: 'John',
//    age: 19,
//    isHappy: true,
// };
// for (let key in student) {
//    console.log(student[key]);
//    console.log(key);
//    console.log(key, student[key]);
// };


// Task 10
// const colors = {
//    'ru pum pu ru rum': {
//       red: 'красный',
//       green: 'зеленый',
//       blue: 'синий'
//    },
// };
// console.log(colors["ru pum pu ru rum"]['red']);
// console.log(colors["ru pum pu ru rum"]['blue']);


// Task 11
// let salaries = {
//    andrey: 500,
//    sveta: 413,
//    anton: 987,
//    andrey: 664,
//    alexandra: 199
// };
// let peopleSalaries = 0;
// for (let key in salaries) {
//    peopleSalaries += salaries[key];
// };
// let peopleSum = Object.keys(salaries).length
// let averageSalary = peopleSalaries / peopleSum;

// console.log(averageSalary);


// Task 12
// let user = new check(prompt('Логин'), prompt('Пароль'));
// function check(login, pass) {
//    this.login = login;
//    this.pass = pass;
// };
// function reg(newLogin, newPass, newUser) {
//    newLogin === newUser.login && newPass === newUser.pass ?
//       console.log('Добро пожаловать!') : console.log('Попробуйте еще раз');
// }
// reg(prompt('Подтвердите логин'), prompt('Подтвердите пароль'), user);


// Task 13
// const colors = ['red', 'green', 'blue']
// console.log(colors.length);


// Task 14
// const animals = ['monkey', 'dog', 'cat']
// const lastAnimal = animals.slice(-1);
// console.log(lastAnimal);


// Task 15
// const numbers = [5, 43, 63, 23, 90];

// numbers.splice(0);
// console.log(numbers);

// let numbers2 = numbers.slice(5);
// console.log(numbers2);


// Task 16
// const students = ['Polina', 'Dasha', 'Masha'];
// students.pop();
// students.push('Borya');
// students.shift();
// students.unshift('Andrey');
// console.log(students);


// Task 17
// const cats = ['Gachito', 'Tom', 'Batman'];

// for (let key of cats) {
//    console.log(key);
// };
// for (let i = 0; i < cats.length; i++) {
//    console.log(cats[i]);
// };


// Task 18
// const evenNumbers = [2, 4, 6, 8, 10];
// const oddNumbers = [1, 3, 5, 7, 9];
// const newNumbers = evenNumbers.concat(oddNumbers);
// console.log(newNumbers);
// newNumbers.indexOf(8);


// Task 19
// const binary = [0, 0, 0, 0];
// binary.join(1);

