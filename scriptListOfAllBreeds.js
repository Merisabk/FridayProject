'use strict'

import * as DOM from './domListOfAllBreeds.js'

const listDogs = () => {
    axios.get(`https://dog.ceo/api/breeds/list/all`)
    .then(response => {
        for (let breed of Object.keys(response)) {
            console.log(response);
            console.log(response.data);
        childToContainer(breedToFigure(breed));
        }
      }).catch((err) => {
        console.log(err);
      });
}

const nameToImage = (breedName) => {
    axios.get(`https://dog.ceo/api/breeds/${breedName}/image/random`)
        .then(response => {
        console.log(response);
        return response.data.message;
        }).catch((err) => {
        console.log(err);
    });
}

const breedToFigure = (breed) => {
    const figureContainer = document.createElement(`figure`);
    figureContainer.innerHTML = `${imageToContainer(nameToImage(breed))}${breedNameToContainer(breed)}`
    return figureContainer;
}

const imageToContainer = image => {
    const imageContainer = document.createElement(`img`);
    imageContainer.width = "128";
    imageContainer.height= "128";
    imageContainer.src = image;
    return imageContainer;
}

const breedNameToContainer = breed => {
    const breedNameContainer = document.createElement(`figcaption`);
    breedNameContainer.innerHTML = `${breed}`;
    return breedNameContainer;
}

const childToContainer = child => {
    DOM.outputListOfAllBreeds.appendChild(child);
}

listDogs();