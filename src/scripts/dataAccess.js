const mainContainer = document.querySelector("#dashboard")
const applicationState = {
     events : [],
}
const API = "http://localhost:8088"
export const fetchEvents = () => {
    return fetch(`${API}/events`)
        .then(response => response.json())
        .then(
            (eventInput) => {
                // Store the external state in application state
                applicationState.events = eventInput
            }
        )
}
export const getEvents = () => {
    return applicationState.events.map(events => ({ ...events}))
}
export const saveEvent = (userEventRequest) => {

body: JSON.stringify(userEventRequest)

return fetch(`${API}/events`, fetchOptions)
    .then(response => response.json())
    .then(() => {
        mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
    })
 }
// export const saveCompletion = (completionObject) => {
// const fetchOptions = {
//     method: "POST",
//     headers: {
//         "Content-Type": "application/json"
//     },
//     body: JSON.stringify(completionObject)
// }
// //sends saveCompletion object to the API-JSON database
// return fetch(`${API}/completions`, fetchOptions)
//     .then(response => response.json())
//     .then(() => {
//         mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
//     })}

const dashboard = document.querySelector("#dashboard")

export const deleteEvent = (id) => {
    return fetch(`${API}/events/${id}`, { method: "DELETE" })
    .then(
        () => {
            mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
        }
        )
    }
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

    //
    export const getMessages = () => {
        return applicationState.messages.map(message => ({...message}))
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
export const deleteMessage = (id) => {
    return fetch(`${API}/messages/${id}`, { method: "DELETE" })
        .then(
            () => {
                dashboard.dispatchEvent(new CustomEvent("stateChanged"))
            }
        )
}
