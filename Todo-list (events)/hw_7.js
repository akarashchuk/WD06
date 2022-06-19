"use strict"

const root = document.getElementById('root');
root.className = 'container px-5';

const header = document.createElement('header');
header.className = `d-flex align-items-center justify-content-center 
    justify-content-md-between border-bottom py-4 mb-4`;
root.append(header);

const buttonDelete = document.createElement('button');
buttonDelete.setAttribute('type', 'button');
buttonDelete.textContent = 'Delete all';
buttonDelete.className = 'btn btn-primary fs-5 px-4 py-2';
header.append(buttonDelete);

const form = document.createElement('form');
form.className = 'd-flex col-10';
header.append(form);

const enterTask = document.createElement('input');
enterTask.setAttribute('type', 'text');
enterTask.setAttribute('placeholder', 'Enter todo ...');
enterTask.className = 'form-control me-5 fs-5 text-center py-2 text-muted';
form.append(enterTask);

const buttonAdd = document.createElement('button');
buttonAdd.setAttribute('type', 'submit');
buttonAdd.textContent = 'Add';
buttonAdd.className = 'btn btn-primary fs-5 px-5 py-2';
form.append(buttonAdd);

const toDoList = document.createElement('ul');
toDoList.className = 'list-group gap-2 list-unstyled';
root.append(toDoList);

let storageItems = JSON.parse(localStorage.getItem('Tasks'));
let toDoItems = storageItems ? storageItems : [];
renderList();

const updateStorage = () => {
    localStorage.setItem('Tasks', JSON.stringify(toDoItems));
}

function createNewItem() {
    let newItem = {
        itemId: Math.random().toString(),
        value: enterTask.value,
        isChecked: false,
        creationDate: new Date().toLocaleDateString(),
    }

    toDoItems.push(newItem);
    renderList();
    enterTask.value = '';
}

function renderList() {

    const items = toDoItems.map((item) => {
        return `
            <li data-id="${item.itemId}" class="list-group-item rounded-4 bg-light shadow-sm p-4 my-4 d-flex 
            justify-content-between ${item.isChecked ? 'text-decoration-line-through' : ''}" ${item.isChecked ? 'style="opacity: .5;"' : ''}>
                <input type="checkbox" class="form-check-input p-3 m-2 align-self-center"${item.isChecked ? 'checked' : ''}>
                <span class="border-radius bg-white shadow-sm rounded w-75 p-4 my-4 fs-5">${item.value}</span>
                <div class="d-flex flex-column justify-content-between align-items-end">
                    <button class="btn-close" aria-label="Close"></button>
                    <span class="border-radius bg-white shadow-sm rounded py-2 px-3 fs-5 text-muted">${item.creationDate}</span>
                </div>
            </li>
        `;
    }).join('');

    toDoList.innerHTML = items;
}

function addTask(event) {
    event.preventDefault();

    if (enterTask.value == '') {
        alert('Nothing to add');
        return;
    }
    createNewItem();
    updateStorage();
}

form.addEventListener('submit', addTask);

buttonDelete.addEventListener('click', deleteAllItems);

function deleteAllItems() {
    toDoList.innerHTML = "";
    toDoItems = [];
    updateStorage();
}

toDoList.addEventListener('click', completeTask);

function completeTask(event) {
    if (event.target.classList.contains('form-check-input')) {
        const id = event.target.parentElement.dataset.id;

        let items = toDoItems.find(item => item.itemId === id);
        items.isChecked = !items.isChecked;

        if (items.isChecked) {
            event.target.parentElement.classList.add('text-decoration-line-through');
            event.target.parentElement.style.opacity = '.5';
        } else {
            event.target.parentElement.classList.remove('text-decoration-line-through');
            event.target.parentElement.style.opacity = '';
        }

        updateStorage();
    }
}

toDoList.addEventListener('click', deleteItem);

function deleteItem(event) {
    if (event.target.classList.contains('btn-close')) {
        const id = event.target.closest('.list-group-item').dataset.id;

        event.target.closest('.list-group-item').remove();

        toDoItems.forEach(function (item, i) {
            if (item.itemId === id) toDoItems.splice(i, 1);
        });
        updateStorage();
    }
}

window.addEventListener('storage', event => {
    toDoItems = JSON.parse(event.newValue);
    renderList();
});

