<?php
error_reporting(error_level:E_ALL);
ini_set(option:'display_errors', value:1);

//Task 1

//$fruits = ["Apple", "Banana", "Orange"];
//
//echo '<pre>';
//var_dump(count($fruits));
//echo '</pre>';
//
////Task 2
//
//$user = [
//    'name' => 'Vlad',
//    'secName' => 'Samsonov',
//    'age' => 25,
//];
//
//echo '<pre>';
//print_r($user);
//echo '</pre>';

//Task 3

//$message = 'Hello';
//
//$liters = $message[0].$message[1].$message[4];
//
//print_r($liters);

//Task 4

//$arr = [1, 2, 3, 4, 5];
//
//$arr = array(1, 2, 3, 4, 5);

//Task 5

//$arr = [
//    'ru' => ['голубой', 'красный', 'зеленый'],
//    'en' => ['blue', 'red', 'green'],
//];
//
//echo '<pre>';
//print_r($arr['ru'][0]);
//print_r($arr['ru'][1]);
//print_r($arr['en'][1]);
//echo '</pre>';

//Task 6

//$arr = ['Hello ', 'world', '!'];
//
//var_dump(implode($arr));


//Task 7

//$lang = 'ru';
//
//switch ($lang) {
//    case  'ru';
//        echo "пн ", "вт ", "ср ", "чт ", "пт ", "суб ", "вскр ";
//        break;
//    case  'en';
//        echo 'mon ', 'tue ', 'wed ', 'thu ', 'fri ', 'sat ', 'sun';
//        break;
//    default:
//        echo 'Я не знаю такого языка';
//        break;
//};

//$lang = 'en';
//
//if ('ru' > 'en') {
//    echo "пн ", "вт ", "ср ", "чт ", "пт ", "суб ", "вскр ";
//} elseif ('ru' < 'en') {
//    echo 'mon ', 'tue ', 'wed ', 'thu ', 'fri ', 'sat ', 'sun';
//} else {
//    echo 'Я не знаю такого языка';
//}  //????

//$lang = match ('ru') {
//        "8.0" => $result = "строка",
//        8.0 => $result = "число"
//};

//Task 8

//$arr = (range(1, 100));
//
//echo '<pre>';
//print_r (array_sum($arr));
//echo '</pre>';

//Тask 9

//$arr = [54, 76, 3, 6, 7];
//
//print_r (in_array(3, $arr, ));

//Task 10

//$numbers = [1, 2, 3];
//$letters = ['a', 'b', 'c'];
//
//$result = array_merge($numbers, $letters);
//
//print_r($result);

//$numbers = [1, 2, 3];
//$letters = ['a', 'b', 'c'];
//
//$arr = [... $numbers, ... $letters];
//
//echo '<pre>';
//print_r($arr);
//echo '</pre>';

//Task 11

//$arr = ['a'=>1, 'b'=>2, 'c'=>3];
//
//$keys = ['a', 'b', 'c'];
//$values = [1, 2, 3];

//Task 12

//$keys = ['a', 'b', 'c'];
//$values = [1, 2, 3];
//
//print_r(array_combine($keys, $values));

//Task 13

//$arr = ['a', 'b', 'c', 'b', 'a'];
//
//print_r(array_unique($arr));

//Task 14

//$arr = ['html', 'css', 'php', 'js', 'mysql'];
//
//foreach ($arr as $myarr) {
//    echo $myarr."<br/>";
//}

//Task 15

//$arr = [10, 20, 15, 17, 24, 35];
//
//print_r(array_sum($arr));

//Task 16

//$i = 1;
//while ($i <= 100) {
//    echo $i++."<br/>";
//}

//$i = 1;
//
//for ($i = 1; $i <= 100; $i++) {
//    echo $i.'<br>';
//}

//Task 17

//$i = 0;
//
//for ($i = 0; $i <= 100; $i++) {
//    if( $i%2 == 0 ) {
//        echo $i . '<br>';
//    }
//}

//$i = 0;
//
//while ($i <= 100) {
//        echo  $i ."<br/>";
//        $i += 2;
//}

//Task 18

//$arr = ['green'=>'зеленый', 'red'=>'красный','blue'=>'голубой'];
//foreach ($arr as $key => $elem) {
//    echo $key . ' ' . '-' . ' ' . $elem . '<br/>';
//}
//echo '<br/>';

//ADVANCED level

//Task 1

//$arr = array_fill(0, 10, 'x');
//print_r($arr);

//Task 2

//$arr = array_sum(range(1, 100));
//print_r($arr);

//Task 3

//$num = 123;
//$arr = str_split($num, 1);
//print_r (array_sum($arr));

//Task 4

//$message = 'hello';
//$message = strrev($message);
//$message = ucfirst($message);
//$message = strrev($message);
//print_r ($message);

//Task 5

//$keys = range('a', 'z');
//$value = range(1, 26);
//$arr = array_combine($keys, $value);
//print_r ($arr);