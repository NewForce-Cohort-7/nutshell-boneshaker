// Created by Kiersten White

import { getImages, deleteImages } from "./dataAccess.js";

const mainContainer = document.querySelector("#dashboard")

//Event Listener for Image Delete Button - when it is clicked... ??
mainContainer.addEventListener("click", click => {
    if (click.target.id.startsWith("deleteImage--")) {
        const [,imageId] = click.target.id.split("--")
        deleteImages(parseInt(imageId))
    }
})


export const ImagesCard = () => {
    const images = getImages()

    const convertImageToCard = (imageObject) => {
        return `
        <div class="card" style="width: 18rem;">
            <img class="card-img-top" src="${imageObject.imageURL}" alt="${imageObject.imageName}">
        <div class="card-body">
            <h5 class="card-title">${imageObject.imageName}</h5>
            <p class="card-text">${imageObject.imageDescription}</p>
            <a href="#" class="btn btn-primary" id="deleteImage--${imageObject.id}">Delete Image</a>
        </div>
    </div>
    
        `
    }

    let html = `
        ${images.map(convertImageToCard).join("")}
    `

    return html
}