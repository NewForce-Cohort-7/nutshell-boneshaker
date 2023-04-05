import { sendArticle } from "./dataAccess.js";

export const ArticleForm = () => {
    let html = `
    <button id="new-article-button">New Article</button>

<script>
  const newArticleButton = document.getElementById('new-article-button');
  newArticleButton.addEventListener('click', showArticleForm);
</script>

<form id="article-form">
    <label for="title">Title:</label>
    <input type="text" id="title" name="title" required>

    <label for="synopsis">Synopsis:</label>
    <textarea id="synopsis" name="synopsis" required></textarea>

    <label for="url">URL:</label>
    <input type="text" id="url" name="url" required>

    <button type="submit">Save Article</button>
 </form>

     `
     
    return html
}
const dashboard = document.querySelector("#dashboard")

 const articleForm = document.getElementById('article-form');
     articleForm.addEventListener('submit', saveArticle);

     function saveArticle(event) {
        event.preventDefault();
  
        const title = document.getElementById('title').value;
        const synopsis = document.getElementById('synopsis').value;
        const url = document.getElementById('url').value;
        const timestamp = new Date().getTime();
      
        const dataToSendToAPI = {
            title: title,
            synopsis: synopsis,
            url: url,
            timestamp: timestamp
        }
        // Send the data to the API for permanent storage
            sendArticle(dataToSendToAPI)
    
        }
    




