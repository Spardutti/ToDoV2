import { displayForm } from "./displayForm";
import { displayTasks } from "./displayTask";

(function toDo() {
  // if storage exist, get teh data
  if (localStorage.getItem("tasks") != null) {
    const tasks = JSON.parse(localStorage.getItem("tasks"));
    displayTasks(tasks);
    const button = document.querySelector(".addTaskBtn");
    button.addEventListener("click", () => {
      displayForm(tasks);
    });
    addTabsListener(tasks);
  }
  // if storage is empty, create it
  else {
    const tasks = [];
    const button = document.querySelector(".addTaskBtn");
    button.addEventListener("click", () => {
      displayForm(tasks);
    });
    addTabsListener(tasks);
  }

  // add event listener to the nav bar
  function addTabsListener(tasks) {
    const tabs = document.getElementsByClassName("tabs");
    for (let i = 0; i < tabs.length; i++) {
      tabs[i].addEventListener("click", () => {
        for (let j = 0; j < tabs.length; j++) {
          tabs[j].classList.remove("activeTab");
        }
        tabs[i].classList.add("activeTab");
        displayTabs(tasks);
      });
    }
  }
  // display the task in each folder
  function displayTabs(tasks) {
    const taskContainer = document.querySelector(".taskContainer");
    const folder = event.target.id;
    while (taskContainer.hasChildNodes()) {
      taskContainer.firstChild.remove();
    }
    if (folder == "all") {
      displayTasks(tasks);
    } else {
      const filteredTasks = tasks.filter((task) => task.folder == folder);
      displayTasks(filteredTasks);
    }
  }
})();
