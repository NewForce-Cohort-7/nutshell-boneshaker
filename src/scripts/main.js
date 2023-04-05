import { Nutshell } from "./Nutshell.js"
import { fetchMessages, fetchTasks, fetchArticle, fetchImages } from "./dataAccess.js"

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
    fetchArticle() 
    .then(
         () => {
                dashboard.innerHTML = Nutshell()
       } 
    )
    fetchImages() 
    .then(
         () => {
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

