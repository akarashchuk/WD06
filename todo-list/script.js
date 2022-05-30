'use strict'

let div = document.createElement('div');
let add = document.createElement('button');
add.id = 'addItem';
add.text = 'Добавить';
add.className = 'btn btn-primary mb-3';
div.className = "wrapper";
div.innerHTML = '<h1>ToDo лист</h1>' +
   '<div class="container">' +
   '<div id="todo" class="header__todo">' +
   '<form class="row g-3">' +
   '<div class="col-auto">' +
   '<button id="deleteAll" type="submit" class="btn btn-primary mb-3">Удалить всё</button>' +
   '</div>' +
   '<div class="col-auto">' +
   '<input type="text" class="form-control" id="enterToDo" placeholder="Введите дело..." style="width: 300px;">' +
   '</div>' +
   '<div class="col-auto">' +
   '</div>' +
   '</form>' +
   '</div>';
document.body.append(div);
document.body.append(add);

let del = document.getElementById('deleteAll');
let text = document.getElementById('enterToDo');

add.addEventListener('click', function () {
   document.getElementById('body').append('<div>sfsdfsdfsf</div>');
});