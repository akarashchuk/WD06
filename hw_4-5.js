"use strict"

//TASK 1

// function getSum(n) {

// let sum = 0;

// for (let i = 1; i <= n; i++) {
//      sum += i;
// }

//    return sum;
// }

// console.log(getSum(100));

//TASK 2

// function getCredit(sumCredit) {
//    return sumCredit * 17 * 0.01 * 5;
// }
// console.log(getCredit(5000));

//TASK 3

function trimString(str, valueFrom, valueBy) {
        let forString = str.slice(valueFrom, valueBy);
   
        return forString;    
    }
   
    console.log(trimString("очень длинный текст", 6, 13));

 //тип того ?))) 

//TASK 4

// function getSumNumbers (num) {
//    num = String(num);
//     let a = 0;
//     for (let i = 0; i < num.length; i++) {
//        a += Number(num[i]);
//     }
//     return a;
// }
// console.log(getSumNumbers(2021));

//TASK 5

// function getSum (a, b) {
//       let sum = 0;
//       let c = a;
//               a < b ? c = b : a = b;
//               for (let i = a; i <= c; i++) sum += i;
//       return sum;
//   }

//   console.log(getSum(1, 1));

//TASK 6

// function fooboo (booling, foo, boo) {
//    booling ? foo() : boo();
// };

// function foo () {
//    console.log(foo.name);
// }

// function boo () {
//    console.log(boo.name);
// }

// fooboo(false, foo, boo);

// fooboo(true, foo, boo);

//TASK 7

// let obj = {
//    login: 'Petr',
//    password: '123456789',
// }

// console.log(obj);

// delete obj.login;
// delete obj.password;

// console.log(obj);

//TASK  8

// let myObj = {
//    nameFirst: 'John',
//    age: 30,
// }

// console.log("age" in myObj);

//TASK 9 

//  const student = {
//     name: 'John',
//     age: 19,
//     isHappy: true
//  }

//  for (let prop in student) {
//    console.log("student." + prop + " = " + student[prop]);
//  }

 // TASK 10

//  const colors = {
//    'ru pum pu ru rum': {
//        red: 'красный',
//        green: 'зеленый',
//        blue: 'синий'
//    },
// };

// console.log(colors['ru pum pu ru rum'].red);
// console.log(colors['ru pum pu ru rum'].blue);

//TASK 11

 let salaries = {
    andrey: 500,
    sveta: 413,
    anton: 987,
    vadim: 664,
    alexandra: 199,
   }

let sum = 0;
let count = 0;
for (let name in salaries) {
   sum += salaries[name];
   count++;
}

let avg = sum / count;

console.log(avg);

/*Изначально этим же способом пытался пройтись ,но выходит NaN
переделаю утром если додумаю */ 

//TASK 12

// let login = prompt('Enter login');
// let password = prompt('Enter password');
// let data = {
//     login,
//     password
// }
// let confirmation = prompt(`confirmation date 
// Логин: ${data.login} 
// Пароль: ${data.password}`,
// `Enter yes or no`);
// if (confirmation === 'yes') {
//    alert('Welcome!');
// } if (confirmation === 'no') {
//    alert('try again');
// } else (confirmation === ''); {
//    alert('it\'s not necessary')
// }

 //TASK 13

//  const color = ['red', 'green', 'blue'];

//  console.log(color.length);

 //TASK 14

//  const animals = ['monkey', 'dog', 'cat'];

//  console.log(animals[animals.length -1]);

 //TASK 15

//   const numbers = [5, 43, 63, 23, 90]

//   const newNumbers = numbers.splice (
//      0, 5
//   );

//   console.log(numbers);

 //TASK 16

//  const students = ['Polina', 'Dasha', 'Masha']

//  students.pop(); 
//  students.push('Borya');
//  students.shift();
//  students.unshift('Andrey');

//  console.log(students);

 //TASK 17
 
//  const cats = ['Gachito', 'Tom', 'Batman'];

//  for (let i = 0; i < cats.length; i++) {
//    console.log(cats[i]);
//  }

//  for (let cat of cats) {
//    console.log(cat);
// }

//TASK 18 

// const evenNumbers = [2, 4, 6, 8, 10];
// const oddNumbers = [1, 3, 5, 7, 9];
// const allNumbers = evenNumbers.concat(oddNumbers);

// console.log(allNumbers);

// const index = allNumbers.indexOf(8);

// console.log(index);

//TASK 19

// const binary = [0, 0, 0, 0];

// console.log(binary.join(1));

//ADVANCED level

//Task 1

// function myNum (a, b, c) {
//    if ((a + b > c) && (a + c > b) && (c + b > a)) {
//       return true;
//   } else {
//       return false;
//   }
// }

// console.log(myNum(5, 9, 3));

//Task 2

// function polindrom(myStr) {
//    let pol
//    for (let i = 0; i < myStr.length / 2; i++) {
//       pol = myStr[i] === myStr[myStr.length - 1 - i];
//        if (!pol) {
//            break;
//        }
//    }
//    return pol;
// }

// console.log(polindrom('вдв'));

//Task 3

// const matrix = [
//    [12, 98, 78, 65, 23],
//    [54, 76, 98, 43, 65],
//    [13, 324, 65, 312],
//    [9092, 22, 45, 90000],
// ]

// let sum = 0;
// let count = 0;
// for (let row of matrix) {
//     sum += row.reduce((prev, item) => prev + item, 0);
//     count += row.length;
// }

// let avg = sum / count;

// console.log(avg);

//Task 4

//  const mixedNumbers = [-14, 24, -89, 43, 0 , -1, 412, 4];

//  let positiveNumber = []
//  let negativeNumber = []

//  for (let i = 0; i < mixedNumbers.length; i++) {
//     mixedNumbers[i] >= 0 ? positiveNumber.push(mixedNumbers[i]) : negativeNumber.push(mixedNumbers[i]);
//  }

//  console.log(positiveNumber);
//  console.log(negativeNumber);