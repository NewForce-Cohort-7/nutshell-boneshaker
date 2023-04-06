// Created by Kiersten White

import { sendImage } from "./dataAccess.js"

export const addImageForm = () => {
    const html = `
      <div hidden class="image-form-popup" id="imageForm">
        <form class="form-container">
          <h1>Add a photo!</h1>
          <p>Save your favorite photos from the web!</p>
  
          <label for="imageName"><b>Image Name:</b></label>
          <input type="text" name="imageName" placeholder="Switzerland in Summer">
  
          <label for="imageDescription"><b>Image Description:</b></label>
          <input type="text" name="imageDescription" placeholder="My friends and I jumping on a mountain">

          <label for="imageURL"><b>Image Link:</b></label>
          <input type="url" name="imageURL" placeholder="images.com/switzerlandphoto34">
  
          <button type="button" class="btn" id="addImage">Add Image</button>
          <button type="button" class="btn cancel" id="closeButton">Close</button>
        </form>
      </div>
  
      <button class="image-open-button" id="openImageButton">Add Photo</button>
    `
        return html
    }

    document.addEventListener("click", e => {

        if(e.target.id === "openImageButton"){
          document.querySelector(".image-form-popup").removeAttribute("hidden")
        }
       
    })
    
    document.addEventListener("click", e => {
     
        if(e.target.id === "addImage"){

            const imageName = document.querySelector("input[name='imageName']").value
            const imageDescription = document.querySelector("input[name='imageDescription']").value
            const imageURL = document.querySelector("input[name='imageURL']").value

            if (imageName === "" || imageDescription === "" || imageURL === "") {
                alert("This is a required field!")
            } else {
                    document.querySelector(".image-form-popup").setAttribute("hidden", "")

                    const dataToSendToAPI = {
                        imageName: imageName,
                        imageDescription: imageDescription,
                        imageURL: imageURL,
                    }

                sendImage(dataToSendToAPI)

            }
        }
        })

        document.addEventListener("click", e => {
 
            if(e.target.id === "closeButton"){
             document.querySelector(".image-form-popup").setAttribute("hidden", "")
            }
           })