//hw_3.js - Балахомская Настя
//каждый task в отдельных /*  */

///////////////////// NORMAL level ////////////////////////

/*
//task 1

let a = 'true';
let b = false;
let c = 17;
let d = undefined;
let e = null;

console.log(typeof a);
console.log(typeof b);
console.log(typeof c);
console.log(typeof d);
console.log(typeof e);
*/

//-----------------------------------------------------------------

/*
//task 2

let height = 15
let width = 20

console.log(Math.max(height, width));
*/

//-----------------------------------------------------------------

/*
//task 3

for (let i = 1; i <= 20; i++){
    if(i % 3 ===0){
        console.log(i);
    }
}
*/

//-----------------------------------------------------------------

/*
//task 4

// || - или
// && - и
let key = true;
let documents = true;
let pen = true;
let apple = false;
let orange = true;

let shouldGoToWork = (key === true) && (documents === true) && (pen === true) && ((apple === true) || (orange === true));

console.log(shouldGoToWork);
*/

//-----------------------------------------------------------------

/*
//task 5

//let a = '';
//prompt('Введите любое число', a);
//a = +a;

let a = prompt('Введите любое число', '');
a= +a;
  
if (a % 5 == 0 && a % 3 == 0){
    console.log('FizBuz');
} 
else if (a % 3 == 0){
    console.log('Buz');
} 
else if (a % 5 == 0){
        console.log('Fiz');
}
*/

//-----------------------------------------------------------------

/*
//task 6

let age = prompt('Введите свой возраст', '');
age = +age;
 // цикл на первые 2 условия 
if (age > 18){
    console.log('Попей пивка');
} 
else if (age < 18){
    console.log('Пей колу'); 
} 
// && - и
//цикл на доп. условие
 if (age >= 16 && age <= 18 ){
    console.log('Можешь выкурить сигаретку, только маме не говори');
}
*/

//-----------------------------------------------------------------

/*
//task 7

let country = prompt('В какую сторону света вы бы хотели отправиться', 'Например: юг, север, запад или восток');

switch(country){
    case 'юг': 
       console.log('на юг пойдешь счастье найдешь'); 
       break;
    case 'север': 
       console.log('на север пойдешь много денег найдешь');
       break;
    case 'запад': 
       console.log('на запад пойдешь верного друга найдешь');
       break;
    case 'восток': 
       console.log('на восток пойдешь разработчиком станешь');
       break;
    default:
        console.log('Введите сторону света еще раз (нижним регистром)');
}
*/

//-----------------------------------------------------------------

///////////////////// ADVANCED level /////////////////////////////////

/*
//task 1

let userName = 'пОлИнА нАбЕрЕжНаЯ';{

 let splitSent = userName.toLowerCase().split(" ")
 for (let i = 0; i < splitSent.length; i++){
    splitSent[i] = splitSent[i][0].toUpperCase() + splitSent[i].slice(1)
 }
 //console.log(splitSent.join(" "))
 alert("Привет, " + splitSent.join(" "));
}

// 1. toLowerCase() - перевод всей строки в нижний регистр
//    split(" ") - разбиение строки в массив по указанному разделителю (по пробелу)
// 2. Прокручивание каждого слова в этом массиве через for
// 3. splitSent[i][0].toUpperCase() - преобразование первой буквы каждого слова в верхний регистр
//    splitSent[i].slice(1) -  объединение первой заглавной буквы с остальной частью слова
//    splitSent[i] = - присвоение обратно массиву 
// 4. splitSent.join(" ")) - Соединение каждого слова массива в одну строку и вывод каждого слова с заглавной буквы.

*/

//-----------------------------------------------------------------

/*
//task 2

let number = prompt('Введите любое число', '');
number = +number;
let numMinus = prompt('Сколько отнять от предыдущего числа?', '');
numMinus = +numMinus;
let numPlus = prompt('Сколько прибавить к предыдущему результату?', '');
numPlus = +numPlus;
let numUmn = prompt('На сколько умножить предыдущий результат?', '');
numUmn = +numUmn;
let numDel = prompt('На сколько разделить предыдущий результат?', '');
numDel = +numDel;

let rez = ((((number - numMinus) + numPlus) * numUmn) / numDel);

alert("((((" + number + " - " + numMinus + ")" + " + " + numPlus + ")" + " * " + numUmn + ")" + " / " + numDel + "=" + rez + ")");
*/

//-----------------------------------------------------------------

/*
//task 3
let maxNum = prompt('Введите max количество символов "#" в лесенке', '');

for (let i = 0; i < maxNum; i++) {
    let line = '#'
    for(let j = 0; j < i; j++) {
      line += '#'
    }
    console.log(`${line}`)
  }
  */