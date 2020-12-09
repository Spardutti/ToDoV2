function displayTasks(tasks) {
  let list = document.querySelector(".list");
  const taskContainer = document.createElement("div");
  taskContainer.setAttribute("class", "taskContainer");
  tasks.forEach((e) => {
      const taskDiv = document.createElement("div");
      taskDiv.setAttribute("class", "taskDiv");
    const taskName = document.createElement("p");
    taskName.innerHTML = e.name;

    const taskDate = document.createElement("date");
    taskDate.innerHTML = e.date;

    const taskDescription = document.createElement("p");
    taskDescription.innerHTML = e.descr;

    const checkTask = document.createElement("button");
    checkTask.innerHTML = "Done";

    const DelTask = document.createElement("button");
    DelTask.innerHTML = "Del";

    taskDiv.append(
      taskName,
      taskDate,
      taskDescription,
      checkTask,
      DelTask
    );
    taskContainer.append(taskDiv);

  });
  list.append(taskContainer);
}

export { displayTasks };
