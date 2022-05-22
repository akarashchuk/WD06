'use strict'

// Task 1
let num = 100;
function getSum(num) {

   for (let i = 0; i <= num; i += 1) {
      console.log(i);
   }
}
getSum();

// Task 2



// Task 3



// Task 4



// Task 5



// Task 6



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

