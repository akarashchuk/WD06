"use strict"

let root = document.getElementById('root');
root.className = 'container px-5';

let header = document.createElement('header');
header.className = `d-flex align-items-center justify-content-center 
    justify-content-md-between border-bottom py-4 mb-4`;
root.append(header);

let buttonDelete = document.createElement('button');
buttonDelete.setAttribute('type', 'button');
buttonDelete.textContent = 'Delete all';
buttonDelete.className = 'btn btn-primary fs-5 px-4 py-2';
header.append(buttonDelete);

let form = document.createElement('form');
form.className = 'd-flex col-10';
header.append(form);

let inputEnter = document.createElement('input');
inputEnter.setAttribute('type', 'text');
inputEnter.setAttribute('placeholder', 'Enter todo ...');
inputEnter.className = 'form-control me-5 fs-5 text-center py-2 text-muted';
form.append(inputEnter);

let buttonAdd = document.createElement('button');
buttonAdd.setAttribute('type', 'submit');
buttonAdd.textContent = 'Add';
buttonAdd.className = 'btn btn-primary fs-5 px-5 py-2';
form.append(buttonAdd);

let toDoList = document.createElement('ul');
toDoList.className = 'list-group gap-2 list-unstyled';
root.append(toDoList);

let toDoItem = document.createElement('li');
toDoItem.className = `list-group-item rounded-4 bg-light shadow-sm p-4 my-4 
    d-flex justify-content-between`;
toDoItem.id = 'toDoItem';
toDoList.append(toDoItem);

let checkbox = document.createElement('input');
checkbox.setAttribute('type', 'checkbox');
checkbox.className = 'form-check-input p-3 m-2 align-self-center';
toDoItem.append(checkbox);

let toDoText = document.createElement('span');
toDoText.textContent = 'Todo text';
toDoText.className = `border-radius bg-white shadow-sm rounded w-75 p-4 my-4 fs-5 
    text-center text-muted`;
toDoItem.append(toDoText);

let wrapper = document.createElement('div');
wrapper.className = 'd-flex flex-column justify-content-between align-items-end';
toDoItem.append(wrapper);

let buttonClose = document.createElement('button');
buttonClose.setAttribute('type', 'button');
buttonClose.className = 'btn-close';
wrapper.append(buttonClose);

let date = document.createElement('span');
date.textContent = 'Date';
date.className = 'border-radius bg-white shadow-sm rounded py-2 px-5 fs-5 text-muted';
wrapper.append(date);

let toDoItem_2 = toDoItem.cloneNode(true);
toDoItem_2.id = 'toDoItem_2';
toDoList.append(toDoItem_2);