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
// let shouldGoToWork = " �������";
// if ((key == true) && (documents == true) && (pen == true) && ((apple == true) || (orange == true)))  {
// 	console.log(shouldGoToWork);
// }
// else {
// 	console.log("��� ��� �� �����");
//}
//�� ������, ��� ������ ������� � ����������

//Task_5
// let a = prompt("�������, ����������, �����");
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
// let a = prompt("������� ���������� �������");
// if ((a >= 16) && (a <= 18)) {
// 	console.log("������ �������� ���������, ������ ���� �� ������");
// }
// else if (a > 18) {
// 	console.log("����� �����");
// }
// else if (a < 18) {
// 	console.log("��� ����");
// }

// // //Task_7
// let a = prompt("� ����� ������� ����� ������� ����������� ");
// a = a.toLowerCase();
// switch (a) {
// 	case "��":
// 		alert("�� �� ������� ������� �������");
// 		break;
// 	case "�����":
// 		alert("�� ����� ������� ����� ����� �������");
// 		break;
// 	case "�����":
// 		alert("�� ����� ������� ������� ����� �������");
// 		break;
// 	case "������":
// 		alert("�� ������ ������� ������������� �������");
// 		break;
// 	default:
// 		alert("���������� ���");
// }
//ADVANCED level

// //Task_1a
let a = "������ ����������";
a = a.toLowerCase();
console.log(`������, ` + a[0].toUpperCase() + a.slice(1, 6) + " " + a[7].toUpperCase() + a.slice(8) + `!`);

//Task_2a
// let a = prompt("���������� �������� �����");
// let b = prompt("������� ���������� ������");
// let c = prompt("������� ���������� ���������");
// let d = prompt("�� ������� ���������� ��������");
// let e = prompt("�� ������ ���������� ���������");
// if (e == 0) {
// 	alert("�� ���� ������ ������");
// }
// alert(`((((${a} - ${b}) + ${c}) * ${d}) / ${e} = ${(((a - b) + +c) * +d) / e}`);

// //Task_3a
// for (let i = 1; i <= 6; i++) {
// 	let b = ("*".repeat(i));
// 	console.log(b);
// }