<?php

$x = 'Hello';
$y = 'World';
echo ($x . ' ' . $y);


echo mb_strlen ('Привет мир!');

$oldText = "Learn HTML!";
echo str_replace('HTML', "PHP", $oldText);

$x = 50;
$y = 10;
if ($x > $y) {
    echo 'x больше y';
};


$a = 20;
$b = 10;
if ($a === $b) {
    echo 'Первый';
} else if ($a > $b) {
    echo 'Второй';
} else {
    echo 'Третий';
};


$color = 'red';
switch ($color) {
    case 'red':
        echo 'Hello';
        break;
    case 'green':
        echo 'Второй';
        break;
    default:
        echo 'Bye';
}