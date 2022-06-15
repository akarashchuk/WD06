<?php

// Task 1
$x = 'Hello World';

// Task 2

$x = 5;
$y = 20;
echo $x + $y;

// Task 3

$str = 'Привет мир!';
echo mb_strlen($str);

// Task 4

$oldText = "Learn HTML!";
$newText = "Learn PHP!";
$oldText = $newText;
echo $oldText;

// Task 5

$x = 50;
$y = 10;

if ($x > $y) {
    echo 'x больше y';
};

// Task 6

$a = 50;
$b = 10;

if ($a == $b) {
    echo 'Первый';
} elseif ($a > $b) {
    echo 'Второй';
} else {
    echo 'Третий';
};

// Task 7

$color = 'green';

switch ($color) {
    case 'red':
        echo 'Первый';
        break;
    case 'green':
        echo "Второй";
        break;
};
