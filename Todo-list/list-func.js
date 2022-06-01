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
    '<li id="firstThing" class="list-group-item d-flex align-items-center " ><input class="form-check-input pr-5" type="checkbox" id="checkboxNoLabel" value="" aria-label="..."><span class="form-control" type="text" aria-label="Disabled input example" disabled>Something to do</span><button class="input-group-text">CLOSE</button></li>'
);

let firstThing = document.getElementById('firstThing');

let secondThing = firstThing.cloneNode(true);
toDoArea.append(secondThing);

deleteButton.addEventListener('click', function() {
    // toDoArea.childNodes.remove();
    toDoArea.innerHTML = '';
});



addButton.addEventListener('click', function() {
    toDoArea.insertAdjacentHTML(
        'afterbegin',
        `<li id="firstThing" class="list-group-item d-flex align-items-center " ><input class="form-check-input pr-5" type="checkbox" id="checkboxNoLabel" value="" aria-label="..."><span class="form-control" type="text" aria-label="Disabled input example" disabled>${inputField.value}</span><span class="input-group-text">CLOSE</span></li>`
    )
});

toDoArea.addEventListener('click', function(event) {
    if (event.target.classList.contains('input-group-text')) {
        event.target.closest('li').remove();
    }
});

toDoArea.addEventListener('click', function(event) {
    if (event.target.classList.contains('form-check-input')) {
        event.target.closest('li').classList.add('bg-success');
        event.target.nextSibling.classList.add('text-decoration-line-through');
    }if (!event.target.checked) {
        event.target.closest('li').classList.remove('bg-success');
        event.target.nextSibling.classList.remove('text-decoration-line-through');
    } 
    // console.log(event.target.checked);
    
});
