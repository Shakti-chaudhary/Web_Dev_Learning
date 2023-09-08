console.log("hello world!");

// Selectors

const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");
const filterOption = document.querySelector(".filter-todo");

// Event Listeners

document.addEventListener("DOMContentLoaded", getTodos()); // Load local todos
todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", buttonCheck);
filterOption.addEventListener("click", filterTodo);

// Functions

function addTodo(event) {
  event.preventDefault();

  // Todo DIV
  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo");

  // Create LI
  const newTodo = document.createElement("li");
  newTodo.innerText = todoInput.value;
  newTodo.classList.add("todo-item");
  todoDiv.appendChild(newTodo);

  // Add Todo to LocalStorage
  saveLocalTodos(todoInput.value);

  // Check Mark Button
  const completedButton = document.createElement("button");
  completedButton.innerHTML = `<i class="fas fa-check"></i>`;
  completedButton.classList.add("complete-btn");
  todoDiv.appendChild(completedButton);

  // Check Trash Button
  const deleteButton = document.createElement("button");
  deleteButton.innerHTML = `<i class="fas fa-trash"></i>`;
  deleteButton.classList.add("trash-btn");
  todoDiv.appendChild(deleteButton);

  // Append ToDo List
  todoList.appendChild(todoDiv);

  // Clear Todo Input value
  todoInput.value = "";
}

function buttonCheck(event) {
  // console.log(event.target);
  const item = event.target;

  // Delete Todo
  if (item.classList[0] === "trash-btn") {
    const todo = item.parentElement;

    // Animation
    todo.classList.add("fall");
    removeLocalTodo(todo);
    todo.addEventListener("transitionend", function () {
      todo.remove();
    });
  }

  // Check Mark
  if (item.classList[0] === "complete-btn") {
    const todo = item.parentElement;
    todo.classList.toggle("completed");
  }
}

function filterTodo(event) {
  const todos = Array.from(todoList.childNodes).filter(
    (node) => node.nodeType === 1
  ); // Filter out element nodes remove textNode

  todos.forEach(function (todo) {
    switch (event.target.value) {
      case "all":
        todo.style.display = "flex";
        break;
      case "completed":
        if (todo.classList.contains("completed")) {
          todo.style.display = "flex";
        } else {
          todo.style.display = "none";
        }
        break;
      case "uncompleted":
        if (!todo.classList.contains("completed")) {
          todo.style.display = "flex";
        } else {
          todo.style.display = "none";
        }
        break;
    }
  });
}

function saveLocalTodos(todo) {
  // Check for todo in local storage
  let todos;
  if (localStorage.getItem("todos") === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
  }
  todos.push(todo);
  localStorage.setItem("todos", JSON.stringify(todos));
}

function getTodos() {
  let todos;
  if (localStorage.getItem("todos") === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
  }

  todos.forEach(function (todo) {
    // Todo DIV
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");

    // Create LI
    const newTodo = document.createElement("li");
    newTodo.innerText = todo;
    newTodo.classList.add("todo-item");
    todoDiv.appendChild(newTodo);

    // Check Mark Button
    const completedButton = document.createElement("button");
    completedButton.innerHTML = `<i class="fas fa-check"></i>`;
    completedButton.classList.add("complete-btn");
    todoDiv.appendChild(completedButton);

    // Check Trash Button
    const deleteButton = document.createElement("button");
    deleteButton.innerHTML = `<i class="fas fa-trash"></i>`;
    deleteButton.classList.add("trash-btn");
    todoDiv.appendChild(deleteButton);

    // Append ToDo List
    todoList.appendChild(todoDiv);
  });
}

function removeLocalTodo(todo) {
  let todos;
  if (localStorage.getItem("todos") === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
  }
  const todoIndex = todo.children[0].innerText;

  todos.splice(todos.indexOf(todoIndex), 1);
  localStorage.setItem("todos", JSON.stringify(todos));
}
