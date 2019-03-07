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
            return {
                ...state,
                fetchingFriends: true,
            };
        case types.FETCH_SUCCESS:
            console.log("THIS IS THE FIRST STATE", action.payload)
            return {
                ...state,
                fetchingFriends: false,
                friendsFetched: true,
                friends: action.payload,
            }
        case types.FETCH_FAILURE:
            return {
                ...state,
                fetchingFriends: false,
                error: action.payload,
            }
        case types.ADDING_FRIEND:
            return {
                ...state,
                savingFriends: true,
            }
        case types.ADDING_FRIEND_SUCCESS:
            return {
                ...state,
                savingFriends: false,
                friendsSaved: true,
                friends: action.payload,
            }
        case types.ADDING_FRIEND_FAILURE:
            return {
                savingFriends: false,
                error: action.payload,
            }
        default:
            return state;
        }
    }
export default combineReducers({
    getFriends
})