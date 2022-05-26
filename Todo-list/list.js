"use strict"

const root = document.getElementById('root');

const container = document.createElement('div');
container.className = 'container';
root.append(container);

const form = document.createElement('form');
form.className = "input-group mb-3";
container.append(form);

const firstButton = document.createElement('button');
firstButton.className = 'btn btn-outline-secondary';
firstButton.setAttribute('type', 'button');
firstButton.id = 'button-addon1';
firstButton.textContent = 'Delete All';
form.append(firstButton);

let inputField = document.createElement('input');
inputField.className = "form-control";
inputField.setAttribute('placeholder', 'Enter todo..', 'type', 'text');
form.append(inputField);

let toDoText = document.createElement('ul');
toDoText.className = 'list-group list-unstyled d-flex flex-row justify-content-between mb-3';
container.append(toDoText);

toDoText.insertAdjacentHTML(
    'afterbegin',
    '<li id = "toDoTextFirst" class = "list-group-item d-flex align-items-center " ><span class="input-group-text">OK</span></li>'
);

toDoText.insertAdjacentHTML(
    'beforeend',
    '<li><textarea class="form-control" aria-label="With textarea">ToDoList</textarea></li>'
);

toDoText.insertAdjacentHTML(
    'beforeend',
    '<li id = "toDoTextFirst" class = "list-group-item d-flex align-items-center " ><span class="input-group-text">CLOSE</span></li>'
);

let secondToDoList = toDoText.cloneNode(true);

container.append(secondToDoList);