

// div #root
let divRoot = document.body.children[0];

//div .content
let divCont = document.createElement('div');
divCont.className = "content";
divRoot.prepend(divCont);

//div .top
let divTop = document.createElement('div');
divTop.className = "top";
divCont.prepend(divTop);
divTop.prepend(document.createElement('button'));
let formTop = document.createElement('form');
divTop.prepend(formTop);
formTop.prepend(document.createElement('input'));
formTop.firstElementChild.className = 'inputText';
formTop.firstElementChild.type = 'text';

divTop.prepend(document.createElement('button'));


//button 
divTop.firstElementChild.innerHTML = 'Delete All';
divTop.firstElementChild.className = 'deleteAll';

//button 
divTop.lastElementChild.innerHTML = 'Add';
divTop.lastElementChild.className = 'add';

//div.show
let divShow = document.createElement('div');
divShow.className = "show";
divTop.after(divShow);

divShow.append(document.createElement('span'));
divShow.append(document.createElement('span'));
divShow.append(document.createElement('button'));
divShow.append(document.createElement('button'));
let formShow = document.createElement('form');
divShow.append(formShow);
formShow.prepend(document.createElement('input'));
formShow.firstElementChild.className = 'toText';


divShow.firstElementChild.className = 'all'
divShow.firstElementChild.innerHTML = 'All:';
divShow.firstElementChild.nextElementSibling.className = 'completed'
divShow.firstElementChild.nextElementSibling.innerHTML = 'Completed:';
divShow.querySelector('span + button').innerHTML = 'Show All';
divShow.querySelector('button ~ button').innerHTML = 'Show Completed';


//div .todo
let divTodo = document.createElement('div');
divTodo.className = "todo";
divShow.after(divTodo);
//ul
let ul_td = document.createElement('ul');
divTodo.prepend(ul_td);

// Вариант № 1 (если раскомментировать)
/*ul_td.innerHTML = getItem('data_myUl');

//li
function addLi(myText) {
    ul_td.insertAdjacentHTML('afterbegin', `<li>
                        <div class="todo-li">
                            <div>
                                <input type="checkbox" class="check">
                                <div><span class="doToText">${myText}</span></div>
                                <button class="close">x</button>
                            </div>
                            <div>
                                <div><span class="date">${new Date().toLocaleString()}</span></div>
                            </div>
                        </div>
                    </li>`);

    setItem('data_myUl', ul_td.innerHTML);
}

function test() {
    alert('Hello');
}

function onCheck(event) {
    if (event.target.className === 'check') {
        test();
    }
}

function onAddLi(event) {
    if (event.target.className === 'add') {
        let val = document.querySelector('.inputText').value;
        addLi(val);
    }
}
function onDelLi(event) {
    if (event.target.className === 'close') {
        event.target.closest('li').remove();
    }
    setItem('data_myUl', ul_td.innerHTML);
}

function onDelAllLi(event) {
    if (event.target.className === 'deleteAll') {
        ul_td.innerHTML = '';
    }
    setItem('data_myUl', ul_td.innerHTML);
}

function onChecked(event) {
    if (event.target.className === 'check') {
        event.target.checked ?
            event.target.nextElementSibling.style.textDecoration = 'line-through' :
            event.target.nextElementSibling.style.textDecoration = 'none';

    }
}

function onStor(event) {
    if (event.key === 'data_myUl') {
        ul_td.innerHTML = `${event.newValue}`
    }
}

function setItem(key, item) {
    try {
        localStorage.setItem(key, item);
    }
    catch (e) {
        console.error(e)
    }
}

function getItem(key) {
    try {
        return localStorage.getItem(key);
    }
    catch (e) {
        console.error(e)
    }
}

document.querySelector('.add').addEventListener('click', onAddLi);
document.querySelector('.deleteAll').addEventListener('click', onDelAllLi);
document.querySelector('ul').addEventListener('click', onDelLi);
//document.querySelector('ul').addEventListener('change', onChecked); //onCheck
window.addEventListener('storage', onStor);
*/


// Вариант № 2
//ul_td.innerHTML = getItem('data_myUl');

let myLi = [];
let htmlStr = '';
let maxId = getMax(myLi);


if (getItem('data_myUl')){
   let myLi = getItem('data_myUl');
   render(myLi);
}

function getMax(myObj) {
    let tempPer = 0;
    for (let i = 0; i < myObj.length; i++) {
        tempPer = Math.max(tempPer, myObj[i].id);
    }
    return tempPer;
}


function addLi(text) {
    let myTemp = {
        id: ++maxId,
        text: text,
        data: new Date().toLocaleString(),
        isCheck: false,
    }

    myLi.push(myTemp);

    htmlStr += addLihtml(maxId, text, myTemp.data, myTemp.isCheck);
}
function addLihtml(id, text, data, isCheck) {
    return `<li id="${id}">
                        <div class="todo-li">
                            <div>
                                <input type="checkbox" class="check" ${isCheck ? 'checked' : ''}>
                                <div><span class="doToText">${text}</span></div>
                                <button class="close">x</button>
                            </div>
                            <div>
                                <div><span class="date">${data}</span></div>
                            </div>
                        </div>
                    </li>`
}

function delLi(id) {
    myLi = myLi.filter(item => item.id != id);
    render(myLi);
}

function render(myLi) {
    htmlStr = '';
    if (myLi.length) {
        //return ul_td.innerHTML = '';
        for (let i = 0; i < myLi.length; i++) {
        htmlStr += addLihtml(myLi[i].id, myLi[i].text, myLi[i].data, myLi[i].isCheck);
         }
    }   
    ul_td.innerHTML = htmlStr;
}
function isCheck(elem) {
    let tempPer = elem.closest('li').id;
    for (let i = 0; i < myLi.length; i++) {
        if (myLi[i].id == tempPer) {
            myLi[i].isCheck = elem.checked;
            break;
        }
    }
    render(myLi);
}

function onAddLi(event) {
    if (event.target.className === 'add') {
        let val = document.querySelector('.inputText').value;
        addLi(val);
    }
    document.querySelector('.inputText').value = '';
    render(myLi);
    setItem('data_myUl', JSON.stringify(myLi));
}

function onDelAllLi(event) {
    if (event.target.className === 'deleteAll') {
        ul_td.innerHTML = '';
    }
    htmlStr = '';
    myLi.length = 0;
    maxId = 0;
    setItem('data_myUl', JSON.stringify(myLi));
}
function onDelLi(event) {
    if (event.target.className === 'close') {
        delLi(event.target.closest('li').id);
    }
    render(myLi);
    setItem('data_myUl', JSON.stringify(myLi));
}

function onChecked(event) {
    if (event.target.className === 'check') {
        isCheck(event.target);
    }
    setItem('data_myUl', JSON.stringify(myLi));
}

function onStor(event) {
    if (event.key === 'data_myUl') {
        ul_td.innerHTML = htmlStr;
    }
}

function setItem(key, item) {
    try {
        localStorage.setItem(key, item);
    }
    catch (e) {
        console.log(e);
    }
}

function getItem(key) {
    try {   
        return localStorage.getItem(key) ? JSON.parse(localStorage.getItem(key)):''; 
    }
    catch (e) {
        console.log(e);
    }
    
}

document.querySelector('.add').addEventListener('click', onAddLi);
document.querySelector('.deleteAll').addEventListener('click', onDelAllLi);
document.querySelector('ul').addEventListener('click', onDelLi);
document.querySelector('ul').addEventListener('click', onChecked);
window.addEventListener('storage', onStor);







