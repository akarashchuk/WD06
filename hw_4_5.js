"use strict"

// Task_1


// let y = prompt('Введите целое положительное число y: ', '');
// function getSum() {
// 	let result = 0;
// 	for (let a = 0; a < y; a++) {
// 		result += a + 1;
// 	}
// 	return result;
// }
// alert(`Сумма всех чисел от 0 до y:  ${getSum()}`);


// Task_2

// let total = prompt('Введите сумму кредита, BYN', "");
// let rate = 17;
// let year = 5;

// function overpayment() {
// 	let over = total * rate / 100 * year;
// 	return over;
// }
// alert(`Сумма переплаты по кредиту составит, BYN: ${overpayment()}`);


//Task_3
// let a = prompt("Введите текст ...");
// let b = prompt("Значение от ...");
// let c = prompt("Значение по ...");
// function trimString() {
//     let d = a.slice(+(b - 1 ),+(c));
//     return d;
//   }
// alert(trimString());

// //Task_4
// let a = prompt("Введите число");
// let b = 0;
// function getSumNumbers() {
//     while (a != 0) {
//        c = a % 10;
//        b = b + c;
//        a = (a - c) / 10;
//     }
//     return b;
// }
// alert(getSumNumbers());

//Task_5
// let a = prompt("Введите первое число ...");
// let b = prompt("Введите второе число ...");
// let e = 0;
//     function getSum(){
//         if (a === b){
//             return(a);
//         }
//         else if (a < b){
//             while(a <= b){
//                 e = e + +a;
//                 a++;
//             }
//             return(e);
//         }
//         else if (a > b){
//             while(b <= a){
//                 e = e + +b;
//                 b++;
//             }
//             return(e);
//     }
// }
// if(Number.isInteger(+a) && Number.isInteger(+b) ){
//     alert(getSum());
// }
// else    {
//     alert("Числа не целые");
// }

// //Task_6
// let a = prompt('Введите True или False');
// a = a.toLowerCase();
// function Foo() {
// 	console.log('Foo')
// }
// function Boo() {
// 	console.log('Boo')
// }
// function FooBoo() {
// 	if (a == 'true') {
// 		return (Foo());
// 	}
// 	else if (a == 'false') {
// 		return (Boo);
// 	}
// }
// console.log(FooBoo());


// Task 7

// const user = {
// 	name: "Tanya",
// 	gender: "woman"
// };

// console.log(`name: ${user.name} \ngender: ${user.gender}`);
// delete user.name
// delete user.gender
// console.log(`name: ${user.name} \ngender: ${user.gender}`);



// Task 8
// const user = {
// 	name: "Tanya",
// 	gender: "woman"
// };

// console.log("name" in user);


// Task 9

// const student = {
// 	name: 'John',
// 	age: 19,
// 	isHappy: true
// }


// function keys(Obj) {
// 	for (let key in Obj) {
// 		console.log(key);
// 	}
// }

// function values(Obj) {
// 	for (let key in Obj) {
// 		console.log(Obj[key]);
// 	}
// }


// keys(student);
// values(student);



// Task 10


// const colors = {
// 	'ru pum pu ru rum': {
// 		red: 'красный',
// 		green: 'зеленый',
// 		blue: 'синий'
// 	};
// };


// console.log(colors['ru pum pu ru rum'].red);
// console.log(colors['ru pum pu ru rum'].blue);


// Task 11

// let salaries = {
// 	andrey: 500,
// 	sveta: 413,
// 	anton: 987,
// 	tanya: 664,
// 	alexandra: 199
// };


// function countSalary(Obj) {
// 	let a = 0;
// 	let b = 0;
// 	for (let i in Obj) {
// 		a++;
// 		b = b + Obj[i];
// 	}
// 	return b / a;
// }


// let averageSalary = countSalary(salaries);
// console.log(averageSalary)



// // Task 12

// function valid(login, password) {
// 	this.login = login.trim();
// 	this.login = login.toLowerCase();
// 	this.password = password.trim();
// 	this.password = password.toLowerCase();
// };

