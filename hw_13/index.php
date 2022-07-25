<?php

error_reporting(E_ALL);
ini_set('display_errors', '1');
/*
//Task 1
$text = 'Hello World';
$filename = __DIR__ . '/hello_files.txt';
file_put_contents($filename, $text);
*/

/*
//Task 2
function countLinesFile($filePath)
{
    $fileLines = count(file($filePath));
    echo $fileLines;
}

$filePath = 'hello_files.txt';
print_r(countLinesFile($filePath));
*/

//Task 3
/*
function fileStruct(string $path): array
{
    $rez = [];
    function wood(string $path): array
    {
        global $rez;
        $files = scandir($path);
        foreach ($files as $file) {
            if (($file == '.') || ($file == '..')) {
                continue;
            }
            if (is_dir($path . '/' . $file)) {
                $rez[] = $file;
                wood($path . '/' . $file);
            } else {
                $rez[] = '-' . $file;
            }
        }
        return $rez;
    };
    return wood($path);
}

echo '<pre>';
print_r(fileStruct("./"));
*/

//Task 4
/*
function getSize($path)
{
    $size = 0;
    $dir = scandir($path);

   foreach ($dir as $file) {
        if ($file == '.' || $file == '..') {
            continue;
       } elseif (is_dir($path . '/' . $file)) {
            $size .= getSize($path . '/' . $file);
            } else {
            $size += filesize($path . '/' . $file);
           }
        }
    return round($size / (1024 ** 2), 5) . ' Мб';
}

echo getSize('./');
*/
