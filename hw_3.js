"use strict";

// Task 1

let var1 = 'true';
let var2 = false;
let var3 = 17;
let var4;
let var5 = null;
console.log(var1);
console.log(typeof var1);
console.log(var2);
console.log(typeof var2);
console.log(var3);
console.log(typeof var3);
console.log(var4);
console.log(typeof var4);
console.log(var5);
console.log(typeof var5);

let types = [
   var1,
   var2,
   var3,
   var4,
   var5
]
types.forEach(function (el, i) {
   console.log(typeof el)
})

// Task 2

let height = 15;
let width = 20;

if (height > width) {
   console.log(height);
} else {
   console.log(width);
}

// Task 3

for (perebor = 0; perebor <= 20; perebor++) {
   if (perebor % 3 === 0) {
      console.log(perebor);
   }
}

// Task 4

let key = true;
let documents = true;
let pen = true;
let apple = false;
let orange = true;
if (key && documents && pen && (apple || orange)) {
   let shouldGoToWork = true;
   console.log('Все взяли, гоу работать')
} else {
   let shouldGoToWork = false;
   console.log('Остаемся дома')
}

// Task 5

let value5 = prompt("Введите число", '');
if (value5 % 3 === 0 && value5 % 5 === 0) {
   alert('FizBuz');
} else if (value5 % 3 === 0) {
   alert('Buz');
} else if (value5 % 5 === 0) {
   alert('Fiz');
}

// Task 6

let value6 = prompt("Введите ваш возраст", '');

if (value6 > 16 && value6 < 18) {
   alert('Можешь выкурить сигаретку, только маме не говори');
} else if (value6 >= 18) {
   alert('Выпей пивка');
} else if (value6 <= 16) {
   alert('Пей колу');
}

// Task 7

let direction = prompt("куда едем", '');

switch (direction) {
   case 'юг':
      console.log('на юг пойдешь счастье найдешь');
      break;
   case 'север':
      console.log('на север пойдешь много денег найдешь');
      break;
   case 'запад':
      console.log('на запад пойдешь верного друга найдешь');
   case 'восток':
      console.log('на восток пойдешь разработчиком станешь');
      break;
   default:
      console.log('в следующей жизни повезёт больше ༼ つ ◕_◕ ༽つ');
      break;
}