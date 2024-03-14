const form = document.getElementById("add-task-form");
const input = document.getElementById("new-task-input");
const list = document.getElementById("task-list");

function addTask() {
  if (!input.value.trim()) {
    return;
  }
  
  const taskItem = document.createElement("li");
  taskItem.className = "task-item";
  
  const taskName = document.createElement("span");
  taskName.className = "task-name";
  taskName.textContent = input.value.trim();
  taskItem.appendChild(taskName);
  
  const deleteButton = document.createElement("button");
  deleteButton.className = "delete-button";
  deleteButton.textContent = "Delete";
  deleteButton.addEventListener("click", function() {
    list.removeChild(taskItem);
  });
  taskItem.appendChild(deleteButton);
  
  list.appendChild(taskItem);
  
  input.value = "";
}

form.addEventListener("submit", function(event) {
  event.preventDefault();
  addTask();
});

input.addEventListener("keydown", function(event) {
  if (event.key === "Enter") {
    addTask();
  }
});