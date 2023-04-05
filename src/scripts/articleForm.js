import { saveArticle } from "./dataAccess.js";

export const ArticleForm = () => {
    let html = `
    <button id="new-article-button">New Article</button>



<form id="article-form">
    <label for="title">Title:</label>
    <input type="text" id="title" name="articleTitle" required>

    <label for="synopsis">Synopsis:</label>
    <textarea id="synopsis" name="articleSynopsis" required></textarea>

    <label for="url">URL:</label>
    <input type="text" id="url" name="articleUrl" required>

    <button class="article__save" id="saveArticle">Save Article</button>
 </form>

     `
     
    return html
}
// dashboard variable targets the <article id="dashboard"> in index.html
const dashboard = document.querySelector("#dashboard")

// Listens for the Save Article button to be clicked, takes the data and sends that data to be stored in the API
dashboard.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "saveArticle") {
        
        const articleTitle = document.querySelector("#title").value
        const articleSynopsis = document.querySelector("#synopsis").value
        const articleUrl = document.querySelector("#url").value

        const dataToSendToAPI = {
            title: [articleTitle],
            synopsis: [articleSynopsis],
            url: [articleUrl]
        }

        saveArticle(dataToSendToAPI)

    }
})


