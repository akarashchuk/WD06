// Task 1

let message = 'true';
let booling = false;
let age = 17;
let user = undefined;
let num = null;

console.log(typeof message);
console.log(typeof booling);
console.log(typeof age);
console.log(typeof user);
console.log(typeof num);

// Task 2

let height = 15;
let width = 20;

let maxNum = [height , width];

let m = Math.max.apply(null , maxNum);

console.log(m);

// Task 3

 for (let i = 0; i <= 100; i++) {
    if (i % 3 === 0) {
       console.log(i)
    }
 }

 // Task 4

let key = true;
let documents = true;
let pen = true;
let apple = false;
let orange = true;

let shouldGoToWork = key || documents || pen || apple || orange;

console.log(shouldGoToWork)

// Task 5

// let a = prompt("Enter a number");
// let condition1 = Number(a) % 5 === 0;
// let condition2 = Number(a) % 3 === 0;
// if (condition1) {
//     console.log("Fiz")
// }
// if (condition2) {
//     console.log("Buz")
// }
// if (condition1 && condition2) {
//     console.log("FizBuz")
// }

// Task 6 

let e = prompt('Enter your age');
age = + e;

if (e > 18){
    console.log('Попей пивка');
} 
else if (e < 18){
    console.log('Пей колу'); 
} 
 if (e >= 16 && e <= 18 ){
    console.log('Можешь выкурить сигаретку, только маме не говори');
}

// Task 7

// let a = prompt('в какую сторону света вы бы хотели отправиться?');
// let b = 'юг';
// let c = 'север';
// let d = 'запад';
// let f = 'восток';

// switch (a) {
//   case b:
//     console.log( 'на юг пойдешь счастье найдешь' );
//     break;
//   case c:
//    console.log( 'на север пойдешь много денег найдешь' );
//     break;
//   case d:
//    console.log( 'на запад пойдешь верного друга найдешь' );
//     break;
//   case f:
//    console.log( "на восток пойдешь разработчиком станешь" );
// }

// ADVANCED LEVEL

// TASK 1 

let Str = prompt('enter your name');

alert(Str.toLowerCase());

// TASK 2


// TASK 3

for (let i = 0; i < 6; i++) {
   let line = ''
   for(let j = 0; j < i; j++) {
     line += '#'
   }
   console.log(`${line}#`)
 }