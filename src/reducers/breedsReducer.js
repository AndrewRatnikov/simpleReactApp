import constants from '../constants';

const initialState = {
    fetching: false,
    breeds: null,
    error: null
};

const breedsReducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case constants.GET_BREEDS_REQUEST:
            return { ...state, fetching: true, error: null };
        case constants.GET_BREEDS_SUCCESS:
            return { ...state, fetching: false, breeds: action.breeds };
        case constants.GET_BREEDS_FAIL:
            return { ...state, fetching: false, error: action.error };
        default:
            return state
    }
}

export default breedsReducer;