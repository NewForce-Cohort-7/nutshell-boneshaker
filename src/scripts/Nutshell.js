
import { listOfEvents, eventForm } from "./event.js"

export const Nutshell = () => {
      return `

      <h1>Nutshell</h1>

     
      <section class="events">
            <h2>Events</h2>
            ${eventForm()}
            ${listOfEvents()}
      </section>`
      // Render all your UI components here
}

