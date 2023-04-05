import { ChatForm } from "./chatForm.js";
import { Messages } from "./chat.js";
import { taskComponent } from "./task.js"
import { ArticleForm }from "./articleForm.js"
import { Article } from "./article.js"
import { addImageForm } from "./imageForm.js";
import { ImagesCard } from "./image.js";



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
            <p>
            <section id="articleForm">
            <h2>New Articles</h2>
                  ${ ArticleForm()}
            </section>
            <section id="currentArticles">
            <h2>Article Feed</h2>
                  ${ Article()}
            </section>
            <p>
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