<?php 
//Задание 1
$x = 'Hello World';

echo $x . "<br>";

//Задание 2
$a = 5;
$b = 6;

echo $a + $b, "<br>";

//Задание 3
$str ='Привет мир!';

echo mb_strlen($str). "<br>";

//Задание 4
$oldText = 'Learn HTML!';

echo str_replace('HTML', 'PHP', $oldText) . "<br>";

//Задание 5
$k = 50;
$l = 10;

echo $k > $l ? "k больше l":"k меньше l" ;
echo "<br>";
//Задание 6
$aa = 20;
$bb = 10;

echo $aa === $bb ? 'Первый': ($aa > $bb ? 'Второй': 'Третий');
echo "<br>";

//Задание 7
$color = 'green';
switch ($color){
    case 'red':
        echo 'Hello';
        break;
    case 'green':
        echo 'Второй';
        break;
    default:
        echo 'Такого цвета нет!';
}


