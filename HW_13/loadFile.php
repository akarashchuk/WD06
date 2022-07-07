<?php

error_reporting(E_ALL); //показывает все ошибки
ini_set('display_errors', 1);

$err = '';
$isSend = false;
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $file = $_FILES['image'];
//    echo '<pre>';
//    print_r($file);
//    echo '<pre>';

    if ($file['name'] === '') $err = 'Файл не выбран!';
    elseif ($file['size'] === 0 && $file['size'] > 55242880)
        $err = 'Файл слишком большой!';
    elseif (!(preg_match('/.*[\.jpg, \.png]$/', $file['name'])))
        $err = 'Файл должен иметь расширение только jpeg или png!';
    else {
        $targetPath = __DIR__ . '/images';
        if (!file_exists($targetPath)) {
            mkdir($targetPath);
        }
        $filename = $_FILES['image']['name'];
        move_uploaded_file($_FILES['image']['tmp_name'], "$targetPath/$filename");
        $isSend = true;
    }
}

?>

<!doctype html>
<html>
<body>
<?php
if ($isSend): ?>
    Your image is done!
<?php
else: ?>
    <form action="" method="post" enctype="multipart/form-data">
        <input type="file" name="image">
        <input type="submit" value="Send" name="submit">
        <p><?= $err ?></p>
    </form>
<?php
endif; ?>
</body>
</html>

