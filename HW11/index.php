<?php

error_reporting(E_ALL);
ini_set(option:'display_errors', value: 1);

// Task 1

$fruits = ["Apple", "Banana", "Orange"];
var_dump(array_count_values($fruits));

// Task 2

$iAm['firstName'] = "Kirill";
$iAm['lastName'] = "Goroshko";
$iAm['old'] = "33";
var_dump($iAm);

// Task 3

$message = 'Hello';
echo $message[0];
echo $message[1];
echo $message[4];

// Task 4

$num1 = [1, 2, 3, 4, 5];
$num2 = array(
    key  => 1,
    key2 => 2,
    key3 => 3,
    key4 => 4,
    key5 => 5,
);

// Task 5

$arrTask5 = [
    'ru'=>['голубой', 'красный', 'зеленый'],
    'en'=>['blue', 'red', 'green'],
];
var_dump(array_keys($arrTask5));

// Task 6

$arr = ['Hello ', 'world', '!'];
echo implode('', $arr);

// Task 7

var lang = 'ru';
if (lang == 'ru') {
    var arr = ['понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота', 'воскресенье'];
}
if (lang == 'en') {
    arr = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
}
alert(arr);

var lang = 'ru';
switch (lang) {
    case 'ru':
        var arr2 = ['понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота', 'воскресенье'];
        break;
    case 'en':
        arr2 = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
        break;
}
alert(arr2);

// Task 8

$arrTask8 = range(1, 100);
echo array_sum(range(1, 100));

// Task 9

$arrTask9 = [54, 76, 3, 6, 7];
$result = in_array('3', $arrTask9);

// Task 10

$numbers = [1, 2, 3];
$letters = ['a', 'b', 'c'];
$result = array_merge($numbers, $letters);
$result2 = ($numbers + $letters);

// Task 11

$arrTask11 = ['a'=>1, 'b'=>2, 'c'=>3];
var_dump(array_keys($arrTask11));
var_dump(array_values($arrTask11));

// Task 12

$keys = ['a', 'b', 'c'];
$values = [1, 2, 3];
$resultTask12 = array_combine($keys, $values);
var_dump($resultTask12);

// Task 13

$arrTask13 = ['a', 'b', 'c', 'b', 'a'];
var_dump(array_unique($arrTask13));

// Task 14

$arrTask14 = ['html', 'css', 'php', 'js', 'mysql'];
foreach ($arrTask14 as $elem) {
    echo $elem.'<br>';
};

// Task 15

$arrTask15 = [10, 20, 15, 17, 24, 35];
var_dump(array_sum($arrTask15));

// Task 16

$i = 1;
while ($i <= 100){
    echo $i . '<br>';
    $i++;
};

for ($i = 0; $i <= 100; $i ++){
    echo $i . '<br>';
};

// Task 17

for ($i = 0; $i <= 100; $i +=2){
    echo $i . '<br>';
};

$i = 1;
while ($i <= 100){
    echo $i . '<br>';
    $i +=2;
};

// Task 18

$arrTask18 = ['green' => 'зеленый', 'red' => 'красный', 'blue' => 'голубой'];
foreach ($arrTask18 as $key => $elem) {
    echo $key . ' ' . '-' . ' ' . $elem . '<br/>';
};
