const applicationState = {
    messages: [],
    articles: []
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
export const getArticle = () => {
    return applicationState.articles.map(article => ({...article}))
}

export const sendArticle = (article) => {
    const fetchOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(article)
    }

    return fetch(`${API}/articles`, fetchOptions)
    .then (response => response.json())
    .then (() => {
        dashboard.dispatchEvent(new CustomEvent("stateChanged"))
    })
}

// Exports function that fetches new articles
export const fetchArticles = () => {
    return fetch(`${API}/articles`)
    .then (response => response.json())
    .then (
        (newArticles) => {
            applicationState.articles = newArticles
        }
    )
}



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
export const deleteArticle = (id) => {
    return fetch(`${API}/articles/${id}`, { method: "DELETE" })
        .then(
            () => {
                dashboard.dispatchEvent(new CustomEvent("stateChanged"))
            }
        )
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