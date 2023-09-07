console.log("hello world!");

// Selectors

const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");

// Event Listeners

todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", buttonCheck);

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
