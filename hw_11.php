<?php

error_reporting(error_level: E_ALL);
ini_set(option: 'display_errors', value: 1);


//NORMAL level
// Task 1
//$fruits = ["Apple", "Banana", "Orange"];
//echo (count($fruits));


//Task 2
//$girl = [
//    'name' => 'Tanya',
//    'lastName' => 'Ivanchanka',
//    'age' => 33,
//];


//Task 3
//$message = "Hello";
//echo $message[0] . ', ' . $message[1] . ', ' . $message[4];
//


//Task 4
//$arr = [1, 2, 3, 4, 5];
//$arr = array(1, 2, 3, 4, 5);


//Task 5
//$arr = [
//    'ru'=>['голубой', 'красный', 'зеленый'],
//    'en'=>['blue', 'red', 'green'],
//];
//
//echo $arr['ru'][0] . ', ' . $arr['ru'][1] . ', ' . $arr['en'][1];
//


////Task 6
//$arr = ['Hello ', 'world', '!'];
//echo implode($arr);


//Task 7
//$lang = 'ru';
//
//$Неделя = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];
//$Week = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

//if
//if ($lang === 'ru') {
//    print_r($Неделя);
//} elseif ($lang === 'en') {
//    print_r($Week);
//} else {
//    echo 'Выберите английский или русский язык';
//}


////switch-case
//switch ($lang) {
//   case 'ru':
//       print_r($Неделя);
//       break;
//   case 'en':
//        print_r($Week);
//        break;
//    default:
//        echo 'Выберите английский или русский язык';
//        break;
//}

//
// match
//////$value = match ($lang) {
//    'ru' => print_r($Неделя),
//    'en' => print_r($Week),
//    default => print_r('Выберите английский или русский язык')
//};
//


//  Task 8
//$arr = range(1, 100);
//echo array_sum(range(1, 100));


//Task 9
//$arr = [54, 76, 3, 6, 7];
//var_dump(in_array(3, $arr));


//Task 10
//$numbers = [1, 2, 3];
//$letters = ['a', 'b', 'c'];
////
//$result1 = array_merge($numbers, $letters);
//print_r($result1);
////
//$result2 = [...$numbers, ...$letters];
//print_r($result2);
//


//Task 11
//$arr = ['a' => 1, 'b' => 2, 'c' => 3];
//$keys = array_keys($arr);
//$values = array_values($arr);
//
//print_r($keys);
//print_r($values);


//Task 12

//$keys = ['a', 'b', 'c'];
//$values = [1, 2, 3];
//$new_arr=array_combine($keys, $values);
//print_r($new_arr);


//Task 13
//$arr = ['a', 'b', 'c', 'b', 'a'];
//$new_arr = array_unique($arr);
//print_r($new_arr);

//Task 14

//$arr = ['html', 'css', 'php', 'js', 'mysql'];
//foreach ($arr as $item) {
//    echo "$item <br>";
//};
//

//Task 15

//$arr = [10, 20, 15, 17, 24, 35];
//echo array_sum($arr);


//Task 16

//$i = 1;
//while ($i <= 100) {
//    echo $i.'<br>';
//    $i++;
//}
//

//for ($i = 1; $i <= 100; $i++) {
//    echo $i . '<br>';
//}

//Task 17
//for ($i = 0; $i <= 100; $i +=2) {
//    echo $i . '<br>';
//}


//$i = 0;
//while ($i <= 100) {
//    echo $i. '<br>';
//    $i += 2;
//}


//Task 18
//$arr = ['green'=>'зеленый', 'red'=>'красный','blue'=>'голубой'];
//foreach ($arr as $key => $item) {
//    echo $key, ' - ', $item, '<br>';
//}


//ADVANCED level
//Task 1

//$arr = array_fill(0, 10, 'x');
//print_r($arr);

//Task 2
//
//echo array_sum(range(1, 100));

//Task 3

//$num = 123;
//$arr = str_split($num, 1);
//echo array_sum($arr);


//Task 4
//$message = 'hello';
//$message = strrev($message);
//$message = ucfirst($message);
//$message = strrev($message);
//echo $message;

//Task 5
//$keys = range('a', 'z');
//$values = range(1, 26);
//$arr = array_combine($keys, $values);
//print_r($arr);

//?>
