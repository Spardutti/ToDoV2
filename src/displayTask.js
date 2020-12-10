import { displayNewTask } from "./displayNewTask"
function displayTasks(tasks) {
  let list = document.querySelector(".list");
  const taskContainer = document.createElement("div");
  taskContainer.setAttribute("class", "taskContainer");
  tasks.forEach((e) => {
  displayNewTask(e.name, e.date, e.descr);

  });
  list.append(taskContainer);
}

export { displayTasks };
