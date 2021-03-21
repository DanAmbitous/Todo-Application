const inputElement = document.getElementById("input-box");
const addElement = document.getElementById("add-task");
const removeAllElement = document.getElementById("remove-all-tasks");
const ulElement = document.getElementById("tasks");
const taskNames = document.getElementById("task-name");
const taskButtonCol = document.getElementById("task-button");

//This is called when add button is clicked or enter is hit
const addTask = () => {
  let taskName = inputElement.value;

  let TaskName = document.createElement('p');
  TaskName.innerText = taskName;
  TaskName.setAttribute('class', 'task-name');
  let taskButton = document.createElement('button');
  taskButton.addEventListener('click', () => {
    TaskName.remove();
    taskButton.remove();
  })
  taskButton.innerHTML = "Remove";
  taskButton.setAttribute('class', 'task-remove');
  taskNames.appendChild(TaskName);
  taskButtonCol.appendChild(taskButton);

  inputElement.value = "";
}

//This is called when delete key or remove all button are clicked
const removeAllTasks = () => {
  taskNames.innerHTML = "";
  taskButtonCol.innerHTML = "";
}

addElement.addEventListener('click', () => {
  if (inputElement.value.length >= 1) {
    addTask();
  }
})

document.addEventListener('keydown', (event) => {
  if (inputElement.value.length >= 1 && event.key === "Enter") {
    addTask();
  }

  if (event.key === "Delete") {
    removeAllTasks();
  }
})

removeAllElement.addEventListener('click', () => {
  removeAllTasks();
})