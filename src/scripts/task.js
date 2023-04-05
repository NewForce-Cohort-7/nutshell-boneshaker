import { fetchTasks, sendTask, applicationState } from './dataAccess.js'
import { taskify } from './taskForm.js'

export const taskComponent = () => {
  const html = `
    <div hidden class="form-popup" id="myForm">
      <form class="form-container">
        <h1>Taskify</h1>
        <p>Create Tasks | Be Productive</p>

        <label for="taskName"><b>Task Name</b></label>
        <input type="text" id="taskName" placeholder="What should we call your new task?" name="email" required>

        <label for="dueDate"><b>Due Date</b></label>
        <input type="date" id="dueDate" placeholder="When will you finish this task?" name="psw" required>

        <div hidden class="list-popup" id="taskList">
          <form class="form-container">
            <h3>Task List</h3>

            <div class="taskCards">
            </div>
        </div>

        <button type="button" class="btn" id="submitTask">Submit Task</button>
        <button type="button" class="btn" id="viewTaskList">View Task List</button>
        <button type="button" class="btn cancel" id="closeButton">Close</button>
      </form>
    </div>

    <button class="open-button" id="openButton">Taskify It</button>
  `
  document.addEventListener("click", e => {

    if(e.target.id === "openButton"){
      document.querySelector(".form-popup").removeAttribute("hidden")
    }
   })

   document.addEventListener("click", e => {

    if(e.target.id === "viewTaskList"){
      let cardArea = document.querySelector(".taskCards")
      cardArea.innerHTML = taskify()
      document.querySelector(".list-popup").removeAttribute("hidden")
    }
   })

   document.addEventListener("click", e => {
 
     if(e.target.id === "closeButton"){
      document.querySelector(".form-popup").setAttribute("hidden", "")
      document.querySelector(".list-popup").setAttribute("hidden", "")
     }
    })

    return html
}

document.addEventListener(
  'click',
  (event) => {
      if (event.target.id === "submitTask") {
          fetchTasks()
          const taskId = (applicationState.tasks.length + 1)
          const taskName = document.querySelector("#taskName").value
          const dueDate = document.querySelector("#dueDate").value


          let dataToSendToAPI = {
              id: [taskId],
              taskName: [taskName],
              dueDate: [dueDate]
          }
          sendTask(dataToSendToAPI)
      }
  }
)