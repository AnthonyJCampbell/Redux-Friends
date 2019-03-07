import axios from 'axios';

// ACTIONS
export const FETCHING = 'FETCHING';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_FAILURE = 'FETCH_FAILURE';

// ACTION CREATORS
export const fetchFriendds = () => dispatch => {
    dispatch({ type: FETCHING });
    axios.get(``)
        .then(res =>{
            dispatch({type: FETCH_SUCCESS, payload: res.data.results})
        })
        .catch(err => {
            console.log("Something broke when trying to fetch your friends!")
            dispatch({ type: FETCH_FAILURE, payload: err });
        })
}