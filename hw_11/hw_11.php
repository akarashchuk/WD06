<?php

error_reporting(error_level: E_ALL);
ini_set(option: 'display_errors', value: 1);

////Task 1
//
//$fruits = ["Apple", "Banana", "Orange"];
//echo count($fruits);
//
////Task 2
//
//$user = [
//    'name' => 'Max',
//    'lastName' => 'Shkurdziuk',
//    'age' => 25,
//];
//
//Task 3
//
//$message = 'Hello';
//
//echo '<pre>';
//
//echo $message[0] . ', ' . $message[1] . ', ' . $message[4];
//
//echo '</pre>';
//
//Task 4
//
//$arr = [1, 2, 3, 4, 5];
//$arr = array(1, 2, 3, 4, 5);
//
//Task 5
//
//$arr = [
//    'ru' => ['голубой', 'красный', 'зеленый'],
//    'en' => ['blue', 'red', 'green'],
//];
//
//echo $arr['ru'][0] . ', ' . $arr['ru'][1] . ', ' . $arr['en'][1];
//
//Task 6
//$arr = ['Hello ', 'world', '!'];
//
//print_r(implode($arr));
//
//Task 7
//echo '<pre>';
//
//$lang = 'ru';
//
//$ruWeek = ['понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота', 'воскресенье'];
//$enWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
//
//1 способ
//
//if ($lang === 'ru') {
//    print_r($ruWeek);
//} elseif ($lang === 'en') {
//    print_r($enWeek);
//} else {
//    echo 'Выберите русский или английский язык';
//}
//
//echo '</pre>';
//
// 2 способ
//
//echo '<pre>';
//
//switch ($lang) {
//    case 'ru':
//        print_r($ruWeek);
//        break;
//    case 'en':
//        print_r($enWeek);
//        break;
//    default:
//        echo 'Выберите русский или английский язык';
//        break;
//}
//
//echo '</pre>';
//
// 3 способ
//
//echo '<pre>';
//
//$value = match ($lang) {
//    'ru' => print_r($ruWeek),
//    'en' => print_r($enWeek),
//    default => print_r('Выберите русский или английский язык'),
//};
//
//echo '</pre>';
//
//Task 8
//
//$numbers = range(1, 100);
////print_r($numbers);
//
//echo 'Сумма: ' . array_sum($numbers);
//
//Task 9
//
//echo '<pre>';
//
//$arr = [54, 76, 3, 6, 7];
//var_dump(in_array(3, $arr));
//
//echo '</pre>';
//
//Task 10
//echo '<pre>';
//
//$numbers = [1, 2, 3];
//$letters = ['a', 'b', 'c'];
//
//print_r(array_merge($numbers, $letters)); // 1 способ
//
//$arr = [...$numbers, ...$letters]; // 2 способ
//print_r($arr);
//
//echo '</pre>';
//
//Task 11
//
//$arr = ['a' => 1, 'b' => 2, 'c' => 3];
//
//$keys = array_keys($arr);
//$values = array_values($arr);
//
//print_r($keys);
//print_r($values);
//
//Task 12
//
//$keys = ['a', 'b', 'c'];
//$values = [1, 2, 3];
//
//$arr = array_combine($keys, $values);
//print_r($arr);
//
//Task 13
//
//$arr = ['a', 'b', 'c', 'b', 'a'];
//$clearArr = array_unique($arr);
//print_r($clearArr);
//
//Task 14
//
//$arr = ['html', 'css', 'php', 'js', 'mysql'];
//
//foreach ($arr as $item) {
//    echo $item, '<br>';
//};
//
//Task 15
//
//$arr = [10, 20, 15, 17, 24, 35];
//print_r(array_sum($arr));
//
//Task 16
//
//for ($i = 0; $i <= 100; $i++) {
//    echo $i, '<br>';
//};
//
//$i = 0;
//while ($i <= 100) {
//    echo $i, '<br>';
//    $i++;
//};
//
//Task 17
//
//for ($i = 0; $i <= 100; $i += 2) {
//    echo $i, '<br>';
//};
//
//$i = 0;
//while ($i <= 100) {
//    echo $i, '<br>';
//    $i += 2;
//};
//
//Task 18
//
//$arr = ['green' => 'зеленый', 'red' => 'красный', 'blue' => 'голубой'];
//
//foreach ($arr as $key => $item) {
//    echo $key, ' - ', $item, '<br>';
//}
//
//ADVANCED//
//
//Task 1
//
//$arr = array_fill(0, 10, 'x');
//print_r($arr);
//
//Task 2
//
//echo 'Сумма чисел от 1 до 100: ' . array_sum(range(1, 100));
//
//Task 3
//echo '<pre>';
//
//$num = 123;
//
//$sumSplitNumbers = array_sum(str_split($num));
//print_r('Сумма: ' . $sumSplitNumbers);
//
//echo '</pre>';
//
//Task 4
//echo '<pre>';
//
//$message = 'hello';
//
//$reverseMessage = strrev($message);
//$upperLetterFirst = strrev(ucfirst($reverseMessage));
//echo $upperLetterFirst;
//
//echo '</pre>';
//
//Task 5
//
//$keys = range('a', 'z');
//$values = range(1, 26);
//$arrList = array_combine($keys, $values);
//print_r($arrList);