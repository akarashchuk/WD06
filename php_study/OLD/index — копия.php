<?php

error_reporting(E_ALL);
ini_set(option:'display_errors', value: 1);
//
//$arr = [1, '2', null, false];
//var_dump($arr);
//echo '<pre>';
//print_r($arr);
//echo '</pre>';
//
//$animals = ['cats', 'dogs', 'birds'];
//echo $animals[1];
//$animals[2] = 'mouse';
//
//print_r($animals);
//
//var_dump(isset($animals[3])); // проверка значения под номером
//
//array_push($animals, 'parrots', 'cat', ' ');
//
//$animals[] = 'rat'; // добавление элемента
//
//array_pop($animals); // Удаление последнего
//
//array_unshift() // Добавление в начало
//
//array_key_exists() // проверка по индексу (ключу)
//
//array_unique() // убирает дубликаты значений

$user = [
    'name' => 'john',
    'email' => 'johndoe@gmail.com',
'isActive' => true,
    ];

echo '<pre>';
echo $user['name'];
$user['fullName'] = 'John Doe';
//print_r($user);
echo '</pre>';

echo implode(',', $arr) // склеивает массив, первое значение это разделитель, второе массив

explode(',', $arr) // из строки делает массив

foreach ($arr as $item) {
    echo $item, PHP_EOL;
}

foreach ($arr as $key => $item) {
    echo $key, ' => ', $item, PHP_EOL;
}

foreach ($arr as $key => $item) {
    if ($key === 0) {
        $arr[$key] = 'parrots';
    }
}