// let user = new valid(prompt('Введите ваш логин'), prompt('Введите ваш пароль'));

// function newRegistr(newLogin, newPassword, newUser) {
// 	newLogin.trim() && newLogin.toLowerCase() === newUser.login && newPassword.trim() && newPassword.toLowerCase() === newUser.password ? console.log('Добро пожалоВать') : console.log('Такого логина и пароля не существует');
// }

// newRegistr(prompt('Подтвердите ваш логин'), prompt('Подтвердите ваш пароль'), user);


// // Task 13
// const colors = ['red', 'green', 'blue'];
// console.log(colors.length);


// Task 14
// const animals = ['mankey', 'dog', 'cat'];
// Array.prototype.last = function () {
// 	return this[this.length - 1];
// }
// console.log(animals.last())


// // Task 15

// const numbers = [5, 43, 63, 23, 90];

// way 1
// numbers.splice(0, numbers.length);
// alert(numbers);

// way 2
// while (numbers.length > 0) {
// 	numbers.pop();
// }
// alert(numbers)


// Task 16

// const students = ['Polina', 'Dasha', 'Masha'];
// students.pop();
// students.push('Borya');
// students.splice(0, 1);
// students.unshift('Andrey');
// console.log(students);


// // Task 17
// const cats = ['Gachito', 'Tom', 'Batman'];

// for (let i = 0; i < cats.length; i++) {
// 	console.log(cats[i]);
// }



// for (const value of cats) {
// 	console.log(value);
// }



// Task 18
// const evenNumbers = [2, 4, 6, 8, 10];
// const oddNumbers = [1, 3, 5, 7, 9];
// const array3 = evenNumbers.concat(oddNumbers);
// console.log(array3.indexOf(8));

// Task 19
// const binary = [0, 0, 0, 0];

// function myString(myArray) {
// 	let str = '';
// 	for (let i = 0; i < myArray.length; i++) {
// 		i === myArray.length - 1 ? str += myArray[i] : str += myArray[i] + '1';
// 	}
// 	return str;
// }

// console.log(myString(binary));


// ADVANCED
//// Task_1a


// let a = prompt("Введите первое число ...");
// let b = prompt("Введите второе число ...");
// let c = prompt("Введите третье число ...");
// function triangle() {
// 	if ((a + +b > c) && (a + +c > b) && (b + +c > a)) {
// 		return (true);
// 	}
// 	else {
// 		return (false);
// 	}
// }
// if (Number.isInteger(+a) && Number.isInteger(+b) && Number.isInteger(+c)) {
// 	console.log(triangle());
// }
// else {
// 	console.log('Значения не целочисленные');
// }


// // Task_2a
// let a = prompt("Введите текст ...").toLowerCase();
// a = a.split(' ').join('');
// function poly() {
// 	let b = a.split('').reverse().join('');
// 	if (a === b) {
// 		return ('Палиндром');
// 	}
// 	else {
// 		return ("Не палиндром");
// 	}
// }
// alert(poly());

//Task_3a
// const matrix = [
// 	[12, 98, 78, 65, 23],
// 	[54, 76, 98, 43, 65],
// 	[13, 324, 65, 312],
// 	[9092, 22, 45, 90000],
// ];


// function average(myArray) {
// 	let averageNumber = 0;
// 	let count = 0;
// 	for (let i = 0; i < myArray.length; i++) {
// 		averageNumber += myArray[i].reduce((sum, current) => sum + current);
// 		count += myArray[i].length;
// 	}

// 	return averageNumber / count;
// }

// console.log(average(matrix));

//Task_4a
// const mixedNumbers = [-14, 24, -89, 43, 0, -1, 412, 4];
// let pos = mixedNumbers.filter(function (nump) {
// 	return nump >= 0;
// });
// let neg = mixedNumbers.filter(function (numn) {
// 	return numn < 0;
// });
// alert(`${pos}\n${neg}`);


//Готово





