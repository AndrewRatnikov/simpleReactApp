import axios from 'axios';
import { takeLatest, call, put } from 'redux-saga/effects';

import store from '../store';
import constants from '../constants';
import { breedToStore, } from '../actions';

export const getBreedRandomImage = ( breed, subbreed ) => {
    const breedName = subbreed ? `${subbreed} ${breed}` : breed;
    if ( subbreed ) breed = `${breed}/${subbreed}`;
    return fetch(`https://dog.ceo/api/breed/${breed}/images/random`)
        .then( response => response.json() )
        .then( data => store.dispatch( breedToStore( breedName, data.message ) ) )
        .catch( error => console.error(error) );        
}

function fetchDog () {
    return axios({
        method: 'get',
        url: 'https://dog.ceo/api/breeds/list/all'
    });
}

export function* breedsSaga () {
    yield takeLatest( constants.GET_BREEDS_REQUEST, breedsFetchSaga );
}

function* breedsFetchSaga () {
    try {
        const response = yield call(fetchDog);
        const breeds = response.data.message;
        console.log('redux saga', breeds);
        yield put({ type: constants.GET_BREEDS_SUCCESS, breeds });
    } catch (error) {
        console.error(error);
        yield put({ type: constants.GET_BREEDS_FAIL, error });
    }
}