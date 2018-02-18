import constants from '../constants';

const breedsReducer = ( state = {}, action ) => {
    switch ( action.type ) {
        case constants.GET_BREEDS:
            return { ...state, ...action.breeds };
        default:
            return state
    }
}

export default breedsReducer;