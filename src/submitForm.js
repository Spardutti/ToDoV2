import { displayNewTask } from "./displayNewTask";

function submitForm(nameInput, dateInput, descrInput, tasks) {
  const form = document.querySelector(".form");

  class Task {
    constructor(name, date, description) {
      this.name = name;
      this.date = date;
      this.description = description;
    }
  }
  let name = nameInput.value;
  let date = dateInput.value;
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
}

export { submitForm };
