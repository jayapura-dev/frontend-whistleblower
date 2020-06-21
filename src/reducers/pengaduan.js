import { FETCH_PENGADUAN } from '../actions/types';

const initialState = {
  pengaduan: [],
};

export default function (state = initialState, action){
    switch (action.type) {
        case FETCH_PENGADUAN:
            return {
                ...state,
                pengaduan: action.payload,
            };
            
        default:
            return state;
    }
}