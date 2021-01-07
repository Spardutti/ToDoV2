import { submitForm } from './submitForm'

function displayForm (tasks) {
  // get the list and button
  const list = document.querySelector('.list')
  const addTaskBtn = document.querySelector('.addTaskBtn')
  addTaskBtn.classList.remove('visible')
  addTaskBtn.classList.add('hidden')

  // create the form
  const formContainer = document.createElement('form')
  formContainer.classList.add('form')

  const taskName = document.createElement('label')
  taskName.innerHTML = 'Name'

  const nameInput = document.createElement('input')
  nameInput.placeholder = 'Name...'

  const date = document.createElement('label')
  date.innerHTML = 'Due Date'

  const dateInput = document.createElement('input')
  dateInput.setAttribute('type', 'date')

  const description = document.createElement('label')
  description.innerHTML = 'Folder'

  // creates the dropdown list to specify the folder to add the task
  const folderSelect = document.createElement('select')
  folderSelect.setAttribute('class', 'folderList')

  const allFolder = document.createElement('option')
  allFolder.setAttribute('value', 'all')
  allFolder.innerHTML = 'All'

  const homeFolder = document.createElement('option')
  homeFolder.innerHTML = 'Home'
  homeFolder.setAttribute('value', 'home')

  const workFolder = document.createElement('option')
  workFolder.innerHTML = 'Work'
  workFolder.setAttribute('value', 'work')

  const etcFolder = document.createElement('option')
  etcFolder.innerHTML = 'Etc'
  etcFolder.setAttribute('value', 'etc')

  folderSelect.append(allFolder, homeFolder, workFolder, etcFolder)

  // X to close the form/cancel
  const x = document.createElement('p')
  x.innerHTML = 'X'
  x.setAttribute('class', 'xFormClose')
  x.addEventListener('click', () => {
    list.removeChild(formContainer)
    addTaskBtn.classList.add('visible')
  })

  const submitTaskBtn = document.createElement('button')
  submitTaskBtn.innerHTML = 'Add Task'
  submitTaskBtn.setAttribute('id', 'submitTaskBtn')
  submitTaskBtn.setAttribute('type', 'button')
  submitTaskBtn.addEventListener('click', () => {
    if (nameInput.value != '' && dateInput.value != '') {
      // submit form and create the objects with the class
      submitForm(nameInput, dateInput, folderSelect, tasks)
      list.removeChild(formContainer)
      addTaskBtn.classList.add('visible')
    } else {
      alert('Please fill all the fields')
    }
  })

  formContainer.append(
    taskName,
    nameInput,
    date,
    dateInput,
    description,
    folderSelect,
    submitTaskBtn,
    x
  )
  list.appendChild(formContainer)
}

export { displayForm }
