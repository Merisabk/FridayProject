'use strict'

import * as DOM from './domBreedImage.js';

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