"use strict"

// Task  1
// Написать функцию getSum, которая будет высчитывать сумму чисел от нуля, до параметра, 
// который мы в неё передаем.

// const getSum = (X) => {
//    let result = 0;
//    for (let a = 0; a < X; a++) {
//       result += a + 1;
//    }
//    return result;
// }
// console.log(getSum(100))


// Task 2
// Напишите функцию которая в качестве аргумента принимает в себя сумму кредита, 
// который хочет получить клиент и верните результат переплаты по кредиту:
// процентная ставка в год — 17%, количество лет — 5, сумма кредита не увеличивается.

// const overPayment = (creditAmount, creditRate = 17, yearsNumber = 5) => {
//    return creditAmount * creditRate * yearsNumber/ 100;
// }
// console.log(overPayment(100));


   // Task 3
   // Написать функцию trimString которая в качестве аргумента принимает три параметра: 
   // строку, значение от, значение по.
   // После вызова функция должна вернуть переданную строку обрезанную по значениям от и по.

// const trimString = (string, cutFrom, cutTill) => {
//    return string.slice((cutFrom - 1), cutTill);
// }
// console.log('Обрезанная строка:',trimString('После вызова функция должна что-то.', 3, 10));


   // Task 4
   // Написать функцию getSumNumbers, которая будет принимать число 
   // и вычислять сумму цифр из которых состоит число.

// const getSumNumbers = (numberIn) => {
//    let summ = 0;
//    let arr = Array.from('' + numberIn);
//    for (let number of arr.map(Number)) {
//    summ += number;
//    } 
//    return summ;
// }
// console.log(getSumNumbers(1234567));


// Task 5
// Написать функцию getSum которая принимает два целых числа a и b, 
// которые могут быть положительными или отрицательными, найти сумму всех чисел между ними, 
// включая их, и вернуть ее. Если два числа равны, верните a или b.

// let a, b, total;
// const getSum = (a, b) => {
//    let sum = 0;
//    if (a > b) {[a, b] = [b, a]};
//    if (a === b) {
//       total = a + b;
//       console.log('Числа равны между собой и равны:',a);
//    } else {
//       for (let i = 0; i < (b - a); i++) {
//          sum += a + i;
//          total = sum + b;
//       };
//    };
//    return total;
// };

// console.log('Сумма чисел между a и b (включительно) равна:', getSum(-200, -150));


// Task 6
// Напишите функцию fooboo которая принимает в качестве аргумента три параметра:
// булевое значение,функцию foo которая выводит в консоль свое имя,
// функцию boo которая выводит в консоль свое имя
// ***** Если переданное булевое значение true запускаем функцию foo иначе boo

// function foo() {
//    console.log(foo.name);
// }
// function boo() {
//    console.log(boo.name);
// }
// function fooboo(bool, foo, boo) {
//    if (bool == true) {
//       foo();
//    } else {
//       boo();
//    }
// }
// fooboo(true, foo, boo);


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

// let user = new check(prompt('Логин'), prompt('Пароль'));
// function check(login, pass) {
//    this.login = login;
//    this.pass = pass;
// };
// function registration(newLogin, newPass, newUser) {
//    newLogin === newUser.login && newPass === newUser.pass ?
//    console.log('Добро пожаловать!') :
//    console.log('Попробуйте еще раз');
// }
// registration(prompt('Подтвердите логин'), prompt('Подтвердите пароль'), user);


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

// console.log('Объединенный массив:',evenNumbers.concat(oddNumbers));
// console.log('Индекс числа:',allNumbers.indexOf(8));


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

// function triangle(a, b, c) {
//    return a + b > c && a + c > b && b + c > a ? true : false;
// }
// alert(triangle(5, 6, 0));


// Task 2
// Реализуйте функцию которая будет проверять, является ли слово палиндромом.

// let word = prompt('Введите слово','');
// word = word.split('').join('');
// const isPal = () => {
//    let drow = word.split('').reverse().join('');
//    return (word === drow) ? true : false;
// }
// console.log(isPal());


// Task 3
// Выведите в консоль среднее значение чисел в многомерном массиве.

// const matrix = [
//    [12, 98, 78, 65, 23],
//    [54, 76, 98, 43, 65],
//    [13, 324, 65, 312],
//    [9092, 22, 45, 90000],
// ]

// function aveCount(array) {
//    let Summ = 0;
//    let Length = 0;
//    for (let i = 0; i < array.length; i++) {
//       Summ += array[i].reduce((a, b) => a + b);
//       Length += array[i].length;
//    }
//    return Summ / Length;
// }
// console.log(aveCount(matrix));


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