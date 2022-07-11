<?php

declare(strict_types=1);

error_reporting(E_ALL);
ini_set('display_errors', '1');

// Task 1

function recovery() {
    return 'Hello, World!';
};

echo recovery();

// Task 2

function recoveryYear($year) {
    if ($year % 4 == 0 && $year % 100 == 0 && $year % 400 == 0) {
        return true;
    } else {
        return false;
    };
};

echo recoveryYear(1900);

//  Task 3

$str = 'Cascading Style Sheets';
function splitStr($str) {
    $word = explode(' ', $str);
    for ($i = 0; $i < count($word); $i++) {
        echo $word[$i][0];
    };
};

splitStr($str);

//  Task 4

function reverse($str) {
    $str = implode('', array_reverse(mb_str_split($str)));
    return $str;
}

echo reverse('Привет мир!');

//  Task 5

function simpleNum($number) {
    if ($number < 1) return false;
    for ($i = 2; $i * $i <= $number; $i++)
    {
        if ($number % $i == 0)
            return false;
    }
    return true;
};

echo simpleNum(17);

//  Task 6

function lastname($str) {
    $code_delete = array('-', '"', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', '{', '}', '|', ':', '"', '<', '>', '?', '[', ']', ';', "'", ',', '.', '/', '', '~', '`', '=');
    $str = explode(' ', str_replace($code_delete, '', $str));
    return end($str);
};
echo lastname('hello, world!');

// Task 7

function maxNumber(array $arrNum): array
{
    if (count($arrNum) <= 1) {
        return $arrNum;
    }

    $new_combinations = [];

    foreach ($arrNum as $key => $item) {
        foreach (maxNumber(array_diff_key($arrNum, [$key => $item])) as $newArrNum) {
            $new_combinations[] = $item . $newArrNum;
        }
    }
    return $new_combinations;
}

$arrNum = [3, 24, 4, 8];
echo max(maxNumber($arrNum));

// Task 9

function countNum(int $wholeNum, int $num) : int
{
    return mb_substr_count("$wholeNum", "$num");
}

echo countNum(123414444444, 4);

// Task 8

function anogram(string $phrase1, string $phrase2)
{
    return count_chars($phrase1, 1) == count_chars($phrase2, 1);
}

echo anogram('молоко', 'околом');

// Task 10

function quality($phrase)
{
    $symbol = array('-', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', '{', '}', '|', ':', '<', '>', '?', '[', ']', ';', ',', '.', '/', '~', '`', '=');
    $code_correct = array(' -', ' !', ' @', ' #', ' $', ' %', ' ^', ' &', ' *', ' (', ' )', ' _', ' +', ' {', ' }', ' |', ' :', ' <', ' >', ' ?', ' [', ' ]', ' ;', ' ,', ' .', ' /', ' ~', ' `', ' =');
    $phrase = mb_strtolower(str_replace($symbol, $code_correct, $phrase));
    return array_count_values(explode(" ", $phrase));
}

echo '<pre>';
var_dump(quality("That's the password: PASSWORD 123!."));;
echo '<pre>';