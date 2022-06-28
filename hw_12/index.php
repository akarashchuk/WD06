<?php

declare(strict_types=1);

error_reporting(E_ALL);
ini_set('display_errors', 1);

//Task 1

function sayHi(): string
{
    return "Hello, World!";
}

//Task 2

function getYear(int $year): bool
{
    if ($year % 4 === 0) {
        return true;
    } else {
        return false;
    }
}

//Task 3

function getAbbreviature(string $words): string
{
    $expr = '/(?<=\s|^)[A-Z]/';
    preg_match_all($expr, $words, $matches);
    $abbr = implode('', $matches[0]);
    return $abbr;
}

print_r(getAbbreviature('Cascading Style Sheets'));

//Task 4

function getReverse(string $words): string
{
    $arrWords = mb_str_split($words);
    $revArrWords = array_reverse($arrWords);
    $revWords = implode('', $revArrWords);
    return $revWords;
}

print_r(getReverse('Привет мир!'));

//Task 5

function isPrime(int $number): bool
{
    if ($number < 1) {
        return false;
    }
    for ($i = 2; $i * $i <= $number; $i++) {
        if ($number % $i == 0) {
            return false;
        } else {
            return true;
        }
    }
    return true;
}

var_dump(isPrime(1));

//Task 6

function lenOfLastWord(string $words): mixed
{
    $arrOfWords = explode(" ", $words);
    $countOfArr = count($arrOfWords);
    if ($countOfArr > 1) {
        return mb_strlen($arrOfWords[array_key_last($arrOfWords)]);
    } else {
        return 'Single word';
    }
}

print_r(lenOfLastWord('hello, world'));

//Task 7

// я минус

//Task 8

function checkAnagram(string $firstWord, string $secondWord): bool
{
    $arrOfFirst = mb_str_split($firstWord);
    $countOfFirst = count($arrOfFirst);
    $arrOfSec = mb_str_split($secondWord);
    $countOfSec = count($arrOfSec);
    $arrOfSame = [];

    foreach ($arrOfFirst as $word) {
        foreach ($arrOfSec as $value) {
            if ($word === $value) {
                $arrOfSame[] = $word;
                break;
            }
        }
    }

    $stringOfSame = implode('', $arrOfSame);
//    echo $stringOfSame;
    if ($countOfFirst === $countOfSec and $stringOfSame === $firstWord) {
        return true;
    } else {
        return false;
    }
}

var_dump(checkAnagram('спаниель', 'апельсин'));

//Task 9

function getTimesOf(int $bigNumber, int $number): int
{
    $bigNumber = (string)$bigNumber;
    $arrOfNumbers = str_split($bigNumber);
    $newArr = array_filter($arrOfNumbers, function ($item) use ($number) {
        return $item === (string)$number;
    });
    return count($newArr);
}

print_r(getTimesOf(442158755745, 5));

//Task 10

function countOfWords(string $phrase): array
{
    $phrase = strtolower($phrase);
    $arrOfWords = explode(" ", $phrase);
    return array_count_values($arrOfWords);
}

print_r(countOfWords("That's the password: PASSWORD 123!")); // пока так, хз как разделить слова с знаками препинания