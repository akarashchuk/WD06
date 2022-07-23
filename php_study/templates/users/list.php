<div class="container">
    <table class="table table-striped">
        <thead>
        <tr>
            <th>#</th>
            <th>Email</th>
            <th>Role</th>
            <th>Created At</th>
            <th>Actions</th>
        </tr>
        </thead>
        <tbody>
        <?php if ($users): ?>
        <?php foreach ($users as $user): ?>
                <tr>
                    <th><?= $user['id'] ?></th>
                    <td><?= $user['email'] ?></td>
                    <td><?= $user['role'] ?></td>
                    <td><?= $user['created_at'] ?></td>
                    <td>
                        <a href="/php_study/users/show.php" class="btn btn-primary"><i class="far fa-eye"></i></a>
                        <a href="/php_study/users/update.php" class="btn btn-success"><i class="fas fa-edit"></i></a>
                        <form action="/php_study/users/delete.php" method="post" class="d-inline">
                            <button class="btn btn-danger"><i class="far fa-trash-alt"></i></button>
                        </form>
                    </td>
                </tr>
        <?php endforeach; ?>
        <?php endif; ?>
        </tbody>
    </table>
</div>