"use strict"

// Task 1
// Написать функцию getSum, которая будет высчитывать сумму чисел от нуля, до параметра, 
// который мы в неё передаем.

// let X = prompt('Введите целое положительное число X: ','');
// function getSum () {
//    let result = 0;
//    for (let a = 0; a < X; a++) {
//       result += a + 1;
//    }
//       return result;
// }
//       alert(`Сумма всех чисел от 0 до X:  ${getSum ()}`);


// Task 2
// Напишите функцию которая в качестве аргумента принимает в себя сумму кредита, 
// который хочет получить клиент и верните результат переплаты по кредиту:
// процентная ставка в год — 17%, количество лет — 5, сумма кредита не увеличивается

// let creditAmount = prompt('Введите сумму кредита, BYN', "");
// let creditRate = prompt('Введите процентную ставку, %', "");
// let yearsNumber = prompt('Введите срок кредита, лет', "");

// function overPayment() {
//    let over = creditAmount * creditRate / 100 * 5;
//    return over;
// }
//    alert(`Сумма переплаты составит, BYN: ${overPayment()}`);


   // Task 3
   // Написать функцию trimString которая в качестве аргумента принимает три параметра: 
   // строку, значение от, значение по.
   // После вызова функция должна вернуть переданную строку обрезанную по значениям от и по.

//    let line = prompt('Введите строку', "");
//    let cutFrom = prompt('Обрезать строку от символа №', "");
//    let cutTill = prompt('Обрезать строку до символа №', "");
//    console.log('Исходная строка:',line);
//    console.log('Обрезать от символа',cutFrom);
//    console.log('Обрезать до символа',cutTill);

// function trimString () {
//    let newLine = line.slice((cutFrom - 1), cutTill);
//    return newLine;
// }
// console.log('Обрезанная строка:',trimString());


   // Task 4
   // Написать функцию getSumNumbers, которая будет принимать число 
   // и вычислять сумму цифр из которых состоит число.

// let numberIn = prompt('Введите число',"");
// let summ = 0;
// function getSumNumbers () {
//       let arr = Array.from('' + numberIn);
//       for (let number of arr.map(Number)) {
//       summ += number;
//       }
//       return summ;
// }
// alert(getSumNumbers ());


// Task 5
// Написать функцию getSum которая принимает два целых числа a и b, 
// которые могут быть положительными или отрицательными, найти сумму всех чисел между ними, 
// включая их, и вернуть ее. Если два числа равны, верните a или b.

// let X = +prompt('Введите 1е число', '');
// let Y = +prompt('Введите 2е число', '');
// let Sum = 0;
// if (X < Y) {
//    } else {
//    [X, Y] = [Y, X];
// }
// function getSum () {
//       for (let i = 0; X <= Y; i++) {
//          Sum = Sum + X; 
//          X += 1;
//          console.log(Sum);
//       }
//       return Sum;
// }
// alert(getSum());


// Task 6
// Напишите функцию fooboo которая принимает в качестве аргумента три параметра:
// булевое значение,функцию foo которая выводит в консоль свое имя,
// функцию boo которая выводит в консоль свое имя
// ***** Если переданное булевое значение true запускаем функцию foo иначе boo

// function fooboo(bool) {
//    if (bool == true) {
//       foo();
//    } else {
//       boo();
//    }
// }

// function foo() {
//    console.log(foo.name);
// }
// function boo() {
//    console.log(boo.name);
// }
// fooboo(true);


   // Task 7
   // Создать любой обьект с двумя ключами и любыми значениями в них, 
   // а затем удалить ключи из обьекта.

   // let myObj = {
   //    height: 333,
   //    width: 555,
   // };
   // console.log(myObj);

   // delete myObj.height;
   // delete myObj.width;
   // console.log(myObj);


   // Task 8
   // Создать любой обьект с двумя ключами и любыми значениями в них, 
   // а затем проверить есть ли в обьекте определенный ключ и если есть 
   // вывести в консоль true

   // let shopCard = {
   //    fruit: 'orange',
   //    vegetable: 'tomato',
   // };
   // if ('fruit' in shopCard) {
   //    console.log(true);
   // }


   // Task 9
   // C помощью цикла for in вывести в консоль сначала все ключи, 
   // потом значения ключей обьекта.

//    const student = {
//       name: 'John',
//       age: 19,
//       isHappy: true
//   }

//   for (let datas in student) {
//      console.log(datas);
//   };

//   for (let datas in student) {
//    console.log(student[datas]);
//    }; 


// Task 10
// Вывести в консоль слово красный и синий

// const colors = {
//    'ru pum pu ru rum': {
//        red: 'красный',
//        green: 'зеленый',
//        blue: 'синий'
//    },
// };
// console.log(colors['ru pum pu ru rum'].red);
// console.log(colors['ru pum pu ru rum'].blue);


   // Task 11
   // Вычислите среднюю зарплату сотрудников и результат поместите 
   // в соответствующую переменную

