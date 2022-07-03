<?php

error_reporting(E_ALL);
ini_set('display_errors', 1);

// Task 1

//file_put_contents(
//    __DIR__ . '/data.txt',
//    "Hello World!"
//);

// Task 2

//function countStr($file)
//{
//    $file = count(file(__DIR__ . $file));
//
//    echo 'В файле ' . $file . ' строк';
//};
//
//$file = "/hw_13.php";
//countStr($file);

// Task 3

//echo '<pre>';
//
//function scan_dir($dir, $level)
//{
//    $files = scandir($dir);
//
//    foreach ($files as $file) {
//        if ($file == '.' || $file == '..') {
//            continue;
//        }
//
//        $path = $dir . '/' . $file;
//
//        for ($i = 0; $i < $level; $i++) {
//            echo '--';
//        }
//
//        echo $file . '<br>';
//
//        if(is_dir($path)) {
//            scan_dir($path, $level + 1);
//        }
//    }
//}
//
//scan_dir('../hw_13', 1);
//
//echo '</pre>';

// Task 4

//function getFilesSize($path)
//{
//    $fileSize = 0;
//    $dir = scandir($path);
//
//    foreach ($dir as $file) {
//        if ($file == '.' || $file == '..') {
//            continue;
//        } elseif (is_dir($path . '/' . $file)) {
//                $fileSize .= getFilesSize($path . '/' . $file);
//            } else {
//                $fileSize += filesize($path . '/' . $file);
//            }
//        }
//    return round($fileSize / (1024 ** 2), 5) . ' Мегабайт';
//}
//
//echo getFilesSize('../Todo-list');

// Task 5

//require __DIR__ . '/components/header.php';
//
//require __DIR__ . '/components/body.php';
//
//require __DIR__ . '/components/footer.php';

//////ADVANCED///////

// Task 1
//require __DIR__ . '/form.html';
