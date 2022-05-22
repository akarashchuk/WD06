"use strict"

let root = document.getElementById('root');
root.classList.add('container', 'px-5');

let header = document.createElement('header');
header.classList.add('d-flex', 'align-items-center', 'justify-content-center',
    'justify-content-md-between', 'border-bottom', 'py-4', 'mb-4');
root.append(header);

let buttonDelete = document.createElement('button');
buttonDelete.setAttribute('type', 'button');
buttonDelete.textContent = 'Delete all';
buttonDelete.classList.add('btn', 'btn-primary', 'fs-5', 'px-4', 'py-2');
header.append(buttonDelete);

let form = document.createElement('form');
form.classList.add('col-8');
header.append(form);

let inputEnter = document.createElement('input');
inputEnter.setAttribute('type', 'text');
inputEnter.setAttribute('placeholder', 'Enter todo ...');
inputEnter.classList.add('form-control', 'me-2', 'fs-5', 'text-center', 'py-2', 'text-muted');
form.append(inputEnter);

let buttonAdd = document.createElement('button');
buttonAdd.setAttribute('type', 'button');
buttonAdd.textContent = 'Add';
buttonAdd.classList.add('btn', 'btn-primary', 'fs-5', 'px-5', 'py-2');
header.append(buttonAdd);

let toDoList = document.createElement('ul');
toDoList.classList.add('ist-group', 'gap-2', 'list-unstyled');
root.append(toDoList);

let toDoItem = document.createElement('li');
toDoItem.classList.add('list-group-item', 'rounded-4', 'bg-light',
    'shadow-sm', 'p-4', 'my-4', 'd-flex', 'justify-content-between');
toDoList.append(toDoItem);

let checkbox = document.createElement('input');
checkbox.setAttribute('type', 'checkbox');
checkbox.classList.add('form-check-input', 'p-3', 'm-2', 'align-self-center');
toDoItem.append(checkbox);

let toDoText = document.createElement('span');
toDoText.textContent = 'Todo text';
toDoText.classList.add('border-radius', 'bg-white', 'shadow-sm', 'rounded',
    'w-75', 'p-4', 'my-4', 'fs-5', 'text-center', 'text-muted');
toDoItem.append(toDoText);

let wrapper = document.createElement('div');
wrapper.classList.add('d-flex', 'flex-column', 'justify-content-between',
    'align-items-end');
toDoItem.append(wrapper);

let buttonClose = document.createElement('button');
buttonClose.setAttribute('type', 'button');
buttonClose.classList.add('btn-close');
wrapper.append(buttonClose);

let date = document.createElement('span');
date.textContent = 'Date';
date.classList.add('border-radius', 'bg-white', 'shadow-sm', 'rounded',
    'py-2', 'px-5', 'fs-5', 'text-muted');
wrapper.append(date);

let toDoItem_2 = toDoItem.cloneNode(true);
toDoList.append(toDoItem_2);