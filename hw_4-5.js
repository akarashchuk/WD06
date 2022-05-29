'use strict'

// Task 1

function getSum(num) {
   if (!typeof num === "number") {
      return;
   }

   var numberStack = [];

   for (var i = 1; i <= num; i++) {
      numberStack.push(i);
   }

   let result = numberStack.reduce(function (acum, currentVal) {
      return acum + currentVal;
   }, 0);
   console.log(result);
}
getSum(100);

// Task 2
let sumCredit = 1000;
let per = 17;
let year = 5;

function credit(sum, percent, year) {
   let result = (sum / 100 * percent) * year;
   console.log(result);
}
credit(sumCredit, per, year);

// Task 3

function trimString(string, sliceFrom, sliceTo) {
   let result = string.slice(sliceFrom, sliceTo);
   console.log(result);
}
trimString('Кирилл', 2, 6);

// Task 4

function getSumNumbers(number) {

   number += '';
   let arr = Array.from(number).reduce((acum, cur) => {
      return +acum + +cur;
   }, 0);
   console.log(arr);

}
getSumNumbers(123463463634636562);

// Task 5



// Task 6
const foo = () => { console.log('foo') }
const boo = () => { console.log('boo') }

function fooboo(bool, funcTrue, funcFalse) {
   if (bool) {
      funcTrue();
   } else {
      funcFalse();
   }
}
fooboo(true, foo, boo);

// Task 7
let obj = {
   name: 'Kirill',
   old: 33
}
console.log(obj);
delete obj.name;
delete obj.old;
console.log(obj);


// Task 8



// Task 9



// Task 10



// Task 11



// Task 12



// Task 13
const colors = ['red', 'green', 'blue']
console.log(colors.length);

// Task 14
const animals = ['monkey', 'dog', 'cat']
const lastAnimal = animals.slice(-1);
console.log(lastAnimal);

// Task 15



// Task 16
const students = ['Polina', 'Dasha', 'Masha']
students.pop();
students.push('Borya');
students.shift();
students.unshift('Andrey');
console.log(students);

// Task 17



// Task 18
const evenNumbers = [2, 4, 6, 8, 10]
const oddNumbers = [1, 3, 5, 7, 9]
const newNumbers = evenNumbers.concat(oddNumbers);
console.log(newNumbers);
newNumbers.indexOf(8);

// Task 19
const binary = [0, 0, 0, 0]
binary.join(1);

