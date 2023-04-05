import { Nutshell } from "./Nutshell.js"
import { fetchMessages, fetchTasks } from "./dataAccess.js"

const dashboard = document.querySelector("#dashboard")

export const render = () => {
    fetchTasks()
    .then(
        () => {
            dashboard.innerHTML = Nutshell()
        }
    )
    fetchMessages()
    .then(() => {
            dashboard.innerHTML = Nutshell()
            
        }
    )
}

render()

dashboard.addEventListener(
    "stateChanged",
    customEvent => {
        render()
    }
)

