export const getAllBreeds = () => {
    return fetch('https://dog.ceo/api/breeds/list/all')
        .then( response =>  response.json() )
        .catch( error => console.error(error) );
}

export const getBreedRandomImage = ( breed, subbreed ) => {
    if ( subbreed ) breed = `${breed}/${subbreed}`
    return fetch(`https://dog.ceo/api/breed/${breed}/images/random`)
        .then( response => response.json() )
        .catch( error => console.error(error) );        
}
