
import { ChatForm } from "./chatForm.js";
import { Messages } from "./chat.js";
import { taskComponent } from "./task.js"
import { listOfEvents, eventForm } from "./event.js"

export const Nutshell = () => {
      return `
      
      <h1>Nutshell</h1>
      
      ${taskComponent()}
      <article id="chatMessages">
            <section id="chatForm">
                  <h2>Send a message!</h2>
                  ${ ChatForm()}
            </section>
            <section id="newMessages">
                  <h2>New Messages</h2>
                  ${Messages()}
            </section>
      </article>
      <section class="events">
            <h2>Events</h2>
            ${eventForm()}
            ${listOfEvents()}
      </section>`
      // Render all your UI components here
}


 
      