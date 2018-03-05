import constans from '../constants';

export const breedToStore = ( name, img ) => ({
    type: constans.SET_BREED,
    name,
    img
})