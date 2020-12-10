function displayNewTask(name, date, descr) {
  let list = document.querySelector(".list");
  const taskContainer = document.createElement("div");
  taskContainer.setAttribute("class", "taskContainer");

  const taskDiv = document.createElement("div");
  taskDiv.setAttribute("class", "taskDiv");
  
  const taskName = document.createElement("p");
  taskName.innerHTML = name;

  const taskDate = document.createElement("date");
  taskDate.innerHTML = date;

  const taskDescription = document.createElement("p");
  taskDescription.innerHTML = descr;

  const checkTask = document.createElement("button");
  checkTask.setAttribute("id", "checkTask");

  const DelTask = document.createElement("button");
  DelTask.innerHTML = "Del";

  taskDiv.append(taskName, taskDate, taskDescription, checkTask, DelTask);
  taskContainer.append(taskDiv);

  list.append(taskContainer);
}

export { displayNewTask }
