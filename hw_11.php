<?php

error_reporting(E_ALL);
ini_set('display_errors', 1);

//NORMAL level
// Task 1

$fruits = ["Apple", "Banana", "Orange"];

echo count($fruits);

// Task 2

$user = [
    'firstName' => 'Tanya',
    'lastName' => 'Tereschenko',
    'realAge' => 21,
    'psychologicalAge' => 72,
];

// Task 3

$message = 'Hello';

echo $message[0], PHP_EOL;
echo $message[1], PHP_EOL;
echo $message[strlen($message) - 1], PHP_EOL;

// Task 4

$arr = [1, 2, 3, 4, 5];
$arr = array(1, 2, 3, 4, 5);

// Task 5

$arr = [
    'ru' => ['голубой', 'красный', 'зеленый'],
    'en' => ['blue', 'red', 'green'],
];

echo $arr['ru'][0], PHP_EOL;
echo $arr['ru'][1], PHP_EOL;
echo $arr['en'][1], PHP_EOL;

// Task 6

$arr = ['Hello ', 'world', '!'];
$str = implode(' ', $arr);

echo $str;

// Task 7

$lang = 'en';

if ($lang == 'ru') {
    $weekDays = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница'];
    echo '<pre>';
    print_r($weekDays);
    echo '</pre>';
} elseif ($lang == 'en') {
    $weekDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
    echo '<pre>';
    print_r($weekDays);
    echo '</pre>';
} else {
    echo "Sorry, we don't understand your language";
}

switch ($lang) {
    case 'ru';
        $weekDays = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница'];
        echo '<pre>';
        print_r($weekDays);
        echo '</pre>';
        break;
    case 'en';
        $weekDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
        echo '<pre>';
        print_r($weekDays);
        echo '</pre>';
        break;
    default:
        echo "You need to learn English!";
        break;
}

$weekDays = match ($lang) {
    'ru' => ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница'],
    'en' => ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    default => "Ну тогда хотя бы русский!",
};

echo '<pre>';
print_r($weekDays);
echo '</pre>';

// Task 8

$numbers = range(1, 100);
$sum = array_sum($numbers);

echo '<pre>';
print_r($sum);
echo '</pre>';

// Task 9

$arr = [54, 76, 3, 6, 7];

var_dump(in_array(3, $arr));

// Task 10

$numbers = [1, 2, 3];
$letters = ['a', 'b', 'c'];

$newArray = array_merge($numbers, $letters);

//v-2
//$newArray = [...$numbers, ...$letters];

echo '<pre>';
print_r($newArray);
echo '</pre>';

// Task 11

$arr = ['a' => 1, 'b' => 2, 'c' => 3];

$keys = array_keys($arr);
$values = array_values($arr);

echo '<pre>';
print_r($keys);
print_r($values);
echo '</pre>';

// Task 12

$keys = ['a', 'b', 'c'];
$values = [1, 2, 3];

$newArray = array_combine($keys, $values);

echo '<pre>';
print_r($newArray);
echo '</pre>';

// Task 13

$arr = ['a', 'b', 'c', 'b', 'a'];

$newArray = array_unique($arr);

echo '<pre>';
print_r($newArray);
echo '</pre>';

// Task 14

$arr = ['html', 'css', 'php', 'js', 'mysql'];

foreach ($arr as $value) {
    echo $value, '<br>';
}

// Task 15

$arr = [10, 20, 15, 17, 24, 35];

$sum = array_sum($arr);

echo '<pre>';
print_r($sum);
echo '</pre>';

// Task 16

for ($i = 1; $i <= 100; $i++) {
    echo $i, PHP_EOL;
}

$i = 1;
while ($i <= 100) {
    echo $i++, PHP_EOL;
}

// Task 17

for ($i = 1; $i <= 100; $i++) {
    if ($i % 2 === 0) {
        echo $i, PHP_EOL;
    }
}

$i = 1;
while ($i <= 100) {
    $i++;
    if ($i % 2 === 0) {
        echo $i, PHP_EOL;
    }
}

// Task 18

$arr = ['green' => 'зеленый', 'red' => 'красный', 'blue' => 'голубой'];

foreach ($arr as $key => $value) {
    $str = $key . ' ' . '-' . ' ' . $value;
    echo '<br>', $str;
}

//ADVANCED level

//Task 1

$arr = array_fill(0, 10, 'x');

echo '<pre>';
print_r($arr);
echo '</pre>';

//Task 2

$sum = array_sum(range(1, 100));

print_r($sum);

//Task 3

$num = 123;
$sum = array_sum(str_split($num));

print_r($sum);

//Task 4

$message = 'hello';
$message = ucfirst(strrev($message));

echo strrev($message);

//Task 5

$keys = range('a', 'z');
$values = range(1, 26);

$arr = array_combine($keys, $values);

echo '<pre>';
print_r($arr);
echo '</pre>';

