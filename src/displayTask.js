import { displayNewTask } from "./displayNewTask";

function displayTasks(tasks) {
  let sortByDate = tasks.sort((a, b) => {
    return new Date(a.date) - new Date(b.date);
  });
  const taskContainer = document.querySelector(".taskContainer");
  sortByDate.forEach((task) => {
    displayNewTask(task, tasks);
  });
}

export { displayTasks };
