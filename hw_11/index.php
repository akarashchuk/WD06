<?php

error_reporting(E_ALL);
ini_set('display_errors', 1);

//Task 1

//$fruits = ["Apple", "Banana", "Orange"];
//echo count($fruits);

//Task 2

//$myUser = [
//  'Name' => 'Mark',
//  'Surname' => 'Kaladzinksy',
//  'Age' => '20',
//];
//
//print_r($myUser);

//Task 3

//$message = 'Hello';
//
//echo $message[0] . $message[1] . $message[4];

//Task 4

//$arr = [1, 2, 3, 4, 5];

//$arr = array(1, 2, 3, 4, 5);
//print_r($arr);

//Task 5

//$arr = [
//    'ru' => ['голубой', 'красный', 'зеленый'],
//    'en' => ['blue', 'red', 'green'],
//];
//
//echo $arr['ru'][0], $arr['ru'][1], $arr['en'][1];

//Task 6

//$arr = ['Hello ', 'world', '!'];
//
//echo implode("\n", $arr);

//Task 7

$lang = 'ru';

//if ($lang === 'ru') {
//    $arr = ['Понедельник', 'Вторник', 'Среда', 'Четверг'];
//} elseif ($lang === 'en') {
//    $arr = ['Monday', 'Tuesday', 'Wednesday', 'Thursday'];
//}

//switch ($lang) {
//    case 'ru':
//        $arr = ['Понедельник', 'Вторник', 'Среда', 'Четверг'];
//        break;
//    case 'en':
//        $arr = ['Monday', 'Tuesday', 'Wednesday', 'Thursday'];
//        break;
//    default:
//        echo 'Chinese';
//        break;
//}

//$condition = match ($lang) {
//    'ru' => $arr = ['Понедельник', 'Вторник', 'Среда', 'Четверг'],
//    'en' => $arr = ['Monday', 'Tuesday', 'Wednesday', 'Thursday'],
//};

//Task 8

//$arr = range(1, 100);
//$sum = 0;
//
//for ($i = 0; $i < 100; $i++) {
//    $sum += $arr[$i];
//}
//
//echo $sum;

//Task 9

//$arr = [54, 76, 3, 6, 7];
//
//var_dump(in_array(3, $arr));

//Task 10

//$numbers = [1, 2, 3];
//$letters = ['a', 'b', 'c'];
//
//$doubledArr = [...$numbers, ...$letters];
//
//print_r($doubledArr);

//print_r(array_merge($numbers, $letters));

//Task 11

//$arr = ['a' => 1, 'b' => 2, 'c' => 3];
//
//$keys = array_keys($arr);
//$values = array_values($arr);
//
//print_r($keys);

//Task 12

//$keys = ['a', 'b', 'c'];
//$values = [1, 2, 3];
//
//$arr = array_combine($keys, $values);
//print_r($arr);

//Task 13

//$arr = ['a', 'b', 'c', 'b', 'a'];
//$newArr = array_unique($arr);
//
//print_r($newArr);

//Task 14

//$arr = ['html', 'css', 'php', 'js', 'mysql'];
//
//foreach ($arr as $value) {
//    echo "$value <br>";
//}

//Task 15

//$arr = [10, 20, 15, 17, 24, 35];
//
//echo array_sum($arr);

//Task 16

//$arr = range(1, 100);

//for ($i = 0; $i < 100; $i++) {
//    echo "$arr[$i] <br>";
//}

//$i = 0;
//while ($i < 100) {
//    echo "$arr[$i] <br>";
//    $i++;
//}

//Task 17

//$arr = range(0, 100);

//for ($i = 0; $i <= 100; $i++) {
//    if ($arr[$i] === 0) {
//        continue;
//    } elseif (($arr[$i] % 2) === 0) {
//        echo "$arr[$i] <br>";
//    }
//}

//$i = 0;
//while ($i <= 100) {
//    if ($arr[$i] === 0) {
//        continue;
//    } elseif (($arr[$i] % 2) === 0) {
//        echo "$arr[$i] <br>";
//    }
//    $i++;
//}

//Task 18

//$arr = ['green' => 'зеленый', 'red' => 'красный','blue' => 'голубой'];
//
//foreach ($arr as $key => $value) {
//    echo "$key - $value";
//}

// Task 1 ADV

//print_r(array_fill(0, 10, 'x'));

//Task 2 ADV

//$arr = range(1, 100);
//
//print_r(array_sum($arr));

//Task 3 ADV

//$num = 123;
//
//$arr = str_split($num);
//
//print_r(array_sum($arr));

//Task 4 ADV

$message = 'hello';

$newMes = strrev(ucfirst(strrev($message)));
echo $newMes;

//Task 5 ADV

$arrOfKeys = range('a', 'z');
$arrOfValues = range(1, 26);

$combinedArr = array_combine($arrOfKeys, $arrOfValues);
print_r($combinedArr);