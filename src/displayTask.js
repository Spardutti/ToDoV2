import { displayNewTask } from "./displayNewTask";
function displayTasks(tasks) {
  let sortByDate = tasks.sort((a, b) => {
    return new Date(a.date) - new Date(b.date);
  });
  let list = document.querySelector(".list");
  const taskContainer = document.createElement("div");
  taskContainer.setAttribute("class", "taskContainer");
  sortByDate.forEach((e) => {
    displayNewTask(e.name, e.date, e.descr);
  });
  list.append(taskContainer);
}

export { displayTasks };
