'use strict'

import * as DOM from './dom.js'

// RandomDogImage
const showRandomDog = () => {
    axios.get(`https://dog.ceo/api/breeds/image/random`)
        .then(response => {
        console.log(response);
        DOM.outputRandomDogImage.src = response.data.message;
        }).catch((err) => {
        console.log(err);
    });
}
showRandomDog();

DOM.buttonNewRandomDogImage.onclick = () => showRandomDog();
