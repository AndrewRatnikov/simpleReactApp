import store from '../store';
import { breedsToStore, breedToStore } from '../actions';

export const getAllBreeds = () => {
    return fetch('https://dog.ceo/api/breeds/list/all')
        .then( response =>  response.json() )
        .then( data => store.dispatch( breedsToStore(data.message) ) )
        .catch( error => console.error(error) );
}

export const getBreedRandomImage = ( breed, subbreed ) => {
    const breedName = subbreed ? `${subbreed} ${breed}` : breed;
    if ( subbreed ) breed = `${breed}/${subbreed}`;
    return fetch(`https://dog.ceo/api/breed/${breed}/images/random`)
        .then( response => response.json() )
        .then( data => store.dispatch( breedToStore( breedName, data.message ) ) )
        .catch( error => console.error(error) );        
}
