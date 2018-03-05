import constans from '../constants';

export const breedsToStore = breeds => ({
    type: constans.GET_BREEDS,
    breeds
});

export const breedsToStoreRequest = () => ({
    type: constans.GET_BREEDS_REQUEST
});

export const breedsToStoreSuccess = breeds => ({
    type: constans.GET_BREEDS_SUCCESS,
    breeds
});

export const breedsToStoreFail = error => ({
    type: constans.GET_BREEDS_FAIL,
    error
});

export const breedToStore = ( name, img ) => ({
    type: constans.SET_BREED,
    name,
    img
})