<?php

$file = $_FILES['filename'];

$allowedTypes = ['image/jpeg', 'image/png'];

if ($file['size'] > 5 * 1024 ** 2) {
    exit('Размер файла более 5MB');
}
if (!in_array($file['type'], $allowedTypes)) {
    exit('Необходим файл типа jpeg или png');
} elseif (move_uploaded_file($file["tmp_name"], "images/" . $file["name"])) {
    echo 'Файл скопирован на сервер';
}