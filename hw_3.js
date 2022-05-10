"use strict";
//NORMAL level

//Task 1
let tempVar1 = 'true';
let tempVar2 =  false;
let tempVar3 = 17;
let tempVar4 = undefined;
let tempVar5 = null;
let tempVar;

// for (let i = 1; i <= 5; i++) {
//     tempVar = tempVar + i;
//     console.log(`Variable: tempVar${i} have type: ${typeof tempVar}`); 
// } 

console.log(`Variable: tempVar1 have type: ${typeof(tempVar1)}`);
console.log(`Variable: tempVar2 have type: ${typeof(tempVar2)}`);
console.log(`Variable: tempVar3 have type: ${typeof(tempVar3)}`);
console.log(`Variable: tempVar4 have type: ${typeof(tempVar4)}`);
console.log(`Variable: tempVar5 have type: ${typeof(tempVar5)}`);

//Task 2
let height = 15;
let width = 20;

console.log(height > width ? height : width);

//Task 3
for (let i = 1; i <= 20; i++){
    if(i%3 !== 0){
        continue;
    }
    else{
        console.log(i);
    }
    
}

//Task 4
let key = true;
let documents = true;
let pen = true;
let apple = false;
let orange = true;

let shouldGoToWork = key && documents && pen && (apple || orange);
console.log(shouldGoToWork);

//Task 5
let myNumber = prompt('Введите число');
console.log((myNumber%5 !==0) && (myNumber%3 !== 0) ? ' ' :myNumber%3 !== 0 ? 'Buz' : myNumber%5 !== 0 ? 'Fiz' :  'FizBuz');

//Task 6
let myAge = prompt('Введите свой возраст ');
console.log(myAge > 18 ? 'Попей пивка' : myAge >= 16 && myAge <= 18 ? 'Можешь выкурить сигаретку, только маме не говори' : 'Пей колу');

//Task 7
let siteOfTheWorld = prompt('В какую сторону света Вы бы хотели отправиться?');
switch(siteOfTheWorld.toLowerCase().trim()){
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
      console.log('Вы ввели неверные данные! Попробуйте ещё раз.'); 
     
}

//ADVANCED level
//Task 1
let myName = 'пОлИнА нАбЕрЕжНаЯ';
let isSpace = false;

 myName = myName[0].toUpperCase() + myName.slice(1).toLowerCase();

for(let i = 0; i < myName.length; i++){
  if (myName[i] === ' '){
    isSpace = true;
    continue;
  }
  if (isSpace){
     myName = myName.slice(0, i) + myName[i].toUpperCase() + myName.slice(i + 1);
     isSpace = false;
  }
}

console.log(myName);

//Task 2
let startNumber = prompt('Введите число');
let diffNumber = prompt('Сколько нужно отнять?');
let sumNumber = prompt('Сколько нужно прибавить?');
let multiplyNumber = prompt('На сколько нужно умножить?');
let divideNumber = prompt('На сколько нужно разделить?');

alert(`((((${startNumber} - ${diffNumber}) + ${sumNumber}) * ${multiplyNumber})/${divideNumber} = ${((startNumber - diffNumber + + sumNumber) * multiplyNumber) / divideNumber})`);

//Task 3
let ladder = '';

for(let i = 1; i < 7; i++){
    console.log(ladder += '#');
}
