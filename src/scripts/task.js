

export const taskComponent = () => {
  const html = `
    <button class="open-button" id="openButton">Open Form</button>

    <div hidden class="form-popup" id="myForm">
      <form class="form-container">
        <h1>Login</h1>

        <label for="email"><b>Email</b></label>
        <input type="text" placeholder="Enter Email" name="email" required>

        <label for="psw"><b>Password</b></label>
        <input type="password" placeholder="Enter Password" name="psw" required>

        <button type="submit" class="btn">Login</button>
        <button type="button" class="btn cancel" id="closeButton">Close</button>
      </form>
    </div>
  `
  document.addEventListener("click", e => {

    if(e.target.id === "openButton"){
    document.querySelector(".form-popup").removeAttribute("hidden")
    }
   })
   
   document.addEventListener("click", e => {
 
     if(e.target.id === "closeButton"){
     document.querySelector(".form-popup").setAttribute("hidden", "")
     }
    })

    return html
}
