<?php


declare(strict_types=1);

error_reporting(E_ALL);
ini_set('display_errors', '1');

//Task 1
//
//function writeMsg(): string
//{
//    return "Hello, World!";
//}
//
//echo writeMsg();


//Task 2
//function leapYear(int $year): bool
//{
//    if (($year > 0 && $year % 4 === 0 && $year % 100 != 0) || ($year % 400 === 0 && $year % 100 === 0)) {
//        return true;
//    } else {
//        return false;
//    }
//}
//
//var_dump(leapYear(2076));
//

//Task 3
//$phrase = "Cascading Style Sheets";
//
//function abbr(string $str): string
//{
//    $sep = '';
//    foreach (explode(' ', $str) as $word) {
//        $sep .= strtoupper($word[0]);
//    }
//    return $sep;
//}
//
//echo abbr($phrase);


//Task 4
//$str = 'Привет мир!';
//function backward(string $str): string
//{
//    $sep = '';
//    $i = 1;
//    while (strlen($str) != strlen($sep)) {
//        $sep = $sep . mb_substr($str, -$i, 1);
//        $i++;
//    }
//    return $sep;
//}
//echo backward($str);

//Task 5
//function getPrime(int $numb): bool
//{
//    if ($numb < 1) {
//        return false;
//    }
//    for ($i = 2; $i * $i <= $numb; $i++) {
//        if ($numb % $i === 0) {
//            return false;
//        } else {
//            return true;
//        }
//    }
//    return true;
//}
//
//var_dump(getPrime(7));


//Task 6
//function lengthString(string $str): int
//{
//    $inf = str_word_count($str, 1);
//    $end = $inf[array_key_last($inf)];
//    return strlen($end);
//}
//
//echo lengthString('hello, world!');


//Task 7
//$numbers = [3, 24, 4];
//$amount = count($numbers);
//$fact = factorial($amount);
//
//while ((boolean)$amount) {
//    for ($k = (count($numbers) - 1); $k; $k--) {
//        list($numbers[$k], $numbers[$k - 1]) = [$numbers[$k - 1], $numbers[$k]];
//        $arrRes[] = implode("",$numbers);
//    }
//    $amount--;
//}
//
//echo max($arrRes);
//
//function factorial($n)
//{
//    $total = 1;
//    for ($i=2; $i<=$n; $i++)
//        $total = $total * $i;
//    return $total;
//}

//Task 8
//function anagramm(string $a, string $b): bool
//{
//    return count_chars($a) == count_chars($b);
//}
//
//var_dump(anagramm('норматив', 'минотавр'));

//Task 9
//function meet(int $search, $number): int
//{
//    return substr_count("$number", "$search");
//}
//
//echo meet(5, 442158755745);

//Task 10

//function words($phrase): array
//{
//    $signs_1 = ['!', ',', ':', '.', ';'];
//    $signs_2 = [' !', ' ,', ' :', ' .', ' ;'];
//    $phrase = str_replace($signs_1, $signs_2, $phrase);
//    $phrase = strtolower($phrase);
//    $newPhrase = explode(" ", $phrase);
//    return array_count_values($newPhrase);
//}
//
//echo '<pre>';
//print_r(words("That's the password: PASSWORD 123!"));
//echo '<pre>';

?>