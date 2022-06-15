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
    '<li class="list-group-item d-flex align-items-center " ><input class="form-check-input pr-5" type="checkbox" id="checkboxNoLabel" value="" aria-label="..."><span class="form-control text-center" type="text" aria-label="Disabled input example" disabled>Something to do</span><div class="d-flex flex-column"><button class="input-group-text">CLOSE</button><span class="btn btn-secondary mt-2">Day</span></div></li>'
);

toDoArea.insertAdjacentHTML(
    'beforeend',
    '<li class="list-group-item d-flex align-items-center " ><input class="form-check-input pr-5" type="checkbox" id="checkboxNoLabel2" value="" aria-label="..."><span class="form-control text-center" type="text" aria-label="Disabled input example" disabled>Something to do</span><div class="d-flex flex-column"><button class="input-group-text">CLOSE</button><span class="btn btn-secondary mt-2">Day</span></div></li>'
);

deleteButton.addEventListener('click', function() {
    // toDoArea.childNodes.remove();
    toDoArea.innerHTML = '';
});

// const date = new Date();

function getUserTime(t = new Date()) {
    let Y = t.getFullYear();
    let M = t.getMonth() + 1;
    let D = t.getDate();

    return `${Y}/${M}/${D}`
}

addButton.addEventListener('click', function() {
    toDoArea.insertAdjacentHTML(
        'afterbegin',
        `<li id="firstThing" class="list-group-item d-flex align-items-center " ><input class="form-check-input pr-5" type="checkbox" id="checkboxNoLabel" value="" aria-label="..."><span class="form-control text-center" type="text" aria-label="Disabled input example" disabled>${inputField.value}</span><div class="d-flex flex-column"><button class="input-group-text">CLOSE</button><span class="btn btn-secondary mt-2">${getUserTime()}</span></div></li>`
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
