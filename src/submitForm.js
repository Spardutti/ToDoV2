import { displayNewTask } from "./displayNewTask";
import moment from "moment"

function submitForm(nameInput, dateInput, folderSelect, tasks) {
  const form = document.querySelector(".form");

  class Task {
    constructor(name, date, folder) {
      this.name = name;
      this.date = date;
      this.folder = folder;
      this.completed = false;
    }
  }
  let name = nameInput.value;
  let date = moment(dateInput.value).set({"hour": 23, "minute": 59})
  let folder = folderSelect.value;
  let task = new Task(name, date, folder);
  let found = false;
  tasks.forEach((e) => {
    //check duplicate
    if (e.name == name) {
      alert("Name is taken");
      found = true;
    }
  });
  if (name != "" && date != "" && found == false) {
    //add the task to the array and localStorage.
    tasks.push(task);
    localStorage.setItem("tasks", JSON.stringify(tasks));
    displayNewTask(task, tasks);

    form.reset();
  }
}

export { submitForm };
