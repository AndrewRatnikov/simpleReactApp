import constants from '../constants';

const breedReducer = ( state = {}, action ) => {
    switch (action.type) {
        case constants.SET_BREED:
            return { ...state, [action.name]: action.img };
        default:
            return state;
    }
};

export default breedReducer;