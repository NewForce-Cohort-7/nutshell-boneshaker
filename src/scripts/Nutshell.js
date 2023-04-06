
import { ChatForm } from "./chatForm.js";
import { Messages } from "./chat.js";
import { taskComponent } from "./task.js"
import { ArticleForm }from "./articleForm.js"
import { Article } from "./article.js"
import { addImageForm } from "./imageForm.js";
import { ImagesCard } from "./image.js";
import { Navbar } from "./navbar.js";
import { eventForm } from "./event.js";



export const Nutshell = () => {
      return `
      ${Navbar()}
            <div class="d-flex flex-row">
                  <div class="col-2">
                  ${ ArticleForm()}
                  ${ eventForm()}
                  ${taskComponent()}
                  ${addImageForm()}
                  </div>
                  <div class="col-3">
                  ${events()}
                        Tasks Print Function Go Here
                  </div>
                  <div class="col-3">
                  ${ Article()}
                  </div>
                  <div class="col-3">
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
                  </div>
            </div>
            <div class="row">
                  ${ImagesCard()}
            </div>
      `
}


 
      