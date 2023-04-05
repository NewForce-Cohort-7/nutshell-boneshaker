// import { fetchTasks, getTasks, sendTask, deleteTask, fetchCompletions, getCompletions, sendCompletion } from taskForm.js

export const applicationState = {
    messages: [],
    tasks: [],
    tasksToComplete: [],
    images:[]
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
  
  export const fetchTaskToComplete = () => {
    return fetch(`${API}/tasksToComplete`)
        .then(response => response.json())
        .then(
            (completedTasks) => {
                applicationState.tasksToComplete = completedTasks
            }
        )
  }
  
  export const getTaskToComplete = () => {
    return applicationState.tasksToComplete.map(completion => ({...completion}))
  }
  
  export const sendTaskToComplete = (completion) => {
    const fetchCompletions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(completion)
    }
    return fetch(`${API}/tasksToComplete`, fetchCompletions)
      .then(response => response.json())
      .then(() => {
          dashboard.dispatchEvent(new CustomEvent("stateChanged"))
    })
  }

  ////----------------------------------------------------------------------------------////

  // Created by Kiersten White

// Exports function that fetches Images
export const fetchImages = () => {
    return fetch(`${API}/images`)
    .then (response => response.json())
    .then (
        (Images) => {
            applicationState.images = Images
        }
    )
}

//
export const getImages = () => {
    return applicationState.images.map(image => ({...image}))
}

//
export const sendImage = (image) => {
    const fetchOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(image)
    }

    return fetch(`${API}/images`, fetchOptions)
    .then (response => response.json())
    .then (() => {
        dashboard.dispatchEvent(new CustomEvent("stateChanged"))
    })
}

// Initiates the fetch request to Delete Image Submissions
export const deleteImages = (id) => {
    return fetch(`${API}/images/${id}`, { method: "DELETE" })
        .then(
            () => {
                dashboard.dispatchEvent(new CustomEvent("stateChanged"))
            }
        )
}