import { Nutshell } from "./Nutshell.js"
import { fetchMessages } from "./dataacess.js"

const dashboard = document.querySelector("#dashboard")

const render = () => {
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