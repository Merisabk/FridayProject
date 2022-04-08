'use strict'

import * as DOM from './domBreedImage.js';

// RandomBreedImage
const showRandomBreedImage = (breed) => {
    axios.get(`https://dog.ceo/api/breed/${breed}/images/random`)
        .then(response => {
        console.log(response);
        console.log(response.data);
        DOM.outputRandomBreedImage.src = response.data.message;
        }).catch((err) => {
        console.log(err);
    });
}

DOM.buttonNewRandomDogImage.onclick = () => {
    showRandomBreedImage(DOM.inputChooseBreed.value);
}

// RandomDogImage
const showRandomDog = () => {
    axios.get(`https://dog.ceo/api/breeds/image/random`)
        .then(response => {
        console.log(response);
        DOM.outputRandomBreedImage.src = response.data.message;
        }).catch((err) => {
        console.log(err);
    });
}
showRandomDog();