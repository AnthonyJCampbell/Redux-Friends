import axios from 'axios';

// ACTIONS
export const FETCHING_FRIEND = 'FETCHING_FRIEND';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_FAILURE = 'FETCH_FAILURE';
export const ADDING_FRIEND = 'ADDING_FRIEND';
export const ADDING_FRIEND_SUCCESS = 'ADDING_FRIEND_SUCCESS';
export const ADDING_FRIEND_FAILURE = 'ADDING_FRIEND_FAILURE'

const token = 'eyJ1c2VySWQiOiJiMDhmODZhZi0zNWRhLTQ4ZjItOGZhYi1jZWYzOTA0NjYwYmQifQ';

// ACTION CREATORS
export const fetchFriends = () => dispatch => {
    dispatch({ type: FETCHING_FRIEND });
    const request = axios.get(`http://localhost:5000/api/friends`, { 
        headers: {
            'Content-Type': 'application/json',
            'Authorization': token
        }})
    request.then(res =>{
            console.log(res.data)
            dispatch({type: FETCH_SUCCESS, payload: res.data.results})
        })
        .catch(err => {
            console.log("Something broke when trying to fetch your friends!")
            dispatch({ type: FETCH_FAILURE, payload: err });
        })
}

export const postFriends = (friend) => dispatch => {
    dispatch({ type: ADDING_FRIEND});
    const request = axios.post(`http://localhost:5000/api/friends`, { friend })
    request.then(res => {
            console.log(res.data)
            dispatch({ type: ADDING_FRIEND_SUCCESS, payload: res.data.results })
        })
        .catch(err => {
            console.log("Something went wrong when trying to ADD a friend!");
            dispatch({type: ADDING_FRIEND_FAILURE, payload: err})
        })
}
