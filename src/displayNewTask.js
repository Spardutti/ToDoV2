import moment from "moment";

function displayNewTask(task, tasks) {
  let list = document.querySelector(".list");

  const taskDiv = document.createElement("div");
  taskDiv.setAttribute("class", "taskDiv");
  taskDiv.setAttribute("id", tasks.indexOf(task))

  const taskName = document.createElement("p");
  taskName.innerHTML = task.name;

  const taskDate = document.createElement("date");
  if (moment(task.date) < moment()) {
    taskDate.innerHTML = "Expired";
  } else {
    taskDate.innerHTML = moment(task.date).fromNow();
  }

  const taskDescription = document.createElement("p");
  taskDescription.innerHTML = task.descr;

  const checkTask = document.createElement("p");
  checkTask.setAttribute("id", "checkTask");
  checkTask.innerHTML = `<i class="fas fa-check"></i>`;
  checkTask.addEventListener("click", checked)

  const delTask = document.createElement("p");
  delTask.setAttribute("id", "delTask");
  delTask.innerHTML = `<i class="fas fa-trash"></i>`;
  delTask.addEventListener("click", () => {
    deleteTask()
  })

  taskDiv.append(taskName, taskDate, checkTask, delTask);

  list.appendChild(taskDiv);

  function checked(){
    taskDate.setAttribute("class", "checked");
    taskName.setAttribute("class", "checked");
  }

  function deleteTask(){
    let button = event.target.parentNode;
     console.log(button.parentNode);
  }
}

export { displayNewTask };
