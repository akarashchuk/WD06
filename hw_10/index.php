<?php

// Task 1

//$x = 'Hello World';

//Task 2

//$x = 5;
//$y = 10;
//
//echo $x + $y;

//Task 3

$str = 'Привет мир!';

echo mb_strlen($str);

//Task 4

$oldText = "Learn HTML!";

$newText = str_replace('HTML', 'PHP', $oldText);

echo $newText;

//Task 5

$x = 5;
$y = 3;

if ($x > $y) {
    echo 'x больше y';
}

//Task 6

$a = 900;
$b = 900;

if ($a > $b) {
    echo 'First';
} elseif ($a < $b) {
    echo 'Second';
} else {
    echo 'Third';
}

//Task 7

$color = 'green';

switch ($color) {
    case 'red':
        echo 'Hello';
        break;
    case 'green':
        echo 'World';
        break;
    default:
        echo 'Vasek';
        break;
}