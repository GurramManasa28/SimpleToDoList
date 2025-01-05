const todoForm = document.getElementById('todo-form');
const todoInput = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');
const clearBtn = document.getElementById('clear-btn');

todoForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const taskText = todoInput.value.trim();
  if (taskText === '') return;

  const todoItem = document.createElement('li');
  todoItem.className = 'todo-item';
  todoItem.innerHTML = `
    <span>${taskText}</span>
    <button class="delete-btn">&times;</button>
  `;
  todoList.appendChild(todoItem);

  todoInput.value = '';

  const deleteButton = todoItem.querySelector('.delete-btn');
  deleteButton.addEventListener('click', (e) => {
    e.stopPropagation(); 
    todoItem.style.animation = 'fadeOut 0.3s ease';
    todoItem.addEventListener('animationend', () => {
      todoItem.remove();
    });
  });

  todoItem.addEventListener('click', (e) => {
    if (!e.target.classList.contains('delete-btn')) {
      todoItem.classList.toggle('completed');
    }
  });
});

clearBtn.addEventListener('click', () => {
  const todoItems = document.querySelectorAll('.todo-item');
  todoItems.forEach((item) => {
    item.style.animation = 'fadeOut 0.3s ease';
    item.addEventListener('animationend', () => {
      item.remove();
    });
  });
});