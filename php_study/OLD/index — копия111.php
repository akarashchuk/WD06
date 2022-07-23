<?php

error_reporting(E_ALL);
ini_set(option:'display_errors', value: 1);

//require __DIR__ . '/components/header.php';
//require __DIR__ . '/components/footer.php';

$data = file_get_contents(__DIR__ . '/data.txt');
var_dump(nl2br($data));
echo nl2br($data);

$data = file(__DIR__ . '/data.txt', FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES);

$data = ['Smith', 'Alan'];

file_put_contents(
    __DIR__ . '/data.txt',
    implode("\n", $data),
FILE_APPEND
);

mkdir(
    __DIR__ . '/uploads/2022/06/30',
    recursive: true,
);

is_dir();
is_file();
file_exists();
scandir(); // сканирует директорию на наличие контента
rmdir(); // удаляет директорию
unlink(); // удалить файл
copy(); // скопировать файл
fopen(); // построчное чтение файла

While ($line = fgets($file)) {
    echo fgets($line);
};
