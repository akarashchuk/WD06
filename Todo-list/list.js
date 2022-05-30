"use strict"

const root = document.getElementById('root');

const container = document.createElement('div');
container.className = 'container';
root.append(container);

const form = document.createElement('form');
form.className = "input-group mb-3";
container.append(form);

const deleteButton = document.createElement('button');
deleteButton.className = 'btn btn-outline-secondary';
deleteButton.setAttribute('type', 'button');
deleteButton.id = 'button-addon1';
deleteButton.textContent = 'Delete All';
form.append(deleteButton);

const inputField = document.createElement('input');
inputField.className = "form-control";
inputField.setAttribute('placeholder', 'Enter todo..', 'type', 'text');
form.append(inputField);

const addButton = document.createElement('button');
addButton.textContent = 'ADD';
addButton.className = 'btn btn-outline-secondary';
addButton.setAttribute('type', 'button');
form.append(addButton);

let toDoArea = document.createElement('ul');
toDoArea.className = 'list-group list-unstyled d-flex justify-content-between mb-3';
container.append(toDoArea);

toDoArea.insertAdjacentHTML(
    'afterbegin',
    '<li id="firstThing" class="list-group-item d-flex align-items-center " ><span class="input-group-text">AGREE</span><input class="form-control" type="text" placeholder="Something to do" aria-label="Disabled input example" disabled><span class="input-group-text">CLOSE</span></li>'
);

let firstThing = document.getElementById('firstThing');

let secondThing = firstThing.cloneNode(true);

toDoArea.append(secondThing);