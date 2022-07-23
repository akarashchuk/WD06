<?php

error_reporting(E_ALL);
ini_set(option:'display_errors', value: 1);

$x = 5;

function sum(&$x, $y)
{
    $x = 3;
 echo $x + $y;
}

$num1 = 5;
$num2 = 4;


sum($num1, $num2);




$generate = function (): void
{
    $age = 5;
    var_dump($age);

}
generate();

$arr = [1, 2, 4, 5];
$newArr = array_map(function (int $item): string{
    return (string) $item;
}, $arr);
echo '<pre>';
print_r($newArr);

