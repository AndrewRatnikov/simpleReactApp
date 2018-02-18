import constans from '../constants';

export const breedsToStore = breeds => ({
    type: constans.GET_BREEDS,
    breeds
});

export const breedToStore = ( name, img ) => ({
    type: constans.SET_BREED,
    name,
    img
})