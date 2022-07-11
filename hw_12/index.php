<?php

declare(strict_types=1);
error_reporting(E_ALL);
ini_set('display_errors', '1');

/*///////////NORMAL LEVEL////////////*/

/*
//Task 1
function message()
{
    return "«Hello, World!»";
}

print_r(message());
*/

//Task 2
/*
function leapYear(int $year): bool
{
    if ($year % 4 == 0) {
        return true;
    } else {
        return false;
    }
}

var_dump(leapYear(2022));
*/

/*
//Task 3
function abbrev(string $str): string
{
    $abbrevStr = implode('', array_diff_assoc(str_split(ucwords($str)), str_split(strtolower($str))));
    return $abbrevStr;
}

print_r(abbrev('Cascading Style Sheets'));
*/

/*
//Task 4
function strReversed(string $strStart): string
{
    $strFinish = '';
    // mb_strlen - получение длины строки; mb_substr - возвращает часть строки
    for ($i = mb_strlen($strStart); $i >= 0; $i--) {
        $strFinish .= mb_substr($strStart, $i, 1);// .= - объединение строк с присвоением результата
    }
    return $strFinish;
}

print_r(strReversed('Nastya Настя'));
*/

/*
//Task 5
function IsPrime($a): bool
{
    for ($i = 2; $i < $a; $i++) {
        if ($a % $i == 0) {
            return false;
        }
    }
    if ($a == 0) {
        return false;
    } else {
        return true;
    }
}

var_dump(isPrime(25));
*/

/*
//Task 6
function wordLenFinish(string $str): int
{
    $arrNewWord = explode(" ", $str,); //explode — Разбивает строку с помощью разделителя
    $strFinish = rtrim(end($arrNewWord), '!@#$%^&*()_+"№;%:?=-');
//rtrim-убирает пробелы и заданные символы справа  // end-выводит последний элемент массива
    return iconv_strlen($strFinish); //iconv_strlen — Возвращает количество символов в строке

}

var_dump(wordLenFinish('задание №6 PHP!'));
*/

/*
//Task 7
function maxNumArr($arr)
{
    if (1 === count($arr)) {
        return $arr;
    }
    $result = [];

    foreach ($arr as $key => $item) {
        foreach (
            maxNumArr(
                array_diff_key($arr, array($key => $item))
            ) as $newArr
        ) //array_diff_key — Вычисляет расхождение массивов, сравнивая ключи
        {
            $result[] = $item . $newArr;
        }
    }
    return $result;
}

$arr = [3, 24, 4];
echo max(maxNumArr($arr));
*/

/*
//Task 8
function anagramma(string $word1, string $word2): bool
{
    $arr1 = str_split($word1);
    $arr2 = str_split($word2);
    $w1 = strlen($word1);
    $w2 = strlen($word2);
    return !array_diff($arr1, $arr2) && ($w1 == $w2);
}

var_dump(anagramma('карат', 'карта'));
*/

/*
//Task 9
function countNum($number, $int): int
{
    return substr_count((string)$number, (string)$int);
}

print_r(countNum(442155, 5));
*/

/*
//Task 10
//немного топорно, но работает)
function countWords($str): array
{
    $str = str_replace(':', ' :', ($str));
    $str = str_replace('!', ' !', ($str));
    $str = str_replace('.', ' .', ($str));
    $str = strtolower($str);
    $newWords = explode(" ", $str);
    return array_count_values($newWords);
}

print_r(countWords("That's the password: PASSWORD 123!."));
*/


/*///////////////////////////ADVANCED level////////////////////////*/

//Task 1

//шифрование
/*
function shifr(string $str, int $step): string
{
    $shifrText = '';
    for ($i = 0; $i < strlen($str); $i++) {
        $item = ord($str[$i]) + $step; // ord — Конвертирует первый байт строки в число от 0 до 255 (ASCII код символа)
        if ($item > 255) {
            $item = $item - 255;
        }
        $shifrText = $shifrText . chr($item); //chr — Генерирует односимвольную строку по заданному числу
    }
    return $shifrText;
}

print_r(shifr('Anastasiya', 3));
*/


//дешифрование
/*
function deshifr(string $shifrText, int $step): string
{
    $str = '';
    for ($i = 0; $i < strlen($shifrText); $i++) {
        $item = ord($shifrText[$i]) - $step;
        if ($item < $step) {
            $item = 255 - $step;
        }
        $str = $str . chr($item);
    }
    return $str;
}

print_r(deshifr('Dqdvwdvl|d', 3));
*/


/*
//Task 2
function convNum($num)
{
    $result = '';
    $rimItem = [
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
    foreach ($rimItem as $rim => $arNum) {
        $sootv = intval($num / $arNum);
        $result .= str_repeat($rim, $sootv); //str_repeat — Возвращает повторяющуюся строку(совпадение)
        $num = $num % $arNum;
    }
    return $result;
}
print_r(convNum(1990));
