'use strict'

import * as DOM from './domListOfAllBreeds.js'

const listDogs = () => {
    axios.get(`https://dog.ceo/api/breeds/list/all`)
    .then(response => {
        for (let breed of Object.keys(response)) {
        childToContainer(imageToChild(nameToImage(breed)));
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

const imageToChild = image => {
    const child = document.createElement(`img`);
    child.width = "128";
    child.height= "128";
    child.src = image;
    return child;
}

const childToContainer = child => {
    DOM.outputListOfAllBreeds.appendChild(child);
}

