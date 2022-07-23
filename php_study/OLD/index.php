<form name="feedback" method="GET" action="/php_study/form.php">
    <label>Ваше имя: <input type="text" name="name"></label>
    <br>
    <label>Ваш email: <input type="text" name="email"></label>
    <br>
    <label>Сообщение: <textarea name="message"></textarea></label>
    <br>
    <input type="submit" name="send" value="Отправить">
</form>

<?php

error_reporting(E_ALL);
ini_set(option:'display_errors', value: 1);

include 'functions.php';



//function without(array $items, mixed $value) : array
//{
//    $filtered = array_filter($items, function (mixed $item) use ($value): bool {
//        return $item !== $value;
//    });
//    return array_values($filtered);
//}
//var_dump(without($arr, 4));