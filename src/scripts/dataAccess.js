// import { fetchTasks, getTasks, sendTask, deleteTask, fetchCompletions, getCompletions, sendCompletion } from taskForm.js

export const applicationState = {
    messages: [],
    tasks: []
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


//// Task Functions ////


export const fetchTasks = () => {
    return fetch(`${API}/tasks`)
        .then(response => response.json())
        .then(
            (allTasks) => {
                // Store the external state in application state
                applicationState.tasks = allTasks
            }
        )
  }
  
  export const getTasks = () => {
  return applicationState.tasks.map(task => ({...task}))
  }
  
  export const sendTask = (newTask) => {
  const fetchOptions = {
      method: "POST",
      headers: {
          "Content-Type": "application/json"
      },
      body: JSON.stringify(newTask)
  }
  return fetch(`${API}/tasks`, fetchOptions)
    .then(response => response.json())
    .then(() => {
        dashboard.dispatchEvent(new CustomEvent("stateChanged"))
  })
  }
  
  export const deleteTask = (id) => {
    return fetch(`${API}/tasks/${id}`, { method: "DELETE" })
        .then(
            () => {
                dashboard.dispatchEvent(new CustomEvent("stateChanged"))
            }
        )
  }
  
  // Completions functions: fetchCompletions, getCompletions, sendCompletion
  
  export const fetchCompletions = () => {
    return fetch(`${API}/completions`)
        .then(response => response.json())
        .then(
            (completedTasks) => {
                applicationState.Completions = completedTasks
            }
        )
  }
  
  export const getCompletions = () => {
    return applicationState.completions.map(completion => ({...completion}))
  }
  
  export const sendCompletion = (completion) => {
    const fetchCompletions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(completion)
    }
    return fetch(`${API}/completions`, fetchCompletions)
      .then(response => response.json())
      .then(() => {
          dashboard.dispatchEvent(new CustomEvent("stateChanged"))
    })
  }

  ////----------------------------------------------------------------------------------////