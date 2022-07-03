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

// Task 7   ну оно почти работает как надо))

function calcQuantityComb(int $n): int
{
    return ($n != 1) ? $n * calcQuantityComb($n - 1) : 1;
}

function createBiggestNumber(array $numbers): mixed
{
    $arr = [];
    $combinations = calcQuantityComb(count($numbers));  // что не так с функией gmp_fact()?

    for ($i = 0; $i <= $combinations; $i++) {
        shuffle($numbers);

        foreach ($numbers as $number) {
            $firstNum = array_shift($numbers);
            $numbers[] = $firstNum;
            $arr[] = implode('', $numbers);
        }
    }
    return (max(array_unique($arr)));
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

// Task 10    //наверняка можно было проще

function quantityOfElements(string $str): array
{
    $arrWords = str_word_count(mb_strtolower($str), 1);
    $arrSymbols = array_diff(explode(' ', mb_strtolower($str)), $arrWords);

    preg_match("/\d+/", $str, $numbers);
    $arrWords[] = implode(' ', $numbers);

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

        if ($symbol > 255) {
            $symbol -= 255;
        }

        $newStr = $newStr . chr($symbol);
    }

    return $newStr;
}

echo cipherString('String', 3), PHP_EOL;

function decipherString(string $str, int $shift): string
{
    $newStr = '';
    for ($i = 0; $i < strlen($str); $i++) {
        $symbol = ord($str[$i]) - $shift;

        if ($symbol < $shift) {
            $symbol = 255 - $symbol;
        }

        $newStr = $newStr . chr($symbol);
    }

    return $newStr;
}

echo decipherString('Vwulqj', 3), PHP_EOL;

//Task 2

function convertToRoman (int $number): string
{
    $convertedNum = '';
    $romanNum = [
        'MM' => 2000,
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
        'I' => 1,
    ];

while ($number > 0) {
    foreach ($romanNum as $roman => $normal) {
        if ($number >= $normal) {
            $number -= $normal;
            $convertedNum .= $roman;
        }
    }
}
    return $convertedNum;
}

echo convertToRoman(2008);



