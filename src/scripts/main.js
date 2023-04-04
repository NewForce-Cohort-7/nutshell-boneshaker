import { Nutshell } from "./Nutshell.js"
import { fetchEvents } from "./dataaccess.js"

const dashboard = document.querySelector("#dashboard")

const render = () => {

    fetchEvents()
    .then(
        () => {
            dashboard.innerHTML = Nutshell()
            
        }
    )
}


render()
dashboard.addEventListener(
    "stateChanged", () => {
        render()
    }
)


dashboard.addEventListener(
    "saveEvent",
    () => {
        render()
    }
)



