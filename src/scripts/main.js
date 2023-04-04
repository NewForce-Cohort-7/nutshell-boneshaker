import { Nutshell } from "./Nutshell.js"
import { fetchTasks } from "./dataAccess.js"

export const dashboard = document.querySelector("#dashboard")

export const render = () => {
    fetchTasks()
    .then(() => {
            dashboard.innerHTML = Nutshell()
            
        }
    )
}

render()