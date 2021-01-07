import moment from "moment";

function displayNewTask(task, tasks) {

  let taskContainer = document.querySelector(".taskContainer");

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

  if(task.completed == true){
    taskDiv.classList.add("checked");
    taskDate.innerHTML = "Completed"
  }

  taskDiv.append(taskName, taskDate, checkTask, delTask);

  taskContainer.appendChild(taskDiv);

  

  function checked(){
    let icon = event.target;
    let p = icon.parentNode;
    let div = p.parentNode;
    if(task.completed == false){
      task.completed = true;
      div.classList.add("checked");
      taskDate.innerHTML = "Completed"
      localStorage.setItem("tasks", JSON.stringify(tasks));
    }
    else console.log(task);
}

  function deleteTask(){
    let button = event.target.parentNode;
    let div = button.parentNode;
    taskContainer.removeChild(div)

    let arrTask = tasks[div.id];
    let index = tasks.indexOf(arrTask);
    tasks.splice(index, 1);
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }
}

export { displayNewTask };
