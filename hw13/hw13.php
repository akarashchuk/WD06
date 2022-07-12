<!--<!DOCTYPE html>-->
<!--<html>-->
<!--<body>-->
<!--<form action="hw13.php" method="post" enctype="multipart/form-data">-->
<!--    <input type="file" name="image">-->
<!--    <input type="submit" value="отправить" name="submit">-->
<!---->
<!--</form>-->
<!--</body>-->
<!--</html>-->
<?php
// task 2
//function coun(){
//    $size = fopen(__DIR__ . '/hello_files.txt', 'r');
//    $count = 0;
//    while (!feof($size)){
//        fgets($size);
//        $count++;
//    }
//    fclose($size);
//    var_dump($count);
//}



//function coun(){
//    $size = count(file(__DIR__ . '/hello_files.txt'));
//    var_dump($size);
//}
//coun();



// task 3
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



// task 4

//function x(){
//    $size = filesize(__DIR__. '/hw12.php');
//    $mbsize = $size/1048576;
//    echo $mbsize . ' ' . 'МБ';
//}
//
//x();



// advanced
// task 1
//if (isset($_POST['submit'])){
//    $targetPath = __DIR__ . '/imgs';
//    if (!file_exists($targetPath)){
//        mkdir($targetPath);
//    }
//    $types = ['image/jpeg', 'image/png'];
//    $filename = $_FILES['image']['name'];
//    if ($_FILES['size'] > 5 * 1024 **2){
//        exit('Размер файла более 5мб');
//    }
//    if (!in_array($_FILES['type'], $types)) {
//        exit('Необходим файл типа jpeg или png');
//    }
//    else{
//        move_uploaded_file($_FILES['image']['tmp_name'], "$targetPath/$filename");
//    }
//}
//echo "<pre>";
//print_r($_FILES);