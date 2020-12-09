function displayTasks(tasks) {
  let list = document.querySelector(".list");
  const taskContainer = document.createElement("div");
  tasks.forEach((e) => {
    const taskName = document.createElement("p");
    taskName.innerHTML = e.name;

    const taskDate = document.createElement("date");
    taskDate.innerHTML = e.date;

    const taskDescription = document.createElement("p");
    taskDescription.innerHTML = e.descr;

    taskContainer.append(taskName, taskDate, taskDescription);
  });
  list.append(taskContainer);
}

export { displayTasks };
