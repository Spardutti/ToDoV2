import moment from "moment";

function displayNewTask(name, date, descr) {
  let list = document.querySelector(".list");

  const taskDiv = document.createElement("div");
  taskDiv.setAttribute("class", "taskDiv");
  taskDiv.setAttribute("id", name)

  const taskName = document.createElement("p");
  taskName.innerHTML = name;

  const taskDate = document.createElement("date");
  if (moment(date) < moment()) {
    taskDate.innerHTML = "Expired";
  } else {
    taskDate.innerHTML = moment(date).fromNow();
  }

  const taskDescription = document.createElement("p");
  taskDescription.innerHTML = descr;

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
     console.log(delTask.parentNode)
  }
}

export { displayNewTask };
