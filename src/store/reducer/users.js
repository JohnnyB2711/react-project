import {
    SET_USERS_FAIL,
    GET_USERS_REQUEST,
    SET_USERS_SUCCESS
} from "../actions/users";

const initialState = {
    data: [],
    isLoading: false,
    error: "",
};

export function usersReducer(state = initialState, action) {
    switch (action.type) {
        case GET_USERS_REQUEST:
            return {...state, isLoading: true, error: ''};
        case SET_USERS_SUCCESS:
            return {...state, isLoading: false, data: action.payload};
        case SET_USERS_FAIL:
            return {...state, isLoading: false, error: action.payload};
        default:
            return state
    }
}