<?php

declare(strict_types=1);

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
?>

<div class="container">
    <form method="POST">
        <div class="mb-3">
            <label for="email" class="form-label">Email address</label>
            <input type="email" class="form-control" id="email" name="email" aria-describedby="emailHelp">
        </div>
        <div class="mb-3">
            <label for="password" class="form-label">Password</label>
            <input type="password" class="form-control" name="password" id="password">
        </div>
        <div class="mb-3">
            <select class="form-select" name="role_id" aria-label="Default select example">
                <?php foreach ($roles as $role): ?>
                    <option value="<?= $role['id'] ?>"><?= $role['name'] ?></option>
                <?php endforeach; ?>
            </select>
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
    </form>
</div>