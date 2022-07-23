<?php

error_reporting(E_ALL);
ini_set(option:'display_errors', value: 1);


$conn = mysqli_connect(
    'localhost',
    'root',
    database: 'blog',
);
if ($conn === false) {
    die('Error: ' . mysqli_connect_error());
}

echo '<h1>Success</h1>';

$result = mysqli_query($conn, query: 'SELECT * FROM users');
if (!$result) {
    echo 'User not find';
} else {
    foreach ($result as $row) {
        echo $row['id'], '<br>';
    }
}



mysqli_close($conn);