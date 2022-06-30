"use strict"

// //task1

// let i;
// let x = prompt(i);
// let sum = 0; 
// function getSum(){
//     for (let a = 0; a <= x; a++){
        
//         sum += a;
//     }
//     console.log(sum);
// }
// getSum();




// // task 2


// function getSum(year, st){

//     let i;
//     let x = prompt(i);
//     let sum = x * st * year;
//     alert(sum);
// }
// getSum(5, 0.17);


// // task 3


// function trimString (string, from, to){
//     let x = string.slice(from, to);
//     console.log(x);
// }
// trimString('asdfghjk', 2, 8);




// // task4

// function getSumNumbers(num){
//     let x = '' + num;
//     let sum = 0;
//     for (let i = 0; i < x.length; i++){
//         sum += +x[i];
//     }
//    return sum;
// }
// console.log(getSumNumbers(2012));


// //task 5



// function getSum (a, b){
//     let sum = 0;
//     if (a == b){
//         sum = a;
//     } else{
//         while (a <= b){
//             sum += a;
//             a++;
//         }
//     }
//     return sum;
// }
// console.log(getSum(2,4));




// //task 6


// function fooboo (x, foo, boo){
//    if (x == true){
//     return foo;
//    } else {
//     return boo;
//    }
// }
// console.log(fooboo(false, 'hello', 'world')); 




// //task 7


// let obj = {
//     x: 2,
//     y: 'asd',
// }

// console.log(obj);
// delete obj.x;
// delete obj.y;
// console.log(obj);




// // task 8


// let obj = {
//     x: 2,
//     y: 'asd',
// }
// if ('x' in obj){
//     console.log(true);
// } else{
//     console.log(false);
// }
// delete obj.x;
// if ('x' in obj){
//     console.log(true);
// } else{
//     console.log(false);
// }




//task 9
// const student = {
//     name: 'John',
//     age: 19,
//     isHappy: true
// }
// for (let key in student){
//     console.log(key, student[key])
// }




// // task 10

// const colors = {
//     'ru pum pu ru rum': {
//         red: 'красный',
//         green: 'зеленый',
//         blue: 'синий'
//     },
// };

// console.log(colors["ru pum pu ru rum"]['red'], 'и', colors["ru pum pu ru rum"]['blue'])






// // task 11
// let salaries = {
//     andre: 500,
//     sveta: 413,
//     anton: 987,
//     andrey: 664,
//     alexandra: 199
// }
// let sum = 0;
// for (let key in salaries){
//     sum += salaries[key];
// }
// let avsum = sum/Object.keys(salaries).length
// console.log(avsum);





// // task 13


// const colors = ['red', 'green', 'blue'];
// console.log(colors.length)





// // task 14


// const animals = ['monkey', 'dog', 'cat'];

// console.log(animals[animals.length - 1]);






// // task 15

// const numbers = [5, 43, 63, 23, 90];
// numbers.splice(0, numbers.length);
// console.log(numbers);




// // task 16



// const students = ['Polina', 'Dasha', 'Masha'];
// students.pop();
// students.push('Borya');
// students.shift();
// students.unshift('Andrey');
// console.log(students);





// // task 17

// const cats = ['Gachito', 'Tom', 'Batman'];

// for (let key of cats){
//     console.log(key);
// }
// for (let i = 0; i < cats.length; i++){
//     console.log(cats[i]);
// }



// // task 18

// const evenNumbers = [2, 4, 6, 8, 10];
// const oddNumbers = [1, 3, 5, 7, 9];
// const newNumbers = evenNumbers.concat(oddNumbers);
// console.log(newNumbers)
// console.log(newNumbers.indexOf(8));



// // task 19

// const binary = [0, 0, 0, 0];
// binary.splice(1, 0, 1);
// binary.splice(3, 0, 1);
// binary.splice(5, 0, 1);
// console.log(binary);



// // task 12
// alert('Введите логин');
// let login = prompt();
// alert('Введите пароль');
// let parol = prompt();
// const obj = {
//     login,
//     parol,
// }
// for (let key in obj){
//     console.log(obj[key]);
// }
// let proverka = prompt();
// if (proverka == 'yes'){
//     alert('Добро пожаловать');
// } else {
//     alert('Введите заново');         
// }