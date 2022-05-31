document.body.style.fontFamily = 'Times New Roman,Times, serif';
document.body.style.fontSize = '16px';
document.body.style.lineHeight = '1.5';

// div #root
let divRoot = document.body.children[0];
divRoot.style.margin = '0 auto';
divRoot.style.backgroundColor = 'lightgray';
divRoot.style.border = "solid black 2px";
divRoot.style.borderRadius = "5px";
divRoot.style.width = '80%';
divRoot.style.maxWidth = '1170px';
divRoot.style.minWidth = '700px';

//div .content
let divCont = document.createElement('div');
divCont.className = "content";
divRoot.prepend(divCont);
divCont.style.width = '90%';
divCont.style.margin = '0 auto';

//div .top
let divTop = document.createElement('div');
divTop.className = "top";
divCont.prepend(divTop);
divTop.prepend(document.createElement('button'));
let formTop = document.createElement('form');
divTop.prepend(formTop);
formTop.prepend(document.createElement('input'));
divTop.prepend(document.createElement('button'));

divTop.style.width = '100%';
divTop.style.display = 'flex';
divTop.style.justifyContent = 'space-between';
divTop.style.padding = '3% 0 3% 0';
//button 
divTop.firstElementChild.innerHTML = 'Delete All';
//form
formTop.style.width = '60%';
//input
formTop.firstElementChild.type = 'text';
formTop.firstElementChild.name = 'getToDo';
formTop.firstElementChild.placeholder = 'Enter todo...';
formTop.firstElementChild.style.width = '100%';
formTop.firstElementChild.style.backgroundColor = 'white';
formTop.firstElementChild.style.textAlign = "center";
//button 
divTop.lastElementChild.innerHTML = 'Add';

for (let elem of divTop.querySelectorAll('button, input')) {
    elem.style.borderRadius = "5px";
    elem.style.border = "solid black 2px";
    elem.style.height = '2.75rem';
}

for (let elem of divTop.querySelectorAll(' button')) {
    elem.style.backgroundColor = 'aqua';
    elem.style.width = '6rem';
};

//div.show
let divShow = document.createElement('div');
divShow.className = "show";
divTop.after(divShow);

divShow.style.width = '100%';
divShow.style.display = 'flex';
divShow.style.justifyContent = 'space-between';
divShow.style.paddingBottom = '3%';

divShow.append(document.createElement('span'));
divShow.append(document.createElement('span'));
divShow.append(document.createElement('button'));
divShow.append(document.createElement('button'));
let formShow = document.createElement('form');
divShow.append(formShow);
formShow.prepend(document.createElement('input'));

for (let elem of divShow.querySelectorAll('button, input')) {
    elem.style.borderRadius = "5px";
    elem.style.border = "solid black 2px";
    elem.style.height = '2.75rem';
}

for (let elem of divShow.querySelectorAll('button')) {
    elem.style.width = '10rem';
    elem.style.backgroundColor = 'aqua';
}

divShow.firstElementChild.innerHTML = 'All: 2';
divShow.firstElementChild.nextElementSibling.innerHTML = 'Completed: 1';
divShow.querySelector('span + button').innerHTML = 'Show All';
divShow.querySelector('button ~ button').innerHTML = 'Show Completed';
divShow.lastElementChild.style.width = '30%';
divShow.lastElementChild.firstElementChild.style.width = '100%';
divShow.lastElementChild.firstElementChild.placeholder = 'Search...';
divShow.lastElementChild.firstElementChild.style.textAlign = 'center';

//div .todo
let divTodo = document.createElement('div');
divTodo.className = "todo";
divShow.after(divTodo);
divTodo.style.width = '100%';
//ul
let ul_td = document.createElement('ul');
divTodo.prepend(ul_td);
//li
let li_td = document.createElement('li');
ul_td.prepend(li_td);

li_td.prepend(document.createElement('div'));
li_td.style.border = "solid black 2px";
li_td.style.borderRadius = "5px";
li_td.style.marginBottom = "5%";
//div.todo-li
li_td.firstElementChild.className = "todo-li";
li_td.firstElementChild.prepend(document.createElement('div'));
li_td.firstElementChild.prepend(document.createElement('div'));

li_td.firstElementChild.style.display = 'flex';
li_td.firstElementChild.style.justifyContent = 'space-between';
//div
let el = li_td.querySelector('.todo-li > div:first-child');
el.prepend(document.createElement('input'));
el.prepend(document.createElement('input'));
el.style.width = '90%';
el.style.marginLeft = '1%';
el.style.padding = '3% 0 3% 0';
//input
el.firstElementChild.type = 'checkbox';
el.firstElementChild.name = 'check1';
el.firstElementChild.style.width = '2rem';

//input
el.lastElementChild.type = 'text';
el.lastElementChild.name = 'todo_text1';
el.lastElementChild.placeholder = 'Todo Text';
el.lastElementChild.style.backgroundColor = 'white';
el.lastElementChild.style.borderRadius = '5px';
el.lastElementChild.style.textAlign = 'center';
el.lastElementChild.style.height = '2.75rem';
el.lastElementChild.style.width = '80%';

//div
let el_l = li_td.querySelector('.todo-li > div:last-child');
el_l.prepend(document.createElement('button'));
el_l.prepend(document.createElement('button'));

el_l.style.width = '10%';
el_l.style.display = 'flex';
el_l.style.flexDirection = 'column';
el_l.style.justifyContent = 'space-between';
el_l.style.alignItems = 'flex-end';
//button
el_l.firstElementChild.innerHTML = 'x';
el_l.firstElementChild.className = 'close';
el_l.firstElementChild.style.backgroundColor = 'aqua';
el_l.firstElementChild.style.border = 'solid black 2px';
el_l.firstElementChild.style.width = '2rem';
//button
el_l.lastElementChild.innerHTML = 'Date'
el_l.lastElementChild.className = 'date'
el_l.lastElementChild.style.backgroundColor = 'white';
el_l.lastElementChild.style.width = '5rem';

for (let elem of el_l.querySelectorAll('button')) {
    elem.style.borderRadius = "5px";
    elem.style.margin = "10%";
    elem.style.height = '2rem';
}


ul_td.appendChild(li_td.cloneNode(true));
ul_td.lastElementChild.querySelector('input[type = checkbox]').name = 'check2';
ul_td.lastElementChild.querySelector('input ~ input').name = 'todo_text2';









