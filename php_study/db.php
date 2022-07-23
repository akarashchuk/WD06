<?php

//$conn = null;

function getConnection()
{
    static $conn;

    if ($conn !== null) {
        return $conn;
    }

    $conn = mysqli_connect(
        'localhost',
        'root',
        database: 'blog',
    );
    if ($conn === false) {
        die('Error: ' . mysqli_connect_error());
    }

    return $conn;
}

function counter()
{
    static $count = 0;
    echo $count++, '<br>';
}
