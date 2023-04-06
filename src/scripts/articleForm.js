//Author: Kara Hall
import { saveArticle, applicationState } from "./dataAccess.js";

export const ArticleForm = () => {
    let html = `

    <div hidden class="article-form-popup" id="articleForm">
      <form class="form-container">
        <h1>New Article</h1>
        <p>Be a journalist!</p>

        <label for="title"><b>Title:</b></label>
        <input type="text" id="title" placeholder="Input your title...">

        <label for="synopsis"><b>Synopsis</b></label>
        <input type="text" id="synopsis" placeholder="Begin typing your synopsis here...">
        <label for="url"><b>URL</b></label>
        <input type="text" id="url" placeholder="URL...">
        
        <button type="button" class="btn" id="saveArticle">Save Article</button>
        <button type="button" class="btn cancel" id="closeButton">Close</button>
        </form>
                    </div>
        <button class="article-open-button" id="openArticleButton">Add Article</button>

     `
     
    return html
}
// dashboard variable targets the <article id="dashboard"> in index.html
const dashboard = document.querySelector("#dashboard")

document.addEventListener("click", e => {

    if(e.target.id === "openArticleButton"){
      document.querySelector(".article-form-popup").removeAttribute("hidden")
    }
   
})

// Listens for the Save Article button to be clicked, takes the data and sends that data to be stored in the API
    dashboard.addEventListener("click", clickEvent => {
        if (clickEvent.target.id === "saveArticle") {
            
            const title = document.querySelector("#title").value
            const synopsis = document.querySelector("#synopsis").value
            const url = document.querySelector("#url").value
            const currentDate = new Date();
            const timestamp = currentDate.getTime();

            if (title === "" || synopsis === "" || url === "") {
                alert("This is a required field!")
            } else {
                    document.querySelector(".article-form-popup").setAttribute("hidden", "")


                const dataToSendToAPI = {
                    title: [title],
                    synopsis: [synopsis],
                    url: [url],
                    timestamp: [timestamp]
                }

            saveArticle(dataToSendToAPI)

    }
}})

document.addEventListener("click", e => {
 
    if(e.target.id === "closeButton"){
     document.querySelector(".article-form-popup").setAttribute("hidden", "")
    }
   })


