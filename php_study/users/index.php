<?php

declare(strict_types=1);

error_reporting(E_ALL);
ini_set(option:'display_errors', value: 1);

require_once __DIR__ . '/../db.php';

$conn = getConnection();

$query = 'SELECT u.*, r.name AS role FROM users u JOIN roles r ON u.role_id = r.id';

$users = mysqli_query($conn, $query);

require __DIR__ . '/../templates/header.php';
require __DIR__ . '/../templates/users/list.php';
require __DIR__ . '/../templates/footer.php';

$conn = mysqli_connect(
    'localhost',
    'root',
    database: 'blog',
);
if ($conn === false) {
    die('Error: ' . mysqli_connect_error());
}

