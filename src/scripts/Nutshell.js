import { ChatForm } from "./chatForm.js";
import { Messages } from "./chat.js";
import { taskComponent } from "./task.js"
import { ImagesCard } from "./image.js";
import { addImageForm } from "./imageForm.js"


export const Nutshell = () => {
      return `
      <article id="formButtons">
            ${addImageForm()}
      </article>
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
      <article id="images">
            ${ImagesCard()}
      </article>

      `  
      // Render all your UI components here
}