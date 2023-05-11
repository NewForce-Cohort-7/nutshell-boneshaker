import { getTasks, deleteTask, sendTaskToComplete } from './dataAccess.js'

const toLi = (objectOrArray) => {
  let listItems = []
  for (let indexValue of objectOrArray.taskName) {
    let value = `<li><b>${indexValue}</b></li>`
    listItems.push(value)
  }
  for (let indexValue of objectOrArray.dueDate) {
    let value = `Due By: ${indexValue}<br>`
    listItems.push(value)
  }
  listItems.push(`
  <label for="completed">Completed?</label>
  <input type="checkbox" name="completed" value="" class="checkIt" id="taskComplete--${objectOrArray.id}" onclick="this.value=this.checked?'checked':'unchecked';">
  `)
  return listItems.join('')
}

export const taskify = () => {
  const tasks = getTasks()


  if (tasks.length >= 1) {
    let html = `
        You got this!
        <ol>
            ${
                tasks.map(toLi).join("")
              }
        </ol>
    `
    return html
  } else {
    return "Well, this is boring... Let's Start A Task! &uarr;"
  }
}

// document.addEventListener("change", e => {
//     if (e.target.id.startsWith("taskComplete--")) {
//         const [,targetId] = e.target.id.split("--")
//         deleteTask(parseInt(targetId))
//     }
// })
