"use strict";

const root = document.getElementById('root');
root.className = 'container';

root.insertAdjacentHTML("afterbegin", `<header id="header" 
class="d-flex justify-content-evenly align-items-center py-3 mb-4 border-bottom"></header>`);

header.insertAdjacentHTML("afterbegin", `<button type="button" id="deleteAllButton" class="btn btn-danger btn-lg">Delete All</button>`);

const form = document.createElement('form');
form.setAttribute('id', 'form');
form.className = 'col-7';
header.append(form);

form.insertAdjacentHTML("afterbegin", 
`<input type="text" id="toDoForm" class="form-control form-control-lg text-center"
 required placeholder="Enter Todo..." value=""></input>`);

header.insertAdjacentHTML("beforeend", 
`<button type="submit" id="addButton" class="btn btn-success btn-lg">Add</button>`);

root.insertAdjacentHTML("beforeend", 
`<ul id="toDoList" class="list-unstyled"></ul>`);

toDoList.insertAdjacentHTML("afterbegin", 
`<li id="toDoListItem" class="container d-flex mb-3 p-3 text-dark bg-opacity-10 
shadow p-3 mb-3 border rounded rounded-pill justify-content-between align-items-center"></li>`);

toDoListItem.insertAdjacentHTML("afterbegin", 
`<input class="form-check-input p-3 m-5" type="checkbox" value="">`);

const toDoListText = document.createElement('span');
toDoListText.className = 'form-control form-control-lg text-align-center text-center w-50 p-4';
toDoListText.id = "inputText";
toDoListItem.append(toDoListText);

toDoListItem.insertAdjacentHTML("beforeend", `<div id="date" class="d-flex flex-column align-items-center p-5"></div>`);

date.insertAdjacentHTML("afterbegin", 
`<button type="button" class="btn-close" aria-label="Close"></button>`);

const secondToDoListItem = toDoListItem.cloneNode(true);
secondToDoListItem.id = 'toDoListItem-clone';
toDoList.append(secondToDoListItem);


const addBtn = document.getElementById('addButton');
const list = document.getElementById('toDoList');
const listForm = document.getElementById('toDoForm');


const deleteAllBtn = document.getElementById('deleteAllButton');
deleteAllBtn.addEventListener('click', function() {
    list.innerHTML = " ";
});

const currentDate = new Date().toLocaleDateString();

const createToDoItem = () => {
    toDoList.insertAdjacentHTML("afterbegin", `<li id="toDoListItem" class="container d-flex mb-3 p-3 text-dark 
    bg-opacity-10 shadow p-3 mb-3 border rounded rounded-pill justify-content-between align-items-center">
    <input class="form-check-input p-3 m-5" type="checkbox">
    <span class="form-control form-control-lg text-center text-through w-50 p-2" id="inputText">${listForm.value}</span>
    <div id="date" class="d-flex flex-column align-items-center p-4">
    <button type="button" class="btn-close" aria-label="Close"></button>
    <span class="form-control text-center mt-3">${new Date().toLocaleDateString()}</span></div></li>`)
};

function submit() {
    if(listForm.value == '') {
        alert('Добавьте дело!');
    } else {
    createToDoItem();
    listForm.value = '';
    };
};

addBtn.addEventListener('click', function() {
    submit();
});

toDoList.addEventListener('click', function(event) {
    if (event.target.closest('.btn-close')) {
        event.target.closest('li').remove();
    }
  });

toDoList.addEventListener('click', function(event) {
    if (event.target.tagName != 'INPUT') { 
        return false; }
    event.target.closest('li').style.background = (event.target.checked) ? 'PaleGreen' : '';
    event.target.closest('li').querySelector('span').style.textDecoration = (event.target.checked) ? 'line-through' : '';
});