const applicationState = {
    messages: []
}

const dashboard = document.querySelector("#dashboard")
const API = "http://localhost:8088"

// Created by Kiersten White

// Exports function that fetches chat messages
export const fetchMessages = () => {
    return fetch(`${API}/messages`)
    .then (response => response.json())
    .then (
        (chatMessages) => {
            applicationState.messages = chatMessages
        }
    )
}


//
export const getMessages = () => {
    return applicationState.messages.map(message => ({...message}))
}

//
export const sendMessage = (message) => {
    const fetchOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(message)
    }

    return fetch(`${API}/messages`, fetchOptions)
    .then (response => response.json())
    .then (() => {
        dashboard.dispatchEvent(new CustomEvent("stateChanged"))
    })
}

// Initiates the fetch request to Delete submitted messages
export const deleteMessage = (id) => {
    return fetch(`${API}/messages/${id}`, { method: "DELETE" })
        .then(
            () => {
                dashboard.dispatchEvent(new CustomEvent("stateChanged"))
            }
        )
}