import axios from 'axios';

export const FETCH_START = "FETCH_START";
export const FETCH_SUCCESS = "FETCH_SUCCESS";

export const getCharacters = () => {
    return( dispatch => {
        dispatch(fetchStart());
        axios.get('https://api.got.show/api/show/characters/')
        .then(res =>{
         dispatch(fetchSuccess(res.data))
        })
    })
}

export const fetchStart = () => {
    return({type: FETCH_START});
}

export const fetchSuccess = (characters) => {
    return({type: FETCH_SUCCESS, payload: characters});
}