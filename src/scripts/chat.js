// Created by Kiersten White

import { getMessages, deleteMessage } from "./dataAccess.js";

const mainContainer = document.querySelector("#dashboard")

//Event Listener for Chat Delete Button - when it is clicked, it will take the chat associated with the chatId and ???
mainContainer.addEventListener("click", click => {
    if (click.target.id.startsWith("message--")) {
        const [,messageId] = click.target.id.split("--")
        deleteMessage(parseInt(messageId))
    }
})

export const Messages = () => {
    const messages = getMessages()

    const convertMessageToListElement = (messageObject) => {
        return `<p><strong>${messageObject.username}</strong>: ${messageObject.chatMessage}

        <button class="chatReaction" id="likeButton"> <img src="https://i.imgur.com/HS6WZjX.png" alt="like button" width="20" height="20" /> </button>
        <button class="chatReaction" id="dislikeButton"> <img src="https://i.imgur.com/p15UCJm.png" alt="dislike button" width="20" height="20" /> </button>
        <button class="deleteMessage" id="message--${messageObject.id}"> Delete </button></p>
        
        `
    }

    let html = `
        ${messages.map(convertMessageToListElement).join("")}
    `

    return html
}