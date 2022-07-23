<?php

declare(strict_types=1);

error_reporting(E_ALL);
ini_set(option:'display_errors', value: 1);

require_once __DIR__ . '/../db.php';

$conn = getConnection();

if ($_POST) {
    $email = $_POST['email'];
    $pass = $_POST['password'];
    $roleId = $_POST['role_id'];

    $sql = "INSERT INTO users (email, password, role_id) VALUES ('$email', '$pass', $roleId)";

    mysqli_query($conn, $sql);

    header('Location: /php_study/users');
    die();
}

$roles = mysqli_query($conn, 'SELECT * FROM roles');

require __DIR__ . '/../templates/header.php';
require __DIR__ . '/../templates/users/add.php';
require __DIR__ . '/../templates/footer.php';