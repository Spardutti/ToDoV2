import { displayForm } from "./displayForm";
import { displayTasks } from "./displayTask";


(function toDo() {
  //tasks array to contain task
  let tasks = [{ name: "hola", date: "2020-12-31", descr: "Piiza" },{name:"chao", date: "2020-12-24"}];

  let button = document.querySelector(".addTaskBtn");
  button.addEventListener("click", () => {
    displayForm(tasks);
  });
  displayTasks(tasks);
})();
