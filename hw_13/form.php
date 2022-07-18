<!DOCTYPE html>
<html>
<body>
    <form action="hw_13.php" method="post" enctype="multipart/form-data">
        Выберите изображение для загрузки:
        <input type="file" name="image" id="image">
        <input type="submit" value="Send" name="submit">
    </form>
</body>
</html>

<?php

error_reporting(E_ALL);
ini_set('display_errors', '1');

if (isset($_POST['submit'])) {

    $file = $_FILES['image'];

    if ($file['size'] > 5 * pow(1024, 2)) {
        echo 'This file is too large and cannot be uploaded';
    } elseif ($file['type'] != 'image/jpeg' && 'image/png') {
        echo 'Wrong file type!';
    } else {
        $targetPath = __DIR__ . '/images';

        if (!file_exists($targetPath)) {
            mkdir($targetPath);
        }

        $filename = $file['name'];

        move_uploaded_file($file['tmp_name'], "$targetPath/$filename");
        echo 'Success!';
    }
}
?>