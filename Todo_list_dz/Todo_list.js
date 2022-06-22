const addTaskBtn = document.getElementById('add-task-btn'); //для кнопки добавить обращение к элементу по id из html
const descTaskInput = document.getElementById('description-task'); // ввод пользователя обращение к элементу по id из html
//const todosWrapper = document.querySelector('.todos-wrapper'); // задачи обращение к элементу при реализации через класс из html
const todosWrapper = document.getElementById('todoswrapper');//задачи обращение к элементу при реализации через id из html
const delAllButton = document.getElementById('del-all-task-btn');//удалить все


let tasks;
!localStorage.tasks ? tasks = [] : tasks = JSON.parse(localStorage.getItem('tasks'));
//если нет задач, то массив пустой; если есть задачи в localStorage, то вызвать их значения по ключу 'tasks'

let todoItemElems = [];

function Task(description) {
    this.description = description; // описание задачи
    this.completed = false; // по умолчанию задача не выполнена (uncheck)
    this.datetask = getUserTime() ;
}

//создание шаблона для каждой отдельной задачи
const createTemplate = (task,index) => {
    return `
    <div class = "todo-item ${task.completed ? 'checked' : ''}">
        
        <div class = "buttons">
            <input onclick = "completeTask(${index})" class = "btn-complete" type = "checkbox" ${task.completed ? 'checked' : ''}></input>
            </div>
            <div class = "description"> ${task.description}</div>
            <div class = "buttons">
            <button onclick = "deleteTask(${index})" class = "btn-delete"> Delete </button>
            <div class = "date-task"> ${task.datetask}</div> 
        </div>
    </div>
    `
}


function getUserTime(t = new Date()) {
    let Y = t.getFullYear();
    let M = t.getMonth() + 1;
    let D = t.getDate();
    let H = t.getHours();
    let Mi = t.getMinutes();
    return `${Y}/${M}/${D}<br> time ${H}:${Mi}`
}

//фильтр для сбрасывания выполненных задач вниз
const filterTask = () => {
    const activeTasks = tasks.length && tasks.filter(item => item.completed == false);
    const completedTasks = tasks.length && tasks.filter(item => item.completed == true);
    tasks = [...activeTasks,...completedTasks];
}

//заполнение html списка задач
const fillHtmlList = () => {
todosWrapper.innerHTML = "";//зачищение данных
//если массив tasks не пустой, то вытягиваю каждую задачу внутри массива перебором
if(tasks.length > 0) { 
    filterTask();
    tasks.forEach((item, index) => {
        todosWrapper.innerHTML += createTemplate(item, index);//+= к предыдущей итерации добавляем, то что на следующей итерации
    });
    todoItemElems = document.querySelectorAll('.todo-item');
}
}
fillHtmlList();

//обновление значений tasks
const updateLocal = () => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

const completeTask = index => {
    //console.log(index);
    tasks[index].completed = !tasks[index].completed;//замена на противоположное значение true/false
    if(tasks[index].completed) {
        todoItemElems[index].classList.add('checked');
    } else {
        todoItemElems[index].classList.remove('checked');
    }
    updateLocal();
    fillHtmlList();
}

addTaskBtn.addEventListener('click', () => {
    tasks.push(new Task(descTaskInput.value));
    updateLocal();
    fillHtmlList();
    descTaskInput.value = ""; // очистка input после добавления задачи, чтобы вводить новую в пустую строку
})

const deleteTask = index => {
    todoItemElems[index].classList.add('delition')
    setTimeout(() => {
        tasks.splice(index, 1);
        updateLocal();
        fillHtmlList();
},500)
}


delAllButton.addEventListener('click', () => {
    todosWrapper.innerHTML = "";
    tasks = [];
    updateLocal();
})




