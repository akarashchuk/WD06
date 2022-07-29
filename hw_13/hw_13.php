<?php


declare(strict_types=1);

error_reporting(E_ALL);
ini_set('display_errors', '1');

//Task 1
//file_put_contents(
//    __DIR__ . '/hello_files.txt',
//    "Hello World!"
//);

//Task 2
//function linesCount($file)
//{
//    $arr_File = file($file);
//    $lines = count($arr_File);
//    return $lines;
//}
//
//echo linesCount("hello_files.txt");
//

//Task 3

//function createDir($dir)
//{
//    $list = scandir($dir);
//    if (is_array($list)) {
//        $list = array_diff($list, array('.', '..'));
//        if ($list) {
//            echo '<ul>';
//            foreach ($list as $file) {
//                $path = $dir . '/' . $file;
//                $actualDir = is_dir($path);
//                echo '<li class="', $actualDir ? 'dir' : 'file', '"><span>', htmlspecialchars($file), '</span>';
//                if ($actualDir) {
//                    createDir($path);
//                }
//                echo '</li>';
//            }
//            echo '</ul>';
//        }
//    }
//}
//
//createDir('../hw_13');


//Task 4
//function dir_size($path) {
//    $path = rtrim($path, '/');
//    $size = 0;
//    $dir = opendir($path);
//    if (!$dir) {
//        return 0;
//    }
//
//    while (false !== ($file = readdir($dir))) {
//        if ($file == '.' || $file == '..') {
//            continue;
//        } elseif (is_dir($path . $file)) {
//            $size += dir_size($path . DIRECTORY_SEPARATOR . $file);
//        } else {
//            $size += filesize($path . DIRECTORY_SEPARATOR . $file);
//        }
//    }
//    closedir($dir);
//    return round($size / 1048576.2, 4);
//}
//
//echo dir_size('../hw_13');
//

?>