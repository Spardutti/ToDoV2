import { displayNewTask } from "./displayNewTask";
import moment from "moment"

function submitForm(nameInput, dateInput, descrInput, tasks) {
  const form = document.querySelector(".form");

  class Task {
    constructor(name, date, description) {
      this.name = name;
      this.date = date;
      this.description = description;
      this.completed = false;
    }
  }
  let name = nameInput.value;
  let date = moment(dateInput.value).set({"hour": 23, "minute": 59})
  let descr = descrInput.value;
  let task = new Task(name, date, descr);
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
  console.log(task);
}

export { submitForm };
