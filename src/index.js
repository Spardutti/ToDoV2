import { displayForm } from "./displayForm";
import { displayTasks } from "./displayTask";


(function toDo() {
  //if storage exist, get teh data
  if(localStorage.getItem("tasks") != null){
    let tasks = JSON.parse(localStorage.getItem("tasks"));
    displayTasks(tasks)
    let button = document.querySelector(".addTaskBtn");
    button.addEventListener("click", () => {
      displayForm(tasks);
    });
  }
  //if storage is empty, create it
  else {
    let tasks = [];
    let button = document.querySelector(".addTaskBtn");
  button.addEventListener("click", () => {
    displayForm(tasks);
  });
  }

  let tabs = document.getElementsByClassName("tabs");
 for( let i =0; i<tabs.length; i++){
   tabs[i].addEventListener("click", () => {
     for( let j =0; j<tabs.length; j++){
       tabs[j].classList.remove("activeTab");
     }
     tabs[i].classList.add("activeTab");
   })
 }
 //figure how to dispay different folders
})();
