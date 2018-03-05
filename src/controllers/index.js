import store from '../store';
import { breedToStore, breedsToStoreSuccess, breedsToStoreRequest, breedsToStoreFail } from '../actions';

export const getAllBreeds = () => {
    store.dispatch( breedsToStoreRequest() );
    return fetch('https://dog.ceo/api/breeds/list/all')
        .then( response =>  response.json() )
        .then( data => store.dispatch( breedsToStoreSuccess(data.message) ) )
        .catch( error => { 
            console.error(error);
            breedsToStoreFail( error );
        });
}

export const getBreedRandomImage = ( breed, subbreed ) => {
    const breedName = subbreed ? `${subbreed} ${breed}` : breed;
    if ( subbreed ) breed = `${breed}/${subbreed}`;
    return fetch(`https://dog.ceo/api/breed/${breed}/images/random`)
        .then( response => response.json() )
        .then( data => store.dispatch( breedToStore( breedName, data.message ) ) )
        .catch( error => console.error(error) );        
}
