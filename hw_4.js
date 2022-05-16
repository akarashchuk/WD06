"use strict"

// Task 1
// Написать функцию getSum, которая будет высчитывать сумму чисел от нуля, до параметра, 
// который мы в неё передаем.

let X = prompt('Введите целое положительное число X: ','');
function getSum () {
   let result = 0;
   for (let a = 0; a < X; a++) {
      result += a + 1;
   }
      return result;
}
      alert(`Сумма всех чисел от 0 до X:  ${getSum ()}`);

