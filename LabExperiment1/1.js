// Sample initial tasks
const initialTasks = [
  { text: "Complete homework", completed: false },
  { text: "Read a book", completed: true },
];

// Function to render tasks
function renderTasks() {
  const tasksContainer = document.getElementById("tasks-container");
  tasksContainer.innerHTML = "";

  for (let i = 0; i < tasks.length; i++) {
    const task = tasks[i];

    const taskElement = document.createElement("div");
    taskElement.className = "task";

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = task.completed;
    checkbox.addEventListener("change", () => toggleTask(i));

    const taskText = document.createElement("span");
    taskText.innerText = task.text;

    const removeButton = document.createElement("button");
    removeButton.innerText = "Remove";
    removeButton.addEventListener("click", () => removeTask(i));

    taskElement.appendChild(checkbox);
    taskElement.appendChild(taskText);
    taskElement.appendChild(removeButton);

    tasksContainer.appendChild(taskElement);
  }
}

// Function to add a new task
function addTask() {
  const taskInput = document.getElementById("taskInput");
  const newTaskText = taskInput.value.trim();

  if (newTaskText !== "") {
    tasks.push({ text: newTaskText, completed: false });
    taskInput.value = "";
    renderTasks();
  }
}

// Function to toggle the completion status of a task
function toggleTask(index) {
  tasks[index].completed = !tasks[index].completed;
  renderTasks();
}

// Function to remove a task
function removeTask(index) {
  tasks.splice(index, 1);
  renderTasks();
}

// Initialize tasks with sample data
const tasks = [...initialTasks];

// Render initial tasks
renderTasks();