//    let salaries = {
//       andrey: 500,
//       sveta: 413,
//       anton: 987,
//       oleg: 664,
//       alexandra: 199,
//   }
//   let totalSalaries = 0;
//   for(let key in salaries) {
//      totalSalaries += salaries[key];
//   }
//   let emploeeNumber = Object.keys(salaries).length
//   let aveSalary = totalSalaries / emploeeNumber;

//   alert(aveSalary);


// Task 12
// Создать валидатор, запросить у пользователя логин и пароль для регистрации. 
// Затем данные записать в обьект. Потом попросить пользователя подтвердить данные. 
// Если верно введен логин и пароль, вывести сообщение Добро пожалоВать.




// Task 13
// Выведите в консоль длину массива.

// const colors = ['red', 'green', 'blue']

// console.log(colors.length);


// Task 14
// Выведите в консоль последний элемент массива вне зависимости от его длинны.

// const animals = ['monkey', 'dog', 'cat']

// console.log(animals[animals.length - 1]);


// Task 15
// Удалите все элементы в массиве 2мя способами и выведите в консоль полученный результат.

// const numbers = [5, 43, 63, 23, 90]
// 1й способ:
// numbers.splice(0);
// console.log(numbers);

// 2й способ:
// let numbers1 = numbers.slice(5);
// console.log(numbers1);


// Task 16
// Удалите последний элемент массива, затем вместо него добавьте в массив студента Borya.
// Удалите первый элемент массива, затем вместо него добавьте в массив студента Andrey.
// Полученный результат не забудьте вывести в консоль.

// const students = ['Polina', 'Dasha', 'Masha']

// students.pop('Masha');
// students.push('Borya');
// students.shift('Polina');
// students.unshift('Andrey');

// console.log(students);


// Task 17
// Выведите в консоль все элементы массива. Сначала через цикл for, затем for of.

// const cats = ['Gachito', 'Tom', 'Batman']

// for (let i = 0; i < cats.length; i++) {
//    console.log(cats[i]);
// }

// for (let names of cats) {
//    console.log(names);
// }


// Task 18
// Соедините два массива чисел в один.
// В полученном массиве найдите индекс числа 8.

// const evenNumbers = [2, 4, 6, 8, 10];
// const oddNumbers = [1, 3, 5, 7, 9];

// const allNumbers = evenNumbers.concat(oddNumbers);

//  console.log(allNumbers);

//  let index = +prompt('Input array number', '');
//  alert(allNumbers.indexOf(index));


// Task 19
// const binary = [0, 0, 0, 0]
// Превратите данный массив в строку.
// [0, 0, 0, 0] -> '0101010'

// let newBinary = binary.join('1');
// console.log(newBinary);


// ADVANCED level


// Task 1
// Реализуйте функцию, который принимает 3 целочисленных значения a, b, c.
// Функция должна возвращать true, если треугольник можно построить 
// со сторонами заданной длины, и false в любом другом случае.

// let a = prompt('Сторона a','');
// let b = prompt('Сторона b','');
// let c = prompt('Сторона c','');

// function triangle() {
//    return a + b > c && a + c > b && b + c > a ? true : false
// }
// alert(`Треугольник невозможен:   ${triangle()}`);


// Task 2
// Реализуйте функцию которая будет проверять, является ли слово палиндромом.

// let isPalindrom = prompt('Введите слово','');
// let arrPal = isPalindrom.split('');

// function isTrue() {
//    for (let i = 0; i < arrPal.length; i++) {
//       return arrPal[i] == arrPal[arrPal.length -i - 1] ? true : false
//    }
// }
//    console.log(isTrue());


// Task 3
// Выведите в консоль среднее значение чисел в многомерном массиве.

// const matrix = [
//    [12, 98, 78, 65, 23],
//    [54, 76, 98, 43, 65],
//    [13, 324, 65, 312],
//    [9092, 22, 45, 90000],
// ]

// let Summ = 0;
// function count(array) {
//    array.forEach(function(value) {
//       Array.isArray(value) ? count(value) : Summ += value;
//    });
//    return Summ;
// }
// let length = matrix.reduce(function(totalLength, subarr) {
//    return totalLength + subarr.length;
//  }, 0);

// console.log(count(matrix) / length);


// Task 4
// Создайте два массива, в один поместите все положительные числа включая 0, 
// в другой все отрицательные. Оба массива затем выведите в консоль.

// const mixedNumbers = [-14, 24, -89, 43, 0 , -1, 412, 4];
// let negNumbers = [];
// let posNumbers = [];

// for (let i = 0; i < mixedNumbers.length; i++) {
//    if (mixedNumbers[i] < 0) {
//       negNumbers.push(mixedNumbers[i]);
//    } else {
//       posNumbers.push(mixedNumbers[i]);
//    }
// }
// console.log(negNumbers);
// console.log(posNumbers);





