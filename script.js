let todoForm = document.getElementById("form");
let Todo_List = document.querySelector("#todo__list");
let TodoInputField = document.querySelector("#todo__input");

function deleteTodo(eventObject) {
  const buttonClicked = eventObject.target;
  const todoItem = buttonClicked.parentNode.parentNode.parentNode;
  todoItem.remove();
}

function editTodoText(eventObject) {
  let editButtonClicked = eventObject.target;
  let li = editButtonClicked.parentNode.parentNode.parentNode;
  let deletebtn = li.childNodes[1].childNodes[5];
  let child = li.childNodes[1].childNodes[3].innerHTML;
  TodoInputField.value = child;
  let newbtn = document.createElement("button");
  newbtn.innerHTML = `Save`;
  newbtn.classList.add("save-btn");
  li.append(newbtn);
  editButtonClicked.disabled = true;
  newbtn.addEventListener("click", save);
  function save() {
    let child_ = li.childNodes[1].childNodes[3];
    child_.innerHTML = TodoInputField.value;
    console.log(child_.innerHTML);
    TodoInputField.value = "";
    editButtonClicked.disabled = false;
    newbtn.remove();
  }
}

function selectButtons() {
  let collectButtons = document.querySelectorAll(".delete-btn");
  let lastButton = collectButtons[collectButtons.length - 1];

  lastButton.addEventListener("click", deleteTodo);

  let collectEditButtons = document.querySelectorAll(".edit-btn");
  let lastEditButton = collectEditButtons[collectButtons.length - 1];

  lastEditButton.addEventListener("click", editTodoText);
}
//

function showTodoOnTheScreen(todo) {
  const li = document.createElement("li");
  li.classList.add("todo__section-todoItem");

  li.innerHTML = ` <div>
  <input type="checkbox" class="todo-checkbox">
  <span class="todo-text" > ${todo} </span>
  <div class="todo_actions-wrapper">
      <button  class="todo_actions edit-btn" id="edit_btn">edit</button>
      <button  class="todo_actions delete-btn" id="delete_btn">delete</button>
  </div>
</div>`;

  Todo_List.appendChild(li);
  selectButtons();
}

function todoFormSumbit(eventObject) {
  eventObject.preventDefault();

  const todoValue = TodoInputField.value;
  showTodoOnTheScreen(todoValue);
  TodoInputField.value = "";
}
todoForm.addEventListener("submit", todoFormSumbit);

