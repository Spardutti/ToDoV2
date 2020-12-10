import { submitForm } from "./submitForm";

function displayForm(tasks) {
  //get the list and button
  const list = document.querySelector(".list");
  let addTaskBtn = document.querySelector(".addTaskBtn");
  addTaskBtn.classList.remove("visible");
  addTaskBtn.classList.add("hidden");

  //create the form
  let formContainer = document.createElement("form");
  formContainer.classList.add("form");

  let taskName = document.createElement("label");
  taskName.innerHTML = "Name";

  let nameInput = document.createElement("input");
  nameInput.placeholder = "Name...";

  
  let date = document.createElement("label");
  date.innerHTML = "Due Date";

  let dateInput = document.createElement("input");
  dateInput.setAttribute("type", "date");

  let description = document.createElement("label");
  description.innerHTML = "Description";

  let descriptionInput = document.createElement("textarea");
  descriptionInput.placeholder = "Enter a brief description...";

  let submitTaskBtn = document.createElement("button");
  submitTaskBtn.innerHTML = "Add Task";
  submitTaskBtn.setAttribute("id", "submitTaskBtn");
  submitTaskBtn.setAttribute("type", "button");
  submitTaskBtn.addEventListener("click", () => {
    if(nameInput.value != "" && dateInput.value != ""){
 //submit form and create the objects with the class
 submitForm(nameInput, dateInput, descriptionInput, tasks);
 list.removeChild(formContainer);
 addTaskBtn.classList.add("visible");
    }
    else {
      alert("Please fill all the fields");
    }
   
  });

  formContainer.append(
    taskName,
    nameInput,
    date,
    dateInput,
    description,
    descriptionInput,
    submitTaskBtn
  );
  list.appendChild(formContainer);
}

export { displayForm };
