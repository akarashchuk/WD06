<?php

error_reporting(E_ALL);
ini_set('display_errors', 1);

// Task 1

$x = "Hello World";

// Task 2

$x = 4;
$y = 6;

echo $x + $y;

// Task 3

$str = "Привет мир!";

echo mb_strlen($str);

// Task 4

$oldText = "Learn HTML!";

echo str_replace('HTML', 'PHP', $oldText);

// Task 5

$x = 50;
$y = 70;

echo $x > $y ? "x больше y" : "x меньше y";

// Task 6

$a = 20;
$b = 10;

if ($a === $b) {
    echo "Первый";
} else if ($a > $b) {
    echo "Второй";
} else {
    echo "Третий";

}

// Task 7

$color = 'green';

switch ($color) {
    case 'red';
        echo "Hello";
        break;
    case 'green';
        echo "Второй";
        break;
    default:
        echo "";
        break;
}