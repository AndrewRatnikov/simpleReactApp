import axios from 'axios';
import { takeEvery, call, put } from 'redux-saga/effects';

import constants from '../constants';

function fetchDog  (breed ) {
    return axios({
        method: 'get',
        url: `https://dog.ceo/api/breed/${breed}/images/random`
    });
}

function* breedFetchSaga ( data ) {
    const breed = data.subbreed ? `${data.breed}/${data.subbreed}` : data.breed;
    const breedName = data.subbreed ? `${data.subbreed} ${data.breed}` : data.breed
    try {
        const response = yield call( fetchDog.bind( {}, breed ) );
        const breedImg = response.data.message;
        if ( response.data.status === 'error' ) throw new Error( breedImg );
        yield put({ type: constants.SET_BREED_SUCCESS, name: breedName, url: breedImg });
    } catch (error) {
        console.error(error);
        yield put({ type: constants.SET_BREED_FAIL, error });
    }
}

function fetchDogs () {
    return axios({
        method: 'get',
        url: 'https://dog.ceo/api/breeds/list/all'
    });
}

function* breedsFetchSaga () {
    try {
        const response = yield call(fetchDogs);
        const breeds = response.data.message;
        yield put({ type: constants.GET_BREEDS_SUCCESS, breeds });
    } catch (error) {
        console.error(error);
        yield put({ type: constants.GET_BREEDS_FAIL, error });
    }
}

export function* breedsSaga () {
    yield takeEvery( constants.GET_BREEDS_REQUEST, breedsFetchSaga );
    yield takeEvery( constants.SET_BREED_REQUEST, breedFetchSaga );
}