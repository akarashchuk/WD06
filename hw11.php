<?php
//
//
//task 1
//$fruits = ["Apple", "Banana", "Orange"];
//echo count($fruits);
//
//
//
// task 2
//$arr = [
//    'name' => 'Nikita',
//    'surname' => 'Gonchar',
//    'age' => 20
//];
//echo $arr['name'];
//
//
//
// task 3
//$message = 'Hello';
//echo $message[0], $message[1], $message[4];
//
//
//
// task 4
//$arr = [1, 2, 3, 4, 5];
//$x = array(1, 2, 3, 4, 5);

//
//
// task 5
//$arr = [
//    'ru' => ['голубой', 'красный', 'зеленый'],
//    'en' => ['blue', 'red', 'green'],
//];
//echo $arr['ru'][0];
//echo $arr['ru'][1];
//echo $arr['en'][1];
//
//
//
// task 6
//$arr = ['Hello ', 'world', '!'];
//echo "$arr[0] $arr[1] $arr[2]";
//
//
//task 7
//$lang = 'ru';
//
//
//if ($lang = 'ru') {
//    $arr = ['понедельник', 'вторник', 'среда', 'четверг'];
//} elseif ($lang = 'en') {
//    $arr = ['monday', 'tuesday', 'wednesday', 'thursday'];
//}
//
//switch ($lang) {
//    case $lang = 'ru';
//        $arr = ['понедельник', 'вторник', 'среда', 'четверг'];
//        break;
//    case $lang = 'en';
//        $arr = ['monday', 'tuesday', 'wednesday', 'thursday'];
//        break;
//}
//$days = match ($lang) {
//    'ru' => ['понедельник', 'вторник', 'среда', 'четверг', 'пятница'],
//    'en' => ['monday', 'tuesday', 'wednesday', 'thursday', 'friday'],
//};
//
//echo '<pre>';
//print_r($days);
//echo '</pre>';
//
//
//
//
// task 8
//$arr = range(1, 100);
//echo array_sum($arr);
//
//$sum = 0;
//for ($i = 1; $i <= count($arr); $i++) {
//    $sum += $i;
//}
//echo $sum;
//
//$sum = 0;
//foreach ($arr as $i) {
//    $sum += $i;
//}
//echo $sum;
//
//
//
//
// task 9
//$arr = [54, 76, 3, 6, 7];
//if (in_array(3, $arr)) {
//    echo "имеется";
//} else {
//    echo "nope";
//}
//
//
//
// task 10
//$numbers = [1, 2, 3];
//$letters = ['a', 'b', 'c'];
//$arr = array_merge($numbers, $letters);
//foreach ($arr as $i) {
//    echo $i;
//}
//
//
//
// task 11
//
//$arr = ['a' => 1, 'b' => 2, 'c' => 3];
//
//$letters = array_keys($arr);
//var_dump($letters);
//$numbers = array_values($arr);
//var_dump($numbers);
//
//
//
// task 12
//$keys = ['a', 'b', 'c'];
//$values = [1, 2, 3];
//$newarr = array_combine($keys, $values);
//var_dump($newarr);
//
//
//
// task 13
//
//$arr = ['a', 'b', 'c', 'b', 'a'];
//$newarr = array_unique($arr);
//var_dump($newarr);
//
//
//
// task 14
//$arr = ['html', 'css', 'php', 'js', 'mysql'];
//foreach ($arr as $item) {
//    echo "$item <br>";
//}
//
//
//
//
// task 15
//$arr = [10, 20, 15, 17, 24, 35];
//$sum = array_sum($arr);
//echo $sum;
//
//
//
 //task 16
//$arr = range(1, 100);
//
//for ($i = 1; $i <= count($arr); $i++) {
//    echo "$i <br>";
//}
//
//$i = 0;
//while ($i < count($arr)) {
//    $i += 1;
//    echo "$i <br>";
//}
//
//
// task 17
//
//$arr = range(1, 100);
//for ($i = 0; $i <= count($arr); $i++) {
//    if ($i % 2 == 0) {
//        echo "$i <br>";
//    }
//}
//
//$i = 0;
//while ($i < count($arr)) {
//    $i += 1;
//    if ($i % 2 == 0) {
//        echo "$i <br>";
//    }
//}
//
//
//
// task 18
//$arr = ['green' => 'зеленый', 'red' => 'красный', 'blue' => 'голубой'];
//foreach ($arr as $item => $value) {
//    echo $item . "" . "-" . "" . $value;
//    echo "<br>";
//}
//
//
// advanced
//
//
// task 1
//$arr = array_fill(0, 10, 'x');
//var_dump($arr);
//
//
// task 2
//$arr = range(1, 100);
//$sum = array_sum($arr);
//echo $sum;
//
//
//
// task 3
//$num = 123;
//$sum = array_sum(str_split($num));
//echo $sum;
//
//
//
// task 4
//
//$message = 'hello';
//$rev = strrev($message);
//$res = strrev(ucwords($rev));
//echo $res;
//
//
//
// task 5
//$items = range('a', 'z');
//$values = range(1, 26);
//$arr = array_combine($items, $values);
//foreach ($arr as $item => $value) {
//    echo $item . " " . "-" . " " . $value;
//    echo "<br>";
//}
