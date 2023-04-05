import { ChatForm } from "./chatForm.js";
import { Messages } from "./chat.js";
import { taskComponent } from "./task.js"
import { ArticleForm }from "./articleForm.js"



export const Nutshell = () => {
      return `
      ${taskComponent()}
      <article id="chatMessages">
            <section id="chatForm">
                  <h2>Send a message!</h2>
                  ${ ChatForm()}
            </section>
            <p>
            <Section id="articleForm">
            <h2>New Articles</h2>
                  ${ ArticleForm()}
            <section id="newMessages">
                  <h2>New Messages</h2>
                  ${Messages()}
            </section>
      </article>
      `  
      // Render all your UI components here
}