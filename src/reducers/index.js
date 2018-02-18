import { combineReducers } from 'redux';

import breedsReducer from './breedsReducer';
import breedReducer from './breedReducer';

const reducer = combineReducers({
    breedsReducer,
    breedReducer
});

export default reducer;