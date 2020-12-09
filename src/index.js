import { displayForm } from "./displayForm";
import { displayTasks } from "./displayTask";

(function toDo() {
  //tasks array to contain task
  let tasks = [{ name: "hola", date: "2020-12-02", descr: "Piiza" }];

  let button = document.querySelector(".addTaskBtn");
  button.addEventListener("click", () => {
    displayForm(tasks);
  });
  displayTasks(tasks);
})();
