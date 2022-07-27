"use strict"
const root = document.getElementById('root');


const cont = document.createElement('div');
cont.className = 'container';
root.append(cont);

const form = document.createElement('form');
form.className = 'input-group mb-3 mt-3';
cont.append(form);

const deleteButton = document.createElement('button');
deleteButton.className = 'btn btn-danger me-3';
deleteButton.setAttribute('type', 'button');
deleteButton.textContent = 'Delete All'
form.append(deleteButton);



const enter = document.createElement('input');
enter.className = 'form-control';
enter.setAttribute('placeholder', 'Enter todo ...', 'type', 'text');
form.append(enter);


const addButton = document.createElement('button');
addButton.className = 'btn btn-success ms-3';
addButton.setAttribute('type', 'button');
addButton.textContent = 'Add';
form.append(addButton);



let todoZone = document.createElement('ul');
todoZone.className = 'list-group list-unstyled d-flex justify-content-between mb-3';
cont.append(todoZone);


let area = document.createElement('li');
area.className = 'list-group-item d-flex align-items-center';
todoZone.append(area);


let check = document.createElement('input');
check.className = 'form-check-input pr-5 me-3';
check.setAttribute('type', 'checkbox')
area.append(check);

let todoText = document.createElement('span');
todoText.className = 'form-control text-center';
todoText.textContent = 'Something to do';
area.append(todoText);




let rightZone = document.createElement('div');
rightZone.className = 'd-flex flex-column';
area.append(rightZone);


let closeButton = document.createElement('button');
closeButton.className = 'input-group-text';
closeButton.textContent = 'Close';
rightZone.append(closeButton);


let date = document.createElement('span');
date.className = 'btn btn-secondary mt-2';
date.textContent = 'Date';
rightZone.append(date);

let area2 = document.createElement('li');
area2.className = 'list-group-item d-flex align-items-center';
todoZone.append(area2);


let check2 = document.createElement('input');
check2.className = 'form-check-input pr-5 me-3';
check2.setAttribute('type', 'checkbox')
area2.append(check2);

let todoText2 = document.createElement('span');
todoText2.className = 'form-control text-center';
todoText2.textContent = 'Something to do';
area2.append(todoText2);




let rightZone2 = document.createElement('div');
rightZone2.className = 'd-flex flex-column';
area2.append(rightZone2);


let closeButton2 = document.createElement('button');
closeButton2.className = 'input-group-text';
closeButton2.textContent = 'Close';
rightZone2.append(closeButton2);


let date2 = document.createElement('span');
date2.className = 'btn btn-secondary mt-2';
date2.textContent = 'Date';
rightZone2.append(date2);



deleteButton.addEventListener('click', function(){
    todoZone.innerHTML = ' ';
})


function getUserTime(date = new Date()) {
    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let day = date.getDate();

    return `${year}/${month}/${day}`
}


addButton.addEventListener('click', function(){
    todoZone.insertAdjacentHTML(
        'afterbegin',
        `<li id="firstThing" class="list-group-item d-flex align-items-center " ><input class="form-check-input pr-5 me-3" type="checkbox" id="checkboxNoLabel" value="" aria-label="..."><span class="form-control text-center" type="text" aria-label="Disabled input example" disabled>${enter.value}</span><div class="d-flex flex-column"><button class="input-group-text">CLOSE</button><span class="btn btn-secondary mt-2">${getUserTime()}</span></div></li>`

    )
})
todoZone.addEventListener('click', function(event) {
    if (event.target.classList.contains('input-group-text')) {
        event.target.closest('li').remove();
    }
});

todoZone.addEventListener('click', function(event) {
    if (event.target.classList.contains('form-check-input')){
       if(!event.target.checked){
        event.target.closest('li').classList.remove('bg-success')
        event.target.nextSibling.classList.remove('text-decoration-line-through')
       }
       else{
        event.target.closest('li').classList.add('bg-success')
        event.target.nextSibling.classList.add('text-decoration-line-through')
       }
    }
})