import { FETCH_CHARACTERS_SUCCESS, FETCH_CHARACTERS_START } from '../actions'

const initialState = {
    characters: [],
}

export const reducer = (state = initialState, action) => {
    switch(action.type){
        case FETCH_CHARACTERS_START:
            return{
                ...state,
            }
        case FETCH_CHARACTERS_SUCCESS:
            return {
                ...state,
                characters: action.payload,
            };
    default:
        return state;
    }
}