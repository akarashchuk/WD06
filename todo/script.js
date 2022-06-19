"use stric"
/* вывод списка дел , второе зачеркиваение 
статус задачи done: bool;
id: string;

чтобы вывести список нам нужно вывести элементы массива
чтобы удалить находим id и изменяем с try на false
*/

// учим работать с контейнером todos
const todosNode = document.querySelector('.js-todos');
const inputNode = document.querySelector('.js-input');
const btnNode = document.querySelector('.js-btn');
let todos = [];

function addTodo(text) {
   const todo = {
      text,
      done: false,
      id: `${Math.random()}`
   };

   todos.push(todo);
} // добавление тудушки 

// удаление тудушки 

function deleteTodo(id) {
   todos.forEach(todo => {
      if (todo.id === id) {
         todo.done = true; 
      }
   })
}

function render() {
   console.log(todos);
   let html = '';

   todos.forEach(todo => {
      if (todo.done) {
         return;
      };
      // дописываем удаление и создаем checkbox
      html += `
         <div>
            <input type='checkbox' class='check'>
            ${todo.text}
            <button data-id='${todo.id}'>delete</button>
         </div>
      `;
   })
      todosNode.innerHTML = html;
   }

// добавили туду изменили ланные и далее вызвали функцию рендер 

// реализуем добавление в инпут навешивая событие клик
// затем делаем чтобы при клике доставался актуальный текст и добавлялся в него 
// после вызываем ранее созланный метод и пользовательский интерфейс

btnNode.addEventListener('click', () => { 
   const text = inputNode.value;

   addTodo(text);

   render();
});


// навесели на кнопку удаление 
todosNode.addEventListener('click', (event) => {
   if (event.target.tagName !== 'BUTTON') {
      return;
   }

   const id = event.target.dataset.id;

   deleteTodo(id);

   render();
})

render();