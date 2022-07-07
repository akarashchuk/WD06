<?php

declare(strict_types=1);

error_reporting(E_ALL);
ini_set('display_errors', '1');

//NORMAL level
//Task 1
//file_put_contents(__DIR__ . '/hello_files.txt', 'Hello World');

//Task 2
function getCount(string $path): int
{
    // -1 файл не существует
    return file_exists($path) ?
        (count(file($path, FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES))) : -1;
}

echo getCount(__DIR__ . '/hw_133.php');

//Task 3
function getStructure(string $path): array
{
    $res = [];
    function tree(string $path): array
    {
        global $res;
        $files = scandir($path);
        foreach ($files as $file) {
            if (($file == '.') || ($file == '..')) {
                continue;
            }
            if (is_dir($path . '/' . $file)) {
                $res[] = $file;
                tree($path . '/' . $file);
            } else {
                $res[] = '-' . $file;
            }
        }
        return $res;
    };
    return tree($path);
}

// для текущего каталога
echo '<pre>';
print_r(getStructure("./"));

//Task 4
function getSizeFile(string $path): float
{
// -1 если файл не существует
    return !file_exists($path) ? -1 : filesize($path) / 2048;
}
function getSize(string $path): float
{
    // -1 если файл не существует
    $res = 0;
    if(!$h = opendir($path))
        return -1;
    while (($file = readdir($h)) !== false){
        if ($file == "." || $file == "..") {
            continue;
        }
        $all_path = $path . "/" . $file;
        if (filetype($all_path) == "file") {
            $res += filesize($all_path);
        }
        else{
            $res += getSize($all_path);
        }
    }
    closedir($h);
    return $res / 1024 / 1024;
}

echo getSize("./"), '<pre>';
