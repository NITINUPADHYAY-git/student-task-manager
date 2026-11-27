const taskForm = document.getElementById("task-form");
const taskInput = document.getElementById("task-input");
const taskList = document.getElementById("task-list");

taskForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const taskText = taskInput.value.trim();

    if (taskText === "") {
        return;
    }

    const listItem = document.createElement("li");
    const taskName = document.createElement("span");
    const deleteButton = document.createElement("button");

    taskName.textContent = taskText;
    deleteButton.textContent = "Delete";
    deleteButton.classList.add("delete-btn");

    taskName.addEventListener("click", function () {
        taskName.classList.toggle("completed");
    });

    deleteButton.addEventListener("click", function () {
        listItem.remove();
    });

    listItem.appendChild(taskName);
    listItem.appendChild(deleteButton);
    taskList.appendChild(listItem);

    taskInput.value = "";
});