//Kara Hall
import { getArticle, deleteArticle, fetchArticle, applicationState,  } from "./dataAccess.js";

const dashboard = document.querySelector("#dashboard")

//Event Listener for Delete Button 
dashboard.addEventListener("click", click => {
    if (click.target.id.startsWith("article--")) {
        const [,articleId] = click.target.id.split("--")
        deleteArticle(parseInt(articleId))
    }
})

export const Article = () => {
    const article = getArticle()

    const convertArticleToListElement = (articleObject) => {
        return `<p><strong>${articleObject.title}</strong>: ${articleObject.synopsis}

        <button class="deleteArticle" id="article--${articleObject.id}"> Delete </button></p>
        
        `
    }

    let html = `
        ${article.map(convertArticleToListElement).join("")}
    `

    return html
}