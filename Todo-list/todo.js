"use strict";
root.classList.add('container');

root.insertAdjacentHTML("afterbegin", `<header id="header" 
class="d-flex justify-content-evenly align-items-center py-3 mb-4 border-bottom"></header>`);

header.insertAdjacentHTML("afterbegin", `<button type="button" class="btn btn-danger btn-lg">Delete All</button>`);

let form = document.createElement('form');
form.setAttribute('id', 'form');
form.classList.add('col-7');
header.append(form);

form.insertAdjacentHTML("afterbegin", 
`<input type="text" class="form-control form-control-lg text-align-center text-center"
 required placeholder="Enter Todo..."></input>`);

header.insertAdjacentHTML("beforeend", 
`<button type="button" class="btn btn-success btn-lg">Add</button>`);

root.insertAdjacentHTML("beforeend", 
`<ul id="toDoList" class="list-unstyled"></ul>`);

toDoList.insertAdjacentHTML("afterbegin", 
`<li id="toDoListItem" class="container d-flex mb-4 p-5 bg-warning p-2 text-dark bg-opacity-10 
shadow p-3 mb-5 border rounded rounded-pill justify-content-between align-items-center"></li>`);

toDoListItem.insertAdjacentHTML("afterbegin", 
`<input class="form-check-input p-3 m-1" type="checkbox" value="" checked>`);

let toDoListText = document.createElement('input');
toDoListText.classList.add('form-control', 'form-control-lg', 
'text-align-center', 'text-center', 'w-50', 'p-4');
toDoListItem.append(toDoListText);

toDoListItem.insertAdjacentHTML("beforeend", `<div id="date" class="d-flex flex-column align-items-end"></div>`);

date.insertAdjacentHTML("afterbegin", 
`<button type="button" class="btn-close" aria-label="Close"></button>`);

date.insertAdjacentHTML("beforeend", 
`<input type="text" class="form-control text-center mt-5" placeholder="DD.MM.YYYY" aria-label="Date">`);

let SecondtoDoListItem = toDoListItem.cloneNode(true);
toDoList.append(SecondtoDoListItem); 
