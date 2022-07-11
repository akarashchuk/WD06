<?php

declare(strict_types=1);

error_reporting(E_ALL);
ini_set('display_errors', '1');

// Task 1

//function str()
//{
//    return 'Hello, World!';
//}
//
//echo str();

// Task 2

//echo '<pre>';
//
//function isLeapYear(int $year): bool
//{
//    return $year % 4 == 0 && $year % 400 == 0;
//}
//var_dump(isLeapYear(2000));
//
//echo '</pre>';

// Task 3

//function abbreviation(string $longstr): string
//{
//    $words = explode(" ", $longstr);
//    $abbr = "";
//
//    foreach ($words as $word) {
//        $abbr .= $word[0];
//    }
//
//    return mb_strtoupper($abbr);
//}
//
//echo abbreviation('Cascading Style Sheets');

// Task 4

//function reverse(string $string): string
//{
//    $string = mb_str_split($string);
//    $string = array_reverse($string);
//    $string = implode('', $string);
//
//    return $string;
//}
//
//echo reverse('Привет, мир!');

// Task 5

//function simpleNum(int $num): bool
//{
//    if ($num < 1) {
//        return false;
//    };
//
//    $i = 2;
//    while ($i * $i <= $num) {
//        $i++;
//        if ($num % $i == 0) {
//            return false;
//        }
//    }
//    return true;
//}
//
//var_dump(simpleNum(15));

// Task 6

//function countLastWord(string $str): int
//{
//    $str = explode(' ', $str);
//    $lastWord = array_pop($str);
//    $symbols = ['!', ',', ':', '.', ';'];
//    $lastWord = str_replace($symbols, '', $lastWord);
//    $lastWord = mb_strlen($lastWord);
//
//    return $lastWord;
//}
//
//echo countLastWord('hello, world!');

//Task 7

//echo '<pre>';
//
//function maxNumber(array $arrNum): array
//{
//    if (count($arrNum) <= 1) {
//        return $arrNum;
//    }
//
//    $new_combinations = [];
//
//    foreach ($arrNum as $key => $item) {
//        foreach (maxNumber(array_diff_key($arrNum, [$key => $item])) as $newArrNum) {
//            $new_combinations[] = $item . $newArrNum;
//        }
//    }
//    return $new_combinations;
//}
//
//$arrNum = [3, 24, 4];
//echo max(maxNumber($arrNum));
//
//echo '</pre>';

// Task 8

//function isAnagram(string $str1, string $str2): bool
//{
//    return count_chars($str1, 1) == count_chars($str2, 1);
//}
//
//var_dump(isAnagram('ропот', 'топор'));

// Task 9

//function countNum(int $num, int $searchNum): int
//{
//    return mb_substr_count("$num", "$searchNum");
//}
//
//echo countNum(4564544432368, 4);

// Task 10
//echo '<pre>';
//
//function entryWord($phrase)
//{
//    $symbols = ['!', ',', ':', '.', ';'];
//    $_symbols = [' !', ' ,', ' :', ' .', ' ;'];
//    $phrase = mb_strtolower(str_replace($symbols, $_symbols, $phrase));
//    $array = explode(' ', $phrase);
//
//    return array_count_values($array);
//}
//
//echo print_r(entryWord("That's the password: PASSWORD 123!"));
//
//echo '</pre>';

////////////ADVANCED////////////

//Task 1

//function cipherCode(string $word, int $shift): string
//{
//    $newWord = '';
//
//    for ($i = 0; $i < strlen($word); $i++) {
//        $symbol = ord($word[$i]) + $shift;
//        if ($symbol > 122) {
//            $symbol -= 122;
//        }
//        $newWord .= chr($symbol);
//    }
//    return $newWord . '<br>';
//}
//
//echo cipherCode('Teach Me Skills', 3);
//
//
//function cipherDecode(string $word, int $shift): string
//{
//    $oldWord = '';
//    for ($i = 0; $i < strlen($word); $i++) {
//        $symbol = ord($word[$i]) - $shift;
//        if ($symbol < $shift) {
//            $symbol = 122 - $shift;
//        }
//        $oldWord .= chr($symbol);
//    }
//    return $oldWord;
//}
//
//echo cipherDecode('Whdfk#Ph#Vnloov', 3);

//Task 2

//echo '<pre>';
//function toRoman(int $n): string
//{
//    $M = ["", "M", "MM", "MMM"];
//    $C = ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"];
//    $X = ["", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"];
//    $I = ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"];
//
//    return $M[$n / 1000] . $C[($n % 1000) / 100] . $X[($n % 100) / 10] . $I[($n % 10)];
//}
//
//echo toRoman(2022);
//
//function toRoman2(int $num): string
//{
//    $arrRomanNum = [
//        'M' => 1000,
//        'CM' => 900,
//        'D' => 500,
//        'CD' => 400,
//        'C' => 100,
//        'XC' => 90,
//        'L' => 50,
//        'XL' => 40,
//        'X' => 10,
//        'IX' => 9,
//        'V' => 5,
//        'IV' => 4,
//        'I' => 1
//    ];
//
//    $endValue = '';
//
//    while ($num > 0) {
//        foreach ($arrRomanNum as $romanKey => $value) {
//            if ($num >= $value) {
//                $num -= $value;
//                $endValue .= $romanKey;
//                break;
//            }
//        }
//    }
//    return 'Год римскими цифрами: ' . $endValue;
//}
//
//echo toRoman2(2022);
//
//echo '</pre>';