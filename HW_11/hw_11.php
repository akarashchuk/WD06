<?php 
//Задание 1
$ftuits = ['Apple', 'Banana', 'Orange'];

echo count($ftuits);

//Задание 2
$myArr = [
    'firstName' => 'Tatsiana',
    'lastname' => 'Kolesen',
    'age' => 39,];

echo "<pre>";
print_r($myArr);
echo "</pre>";

//Задание 3
$message = 'Hello';
echo $message[0] . "\t",  $message[1] . "\t", $message[4] . "\t";

//Задание 4
$arr1 = [1, 2, 3, 4, 5];
$arr2 = array(1, 2, 3, 4, 5);
echo "<pre>";
print_r($arr1);
print_r($arr2);
echo "</pre>";

//Задание 5
$arr = [
    'ru' => ['голубой', 'красный', 'зеленый'],
    'en' => ['blue', 'red', 'green'],
];
echo $arr['ru'][0] . "\t", $arr['ru'][1] . "\t", $arr['en'][1] . "\t", "<br>";

//Задание 6
$arr = ['hello', 'world', '!'];
echo $arr[0] . ' ' . $arr[1] . ' ' . $arr[2], "<br>";

//Задание 7
$lang = 'ru';
if($lang === 'ru'){
    $arr = ['понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота', 'воскресенье'];
}
else{
    $arr = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
};
echo "<pre>";
print_r($arr);
echo "</pre>";

switch ($lang){
    case 'ru':
        $arr = ['понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота', 'воскресенье'];
        break;
    case 'en':
        $arr = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
        break;
    default:
        $arr = [];
};
echo "<pre>";
print_r($arr);
echo "</pre>";

//Задание 8
$sum = 0;
for($i = 1; $i < 101; $i++){
    $arr[] = $i;
    $sum += $i;
}
echo $sum, "<br>";

//Задание 9
$arr = [54, 76, 3, 6, 7];
echo in_array(3, $arr),  "<br>";

//Задание 10
$numbers = [1, 2, 3];
$letters = ['a', 'b', 'c'];
$arr = [...$numbers, ...$letters];
echo "<pre>";
print_r($arr);
echo "</pre>";

echo "<pre>";
print_r(array_merge($numbers, $letters));
echo "</pre>";

//Задание 11
$arr = ['a' => 1, 'b' => 2, 'c' => 3];
foreach ($arr as $key => $item){
    $keys[] = $key;
    $values[] = $item;
}
echo "<pre>";
print_r($keys);
print_r($values);
echo "</pre>";

//Задание 12
$keys = ['a', 'b', 'c'];
$values = [1, 2, 3];
echo "<pre>";
print_r(array_combine($keys, $values));
echo "</pre>";

//Задание 13
$arr = ['a', 'b', 'c', 'd', 'a'];
echo "<pre>";
print_r(array_unique($arr));
echo "</pre>";

//Задание 14
$arr = ['html', 'css', 'php', 'js'];
foreach ($arr as $item){
    echo $item, "<br>";
}

//Задание 15
$arr = [10, 20, 15, 17, 24, 35];
echo array_sum($arr), "<br>";

//Задание 16
for($i = 1; $i <= 100; $i++){
    echo $i,  "<br>";
}
$i = 1;
 while ($i <= 100){
     echo $i,  "<br>";
     $i++;
 }
//Задание 17
for($i = 0; $i <= 100; $i++){
    if($i%2 === 0){
        echo $i,  "<br>";
    }
}
$i = 0;
while ($i <= 100){
    if($i%2 === 0){
        echo $i,  "<br>";
    }
    $i++;
}
//Задание 18
$arr = ['gree' => 'зеленый', 'red' => 'красный', 'blue' => 'голубой'];
foreach ($arr as $key => $item){
    print_r($key . '-' . $item . "<br>");
}
//ADVANCED level
//Задание 1
$arr = [];
echo "<pre>";
print_r(array_pad($arr, 10, 'x'));
echo "</pre>";

//Задание 2
echo  100 * (100 + 1)/2, "<br>";

//Задание 3
$num = 123;
echo array_sum(str_split($num)), "<br>";

//Задание 4
$message = 'hello';
$char = substr($message, -1, 1);
$message = substr_replace($message, strtoupper($char), -1);
echo $message, "<br>";

//Задание 5
$keys = range('a', 'z');
$items = range(1, 26);
echo "<pre>";
print_r(array_combine($keys, $items));
echo "</pre>";
