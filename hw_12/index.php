<?php

//declare(strict_types=1);
error_reporting(E_ALL);
ini_set('display_errors', '1');

/*///////////NORMAL LEVEL////////////*/

/*
//Task 1
function message()
{
    echo '«Hello, World!»';
}

message();
*/

/*
//Task 2
$year = 2022;
function leapYear(): bool
{
    global $year;
    if ($year % 4 == 0) {
        return true;
    } else {
        return false;
    }
}

var_dump(leapYear());
*/

/*
//Task 3
$str = 'Cascading Style Sheets';
function abbrev()
{
    global $str;
    $abbrevStr = implode('', array_diff_assoc(str_split(ucwords($str)), str_split(strtolower($str))));
    echo $abbrevStr;
}

abbrev();
*/

/*
//Task 4
$strStart = 'Nastya Настя';
function strReversed()
{
    global $strStart;
    $strFinish = '';
    // mb_strlen - получение длины строки; mb_substr - возвращает часть строки
    for ($i = mb_strlen($strStart); $i >= 0; $i--) {
        $strFinish .= mb_substr($strStart, $i, 1);// .= - объединение строк с присвоением результата
    }
    echo $strFinish;
}

strReversed();
*/

/*
//Task 5
function IsPrime($a): bool
{
    for ($i = 2; $i < $a; $i++) {
        if ($a % $i == 0) {
            return false;
        } else {
            return true;
        }
    }

    if ($a == 0) {
        return false;
    } else {
        return true;
    }
}

var_dump(isPrime(6));
*/

/*
//Task 6
function wordLenFinish($str)
{
    $arrNewWord = explode(" ", $str,); //explode — Разбивает строку с помощью разделителя
    $strFinish = rtrim(end($arrNewWord), '!@#$%^&*()_+"№;%:?=-');
//rtrim-убирает пробелы и заданные символы справа  // end-выводит последний элемент массива
    echo iconv_strlen($strFinish); //iconv_strlen — Возвращает количество символов в строке
}

wordLenFinish('задание №6 PHP!');
*/

/*
//Task 7
function maxNumArr($arr)
{
    if (1 === count($arr)) {
        return $arr;
    }
    $result = array();
    foreach ($arr as $key => $item) {
        foreach (maxNumArr(array_diff_key($arr, array($key => $item))) as $newArr)
            //array_diff_key — Вычисляет расхождение массивов, сравнивая ключи
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
function anagramma($word1, $word2): bool
{
    $arr1 = str_split($word1);
    $arr2 = str_split($word2);
    $w1 = strlen($word1);
    $w2 = strlen($word2);

    if ((!array_diff($arr1, $arr2)) and ($w1 == $w2)) {
        return true;
    } else {
        return false;
    }
}

$word1 = 'карат';
$word2 = 'карта';
var_dump(anagramma($word1, $word2));
*/

/*
//Task 9
function countNum($number, $int)
{
    $number = (string)$number;

    for ($i = 0; $i < strlen($number); $i++) {
        $x = $number[$i];

        return substr_count($number, $int);
    }
}

$number = 44215;
$int = 5;
print_r(countNum($number, $int));
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
function shifr($str, $step)
{
    $shifrText = '';
    for ($i = 0; $i < strlen($str); $i++) {
        $item = ord($str[$i]) + $step; // ord — Конвертирует первый байт строки в число от 0 до 255 (ASCII код символа)
        if ($item > 255) {
            $item = $item - 255;
        }
        $shifrText = $shifrText . chr($item); //chr — Генерирует односимвольную строку по заданному числу

    }
    echo $shifrText;
}

$str = "Anastasiya";
$step = 3; // сдвиг символов
print_r(shifr($str, $step));
*/


//дешифрование
/*
function deshifr($shifrText, $step)
{
    $str = '';

    for ($i = 0; $i < strlen($shifrText); $i++) {
        $item = ord($shifrText[$i]) - $step;

        if ($item < $step) {
            $item = 255 - $step;
        }
        $str = $str . chr($item);
    }
    echo $str;
}

$shifrText = "Dqdvwdvl|d";
$step = 3;
print_r(deshifr($shifrText, $step));
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
*/
