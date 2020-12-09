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
  tasks.push(task);
  console.log(tasks);
  form.reset();
}

export { submitForm };
