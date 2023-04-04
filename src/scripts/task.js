import { fetchTasks, sendTask, applicationState } from './dataAccess.js'

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

        <button type="button" class="btn" id="submitTask">Submit Task</button>
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
 
     if(e.target.id === "closeButton"){
     document.querySelector(".form-popup").setAttribute("hidden", "")
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