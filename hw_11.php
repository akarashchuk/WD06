<?php

// Task 1

$fruits = ["Apple", "Banana", "Orange"];
echo count($fruits);

// Task 2

$user = [
    'name' => 'Vital',
    'surname' => 'Skalaban',
    'age' => '24',
];

// Task 3

$message = 'Hello';
print_r($message[0]);
print_r($message[1]);
print_r($message[-1]);

// Task 4

// var 1
$arr = [
    1,
    2,
    3,
    4,
    5,
];

// var 2
$arr[0] = 1;
$arr[1] = 2;
$arr[2] = 3;
$arr[3] = 4;
$arr[4] = 5;

// var 3
$arr = array(1, 2, 3, 4, 5);

// Task 5

$arr1 = [
    'ru'=>['голубой', 'красный', 'зеленый'],
    'en'=>['blue', 'red', 'green'],
];

echo $arr1['ru'][0], $arr1['ru'][1], $arr1['en'][1];

// Task 6

$arr2 = ['Hello ', 'world', '!'];
echo implode($arr2);
echo $arr2[0], $arr2[1], $arr2[2];

// Task 7
$lang = 'ru';

if ($lang == 'ru') {
    $arr3 = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница'];
} elseif ($lang == 'eng') {
    $arr3 = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
} else {
    echo 'Try again';
};

switch ($lang) {
    case 'ru':
        $arr3 = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница'];
        break;
    case 'eng':
        $arr3 = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
        break;
    default:
        echo 'Try again';
};

$arr3 = match ($lang) {
    'ru' => ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница'],
    'eng' => ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
};

var_dump($arr3);

// Task 8

$numbers = range(1, 100);
echo array_sum($numbers);

// Task 9

$arr4 = [54, 76, 3, 6, 7];
if (in_array(3, $arr4)) {
    echo 'Да, такая троечка имеется';
} else {
    echo 'Такой цифры нет';
};

// Task 10

$numbers = [1, 2, 3];
$letters = ['a', 'b', 'c'];
$result = array_merge($numbers, $letters);
$result = [...$numbers, ...$letters];

//Task 11

$arr = ['a' => 1, 'b' => 2, 'c' => 3];

$keys = array_keys($arr);
$values = array_values($arr);

// Task 12

$keys = ['a', 'b', 'c'];
$values = [1, 2, 3];
$result = array_combine($keys, $values);

// Task 13

$arr = ['a', 'b', 'c', 'b', 'a'];
$arr = array_unique($arr);
print_r($arr);

// Task 14

$arr = ['html', 'css', 'php', 'js', 'mysql'];

foreach ($arr as $value) {
    echo $value, '<br>';
};

// Task 15

$arr = [10, 20, 15, 17, 24, 35];
echo array_sum($arr);

// Task 16

// for
for ($i = 1; $i <= 100; $i++) {
    echo $i, '<br>';
};

//while
$i = 1;
while ($i <= 100) {
    echo $i, '<br>';
    $i++;
};

// Task 17

// for
for ($i = 0; $i <= 100; $i++) {
    if (!($i % 2)) {
        echo $i, '<br>';
    };
};

// while
$i = 0;
while ($i <= 100) {
    echo $i, '<br>';
    $i += 2;
};

// Task 18

$arr = ['green' => 'зеленый', 'red' => 'красный', 'blue' => 'голубой'];
foreach ($arr as $key => $item) {
    echo $key, ' - ', $item, '<br>';
};

// ADVANCED level

// task 1

$x = array_fill(0, 10, 'x');
print_r($x);

// Task 2

echo array_sum(range(1, 100));

// Task 3

$num = 123;
echo array_sum(str_split($num));

// Task 4

$message = 'hello';
$reverse = strrev($message);
$upperFirst = strrev(ucfirst($reverse));
echo $upperFirst;

// Task 5

$keys = range('a', 'z');
$values = range(1, 26);
print_r(array_combine($keys, $values));