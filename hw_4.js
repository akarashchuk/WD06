"use strict"

// Task 1
// Написать функцию getSum, которая будет высчитывать сумму чисел от нуля, до параметра, 
// который мы в неё передаем.

// let X = prompt('Введите целое положительное число X: ','');
// function getSum () {
//    let result = 0;
//    for (let a = 0; a < X; a++) {
//       result += a + 1;
//    }
//       return result;
// }
//       alert(`Сумма всех чисел от 0 до X:  ${getSum ()}`);

// Task 2
// Напишите функцию которая в качестве аргумента принимает в себя сумму кредита, 
// который хочет получить клиент и верните результат переплаты по кредиту:
// процентная ставка в год — 17%, количество лет — 5, сумма кредита не увеличивается

let creditAmount = prompt('Введите сумму кредита, BYN', "");
let creditRate = prompt('Введите процентную ставку, %', "");
let yearsNumber = prompt('Введите срок кредита, лет', "");

function overPayment() {
   let over = creditAmount * creditRate / 100 * 5;
   return over;
}
   alert(`Сумма переплаты составит, BYN: ${overPayment()}`);