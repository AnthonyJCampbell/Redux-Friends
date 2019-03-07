import * as types from './../actions/actions';
import { combineReducers } from 'redux';

const initialState = {
    fetchingFriends: false,
    friendsFetched: false,
    friendsSaved: false,
    savingFriends: false,
    updatingFriend: false,
    friendUpdated: false,
    deletingFriend: false,
    friendDeleted: false,
    friends: [],
    error: null
}

export const getFriends = (state = initialState, action) => {
    switch(action.type) {
        case types.FETCHING_FRIEND:
            return console.log('FETCHING')
        default:
            return state;
        }
    }
    
export const addFriends = (state = initialState, action) => {
    switch(action.type) {
        default:
        return state;
    }
}
export default combineReducers({
    getFriends, addFriends
})