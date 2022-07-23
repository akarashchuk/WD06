<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
<form action="index.php" method="post" enctype="multipart/form-data">
    <input type="file" name="image">
    <input type="submit" value="Send" name="submit">
</form>
</body>
</html>

<?php

error_reporting(E_ALL);
ini_set(option:'display_errors', value: 1);

if (isset($_POST['submit'])) {
    $targetPath = __DIR__ . '/images';
    if (!file_exists($targetPath)) {
        mkdir($targetPath);
        }
    }
    $fileName = $_FILES['image']['name'];
    move_uploaded_file($_FILES['image']['tmp_name'], "$targetPath/$fileName");

echo '<pre>';
print_r($_FILES);
echo '</pre>';