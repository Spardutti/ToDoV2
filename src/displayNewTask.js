import moment from "moment";

function displayNewTask(task, tasks) {
  const taskContainer = document.querySelector(".taskContainer");

  const taskDiv = document.createElement("div");
  taskDiv.setAttribute("class", "taskDiv");
  taskDiv.setAttribute("id", tasks.indexOf(task));

  const taskName = document.createElement("p");
  taskName.innerHTML = task.name;

  const taskDate = document.createElement("date");

  if (moment(task.date) < moment() && task.date != null) {
    taskDate.innerHTML = "Expired";
    taskDiv.classList.add("expired");
  } else {
    taskDate.innerHTML = moment(task.date).fromNow();
  }

  const checkTask = document.createElement("p");
  checkTask.setAttribute("id", "checkTask");
  checkTask.innerHTML = '<i class="fas fa-check"></i>';
  checkTask.addEventListener("click", checked);

  const delTask = document.createElement("p");
  delTask.setAttribute("id", "delTask");
  delTask.innerHTML = '<i class="fas fa-trash"></i>';
  delTask.addEventListener("click", () => {
    deleteTask();
  });

  if (task.completed == true) {
    taskDiv.classList.add("checked");
    taskDate.innerHTML = "Completed";
  }

  taskDiv.append(taskName, taskDate, checkTask, delTask);

  taskContainer.appendChild(taskDiv);

  // complete the task
  function checked() {
    const icon = event.target;
    const p = icon.parentNode;
    const div = p.parentNode;
    if (task.completed == false) {
      task.completed = true;
      div.classList.remove("expired");
      div.classList.add("checked");
      taskDate.innerHTML = "Completed";
      task.date = null;
      localStorage.setItem("tasks", JSON.stringify(tasks));
      
    }
  }

  function deleteTask() {
    const button = event.target.parentNode;
    const div = button.parentNode;
    taskContainer.removeChild(div);

    const arrTask = tasks[div.id];
    const index = tasks.indexOf(arrTask);
    tasks.splice(index, 1);
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }
}

export { displayNewTask };
