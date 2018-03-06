import constants from '../constants';

const initialState = {
    fetching: false,
    breed: null,
    error: null
};

const breedReducer = ( state = initialState, action ) => {
    switch (action.type) {
        case constants.SET_BREED_REQUEST:
            return { ...state, fetching: true, error: null };
        case constants.SET_BREED_SUCCESS:
            return { ...state, fetching: false, breed: { name: action.name, url: action.url } };
        case constants.SET_BREED_FAIL:
            return { ...state, fetching: false, error: action.error };
        default:
            return state;
    }
};

export default breedReducer;