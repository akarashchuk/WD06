<?php

declare(strict_types=1);

error_reporting(E_ALL);
ini_set('display_errors', '1');

// NORMAL level
// Task 1

function greet(): string
{
    return "Hello, World!";
}

echo greet(), PHP_EOL;

// Task 2

function checkLeapYear($year): bool
{
    return $year % 4 === 0;
}

var_dump(checkLeapYear(2022));

// Task 3

function createAcronym(string $longName): string
{
    $arr = explode(' ', $longName);
    $firstLetter = '';

    foreach ($arr as $value) {
        $firstLetter .= $value[0];
    }

    return $firstLetter;
}

echo createAcronym('Cascading Style Sheets'), PHP_EOL;

// Task 4

function reverseString(string $str): string
{
    $arr = mb_str_split($str);

    return join('', array_reverse($arr));
}

echo reverseString('Привет мир!'), PHP_EOL;

// Task 5

function checkPrimeNumber(int $num): bool
{
    $result = true;

    for ($i = 2; $i < $num; $i++) {
        if ($num % $i === 0) {
            $result = false;
        }
    }

    return $result;
}

var_dump(checkPrimeNumber(7));

// Task 6

function getWordLength(string $str): int
{
    $arr = str_word_count($str, 1);
    $lastWord = $arr[array_key_last($arr)];

    return strlen($lastWord);
}

echo getWordLength('hello, world!'), PHP_EOL;

// Task 7      так, ну ответ совпал))

function createBiggestNumber(array $numbers): mixed
{
    $arr = [];

    foreach ($numbers as $number) {
        $firstNum = array_shift($numbers);
        $numbers[] = $firstNum;
        $arr[] = implode('', $numbers);
    }

    return (max($arr));
}

var_dump(createBiggestNumber([3, 24, 4]));

// Task 8

function checkAnagram(string $str1, string $str2): bool
{
    $arr1 = mb_str_split($str1);
    $arr2 = mb_str_split($str2);

    return empty(array_diff($arr1, $arr2)) && count($arr1) == count($arr2);
}

var_dump(checkAnagram('спаниель', 'апельсин'));

// Task 9

function findDigit(int $digit, $number): int
{
    return substr_count("$number", "$digit");
}

echo findDigit(5, 442158755745), PHP_EOL;

// Task 10

function quantityOfElements(string $str): array
{
    $arrWholeString = explode(' ', mb_strtolower($str));
    $arrWords = str_word_count(mb_strtolower($str), 1);
    $arrSymbols = array_diff($arrWholeString, $arrWords);

    foreach ($arrSymbols as $symbol) {
        $arrWords[] = $symbol[strlen($symbol) - 1];
    }

    return array_count_values($arrWords);
}

echo '<pre>';
print_r(quantityOfElements("That's the password: PASSWORD 123!"));
echo '</pre>';

//ADVANCED level
// Task 1

function cipherString(string $str, int $shift): string
{
    $newStr = '';
    for ($i = 0; $i < strlen($str); $i++) {
        $symbol = ord($str[$i]) + $shift;

        if ($symbol > 122) {
            $symbol -= 26;
        }

        $newStr = $newStr . chr($symbol);
    }

    return $newStr;
}

echo cipherString('string', 3), PHP_EOL;

function decipherString(string $str, int $shift): string
{
    $newStr = '';
    for ($i = 0; $i < strlen($str); $i++) {
        $symbol = ord($str[$i]) - $shift;

        if ($symbol < 97) {
            $symbol += 26;
        }

        $newStr = $newStr . chr($symbol);
    }

    return $newStr;
}

echo decipherString('vwulqj', 3), PHP_EOL;

//Task 2 нот тудэй


