// Created by Kiersten White

import { sendMessage } from "./dataacess.js" //needs to change to dataAccess.js before being pushed up

// Creates data for the Chat Form area, including some HTML styling using Bootstrap
export const ChatForm = () => {
    let html = `
        <div class="mb-3">
            <label for="username" class="form-label">Username:</label>
            <input type="text" name="username" class="form-control" placeholder="purplemonkey34">
        </div>
        <div class="mb-3">
            <label for="chatMessage" class="form-label">Type your message here:</label>
            <input type="text" name="chatMessage" class="form-control" placeholder="What r u doing 2nite xD">
        </div>
        <button class="button" id="submitMessage">Send Message</button>
    `
    return html
}

// dashboard variable targets the <article id="dashboard"> in index.html
const dashboard = document.querySelector("#dashboard")

// Listens for the Submit Message button to be clicked, takes the data (in this case username and each message), and sends that data to be stored in the API
dashboard.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "submitMessage") {
        
        const username = document.querySelector("input[name='username']").value
        const chatMessage = document.querySelector("input[name='chatMessage']").value

        const dataToSendToAPI = {
            username: username,
            chatMessage: chatMessage,
        }

        sendMessage(dataToSendToAPI)

    }
})


// Preproposal on 4/14 - one paragraph (3-4 sentences) - Slack them to all instructors(Sarah, Tommy, Jordan, Barry)
// Character Tracker with randomizers?