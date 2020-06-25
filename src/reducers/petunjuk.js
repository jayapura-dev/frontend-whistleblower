import { FETCH_PETUNJUK } from '../actions/types';

const initialState = {
  petunjuk: [],
};

export default function (state = initialState, action){
    switch (action.type) {
        case FETCH_PETUNJUK:
            return {
                ...state,
                petunjuk: action.payload,
            };
            
        default:
            return state;
    }
}