<?php

declare(strict_types=1);

error_reporting(E_ALL);
ini_set('display_errors', '1');

//NORMAL level
//Task 1

function getStr()
{
    echo "Hello, World!" . "<br>";
}

getStr();

//Task 2
function getLeapYear(int $year): bool
{
    return ($year % 4 === 0) && (($year % 100 <> 0 || $year % 400 == 0));
}

var_dump(getLeapYear(2001));
echo "<br>";

//Task 3
function getAbr(string $str): string
{
    $res = '';
    $temp = explode(' ', $str);
    foreach ($temp as $item) {
        $res .= mb_strtoupper(mb_substr($item, 0, 1));
    }
    return $res;
}

echo getAbr('привет мир'), "<br>";
echo getAbr('hello world'), "<br>";

//Task 4
function revers(string $str): string
{
    $res = '';
    for ($i = mb_strlen($str); $i >= 0; $i--) {
        $res .= mb_substr($str, $i, 1);
    }
    return $res;
}

echo revers('привет word @@@@'), "<br>";

//Task 5
function isSimple(int $x): bool
{
    if ($x === 1) {
        return false;
    }
    for ($i = 2; $i <= sqrt($x); $i++) {
        if ($x % $i === 0) {
            return false;
        }
    }
    return true;
}

var_dump(isSimple(5));
echo "<br>";

//Task 6
function getLen($str): int
{
    $arrTemp = ['!', ':', '.', ','];
    $temp = explode(' ', $str);
    $lastWord = array_pop($temp);
    return in_array($lastWord[-1], $arrTemp) ? strlen(substr($lastWord, 0, -1)) : strlen($lastWord);
}

echo getLen('hello, wordl!'), "<br>";

//Task 7
function getMaxNum(array $arr): int
{
    function getCombinations(array $arr): array
    {
        if (count($arr) <= 1) {
            return $arr;
        }
        $res = [];
        foreach ($arr as $item) {
            $arrFiltr = array_filter($arr, fn($value) => $value !== $item);
            $combos = getCombinations($arrFiltr);
            foreach ($combos as $combo) {
                $res[] = intval($item . $combo);
            }
        }
        return $res;
    }

    return max(getCombinations($arr));
}

print_r(getMaxNum([3, 24, 4]));
echo "<br>";

//Task 8
function isAnagram(string $str1, string $str2): bool
{
    return count_chars($str1, 1) == count_chars($str2, 1);
}

var_dump(isAnagram('топор', 'отпор'));
echo "<br>";

//Task 9
function getCountNum(int $num, string $str): int
{
    $temp = count_chars($str, 1);
    return $temp[ord(strval($num))];
}

echo getCountNum(5, '442158755745'), "<br>";

//Task 10
function getWordCount(string $str): array
{
    $arrTemp = ['!', ':', '.', ','];
    $res = str_word_count(strtolower($str), 1, '0..9.~!@#$%^&*()-_=+{}[]\|;:?/<>.,');
    foreach ($res as $key => $value) {
        $i = strlen($value) - 1;
        while ($i > 0) {
            if (in_array($value[$i], $arrTemp)) {
                array_push($res, $value[$i]);
                $res[$key] = substr($value, 0, $i);
            } else {
                break;
            }
            $i--;
        }
    }

    return array_count_values($res);
}

print_r(getWordCount("That's the password: PASSWORD 123!"));
echo "<br>";

//ADVANCED level
//Task 1
function encryption(string $str, int $step): string
{
    $res = '';
    for ($i = 0; $i < strlen($str); $i++) {
        $item = ord($str[$i]) + $step;
        if ($item > 122) {
            $item = $item - 122;
        }
        $res .= chr($item);
    }
    return $res;
}

echo encryption('qwerty', 3), "<br>";


function decryption(string $str, int $step): string
{
    $res = '';
    for ($i = 0; $i < strlen($str); $i++) {
        $item = ord($str[$i]) - $step;
        if ($item < $step) {
            $item = 122 - $step;
        }
        $res .= chr($item);
    }
    return $res;
}

echo decryption('tzhuw}', 3), "<br>";

//Task 2
function getRoman(int $num): string
{
    $mas = [
        'M' => 1000,
        'CM' => 900,
        'D' => 500,
        'CD' => 400,
        'C' => 100,
        'XC' => 90,
        'L' => 50,
        'XL' => 40,
        'X' => 10,
        'IX' => 9,
        'V' => 5,
        'IV' => 4,
        'I' => 1
    ];
    $res = '';
    while ($num > 0) {
        foreach ($mas as $key => $item) {
            if ($num >= $item) {
                $num -= $item;
                $res .= $key;
                break;
            }
        }
    }
    return $res;
}

echo "<br>";
echo getRoman(3), "<br>";
echo getRoman(1990), "<br>";