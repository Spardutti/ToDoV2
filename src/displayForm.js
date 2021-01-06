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
  description.innerHTML = "Folder";

  //creates the dropdown list to specify the folder to add the task
  let folderSelect = document.createElement("select");
  folderSelect.setAttribute("class", "folderList");

  let allFolder = document.createElement("option");
  allFolder.setAttribute("value", "all");
  allFolder.innerHTML = "All";

  let homeFolder = document.createElement("option");
  homeFolder.innerHTML = "Home";
  homeFolder.setAttribute("value", "home");

  let workFolder = document.createElement("option");
  workFolder.innerHTML = "Work";
  workFolder.setAttribute("value", "work");

  let etcFolder = document.createElement("option");
  etcFolder.innerHTML = "Etc";
  etcFolder.setAttribute("value", "etc");

  folderSelect.append(allFolder, homeFolder, workFolder, etcFolder);


  let x = document.createElement("p");
  x.innerHTML = "X";
  x.setAttribute("class", "xFormClose");
  x.addEventListener("click",() => {
    list.removeChild(formContainer);
    addTaskBtn.classList.add("visible");

  })

  let submitTaskBtn = document.createElement("button");
  submitTaskBtn.innerHTML = "Add Task";
  submitTaskBtn.setAttribute("id", "submitTaskBtn");
  submitTaskBtn.setAttribute("type", "button");
  submitTaskBtn.addEventListener("click", () => {
    if(nameInput.value != "" && dateInput.value != ""){
 //submit form and create the objects with the class
 submitForm(nameInput, dateInput, folderSelect, tasks);
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
    folderSelect,
    submitTaskBtn,
    x
  );
  list.appendChild(formContainer);
}

export { displayForm };
