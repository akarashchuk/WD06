<?php

declare(strict_types=1);

error_reporting(E_ALL);
ini_set('display_errors', '1');


// task 1
//function x() {
//    return "Hello world";
//};
//echo x();




// task 2

//function year( int $days) : bool {
//    $x = '';
//    if ($days == 365) {
//        $x = false;
//    } elseif ($days == 366) {
//        $x = true;
//    }
//    return $x;
//}
//
//var_dump(year(366));



// task 3

//function qwe(){
//    $x = explode(' ', 'Cascading Style Sheets');
//    $y = '';
//    foreach ($x as $i){
//        $y .= $i[0];
//    }
//    echo $y;
//}
//qwe();



//// task 4
//
//function rev($x){
//    $y = mb_convert_encoding(strrev(mb_convert_encoding($x, 'UTF-16BE', 'UTF-8')),'UTF-8', 'UTF-16LE');
//    echo $y;
//};
//rev('Привет мир');



// task 5
//function easy(int $x) : bool
//{
//    $y = ' ';
//    for ($i = 2; $i < $x; $i++){
//        if ($x % $i === 0){
//            $y = false;
//        } else{
//            $y = true;
//        }
//        break;
//    }
//    return $y;
//};
//var_dump(easy(17));




//// task 6
//function lastWord(){
//    $x = explode(' ', 'jngoiregn engrengo iisfi');
//    $y = strlen(array_pop($x));
//    echo $y;
//}
//lastWord();


//
//// task 8
//function anagr($x, $y) : bool
//{
//    $z = ' ';
//   if(count_chars($x) == count_chars($y)){
//       $z = true;
//   } else{
//       $z = false;
//   }
//
//   return $z;
//}
//var_dump(anagr('cat', 'tac'));




//// task 9
//
//function coun($x, $y){
//    $a = (string)$x;
//    $b = (string)$y;
//    $count = substr_count($a, $b);
//    echo $count;
//}
//coun(11114898411, 1);





//// task 10
//
//function coun($x, $y){
//    $count = substr_count(mb_strtolower($x), mb_strtolower($y));
//    echo $count;
//}
//coun('one two One oNe uno two', 'onE');





//// task 7
//
//
//function without(array $items, mixed $value): array
//{
//    $filtered = array_filter($items, fn(mixed $item) => $item !== $value);
//
//    return array_values($filtered);
//}
//
//
//function combinations(array $arr): array
//{
//    if (count($arr) <= 1) {
//        return $arr;
//    }
//
//    $result = [];
//
//    foreach ($arr as $item) {
//        $combos = combinations(without($arr, $item));
//
//        foreach ($combos as $combo) {
//            $result[] = $item . $combo;
//        }
//    }
//
//    return $result;
//}
//
//function getMax(array $arr): int
//{
//    return max(array_map('intval', combinations($arr)));
//}
//
//echo getMax([3, 24, 4]);




// advanced

// task 1
// КОДИРОВКА
//$text = 'abcde';
//$shift = 3;
//$x = function () use ($text, $shift){
//    for ($i=0; $i<strlen($text); $i++)  {
//        $symbol=ord($text[$i])+$shift;
//        if($symbol>255)  {
//            $symbol=$symbol-255;
//        }
//        global $codeText;
//       $codeText = chr($symbol);
//        echo $codeText;
//
//    }
//};
//$x();
//echo "<pre>";
//// РАСКОДИРОВКА
//function decod($newText, $shift){
//    for($i=0; $i<strlen($newText); $i++)  {
//        $symbol=ord($newText[$i])-$shift;
//        if($symbol<$shift)  {
//            $symbol=255-$shift;
//        }
//        $text = chr($symbol);
//        echo $text;
//}};
//decod('defgh', 3);



// task 2

function int2roman($n) {
    $M = ["","M","MM","MMM"];
    $C = ["","C","CC","CCC","CD","D","DC","DCC","DCCC","CM"];
    $X = ["","X","XX","XXX","XL","L","LX","LXX","LXXX","XC"];
    $I = ["","I","II","III","IV","V","VI","VII","VIII","IX"];
    return $M[$n/1000].$C[($n % 1000)/100].$X[($n % 100)/10].$I[($n % 10)];

}
echo int2roman(153);