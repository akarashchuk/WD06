"use strict"
// //Task_1
// let a = 'true';
// let b = false;
// let c = 17;
// let d = undefined;
// let e = null;
// console.log(typeof (a));
// console.log(typeof (b));
// console.log(typeof (c));
// console.log(typeof (d));
// console.log(typeof (e));

// // Task_2
// let heigth = 15;
// let width = 20;
// if (heigth > width) {
// 	console.log(height);
// }
// else {
// 	console.log(width);
// }

// //Task_3
// for (let i = 1; i <= 20; i++) {
// 	if (i % 3 == 0) {
// 		console.log(i);
// 	}
// }

// //Task_4
// let key = true;
// let documents = true;
// let pen = true;
// let apple = false;
// let orange = true;
// let shouldGoToWork = " Выходим";
// if (((key == true) && (documents == true) && (pen == true)) && ((apple == false) && (orange == true) || (apple == true) && (orange == false))) {
// 	console.log(shouldGoToWork);
// }
// else {
// 	console.log("Без еды не пойду");
//}
//не поняла, что значит вывести в переменную

//Task_5
// let a = prompt("Введите, пожалуйста, число");
// if ((a % 5 == 0) && (a % 3 != 0)) {
// 	console.log("Fiz");
// }
// else if ((a % 3 == 0) && (a % 5 != 0)) {
// 	console.log("Buz");
// }
// else if ((a % 3 == 0) && (a % 5 == 0)) {
// 	console.log("FizBuz")
// }

// //Task_6
// let a = prompt("Введите пожалуйста возраст");
// if ((a >= 16) && (a <= 18)) {
// 	console.log("Можешь выкурить сигаретку, только маме не говори");
// }
// else if (a > 18) {
// 	console.log("Попей пивка");
// }
// else if (a < 18) {
// 	console.log("пей колу");
// }

// // //Task_7
// let a = prompt("В какую сторону света желаете отправиться ");
// a = a.toLowerCase();
// switch (a) {
// 	case "юг":
// 		alert("на юг пойдешь счастье найдешь");
// 		break;
// 	case "север":
// 		alert("на север пойдешь много денег найдешь");
// 		break;
// 	case "запад":
// 		alert("на запад пойдешь верного друга найдешь");
// 		break;
// 	case "восток":
// 		alert("на восток пойдешь разработчиком станешь");
// 		break;
// 	default:
// 		alert("Попробуйте еще");
// }
//ADVANCED level

// //Task_1a
// let a = "пОлИнА нАбЕрЕжНаЯ";
// a = a.toLowerCase();
// console.log(a[0].toUpperCase() + a.slice(1, 6) + " " +  a[7].toUpperCase() + a.slice(8));

//Task_2a
// let a = prompt("Пожалуйств ввведите число");
// let b = prompt("Сколько необходимо отнять");
// let c = prompt("Сколько необходимо прибавить");
// let d = prompt("На сколько необходимо умножить");
// let e = prompt("На скоько необходимо разделить");
// if (e == 0) {
//     alert("На ноль делить нельзя");
// }
// alert(`((((${a} - ${b}) + ${c}) * ${d}) / ${e} = ${(((a - b) + c) * d) / e}`);

// //Task_3a
// for (let i = 1; i <= 6; i++) {
// 	let b = ("*".repeat(i));
// 	console.log(b);
// }
