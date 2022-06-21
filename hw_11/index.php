<?php

error_reporting(E_ALL);
ini_set('display_errors',1);

/*///////////////////////////////// NORMAL LEVEL ///////////////////////////////////////////////// */

/*
//Task 1
$fruits = ["Apple", "Banana", "Orange"];
echo count($fruits);
*/

/*
//Task 2
$student = [
    'firstName' => 'Nastya',
    'lastName' => 'Balakhomskaya',
    'age' => 25,
];
*/

/*
//Task 3
$message ='Hello';

echo $message[0] . $message[1] . $message[4];
*/

/*
//Task 4
//$arr = [1, 2, 3, 4, 5];
$arr = array (1, 2, 3, 4, 5);
echo '<pre>';
print_r($arr);
echo  '</pre>';
*/

/*
//Task 5
$arr = [
    'ru' => ['голубой', 'красный', 'зеленый'],
    'en' => ['blue', 'red', 'green'],
];

echo $arr['ru'][0], $arr['ru'][1], $arr['en'][1];
*/

/*
//Task 6
$arr = ['Hello ', 'world', '!'];

print_r(implode($arr)); //implode - объединение элементов массива
*/

//Task 7
/*
// 1 способ (через if)
$lang = 'en';

if ($lang === 'ru') {
    $arr = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];
} elseif ($lang === 'en') {
    $arr = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
}
print_r($arr);
*/

/*
// 2 способ (через switch-case)
$lang = 'ru';

switch ($lang) {
    case 'ru':
        $arr = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];
        break;
    case 'en':
        $arr = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
        break;
    default:
       echo 'Выберите не эльфийский язык)))';
        break;
}
print_r($arr);
*/

/*
// 3 способ (через match)
$lang = 'ru';

$dayweek = match ($lang) {
    'ru' => $arr = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'],
    'en' => $arr = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
}
print_r($arr);
*/

/*
//Task 8
$arr = range(1, 100);

echo array_sum($arr);
*/

/*
//Task 9
$arr = [54, 76, 3, 6, 7];

var_dump(in_array(3, $arr)); //in_array — Проверяет, присутствует ли в массиве значение
*/

/*
//Task 10
$numbers = [1, 2, 3];
$letters = ['a', 'b', 'c'];

print_r(array_merge($numbers, $letters)); // 1 способ
print_r($fullArr = [...$numbers, ...$letters]); // 2 способ
*/

/*
//Task 11
$arr = ['a' => 1, 'b' => 2, 'c' => 3];

$keys = array_keys($arr);
$values = array_values($arr);

print_r($keys);
print_r($values);
*/

/*
//Task 12
$keys = ['a', 'b', 'c'];
$values = [1, 2, 3];

$arr = array_combine($keys, $values);
print_r($arr);
*/

/*
//Task 13
$arr = ['a', 'b', 'c', 'b', 'a'];
$arrNew = array_unique($arr);

print_r($arrNew);
*/

/*
//Task 14
$arr = ['html', 'css', 'php', 'js', 'mysql'];

foreach ($arr as $value) {
    echo $value, '<br>';
};
*/

/*
//Task 15
$arr = [10, 20, 15, 17, 24, 35];

echo array_sum($arr);
*/

//Task 16 
/*
// через for
for ($i = 1; $i < 101; $i++) {
    echo $i, PHP_EOL;
};
*/

/*
// через while
$i = 1;
while ($i <101) {
    echo $i, PHP_EOL;
    $i++;
};
*/

//Task 17
/*
// через for
for ($i = 0; $i < 101; $i += 2) {
    echo $i, PHP_EOL;
};
*/

/*
// через while
$i = 0;
while ($i <101) {
    echo $i, PHP_EOL;
    $i += 2;
};
*/

/*
//Task 18
$arr = ['green' => 'зеленый', 'red' => 'красный', 'blue' => 'голубой'];

foreach ($arr as $key => $item) {
    echo $key, ' - ', $item, PHP_EOL;
};
*/

/*///////////////////////////////// ADVANCED LEVEL ///////////////////////////////////////////////// */

/*
// Task 1
print_r(array_fill(0, 10, 'x')); //array_fill — Заполняет массив значениями
*/

/*
//Task 2
print_r(array_sum(range(1, 100)));
*/

/*
//Task 3
$num = 123;

print_r(array_sum(str_split($num)));
*/

/*
//Task 4
$message = 'hello';

$message = strrev($message); //strrev — Переворачивает строку задом наперёд
$message = ucfirst($message); //ucfirst — Преобразует первый символ строки в верхний регистр
$message = strrev($message); //strrev — Переворачивает строку задом наперёд

echo $message;
*/

/*
//Task 5
$keys = range('a', 'z');
$values = range(1, 26);
//array_combine — Создаёт новый массив, используя один массив в качестве ключей, а другой для его значений
$arr = array_combine($keys, $values); 

print_r($arr);
*/