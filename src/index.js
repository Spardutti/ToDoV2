import { displayForm } from "./displayForm";
import { displayTasks } from "./displayTask";


(function toDo() {
  //if storage exist, get teh data
  if(localStorage.getItem("tasks") != null){
    let tasks = JSON.parse(localStorage.getItem("tasks"));
    displayTasks(tasks)
  }
  //if storage is empty, create it
  else {
    let tasks = [];
    let button = document.querySelector(".addTaskBtn");
  button.addEventListener("click", () => {
    displayForm(tasks);
  });
  }

  
})();
