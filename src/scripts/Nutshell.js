import { ChatForm } from "./chatForm.js";
import { Messages } from "./chat.js";


export const Nutshell = () => {
      return `
      
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
      `
  
      // Render all your UI components here
}