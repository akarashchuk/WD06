<?php
error_reporting(error_level:E_ALL);
ini_set(option:'display_errors', value:1);

//$x = 0; // получим false так же при пустой строке и спец символов типа  null
// $x = '10how10' // выведет только 10 так как php ищет значение только в начале
// int возвращает до точки (3.14) вернет 3
// float возвращает дробное значение через точку , а через запяьую целое число
// func numeric позволяет проверить является ли это числовой последовательностью
// func acos возвращает значение nan
// когда преобразуем в строку в скобках высвечивает длинну строки

//$str = "Hello World" ; // если используется не анг язык то длинна будет +- в два раза больше функция mb_ префиксная помогает читать по юникоду
// func str_word_count и func strrev используется для реверса слов но работает только с английским
// str_replace(search:'world', replace:'john', $str) ищет слово которое надо заменить затем на то которое заменют и переменную
// strpos($str, needle:'World!'); возвращает значение
//trim обрезает слева и справа пробелы также есть ltrim и rtrim который обрезает слева и справа
//echo strlen($str);

//$price = 10.7;
//$deliveryPrice = 2.1;

//var_dump((($price * 100)+ ($deliveryPrice * 100)) / 100); // перевели в центы

//$x = 5;
//$y = 2;
//
//echo intdiv($x, $y);

//var_dump(1 <=> 1);
//var_dump(2 <=> 1);
//var_dump(1 <=> 2);

// строки сравнивают через специальноен значение strcmp var_dump(strcmp('abc', 'abcqwer'));

//$a = 4;
//$b = &$a;
//
//var_dump(); присваевание по ссылке

//$a = 5;
//
//if ($a === 5) {
//    echo 'Hello World!';
//} else {
//    echo 'bye';
//}   // кострукция if

//турнарный опеератор

//$a = null;
//
//echo $a === 4 ? 'Hello' : 'Bye';

// ?? - оператор присвоения который говорит что еслм переменная есть то забираем если у нас ничего значит берем левую часть

$color = 'red';

switch ($color) {
case  'red';
echo 'red' ;
break;
default:
echo 'green';
break;
}