<?php

declare(strict_types=1);

error_reporting(E_ALL);
ini_set('display_errors', '1');

//NORMAL level
//Task 1

file_put_contents(
    __DIR__ . '/hello_files.txt',
    "Hello World",
);

//Task 2

function getQuantity(string $file): int
{
    return count(file($file));
}

echo getQuantity(__DIR__ . '/hello_files.txt');

//Task 3

function showDirTree(string $directory): array
{
    $files = [];
    $folders = scandir($directory);

    if(is_dir($directory)) {

        foreach ($folders as $file) {
            $folder = $directory . "/" . $file;

            if ($file == '.' || $file == '..') {
                continue;
            } elseif (is_dir($folder)) {
                $files[] = $file;
                $files[] = showDirTree($folder);
            } else {
                $files[] = $file;
            }
        }
    }

    $tree = [];

    array_walk_recursive($files, function($arr) use (&$tree) {
        $tree[] = '--' . $arr;
    });

    return $tree;
}

echo '<pre>';
print_r(showDirTree(__DIR__ . '/components'));
echo '</pre>';

//Task 4

function getDirSize(string $directory): float | int
{
    $size = 0;
    $folders = scandir($directory);

    if (is_dir($directory)) {

        foreach ($folders as $file) {
            $folder = $directory . "/" . $file;

            if ($file == '.' || $file == '..') {
                continue;
            } elseif (is_dir($folder)) {
                $size += getDirSize($folder);
            } else {
                $size += filesize($folder);
            }
        }
    }
    return round($size / pow(1024,2), 5);
}

echo getDirSize(__DIR__ . '/electro');

//ADVANCED level
//Task 1

require __DIR__ . '/form.php';
