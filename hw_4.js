//NORMAL level
//Task 1

function getSum(n) {

    if (typeof (n) === 'number') {
        let sum = 0
        for (let i = 0; i <= n; i++) {
            sum += i;
        }
        return sum;
    };

    return 'Введнное значение не является числом. Попробуйте ещё раз.';

}

console.log(getSum(100));

//Task 2

function getBet(sumCredit) {

    return typeof (sumCredit) === 'number' ? sumCredit * 17 * 0.01 * 5 : 'Введнное значение не является числом. Попробуйте ещё раз.';
}

console.log(getBet(100));

//Task 3

function trimString(str, startInd, endInd) {
    // крайние значения входят

    if (typeof startInd === 'number' && typeof endInd === 'number') {

        return startInd >= 0 && endInd >= 0 ? str.slice(startInd, endInd + 1) : 'Вы ввели отрицательные значения. Попробуйте ещё раз.';
    }

    return 'Введнное значение не является числом. Попробуйте ещё раз.';
}

console.log(trimString('123456789', 0, 1));

//Task 4

function getSumNumbers(myNum) {
    let mySum = 0;
    myNum = String(myNum);
    for (let i = 0; i < myNum.length; i++) {
        mySum += Number(myNum[i]);
    }

    return mySum;
}

console.log(getSumNumbers(2021));

// Task 5

function getSumNumber(a, b) {

    let sum = 0;
    if (typeof a === 'number' && typeof b === 'number') {

        if (Number.isInteger(a) && Number.isInteger(b)) {

            let c = a;
            a < b ? c = b : a = b;
            for (let i = a; i <= c; i++) sum += i;

            return sum;
        }
        return 'Введнное число не является целым. Необходимо ввести целое число.'
    }
    return 'Введнное значение не является числом. Попробуйте ещё раз.';
}

console.log(getSumNumber(6, 1));

//Task 6

function foo() {
    console.log(foo.name);
}
function boo() {
    console.log(boo.name);
}

function fooboo(isTrue, foo, boo) {

    isTrue ? foo() : boo();
}

fooboo(true, foo, boo);

//Task 7

const myObject = {
    myFirsName: 'Tatsiana',
    myLastName: 'Kolesen',
}

console.log(`FirstName: ${myObject.myFirsName} \nLastName: ${myObject.myLastName}`);

delete myObject.myFirsName;
delete myObject.myLastName;

console.log(`FirstName: ${myObject.myFirsName} \nLastName: ${myObject.myLastName}`);

//Task 8

const myBook = {
    bookName: 'The Scythe',
    author: 'R. Bredberi',
}

console.log(myBook.bookName !== undefined);

//Task 9

const student = {
    name: 'John',
    age: 19,
    isHappy: true,
}

function getKeyObject(myObj) {
    for (let key in myObj) {
        console.log(key);
    }
}

function getValueObject(myObj) {
    for (let key in myObj) {
        console.log(myObj[key]);
    }
}

getKeyObject(student);
getValueObject(student);

//Task 10

const colors = {
    'ru pum pu ru rum': {
        red: 'красный',
        green: 'зелёный',
        blue: 'синий',
    }
}

console.log(colors['ru pum pu ru rum'].red);
console.log(colors['ru pum pu ru rum'].blue);

//Task11 

let salaries = {
    andrey: 500,
    sveta: 413,
    anton: 987,
    lena: 664,
    alexandra: 199,
}

function getAvgSalary(myObj) {
    let i = 0;
    let sum = 0;
    for (let key in myObj) {
        i++;
        sum += myObj[key];
    }
    return sum / i;
}
let avgsalary = getAvgSalary(salaries);
console.log(avgsalary);


//Task 12

function user(login, password) {
    this.login = login.trim();
    this.password = password.trim();
}

let myUser = new user(prompt('Введите свой логин'), prompt('Введите свой пароль'));

function isRigth(myLogin, myPassword, currUser) {
    myLogin.trim() === currUser.login && myPassword.trim() === currUser.password ? console.log('Добро пожалоВать') : console.log('Такого логина и пароля не существует!');
}

isRigth(prompt('Подтвердите свой логин'), prompt('Подтвердите свой пароль'), myUser);

//Task 13

const myColors = ['red', 'green', 'blue'];

console.log(myColors.length);

//Task 14
const animals = ['mankey', 'dog', 'cat'];

console.log(animals.at(-1));

//Task 15

const numbers = [5, 43, 63, 23, 90];

console.log(numbers);

// способ №1
function deleteArray(myArray) {
    for (let i = 0; i < myArray.length; i++) {
        delete myArray[i];
    }
}

// способ №2
numbers.length = 0;

console.log(numbers);

//Task 16

const students = ['Polina', 'Dasha', 'Masha'];

students.pop();
students.push('Borya');
students.shift();
students.unshift('Andrey');

console.log(students);

//Task 17

const cats = ['Gachito', 'Tom', 'Batman'];

function getArrayFor(myArray) {
    for (let i = 0; i < myArray.length; i++) {
        console.log(myArray[i]);
    }
}

function getArrayForOf(myArray) {
    for (let i of myArray) {
        console.log(i);
    }
}

getArrayFor(cats);
getArrayForOf(cats);

//Task 18
const evenNumbers = [2, 4, 6, 8, 10];
const oddNumbers = [1, 3, 5, 7, 9];

const newNumbers = evenNumbers.concat(oddNumbers);

console.log(newNumbers);
console.log(newNumbers[8]);

//Task 19
const binary = [0, 0, 0, 0];

function getString(myArray) {
    let str = '';
    for (let i = 0; i < myArray.length; i++) {
        i === myArray.length - 1 ? str += myArray[i] : str += myArray[i] + '1';
    }
    return str;
}

console.log(getString(binary));

//ADVANCED level
//Task 1

function isTriangle(a, b, c) {
    return a + b > c && a + c > b && c + b > a ? true : false;
}

console.log(isTriangle(5, 7, 3));

//Task 2

function isPolynomial(myStr) {
    for (let i = 0; i < myStr.length / 2; i++) {
        return myStr[i] !== myStr[myStr.length - 1 - i] ? false : true;
    }
}

console.log(isPolynomial('шалаш'));

// Task 3

const matrix = [
    [12, 98, 78, 65, 23],
    [54, 76, 98, 43, 65],
    [13, 324, 65, 312],
    [9092, 22, 45, 90000],
];

function avgVal(myArray) {
    let avgNumber = 0;
    let count = 0;
    for (let i = 0; i < myArray.length; i++) {
        avgNumber += myArray[i].reduce((sum, current) => sum + current);
        count += myArray[i].length;
    }

    return avgNumber / count;
}

console.log(avgVal(matrix));

//Task4

const mixedNumbers = [-14, 24, -89, 43, 0, -1, 412, 4];

let positiveNumbers = [];
let negativeNumbers = [];

for (let i = 0; i < mixedNumbers.length; i++) {
    mixedNumbers[i] >= 0 ? positiveNumbers.push(mixedNumbers[i]) : negativeNumbers.push(mixedNumbers[i]);
}

console.log(positiveNumbers);
console.log(negativeNumbers);


